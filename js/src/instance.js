
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

/*
 *  This code lives inside the Proton function.
 */

// Connect the socket and return a new Proton instance.
// The first argument defines a host which has to start with
// http:// or https:// or / for an absolute path using the current host.
// The default host value is /proton.
// The second argument defines optional options.
Proton.new = function(host, options) {
    // Include the dependencies.
    @@include('./module.js')


    /*
     * Constants
     */

    var ProtocolVersion = 0,
        HeadSize = 8,
        MaxHeaderBufferSize = 30 * 1024; // 30 KB

    var RequestType = {
        Close: 0,
        Ping: 1,
        Pong: 2,
        MethodCall: 3,
        MethodReturn: 4
    };

    var DefaultOptions = {
        // Kill the connect attempt after the timeout.
        connectTimeout: 10000,

        // The reconnect timeout.
        reconnectTimeout: 3000,

        // Disconnects the socket if no pong response is received within this timeout.
        keepaliveTimeout: 45000,

        // If no request is received, check if the connection is still alive withing this interval.
        pingInterval:  30000,

        // Tthe maximum message payload size in bytes.
        maxMessageSize: 300 * 1024, // 300 KB

        // Timeout when a call request will be cancelled.
        methodCallTimeout: 12000
    };



    /*
     * Variables
     */

    var bs, // Backend socket.
        isConnected         = false,
        reconnectTimeout    = false,
        keepaliveTimeout    = false,
        pingTimeout         = false;



    /*
     * Public Instance
     */

    var instance = {
        // Close the socket connection.
        close: function() {
            closeSocket();
        },

        // Returns a boolean whenever the socket is currently connected.
        isConnected: function() {
            return isConnected;
        },

        module: function(name) {
            return Modules.get(name);
        },

        // Hint: Further available event function.

        // Function which is triggered during a connecting attempt.
        onConnecting: function() {},

        // Function which is triggered as soon as the connection was established.
        onConnected: function() {},

        // Function which is triggered if the connection was lost.
        onDisconnected: function() {},

        // Function which is triggered on any error.
        // An optional error message is passed.
        onError: function(msg) {
            if (msg) {
                console.log("Proton error: " + msg);
            } else {
                console.log("Proton error: an unknown error occurred");
            }
        }
    };



    /*
     * Methods
     */

    function triggerConnecting() {
        if (instance.onConnecting) {
            try {
                instance.onConnecting();
            } catch (e) {
                console.log("Proton: onConnecting: catched exception:", e);
            }
        }
    }

    function triggerConnected() {
        if (instance.onConnected) {
            try {
                instance.onConnected();
            } catch (e) {
                console.log("Proton: onConnected: catched exception:", e);
            }
        }
    }

    function triggerDisconnected() {
        if (instance.onDisconnected) {
            try {
                instance.onDisconnected();
            } catch (e) {
                console.log("Proton: onDisconnected: catched exception:", e);
            }
        }
    }

    function triggerError(msg) {
        if (instance.onError) {
            try {
                instance.onError(msg);
            } catch (e) {
                console.log("Proton: onError: catched exception:", e);
            }
        }
    }

    function triggerFatal(msg) {
        triggerError(msg);
        closeSocket();
    }

    function closeSocket() {
        isConnected = false;

        // Close the socket if connected.
        if (bs) {
            // Just to go sure no event is triggered after the close.
            bs.onOpen = undefined;
            bs.onClose = undefined;
            bs.onError = undefined;
            bs.onRead = undefined;

            bs.close();
            bs = undefined;

            triggerDisconnected();
        }

        // Stop timeouts.
        stopKeepaliveTimeout();
        stopPingTimeout();
        stopReconnectTimeout();
    }

    function reconnectSocket() {
        closeSocket();

        // Start reconnecting.
        startReconnectTimeout();
    }

    function connectSocket() {
        triggerConnecting();

        bs = BinarySocket.open(host, {
            forceSocketType: "WebSocket",
            connectTimeout: options.connectTimeout
        });
        if (!bs) {
            triggerFatal("Proton: fatal: failed to create binary socket");
            return;
        }

        // Function which is triggered as soon as the connection is established.
        bs.onOpen = function() {
            isConnected = true;
            resetKeepaliveTimeout();
            resetPingTimeout();
            triggerConnected();
        };

        // Function which is triggered as soon as the connection closes.
        bs.onClose = function() {
            // Always reconnect the socket.
            reconnectSocket();
        };

        // Function which is triggered as soon as the connection closes with an error.
        // An optional error message is passed.
        // onClose is also triggered afterwards.
        bs.onError = function(msg) {
            triggerError(msg);
        };

        // Function which is trigger on read.
        bs.onRead = newReadHandler();
    }

    function startReconnectTimeout() {
        // Start the timeout.
        reconnectTimeout = setTimeout(function() {
            reconnectTimeout = false;
            connectSocket();
        }, options.reconnectTimeout);
    }

    function stopReconnectTimeout() {
        if (reconnectTimeout !== false) {
            clearTimeout(reconnectTimeout);
            reconnectTimeout = false;
        }
    }

    function resetKeepaliveTimeout() {
        stopKeepaliveTimeout();

        // Start the timeout. Close the socket on timeout and try to reconnect.
        keepaliveTimeout = setTimeout(function() {
            keepaliveTimeout = false;
            triggerError("connection closed: server did not respond");
            reconnectSocket();
        }, options.keepaliveTimeout);
    }

    function stopKeepaliveTimeout() {
        if (keepaliveTimeout !== false) {
            clearTimeout(keepaliveTimeout);
            keepaliveTimeout = false;
        }
    }

    function resetPingTimeout() {
        stopPingTimeout();

        // Start the timeout to request a pong response.
        pingTimeout = setTimeout(function() {
            pingTimeout = false;
            write(RequestType.Ping);
        }, options.pingInterval);
    }

    function stopPingTimeout() {
        if (pingTimeout !== false) {
            clearTimeout(pingTimeout);
            pingTimeout = false;
        }
    }

    function newReadHandler() {
        var readBuf             = BinarySocket.newByteBuffer(HeadSize, true),
            hasHead             = false,
            hasHeaderData       = false,
            index               = 0,
            reqType,
            headerLen,
            payloadLen,
            headerData,
            payloadData;

        return function(data) {
            try {
                // Append the new received data to our read buffer.
                readBuf.index = index;
                readBuf.write(data);
                index = readBuf.index;
                readBuf.front();

                // Read the head if required.
                if (!hasHead) {
                    // Skip if not enough bytes are available.
                    if (readBuf.length < HeadSize) {
                        return;
                    }

                    // The first byte is the version field.
                    // Check if this protocol version matches.
                    var b = readBuf.readByte();
                    if (b !== ProtocolVersion) {
                        triggerFatal("failed to read request: invalid protocol version");
                        return;
                    }

                    // Extract the header fields.
                    reqType = readBuf.readByte();
                    headerLen = readBuf.readUnsignedShort();
                    payloadLen = readBuf.readUnsignedInt();

                    // Check if the maximum header size is exceeded.
                    if (headerLen > MaxHeaderBufferSize) {
                        triggerFatal("failed to read request: maximum header size exceeded");
                        return;
                    }

                    // Check if the maximum message size is exceeded
                    // (Only the payload size without the header).
                    if (payloadLen > options.maxMessageSize) {
                        triggerFatal("failed to read request: maximum payload size exceeded");
                        return;
                    }

                    hasHead = true;
                }                

                // Read the header data if required.
                if (!hasHeaderData) {
                    // Skip if not enough bytes are available.
                    if (readBuf.length < headerLen) {
                        return;
                    }
                    
                    if (headerLen > 0) {
                        headerData = readBuf.read(headerLen).raw;
                    }
                    
                    hasHeaderData = true;
                }

                // Skip if not enough bytes are available.
                if (readBuf.length < payloadLen) {
                    return;
                }

                if (payloadLen > 0) {
                    payloadData = readBuf.read(payloadLen).raw;
                }
                
                // Handle the request.
                handleRequest(reqType, headerData, payloadData);
                
                // Reset everything.
                index = 0;
                hasHead = false;
                hasHeaderData = false;
                headerData = undefined;
                payloadData = undefined;
    
                // Reset the buffer, but keep unread bytes.
                readBuf.clip(0, readBuf.index);
            } catch (e) {
                console.log("Proton: onRead: catched exception:", e);
            }
        };
    }

    function handleRequest(reqType, headerData, payloadData) {
        // Reset the timeouts.
        resetKeepaliveTimeout();
        resetPingTimeout();

        // Check the request type.
        switch (reqType) {
            case RequestType.Close:
                // The socket peer has closed the connection. Reconnect... 
                reconnectSocket();
                break;

            case RequestType.Ping:
                // The socket peer has requested a pong response.
                write(RequestType.Pong);
                break;
                
            case RequestType.Pong:
                // Don't do anything. The socket timeouts have already been reset.
                break;
                
            case RequestType.MethodReturn:
                Modules.handleMethodReturn(headerData, payloadData);
                break;
                
            default:
                triggerError("failed to handle request: invalid request type: " + String(reqType));
        }
    }

    function write(reqType, header, data) {
        try {
            // Fail if not connected.
            if (!isConnected) {
                triggerError("failed send request: not connected to server");
                return;
            }

            var b = BinarySocket.newByteBuffer(1, true),
                payload,
                payloadLen = 0,
                headerLen = 0;

            // Marshal the payload data if present.
            if (data) {
                payload = msgpack.encode(data);
                payloadLen = payload.length;
            }

            // Check if the maximum message size is exceeded
            // (Only the payload size without the header).
            if (payloadLen > options.maxMessageSize) {
                triggerError("failed to send request: maximum payload size exceeded");
                return;
            }

            // Marshal the header data if present.
            if (header) {
                header = msgpack.encode(header);
                headerLen = header.length;
            }

            // Check if the maximum header size is exceeded.
            if (headerLen > MaxHeaderBufferSize) {
                triggerError("failed to send request: maximum header size exceeded");
                return;
            }

            // Fill our message buffer.
            b.writeUnsignedByte(ProtocolVersion);
            b.writeUnsignedByte(reqType);
            b.writeUnsignedShort(headerLen);
            b.writeUnsignedInt(payloadLen);

            if (headerLen > 0) {
                b.write(header);
            }

            if (payloadLen > 0) {
                b.write(payload);
            }

            // Write to the socket.
            bs.write(b.buffer);
        } catch (e) {
            console.log("Proton: write: catched exception:", e);
        }
    }



    /*
     * Initialize section
     */

    // Merge the options with the default options.
    options = Proton.utils.extend({}, DefaultOptions, options);

    // Set the default host if not set.
    if (!host) {
        host = "/proton";
    }

    // Connect during the next tick.
    // The user should be able to connect the event functions first.
    setTimeout(connectSocket, 0);

    // Return the newly created socket.
    return instance;
};
