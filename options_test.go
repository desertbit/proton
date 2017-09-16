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

func TestOptionsSetDefaults(t *testing.T) {
	o := new(Options)
	o.setDefaults()
	require.Equal(t, defaultReadBufferSize, o.ReadBufferSize)
	require.Equal(t, defaultWriteBufferSize, o.WriteBufferSize)
	require.NotNil(t, o.CheckOrigin)
	require.Equal(t, defaultMaxMessageSize, o.MaxMessageSize)

	o.ReadBufferSize = 1
	o.WriteBufferSize = 1
	o.MaxMessageSize = 1
	o.setDefaults()
	require.Equal(t, 1, o.ReadBufferSize)
	require.Equal(t, 1, o.WriteBufferSize)
	require.Equal(t, 1, o.MaxMessageSize)
}
