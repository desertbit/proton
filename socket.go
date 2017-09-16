/*
 *  Proton - A powerful platform for your real-time web applications
 *  Copyright (C) 2017  Roland Singer <roland.singer[at]desertbit.com>
 *
 *  This program is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  This program is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

package proton

import (
	"bytes"
	"fmt"
	"io"
	"net"
	"runtime"
	"sync"
	"time"

	"github.com/desertbit/binarysocket"
	"github.com/desertbit/proton/codec"
	"github.com/desertbit/proton/headers"
)

//#################//
//### Constants ###//
//#################//

const (
	// ProtocolVersion defines the protocol version defined in the specifications.
	ProtocolVersion byte = 0
)

const (
	socketIDLength      = 20
	maxHeaderBufferSize = 30 * 1024 // 30 KB

	receiveMsgChanSize = 10
	receiveMsgRoutines = 3

	socketTimeout = 45 * time.Second
	pingInterval  = 30 * time.Second // Should be smaller than the socket timeout.
	readTimeout   = 40 * time.Second // Should be bigger than ping interval.
	writeTimeout  = 30 * time.Second
)

const (
	typeClose        byte = 0
	typePing         byte = 1
	typePong         byte = 2
	typeMethodCall   byte = 3
	typeMethodReturn byte = 4
)

//##############//
//### Types ####//
//##############//

type msg struct {
	ReqType    byte
	HeaderBuf  []byte
	PayloadBuf []byte
}

//###############//
//### Socket ####//
//###############//

// Socket defines the Proton socket implementation.
type Socket struct {
	// V is a custom value which can be set.
	V interface{}

	id             string
	conn           net.Conn
	maxMessageSize int
	modules        map[string]*Module
	writeMutex     sync.Mutex

	receiveMsgChan       chan *msg
	resetTimeoutChan     chan struct{}
	resetPingTimeoutChan chan struct{}

	closeMutex sync.Mutex
	closeChan  chan struct{}

	valuesMutex sync.Mutex
	values      map[interface{}]interface{}
}

func newSocket(
	conn net.Conn,
	modules map[string]*Module,
	maxMessageSize int,
) *Socket {
	// Create a new socket.
	s := &Socket{
		conn:                 conn,
		maxMessageSize:       maxMessageSize,
		modules:              modules,
		receiveMsgChan:       make(chan *msg, receiveMsgChanSize),
		resetTimeoutChan:     make(chan struct{}, 1),
		resetPingTimeoutChan: make(chan struct{}, 1),
		closeChan:            make(chan struct{}),
	}

	// Start the socket routines.
	go s.readRoutine()
	go s.timeoutRoutine()
	go s.pingRoutine()
	for i := 0; i < receiveMsgRoutines; i++ {
		go s.handleReceivedMessageRoutine()
	}

	return s
}

// ID returns the socket ID.
func (s *Socket) ID() string {
	return s.id
}

// LocalAddr returns the local network address.
func (s *Socket) LocalAddr() net.Addr {
	return s.conn.LocalAddr()
}

// RemoteAddr returns the remote network address.
func (s *Socket) RemoteAddr() net.Addr {
	return s.conn.RemoteAddr()
}

// IsClosed returns a boolean indicating if the socket connection is closed.
// This method is thread-safe.
func (s *Socket) IsClosed() bool {
	select {
	case <-s.closeChan:
		return true
	default:
		return false
	}
}

// ClosedChan returns a channel which is closed as soon as the socket is closed.
// This method is thread-safe.
func (s *Socket) ClosedChan() <-chan struct{} {
	return s.closeChan
}

// Close the socket connection.
// This method is thread-safe.
func (s *Socket) Close() error {
	// Check if already closed and close the close channel.
	s.closeMutex.Lock()
	if s.IsClosed() {
		s.closeMutex.Unlock()
		return nil
	}
	close(s.closeChan)
	s.closeMutex.Unlock()

	// Tell the other peer, that the connection was closed.
	// Ignore errors. The connection might be closed already.
	_ = s.write(typeClose, nil, nil)

	// Let other goroutines process, before closing the connection.
	// This will increase the possibility, that the close frame will be send.
	runtime.Gosched()

	// Close the socket connection.
	return s.conn.Close()
}

// Value returns a custom value previously set by the key.
// Returns nil if it does not exists.
// One variadic function is called if no value exists for the given key.
// The return value of this function is the new value for the key.
// This operation is thread-safe.
func (s *Socket) Value(key interface{}, f ...func() interface{}) interface{} {
	s.valuesMutex.Lock()
	defer s.valuesMutex.Unlock()

	// Get the value.
	v, ok := s.values[key]
	if !ok {
		// If no value is found and the create function
		// is set, then call the function and set the new value.
		if len(f) > 0 {
			v = f[0]()
			s.values[key] = v
			return v
		}

		return nil
	}

	return v
}

// SetValue sets a custom value with a key.
// This operation is thread-safe.
func (s *Socket) SetValue(key interface{}, value interface{}) {
	s.valuesMutex.Lock()
	s.values[key] = value
	s.valuesMutex.Unlock()
}

// DeleteValue removes a custom value with a key.
// This operation is thread-safe.
func (s *Socket) DeleteValue(key interface{}) {
	s.valuesMutex.Lock()
	delete(s.values, key)
	s.valuesMutex.Unlock()
}

//#########################//
//### Socket - Private ####//
//#########################//

func (s *Socket) write(reqType byte, headerI interface{}, dataI interface{}) (err error) {
	var payload, header []byte

	// Marshal the payload data if present.
	if dataI != nil {
		payload, err = codec.Encode(dataI)
		if err != nil {
			return fmt.Errorf("encode: %v", err)
		}
	}

	// Check if the maximum message size is exceeded
	// (Only the payload size without the header).
	if len(payload) > s.maxMessageSize {
		return ErrMaxMsgSizeExceeded
	}

	// Get the length of the payload data in bytes.
	payloadLen, err := uint32ToBytes(uint32(len(payload)))
	if err != nil {
		return err
	}

	// Marshal the header data if present.
	if headerI != nil {
		header, err = codec.Encode(headerI)
		if err != nil {
			return fmt.Errorf("encode header: %v", err)
		}
	}

	// Check if the maximum header size is exceeded.
	if len(header) > maxHeaderBufferSize {
		return fmt.Errorf("maximum header size exceeded")
	}

	// Get the length of the header in bytes.
	headerLen, err := uint16ToBytes(uint16(len(header)))
	if err != nil {
		return err
	}

	// TODO: Think about a buffer pool to release load on the GC.
	// Fill our message buffer.
	var buf bytes.Buffer
	err = buf.WriteByte(ProtocolVersion)
	if err != nil {
		return err
	}

	err = buf.WriteByte(reqType)
	if err != nil {
		return err
	}

	_, err = buf.Write(headerLen)
	if err != nil {
		return err
	}

	_, err = buf.Write(payloadLen)
	if err != nil {
		return err
	}

	if len(header) > 0 {
		_, err = buf.Write(header)
		if err != nil {
			return err
		}
	}

	if len(payload) > 0 {
		_, err = buf.Write(payload)
		if err != nil {
			return err
		}
	}

	// Calculate the write deadline.
	writeDeadline := time.Now().Add(writeTimeout)

	// Lock the mutex.
	s.writeMutex.Lock()
	defer s.writeMutex.Unlock()

	// Reset the read deadline.
	s.conn.SetWriteDeadline(writeDeadline)

	// Write the message bytes to the peer.
	_, err = s.conn.Write(buf.Bytes())
	if err != nil {
		return err
	}

	return nil
}

func (s *Socket) read(buf []byte) (n int, err error) {
	// Reset the read deadline.
	s.conn.SetReadDeadline(time.Now().Add(readTimeout))

	// Read from the socket connection.
	n, err = s.conn.Read(buf)
	if err != nil {
		// Transform the error to an ErrClosed error.
		if err == io.EOF || err == binarysocket.ErrClosed {
			err = ErrClosed
		}
		return
	}

	return
}

func (s *Socket) readRoutine() {
	// Catch panics.
	defer func() {
		if e := recover(); e != nil {
			Log.Errorf("socket: read loop: catched panic: %v", e)
		}
	}()

	// Always close the socket on exit.
	defer s.Close()

	var err error
	var n, bytesRead int

	// Message Head.
	headBuf := make([]byte, 8)
	var headerLen16 uint16
	var headerLen int
	var payloadLen32 uint32
	var payloadLen int

	// Read loop.
	for {
		// Read the head from the stream.
		bytesRead = 0
		for bytesRead < 8 {
			n, err = s.read(headBuf[bytesRead:])
			if err != nil {
				// Log only if not closed.
				if err != ErrClosed && !s.IsClosed() {
					Log.Warningf("socket: read: %v", err)
				}
				return
			}
			bytesRead += n
		}

		// The first byte is the version field.
		// Check if this protocol version matches.
		if headBuf[0] != ProtocolVersion {
			Log.Warningf("socket: read: invalid protocol version: %v != %v", ProtocolVersion, headBuf[0])
			return
		}

		// Extract the request type.
		reqType := headBuf[1]

		// Extract the header length.
		headerLen16, err = bytesToUint16(headBuf[2:4])
		if err != nil {
			Log.Warningf("socket: read: failed to extract header length: %v", err)
			return
		}
		headerLen = int(headerLen16)

		// Check if the maximum header size is exceeded.
		if headerLen > maxHeaderBufferSize {
			Log.Warningf("socket: read: maximum header size exceeded")
			return
		}

		// Extract the payload length.
		payloadLen32, err = bytesToUint32(headBuf[4:8])
		if err != nil {
			Log.Warningf("socket: read: failed to extract payload length: %v", err)
			return
		}
		payloadLen = int(payloadLen32)

		// Check if the maximum payload size is exceeded.
		if payloadLen > s.maxMessageSize {
			Log.Warningf("socket: read: maximum message size exceeded")
			return
		}

		// Read the header bytes from the stream.
		var headerBuf []byte
		if headerLen > 0 {
			headerBuf = make([]byte, headerLen)
			bytesRead = 0
			for bytesRead < headerLen {
				n, err = s.read(headerBuf[bytesRead:])
				if err != nil {
					// Log only if not closed.
					if err != ErrClosed && !s.IsClosed() {
						Log.Warningf("socket: read: %v", err)
					}
					return
				}
				bytesRead += n
			}
		}

		// Read the payload bytes from the stream.
		var payloadBuf []byte
		if payloadLen > 0 {
			payloadBuf = make([]byte, payloadLen)
			bytesRead = 0
			for bytesRead < payloadLen {
				n, err = s.read(payloadBuf[bytesRead:])
				if err != nil {
					// Log only if not closed.
					if err != ErrClosed && !s.IsClosed() {
						Log.Warningf("socket: read: %v", err)
					}
					return
				}
				bytesRead += n
			}
		}

		// Finally push the results to the channel.
		s.receiveMsgChan <- &msg{
			ReqType:    reqType,
			HeaderBuf:  headerBuf,
			PayloadBuf: payloadBuf,
		}
	}
}

func (s *Socket) handleReceivedMessageRoutine() {
	var err error
	var m *msg

	for {
		select {
		case <-s.closeChan:
			return

		case m = <-s.receiveMsgChan:
			err = s.handleReceivedMessage(m)
			if err != nil {
				Log.Warningf("socket: %v", err)
			}
		}
	}
}

func (s *Socket) handleReceivedMessage(m *msg) (err error) {
	// Catch panics.
	defer func() {
		if e := recover(); e != nil {
			err = fmt.Errorf("catched panic: %v", e)
		}
	}()

	// Reset the timeout, because data was successful read from the socket.
	s.resetTimeout()

	// Check the request type.
	switch m.ReqType {
	case typeClose:
		// The socket peer has closed the connection.
		s.Close()

	case typePing:
		// The socket peer has requested a pong response.
		err = s.write(typePong, nil, nil)
		if err != nil {
			return fmt.Errorf("failed to send pong response: %v", err)
		}

	case typePong:
		// Don't do anything. The socket timeouts have already been reset.

	case typeMethodCall:
		return s.handleMethodCallRequest(m)

	default:
		return fmt.Errorf("invalid request type: %v", m.ReqType)
	}

	return nil
}

func (s *Socket) handleMethodCallRequest(m *msg) (err error) {
	// Decode the header.
	var header headers.MethodCall
	err = codec.Decode(m.HeaderBuf, &header)
	if err != nil {
		return fmt.Errorf("method call: decode header: %v", err)
	}

	// Obtain the module.
	module, ok := s.modules[header.Module]
	if !ok {
		return fmt.Errorf("method call: requested module does not exists: module=%v", header.Module)
	}

	// Call the module method in a new goroutine.
	go func() {
		gerr := module.callMethod(s, &header, m.PayloadBuf)
		if gerr != nil {
			Log.Warningf("method call: %v", gerr)
		}
	}()

	return nil
}
