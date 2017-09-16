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
//### Error ####//
//##############//

type errorResponse struct {
	Response string
	Err      error
}

func (e *errorResponse) Error() string {
	return e.Err.Error()
}

// Error creates a new response error.
// The response is the error message send to the client.
func Error(response string, err error) error {
	return &errorResponse{
		Response: response,
		Err:      err,
	}
}
