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

	"github.com/desertbit/proton/headers"

	"github.com/sirupsen/logrus"
)

//###############//
//### Module ####//
//###############//

// A Module contains and handles methods and events.
type Module struct {
	name    string
	methods map[string]*methodContext
}

// NewModule creates and register a new Proton Module.
// This method is not thread-safe and should be called only
// during application initialization.
func NewModule(name string) *Module {
	// Validate the name.
	if len(name) == 0 {
		panic(fmt.Errorf("empty module name"))
	}

	// Create a new module value.
	return &Module{
		name:    name,
		methods: make(map[string]*methodContext),
	}
}

// Name returns the module's name.
func (m *Module) Name() string {
	return m.name
}

// AddMethod adds a method which is callable from the client-side.
// Hooks are processed before the method and are capable to terminate the call.
// This method is not thread-safe and should be only called during
// module initialization.
func (m *Module) AddMethod(name string, hooks Hooks, method Method) {
	// Check if the method name already exists.
	if _, ok := m.methods[name]; ok {
		panic(fmt.Errorf("module: %v: method: %v: a method with the same name is already registered", m.name, name))
	}

	m.methods[name] = newMethodContext(method, hooks)
}

// AddMethods adds multiple methods and behaves like AddMethod.
// This method is not thread-safe and should be only called during
// module initialization.
func (m *Module) AddMethods(hooks Hooks, methods Methods) {
	// Iterate through the map and add all methods.
	for name, method := range methods {
		m.AddMethod(name, hooks, method)
	}
}

//#########################//
//### Module - Private ####//
//#########################//

func (m *Module) callMethod(s *Socket, h *headers.MethodCall, payload []byte) (err error) {
	// Obtain the method defined by its name.
	mc, ok := m.methods[h.Method]
	if !ok {
		return fmt.Errorf("requested method does not exists: name=%v", h.Method)
	}

	// Log.
	Log.WithFields(logrus.Fields{
		"remoteAddress": s.RemoteAddr(),
		"module":        m.name,
		"method":        h.Method,
	}).Infof("method call")

	// Create a new context.
	ctx := newContext(s, m, h.Header, payload)

	// Call the hooks first.
	for _, hook := range mc.hooks {
		err = hook.Hook(ctx)
		if err != nil {
			// Trigger the error callback on the client-side.
			return m.sendMethodReturn(s, h.Method, h.RKey, nil, err)
		}
	}

	// Call the module function with the context.
	err = mc.method(ctx)
	if err != nil {
		// Trigger the error callback on the client-side.
		return m.sendMethodReturn(s, h.Method, h.RKey, nil, err)
	}

	// Trigger the success callback on the client-side.
	return m.sendMethodReturn(s, h.Method, h.RKey, ctx.retData, nil)
}

func (m *Module) sendMethodReturn(
	s *Socket,
	methodName string,
	rkey string,
	payload interface{},
	err error,
) error {
	var retErr string

	// Prepare the errors.
	if err != nil {
		// Try to obtain the response error string.
		// Assert to an errorResponse type if possible.
		if rerr, ok := err.(*errorResponse); ok {
			retErr = rerr.Response
		}

		// Set the default return error message if not set.
		if len(retErr) == 0 {
			retErr = "method call failed"
		}

		// Log the error.
		Log.WithFields(logrus.Fields{
			"remoteAddress": s.RemoteAddr(),
			"module":        m.name,
			"method":        methodName,
			"returnErr":     retErr,
			"error":         err,
		}).Warningf("method error")
	}

	// Skip if the return key is empty.
	if len(rkey) == 0 {
		return nil
	}

	// Create the return header.
	header := &headers.MethodReturn{
		RKey: rkey,
		Err:  retErr,
	}

	// Write to the client.
	err = s.write(typeMethodReturn, header, payload)
	if err != nil {
		return fmt.Errorf("send method return request: %v", err)
	}

	return nil
}
