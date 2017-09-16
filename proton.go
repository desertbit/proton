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

// Package proton - A powerful platform for your real-time web applications
package proton

import (
	"errors"
	"net/http"
	"os"
	"os/signal"
	"syscall"
	"time"
)

//###############//
//### Errors ####//
//###############//

var (
	// ErrClosed defines the error if the connection was closed.
	ErrClosed = errors.New("closed")

	// ErrNoContextData defines the error if no context data was set.
	ErrNoContextData = errors.New("no context data available to decode")

	// ErrNoHeaderData defines the error if no header data was set.
	ErrNoHeaderData = errors.New("no header data available to decode")

	// ErrMaxMsgSizeExceeded if the maximum message payload size is exceeded.
	ErrMaxMsgSizeExceeded = errors.New("maximum message size exceeded")
)

//####################//
//### Run Options ####//
//####################//

// RunOptions for Run.
type RunOptions struct {
	// ListenAddr for the HTTP server.
	ListenAddr string

	// HandleURL for the proton server.
	HandleURL string

	// FileServer defines a map of urls mapped to directory paths.
	FileServer map[string]string

	// DisableInterrupts disables the interrupt handler.
	DisableInterrupts bool
}

func (o *RunOptions) setDefaults() {
	if len(o.ListenAddr) == 0 {
		o.ListenAddr = ":8080"
	}
	if len(o.HandleURL) == 0 {
		o.HandleURL = "/proton"
	}
}

//###############//
//### Public ####//
//###############//

// Run is a shorthand to configure and start the HTTP server.
// It also handles termination requests and graceful shutdowns.
func Run(s *Server, opts ...*RunOptions) error {
	var o *RunOptions
	if len(opts) > 0 {
		o = opts[0]
	} else {
		o = new(RunOptions)
	}
	o.setDefaults()

	// Set the proton server handler.
	http.Handle(o.HandleURL, s)

	// Setup the http file server.
	if o.FileServer != nil {
		for url, dir := range o.FileServer {
			http.Handle(url, http.StripPrefix(url, http.FileServer(http.Dir(dir))))
		}
	}

	// Catch interrupt signals.
	if !o.DisableInterrupts {
		go func() {
			// Wait for the signal.
			sigchan := make(chan os.Signal, 3)
			signal.Notify(sigchan, os.Interrupt, os.Kill, syscall.SIGTERM, syscall.SIGKILL)
			<-sigchan

			Log.Info("Exiting...")
			s.Close()
			time.Sleep(100 * time.Millisecond)
			os.Exit(0)
		}()
	}

	Log.Infof("Proton Server running on '%s'", o.ListenAddr)

	// Start the http server.
	return http.ListenAndServe(o.ListenAddr, nil)
}
