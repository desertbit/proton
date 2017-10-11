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
	"crypto/rand"
	"encoding/binary"
	"errors"
	"net/http"
	"net/url"

	"github.com/sirupsen/logrus"
)

const (
	uint32Max = 4294967295
	uint16Max = 65535
)

var (
	// Log is the public logrus value used internally.
	Log = logrus.New()

	endian binary.ByteOrder = binary.BigEndian

	errInvalidByteLen = errors.New("invalid byte length")
)

func init() {
	// Set the default log options.
	Log.Formatter = new(logrus.TextFormatter)
	Log.Level = logrus.DebugLevel
}

//###############//
//### Private ###//
//###############//

func eventRecoverer(f interface{}, err error) {
	Log.Errorf("event error: func %v: %v", f, err)
}

// checkSameOrigin returns true if the origin is not set or is equal to the request host.
// Source from gorilla websockets.
func checkSameOrigin(r *http.Request) bool {
	origin := r.Header["Origin"]
	if len(origin) == 0 {
		return true
	}
	u, err := url.Parse(origin[0])
	if err != nil {
		return false
	}
	return u.Host == r.Host
}

// randomString generates a random string.
func randomString(n int) (string, error) {
	const alphanum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
	var bytes = make([]byte, n)
	_, err := rand.Read(bytes)
	if err != nil {
		return "", err
	}
	for i, b := range bytes {
		bytes[i] = alphanum[b%byte(len(alphanum))]
	}
	return string(bytes), nil
}

func bytesToUint16(data []byte) (v uint16, err error) {
	if len(data) < 2 {
		return 0, errInvalidByteLen
	}
	v = endian.Uint16(data)
	return
}

func uint16ToBytes(v uint16) (data []byte, err error) {
	data = make([]byte, 2)
	endian.PutUint16(data, v)
	return
}

func bytesToUint32(data []byte) (v uint32, err error) {
	if len(data) < 4 {
		return 0, errInvalidByteLen
	}
	v = endian.Uint32(data)
	return
}

func uint32ToBytes(v uint32) (data []byte, err error) {
	data = make([]byte, 4)
	endian.PutUint32(data, v)
	return
}
