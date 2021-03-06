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

package codec

import (
	"github.com/tinylib/msgp/msgp"

	msgpack "gopkg.in/vmihailenco/msgpack.v2"
)

// Encode the value to a msgpack byte slice.
// It uses the faster msgp.Marshaler if implemented.
func Encode(v interface{}) ([]byte, error) {
	if d, ok := v.(msgp.Marshaler); ok {
		return d.MarshalMsg(nil)
	}

	return msgpack.Marshal(v)
}

// Decode the byte slice to a value.
// It uses the faster msgp.Unmarshaler if implemented.
func Decode(b []byte, v interface{}) error {
	if d, ok := v.(msgp.Unmarshaler); ok {
		_, err := d.UnmarshalMsg(b)
		return err
	}

	return msgpack.Unmarshal(b, v)
}
