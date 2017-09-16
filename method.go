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

//##############//
//### Types ####//
//##############//

// A Method is a module method callable from the peer.
type Method func(*C) error

// Methods is a collection of methods.
type Methods map[string]Method

type methodContext struct {
	method Method
	hooks  Hooks
}

//################//
//### Private ####//
//################//

func newMethodContext(method Method, hooks Hooks) *methodContext {
	return &methodContext{
		method: method,
		hooks:  hooks,
	}
}
