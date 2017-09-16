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
	"testing"

	"github.com/stretchr/testify/require"
)

func TestUInt32Conversion(t *testing.T) {
	numbers32 := []uint32{5251, uint32Max, 0, 1, 101, 2387, 219}

	for _, i := range numbers32 {
		data, err := uint32ToBytes(i)
		require.NoError(t, err)
		require.Len(t, data, 4)

		ii, err := bytesToUint32(data)
		require.NoError(t, err)
		require.True(t, ii == i)
	}

	ii, err := bytesToUint32(nil)
	require.Equal(t, err, errInvalidByteLen)
	require.True(t, ii == 0)

	ii, err = bytesToUint32(make([]byte, 3))
	require.Equal(t, err, errInvalidByteLen)
	require.True(t, ii == 0)
}

func TestUInt16Conversion(t *testing.T) {
	numbers16 := []uint16{5251, uint16Max, 0, 1, 101, 2387, 219}

	for _, i := range numbers16 {
		data, err := uint16ToBytes(i)
		require.NoError(t, err)
		require.Len(t, data, 2)

		ii, err := bytesToUint16(data)
		require.NoError(t, err)
		require.True(t, ii == i)
	}

	ii, err := bytesToUint16(nil)
	require.Equal(t, err, errInvalidByteLen)
	require.True(t, ii == 0)

	ii, err = bytesToUint16(make([]byte, 1))
	require.Equal(t, err, errInvalidByteLen)
	require.True(t, ii == 0)
}
