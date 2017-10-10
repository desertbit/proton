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
	"fmt"
	"log"

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

	m := proton.NewModule("foo")
	server.AddModule(m)

	m.AddMethods(proton.Hooks{}, proton.Methods{
		"bar": bar,
	})

	// Run the server and handle interrupts.
	err := proton.Run(server, &proton.RunOptions{
		FileServer: map[string]string{
			"/":      "public",
			"/dist/": "../js/dist",
		},
	})
	if err != nil {
		log.Fatalf("Run: %v", err)
	}
}

func onNewSocket(s *proton.Socket) {
	log.Printf("new socket remoteAddr=%v id=%v", s.RemoteAddr(), s.ID())

	go func() {
		<-s.ClosedChan()
		log.Printf("socket closed remoteAddr=%v id=%v", s.RemoteAddr(), s.ID())
	}()
}

func bar(c *proton.C) error {
	var err error
	err = fmt.Errorf("bug")
	if err != nil {
		return proton.Error("unknown error", err)
	}

	c.Response("hallo welt")
	return nil
}
