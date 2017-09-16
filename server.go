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
	"fmt"
	"net"
	"net/http"
	"sync"

	"github.com/desertbit/binarysocket"
	"github.com/desertbit/event"
)

//##################//
//### Constants ####//
//##################//

const (
	acceptSocketRoutines = 4
)

//###############//
//### Server ####//
//###############//

// Server implements the web server which handles the Proton clients.
type Server struct {
	options *Options
	bs      *binarysocket.Server
	modules map[string]*Module

	closeMutex sync.Mutex
	closedChan chan struct{}

	sockets      map[string]*Socket
	socketsMutex sync.RWMutex

	eventOnNewSocket *event.Event
}

// NewServer creates a new server instance.
// Optionally pass the server options.
func NewServer(opts ...*Options) *Server {
	var o *Options
	if len(opts) > 0 {
		o = opts[0]
	} else {
		o = new(Options)
	}
	o.setDefaults()

	bsOpts := binarysocket.Options{
		ReadBufferSize:  o.ReadBufferSize,
		WriteBufferSize: o.WriteBufferSize,
		CheckOrigin:     o.CheckOrigin,
		DisableAjax:     true, // Disable ajax sockets to reduce attack surface.
	}

	s := &Server{
		options:          o,
		bs:               binarysocket.NewServer(&bsOpts),
		modules:          make(map[string]*Module),
		closedChan:       make(chan struct{}),
		sockets:          make(map[string]*Socket),
		eventOnNewSocket: event.New(eventRecoverer),
	}

	// Routines.
	for i := 0; i < acceptSocketRoutines; i++ {
		go s.acceptSocketRoutine()
	}

	return s
}

// IsClosed returns a boolean indicating if the server is closed.
// This does not indicate the http server state.
func (s *Server) IsClosed() bool {
	select {
	case <-s.closedChan:
		return true
	default:
		return false
	}
}

// Close the server by blocking all new incoming connections.
// This does not close the http server.
func (s *Server) Close() error {
	s.closeMutex.Lock()
	if s.IsClosed() {
		s.closeMutex.Unlock()
		return nil
	}
	close(s.closedChan)
	s.closeMutex.Unlock()

	// Close the binary socket server.
	s.bs.Close()

	// Close all connected sockets.
	for _, s := range s.Sockets() {
		s.Close()
	}

	return nil
}

// ServeHTTP implements the HTTP Handler interface of the http package.
func (s *Server) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	s.bs.ServeHTTP(w, r)
}

// GetSocket obtains a socket by its ID.
// Returns nil if not found.
func (s *Server) GetSocket(id string) (so *Socket) {
	s.socketsMutex.RLock()
	so = s.sockets[id]
	s.socketsMutex.RUnlock()
	return
}

// Sockets returns a list of all current connected sockets.
func (s *Server) Sockets() []*Socket {
	// Lock the mutex.
	s.socketsMutex.RLock()
	defer s.socketsMutex.RUnlock()

	// Create the slice.
	list := make([]*Socket, len(s.sockets))

	// Add all sockets from the map.
	i := 0
	for _, s := range s.sockets {
		list[i] = s
		i++
	}

	return list
}

// OnNewSocket is triggered during each new socket connection.
func (s *Server) OnNewSocket(f func(s *Socket)) {
	s.eventOnNewSocket.On(f)
}

// OffNewSocket remove the event listener again.
func (s *Server) OffNewSocket(f func(s *Socket)) {
	s.eventOnNewSocket.Off(f)
}

// AddModule registers a module to the server.
// This method is not thread-safe and should be only called during initialization.
func (s *Server) AddModule(m *Module) {
	// Check if the module name already exists.
	if _, ok := s.modules[m.name]; ok {
		panic(fmt.Errorf("module: %v: a module with the same name is already registered", m.name))
	}

	s.modules[m.name] = m
}

//#########################//
//### Server - Private ####//
//#########################//

func (s *Server) acceptSocketRoutine() {
	var err error
	var conn net.Conn

	// Always close on error.
	defer s.Close()

	for {
		conn, err = s.bs.Accept()
		if err != nil {
			if err != binarysocket.ErrClosed {
				Log.Errorf("server: failed to accept binary sockets: %v", err)
			}
			return
		}

		s.handleNewConnection(conn)
	}
}

func (s *Server) handleNewConnection(conn net.Conn) {
	// Catch panics.
	defer func() {
		if e := recover(); e != nil {
			Log.Errorf("server: catched panic: %v", e)
		}
	}()

	// Create a new socket.
	socket := newSocket(conn, s.modules, s.options.MaxMessageSize)

	// Add the new socket to the active sockets map.
	// If the ID is already present, then generate a new one.
	err := func() (err error) {
		socket.id, err = randomString(socketIDLength)
		if err != nil {
			return
		}

		// Lock the mutex.
		s.socketsMutex.Lock()
		defer s.socketsMutex.Unlock()

		// Be sure that the ID is unique.
		for {
			if _, ok := s.sockets[socket.id]; !ok {
				break
			}

			socket.id, err = randomString(socketIDLength)
			if err != nil {
				return
			}
		}

		// Add the socket to the map.
		s.sockets[socket.id] = socket
		return
	}()
	if err != nil {
		Log.Errorf("server: new socket failed: %v", err)
		return
	}

	// Remove the socket from the active sockets map on close.
	go func() {
		// Wait for the socket to close.
		<-socket.closeChan

		s.socketsMutex.Lock()
		delete(s.sockets, socket.id)
		s.socketsMutex.Unlock()
	}()

	// Emit the new socket event.
	s.eventOnNewSocket.Trigger(socket)
}
