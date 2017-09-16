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

	"github.com/desertbit/proton/codec"
)

//################//
//### Context ####//
//################//

// C defines the current call context with the passed data
// and the registered callbacks.
type C struct {
	// Data is the raw byte representation of the encoded context data.
	Data []byte

	// Header contains the raw header bytes attached to the request.
	Header map[string][]byte

	// A map to hold custom data values.
	// Commonly used by hooks.
	Values map[interface{}]interface{}

	socket *Socket
	module *Module

	retData interface{} // The success return data.
}

func newContext(s *Socket, m *Module, header map[string][]byte, data []byte) *C {
	c := &C{
		Data:   data,
		Header: header,
		Values: make(map[interface{}]interface{}),
		socket: s,
		module: m,
	}

	if c.Header == nil {
		c.Header = make(map[string][]byte)
	}

	return c
}

// Socket returns the socket of the context.
func (c *C) Socket() *Socket {
	return c.socket
}

// Module returns the module of the context.
func (c *C) Module() *Module {
	return c.module
}

// Response sets the response data value which is passed to the client.
func (c *C) Response(d interface{}) {
	c.retData = d
}

// Decode the context data to a custom value.
// The value has to be passed as pointer.
// Returns ErrNoContextData if there is no context data available to decode.
func (c *C) Decode(v interface{}) error {
	// Check if no data was passed.
	if len(c.Data) == 0 {
		return ErrNoContextData
	}

	// Decode the data.
	err := codec.Decode(c.Data, v)
	if err != nil {
		return fmt.Errorf("decode: %v", err)
	}

	return nil
}

// DecodeHeader decodes the given header data specified by its key
// to a custom value. The value has to be passed as pointer.
// Returns ErrNoHeaderData if no header data was found by the key.
func (c *C) DecodeHeader(key string, v interface{}) error {
	// Check if the value exists in the header.
	b, ok := c.Header[key]
	if !ok {
		return ErrNoHeaderData
	}

	// Decode the data.
	err := codec.Decode(b, v)
	if err != nil {
		return fmt.Errorf("decode header: %v", err)
	}

	return nil
}
