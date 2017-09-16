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

package main

import (
	"log"
	"net/http"

	"github.com/desertbit/proton"
)

var (
	server *proton.Server
	m      *proton.Module
)

func main() {
	// Create a new server.
	server = proton.NewServer()
	server.OnNewSocket(onNewSocket)

	// Module.
	m := proton.NewModule("foo")
	m.AddMethod(proton.Hooks{
		authHook,
	}, func(c *proton.C) {})
	server.AddModule(m)

	// Set the proton server handler.
	http.Handle("/proton", server)

	// Set the http file server.
	http.Handle("/", http.StripPrefix("/", http.FileServer(http.Dir("public"))))
	http.Handle("/dist/", http.StripPrefix("/dist/", http.FileServer(http.Dir("../client/dist"))))

	// Start the http server.
	err := http.ListenAndServe(":8888", nil)
	if err != nil {
		log.Fatalf("ListenAndServe: %v", err)
	}
}

func onNewSocket(s *proton.Socket) {
	log.Printf("new socket remoteAddr=%v id=%v", s.RemoteAddr(), s.ID())
}
