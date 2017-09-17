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
 *  This code lives inside the Proton instance.
 */

var Modules = function() {
    /*
     * Constants
     */

    var rkeyLen = 14;



    /*
     * Variables
     */

    var callbacksMap = {};



    /*
     * Methods
     */

    function triggerCBError(cb, msg) {
        // Trigger the error callback if defined.
        // Otherwise trigger the global error event.
        if (cb.error) {
            try {
                cb.error(msg);
            } catch (e) {
                console.log("Proton: error callback: catched exception:", e);
            }
        } else {
            triggerError(msg);
        }
    }

    // call a module method on the server-side.
    function callMethod(module, method) {
        var params = false,
            callback = false,
            errorCallback = false;

        // Define a method to print error messages.
        var logError = function() {
            console.log("Proton: invalid method call: module='" + module + "' method='" + method + "'");
        };

        // The method name has to be defined.
        if (!module || !method) {
            logError();
            return false;
        }

        // Parse the function arguments.
        for (var i = 2; i < arguments.length; i++) {
            var arg = arguments[i];

            // Check if this argument is the parameter object.
            if (arg !== null && typeof arg === 'object') {
                // Check if already set.
                if (params !== false) {
                    logError();
                    return false;
                }

                // Set the parameter object.
                params = arg;
            }
            // Check if this argument is a callback function.
            else if (Proton.utils.isFunction(arg)) {
                // Set the success callback if not already set.
                if (callback === false) {
                    callback = arg;
                }
                // Set the error callback if not already set.
                else if (errorCallback === false) {
                    errorCallback = arg;
                }
                // Too many functions passed to this method. Handle the error.
                else {
                    logError();
                    return false;
                }
            }
            // Handle unknown types.
            else {
                logError();
                return false;
            }
        }

        // Create the request header.
        var header = {
            Module: module,
            Method: method,
            RKey: "",       // If empty, no return will be called.
            Header: {}      // TODO
        };

        // Register the callbacks if defined.
        if (callback !== false || errorCallback !== false) {
            // Create a random return key and check if it does not exist already.
            var rkey;
            while(true) {
                rkey = Proton.utils.randomString(rkeyLen);
                if (!callbacksMap[rkey]) {
                    break;
                }
            }

            // Create a new callbacks map item.
            var cb = {
                callback:   callback,
                error:      errorCallback
            };

            // Create a timeout.
            cb.timeout = setTimeout(function() {
                cb.timeout = false;

                // Remove the callback object again from the map.
                delete callbacksMap[rkey];

                // Trigger the error callback.
                triggerCBError(cb, "method call timeout: no server response received within the timeout");
            }, options.methodCallTimeout);

            callbacksMap[rkey] = cb;
            header.RKey = rkey;
        }

        // Write the request to the server.
        write(RequestType.MethodCall, header, params);
        return true;
    }

    function handleMethodReturn(header, payload) {
        try {
            header = msgpack.decode(header);
        } catch (e) {
            console.log("Proton: handle return request: catched exception: msgpack decode:", e);
        }

        // The return key must be valid.
        if (!header.RKey || String(header.RKey).length === 0) {
            triggerError("failed to handle return request: invalid return key");
            return;
        }

        // Obtain the callback object.
        var cb = callbacksMap[header.RKey];
        if (!cb) {
            triggerError("failed to handle return request: invalid return key");
            return;
        }

        // Remove the callback object from the map.
        delete callbacksMap[header.RKey];

        // Stop the timeout.
        if (cb.timeout) {
            clearTimeout(cb.timeout);
            cb.timeout = false;
        }

        // Call the required callback.
        if (header.Err && String(header.Err).length > 0) {
            triggerCBError(cb, String(header.Err));
        } else {
            if (!cb.callback) {
                return;
            }

            if (payload) {
                try {
                    payload = msgpack.decode(payload);
                } catch (e) {
                    console.log("Proton: handle return request: catched exception: msgpack decode:", e);
                }
            }

            try {
                cb.callback(payload);
            } catch (e) {
                console.log("Proton: handle return request: catched exception:", e);
            }
        }
    }



    /*
     * Public modules instance.
     */
    return {
        get: function(module) {
            // Return the public module instance.
            return {
                // call a module method on the server-side.
                call: function() {
                    // Prepend the module variable to the arguments array.
                    Array.prototype.unshift.call(arguments, module);

                    // Call the method.
                    return callMethod.apply(callMethod, arguments);
                }
            };
        },

        handleMethodReturn: handleMethodReturn
    };
}();
