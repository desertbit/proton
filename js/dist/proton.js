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


var Proton = function() {
    // Turn on strict mode.
    'use strict';

    // The public Proton instance.
    var Proton = {};

    // Include the global dependencies.
    /* Updated on 2017.09.11 https://github.com/kawanet/msgpack-lite */
!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var r;r="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,r.msgpack=t()}}(function(){return function t(r,e,n){function i(f,u){if(!e[f]){if(!r[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(o)return o(f,!0);var s=new Error("Cannot find module '"+f+"'");throw s.code="MODULE_NOT_FOUND",s}var c=e[f]={exports:{}};r[f][0].call(c.exports,function(t){var e=r[f][1][t];return i(e?e:t)},c,c.exports,t,r,e,n)}return e[f].exports}for(var o="function"==typeof require&&require,f=0;f<n.length;f++)i(n[f]);return i}({1:[function(t,r,e){e.encode=t("./encode").encode,e.decode=t("./decode").decode,e.Encoder=t("./encoder").Encoder,e.Decoder=t("./decoder").Decoder,e.createCodec=t("./ext").createCodec,e.codec=t("./codec").codec},{"./codec":10,"./decode":12,"./decoder":13,"./encode":15,"./encoder":16,"./ext":20}],2:[function(t,r,e){(function(Buffer){function t(t){return t&&t.isBuffer&&t}r.exports=t("undefined"!=typeof Buffer&&Buffer)||t(this.Buffer)||t("undefined"!=typeof window&&window.Buffer)||this.Buffer}).call(this,t("buffer").Buffer)},{buffer:29}],3:[function(t,r,e){function n(t,r){for(var e=this,n=r||(r|=0),i=t.length,o=0,f=0;f<i;)o=t.charCodeAt(f++),o<128?e[n++]=o:o<2048?(e[n++]=192|o>>>6,e[n++]=128|63&o):o<55296||o>57343?(e[n++]=224|o>>>12,e[n++]=128|o>>>6&63,e[n++]=128|63&o):(o=(o-55296<<10|t.charCodeAt(f++)-56320)+65536,e[n++]=240|o>>>18,e[n++]=128|o>>>12&63,e[n++]=128|o>>>6&63,e[n++]=128|63&o);return n-r}function i(t,r,e){var n=this,i=0|r;e||(e=n.length);for(var o="",f=0;i<e;)f=n[i++],f<128?o+=String.fromCharCode(f):(192===(224&f)?f=(31&f)<<6|63&n[i++]:224===(240&f)?f=(15&f)<<12|(63&n[i++])<<6|63&n[i++]:240===(248&f)&&(f=(7&f)<<18|(63&n[i++])<<12|(63&n[i++])<<6|63&n[i++]),f>=65536?(f-=65536,o+=String.fromCharCode((f>>>10)+55296,(1023&f)+56320)):o+=String.fromCharCode(f));return o}function o(t,r,e,n){var i;e||(e=0),n||0===n||(n=this.length),r||(r=0);var o=n-e;if(t===this&&e<r&&r<n)for(i=o-1;i>=0;i--)t[i+r]=this[i+e];else for(i=0;i<o;i++)t[i+r]=this[i+e];return o}e.copy=o,e.toString=i,e.write=n},{}],4:[function(t,r,e){function n(t){return new Array(t)}function i(t){if(!o.isBuffer(t)&&o.isView(t))t=o.Uint8Array.from(t);else if(o.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return Array.prototype.slice.call(t)}var o=t("./bufferish"),e=r.exports=n(0);e.alloc=n,e.concat=o.concat,e.from=i},{"./bufferish":8}],5:[function(t,r,e){function n(t){return new Buffer(t)}function i(t){if(!o.isBuffer(t)&&o.isView(t))t=o.Uint8Array.from(t);else if(o.isArrayBuffer(t))t=new Uint8Array(t);else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return Buffer.from&&1!==Buffer.from.length?Buffer.from(t):new Buffer(t)}var o=t("./bufferish"),Buffer=o.global,e=r.exports=o.hasBuffer?n(0):[];e.alloc=o.hasBuffer&&Buffer.alloc||n,e.concat=o.concat,e.from=i},{"./bufferish":8}],6:[function(t,r,e){function n(t,r,e,n){var o=a.isBuffer(this),f=a.isBuffer(t);if(o&&f)return this.copy(t,r,e,n);if(c||o||f||!a.isView(this)||!a.isView(t))return u.copy.call(this,t,r,e,n);var s=e||null!=n?i.call(this,e,n):this;return t.set(s,r),s.length}function i(t,r){var e=this.slice||!c&&this.subarray;if(e)return e.call(this,t,r);var i=a.alloc.call(this,r-t);return n.call(this,i,0,t,r),i}function o(t,r,e){var n=!s&&a.isBuffer(this)?this.toString:u.toString;return n.apply(this,arguments)}function f(t){function r(){var r=this[t]||u[t];return r.apply(this,arguments)}return r}var u=t("./buffer-lite");e.copy=n,e.slice=i,e.toString=o,e.write=f("write");var a=t("./bufferish"),Buffer=a.global,s=a.hasBuffer&&"TYPED_ARRAY_SUPPORT"in Buffer,c=s&&!Buffer.TYPED_ARRAY_SUPPORT},{"./buffer-lite":3,"./bufferish":8}],7:[function(t,r,e){function n(t){return new Uint8Array(t)}function i(t){if(o.isView(t)){var r=t.byteOffset,n=t.byteLength;t=t.buffer,t.byteLength!==n&&(t.slice?t=t.slice(r,r+n):(t=new Uint8Array(t),t.byteLength!==n&&(t=Array.prototype.slice.call(t,r,r+n))))}else{if("string"==typeof t)return o.from.call(e,t);if("number"==typeof t)throw new TypeError('"value" argument must not be a number')}return new Uint8Array(t)}var o=t("./bufferish"),e=r.exports=o.hasArrayBuffer?n(0):[];e.alloc=n,e.concat=o.concat,e.from=i},{"./bufferish":8}],8:[function(t,r,e){function n(t){return"string"==typeof t?u.call(this,t):a(this).from(t)}function i(t){return a(this).alloc(t)}function o(t,r){function n(t){r+=t.length}function o(t){a+=w.copy.call(t,u,a)}r||(r=0,Array.prototype.forEach.call(t,n));var f=this!==e&&this||t[0],u=i.call(f,r),a=0;return Array.prototype.forEach.call(t,o),u}function f(t){return t instanceof ArrayBuffer||E(t)}function u(t){var r=3*t.length,e=i.call(this,r),n=w.write.call(e,t);return r!==n&&(e=w.slice.call(e,0,n)),e}function a(t){return d(t)?g:y(t)?b:p(t)?v:h?g:l?b:v}function s(){return!1}function c(t,r){return t="[object "+t+"]",function(e){return null!=e&&{}.toString.call(r?e[r]:e)===t}}var Buffer=e.global=t("./buffer-global"),h=e.hasBuffer=Buffer&&!!Buffer.isBuffer,l=e.hasArrayBuffer="undefined"!=typeof ArrayBuffer,p=e.isArray=t("isarray");e.isArrayBuffer=l?f:s;var d=e.isBuffer=h?Buffer.isBuffer:s,y=e.isView=l?ArrayBuffer.isView||c("ArrayBuffer","buffer"):s;e.alloc=i,e.concat=o,e.from=n;var v=e.Array=t("./bufferish-array"),g=e.Buffer=t("./bufferish-buffer"),b=e.Uint8Array=t("./bufferish-uint8array"),w=e.prototype=t("./bufferish-proto"),E=c("ArrayBuffer")},{"./buffer-global":2,"./bufferish-array":4,"./bufferish-buffer":5,"./bufferish-proto":6,"./bufferish-uint8array":7,isarray:34}],9:[function(t,r,e){function n(t){return this instanceof n?(this.options=t,void this.init()):new n(t)}function i(t){for(var r in t)n.prototype[r]=o(n.prototype[r],t[r])}function o(t,r){function e(){return t.apply(this,arguments),r.apply(this,arguments)}return t&&r?e:t||r}function f(t){function r(t,r){return r(t)}return t=t.slice(),function(e){return t.reduce(r,e)}}function u(t){return s(t)?f(t):t}function a(t){return new n(t)}var s=t("isarray");e.createCodec=a,e.install=i,e.filter=u;var c=t("./bufferish");n.prototype.init=function(){var t=this.options;return t&&t.uint8array&&(this.bufferish=c.Uint8Array),this},e.preset=a({preset:!0})},{"./bufferish":8,isarray:34}],10:[function(t,r,e){t("./read-core"),t("./write-core"),e.codec={preset:t("./codec-base").preset}},{"./codec-base":9,"./read-core":22,"./write-core":25}],11:[function(t,r,e){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var r=this.codec=t.codec;r.bufferish&&(this.bufferish=r.bufferish)}}e.DecodeBuffer=n;var i=t("./read-core").preset,o=t("./flex-buffer").FlexDecoder;o.mixin(n.prototype),n.prototype.codec=i,n.prototype.fetch=function(){return this.codec.decode(this)}},{"./flex-buffer":21,"./read-core":22}],12:[function(t,r,e){function n(t,r){var e=new i(r);return e.write(t),e.read()}e.decode=n;var i=t("./decode-buffer").DecodeBuffer},{"./decode-buffer":11}],13:[function(t,r,e){function n(t){return this instanceof n?void o.call(this,t):new n(t)}e.Decoder=n;var i=t("event-lite"),o=t("./decode-buffer").DecodeBuffer;n.prototype=new o,i.mixin(n.prototype),n.prototype.decode=function(t){arguments.length&&this.write(t),this.flush()},n.prototype.push=function(t){this.emit("data",t)},n.prototype.end=function(t){this.decode(t),this.emit("end")}},{"./decode-buffer":11,"event-lite":31}],14:[function(t,r,e){function n(t){if(!(this instanceof n))return new n(t);if(t&&(this.options=t,t.codec)){var r=this.codec=t.codec;r.bufferish&&(this.bufferish=r.bufferish)}}e.EncodeBuffer=n;var i=t("./write-core").preset,o=t("./flex-buffer").FlexEncoder;o.mixin(n.prototype),n.prototype.codec=i,n.prototype.write=function(t){this.codec.encode(this,t)}},{"./flex-buffer":21,"./write-core":25}],15:[function(t,r,e){function n(t,r){var e=new i(r);return e.write(t),e.read()}e.encode=n;var i=t("./encode-buffer").EncodeBuffer},{"./encode-buffer":14}],16:[function(t,r,e){function n(t){return this instanceof n?void o.call(this,t):new n(t)}e.Encoder=n;var i=t("event-lite"),o=t("./encode-buffer").EncodeBuffer;n.prototype=new o,i.mixin(n.prototype),n.prototype.encode=function(t){this.write(t),this.emit("data",this.read())},n.prototype.end=function(t){arguments.length&&this.encode(t),this.flush(),this.emit("end")}},{"./encode-buffer":14,"event-lite":31}],17:[function(t,r,e){function n(t,r){return this instanceof n?(this.buffer=i.from(t),void(this.type=r)):new n(t,r)}e.ExtBuffer=n;var i=t("./bufferish")},{"./bufferish":8}],18:[function(t,r,e){function n(t){t.addExtPacker(14,Error,[u,i]),t.addExtPacker(1,EvalError,[u,i]),t.addExtPacker(2,RangeError,[u,i]),t.addExtPacker(3,ReferenceError,[u,i]),t.addExtPacker(4,SyntaxError,[u,i]),t.addExtPacker(5,TypeError,[u,i]),t.addExtPacker(6,URIError,[u,i]),t.addExtPacker(10,RegExp,[f,i]),t.addExtPacker(11,Boolean,[o,i]),t.addExtPacker(12,String,[o,i]),t.addExtPacker(13,Date,[Number,i]),t.addExtPacker(15,Number,[o,i]),"undefined"!=typeof Uint8Array&&(t.addExtPacker(17,Int8Array,c),t.addExtPacker(18,Uint8Array,c),t.addExtPacker(19,Int16Array,c),t.addExtPacker(20,Uint16Array,c),t.addExtPacker(21,Int32Array,c),t.addExtPacker(22,Uint32Array,c),t.addExtPacker(23,Float32Array,c),"undefined"!=typeof Float64Array&&t.addExtPacker(24,Float64Array,c),"undefined"!=typeof Uint8ClampedArray&&t.addExtPacker(25,Uint8ClampedArray,c),t.addExtPacker(26,ArrayBuffer,c),t.addExtPacker(29,DataView,c)),s.hasBuffer&&t.addExtPacker(27,Buffer,s.from)}function i(r){return a||(a=t("./encode").encode),a(r)}function o(t){return t.valueOf()}function f(t){t=RegExp.prototype.toString.call(t).split("/"),t.shift();var r=[t.pop()];return r.unshift(t.join("/")),r}function u(t){var r={};for(var e in h)r[e]=t[e];return r}e.setExtPackers=n;var a,s=t("./bufferish"),Buffer=s.global,c=s.Uint8Array.from,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./encode":15}],19:[function(t,r,e){function n(t){t.addExtUnpacker(14,[i,f(Error)]),t.addExtUnpacker(1,[i,f(EvalError)]),t.addExtUnpacker(2,[i,f(RangeError)]),t.addExtUnpacker(3,[i,f(ReferenceError)]),t.addExtUnpacker(4,[i,f(SyntaxError)]),t.addExtUnpacker(5,[i,f(TypeError)]),t.addExtUnpacker(6,[i,f(URIError)]),t.addExtUnpacker(10,[i,o]),t.addExtUnpacker(11,[i,u(Boolean)]),t.addExtUnpacker(12,[i,u(String)]),t.addExtUnpacker(13,[i,u(Date)]),t.addExtUnpacker(15,[i,u(Number)]),"undefined"!=typeof Uint8Array&&(t.addExtUnpacker(17,u(Int8Array)),t.addExtUnpacker(18,u(Uint8Array)),t.addExtUnpacker(19,[a,u(Int16Array)]),t.addExtUnpacker(20,[a,u(Uint16Array)]),t.addExtUnpacker(21,[a,u(Int32Array)]),t.addExtUnpacker(22,[a,u(Uint32Array)]),t.addExtUnpacker(23,[a,u(Float32Array)]),"undefined"!=typeof Float64Array&&t.addExtUnpacker(24,[a,u(Float64Array)]),"undefined"!=typeof Uint8ClampedArray&&t.addExtUnpacker(25,u(Uint8ClampedArray)),t.addExtUnpacker(26,a),t.addExtUnpacker(29,[a,u(DataView)])),c.hasBuffer&&t.addExtUnpacker(27,u(Buffer))}function i(r){return s||(s=t("./decode").decode),s(r)}function o(t){return RegExp.apply(null,t)}function f(t){return function(r){var e=new t;for(var n in h)e[n]=r[n];return e}}function u(t){return function(r){return new t(r)}}function a(t){return new Uint8Array(t).buffer}e.setExtUnpackers=n;var s,c=t("./bufferish"),Buffer=c.global,h={name:1,message:1,stack:1,columnNumber:1,fileName:1,lineNumber:1}},{"./bufferish":8,"./decode":12}],20:[function(t,r,e){t("./read-core"),t("./write-core"),e.createCodec=t("./codec-base").createCodec},{"./codec-base":9,"./read-core":22,"./write-core":25}],21:[function(t,r,e){function n(){if(!(this instanceof n))return new n}function i(){if(!(this instanceof i))return new i}function o(){function t(t){var r=this.offset?p.prototype.slice.call(this.buffer,this.offset):this.buffer;this.buffer=r?t?this.bufferish.concat([r,t]):r:t,this.offset=0}function r(){for(;this.offset<this.buffer.length;){var t,r=this.offset;try{t=this.fetch()}catch(t){if(t&&t.message!=v)throw t;this.offset=r;break}this.push(t)}}function e(t){var r=this.offset,e=r+t;if(e>this.buffer.length)throw new Error(v);return this.offset=e,r}return{bufferish:p,write:t,fetch:a,flush:r,push:c,pull:h,read:s,reserve:e,offset:0}}function f(){function t(){var t=this.start;if(t<this.offset){var r=this.start=this.offset;return p.prototype.slice.call(this.buffer,t,r)}}function r(){for(;this.start<this.offset;){var t=this.fetch();t&&this.push(t)}}function e(){var t=this.buffers||(this.buffers=[]),r=t.length>1?this.bufferish.concat(t):t[0];return t.length=0,r}function n(t){var r=0|t;if(this.buffer){var e=this.buffer.length,n=0|this.offset,i=n+r;if(i<e)return this.offset=i,n;this.flush(),t=Math.max(t,Math.min(2*e,this.maxBufferSize))}return t=Math.max(t,this.minBufferSize),this.buffer=this.bufferish.alloc(t),this.start=0,this.offset=r,0}function i(t){var r=t.length;if(r>this.minBufferSize)this.flush(),this.push(t);else{var e=this.reserve(r);p.prototype.copy.call(t,this.buffer,e)}}return{bufferish:p,write:u,fetch:t,flush:r,push:c,pull:e,read:s,reserve:n,send:i,maxBufferSize:y,minBufferSize:d,offset:0,start:0}}function u(){throw new Error("method not implemented: write()")}function a(){throw new Error("method not implemented: fetch()")}function s(){var t=this.buffers&&this.buffers.length;return t?(this.flush(),this.pull()):this.fetch()}function c(t){var r=this.buffers||(this.buffers=[]);r.push(t)}function h(){var t=this.buffers||(this.buffers=[]);return t.shift()}function l(t){function r(r){for(var e in t)r[e]=t[e];return r}return r}e.FlexDecoder=n,e.FlexEncoder=i;var p=t("./bufferish"),d=2048,y=65536,v="BUFFER_SHORTAGE";n.mixin=l(o()),n.mixin(n.prototype),i.mixin=l(f()),i.mixin(i.prototype)},{"./bufferish":8}],22:[function(t,r,e){function n(t){function r(t){var r=s(t),n=e[r];if(!n)throw new Error("Invalid type: "+(r?"0x"+r.toString(16):r));return n(t)}var e=c.getReadToken(t);return r}function i(){var t=this.options;return this.decode=n(t),t&&t.preset&&a.setExtUnpackers(this),this}function o(t,r){var e=this.extUnpackers||(this.extUnpackers=[]);e[t]=h.filter(r)}function f(t){function r(r){return new u(r,t)}var e=this.extUnpackers||(this.extUnpackers=[]);return e[t]||r}var u=t("./ext-buffer").ExtBuffer,a=t("./ext-unpacker"),s=t("./read-format").readUint8,c=t("./read-token"),h=t("./codec-base");h.install({addExtUnpacker:o,getExtUnpacker:f,init:i}),e.preset=i.call(h.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-unpacker":19,"./read-format":23,"./read-token":24}],23:[function(t,r,e){function n(t){var r=k.hasArrayBuffer&&t&&t.binarraybuffer,e=t&&t.int64,n=T&&t&&t.usemap,B={map:n?o:i,array:f,str:u,bin:r?s:a,ext:c,uint8:h,uint16:p,uint32:y,uint64:g(8,e?E:b),int8:l,int16:d,int32:v,int64:g(8,e?A:w),float32:g(4,m),float64:g(8,x)};return B}function i(t,r){var e,n={},i=new Array(r),o=new Array(r),f=t.codec.decode;for(e=0;e<r;e++)i[e]=f(t),o[e]=f(t);for(e=0;e<r;e++)n[i[e]]=o[e];return n}function o(t,r){var e,n=new Map,i=new Array(r),o=new Array(r),f=t.codec.decode;for(e=0;e<r;e++)i[e]=f(t),o[e]=f(t);for(e=0;e<r;e++)n.set(i[e],o[e]);return n}function f(t,r){for(var e=new Array(r),n=t.codec.decode,i=0;i<r;i++)e[i]=n(t);return e}function u(t,r){var e=t.reserve(r),n=e+r;return _.toString.call(t.buffer,"utf-8",e,n)}function a(t,r){var e=t.reserve(r),n=e+r,i=_.slice.call(t.buffer,e,n);return k.from(i)}function s(t,r){var e=t.reserve(r),n=e+r,i=_.slice.call(t.buffer,e,n);return k.Uint8Array.from(i).buffer}function c(t,r){var e=t.reserve(r+1),n=t.buffer[e++],i=e+r,o=t.codec.getExtUnpacker(n);if(!o)throw new Error("Invalid ext type: "+(n?"0x"+n.toString(16):n));var f=_.slice.call(t.buffer,e,i);return o(f)}function h(t){var r=t.reserve(1);return t.buffer[r]}function l(t){var r=t.reserve(1),e=t.buffer[r];return 128&e?e-256:e}function p(t){var r=t.reserve(2),e=t.buffer;return e[r++]<<8|e[r]}function d(t){var r=t.reserve(2),e=t.buffer,n=e[r++]<<8|e[r];return 32768&n?n-65536:n}function y(t){var r=t.reserve(4),e=t.buffer;return 16777216*e[r++]+(e[r++]<<16)+(e[r++]<<8)+e[r]}function v(t){var r=t.reserve(4),e=t.buffer;return e[r++]<<24|e[r++]<<16|e[r++]<<8|e[r]}function g(t,r){return function(e){var n=e.reserve(t);return r.call(e.buffer,n,S)}}function b(t){return new P(this,t).toNumber()}function w(t){return new R(this,t).toNumber()}function E(t){return new P(this,t)}function A(t){return new R(this,t)}function m(t){return B.read(this,t,!1,23,4)}function x(t){return B.read(this,t,!1,52,8)}var B=t("ieee754"),U=t("int64-buffer"),P=U.Uint64BE,R=U.Int64BE;e.getReadFormat=n,e.readUint8=h;var k=t("./bufferish"),_=t("./bufferish-proto"),T="undefined"!=typeof Map,S=!0},{"./bufferish":8,"./bufferish-proto":6,ieee754:32,"int64-buffer":33}],24:[function(t,r,e){function n(t){var r=s.getReadFormat(t);return t&&t.useraw?o(r):i(r)}function i(t){var r,e=new Array(256);for(r=0;r<=127;r++)e[r]=f(r);for(r=128;r<=143;r++)e[r]=a(r-128,t.map);for(r=144;r<=159;r++)e[r]=a(r-144,t.array);for(r=160;r<=191;r++)e[r]=a(r-160,t.str);for(e[192]=f(null),e[193]=null,e[194]=f(!1),e[195]=f(!0),e[196]=u(t.uint8,t.bin),e[197]=u(t.uint16,t.bin),e[198]=u(t.uint32,t.bin),e[199]=u(t.uint8,t.ext),e[200]=u(t.uint16,t.ext),e[201]=u(t.uint32,t.ext),e[202]=t.float32,e[203]=t.float64,e[204]=t.uint8,e[205]=t.uint16,e[206]=t.uint32,e[207]=t.uint64,e[208]=t.int8,e[209]=t.int16,e[210]=t.int32,e[211]=t.int64,e[212]=a(1,t.ext),e[213]=a(2,t.ext),e[214]=a(4,t.ext),e[215]=a(8,t.ext),e[216]=a(16,t.ext),e[217]=u(t.uint8,t.str),e[218]=u(t.uint16,t.str),e[219]=u(t.uint32,t.str),e[220]=u(t.uint16,t.array),e[221]=u(t.uint32,t.array),e[222]=u(t.uint16,t.map),e[223]=u(t.uint32,t.map),r=224;r<=255;r++)e[r]=f(r-256);return e}function o(t){var r,e=i(t).slice();for(e[217]=e[196],e[218]=e[197],e[219]=e[198],r=160;r<=191;r++)e[r]=a(r-160,t.bin);return e}function f(t){return function(){return t}}function u(t,r){return function(e){var n=t(e);return r(e,n)}}function a(t,r){return function(e){return r(e,t)}}var s=t("./read-format");e.getReadToken=n},{"./read-format":23}],25:[function(t,r,e){function n(t){function r(t,r){var n=e[typeof r];if(!n)throw new Error('Unsupported type "'+typeof r+'": '+r);n(t,r)}var e=s.getWriteType(t);return r}function i(){var t=this.options;return this.encode=n(t),t&&t.preset&&a.setExtPackers(this),this}function o(t,r,e){function n(r){return e&&(r=e(r)),new u(r,t)}e=c.filter(e);var i=r.name;if(i&&"Object"!==i){var o=this.extPackers||(this.extPackers={});o[i]=n}else{var f=this.extEncoderList||(this.extEncoderList=[]);f.unshift([r,n])}}function f(t){var r=this.extPackers||(this.extPackers={}),e=t.constructor,n=e&&e.name&&r[e.name];if(n)return n;for(var i=this.extEncoderList||(this.extEncoderList=[]),o=i.length,f=0;f<o;f++){var u=i[f];if(e===u[0])return u[1]}}var u=t("./ext-buffer").ExtBuffer,a=t("./ext-packer"),s=t("./write-type"),c=t("./codec-base");c.install({addExtPacker:o,getExtPacker:f,init:i}),e.preset=i.call(c.preset)},{"./codec-base":9,"./ext-buffer":17,"./ext-packer":18,"./write-type":27}],26:[function(t,r,e){function n(t){return t&&t.uint8array?i():m||E.hasBuffer&&t&&t.safe?f():o()}function i(){var t=o();return t[202]=c(202,4,p),t[203]=c(203,8,d),t}function o(){var t=w.slice();return t[196]=u(196),t[197]=a(197),t[198]=s(198),t[199]=u(199),t[200]=a(200),t[201]=s(201),t[202]=c(202,4,x.writeFloatBE||p,!0),t[203]=c(203,8,x.writeDoubleBE||d,!0),t[204]=u(204),t[205]=a(205),t[206]=s(206),t[207]=c(207,8,h),t[208]=u(208),t[209]=a(209),t[210]=s(210),t[211]=c(211,8,l),t[217]=u(217),t[218]=a(218),t[219]=s(219),t[220]=a(220),t[221]=s(221),t[222]=a(222),t[223]=s(223),t}function f(){var t=w.slice();return t[196]=c(196,1,Buffer.prototype.writeUInt8),t[197]=c(197,2,Buffer.prototype.writeUInt16BE),t[198]=c(198,4,Buffer.prototype.writeUInt32BE),t[199]=c(199,1,Buffer.prototype.writeUInt8),t[200]=c(200,2,Buffer.prototype.writeUInt16BE),t[201]=c(201,4,Buffer.prototype.writeUInt32BE),t[202]=c(202,4,Buffer.prototype.writeFloatBE),t[203]=c(203,8,Buffer.prototype.writeDoubleBE),t[204]=c(204,1,Buffer.prototype.writeUInt8),t[205]=c(205,2,Buffer.prototype.writeUInt16BE),t[206]=c(206,4,Buffer.prototype.writeUInt32BE),t[207]=c(207,8,h),t[208]=c(208,1,Buffer.prototype.writeInt8),t[209]=c(209,2,Buffer.prototype.writeInt16BE),t[210]=c(210,4,Buffer.prototype.writeInt32BE),t[211]=c(211,8,l),t[217]=c(217,1,Buffer.prototype.writeUInt8),t[218]=c(218,2,Buffer.prototype.writeUInt16BE),t[219]=c(219,4,Buffer.prototype.writeUInt32BE),t[220]=c(220,2,Buffer.prototype.writeUInt16BE),t[221]=c(221,4,Buffer.prototype.writeUInt32BE),t[222]=c(222,2,Buffer.prototype.writeUInt16BE),t[223]=c(223,4,Buffer.prototype.writeUInt32BE),t}function u(t){return function(r,e){var n=r.reserve(2),i=r.buffer;i[n++]=t,i[n]=e}}function a(t){return function(r,e){var n=r.reserve(3),i=r.buffer;i[n++]=t,i[n++]=e>>>8,i[n]=e}}function s(t){return function(r,e){var n=r.reserve(5),i=r.buffer;i[n++]=t,i[n++]=e>>>24,i[n++]=e>>>16,i[n++]=e>>>8,i[n]=e}}function c(t,r,e,n){return function(i,o){var f=i.reserve(r+1);i.buffer[f++]=t,e.call(i.buffer,o,f,n)}}function h(t,r){new g(this,r,t)}function l(t,r){new b(this,r,t)}function p(t,r){y.write(this,t,r,!1,23,4)}function d(t,r){y.write(this,t,r,!1,52,8)}var y=t("ieee754"),v=t("int64-buffer"),g=v.Uint64BE,b=v.Int64BE,w=t("./write-uint8").uint8,E=t("./bufferish"),Buffer=E.global,A=E.hasBuffer&&"TYPED_ARRAY_SUPPORT"in Buffer,m=A&&!Buffer.TYPED_ARRAY_SUPPORT,x=E.hasBuffer&&Buffer.prototype||{};e.getWriteToken=n},{"./bufferish":8,"./write-uint8":28,ieee754:32,"int64-buffer":33}],27:[function(t,r,e){function n(t){function r(t,r){var e=r?195:194;_[e](t,r)}function e(t,r){var e,n=0|r;return r!==n?(e=203,void _[e](t,r)):(e=-32<=n&&n<=127?255&n:0<=n?n<=255?204:n<=65535?205:206:-128<=n?208:-32768<=n?209:210,void _[e](t,n))}function n(t,r){var e=207;_[e](t,r.toArray())}function o(t,r){var e=211;_[e](t,r.toArray())}function v(t){return t<32?1:t<=255?2:t<=65535?3:5}function g(t){return t<32?1:t<=65535?3:5}function b(t){function r(r,e){var n=e.length,i=5+3*n;r.offset=r.reserve(i);var o=r.buffer,f=t(n),u=r.offset+f;n=s.write.call(o,e,u);var a=t(n);if(f!==a){var c=u+a-f,h=u+n;s.copy.call(o,o,c,u,h)}var l=1===a?160+n:a<=3?215+a:219;_[l](r,n),r.offset+=n}return r}function w(t,r){if(null===r)return A(t,r);if(I(r))return Y(t,r);if(i(r))return m(t,r);if(f.isUint64BE(r))return n(t,r);if(u.isInt64BE(r))return o(t,r);var e=t.codec.getExtPacker(r);return e&&(r=e(r)),r instanceof l?U(t,r):void D(t,r)}function E(t,r){return I(r)?k(t,r):void w(t,r)}function A(t,r){var e=192;_[e](t,r)}function m(t,r){var e=r.length,n=e<16?144+e:e<=65535?220:221;_[n](t,e);for(var i=t.codec.encode,o=0;o<e;o++)i(t,r[o])}function x(t,r){var e=r.length,n=e<255?196:e<=65535?197:198;_[n](t,e),t.send(r)}function B(t,r){x(t,new Uint8Array(r))}function U(t,r){var e=r.buffer,n=e.length,i=y[n]||(n<255?199:n<=65535?200:201);_[i](t,n),h[r.type](t),t.send(e)}function P(t,r){var e=Object.keys(r),n=e.length,i=n<16?128+n:n<=65535?222:223;_[i](t,n);var o=t.codec.encode;e.forEach(function(e){o(t,e),o(t,r[e])})}function R(t,r){if(!(r instanceof Map))return P(t,r);var e=r.size,n=e<16?128+e:e<=65535?222:223;_[n](t,e);var i=t.codec.encode;r.forEach(function(r,e,n){i(t,e),i(t,r)})}function k(t,r){var e=r.length,n=e<32?160+e:e<=65535?218:219;_[n](t,e),t.send(r)}var _=c.getWriteToken(t),T=t&&t.useraw,S=p&&t&&t.binarraybuffer,I=S?a.isArrayBuffer:a.isBuffer,Y=S?B:x,C=d&&t&&t.usemap,D=C?R:P,O={boolean:r,function:A,number:e,object:T?E:w,string:b(T?g:v),symbol:A,undefined:A};return O}var i=t("isarray"),o=t("int64-buffer"),f=o.Uint64BE,u=o.Int64BE,a=t("./bufferish"),s=t("./bufferish-proto"),c=t("./write-token"),h=t("./write-uint8").uint8,l=t("./ext-buffer").ExtBuffer,p="undefined"!=typeof Uint8Array,d="undefined"!=typeof Map,y=[];y[1]=212,y[2]=213,y[4]=214,y[8]=215,y[16]=216,e.getWriteType=n},{"./bufferish":8,"./bufferish-proto":6,"./ext-buffer":17,"./write-token":26,"./write-uint8":28,"int64-buffer":33,isarray:34}],28:[function(t,r,e){function n(t){return function(r){var e=r.reserve(1);r.buffer[e]=t}}for(var i=e.uint8=new Array(256),o=0;o<=255;o++)i[o]=n(o)},{}],29:[function(t,r,e){(function(r){"use strict";function n(){try{var t=new Uint8Array(1);return t.__proto__={__proto__:Uint8Array.prototype,foo:function(){return 42}},42===t.foo()&&"function"==typeof t.subarray&&0===t.subarray(1,1).byteLength}catch(t){return!1}}function i(){return Buffer.TYPED_ARRAY_SUPPORT?2147483647:1073741823}function o(t,r){if(i()<r)throw new RangeError("Invalid typed array length");return Buffer.TYPED_ARRAY_SUPPORT?(t=new Uint8Array(r),t.__proto__=Buffer.prototype):(null===t&&(t=new Buffer(r)),t.length=r),t}function Buffer(t,r,e){if(!(Buffer.TYPED_ARRAY_SUPPORT||this instanceof Buffer))return new Buffer(t,r,e);if("number"==typeof t){if("string"==typeof r)throw new Error("If encoding is specified then the first argument must be a string");return s(this,t)}return f(this,t,r,e)}function f(t,r,e,n){if("number"==typeof r)throw new TypeError('"value" argument must not be a number');return"undefined"!=typeof ArrayBuffer&&r instanceof ArrayBuffer?l(t,r,e,n):"string"==typeof r?c(t,r,e):p(t,r)}function u(t){if("number"!=typeof t)throw new TypeError('"size" argument must be a number');if(t<0)throw new RangeError('"size" argument must not be negative')}function a(t,r,e,n){return u(r),r<=0?o(t,r):void 0!==e?"string"==typeof n?o(t,r).fill(e,n):o(t,r).fill(e):o(t,r)}function s(t,r){if(u(r),t=o(t,r<0?0:0|d(r)),!Buffer.TYPED_ARRAY_SUPPORT)for(var e=0;e<r;++e)t[e]=0;return t}function c(t,r,e){if("string"==typeof e&&""!==e||(e="utf8"),!Buffer.isEncoding(e))throw new TypeError('"encoding" must be a valid string encoding');var n=0|v(r,e);t=o(t,n);var i=t.write(r,e);return i!==n&&(t=t.slice(0,i)),t}function h(t,r){var e=r.length<0?0:0|d(r.length);t=o(t,e);for(var n=0;n<e;n+=1)t[n]=255&r[n];return t}function l(t,r,e,n){if(r.byteLength,e<0||r.byteLength<e)throw new RangeError("'offset' is out of bounds");if(r.byteLength<e+(n||0))throw new RangeError("'length' is out of bounds");return r=void 0===e&&void 0===n?new Uint8Array(r):void 0===n?new Uint8Array(r,e):new Uint8Array(r,e,n),Buffer.TYPED_ARRAY_SUPPORT?(t=r,t.__proto__=Buffer.prototype):t=h(t,r),t}function p(t,r){if(Buffer.isBuffer(r)){var e=0|d(r.length);return t=o(t,e),0===t.length?t:(r.copy(t,0,0,e),t)}if(r){if("undefined"!=typeof ArrayBuffer&&r.buffer instanceof ArrayBuffer||"length"in r)return"number"!=typeof r.length||H(r.length)?o(t,0):h(t,r);if("Buffer"===r.type&&Q(r.data))return h(t,r.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")}function d(t){if(t>=i())throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+i().toString(16)+" bytes");return 0|t}function y(t){return+t!=t&&(t=0),Buffer.alloc(+t)}function v(t,r){if(Buffer.isBuffer(t))return t.length;if("undefined"!=typeof ArrayBuffer&&"function"==typeof ArrayBuffer.isView&&(ArrayBuffer.isView(t)||t instanceof ArrayBuffer))return t.byteLength;"string"!=typeof t&&(t=""+t);var e=t.length;if(0===e)return 0;for(var n=!1;;)switch(r){case"ascii":case"latin1":case"binary":return e;case"utf8":case"utf-8":case void 0:return q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*e;case"hex":return e>>>1;case"base64":return X(t).length;default:if(n)return q(t).length;r=(""+r).toLowerCase(),n=!0}}function g(t,r,e){var n=!1;if((void 0===r||r<0)&&(r=0),r>this.length)return"";if((void 0===e||e>this.length)&&(e=this.length),e<=0)return"";if(e>>>=0,r>>>=0,e<=r)return"";for(t||(t="utf8");;)switch(t){case"hex":return I(this,r,e);case"utf8":case"utf-8":return k(this,r,e);case"ascii":return T(this,r,e);case"latin1":case"binary":return S(this,r,e);case"base64":return R(this,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return Y(this,r,e);default:if(n)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),n=!0}}function b(t,r,e){var n=t[r];t[r]=t[e],t[e]=n}function w(t,r,e,n,i){if(0===t.length)return-1;if("string"==typeof e?(n=e,e=0):e>2147483647?e=2147483647:e<-2147483648&&(e=-2147483648),e=+e,isNaN(e)&&(e=i?0:t.length-1),e<0&&(e=t.length+e),e>=t.length){if(i)return-1;e=t.length-1}else if(e<0){if(!i)return-1;e=0}if("string"==typeof r&&(r=Buffer.from(r,n)),Buffer.isBuffer(r))return 0===r.length?-1:E(t,r,e,n,i);if("number"==typeof r)return r=255&r,Buffer.TYPED_ARRAY_SUPPORT&&"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,r,e):Uint8Array.prototype.lastIndexOf.call(t,r,e):E(t,[r],e,n,i);throw new TypeError("val must be string, number or Buffer")}function E(t,r,e,n,i){function o(t,r){return 1===f?t[r]:t.readUInt16BE(r*f)}var f=1,u=t.length,a=r.length;if(void 0!==n&&(n=String(n).toLowerCase(),"ucs2"===n||"ucs-2"===n||"utf16le"===n||"utf-16le"===n)){if(t.length<2||r.length<2)return-1;f=2,u/=2,a/=2,e/=2}var s;if(i){var c=-1;for(s=e;s<u;s++)if(o(t,s)===o(r,c===-1?0:s-c)){if(c===-1&&(c=s),s-c+1===a)return c*f}else c!==-1&&(s-=s-c),c=-1}else for(e+a>u&&(e=u-a),s=e;s>=0;s--){for(var h=!0,l=0;l<a;l++)if(o(t,s+l)!==o(r,l)){h=!1;break}if(h)return s}return-1}function A(t,r,e,n){e=Number(e)||0;var i=t.length-e;n?(n=Number(n),n>i&&(n=i)):n=i;var o=r.length;if(o%2!==0)throw new TypeError("Invalid hex string");n>o/2&&(n=o/2);for(var f=0;f<n;++f){var u=parseInt(r.substr(2*f,2),16);if(isNaN(u))return f;t[e+f]=u}return f}function m(t,r,e,n){return G(q(r,t.length-e),t,e,n)}function x(t,r,e,n){return G(W(r),t,e,n)}function B(t,r,e,n){return x(t,r,e,n)}function U(t,r,e,n){return G(X(r),t,e,n)}function P(t,r,e,n){return G(J(r,t.length-e),t,e,n)}function R(t,r,e){return 0===r&&e===t.length?Z.fromByteArray(t):Z.fromByteArray(t.slice(r,e))}function k(t,r,e){e=Math.min(t.length,e);for(var n=[],i=r;i<e;){var o=t[i],f=null,u=o>239?4:o>223?3:o>191?2:1;if(i+u<=e){var a,s,c,h;switch(u){case 1:o<128&&(f=o);break;case 2:a=t[i+1],128===(192&a)&&(h=(31&o)<<6|63&a,h>127&&(f=h));break;case 3:a=t[i+1],s=t[i+2],128===(192&a)&&128===(192&s)&&(h=(15&o)<<12|(63&a)<<6|63&s,h>2047&&(h<55296||h>57343)&&(f=h));break;case 4:a=t[i+1],s=t[i+2],c=t[i+3],128===(192&a)&&128===(192&s)&&128===(192&c)&&(h=(15&o)<<18|(63&a)<<12|(63&s)<<6|63&c,h>65535&&h<1114112&&(f=h))}}null===f?(f=65533,u=1):f>65535&&(f-=65536,n.push(f>>>10&1023|55296),f=56320|1023&f),n.push(f),i+=u}return _(n)}function _(t){var r=t.length;if(r<=$)return String.fromCharCode.apply(String,t);for(var e="",n=0;n<r;)e+=String.fromCharCode.apply(String,t.slice(n,n+=$));return e}function T(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(127&t[i]);return n}function S(t,r,e){var n="";e=Math.min(t.length,e);for(var i=r;i<e;++i)n+=String.fromCharCode(t[i]);return n}function I(t,r,e){var n=t.length;(!r||r<0)&&(r=0),(!e||e<0||e>n)&&(e=n);for(var i="",o=r;o<e;++o)i+=V(t[o]);return i}function Y(t,r,e){for(var n=t.slice(r,e),i="",o=0;o<n.length;o+=2)i+=String.fromCharCode(n[o]+256*n[o+1]);return i}function C(t,r,e){if(t%1!==0||t<0)throw new RangeError("offset is not uint");if(t+r>e)throw new RangeError("Trying to access beyond buffer length")}function D(t,r,e,n,i,o){if(!Buffer.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(r>i||r<o)throw new RangeError('"value" argument is out of bounds');if(e+n>t.length)throw new RangeError("Index out of range")}function O(t,r,e,n){r<0&&(r=65535+r+1);for(var i=0,o=Math.min(t.length-e,2);i<o;++i)t[e+i]=(r&255<<8*(n?i:1-i))>>>8*(n?i:1-i)}function L(t,r,e,n){r<0&&(r=4294967295+r+1);for(var i=0,o=Math.min(t.length-e,4);i<o;++i)t[e+i]=r>>>8*(n?i:3-i)&255}function M(t,r,e,n,i,o){if(e+n>t.length)throw new RangeError("Index out of range");if(e<0)throw new RangeError("Index out of range")}function N(t,r,e,n,i){return i||M(t,r,e,4,3.4028234663852886e38,-3.4028234663852886e38),K.write(t,r,e,n,23,4),e+4}function F(t,r,e,n,i){return i||M(t,r,e,8,1.7976931348623157e308,-1.7976931348623157e308),K.write(t,r,e,n,52,8),e+8}function j(t){
if(t=z(t).replace(tt,""),t.length<2)return"";for(;t.length%4!==0;)t+="=";return t}function z(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function V(t){return t<16?"0"+t.toString(16):t.toString(16)}function q(t,r){r=r||1/0;for(var e,n=t.length,i=null,o=[],f=0;f<n;++f){if(e=t.charCodeAt(f),e>55295&&e<57344){if(!i){if(e>56319){(r-=3)>-1&&o.push(239,191,189);continue}if(f+1===n){(r-=3)>-1&&o.push(239,191,189);continue}i=e;continue}if(e<56320){(r-=3)>-1&&o.push(239,191,189),i=e;continue}e=(i-55296<<10|e-56320)+65536}else i&&(r-=3)>-1&&o.push(239,191,189);if(i=null,e<128){if((r-=1)<0)break;o.push(e)}else if(e<2048){if((r-=2)<0)break;o.push(e>>6|192,63&e|128)}else if(e<65536){if((r-=3)<0)break;o.push(e>>12|224,e>>6&63|128,63&e|128)}else{if(!(e<1114112))throw new Error("Invalid code point");if((r-=4)<0)break;o.push(e>>18|240,e>>12&63|128,e>>6&63|128,63&e|128)}}return o}function W(t){for(var r=[],e=0;e<t.length;++e)r.push(255&t.charCodeAt(e));return r}function J(t,r){for(var e,n,i,o=[],f=0;f<t.length&&!((r-=2)<0);++f)e=t.charCodeAt(f),n=e>>8,i=e%256,o.push(i),o.push(n);return o}function X(t){return Z.toByteArray(j(t))}function G(t,r,e,n){for(var i=0;i<n&&!(i+e>=r.length||i>=t.length);++i)r[i+e]=t[i];return i}function H(t){return t!==t}var Z=t("base64-js"),K=t("ieee754"),Q=t("isarray");e.Buffer=Buffer,e.SlowBuffer=y,e.INSPECT_MAX_BYTES=50,Buffer.TYPED_ARRAY_SUPPORT=void 0!==r.TYPED_ARRAY_SUPPORT?r.TYPED_ARRAY_SUPPORT:n(),e.kMaxLength=i(),Buffer.poolSize=8192,Buffer._augment=function(t){return t.__proto__=Buffer.prototype,t},Buffer.from=function(t,r,e){return f(null,t,r,e)},Buffer.TYPED_ARRAY_SUPPORT&&(Buffer.prototype.__proto__=Uint8Array.prototype,Buffer.__proto__=Uint8Array,"undefined"!=typeof Symbol&&Symbol.species&&Buffer[Symbol.species]===Buffer&&Object.defineProperty(Buffer,Symbol.species,{value:null,configurable:!0})),Buffer.alloc=function(t,r,e){return a(null,t,r,e)},Buffer.allocUnsafe=function(t){return s(null,t)},Buffer.allocUnsafeSlow=function(t){return s(null,t)},Buffer.isBuffer=function(t){return!(null==t||!t._isBuffer)},Buffer.compare=function(t,r){if(!Buffer.isBuffer(t)||!Buffer.isBuffer(r))throw new TypeError("Arguments must be Buffers");if(t===r)return 0;for(var e=t.length,n=r.length,i=0,o=Math.min(e,n);i<o;++i)if(t[i]!==r[i]){e=t[i],n=r[i];break}return e<n?-1:n<e?1:0},Buffer.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},Buffer.concat=function(t,r){if(!Q(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return Buffer.alloc(0);var e;if(void 0===r)for(r=0,e=0;e<t.length;++e)r+=t[e].length;var n=Buffer.allocUnsafe(r),i=0;for(e=0;e<t.length;++e){var o=t[e];if(!Buffer.isBuffer(o))throw new TypeError('"list" argument must be an Array of Buffers');o.copy(n,i),i+=o.length}return n},Buffer.byteLength=v,Buffer.prototype._isBuffer=!0,Buffer.prototype.swap16=function(){var t=this.length;if(t%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(var r=0;r<t;r+=2)b(this,r,r+1);return this},Buffer.prototype.swap32=function(){var t=this.length;if(t%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(var r=0;r<t;r+=4)b(this,r,r+3),b(this,r+1,r+2);return this},Buffer.prototype.swap64=function(){var t=this.length;if(t%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(var r=0;r<t;r+=8)b(this,r,r+7),b(this,r+1,r+6),b(this,r+2,r+5),b(this,r+3,r+4);return this},Buffer.prototype.toString=function(){var t=0|this.length;return 0===t?"":0===arguments.length?k(this,0,t):g.apply(this,arguments)},Buffer.prototype.equals=function(t){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===Buffer.compare(this,t)},Buffer.prototype.inspect=function(){var t="",r=e.INSPECT_MAX_BYTES;return this.length>0&&(t=this.toString("hex",0,r).match(/.{2}/g).join(" "),this.length>r&&(t+=" ... ")),"<Buffer "+t+">"},Buffer.prototype.compare=function(t,r,e,n,i){if(!Buffer.isBuffer(t))throw new TypeError("Argument must be a Buffer");if(void 0===r&&(r=0),void 0===e&&(e=t?t.length:0),void 0===n&&(n=0),void 0===i&&(i=this.length),r<0||e>t.length||n<0||i>this.length)throw new RangeError("out of range index");if(n>=i&&r>=e)return 0;if(n>=i)return-1;if(r>=e)return 1;if(r>>>=0,e>>>=0,n>>>=0,i>>>=0,this===t)return 0;for(var o=i-n,f=e-r,u=Math.min(o,f),a=this.slice(n,i),s=t.slice(r,e),c=0;c<u;++c)if(a[c]!==s[c]){o=a[c],f=s[c];break}return o<f?-1:f<o?1:0},Buffer.prototype.includes=function(t,r,e){return this.indexOf(t,r,e)!==-1},Buffer.prototype.indexOf=function(t,r,e){return w(this,t,r,e,!0)},Buffer.prototype.lastIndexOf=function(t,r,e){return w(this,t,r,e,!1)},Buffer.prototype.write=function(t,r,e,n){if(void 0===r)n="utf8",e=this.length,r=0;else if(void 0===e&&"string"==typeof r)n=r,e=this.length,r=0;else{if(!isFinite(r))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");r=0|r,isFinite(e)?(e=0|e,void 0===n&&(n="utf8")):(n=e,e=void 0)}var i=this.length-r;if((void 0===e||e>i)&&(e=i),t.length>0&&(e<0||r<0)||r>this.length)throw new RangeError("Attempt to write outside buffer bounds");n||(n="utf8");for(var o=!1;;)switch(n){case"hex":return A(this,t,r,e);case"utf8":case"utf-8":return m(this,t,r,e);case"ascii":return x(this,t,r,e);case"latin1":case"binary":return B(this,t,r,e);case"base64":return U(this,t,r,e);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return P(this,t,r,e);default:if(o)throw new TypeError("Unknown encoding: "+n);n=(""+n).toLowerCase(),o=!0}},Buffer.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};var $=4096;Buffer.prototype.slice=function(t,r){var e=this.length;t=~~t,r=void 0===r?e:~~r,t<0?(t+=e,t<0&&(t=0)):t>e&&(t=e),r<0?(r+=e,r<0&&(r=0)):r>e&&(r=e),r<t&&(r=t);var n;if(Buffer.TYPED_ARRAY_SUPPORT)n=this.subarray(t,r),n.__proto__=Buffer.prototype;else{var i=r-t;n=new Buffer(i,void 0);for(var o=0;o<i;++o)n[o]=this[o+t]}return n},Buffer.prototype.readUIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return n},Buffer.prototype.readUIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t+--r],i=1;r>0&&(i*=256);)n+=this[t+--r]*i;return n},Buffer.prototype.readUInt8=function(t,r){return r||C(t,1,this.length),this[t]},Buffer.prototype.readUInt16LE=function(t,r){return r||C(t,2,this.length),this[t]|this[t+1]<<8},Buffer.prototype.readUInt16BE=function(t,r){return r||C(t,2,this.length),this[t]<<8|this[t+1]},Buffer.prototype.readUInt32LE=function(t,r){return r||C(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},Buffer.prototype.readUInt32BE=function(t,r){return r||C(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},Buffer.prototype.readIntLE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=this[t],i=1,o=0;++o<r&&(i*=256);)n+=this[t+o]*i;return i*=128,n>=i&&(n-=Math.pow(2,8*r)),n},Buffer.prototype.readIntBE=function(t,r,e){t=0|t,r=0|r,e||C(t,r,this.length);for(var n=r,i=1,o=this[t+--n];n>0&&(i*=256);)o+=this[t+--n]*i;return i*=128,o>=i&&(o-=Math.pow(2,8*r)),o},Buffer.prototype.readInt8=function(t,r){return r||C(t,1,this.length),128&this[t]?(255-this[t]+1)*-1:this[t]},Buffer.prototype.readInt16LE=function(t,r){r||C(t,2,this.length);var e=this[t]|this[t+1]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt16BE=function(t,r){r||C(t,2,this.length);var e=this[t+1]|this[t]<<8;return 32768&e?4294901760|e:e},Buffer.prototype.readInt32LE=function(t,r){return r||C(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},Buffer.prototype.readInt32BE=function(t,r){return r||C(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},Buffer.prototype.readFloatLE=function(t,r){return r||C(t,4,this.length),K.read(this,t,!0,23,4)},Buffer.prototype.readFloatBE=function(t,r){return r||C(t,4,this.length),K.read(this,t,!1,23,4)},Buffer.prototype.readDoubleLE=function(t,r){return r||C(t,8,this.length),K.read(this,t,!0,52,8)},Buffer.prototype.readDoubleBE=function(t,r){return r||C(t,8,this.length),K.read(this,t,!1,52,8)},Buffer.prototype.writeUIntLE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;D(this,t,r,e,i,0)}var o=1,f=0;for(this[r]=255&t;++f<e&&(o*=256);)this[r+f]=t/o&255;return r+e},Buffer.prototype.writeUIntBE=function(t,r,e,n){if(t=+t,r=0|r,e=0|e,!n){var i=Math.pow(2,8*e)-1;D(this,t,r,e,i,0)}var o=e-1,f=1;for(this[r+o]=255&t;--o>=0&&(f*=256);)this[r+o]=t/f&255;return r+e},Buffer.prototype.writeUInt8=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,1,255,0),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),this[r]=255&t,r+1},Buffer.prototype.writeUInt16LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},Buffer.prototype.writeUInt16BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,65535,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},Buffer.prototype.writeUInt32LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r+3]=t>>>24,this[r+2]=t>>>16,this[r+1]=t>>>8,this[r]=255&t):L(this,t,r,!0),r+4},Buffer.prototype.writeUInt32BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,4294967295,0),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},Buffer.prototype.writeIntLE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);D(this,t,r,e,i-1,-i)}var o=0,f=1,u=0;for(this[r]=255&t;++o<e&&(f*=256);)t<0&&0===u&&0!==this[r+o-1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},Buffer.prototype.writeIntBE=function(t,r,e,n){if(t=+t,r=0|r,!n){var i=Math.pow(2,8*e-1);D(this,t,r,e,i-1,-i)}var o=e-1,f=1,u=0;for(this[r+o]=255&t;--o>=0&&(f*=256);)t<0&&0===u&&0!==this[r+o+1]&&(u=1),this[r+o]=(t/f>>0)-u&255;return r+e},Buffer.prototype.writeInt8=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,1,127,-128),Buffer.TYPED_ARRAY_SUPPORT||(t=Math.floor(t)),t<0&&(t=255+t+1),this[r]=255&t,r+1},Buffer.prototype.writeInt16LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8):O(this,t,r,!0),r+2},Buffer.prototype.writeInt16BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,2,32767,-32768),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>8,this[r+1]=255&t):O(this,t,r,!1),r+2},Buffer.prototype.writeInt32LE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,2147483647,-2147483648),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=255&t,this[r+1]=t>>>8,this[r+2]=t>>>16,this[r+3]=t>>>24):L(this,t,r,!0),r+4},Buffer.prototype.writeInt32BE=function(t,r,e){return t=+t,r=0|r,e||D(this,t,r,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),Buffer.TYPED_ARRAY_SUPPORT?(this[r]=t>>>24,this[r+1]=t>>>16,this[r+2]=t>>>8,this[r+3]=255&t):L(this,t,r,!1),r+4},Buffer.prototype.writeFloatLE=function(t,r,e){return N(this,t,r,!0,e)},Buffer.prototype.writeFloatBE=function(t,r,e){return N(this,t,r,!1,e)},Buffer.prototype.writeDoubleLE=function(t,r,e){return F(this,t,r,!0,e)},Buffer.prototype.writeDoubleBE=function(t,r,e){return F(this,t,r,!1,e)},Buffer.prototype.copy=function(t,r,e,n){if(e||(e=0),n||0===n||(n=this.length),r>=t.length&&(r=t.length),r||(r=0),n>0&&n<e&&(n=e),n===e)return 0;if(0===t.length||0===this.length)return 0;if(r<0)throw new RangeError("targetStart out of bounds");if(e<0||e>=this.length)throw new RangeError("sourceStart out of bounds");if(n<0)throw new RangeError("sourceEnd out of bounds");n>this.length&&(n=this.length),t.length-r<n-e&&(n=t.length-r+e);var i,o=n-e;if(this===t&&e<r&&r<n)for(i=o-1;i>=0;--i)t[i+r]=this[i+e];else if(o<1e3||!Buffer.TYPED_ARRAY_SUPPORT)for(i=0;i<o;++i)t[i+r]=this[i+e];else Uint8Array.prototype.set.call(t,this.subarray(e,e+o),r);return o},Buffer.prototype.fill=function(t,r,e,n){if("string"==typeof t){if("string"==typeof r?(n=r,r=0,e=this.length):"string"==typeof e&&(n=e,e=this.length),1===t.length){var i=t.charCodeAt(0);i<256&&(t=i)}if(void 0!==n&&"string"!=typeof n)throw new TypeError("encoding must be a string");if("string"==typeof n&&!Buffer.isEncoding(n))throw new TypeError("Unknown encoding: "+n)}else"number"==typeof t&&(t=255&t);if(r<0||this.length<r||this.length<e)throw new RangeError("Out of range index");if(e<=r)return this;r>>>=0,e=void 0===e?this.length:e>>>0,t||(t=0);var o;if("number"==typeof t)for(o=r;o<e;++o)this[o]=t;else{var f=Buffer.isBuffer(t)?t:q(new Buffer(t,n).toString()),u=f.length;for(o=0;o<e-r;++o)this[o+r]=f[o%u]}return this};var tt=/[^+\/0-9A-Za-z-_]/g}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"base64-js":30,ieee754:32,isarray:34}],30:[function(t,r,e){"use strict";function n(t){var r=t.length;if(r%4>0)throw new Error("Invalid string. Length must be a multiple of 4");return"="===t[r-2]?2:"="===t[r-1]?1:0}function i(t){return 3*t.length/4-n(t)}function o(t){var r,e,i,o,f,u,a=t.length;f=n(t),u=new h(3*a/4-f),i=f>0?a-4:a;var s=0;for(r=0,e=0;r<i;r+=4,e+=3)o=c[t.charCodeAt(r)]<<18|c[t.charCodeAt(r+1)]<<12|c[t.charCodeAt(r+2)]<<6|c[t.charCodeAt(r+3)],u[s++]=o>>16&255,u[s++]=o>>8&255,u[s++]=255&o;return 2===f?(o=c[t.charCodeAt(r)]<<2|c[t.charCodeAt(r+1)]>>4,u[s++]=255&o):1===f&&(o=c[t.charCodeAt(r)]<<10|c[t.charCodeAt(r+1)]<<4|c[t.charCodeAt(r+2)]>>2,u[s++]=o>>8&255,u[s++]=255&o),u}function f(t){return s[t>>18&63]+s[t>>12&63]+s[t>>6&63]+s[63&t]}function u(t,r,e){for(var n,i=[],o=r;o<e;o+=3)n=(t[o]<<16)+(t[o+1]<<8)+t[o+2],i.push(f(n));return i.join("")}function a(t){for(var r,e=t.length,n=e%3,i="",o=[],f=16383,a=0,c=e-n;a<c;a+=f)o.push(u(t,a,a+f>c?c:a+f));return 1===n?(r=t[e-1],i+=s[r>>2],i+=s[r<<4&63],i+="=="):2===n&&(r=(t[e-2]<<8)+t[e-1],i+=s[r>>10],i+=s[r>>4&63],i+=s[r<<2&63],i+="="),o.push(i),o.join("")}e.byteLength=i,e.toByteArray=o,e.fromByteArray=a;for(var s=[],c=[],h="undefined"!=typeof Uint8Array?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",p=0,d=l.length;p<d;++p)s[p]=l[p],c[l.charCodeAt(p)]=p;c["-".charCodeAt(0)]=62,c["_".charCodeAt(0)]=63},{}],31:[function(t,r,e){function n(){if(!(this instanceof n))return new n}!function(t){function e(t){for(var r in s)t[r]=s[r];return t}function n(t,r){return u(this,t).push(r),this}function i(t,r){function e(){o.call(n,t,e),r.apply(this,arguments)}var n=this;return e.originalListener=r,u(n,t).push(e),n}function o(t,r){function e(t){return t!==r&&t.originalListener!==r}var n,i=this;if(arguments.length){if(r){if(n=u(i,t,!0)){if(n=n.filter(e),!n.length)return o.call(i,t);i[a][t]=n}}else if(n=i[a],n&&(delete n[t],!Object.keys(n).length))return o.call(i)}else delete i[a];return i}function f(t,r){function e(t){t.call(o)}function n(t){t.call(o,r)}function i(t){t.apply(o,s)}var o=this,f=u(o,t,!0);if(!f)return!1;var a=arguments.length;if(1===a)f.forEach(e);else if(2===a)f.forEach(n);else{var s=Array.prototype.slice.call(arguments,1);f.forEach(i)}return!!f.length}function u(t,r,e){if(!e||t[a]){var n=t[a]||(t[a]={});return n[r]||(n[r]=[])}}"undefined"!=typeof r&&(r.exports=t);var a="listeners",s={on:n,once:i,off:o,emit:f};e(t.prototype),t.mixin=e}(n)},{}],32:[function(t,r,e){e.read=function(t,r,e,n,i){var o,f,u=8*i-n-1,a=(1<<u)-1,s=a>>1,c=-7,h=e?i-1:0,l=e?-1:1,p=t[r+h];for(h+=l,o=p&(1<<-c)-1,p>>=-c,c+=u;c>0;o=256*o+t[r+h],h+=l,c-=8);for(f=o&(1<<-c)-1,o>>=-c,c+=n;c>0;f=256*f+t[r+h],h+=l,c-=8);if(0===o)o=1-s;else{if(o===a)return f?NaN:(p?-1:1)*(1/0);f+=Math.pow(2,n),o-=s}return(p?-1:1)*f*Math.pow(2,o-n)},e.write=function(t,r,e,n,i,o){var f,u,a,s=8*o-i-1,c=(1<<s)-1,h=c>>1,l=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,p=n?0:o-1,d=n?1:-1,y=r<0||0===r&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(u=isNaN(r)?1:0,f=c):(f=Math.floor(Math.log(r)/Math.LN2),r*(a=Math.pow(2,-f))<1&&(f--,a*=2),r+=f+h>=1?l/a:l*Math.pow(2,1-h),r*a>=2&&(f++,a/=2),f+h>=c?(u=0,f=c):f+h>=1?(u=(r*a-1)*Math.pow(2,i),f+=h):(u=r*Math.pow(2,h-1)*Math.pow(2,i),f=0));i>=8;t[e+p]=255&u,p+=d,u/=256,i-=8);for(f=f<<i|u,s+=i;s>0;t[e+p]=255&f,p+=d,f/=256,s-=8);t[e+p-d]|=128*y}},{}],33:[function(t,r,e){(function(Buffer){var t,r,n,i;!function(e){function o(t,r,n){function i(t,r,e,n){return this instanceof i?v(this,t,r,e,n):new i(t,r,e,n)}function o(t){return!(!t||!t[F])}function v(t,r,e,n,i){if(E&&A&&(r instanceof A&&(r=new E(r)),n instanceof A&&(n=new E(n))),!(r||e||n||g))return void(t.buffer=h(m,0));if(!s(r,e)){var o=g||Array;i=e,n=r,e=0,r=new o(8)}t.buffer=r,t.offset=e|=0,b!==typeof n&&("string"==typeof n?x(r,e,n,i||10):s(n,i)?c(r,e,n,i):"number"==typeof i?(k(r,e+T,n),k(r,e+S,i)):n>0?O(r,e,n):n<0?L(r,e,n):c(r,e,m,0))}function x(t,r,e,n){var i=0,o=e.length,f=0,u=0;"-"===e[0]&&i++;for(var a=i;i<o;){var s=parseInt(e[i++],n);if(!(s>=0))break;u=u*n+s,f=f*n+Math.floor(u/B),u%=B}a&&(f=~f,u?u=B-u:f++),k(t,r+T,f),k(t,r+S,u)}function P(){var t=this.buffer,r=this.offset,e=_(t,r+T),i=_(t,r+S);return n||(e|=0),e?e*B+i:i}function R(t){var r=this.buffer,e=this.offset,i=_(r,e+T),o=_(r,e+S),f="",u=!n&&2147483648&i;for(u&&(i=~i,o=B-o),t=t||10;;){var a=i%t*B+o;if(i=Math.floor(i/t),o=Math.floor(a/t),f=(a%t).toString(t)+f,!i&&!o)break}return u&&(f="-"+f),f}function k(t,r,e){t[r+D]=255&e,e>>=8,t[r+C]=255&e,e>>=8,t[r+Y]=255&e,e>>=8,t[r+I]=255&e}function _(t,r){return t[r+I]*U+(t[r+Y]<<16)+(t[r+C]<<8)+t[r+D]}var T=r?0:4,S=r?4:0,I=r?0:3,Y=r?1:2,C=r?2:1,D=r?3:0,O=r?l:d,L=r?p:y,M=i.prototype,N="is"+t,F="_"+N;return M.buffer=void 0,M.offset=0,M[F]=!0,M.toNumber=P,M.toString=R,M.toJSON=P,M.toArray=f,w&&(M.toBuffer=u),E&&(M.toArrayBuffer=a),i[N]=o,e[t]=i,i}function f(t){var r=this.buffer,e=this.offset;return g=null,t!==!1&&0===e&&8===r.length&&x(r)?r:h(r,e)}function u(t){var r=this.buffer,e=this.offset;if(g=w,t!==!1&&0===e&&8===r.length&&Buffer.isBuffer(r))return r;var n=new w(8);return c(n,0,r,e),n}function a(t){var r=this.buffer,e=this.offset,n=r.buffer;if(g=E,t!==!1&&0===e&&n instanceof A&&8===n.byteLength)return n;var i=new E(8);return c(i,0,r,e),i.buffer}function s(t,r){var e=t&&t.length;return r|=0,e&&r+8<=e&&"string"!=typeof t[r]}function c(t,r,e,n){r|=0,n|=0;for(var i=0;i<8;i++)t[r++]=255&e[n++]}function h(t,r){return Array.prototype.slice.call(t,r,r+8)}function l(t,r,e){for(var n=r+8;n>r;)t[--n]=255&e,e/=256}function p(t,r,e){var n=r+8;for(e++;n>r;)t[--n]=255&-e^255,e/=256}function d(t,r,e){for(var n=r+8;r<n;)t[r++]=255&e,e/=256}function y(t,r,e){var n=r+8;for(e++;r<n;)t[r++]=255&-e^255,e/=256}function v(t){return!!t&&"[object Array]"==Object.prototype.toString.call(t)}var g,b="undefined",w=b!==typeof Buffer&&Buffer,E=b!==typeof Uint8Array&&Uint8Array,A=b!==typeof ArrayBuffer&&ArrayBuffer,m=[0,0,0,0,0,0,0,0],x=Array.isArray||v,B=4294967296,U=16777216;t=o("Uint64BE",!0,!0),r=o("Int64BE",!0,!1),n=o("Uint64LE",!1,!0),i=o("Int64LE",!1,!1)}("object"==typeof e&&"string"!=typeof e.nodeName?e:this||{})}).call(this,t("buffer").Buffer)},{buffer:29}],34:[function(t,r,e){var n={}.toString;r.exports=Array.isArray||function(t){return"[object Array]"==n.call(t)}},{}]},{},[1])(1)});

    /*
 *  BinarySocket - Binary Web Sockets
 *  Copyright (C) 2016  Roland Singer <roland.singer[at]desertbit.com>
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


var BinarySocket = function() {
  // Turn on strict mode.
  'use strict';

  // Include the dependencies.
  /**
 * byte-buffer v1.0.3
 * Copyright (c) 2012-2015 Tim Kurvers <tim@moonsphere.net>
 *
 * Wrapper for JavaScript's ArrayBuffer/DataView.
 *
 * Licensed under the MIT license.
 */

!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.ByteBuffer=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var ByteBuffer = (function () {

  // Creates a new ByteBuffer
  // - from given source (assumed to be number of bytes when numeric)
  // - with given byte order (defaults to big-endian)
  // - with given implicit growth strategy (defaults to false)

  function ByteBuffer() {
    var source = arguments[0] === undefined ? 0 : arguments[0];
    var order = arguments[1] === undefined ? this.constructor.BIG_ENDIAN : arguments[1];
    var implicitGrowth = arguments[2] === undefined ? false : arguments[2];

    _classCallCheck(this, ByteBuffer);

    // Holds buffer
    this._buffer = null;

    // Holds raw buffer
    this._raw = null;

    // Holds internal view for reading/writing
    this._view = null;

    // Holds byte order
    this._order = !!order;

    // Holds implicit growth strategy
    this._implicitGrowth = !!implicitGrowth;

    // Holds read/write index
    this._index = 0;

    // Attempt to extract a buffer from given source
    var buffer = this._extractBuffer(source, true);

    // On failure, assume source is a primitive indicating the number of bytes
    if (!buffer) {
      buffer = new ArrayBuffer(source);
    }

    // Assign new buffer
    this.buffer = buffer;
  }

  _createClass(ByteBuffer, [{
    key: '_sanitizeIndex',

    // Sanitizes read/write index
    value: function _sanitizeIndex() {
      if (this._index < 0) {
        this._index = 0;
      }
      if (this._index > this.length) {
        this._index = this.length;
      }
    }
  }, {
    key: '_extractBuffer',

    // Extracts buffer from given source and optionally clones it
    value: function _extractBuffer(source) {
      var clone = arguments[1] === undefined ? false : arguments[1];

      // Whether source is a byte-aware object
      if (source && typeof source.byteLength !== 'undefined') {

        // Determine whether source is a view or a raw buffer
        if (typeof source.buffer !== 'undefined') {
          return clone ? source.buffer.slice(0) : source.buffer;
        } else {
          return clone ? source.slice(0) : source;
        }

        // Whether source is a sequence of bytes
      } else if (source && typeof source.length !== 'undefined') {

        // Although Uint8Array's constructor succeeds when given strings,
        // it does not correctly instantiate the buffer
        if (source.constructor == String) {
          return null;
        }

        try {
          return new Uint8Array(source).buffer;
        } catch (error) {
          return null;
        }

        // No buffer found
      } else {
        return null;
      }
    }
  }, {
    key: 'front',

    // Sets index to front of the buffer
    value: function front() {
      this._index = 0;
      return this;
    }
  }, {
    key: 'end',

    // Sets index to end of the buffer
    value: function end() {
      this._index = this.length;
      return this;
    }
  }, {
    key: 'seek',

    // Seeks given number of bytes
    // Note: Backwards seeking is supported
    value: function seek() {
      var bytes = arguments[0] === undefined ? 1 : arguments[0];

      this.index += bytes;
      return this;
    }
  }, {
    key: 'read',

    // Reads sequence of given number of bytes (defaults to number of bytes available)
    value: function read() {
      var bytes = arguments[0] === undefined ? this.available : arguments[0];

      if (bytes > this.available) {
        throw new Error('Cannot read ' + bytes + ' byte(s), ' + this.available + ' available');
      }

      if (bytes <= 0) {
        throw new RangeError('Invalid number of bytes ' + bytes);
      }

      var value = new ByteBuffer(this._buffer.slice(this._index, this._index + bytes), this.order);
      this._index += bytes;
      return value;
    }
  }, {
    key: 'write',

    // Writes sequence of bytes
    value: function write(sequence) {
      var view;

      // Ensure we're dealing with a Uint8Array view
      if (!(sequence instanceof Uint8Array)) {

        // Extract the buffer from the sequence
        var buffer = this._extractBuffer(sequence);
        if (!buffer) {
          throw new TypeError('Cannot write ' + sequence + ', not a sequence');
        }

        // And create a new Uint8Array view for it
        view = new Uint8Array(buffer);
      } else {
        view = sequence;
      }

      var available = this.available;
      if (view.byteLength > available) {
        if (this._implicitGrowth) {
          this.append(view.byteLength - available);
        } else {
          throw new Error('Cannot write ' + sequence + ' using ' + view.byteLength + ' byte(s), ' + this.available + ' available');
        }
      }

      this._raw.set(view, this._index);
      this._index += view.byteLength;
      return this;
    }
  }, {
    key: 'readString',

    // Reads UTF-8 encoded string of given number of bytes (defaults to number of bytes available)
    //
    // Based on David Flanagan's BufferView (https://github.com/davidflanagan/BufferView/blob/master/BufferView.js//L195)
    value: function readString() {
      var bytes = arguments[0] === undefined ? this.available : arguments[0];

      if (bytes > this.available) {
        throw new Error('Cannot read ' + bytes + ' byte(s), ' + this.available + ' available');
      }

      if (bytes <= 0) {
        throw new RangeError('Invalid number of bytes ' + bytes);
      }

      // Local reference
      var raw = this._raw;

      // Holds decoded characters
      var codepoints = [];

      // Index into codepoints
      var c = 0;

      // Bytes
      var b1,
          b2,
          b3,
          b4 = null;

      // Target index
      var target = this._index + bytes;

      while (this._index < target) {
        b1 = raw[this._index];

        if (b1 < 128) {
          // One byte sequence
          codepoints[c++] = b1;
          this._index++;
        } else if (b1 < 194) {
          throw new Error('Unexpected continuation byte');
        } else if (b1 < 224) {
          // Two byte sequence
          b2 = raw[this._index + 1];

          if (b2 < 128 || b2 > 191) {
            throw new Error('Bad continuation byte');
          }

          codepoints[c++] = ((b1 & 31) << 6) + (b2 & 63);

          this._index += 2;
        } else if (b1 < 240) {

          // Three byte sequence
          b2 = raw[this._index + 1];

          if (b2 < 128 || b2 > 191) {
            throw new Error('Bad continuation byte');
          }

          b3 = raw[this._index + 2];

          if (b3 < 128 || b3 > 191) {
            throw new Error('Bad continuation byte');
          }

          codepoints[c++] = ((b1 & 15) << 12) + ((b2 & 63) << 6) + (b3 & 63);

          this._index += 3;
        } else if (b1 < 245) {
          // Four byte sequence
          b2 = raw[this._index + 1];

          if (b2 < 128 || b2 > 191) {
            throw new Error('Bad continuation byte');
          }

          b3 = raw[this._index + 2];

          if (b3 < 128 || b3 > 191) {
            throw new Error('Bad continuation byte');
          }

          b4 = raw[this._index + 3];

          if (b4 < 128 || b4 > 191) {
            throw new Error('Bad continuation byte');
          }

          var cp = ((b1 & 7) << 18) + ((b2 & 63) << 12) + ((b3 & 63) << 6) + (b4 & 63);
          cp -= 65536;

          // Turn code point into two surrogate pairs
          codepoints[c++] = 55296 + ((cp & 1047552) >>> 10);
          codepoints[c++] = 56320 + (cp & 1023);

          this._index += 4;
        } else {
          throw new Error('Illegal byte');
        }
      }

      // Browsers may have hardcoded or implicit limits on the array length when applying a function
      // See: https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Function/apply//apply_and_built-in_functions
      var limit = 1 << 16;
      var length = codepoints.length;
      if (length < limit) {
        return String.fromCharCode.apply(String, codepoints);
      } else {
        var chars = [];
        var i = 0;
        while (i < length) {
          chars.push(String.fromCharCode.apply(String, codepoints.slice(i, i + limit)));
          i += limit;
        }
        return chars.join('');
      }
    }
  }, {
    key: 'writeString',

    // Writes UTF-8 encoded string
    // Note: Does not write string length or terminator
    //
    // Based on David Flanagan's BufferView (https://github.com/davidflanagan/BufferView/blob/master/BufferView.js//L264)
    value: function writeString(string) {

      // Encoded UTF-8 bytes
      var bytes = [];

      // String length, offset and byte offset
      var length = string.length;
      var i = 0;
      var b = 0;

      while (i < length) {
        var c = string.charCodeAt(i);

        if (c <= 127) {
          // One byte sequence
          bytes[b++] = c;
        } else if (c <= 2047) {
          // Two byte sequence
          bytes[b++] = 192 | (c & 1984) >>> 6;
          bytes[b++] = 128 | c & 63;
        } else if (c <= 55295 || c >= 57344 && c <= 65535) {
          // Three byte sequence
          // Source character is not a UTF-16 surrogate
          bytes[b++] = 224 | (c & 61440) >>> 12;
          bytes[b++] = 128 | (c & 4032) >>> 6;
          bytes[b++] = 128 | c & 63;
        } else {
          // Four byte sequence
          if (i == length - 1) {
            throw new Error('Unpaired surrogate ' + string[i] + ' (index ' + i + ')');
          }

          // Retrieve surrogate
          var d = string.charCodeAt(++i);
          if (c < 55296 || c > 56319 || d < 56320 || d > 57343) {
            throw new Error('Unpaired surrogate ' + string[i] + ' (index ' + i + ')');
          }

          var cp = ((c & 1023) << 10) + (d & 1023) + 65536;

          bytes[b++] = 240 | (cp & 1835008) >>> 18;
          bytes[b++] = 128 | (cp & 258048) >>> 12;
          bytes[b++] = 128 | (cp & 4032) >>> 6;
          bytes[b++] = 128 | cp & 63;
        }

        ++i;
      }

      this.write(bytes);

      return bytes.length;
    }
  }, {
    key: 'readCString',

    // Aliases for reading/writing UTF-8 encoded strings
    // readUTFChars: this.::readString
    // writeUTFChars: this.::writeString

    // Reads UTF-8 encoded C-string (excluding the actual NULL-byte)
    value: function readCString() {
      var bytes = this._raw;
      var length = bytes.length;
      var i = this._index;
      while (bytes[i] != 0 && i < length) {
        ++i;
      }

      length = i - this._index;
      if (length > 0) {
        var string = this.readString(length);
        this.readByte();
        return string;
      }

      return null;
    }
  }, {
    key: 'writeCString',

    // Writes UTF-8 encoded C-string (NULL-terminated)
    value: function writeCString(string) {
      var bytes = this.writeString(string);
      this.writeByte(0);
      return ++bytes;
    }
  }, {
    key: 'prepend',

    // Prepends given number of bytes
    value: function prepend(bytes) {
      if (bytes <= 0) {
        throw new RangeError('Invalid number of bytes ' + bytes);
      }

      var view = new Uint8Array(this.length + bytes);
      view.set(this._raw, bytes);
      this._index += bytes;
      this.buffer = view.buffer;
      return this;
    }
  }, {
    key: 'append',

    // Appends given number of bytes
    value: function append(bytes) {
      if (bytes <= 0) {
        throw new RangeError('Invalid number of bytes ' + bytes);
      }

      var view = new Uint8Array(this.length + bytes);
      view.set(this._raw, 0);
      this.buffer = view.buffer;
      return this;
    }
  }, {
    key: 'clip',

    // Clips this buffer
    value: function clip() {
      var begin = arguments[0] === undefined ? this._index : arguments[0];
      var end = arguments[1] === undefined ? this.length : arguments[1];

      if (begin < 0) {
        begin = this.length + begin;
      }
      var buffer = this._buffer.slice(begin, end);
      this._index -= begin;
      this.buffer = buffer;
      return this;
    }
  }, {
    key: 'slice',

    // Slices this buffer
    value: function slice() {
      var begin = arguments[0] === undefined ? 0 : arguments[0];
      var end = arguments[1] === undefined ? this.length : arguments[1];

      var slice = new ByteBuffer(this._buffer.slice(begin, end), this.order);
      return slice;
    }
  }, {
    key: 'clone',

    // Clones this buffer
    value: function clone() {
      var clone = new ByteBuffer(this._buffer.slice(0), this.order, this.implicitGrowth);
      clone.index = this._index;
      return clone;
    }
  }, {
    key: 'reverse',

    // Reverses this buffer
    value: function reverse() {
      Array.prototype.reverse.call(this._raw);
      this._index = 0;
      return this;
    }
  }, {
    key: 'toArray',

    // Array of bytes in this buffer
    value: function toArray() {
      return Array.prototype.slice.call(this._raw, 0);
    }
  }, {
    key: 'toString',

    // Short string representation of this buffer
    value: function toString() {
      var order = this._order == this.constructor.BIG_ENDIAN ? 'big-endian' : 'little-endian';
      return '[ByteBuffer; Order: ' + order + '; Length: ' + this.length + '; Index: ' + this._index + '; Available: ' + this.available + ']';
    }
  }, {
    key: 'toHex',

    // Hex representation of this buffer with given spacer
    value: function toHex() {
      var spacer = arguments[0] === undefined ? ' ' : arguments[0];

      return Array.prototype.map.call(this._raw, function (byte) {
        return ('00' + byte.toString(16).toUpperCase()).slice(-2);
      }).join(spacer);
    }
  }, {
    key: 'toASCII',

    // ASCII representation of this buffer with given spacer and optional byte alignment
    value: function toASCII() {
      var spacer = arguments[0] === undefined ? ' ' : arguments[0];
      var align = arguments[1] === undefined ? true : arguments[1];
      var unknown = arguments[2] === undefined ? '�' : arguments[2];

      var prefix = align ? ' ' : '';
      return Array.prototype.map.call(this._raw, function (byte) {
        return byte < 32 || byte > 126 ? prefix + unknown : prefix + String.fromCharCode(byte);
      }).join(spacer);
    }
  }, {
    key: 'buffer',

    // Retrieves buffer
    get: function () {
      return this._buffer;
    },

    // Sets new buffer and sanitizes read/write index
    set: function (buffer) {
      this._buffer = buffer;
      this._raw = new Uint8Array(this._buffer);
      this._view = new DataView(this._buffer);
      this._sanitizeIndex();
    }
  }, {
    key: 'raw',

    // Retrieves raw buffer
    get: function () {
      return this._raw;
    }
  }, {
    key: 'view',

    // Retrieves view
    get: function () {
      return this._view;
    }
  }, {
    key: 'length',

    // Retrieves number of bytes
    get: function () {
      return this._buffer.byteLength;
    }
  }, {
    key: 'byteLength',

    // Retrieves number of bytes
    // Note: This allows for ByteBuffer to be detected as a proper source by its own constructor
    get: function () {
      return this.length;
    }
  }, {
    key: 'order',

    // Retrieves byte order
    get: function () {
      return this._order;
    },

    // Sets byte order
    set: function (order) {
      this._order = !!order;
    }
  }, {
    key: 'implicitGrowth',

    // Retrieves implicit growth strategy
    get: function () {
      return this._implicitGrowth;
    },

    // Sets implicit growth strategy
    set: function (implicitGrowth) {
      this._implicitGrowth = !!implicitGrowth;
    }
  }, {
    key: 'index',

    // Retrieves read/write index
    get: function () {
      return this._index;
    },

    // Sets read/write index
    set: function (index) {
      if (index < 0 || index > this.length) {
        throw new RangeError('Invalid index ' + index + ', should be between 0 and ' + this.length);
      }

      this._index = index;
    }
  }, {
    key: 'available',

    // Retrieves number of available bytes
    get: function () {
      return this.length - this._index;
    }
  }], [{
    key: 'LITTLE_ENDIAN',

    // Byte order constants
    value: true,
    enumerable: true
  }, {
    key: 'BIG_ENDIAN',
    value: false,
    enumerable: true
  }]);

  return ByteBuffer;
})();

// Generic reader
var reader = function reader(method, bytes) {
  return function () {
    var order = arguments[0] === undefined ? this._order : arguments[0];

    if (bytes > this.available) {
      throw new Error('Cannot read ' + bytes + ' byte(s), ' + this.available + ' available');
    }

    var value = this._view[method](this._index, order);
    this._index += bytes;
    return value;
  };
};

// Generic writer
var writer = function writer(method, bytes) {
  return function (value) {
    var order = arguments[1] === undefined ? this._order : arguments[1];

    var available = this.available;
    if (bytes > available) {
      if (this._implicitGrowth) {
        this.append(bytes - available);
      } else {
        throw new Error('Cannot write ' + value + ' using ' + bytes + ' byte(s), ' + available + ' available');
      }
    }

    this._view[method](this._index, value, order);
    this._index += bytes;
    return this;
  };
};

// Readers for bytes, shorts, integers, floats and doubles
ByteBuffer.prototype.readByte = reader('getInt8', 1);
ByteBuffer.prototype.readUnsignedByte = reader('getUint8', 1);
ByteBuffer.prototype.readShort = reader('getInt16', 2);
ByteBuffer.prototype.readUnsignedShort = reader('getUint16', 2);
ByteBuffer.prototype.readInt = reader('getInt32', 4);
ByteBuffer.prototype.readUnsignedInt = reader('getUint32', 4);
ByteBuffer.prototype.readFloat = reader('getFloat32', 4);
ByteBuffer.prototype.readDouble = reader('getFloat64', 8);

// Writers for bytes, shorts, integers, floats and doubles
ByteBuffer.prototype.writeByte = writer('setInt8', 1);
ByteBuffer.prototype.writeUnsignedByte = writer('setUint8', 1);
ByteBuffer.prototype.writeShort = writer('setInt16', 2);
ByteBuffer.prototype.writeUnsignedShort = writer('setUint16', 2);
ByteBuffer.prototype.writeInt = writer('setInt32', 4);
ByteBuffer.prototype.writeUnsignedInt = writer('setUint32', 4);
ByteBuffer.prototype.writeFloat = writer('setFloat32', 4);
ByteBuffer.prototype.writeDouble = writer('setFloat64', 8);

module.exports = ByteBuffer;
},{}]},{},[1])
(1)
});

  /*
 *  BinarySocket - Binary Web Sockets
 *  Copyright (C) 2016  Roland Singer <roland.singer[at]desertbit.com>
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
*  This code lives inside the BinarySocket function.
*/

var utils = {
  // Mimics jQuery's extend method.
  // Source: http://stackoverflow.com/questions/11197247/javascript-equivalent-of-jquerys-extend-method
  extend: function() {
    for(var i=1; i<arguments.length; i++)
        for(var key in arguments[i])
            if(arguments[i].hasOwnProperty(key))
                arguments[0][key] = arguments[i][key];
    return arguments[0];
  },

  // Return a function which is triggered only once within the limit duration.
  // If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  throttle: function(callback, limit, immediate) {
    var wait = false;
    return function () {
      var context = this, args = arguments;
        if (!wait) {
          if (immediate) { callback.apply(context, args); }
          wait = true;
          setTimeout(function () {
            wait = false;
            if (!immediate) { callback.apply(context, args); }
          }, limit);
        }
      };
  }
};

  /*
 *  BinarySocket - Binary Web Sockets
 *  Copyright (C) 2016  Roland Singer <roland.singer[at]desertbit.com>
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
 *  This code lives inside the BinarySocket function.
 */

var openSocket = function(host, options) {
  // Include the dependencies.
  /*
 *  BinarySocket - Binary Web Sockets
 *  Copyright (C) 2016  Roland Singer <roland.singer[at]desertbit.com>
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
*  This code lives inside the BinarySocket function.
*/

var newWebSocket = function () {
  /*
   * Variables
   */

  var s = {},
      ws;



  /*
   * Socket layer implementation.
   */

  s.open = function () {
    try {
        // Generate the websocket url.
        var url;
        if (host.match("^https://")) {
            url = "wss" + host.substr(5);
        } else {
            url = "ws" + host.substr(4);
        }

        // Open the websocket connection
        ws = new WebSocket(url);
        ws.binaryType = 'arraybuffer';

        // Set the callback handlers
        ws.onmessage = function(event) {
            s.onMessage(event.data);
        };

        ws.onerror = function(event) {
            var msg = "the websocket closed the connection with ";
            if (event.code) {
                msg += "the error code: " + event.code;
            }
            else {
                msg += "an error.";
            }

            s.onError(msg);
        };

        ws.onclose = function() {
            s.onClose();
        };

        ws.onopen = function() {
            s.onOpen();
        };
    } catch (e) {
        s.onError();
    }
  };

  s.send = function (data) {
    // Send the data to the server
    ws.send(data);
  };

  s.close = function() {
    // Close the websocket if defined.
    if (ws) {
      try {
        ws.close();
      } catch (e) {}
    }

    ws = undefined;
  };

  return s;
};

  /*
 *  BinarySocket - Binary Web Sockets
 *  Copyright (C) 2016  Roland Singer <roland.singer[at]desertbit.com>
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
 *  This code lives inside the BinarySocket function.
 */

var newAjaxSocket = function () {
  /*
   * Constants
   */

  var sendTimeout = 30000,
      pollTimeout = 45000;

  var DataDelimiter = '#';

  var RequestType = {
      Init: 0,
      Push: 1,
      Poll: 2
  };

  var PollType = {
      Data:    0,
      Timeout: 1,
      Closed:  2
  };



  /*
   * Variables
   */

   var s = {},
       uid, pollToken, pushToken,
       pollXhr = false,
       sendXhr = false,
       poll,
       pushActive = false,
       pushBuffer = [];



  /*
   * Methods
   */

  function postAjax(url, timeout, data, success, error) {
    var xhr = new XMLHttpRequest();

    xhr.onload = function() {
      success(xhr.response);
    };

    xhr.onerror = function() {
      error();
    };

    xhr.ontimeout = function() {
      error("timeout");
    };

    xhr.open('POST', url, true);
    xhr.responseType = "arraybuffer";
    xhr.timeout = timeout;
    xhr.send(new DataView(data));

    return xhr;
  }

  function stopRequests() {
    // Set the poll function to a dummy function.
    // This will prevent further poll calls.
    poll = function() {};

    // Kill the ajax requests.
    if (pollXhr) {
        pollXhr.abort();
    }
    if (sendXhr) {
        sendXhr.abort();
    }
  }

  function triggerClosed() {
    // Stop the ajax requests.
    stopRequests();

    // Trigger the event.
    s.onClose();
  }

  function triggerError(msg) {
    // Stop the ajax requests.
    stopRequests();

    // Create the error message.
    if (!msg) {
      msg = "the ajax socket closed the connection with an error.";
    }

    // Trigger the event.
    s.onError(msg);
  }

  function send(reqType, headerStr, data, callback) {
    var b = new ByteBuffer(3, ByteBuffer.BIG_ENDIAN, true);
    b.writeByte(reqType);

    var headerStrLen = 0;
    if (headerStr && headerStr.length > 0) {
      headerStrLen = headerStr.length;
    }
    b.writeByte(headerStrLen);

    if (headerStrLen > 0) {
      b.writeString(headerStr);
    }

    if (data && data.byteLength > 0) {
      b.write(data);
    }

    // Perform the actual ajax request.
    sendXhr = postAjax(host, sendTimeout, b.buffer, function (data) {
      sendXhr = false;

      if (callback) {
        callback(data);
      }
    }, function (msg) {
      sendXhr = false;
      triggerError(msg);
    });
  }

  poll = function () {
    var b = new ByteBuffer(3, ByteBuffer.BIG_ENDIAN, true);
    b.writeByte(RequestType.Poll);

    var headerStr = uid + DataDelimiter + pollToken;
    b.writeByte(headerStr.length);
    b.writeString(headerStr);

    // Perform the actual ajax request.
    pollXhr = postAjax(host, pollTimeout, b.buffer, function (data) {
      pollXhr = false;

      var b = new ByteBuffer(data, ByteBuffer.BIG_ENDIAN);

      // Extract the tyoe.
      if (b.length < 1) {
        triggerError("ajax socket: poll: invalid server response");
        return;
      }
      var type = b.readByte();

      // Check if this ajax connection was closed.
      if (type == PollType.Closed) {
        triggerClosed();
        return;
      }

      // Validate.
      if (b.length < 2) {
        triggerError("ajax socket: poll: invalid server response");
        return;
      }

      // Extract and set the new poll token.
      var pollTokenLen = b.readByte();
      pollToken = b.readString(pollTokenLen);

      // Check if this ajax request has reached the server's timeout.
      if (type == PollType.Timeout) {
        // Just start the next poll request.
        poll();
        return;
      }

      // Start the next poll request.
      poll();

      // Remove the header from the buffer.
      b.clip();

      // Call the event.
      s.onMessage(b.buffer);
    }, function (msg) {
      pollXhr = false;
      triggerError(msg);
    });
  };

  var push = utils.throttle(function() {
    // Skip if there is already an active push request.
    // Only one push request at once is allowed.
    // The next push will be triggered automatically.
    if (pushActive) {
      return;
    }

    // Obtain the total buffer size.
    var i, totalSize = 0;
    for (i=0; i < pushBuffer.length; i++) {
      totalSize += pushBuffer[i].byteLength;
    }

    // Merge all buffered bytes into one single buffer.
    var b = new ByteBuffer(totalSize, ByteBuffer.BIG_ENDIAN);
    for (i=0; i < pushBuffer.length; i++) {
      b.write(pushBuffer[i]);
    }

    // Clear the push buffer.
    pushBuffer = [];

    // Perform the actual push request.
    pushActive = true;
    send(RequestType.Push, uid + DataDelimiter + pushToken, b.buffer, function(data) {
      pushActive = false;

      if (!data || data.byteLength <= 0) {
        triggerError("ajax socket: push: invalid server response");
        return;
      }

      var b = new ByteBuffer(data, ByteBuffer.BIG_ENDIAN);

      // Set the new push token.
      pushToken = b.readString();

      // Check if the buffer is filled again.
      // If so, trigger the next push.
      if (pushBuffer.length > 0) {
        push();
      }
    });
  }, 50);


  /*
   * Socket layer implementation.
   */

  s.open = function () {
    // Initialize the ajax socket session
    send(RequestType.Init, null, null, function (data) {
      if (!data || data.byteLength <= 0) {
        triggerError("ajax socket: open: invalid server response");
        return;
      }

      // Transform to string.
      var b = new ByteBuffer(data, ByteBuffer.BIG_ENDIAN);
      data = b.readString();

      // Split the string.
      var split = data.split(DataDelimiter);
      if (split.length !== 3) {
        triggerError("ajax socket: failed to obtain uid and tokens");
        return;
      }

      // Set the uid and the tokens.
      uid = split[0];
      pollToken = split[1];
      pushToken = split[2];

      // Start the long polling process.
      poll();

      // Trigger the event.
      s.onOpen();
    });
  };

  s.send = function (data) {
    // Add the data to the push buffer queue.
    pushBuffer.push(data);

    // Push the data to the server (throttled).
    push();
  };

  s.close = function() {
    // Stop the ajax requests.
    stopRequests();
  };

  return s;
};




  /*
   * Constants
   */

  var SocketTypes = {
      WebSocket:  "WebSocket",
      AjaxSocket: "AjaxSocket"
  };

  var DefaultOptions = {
      // Force a socket type.
      // Values: false, "WebSocket", "AjaxSocket"
      forceSocketType: false,

      // Kill the connect attempt after the timeout.
      connectTimeout:  10000
  };



  /*
   * Variables
   */

  var bs,     // Backend socket.
      isClosed = false;



  /*
   * Public Instance
   */

  var instance = {
    // Return the current socket type.
    // Values: "WebSocket", "AjaxSocket"
    socketType: function() {
      return bs.socketType;
    },

    // Close the socket connection.
    close: function() {
      bs.close();
      triggerClose();
    },

    // Returns a boolean whenever the socket is closed.
    isClosed: function() {
      return isClosed;
    },

    // Write the ArrayBuffer to the socket.
    write: function(data) {
      if (isClosed) {
        console.log("BinarySocket: failed to write: the socket is closed");
        return;
      }
      else if (!(data instanceof ArrayBuffer)) {
        console.log("BinarySocket: failed to write data: data is not of type ArrayBuffer");
        return;
      }
      else if (data.byteLength === 0) {
        return;
      }

      bs.send(data);
    },

    // Function which is triggered as soon as new bytes are received.
    // The passed data is an ArrayBuffer.
    onRead: function(data) {} // Set to an empty function. This eliminates an extra check.

    /*
      // Hint: Further available event function.

      // Function which is triggered as soon as the connection is established.
      onOpen: function() {}

      // Function which is triggered as soon as the connection closes.
      onClose: function() {}

      // Function which is triggered as soon as the connection closes with an error.
      // An optional error message is passed.
      // onClose is also triggered afterwards.
      onError: function(msg) {}
    */
  };



  /*
   * Methods
   */

  function triggerOpen() {
    // Trigger only once.
    if (bs.openTriggered) {
      return;
    }
    bs.openTriggered = true;

    if (instance.onOpen) {
      try {
        instance.onOpen();
      } catch (e) {
        console.log("BinarySocket: onOpen: catched exception:", e);

        // Ensure to close the socket.
        bs.close();
      }
    }
  }

  function triggerClose() {
    // Trigger only once.
    if (isClosed) {
      return;
    }
    isClosed = true;

    if (instance.onClose) {
      try {
        instance.onClose();
      } catch (e) {
        console.log("BinarySocket: onClose: catched exception:", e);
      }
    }
  }

  function triggerError(msg) {
    // Trigger only once.
    if (bs.errorTriggered) {
      return;
    }
    bs.errorTriggered = true;

    if (instance.onError) {
      try {
        instance.onError(msg);
      } catch (e) {
        console.log("BinarySocket: onError: catched exception:", e);
      }
    }
  }

  function connectSocket() {
    // Choose the socket layer depending on the browser support.
    if ((!options.forceSocketType && window.WebSocket) ||
        options.forceSocketType === SocketTypes.WebSocket)
    {
        bs = newWebSocket();
        bs.socketType = SocketTypes.WebSocket;
    }
    else {
        bs = newAjaxSocket();
        bs.socketType = SocketTypes.AjaxSocket;
    }

    // Start the timeout.
    var connectTimeout = setTimeout(function() {
        connectTimeout = false;

        // Ensure the socket is closed.
        bs.close();

        triggerError("connection timeout");
        triggerClose();
    }, options.connectTimeout);

    // Helper function.
    var stopConnectTimeout = function() {
      if (connectTimeout !== false) {
          clearTimeout(connectTimeout);
          connectTimeout = false;
      }
    };



    // Set the backend socket events.
    bs.onOpen = function() {
      stopConnectTimeout();

      triggerOpen();
    };

    bs.onClose = function() {
      stopConnectTimeout();

      // Ensure the socket is closed.
      bs.close();

      triggerClose();
    };

    bs.onError = function(msg) {
      // Stop the connect timeout.
      stopConnectTimeout();

      // Ensure the socket is closed.
      bs.close();

      triggerError(msg);
      triggerClose();
    };

    bs.onMessage = function(data) {
      try {
        instance.onRead(data);
      } catch (e) {
        console.log("BinarySocket: onRead: catched exception:", e);
      }
    };

    // Connect during the next tick.
    // The user should be able to connect the event functions first.
    setTimeout(function() {
      bs.open();
    }, 0);
  }



  /*
   * Initialize section
   */

  // Check if ArrayBuffers are supported. This is a must!
  if (!window.ArrayBuffer) {
    console.log("BinarySocket: ArrayBuffers are not supported by this browser!");
    return ;
  }

  // Merge the options with the default options.
  options = utils.extend({}, DefaultOptions, options);

  // Prepare the host string.
  // Prepent the current location if the host url starts with a slash.
  if (host.match("^/")) {
    host = window.location.protocol + "//" + window.location.host + host;
  }
  // Use the current location if the host string is not set.
  else if (!host) {
    host = window.location.protocol + "//" + window.location.host;
  }
  // The host string has to start with http:// or https://
  if (!host.match("^http://") && !host.match("^https://")) {
    console.log("BinarySocket: invalid host: missing 'http://' or 'https://'!");
    return;
  }

  // Connect the socket.
  connectSocket();


  // Return the newly created socket.
  return instance;
};


  // The public BinarySocket instance.
  return {
    // Open and return a new BinarySocket.
    // The first argument is required. It defines a host which has to start with
    // http:// or https:// or / for an absolute path using the current host.
    // The second argument defines optional options.
    open: openSocket,

    // Create a new ByteBuffer.
    // Optionally set the implicitGrowth boolean.
    // Wrapper for JavaScript's ArrayBuffer/DataView maintaining index and default endianness.
    // More information: https://github.com/desertbit/byte-buffer
    newByteBuffer: function(data, implicitGrowth) {
      return new ByteBuffer(data, ByteBuffer.BIG_ENDIAN, implicitGrowth);
    },

    // Convert an ArrayBuffer to a string.
    bytesToString: function(b) {
      var bb = this.newByteBuffer(b);
      return bb.readString();
    },

    // Convert a string to an ArrayBuffer.
    stringToBytes: function(s) {
      var b = this.newByteBuffer(1, true);
      b.writeString(s);
      return b.buffer;
    }
  };
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJiaW5hcnlzb2NrZXQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBCaW5hcnlTb2NrZXQgLSBCaW5hcnkgV2ViIFNvY2tldHNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMTYgIFJvbGFuZCBTaW5nZXIgPHJvbGFuZC5zaW5nZXJbYXRdZGVzZXJ0Yml0LmNvbT5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiAgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqICBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5cbnZhciBCaW5hcnlTb2NrZXQgPSBmdW5jdGlvbigpIHtcbiAgLy8gVHVybiBvbiBzdHJpY3QgbW9kZS5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEluY2x1ZGUgdGhlIGRlcGVuZGVuY2llcy5cbiAgLyoqXG4gKiBieXRlLWJ1ZmZlciB2MS4wLjNcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE1IFRpbSBLdXJ2ZXJzIDx0aW1AbW9vbnNwaGVyZS5uZXQ+XG4gKlxuICogV3JhcHBlciBmb3IgSmF2YVNjcmlwdCdzIEFycmF5QnVmZmVyL0RhdGFWaWV3LlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShlKTtlbHNle3ZhciBmO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/Zj13aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9mPWdsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKGY9c2VsZiksZi5CeXRlQnVmZmVyPWUoKX19KGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEJ5dGVCdWZmZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIENyZWF0ZXMgYSBuZXcgQnl0ZUJ1ZmZlclxuICAvLyAtIGZyb20gZ2l2ZW4gc291cmNlIChhc3N1bWVkIHRvIGJlIG51bWJlciBvZiBieXRlcyB3aGVuIG51bWVyaWMpXG4gIC8vIC0gd2l0aCBnaXZlbiBieXRlIG9yZGVyIChkZWZhdWx0cyB0byBiaWctZW5kaWFuKVxuICAvLyAtIHdpdGggZ2l2ZW4gaW1wbGljaXQgZ3Jvd3RoIHN0cmF0ZWd5IChkZWZhdWx0cyB0byBmYWxzZSlcblxuICBmdW5jdGlvbiBCeXRlQnVmZmVyKCkge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG9yZGVyID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLmNvbnN0cnVjdG9yLkJJR19FTkRJQU4gOiBhcmd1bWVudHNbMV07XG4gICAgdmFyIGltcGxpY2l0R3Jvd3RoID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1syXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCeXRlQnVmZmVyKTtcblxuICAgIC8vIEhvbGRzIGJ1ZmZlclxuICAgIHRoaXMuX2J1ZmZlciA9IG51bGw7XG5cbiAgICAvLyBIb2xkcyByYXcgYnVmZmVyXG4gICAgdGhpcy5fcmF3ID0gbnVsbDtcblxuICAgIC8vIEhvbGRzIGludGVybmFsIHZpZXcgZm9yIHJlYWRpbmcvd3JpdGluZ1xuICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xuXG4gICAgLy8gSG9sZHMgYnl0ZSBvcmRlclxuICAgIHRoaXMuX29yZGVyID0gISFvcmRlcjtcblxuICAgIC8vIEhvbGRzIGltcGxpY2l0IGdyb3d0aCBzdHJhdGVneVxuICAgIHRoaXMuX2ltcGxpY2l0R3Jvd3RoID0gISFpbXBsaWNpdEdyb3d0aDtcblxuICAgIC8vIEhvbGRzIHJlYWQvd3JpdGUgaW5kZXhcbiAgICB0aGlzLl9pbmRleCA9IDA7XG5cbiAgICAvLyBBdHRlbXB0IHRvIGV4dHJhY3QgYSBidWZmZXIgZnJvbSBnaXZlbiBzb3VyY2VcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fZXh0cmFjdEJ1ZmZlcihzb3VyY2UsIHRydWUpO1xuXG4gICAgLy8gT24gZmFpbHVyZSwgYXNzdW1lIHNvdXJjZSBpcyBhIHByaW1pdGl2ZSBpbmRpY2F0aW5nIHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHNvdXJjZSk7XG4gICAgfVxuXG4gICAgLy8gQXNzaWduIG5ldyBidWZmZXJcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCeXRlQnVmZmVyLCBbe1xuICAgIGtleTogJ19zYW5pdGl6ZUluZGV4JyxcblxuICAgIC8vIFNhbml0aXplcyByZWFkL3dyaXRlIGluZGV4XG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zYW5pdGl6ZUluZGV4KCkge1xuICAgICAgaWYgKHRoaXMuX2luZGV4IDwgMCkge1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5kZXggPiB0aGlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9pbmRleCA9IHRoaXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19leHRyYWN0QnVmZmVyJyxcblxuICAgIC8vIEV4dHJhY3RzIGJ1ZmZlciBmcm9tIGdpdmVuIHNvdXJjZSBhbmQgb3B0aW9uYWxseSBjbG9uZXMgaXRcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2V4dHJhY3RCdWZmZXIoc291cmNlKSB7XG4gICAgICB2YXIgY2xvbmUgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAvLyBXaGV0aGVyIHNvdXJjZSBpcyBhIGJ5dGUtYXdhcmUgb2JqZWN0XG4gICAgICBpZiAoc291cmNlICYmIHR5cGVvZiBzb3VyY2UuYnl0ZUxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBzb3VyY2UgaXMgYSB2aWV3IG9yIGEgcmF3IGJ1ZmZlclxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZS5idWZmZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIGNsb25lID8gc291cmNlLmJ1ZmZlci5zbGljZSgwKSA6IHNvdXJjZS5idWZmZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNsb25lID8gc291cmNlLnNsaWNlKDApIDogc291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hldGhlciBzb3VyY2UgaXMgYSBzZXF1ZW5jZSBvZiBieXRlc1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2UgJiYgdHlwZW9mIHNvdXJjZS5sZW5ndGggIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgLy8gQWx0aG91Z2ggVWludDhBcnJheSdzIGNvbnN0cnVjdG9yIHN1Y2NlZWRzIHdoZW4gZ2l2ZW4gc3RyaW5ncyxcbiAgICAgICAgLy8gaXQgZG9lcyBub3QgY29ycmVjdGx5IGluc3RhbnRpYXRlIHRoZSBidWZmZXJcbiAgICAgICAgaWYgKHNvdXJjZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNvdXJjZSkuYnVmZmVyO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gYnVmZmVyIGZvdW5kXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmcm9udCcsXG5cbiAgICAvLyBTZXRzIGluZGV4IHRvIGZyb250IG9mIHRoZSBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbnQoKSB7XG4gICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmQnLFxuXG4gICAgLy8gU2V0cyBpbmRleCB0byBlbmQgb2YgdGhlIGJ1ZmZlclxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICB0aGlzLl9pbmRleCA9IHRoaXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VlaycsXG5cbiAgICAvLyBTZWVrcyBnaXZlbiBudW1iZXIgb2YgYnl0ZXNcbiAgICAvLyBOb3RlOiBCYWNrd2FyZHMgc2Vla2luZyBpcyBzdXBwb3J0ZWRcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VlaygpIHtcbiAgICAgIHZhciBieXRlcyA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdGhpcy5pbmRleCArPSBieXRlcztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlYWQnLFxuXG4gICAgLy8gUmVhZHMgc2VxdWVuY2Ugb2YgZ2l2ZW4gbnVtYmVyIG9mIGJ5dGVzIChkZWZhdWx0cyB0byBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlKVxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKCkge1xuICAgICAgdmFyIGJ5dGVzID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0aGlzLmF2YWlsYWJsZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgaWYgKGJ5dGVzID4gdGhpcy5hdmFpbGFibGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVhZCAnICsgYnl0ZXMgKyAnIGJ5dGUocyksICcgKyB0aGlzLmF2YWlsYWJsZSArICcgYXZhaWxhYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChieXRlcyA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIG51bWJlciBvZiBieXRlcyAnICsgYnl0ZXMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBuZXcgQnl0ZUJ1ZmZlcih0aGlzLl9idWZmZXIuc2xpY2UodGhpcy5faW5kZXgsIHRoaXMuX2luZGV4ICsgYnl0ZXMpLCB0aGlzLm9yZGVyKTtcbiAgICAgIHRoaXMuX2luZGV4ICs9IGJ5dGVzO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dyaXRlJyxcblxuICAgIC8vIFdyaXRlcyBzZXF1ZW5jZSBvZiBieXRlc1xuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZShzZXF1ZW5jZSkge1xuICAgICAgdmFyIHZpZXc7XG5cbiAgICAgIC8vIEVuc3VyZSB3ZSdyZSBkZWFsaW5nIHdpdGggYSBVaW50OEFycmF5IHZpZXdcbiAgICAgIGlmICghKHNlcXVlbmNlIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcblxuICAgICAgICAvLyBFeHRyYWN0IHRoZSBidWZmZXIgZnJvbSB0aGUgc2VxdWVuY2VcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2V4dHJhY3RCdWZmZXIoc2VxdWVuY2UpO1xuICAgICAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCB3cml0ZSAnICsgc2VxdWVuY2UgKyAnLCBub3QgYSBzZXF1ZW5jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5kIGNyZWF0ZSBhIG5ldyBVaW50OEFycmF5IHZpZXcgZm9yIGl0XG4gICAgICAgIHZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlldyA9IHNlcXVlbmNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXZhaWxhYmxlID0gdGhpcy5hdmFpbGFibGU7XG4gICAgICBpZiAodmlldy5ieXRlTGVuZ3RoID4gYXZhaWxhYmxlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbXBsaWNpdEdyb3d0aCkge1xuICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcuYnl0ZUxlbmd0aCAtIGF2YWlsYWJsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgd3JpdGUgJyArIHNlcXVlbmNlICsgJyB1c2luZyAnICsgdmlldy5ieXRlTGVuZ3RoICsgJyBieXRlKHMpLCAnICsgdGhpcy5hdmFpbGFibGUgKyAnIGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jhdy5zZXQodmlldywgdGhpcy5faW5kZXgpO1xuICAgICAgdGhpcy5faW5kZXggKz0gdmlldy5ieXRlTGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVhZFN0cmluZycsXG5cbiAgICAvLyBSZWFkcyBVVEYtOCBlbmNvZGVkIHN0cmluZyBvZiBnaXZlbiBudW1iZXIgb2YgYnl0ZXMgKGRlZmF1bHRzIHRvIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUpXG4gICAgLy9cbiAgICAvLyBCYXNlZCBvbiBEYXZpZCBGbGFuYWdhbidzIEJ1ZmZlclZpZXcgKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGZsYW5hZ2FuL0J1ZmZlclZpZXcvYmxvYi9tYXN0ZXIvQnVmZmVyVmlldy5qcy8vTDE5NSlcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZFN0cmluZygpIHtcbiAgICAgIHZhciBieXRlcyA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5hdmFpbGFibGUgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIGlmIChieXRlcyA+IHRoaXMuYXZhaWxhYmxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlYWQgJyArIGJ5dGVzICsgJyBieXRlKHMpLCAnICsgdGhpcy5hdmFpbGFibGUgKyAnIGF2YWlsYWJsZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnl0ZXMgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgJyArIGJ5dGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9jYWwgcmVmZXJlbmNlXG4gICAgICB2YXIgcmF3ID0gdGhpcy5fcmF3O1xuXG4gICAgICAvLyBIb2xkcyBkZWNvZGVkIGNoYXJhY3RlcnNcbiAgICAgIHZhciBjb2RlcG9pbnRzID0gW107XG5cbiAgICAgIC8vIEluZGV4IGludG8gY29kZXBvaW50c1xuICAgICAgdmFyIGMgPSAwO1xuXG4gICAgICAvLyBCeXRlc1xuICAgICAgdmFyIGIxLFxuICAgICAgICAgIGIyLFxuICAgICAgICAgIGIzLFxuICAgICAgICAgIGI0ID0gbnVsbDtcblxuICAgICAgLy8gVGFyZ2V0IGluZGV4XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5faW5kZXggKyBieXRlcztcblxuICAgICAgd2hpbGUgKHRoaXMuX2luZGV4IDwgdGFyZ2V0KSB7XG4gICAgICAgIGIxID0gcmF3W3RoaXMuX2luZGV4XTtcblxuICAgICAgICBpZiAoYjEgPCAxMjgpIHtcbiAgICAgICAgICAvLyBPbmUgYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgIGNvZGVwb2ludHNbYysrXSA9IGIxO1xuICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoYjEgPCAxOTQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgfSBlbHNlIGlmIChiMSA8IDIyNCkge1xuICAgICAgICAgIC8vIFR3byBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgYjIgPSByYXdbdGhpcy5faW5kZXggKyAxXTtcblxuICAgICAgICAgIGlmIChiMiA8IDEyOCB8fCBiMiA+IDE5MSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb2RlcG9pbnRzW2MrK10gPSAoKGIxICYgMzEpIDw8IDYpICsgKGIyICYgNjMpO1xuXG4gICAgICAgICAgdGhpcy5faW5kZXggKz0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChiMSA8IDI0MCkge1xuXG4gICAgICAgICAgLy8gVGhyZWUgYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgIGIyID0gcmF3W3RoaXMuX2luZGV4ICsgMV07XG5cbiAgICAgICAgICBpZiAoYjIgPCAxMjggfHwgYjIgPiAxOTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYjMgPSByYXdbdGhpcy5faW5kZXggKyAyXTtcblxuICAgICAgICAgIGlmIChiMyA8IDEyOCB8fCBiMyA+IDE5MSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb2RlcG9pbnRzW2MrK10gPSAoKGIxICYgMTUpIDw8IDEyKSArICgoYjIgJiA2MykgPDwgNikgKyAoYjMgJiA2Myk7XG5cbiAgICAgICAgICB0aGlzLl9pbmRleCArPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKGIxIDwgMjQ1KSB7XG4gICAgICAgICAgLy8gRm91ciBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgYjIgPSByYXdbdGhpcy5faW5kZXggKyAxXTtcblxuICAgICAgICAgIGlmIChiMiA8IDEyOCB8fCBiMiA+IDE5MSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBiMyA9IHJhd1t0aGlzLl9pbmRleCArIDJdO1xuXG4gICAgICAgICAgaWYgKGIzIDwgMTI4IHx8IGIzID4gMTkxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBjb250aW51YXRpb24gYnl0ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGI0ID0gcmF3W3RoaXMuX2luZGV4ICsgM107XG5cbiAgICAgICAgICBpZiAoYjQgPCAxMjggfHwgYjQgPiAxOTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNwID0gKChiMSAmIDcpIDw8IDE4KSArICgoYjIgJiA2MykgPDwgMTIpICsgKChiMyAmIDYzKSA8PCA2KSArIChiNCAmIDYzKTtcbiAgICAgICAgICBjcCAtPSA2NTUzNjtcblxuICAgICAgICAgIC8vIFR1cm4gY29kZSBwb2ludCBpbnRvIHR3byBzdXJyb2dhdGUgcGFpcnNcbiAgICAgICAgICBjb2RlcG9pbnRzW2MrK10gPSA1NTI5NiArICgoY3AgJiAxMDQ3NTUyKSA+Pj4gMTApO1xuICAgICAgICAgIGNvZGVwb2ludHNbYysrXSA9IDU2MzIwICsgKGNwICYgMTAyMyk7XG5cbiAgICAgICAgICB0aGlzLl9pbmRleCArPSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBieXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnJvd3NlcnMgbWF5IGhhdmUgaGFyZGNvZGVkIG9yIGltcGxpY2l0IGxpbWl0cyBvbiB0aGUgYXJyYXkgbGVuZ3RoIHdoZW4gYXBwbHlpbmcgYSBmdW5jdGlvblxuICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9hcHBseS8vYXBwbHlfYW5kX2J1aWx0LWluX2Z1bmN0aW9uc1xuICAgICAgdmFyIGxpbWl0ID0gMSA8PCAxNjtcbiAgICAgIHZhciBsZW5ndGggPSBjb2RlcG9pbnRzLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVwb2ludHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoYXJzID0gW107XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlcG9pbnRzLnNsaWNlKGksIGkgKyBsaW1pdCkpKTtcbiAgICAgICAgICBpICs9IGxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3cml0ZVN0cmluZycsXG5cbiAgICAvLyBXcml0ZXMgVVRGLTggZW5jb2RlZCBzdHJpbmdcbiAgICAvLyBOb3RlOiBEb2VzIG5vdCB3cml0ZSBzdHJpbmcgbGVuZ3RoIG9yIHRlcm1pbmF0b3JcbiAgICAvL1xuICAgIC8vIEJhc2VkIG9uIERhdmlkIEZsYW5hZ2FuJ3MgQnVmZmVyVmlldyAoaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkZmxhbmFnYW4vQnVmZmVyVmlldy9ibG9iL21hc3Rlci9CdWZmZXJWaWV3LmpzLy9MMjY0KVxuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZVN0cmluZyhzdHJpbmcpIHtcblxuICAgICAgLy8gRW5jb2RlZCBVVEYtOCBieXRlc1xuICAgICAgdmFyIGJ5dGVzID0gW107XG5cbiAgICAgIC8vIFN0cmluZyBsZW5ndGgsIG9mZnNldCBhbmQgYnl0ZSBvZmZzZXRcbiAgICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChjIDw9IDEyNykge1xuICAgICAgICAgIC8vIE9uZSBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgYnl0ZXNbYisrXSA9IGM7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA8PSAyMDQ3KSB7XG4gICAgICAgICAgLy8gVHdvIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICBieXRlc1tiKytdID0gMTkyIHwgKGMgJiAxOTg0KSA+Pj4gNjtcbiAgICAgICAgICBieXRlc1tiKytdID0gMTI4IHwgYyAmIDYzO1xuICAgICAgICB9IGVsc2UgaWYgKGMgPD0gNTUyOTUgfHwgYyA+PSA1NzM0NCAmJiBjIDw9IDY1NTM1KSB7XG4gICAgICAgICAgLy8gVGhyZWUgYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgIC8vIFNvdXJjZSBjaGFyYWN0ZXIgaXMgbm90IGEgVVRGLTE2IHN1cnJvZ2F0ZVxuICAgICAgICAgIGJ5dGVzW2IrK10gPSAyMjQgfCAoYyAmIDYxNDQwKSA+Pj4gMTI7XG4gICAgICAgICAgYnl0ZXNbYisrXSA9IDEyOCB8IChjICYgNDAzMikgPj4+IDY7XG4gICAgICAgICAgYnl0ZXNbYisrXSA9IDEyOCB8IGMgJiA2MztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGb3VyIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICBpZiAoaSA9PSBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucGFpcmVkIHN1cnJvZ2F0ZSAnICsgc3RyaW5nW2ldICsgJyAoaW5kZXggJyArIGkgKyAnKScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJldHJpZXZlIHN1cnJvZ2F0ZVxuICAgICAgICAgIHZhciBkID0gc3RyaW5nLmNoYXJDb2RlQXQoKytpKTtcbiAgICAgICAgICBpZiAoYyA8IDU1Mjk2IHx8IGMgPiA1NjMxOSB8fCBkIDwgNTYzMjAgfHwgZCA+IDU3MzQzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucGFpcmVkIHN1cnJvZ2F0ZSAnICsgc3RyaW5nW2ldICsgJyAoaW5kZXggJyArIGkgKyAnKScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjcCA9ICgoYyAmIDEwMjMpIDw8IDEwKSArIChkICYgMTAyMykgKyA2NTUzNjtcblxuICAgICAgICAgIGJ5dGVzW2IrK10gPSAyNDAgfCAoY3AgJiAxODM1MDA4KSA+Pj4gMTg7XG4gICAgICAgICAgYnl0ZXNbYisrXSA9IDEyOCB8IChjcCAmIDI1ODA0OCkgPj4+IDEyO1xuICAgICAgICAgIGJ5dGVzW2IrK10gPSAxMjggfCAoY3AgJiA0MDMyKSA+Pj4gNjtcbiAgICAgICAgICBieXRlc1tiKytdID0gMTI4IHwgY3AgJiA2MztcbiAgICAgICAgfVxuXG4gICAgICAgICsraTtcbiAgICAgIH1cblxuICAgICAgdGhpcy53cml0ZShieXRlcyk7XG5cbiAgICAgIHJldHVybiBieXRlcy5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVhZENTdHJpbmcnLFxuXG4gICAgLy8gQWxpYXNlcyBmb3IgcmVhZGluZy93cml0aW5nIFVURi04IGVuY29kZWQgc3RyaW5nc1xuICAgIC8vIHJlYWRVVEZDaGFyczogdGhpcy46OnJlYWRTdHJpbmdcbiAgICAvLyB3cml0ZVVURkNoYXJzOiB0aGlzLjo6d3JpdGVTdHJpbmdcblxuICAgIC8vIFJlYWRzIFVURi04IGVuY29kZWQgQy1zdHJpbmcgKGV4Y2x1ZGluZyB0aGUgYWN0dWFsIE5VTEwtYnl0ZSlcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZENTdHJpbmcoKSB7XG4gICAgICB2YXIgYnl0ZXMgPSB0aGlzLl9yYXc7XG4gICAgICB2YXIgbGVuZ3RoID0gYnl0ZXMubGVuZ3RoO1xuICAgICAgdmFyIGkgPSB0aGlzLl9pbmRleDtcbiAgICAgIHdoaWxlIChieXRlc1tpXSAhPSAwICYmIGkgPCBsZW5ndGgpIHtcbiAgICAgICAgKytpO1xuICAgICAgfVxuXG4gICAgICBsZW5ndGggPSBpIC0gdGhpcy5faW5kZXg7XG4gICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gdGhpcy5yZWFkU3RyaW5nKGxlbmd0aCk7XG4gICAgICAgIHRoaXMucmVhZEJ5dGUoKTtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnd3JpdGVDU3RyaW5nJyxcblxuICAgIC8vIFdyaXRlcyBVVEYtOCBlbmNvZGVkIEMtc3RyaW5nIChOVUxMLXRlcm1pbmF0ZWQpXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlQ1N0cmluZyhzdHJpbmcpIHtcbiAgICAgIHZhciBieXRlcyA9IHRoaXMud3JpdGVTdHJpbmcoc3RyaW5nKTtcbiAgICAgIHRoaXMud3JpdGVCeXRlKDApO1xuICAgICAgcmV0dXJuICsrYnl0ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHJlcGVuZCcsXG5cbiAgICAvLyBQcmVwZW5kcyBnaXZlbiBudW1iZXIgb2YgYnl0ZXNcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGVuZChieXRlcykge1xuICAgICAgaWYgKGJ5dGVzIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgbnVtYmVyIG9mIGJ5dGVzICcgKyBieXRlcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGggKyBieXRlcyk7XG4gICAgICB2aWV3LnNldCh0aGlzLl9yYXcsIGJ5dGVzKTtcbiAgICAgIHRoaXMuX2luZGV4ICs9IGJ5dGVzO1xuICAgICAgdGhpcy5idWZmZXIgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FwcGVuZCcsXG5cbiAgICAvLyBBcHBlbmRzIGdpdmVuIG51bWJlciBvZiBieXRlc1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcyA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIG51bWJlciBvZiBieXRlcyAnICsgYnl0ZXMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoICsgYnl0ZXMpO1xuICAgICAgdmlldy5zZXQodGhpcy5fcmF3LCAwKTtcbiAgICAgIHRoaXMuYnVmZmVyID0gdmlldy5idWZmZXI7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGlwJyxcblxuICAgIC8vIENsaXBzIHRoaXMgYnVmZmVyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsaXAoKSB7XG4gICAgICB2YXIgYmVnaW4gPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRoaXMuX2luZGV4IDogYXJndW1lbnRzWzBdO1xuICAgICAgdmFyIGVuZCA9IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmIChiZWdpbiA8IDApIHtcbiAgICAgICAgYmVnaW4gPSB0aGlzLmxlbmd0aCArIGJlZ2luO1xuICAgICAgfVxuICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlci5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgIHRoaXMuX2luZGV4IC09IGJlZ2luO1xuICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzbGljZScsXG5cbiAgICAvLyBTbGljZXMgdGhpcyBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2xpY2UoKSB7XG4gICAgICB2YXIgYmVnaW4gPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgZW5kID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgdmFyIHNsaWNlID0gbmV3IEJ5dGVCdWZmZXIodGhpcy5fYnVmZmVyLnNsaWNlKGJlZ2luLCBlbmQpLCB0aGlzLm9yZGVyKTtcbiAgICAgIHJldHVybiBzbGljZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9uZScsXG5cbiAgICAvLyBDbG9uZXMgdGhpcyBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICB2YXIgY2xvbmUgPSBuZXcgQnl0ZUJ1ZmZlcih0aGlzLl9idWZmZXIuc2xpY2UoMCksIHRoaXMub3JkZXIsIHRoaXMuaW1wbGljaXRHcm93dGgpO1xuICAgICAgY2xvbmUuaW5kZXggPSB0aGlzLl9pbmRleDtcbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXZlcnNlJyxcblxuICAgIC8vIFJldmVyc2VzIHRoaXMgYnVmZmVyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucmV2ZXJzZS5jYWxsKHRoaXMuX3Jhdyk7XG4gICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0FycmF5JyxcblxuICAgIC8vIEFycmF5IG9mIGJ5dGVzIGluIHRoaXMgYnVmZmVyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fcmF3LCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG5cbiAgICAvLyBTaG9ydCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgb3JkZXIgPSB0aGlzLl9vcmRlciA9PSB0aGlzLmNvbnN0cnVjdG9yLkJJR19FTkRJQU4gPyAnYmlnLWVuZGlhbicgOiAnbGl0dGxlLWVuZGlhbic7XG4gICAgICByZXR1cm4gJ1tCeXRlQnVmZmVyOyBPcmRlcjogJyArIG9yZGVyICsgJzsgTGVuZ3RoOiAnICsgdGhpcy5sZW5ndGggKyAnOyBJbmRleDogJyArIHRoaXMuX2luZGV4ICsgJzsgQXZhaWxhYmxlOiAnICsgdGhpcy5hdmFpbGFibGUgKyAnXSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9IZXgnLFxuXG4gICAgLy8gSGV4IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgYnVmZmVyIHdpdGggZ2l2ZW4gc3BhY2VyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGV4KCkge1xuICAgICAgdmFyIHNwYWNlciA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJyAnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHRoaXMuX3JhdywgZnVuY3Rpb24gKGJ5dGUpIHtcbiAgICAgICAgcmV0dXJuICgnMDAnICsgYnl0ZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpO1xuICAgICAgfSkuam9pbihzcGFjZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQVNDSUknLFxuXG4gICAgLy8gQVNDSUkgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBidWZmZXIgd2l0aCBnaXZlbiBzcGFjZXIgYW5kIG9wdGlvbmFsIGJ5dGUgYWxpZ25tZW50XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQVNDSUkoKSB7XG4gICAgICB2YXIgc3BhY2VyID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnICcgOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgYWxpZ24gPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMV07XG4gICAgICB2YXIgdW5rbm93biA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ++/vScgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgIHZhciBwcmVmaXggPSBhbGlnbiA/ICcgJyA6ICcnO1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0aGlzLl9yYXcsIGZ1bmN0aW9uIChieXRlKSB7XG4gICAgICAgIHJldHVybiBieXRlIDwgMzIgfHwgYnl0ZSA+IDEyNiA/IHByZWZpeCArIHVua25vd24gOiBwcmVmaXggKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgICAgfSkuam9pbihzcGFjZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2J1ZmZlcicsXG5cbiAgICAvLyBSZXRyaWV2ZXMgYnVmZmVyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xuICAgIH0sXG5cbiAgICAvLyBTZXRzIG5ldyBidWZmZXIgYW5kIHNhbml0aXplcyByZWFkL3dyaXRlIGluZGV4XG4gICAgc2V0OiBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgICB0aGlzLl9yYXcgPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIpO1xuICAgICAgdGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9idWZmZXIpO1xuICAgICAgdGhpcy5fc2FuaXRpemVJbmRleCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JhdycsXG5cbiAgICAvLyBSZXRyaWV2ZXMgcmF3IGJ1ZmZlclxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JhdztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2aWV3JyxcblxuICAgIC8vIFJldHJpZXZlcyB2aWV3XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlldztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsZW5ndGgnLFxuXG4gICAgLy8gUmV0cmlldmVzIG51bWJlciBvZiBieXRlc1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2J5dGVMZW5ndGgnLFxuXG4gICAgLy8gUmV0cmlldmVzIG51bWJlciBvZiBieXRlc1xuICAgIC8vIE5vdGU6IFRoaXMgYWxsb3dzIGZvciBCeXRlQnVmZmVyIHRvIGJlIGRldGVjdGVkIGFzIGEgcHJvcGVyIHNvdXJjZSBieSBpdHMgb3duIGNvbnN0cnVjdG9yXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3JkZXInLFxuXG4gICAgLy8gUmV0cmlldmVzIGJ5dGUgb3JkZXJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgICB9LFxuXG4gICAgLy8gU2V0cyBieXRlIG9yZGVyXG4gICAgc2V0OiBmdW5jdGlvbiAob3JkZXIpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gISFvcmRlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbXBsaWNpdEdyb3d0aCcsXG5cbiAgICAvLyBSZXRyaWV2ZXMgaW1wbGljaXQgZ3Jvd3RoIHN0cmF0ZWd5XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW1wbGljaXRHcm93dGg7XG4gICAgfSxcblxuICAgIC8vIFNldHMgaW1wbGljaXQgZ3Jvd3RoIHN0cmF0ZWd5XG4gICAgc2V0OiBmdW5jdGlvbiAoaW1wbGljaXRHcm93dGgpIHtcbiAgICAgIHRoaXMuX2ltcGxpY2l0R3Jvd3RoID0gISFpbXBsaWNpdEdyb3d0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbmRleCcsXG5cbiAgICAvLyBSZXRyaWV2ZXMgcmVhZC93cml0ZSBpbmRleFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH0sXG5cbiAgICAvLyBTZXRzIHJlYWQvd3JpdGUgaW5kZXhcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGluZGV4ICcgKyBpbmRleCArICcsIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kICcgKyB0aGlzLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYXZhaWxhYmxlJyxcblxuICAgIC8vIFJldHJpZXZlcyBudW1iZXIgb2YgYXZhaWxhYmxlIGJ5dGVzXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggLSB0aGlzLl9pbmRleDtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ0xJVFRMRV9FTkRJQU4nLFxuXG4gICAgLy8gQnl0ZSBvcmRlciBjb25zdGFudHNcbiAgICB2YWx1ZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0sIHtcbiAgICBrZXk6ICdCSUdfRU5ESUFOJyxcbiAgICB2YWx1ZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XSk7XG5cbiAgcmV0dXJuIEJ5dGVCdWZmZXI7XG59KSgpO1xuXG4vLyBHZW5lcmljIHJlYWRlclxudmFyIHJlYWRlciA9IGZ1bmN0aW9uIHJlYWRlcihtZXRob2QsIGJ5dGVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9yZGVyID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0aGlzLl9vcmRlciA6IGFyZ3VtZW50c1swXTtcblxuICAgIGlmIChieXRlcyA+IHRoaXMuYXZhaWxhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZWFkICcgKyBieXRlcyArICcgYnl0ZShzKSwgJyArIHRoaXMuYXZhaWxhYmxlICsgJyBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB0aGlzLl92aWV3W21ldGhvZF0odGhpcy5faW5kZXgsIG9yZGVyKTtcbiAgICB0aGlzLl9pbmRleCArPSBieXRlcztcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG4vLyBHZW5lcmljIHdyaXRlclxudmFyIHdyaXRlciA9IGZ1bmN0aW9uIHdyaXRlcihtZXRob2QsIGJ5dGVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgb3JkZXIgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRoaXMuX29yZGVyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGF2YWlsYWJsZSA9IHRoaXMuYXZhaWxhYmxlO1xuICAgIGlmIChieXRlcyA+IGF2YWlsYWJsZSkge1xuICAgICAgaWYgKHRoaXMuX2ltcGxpY2l0R3Jvd3RoKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGJ5dGVzIC0gYXZhaWxhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHdyaXRlICcgKyB2YWx1ZSArICcgdXNpbmcgJyArIGJ5dGVzICsgJyBieXRlKHMpLCAnICsgYXZhaWxhYmxlICsgJyBhdmFpbGFibGUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl92aWV3W21ldGhvZF0odGhpcy5faW5kZXgsIHZhbHVlLCBvcmRlcik7XG4gICAgdGhpcy5faW5kZXggKz0gYnl0ZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59O1xuXG4vLyBSZWFkZXJzIGZvciBieXRlcywgc2hvcnRzLCBpbnRlZ2VycywgZmxvYXRzIGFuZCBkb3VibGVzXG5CeXRlQnVmZmVyLnByb3RvdHlwZS5yZWFkQnl0ZSA9IHJlYWRlcignZ2V0SW50OCcsIDEpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUucmVhZFVuc2lnbmVkQnl0ZSA9IHJlYWRlcignZ2V0VWludDgnLCAxKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLnJlYWRTaG9ydCA9IHJlYWRlcignZ2V0SW50MTYnLCAyKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLnJlYWRVbnNpZ25lZFNob3J0ID0gcmVhZGVyKCdnZXRVaW50MTYnLCAyKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLnJlYWRJbnQgPSByZWFkZXIoJ2dldEludDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS5yZWFkVW5zaWduZWRJbnQgPSByZWFkZXIoJ2dldFVpbnQzMicsIDQpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0ID0gcmVhZGVyKCdnZXRGbG9hdDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlID0gcmVhZGVyKCdnZXRGbG9hdDY0JywgOCk7XG5cbi8vIFdyaXRlcnMgZm9yIGJ5dGVzLCBzaG9ydHMsIGludGVnZXJzLCBmbG9hdHMgYW5kIGRvdWJsZXNcbkJ5dGVCdWZmZXIucHJvdG90eXBlLndyaXRlQnl0ZSA9IHdyaXRlcignc2V0SW50OCcsIDEpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUud3JpdGVVbnNpZ25lZEJ5dGUgPSB3cml0ZXIoJ3NldFVpbnQ4JywgMSk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS53cml0ZVNob3J0ID0gd3JpdGVyKCdzZXRJbnQxNicsIDIpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUud3JpdGVVbnNpZ25lZFNob3J0ID0gd3JpdGVyKCdzZXRVaW50MTYnLCAyKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLndyaXRlSW50ID0gd3JpdGVyKCdzZXRJbnQzMicsIDQpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUud3JpdGVVbnNpZ25lZEludCA9IHdyaXRlcignc2V0VWludDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0ID0gd3JpdGVyKCdzZXRGbG9hdDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZSA9IHdyaXRlcignc2V0RmxvYXQ2NCcsIDgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ5dGVCdWZmZXI7XG59LHt9XX0se30sWzFdKVxuKDEpXG59KTtcblxuICAvKlxuICogIEJpbmFyeVNvY2tldCAtIEJpbmFyeSBXZWIgU29ja2V0c1xuICogIENvcHlyaWdodCAoQykgMjAxNiAgUm9sYW5kIFNpbmdlciA8cm9sYW5kLnNpbmdlclthdF1kZXNlcnRiaXQuY29tPlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqICBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qXG4qICBUaGlzIGNvZGUgbGl2ZXMgaW5zaWRlIHRoZSBCaW5hcnlTb2NrZXQgZnVuY3Rpb24uXG4qL1xuXG52YXIgdXRpbHMgPSB7XG4gIC8vIE1pbWljcyBqUXVlcnkncyBleHRlbmQgbWV0aG9kLlxuICAvLyBTb3VyY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTExOTcyNDcvamF2YXNjcmlwdC1lcXVpdmFsZW50LW9mLWpxdWVyeXMtZXh0ZW5kLW1ldGhvZFxuICBleHRlbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGZvcih2YXIgaT0xOyBpPGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKVxuICAgICAgICAgICAgaWYoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICB9LFxuXG4gIC8vIFJldHVybiBhIGZ1bmN0aW9uIHdoaWNoIGlzIHRyaWdnZXJlZCBvbmx5IG9uY2Ugd2l0aGluIHRoZSBsaW1pdCBkdXJhdGlvbi5cbiAgLy8gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgdGhyb3R0bGU6IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHdhaXQgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBpZiAoIXdhaXQpIHtcbiAgICAgICAgICBpZiAoaW1tZWRpYXRlKSB7IGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpOyB9XG4gICAgICAgICAgd2FpdCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgeyBjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmdzKTsgfVxuICAgICAgICAgIH0sIGxpbWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufTtcblxuICAvKlxuICogIEJpbmFyeVNvY2tldCAtIEJpbmFyeSBXZWIgU29ja2V0c1xuICogIENvcHlyaWdodCAoQykgMjAxNiAgUm9sYW5kIFNpbmdlciA8cm9sYW5kLnNpbmdlclthdF1kZXNlcnRiaXQuY29tPlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqICBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qXG4gKiAgVGhpcyBjb2RlIGxpdmVzIGluc2lkZSB0aGUgQmluYXJ5U29ja2V0IGZ1bmN0aW9uLlxuICovXG5cbnZhciBvcGVuU29ja2V0ID0gZnVuY3Rpb24oaG9zdCwgb3B0aW9ucykge1xuICAvLyBJbmNsdWRlIHRoZSBkZXBlbmRlbmNpZXMuXG4gIC8qXG4gKiAgQmluYXJ5U29ja2V0IC0gQmluYXJ5IFdlYiBTb2NrZXRzXG4gKiAgQ29weXJpZ2h0IChDKSAyMDE2ICBSb2xhbmQgU2luZ2VyIDxyb2xhbmQuc2luZ2VyW2F0XWRlc2VydGJpdC5jb20+XG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiAgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLypcbiogIFRoaXMgY29kZSBsaXZlcyBpbnNpZGUgdGhlIEJpbmFyeVNvY2tldCBmdW5jdGlvbi5cbiovXG5cbnZhciBuZXdXZWJTb2NrZXQgPSBmdW5jdGlvbiAoKSB7XG4gIC8qXG4gICAqIFZhcmlhYmxlc1xuICAgKi9cblxuICB2YXIgcyA9IHt9LFxuICAgICAgd3M7XG5cblxuXG4gIC8qXG4gICAqIFNvY2tldCBsYXllciBpbXBsZW1lbnRhdGlvbi5cbiAgICovXG5cbiAgcy5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSB3ZWJzb2NrZXQgdXJsLlxuICAgICAgICB2YXIgdXJsO1xuICAgICAgICBpZiAoaG9zdC5tYXRjaChcIl5odHRwczovL1wiKSkge1xuICAgICAgICAgICAgdXJsID0gXCJ3c3NcIiArIGhvc3Quc3Vic3RyKDUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gXCJ3c1wiICsgaG9zdC5zdWJzdHIoNCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPcGVuIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgICB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgd3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjYWxsYmFjayBoYW5kbGVyc1xuICAgICAgICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgcy5vbk1lc3NhZ2UoZXZlbnQuZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgbXNnID0gXCJ0aGUgd2Vic29ja2V0IGNsb3NlZCB0aGUgY29ubmVjdGlvbiB3aXRoIFwiO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgICAgICBtc2cgKz0gXCJ0aGUgZXJyb3IgY29kZTogXCIgKyBldmVudC5jb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbXNnICs9IFwiYW4gZXJyb3IuXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHMub25FcnJvcihtc2cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHMub25DbG9zZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdzLm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcy5vbk9wZW4oKTtcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHMub25FcnJvcigpO1xuICAgIH1cbiAgfTtcblxuICBzLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIFNlbmQgdGhlIGRhdGEgdG8gdGhlIHNlcnZlclxuICAgIHdzLnNlbmQoZGF0YSk7XG4gIH07XG5cbiAgcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIENsb3NlIHRoZSB3ZWJzb2NrZXQgaWYgZGVmaW5lZC5cbiAgICBpZiAod3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdzLmNsb3NlKCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHdzID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiBzO1xufTtcblxuICAvKlxuICogIEJpbmFyeVNvY2tldCAtIEJpbmFyeSBXZWIgU29ja2V0c1xuICogIENvcHlyaWdodCAoQykgMjAxNiAgUm9sYW5kIFNpbmdlciA8cm9sYW5kLnNpbmdlclthdF1kZXNlcnRiaXQuY29tPlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqICBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qXG4gKiAgVGhpcyBjb2RlIGxpdmVzIGluc2lkZSB0aGUgQmluYXJ5U29ja2V0IGZ1bmN0aW9uLlxuICovXG5cbnZhciBuZXdBamF4U29ja2V0ID0gZnVuY3Rpb24gKCkge1xuICAvKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgdmFyIHNlbmRUaW1lb3V0ID0gMzAwMDAsXG4gICAgICBwb2xsVGltZW91dCA9IDQ1MDAwO1xuXG4gIHZhciBEYXRhRGVsaW1pdGVyID0gJyMnO1xuXG4gIHZhciBSZXF1ZXN0VHlwZSA9IHtcbiAgICAgIEluaXQ6IDAsXG4gICAgICBQdXNoOiAxLFxuICAgICAgUG9sbDogMlxuICB9O1xuXG4gIHZhciBQb2xsVHlwZSA9IHtcbiAgICAgIERhdGE6ICAgIDAsXG4gICAgICBUaW1lb3V0OiAxLFxuICAgICAgQ2xvc2VkOiAgMlxuICB9O1xuXG5cblxuICAvKlxuICAgKiBWYXJpYWJsZXNcbiAgICovXG5cbiAgIHZhciBzID0ge30sXG4gICAgICAgdWlkLCBwb2xsVG9rZW4sIHB1c2hUb2tlbixcbiAgICAgICBwb2xsWGhyID0gZmFsc2UsXG4gICAgICAgc2VuZFhociA9IGZhbHNlLFxuICAgICAgIHBvbGwsXG4gICAgICAgcHVzaEFjdGl2ZSA9IGZhbHNlLFxuICAgICAgIHB1c2hCdWZmZXIgPSBbXTtcblxuXG5cbiAgLypcbiAgICogTWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiBwb3N0QWpheCh1cmwsIHRpbWVvdXQsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc3VjY2Vzcyh4aHIucmVzcG9uc2UpO1xuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgZXJyb3IoKTtcbiAgICB9O1xuXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZXJyb3IoXCJ0aW1lb3V0XCIpO1xuICAgIH07XG5cbiAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgeGhyLnNlbmQobmV3IERhdGFWaWV3KGRhdGEpKTtcblxuICAgIHJldHVybiB4aHI7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wUmVxdWVzdHMoKSB7XG4gICAgLy8gU2V0IHRoZSBwb2xsIGZ1bmN0aW9uIHRvIGEgZHVtbXkgZnVuY3Rpb24uXG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZnVydGhlciBwb2xsIGNhbGxzLlxuICAgIHBvbGwgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgLy8gS2lsbCB0aGUgYWpheCByZXF1ZXN0cy5cbiAgICBpZiAocG9sbFhocikge1xuICAgICAgICBwb2xsWGhyLmFib3J0KCk7XG4gICAgfVxuICAgIGlmIChzZW5kWGhyKSB7XG4gICAgICAgIHNlbmRYaHIuYWJvcnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyQ2xvc2VkKCkge1xuICAgIC8vIFN0b3AgdGhlIGFqYXggcmVxdWVzdHMuXG4gICAgc3RvcFJlcXVlc3RzKCk7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBldmVudC5cbiAgICBzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJFcnJvcihtc2cpIHtcbiAgICAvLyBTdG9wIHRoZSBhamF4IHJlcXVlc3RzLlxuICAgIHN0b3BSZXF1ZXN0cygpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgIGlmICghbXNnKSB7XG4gICAgICBtc2cgPSBcInRoZSBhamF4IHNvY2tldCBjbG9zZWQgdGhlIGNvbm5lY3Rpb24gd2l0aCBhbiBlcnJvci5cIjtcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBldmVudC5cbiAgICBzLm9uRXJyb3IobXNnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmQocmVxVHlwZSwgaGVhZGVyU3RyLCBkYXRhLCBjYWxsYmFjaykge1xuICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoMywgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOLCB0cnVlKTtcbiAgICBiLndyaXRlQnl0ZShyZXFUeXBlKTtcblxuICAgIHZhciBoZWFkZXJTdHJMZW4gPSAwO1xuICAgIGlmIChoZWFkZXJTdHIgJiYgaGVhZGVyU3RyLmxlbmd0aCA+IDApIHtcbiAgICAgIGhlYWRlclN0ckxlbiA9IGhlYWRlclN0ci5sZW5ndGg7XG4gICAgfVxuICAgIGIud3JpdGVCeXRlKGhlYWRlclN0ckxlbik7XG5cbiAgICBpZiAoaGVhZGVyU3RyTGVuID4gMCkge1xuICAgICAgYi53cml0ZVN0cmluZyhoZWFkZXJTdHIpO1xuICAgIH1cblxuICAgIGlmIChkYXRhICYmIGRhdGEuYnl0ZUxlbmd0aCA+IDApIHtcbiAgICAgIGIud3JpdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSB0aGUgYWN0dWFsIGFqYXggcmVxdWVzdC5cbiAgICBzZW5kWGhyID0gcG9zdEFqYXgoaG9zdCwgc2VuZFRpbWVvdXQsIGIuYnVmZmVyLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgc2VuZFhociA9IGZhbHNlO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKG1zZykge1xuICAgICAgc2VuZFhociA9IGZhbHNlO1xuICAgICAgdHJpZ2dlckVycm9yKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoMywgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOLCB0cnVlKTtcbiAgICBiLndyaXRlQnl0ZShSZXF1ZXN0VHlwZS5Qb2xsKTtcblxuICAgIHZhciBoZWFkZXJTdHIgPSB1aWQgKyBEYXRhRGVsaW1pdGVyICsgcG9sbFRva2VuO1xuICAgIGIud3JpdGVCeXRlKGhlYWRlclN0ci5sZW5ndGgpO1xuICAgIGIud3JpdGVTdHJpbmcoaGVhZGVyU3RyKTtcblxuICAgIC8vIFBlcmZvcm0gdGhlIGFjdHVhbCBhamF4IHJlcXVlc3QuXG4gICAgcG9sbFhociA9IHBvc3RBamF4KGhvc3QsIHBvbGxUaW1lb3V0LCBiLmJ1ZmZlciwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHBvbGxYaHIgPSBmYWxzZTtcblxuICAgICAgdmFyIGIgPSBuZXcgQnl0ZUJ1ZmZlcihkYXRhLCBCeXRlQnVmZmVyLkJJR19FTkRJQU4pO1xuXG4gICAgICAvLyBFeHRyYWN0IHRoZSB0eW9lLlxuICAgICAgaWYgKGIubGVuZ3RoIDwgMSkge1xuICAgICAgICB0cmlnZ2VyRXJyb3IoXCJhamF4IHNvY2tldDogcG9sbDogaW52YWxpZCBzZXJ2ZXIgcmVzcG9uc2VcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB0eXBlID0gYi5yZWFkQnl0ZSgpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGFqYXggY29ubmVjdGlvbiB3YXMgY2xvc2VkLlxuICAgICAgaWYgKHR5cGUgPT0gUG9sbFR5cGUuQ2xvc2VkKSB7XG4gICAgICAgIHRyaWdnZXJDbG9zZWQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBWYWxpZGF0ZS5cbiAgICAgIGlmIChiLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdHJpZ2dlckVycm9yKFwiYWpheCBzb2NrZXQ6IHBvbGw6IGludmFsaWQgc2VydmVyIHJlc3BvbnNlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dHJhY3QgYW5kIHNldCB0aGUgbmV3IHBvbGwgdG9rZW4uXG4gICAgICB2YXIgcG9sbFRva2VuTGVuID0gYi5yZWFkQnl0ZSgpO1xuICAgICAgcG9sbFRva2VuID0gYi5yZWFkU3RyaW5nKHBvbGxUb2tlbkxlbik7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgYWpheCByZXF1ZXN0IGhhcyByZWFjaGVkIHRoZSBzZXJ2ZXIncyB0aW1lb3V0LlxuICAgICAgaWYgKHR5cGUgPT0gUG9sbFR5cGUuVGltZW91dCkge1xuICAgICAgICAvLyBKdXN0IHN0YXJ0IHRoZSBuZXh0IHBvbGwgcmVxdWVzdC5cbiAgICAgICAgcG9sbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFN0YXJ0IHRoZSBuZXh0IHBvbGwgcmVxdWVzdC5cbiAgICAgIHBvbGwoKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBoZWFkZXIgZnJvbSB0aGUgYnVmZmVyLlxuICAgICAgYi5jbGlwKCk7XG5cbiAgICAgIC8vIENhbGwgdGhlIGV2ZW50LlxuICAgICAgcy5vbk1lc3NhZ2UoYi5idWZmZXIpO1xuICAgIH0sIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHBvbGxYaHIgPSBmYWxzZTtcbiAgICAgIHRyaWdnZXJFcnJvcihtc2cpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBwdXNoID0gdXRpbHMudGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gICAgLy8gU2tpcCBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGFjdGl2ZSBwdXNoIHJlcXVlc3QuXG4gICAgLy8gT25seSBvbmUgcHVzaCByZXF1ZXN0IGF0IG9uY2UgaXMgYWxsb3dlZC5cbiAgICAvLyBUaGUgbmV4dCBwdXNoIHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkuXG4gICAgaWYgKHB1c2hBY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPYnRhaW4gdGhlIHRvdGFsIGJ1ZmZlciBzaXplLlxuICAgIHZhciBpLCB0b3RhbFNpemUgPSAwO1xuICAgIGZvciAoaT0wOyBpIDwgcHVzaEJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxTaXplICs9IHB1c2hCdWZmZXJbaV0uYnl0ZUxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBNZXJnZSBhbGwgYnVmZmVyZWQgYnl0ZXMgaW50byBvbmUgc2luZ2xlIGJ1ZmZlci5cbiAgICB2YXIgYiA9IG5ldyBCeXRlQnVmZmVyKHRvdGFsU2l6ZSwgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOKTtcbiAgICBmb3IgKGk9MDsgaSA8IHB1c2hCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGIud3JpdGUocHVzaEJ1ZmZlcltpXSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIHB1c2ggYnVmZmVyLlxuICAgIHB1c2hCdWZmZXIgPSBbXTtcblxuICAgIC8vIFBlcmZvcm0gdGhlIGFjdHVhbCBwdXNoIHJlcXVlc3QuXG4gICAgcHVzaEFjdGl2ZSA9IHRydWU7XG4gICAgc2VuZChSZXF1ZXN0VHlwZS5QdXNoLCB1aWQgKyBEYXRhRGVsaW1pdGVyICsgcHVzaFRva2VuLCBiLmJ1ZmZlciwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcHVzaEFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoIWRhdGEgfHwgZGF0YS5ieXRlTGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdHJpZ2dlckVycm9yKFwiYWpheCBzb2NrZXQ6IHB1c2g6IGludmFsaWQgc2VydmVyIHJlc3BvbnNlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoZGF0YSwgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOKTtcblxuICAgICAgLy8gU2V0IHRoZSBuZXcgcHVzaCB0b2tlbi5cbiAgICAgIHB1c2hUb2tlbiA9IGIucmVhZFN0cmluZygpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgYnVmZmVyIGlzIGZpbGxlZCBhZ2Fpbi5cbiAgICAgIC8vIElmIHNvLCB0cmlnZ2VyIHRoZSBuZXh0IHB1c2guXG4gICAgICBpZiAocHVzaEJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHB1c2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgNTApO1xuXG5cbiAgLypcbiAgICogU29ja2V0IGxheWVyIGltcGxlbWVudGF0aW9uLlxuICAgKi9cblxuICBzLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYWpheCBzb2NrZXQgc2Vzc2lvblxuICAgIHNlbmQoUmVxdWVzdFR5cGUuSW5pdCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmICghZGF0YSB8fCBkYXRhLmJ5dGVMZW5ndGggPD0gMCkge1xuICAgICAgICB0cmlnZ2VyRXJyb3IoXCJhamF4IHNvY2tldDogb3BlbjogaW52YWxpZCBzZXJ2ZXIgcmVzcG9uc2VcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIHRvIHN0cmluZy5cbiAgICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoZGF0YSwgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOKTtcbiAgICAgIGRhdGEgPSBiLnJlYWRTdHJpbmcoKTtcblxuICAgICAgLy8gU3BsaXQgdGhlIHN0cmluZy5cbiAgICAgIHZhciBzcGxpdCA9IGRhdGEuc3BsaXQoRGF0YURlbGltaXRlcik7XG4gICAgICBpZiAoc3BsaXQubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIHRyaWdnZXJFcnJvcihcImFqYXggc29ja2V0OiBmYWlsZWQgdG8gb2J0YWluIHVpZCBhbmQgdG9rZW5zXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgdWlkIGFuZCB0aGUgdG9rZW5zLlxuICAgICAgdWlkID0gc3BsaXRbMF07XG4gICAgICBwb2xsVG9rZW4gPSBzcGxpdFsxXTtcbiAgICAgIHB1c2hUb2tlbiA9IHNwbGl0WzJdO1xuXG4gICAgICAvLyBTdGFydCB0aGUgbG9uZyBwb2xsaW5nIHByb2Nlc3MuXG4gICAgICBwb2xsKCk7XG5cbiAgICAgIC8vIFRyaWdnZXIgdGhlIGV2ZW50LlxuICAgICAgcy5vbk9wZW4oKTtcbiAgICB9KTtcbiAgfTtcblxuICBzLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIEFkZCB0aGUgZGF0YSB0byB0aGUgcHVzaCBidWZmZXIgcXVldWUuXG4gICAgcHVzaEJ1ZmZlci5wdXNoKGRhdGEpO1xuXG4gICAgLy8gUHVzaCB0aGUgZGF0YSB0byB0aGUgc2VydmVyICh0aHJvdHRsZWQpLlxuICAgIHB1c2goKTtcbiAgfTtcblxuICBzLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gU3RvcCB0aGUgYWpheCByZXF1ZXN0cy5cbiAgICBzdG9wUmVxdWVzdHMoKTtcbiAgfTtcblxuICByZXR1cm4gcztcbn07XG5cblxuXG5cbiAgLypcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIHZhciBTb2NrZXRUeXBlcyA9IHtcbiAgICAgIFdlYlNvY2tldDogIFwiV2ViU29ja2V0XCIsXG4gICAgICBBamF4U29ja2V0OiBcIkFqYXhTb2NrZXRcIlxuICB9O1xuXG4gIHZhciBEZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEZvcmNlIGEgc29ja2V0IHR5cGUuXG4gICAgICAvLyBWYWx1ZXM6IGZhbHNlLCBcIldlYlNvY2tldFwiLCBcIkFqYXhTb2NrZXRcIlxuICAgICAgZm9yY2VTb2NrZXRUeXBlOiBmYWxzZSxcblxuICAgICAgLy8gS2lsbCB0aGUgY29ubmVjdCBhdHRlbXB0IGFmdGVyIHRoZSB0aW1lb3V0LlxuICAgICAgY29ubmVjdFRpbWVvdXQ6ICAxMDAwMFxuICB9O1xuXG5cblxuICAvKlxuICAgKiBWYXJpYWJsZXNcbiAgICovXG5cbiAgdmFyIGJzLCAgICAgLy8gQmFja2VuZCBzb2NrZXQuXG4gICAgICBpc0Nsb3NlZCA9IGZhbHNlO1xuXG5cblxuICAvKlxuICAgKiBQdWJsaWMgSW5zdGFuY2VcbiAgICovXG5cbiAgdmFyIGluc3RhbmNlID0ge1xuICAgIC8vIFJldHVybiB0aGUgY3VycmVudCBzb2NrZXQgdHlwZS5cbiAgICAvLyBWYWx1ZXM6IFwiV2ViU29ja2V0XCIsIFwiQWpheFNvY2tldFwiXG4gICAgc29ja2V0VHlwZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYnMuc29ja2V0VHlwZTtcbiAgICB9LFxuXG4gICAgLy8gQ2xvc2UgdGhlIHNvY2tldCBjb25uZWN0aW9uLlxuICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIGJzLmNsb3NlKCk7XG4gICAgICB0cmlnZ2VyQ2xvc2UoKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBhIGJvb2xlYW4gd2hlbmV2ZXIgdGhlIHNvY2tldCBpcyBjbG9zZWQuXG4gICAgaXNDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQ2xvc2VkO1xuICAgIH0sXG5cbiAgICAvLyBXcml0ZSB0aGUgQXJyYXlCdWZmZXIgdG8gdGhlIHNvY2tldC5cbiAgICB3cml0ZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgaWYgKGlzQ2xvc2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmluYXJ5U29ja2V0OiBmYWlsZWQgdG8gd3JpdGU6IHRoZSBzb2NrZXQgaXMgY2xvc2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IGZhaWxlZCB0byB3cml0ZSBkYXRhOiBkYXRhIGlzIG5vdCBvZiB0eXBlIEFycmF5QnVmZmVyXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkYXRhLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBicy5zZW5kKGRhdGEpO1xuICAgIH0sXG5cbiAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyBuZXcgYnl0ZXMgYXJlIHJlY2VpdmVkLlxuICAgIC8vIFRoZSBwYXNzZWQgZGF0YSBpcyBhbiBBcnJheUJ1ZmZlci5cbiAgICBvblJlYWQ6IGZ1bmN0aW9uKGRhdGEpIHt9IC8vIFNldCB0byBhbiBlbXB0eSBmdW5jdGlvbi4gVGhpcyBlbGltaW5hdGVzIGFuIGV4dHJhIGNoZWNrLlxuXG4gICAgLypcbiAgICAgIC8vIEhpbnQ6IEZ1cnRoZXIgYXZhaWxhYmxlIGV2ZW50IGZ1bmN0aW9uLlxuXG4gICAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyB0aGUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZC5cbiAgICAgIG9uT3BlbjogZnVuY3Rpb24oKSB7fVxuXG4gICAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyB0aGUgY29ubmVjdGlvbiBjbG9zZXMuXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbigpIHt9XG5cbiAgICAgIC8vIEZ1bmN0aW9uIHdoaWNoIGlzIHRyaWdnZXJlZCBhcyBzb29uIGFzIHRoZSBjb25uZWN0aW9uIGNsb3NlcyB3aXRoIGFuIGVycm9yLlxuICAgICAgLy8gQW4gb3B0aW9uYWwgZXJyb3IgbWVzc2FnZSBpcyBwYXNzZWQuXG4gICAgICAvLyBvbkNsb3NlIGlzIGFsc28gdHJpZ2dlcmVkIGFmdGVyd2FyZHMuXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbihtc2cpIHt9XG4gICAgKi9cbiAgfTtcblxuXG5cbiAgLypcbiAgICogTWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiB0cmlnZ2VyT3BlbigpIHtcbiAgICAvLyBUcmlnZ2VyIG9ubHkgb25jZS5cbiAgICBpZiAoYnMub3BlblRyaWdnZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBicy5vcGVuVHJpZ2dlcmVkID0gdHJ1ZTtcblxuICAgIGlmIChpbnN0YW5jZS5vbk9wZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGluc3RhbmNlLm9uT3BlbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJpbmFyeVNvY2tldDogb25PcGVuOiBjYXRjaGVkIGV4Y2VwdGlvbjpcIiwgZSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRvIGNsb3NlIHRoZSBzb2NrZXQuXG4gICAgICAgIGJzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlckNsb3NlKCkge1xuICAgIC8vIFRyaWdnZXIgb25seSBvbmNlLlxuICAgIGlmIChpc0Nsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpc0Nsb3NlZCA9IHRydWU7XG5cbiAgICBpZiAoaW5zdGFuY2Uub25DbG9zZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5zdGFuY2Uub25DbG9zZSgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJpbmFyeVNvY2tldDogb25DbG9zZTogY2F0Y2hlZCBleGNlcHRpb246XCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJFcnJvcihtc2cpIHtcbiAgICAvLyBUcmlnZ2VyIG9ubHkgb25jZS5cbiAgICBpZiAoYnMuZXJyb3JUcmlnZ2VyZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnMuZXJyb3JUcmlnZ2VyZWQgPSB0cnVlO1xuXG4gICAgaWYgKGluc3RhbmNlLm9uRXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGluc3RhbmNlLm9uRXJyb3IobXNnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IG9uRXJyb3I6IGNhdGNoZWQgZXhjZXB0aW9uOlwiLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25uZWN0U29ja2V0KCkge1xuICAgIC8vIENob29zZSB0aGUgc29ja2V0IGxheWVyIGRlcGVuZGluZyBvbiB0aGUgYnJvd3NlciBzdXBwb3J0LlxuICAgIGlmICgoIW9wdGlvbnMuZm9yY2VTb2NrZXRUeXBlICYmIHdpbmRvdy5XZWJTb2NrZXQpIHx8XG4gICAgICAgIG9wdGlvbnMuZm9yY2VTb2NrZXRUeXBlID09PSBTb2NrZXRUeXBlcy5XZWJTb2NrZXQpXG4gICAge1xuICAgICAgICBicyA9IG5ld1dlYlNvY2tldCgpO1xuICAgICAgICBicy5zb2NrZXRUeXBlID0gU29ja2V0VHlwZXMuV2ViU29ja2V0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYnMgPSBuZXdBamF4U29ja2V0KCk7XG4gICAgICAgIGJzLnNvY2tldFR5cGUgPSBTb2NrZXRUeXBlcy5BamF4U29ja2V0O1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRoZSB0aW1lb3V0LlxuICAgIHZhciBjb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbm5lY3RUaW1lb3V0ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoZSBzb2NrZXQgaXMgY2xvc2VkLlxuICAgICAgICBicy5jbG9zZSgpO1xuXG4gICAgICAgIHRyaWdnZXJFcnJvcihcImNvbm5lY3Rpb24gdGltZW91dFwiKTtcbiAgICAgICAgdHJpZ2dlckNsb3NlKCk7XG4gICAgfSwgb3B0aW9ucy5jb25uZWN0VGltZW91dCk7XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24uXG4gICAgdmFyIHN0b3BDb25uZWN0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGNvbm5lY3RUaW1lb3V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0VGltZW91dCk7XG4gICAgICAgICAgY29ubmVjdFRpbWVvdXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG5cblxuICAgIC8vIFNldCB0aGUgYmFja2VuZCBzb2NrZXQgZXZlbnRzLlxuICAgIGJzLm9uT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgc3RvcENvbm5lY3RUaW1lb3V0KCk7XG5cbiAgICAgIHRyaWdnZXJPcGVuKCk7XG4gICAgfTtcblxuICAgIGJzLm9uQ2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHN0b3BDb25uZWN0VGltZW91dCgpO1xuXG4gICAgICAvLyBFbnN1cmUgdGhlIHNvY2tldCBpcyBjbG9zZWQuXG4gICAgICBicy5jbG9zZSgpO1xuXG4gICAgICB0cmlnZ2VyQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgYnMub25FcnJvciA9IGZ1bmN0aW9uKG1zZykge1xuICAgICAgLy8gU3RvcCB0aGUgY29ubmVjdCB0aW1lb3V0LlxuICAgICAgc3RvcENvbm5lY3RUaW1lb3V0KCk7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgc29ja2V0IGlzIGNsb3NlZC5cbiAgICAgIGJzLmNsb3NlKCk7XG5cbiAgICAgIHRyaWdnZXJFcnJvcihtc2cpO1xuICAgICAgdHJpZ2dlckNsb3NlKCk7XG4gICAgfTtcblxuICAgIGJzLm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGluc3RhbmNlLm9uUmVhZChkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IG9uUmVhZDogY2F0Y2hlZCBleGNlcHRpb246XCIsIGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDb25uZWN0IGR1cmluZyB0aGUgbmV4dCB0aWNrLlxuICAgIC8vIFRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNvbm5lY3QgdGhlIGV2ZW50IGZ1bmN0aW9ucyBmaXJzdC5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgYnMub3BlbigpO1xuICAgIH0sIDApO1xuICB9XG5cblxuXG4gIC8qXG4gICAqIEluaXRpYWxpemUgc2VjdGlvblxuICAgKi9cblxuICAvLyBDaGVjayBpZiBBcnJheUJ1ZmZlcnMgYXJlIHN1cHBvcnRlZC4gVGhpcyBpcyBhIG11c3QhXG4gIGlmICghd2luZG93LkFycmF5QnVmZmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IEFycmF5QnVmZmVycyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIhXCIpO1xuICAgIHJldHVybiA7XG4gIH1cblxuICAvLyBNZXJnZSB0aGUgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gIG9wdGlvbnMgPSB1dGlscy5leHRlbmQoe30sIERlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAvLyBQcmVwYXJlIHRoZSBob3N0IHN0cmluZy5cbiAgLy8gUHJlcGVudCB0aGUgY3VycmVudCBsb2NhdGlvbiBpZiB0aGUgaG9zdCB1cmwgc3RhcnRzIHdpdGggYSBzbGFzaC5cbiAgaWYgKGhvc3QubWF0Y2goXCJeL1wiKSkge1xuICAgIGhvc3QgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIGhvc3Q7XG4gIH1cbiAgLy8gVXNlIHRoZSBjdXJyZW50IGxvY2F0aW9uIGlmIHRoZSBob3N0IHN0cmluZyBpcyBub3Qgc2V0LlxuICBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgfVxuICAvLyBUaGUgaG9zdCBzdHJpbmcgaGFzIHRvIHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovL1xuICBpZiAoIWhvc3QubWF0Y2goXCJeaHR0cDovL1wiKSAmJiAhaG9zdC5tYXRjaChcIl5odHRwczovL1wiKSkge1xuICAgIGNvbnNvbGUubG9nKFwiQmluYXJ5U29ja2V0OiBpbnZhbGlkIGhvc3Q6IG1pc3NpbmcgJ2h0dHA6Ly8nIG9yICdodHRwczovLychXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENvbm5lY3QgdGhlIHNvY2tldC5cbiAgY29ubmVjdFNvY2tldCgpO1xuXG5cbiAgLy8gUmV0dXJuIHRoZSBuZXdseSBjcmVhdGVkIHNvY2tldC5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuXG4gIC8vIFRoZSBwdWJsaWMgQmluYXJ5U29ja2V0IGluc3RhbmNlLlxuICByZXR1cm4ge1xuICAgIC8vIE9wZW4gYW5kIHJldHVybiBhIG5ldyBCaW5hcnlTb2NrZXQuXG4gICAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLiBJdCBkZWZpbmVzIGEgaG9zdCB3aGljaCBoYXMgdG8gc3RhcnQgd2l0aFxuICAgIC8vIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gb3IgLyBmb3IgYW4gYWJzb2x1dGUgcGF0aCB1c2luZyB0aGUgY3VycmVudCBob3N0LlxuICAgIC8vIFRoZSBzZWNvbmQgYXJndW1lbnQgZGVmaW5lcyBvcHRpb25hbCBvcHRpb25zLlxuICAgIG9wZW46IG9wZW5Tb2NrZXQsXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgQnl0ZUJ1ZmZlci5cbiAgICAvLyBPcHRpb25hbGx5IHNldCB0aGUgaW1wbGljaXRHcm93dGggYm9vbGVhbi5cbiAgICAvLyBXcmFwcGVyIGZvciBKYXZhU2NyaXB0J3MgQXJyYXlCdWZmZXIvRGF0YVZpZXcgbWFpbnRhaW5pbmcgaW5kZXggYW5kIGRlZmF1bHQgZW5kaWFubmVzcy5cbiAgICAvLyBNb3JlIGluZm9ybWF0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vZGVzZXJ0Yml0L2J5dGUtYnVmZmVyXG4gICAgbmV3Qnl0ZUJ1ZmZlcjogZnVuY3Rpb24oZGF0YSwgaW1wbGljaXRHcm93dGgpIHtcbiAgICAgIHJldHVybiBuZXcgQnl0ZUJ1ZmZlcihkYXRhLCBCeXRlQnVmZmVyLkJJR19FTkRJQU4sIGltcGxpY2l0R3Jvd3RoKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhbiBBcnJheUJ1ZmZlciB0byBhIHN0cmluZy5cbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihiKSB7XG4gICAgICB2YXIgYmIgPSB0aGlzLm5ld0J5dGVCdWZmZXIoYik7XG4gICAgICByZXR1cm4gYmIucmVhZFN0cmluZygpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyLlxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHMpIHtcbiAgICAgIHZhciBiID0gdGhpcy5uZXdCeXRlQnVmZmVyKDEsIHRydWUpO1xuICAgICAgYi53cml0ZVN0cmluZyhzKTtcbiAgICAgIHJldHVybiBiLmJ1ZmZlcjtcbiAgICB9XG4gIH07XG59KCk7XG4iXSwiZmlsZSI6ImJpbmFyeXNvY2tldC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

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

Proton.utils = {
    // Mimics jQuery's extend method.
    // Source: http://stackoverflow.com/questions/11197247/javascript-equivalent-of-jquerys-extend-method
    extend: function() {
        for (var i = 1; i < arguments.length; i++)
            for (var key in arguments[i])
                if (arguments[i].hasOwnProperty(key))
                    arguments[0][key] = arguments[i][key];
        return arguments[0];
    },

    randomString: function(len) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for( var i=0; i < len; i++ ) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    },

    isFunction: function(f) {
        var getType = {};
        return f && getType.toString.call(f) === '[object Function]';
    }
};

    
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
        isConnected                 = false,
        reconnectTimeout            = false,
        keepaliveTimeout            = false,
        pingTimeout                 = false,
        writeCache                  = [];



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

            // Try to write the close frame if possible.
            write(RequestType.Close);

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
            flushWriteCache();
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

    function clearWriteCache() {
        writeCache = [];
    }

    function flushWriteCache() {
        for (var i = 0; i < writeCache.length; i++) {
            var c = writeCache[i];
            console.log("cache");
            write(c.reqType, c.header, c.data, true);
        }

        clearWriteCache();
    }

    function write(reqType, header, data, disableCache) {
        // If not connected add it to the temporary write cache.
        if (!isConnected) {
            if (!disableCache) {
                writeCache.push({
                    reqType:    reqType,
                    header:     header,
                    data:       data
                });
            } else {
                triggerError("failed send request: not connected to server");
            }
            return;
        }

        try {
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


    return Proton;
}();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwcm90b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqICBQcm90b24gLSBBIHBvd2VyZnVsIHBsYXRmb3JtIGZvciB5b3VyIHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zXG4gKiAgQ29weXJpZ2h0IChDKSAyMDE3ICBSb2xhbmQgU2luZ2VyIDxyb2xhbmQuc2luZ2VyW2F0XWRlc2VydGJpdC5jb20+XG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiAgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuXG52YXIgUHJvdG9uID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gVHVybiBvbiBzdHJpY3QgbW9kZS5cbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICAvLyBUaGUgcHVibGljIFByb3RvbiBpbnN0YW5jZS5cbiAgICB2YXIgUHJvdG9uID0ge307XG5cbiAgICAvLyBJbmNsdWRlIHRoZSBnbG9iYWwgZGVwZW5kZW5jaWVzLlxuICAgIC8qIFVwZGF0ZWQgb24gMjAxNy4wOS4xMSBodHRwczovL2dpdGh1Yi5jb20va2F3YW5ldC9tc2dwYWNrLWxpdGUgKi9cbiFmdW5jdGlvbih0KXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz10KCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLHQpO2Vsc2V7dmFyIHI7cj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2dsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZj9zZWxmOnRoaXMsci5tc2dwYWNrPXQoKX19KGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uIHQocixlLG4pe2Z1bmN0aW9uIGkoZix1KXtpZighZVtmXSl7aWYoIXJbZl0pe3ZhciBhPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEoZiwhMCk7aWYobylyZXR1cm4gbyhmLCEwKTt2YXIgcz1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2YrXCInXCIpO3Rocm93IHMuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixzfXZhciBjPWVbZl09e2V4cG9ydHM6e319O3JbZl1bMF0uY2FsbChjLmV4cG9ydHMsZnVuY3Rpb24odCl7dmFyIGU9cltmXVsxXVt0XTtyZXR1cm4gaShlP2U6dCl9LGMsYy5leHBvcnRzLHQscixlLG4pfXJldHVybiBlW2ZdLmV4cG9ydHN9Zm9yKHZhciBvPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsZj0wO2Y8bi5sZW5ndGg7ZisrKWkobltmXSk7cmV0dXJuIGl9KHsxOltmdW5jdGlvbih0LHIsZSl7ZS5lbmNvZGU9dChcIi4vZW5jb2RlXCIpLmVuY29kZSxlLmRlY29kZT10KFwiLi9kZWNvZGVcIikuZGVjb2RlLGUuRW5jb2Rlcj10KFwiLi9lbmNvZGVyXCIpLkVuY29kZXIsZS5EZWNvZGVyPXQoXCIuL2RlY29kZXJcIikuRGVjb2RlcixlLmNyZWF0ZUNvZGVjPXQoXCIuL2V4dFwiKS5jcmVhdGVDb2RlYyxlLmNvZGVjPXQoXCIuL2NvZGVjXCIpLmNvZGVjfSx7XCIuL2NvZGVjXCI6MTAsXCIuL2RlY29kZVwiOjEyLFwiLi9kZWNvZGVyXCI6MTMsXCIuL2VuY29kZVwiOjE1LFwiLi9lbmNvZGVyXCI6MTYsXCIuL2V4dFwiOjIwfV0sMjpbZnVuY3Rpb24odCxyLGUpeyhmdW5jdGlvbihCdWZmZXIpe2Z1bmN0aW9uIHQodCl7cmV0dXJuIHQmJnQuaXNCdWZmZXImJnR9ci5leHBvcnRzPXQoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEJ1ZmZlciYmQnVmZmVyKXx8dCh0aGlzLkJ1ZmZlcil8fHQoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93LkJ1ZmZlcil8fHRoaXMuQnVmZmVyfSkuY2FsbCh0aGlzLHQoXCJidWZmZXJcIikuQnVmZmVyKX0se2J1ZmZlcjoyOX1dLDM6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQscil7Zm9yKHZhciBlPXRoaXMsbj1yfHwocnw9MCksaT10Lmxlbmd0aCxvPTAsZj0wO2Y8aTspbz10LmNoYXJDb2RlQXQoZisrKSxvPDEyOD9lW24rK109bzpvPDIwNDg/KGVbbisrXT0xOTJ8bz4+PjYsZVtuKytdPTEyOHw2MyZvKTpvPDU1Mjk2fHxvPjU3MzQzPyhlW24rK109MjI0fG8+Pj4xMixlW24rK109MTI4fG8+Pj42JjYzLGVbbisrXT0xMjh8NjMmbyk6KG89KG8tNTUyOTY8PDEwfHQuY2hhckNvZGVBdChmKyspLTU2MzIwKSs2NTUzNixlW24rK109MjQwfG8+Pj4xOCxlW24rK109MTI4fG8+Pj4xMiY2MyxlW24rK109MTI4fG8+Pj42JjYzLGVbbisrXT0xMjh8NjMmbyk7cmV0dXJuIG4tcn1mdW5jdGlvbiBpKHQscixlKXt2YXIgbj10aGlzLGk9MHxyO2V8fChlPW4ubGVuZ3RoKTtmb3IodmFyIG89XCJcIixmPTA7aTxlOylmPW5baSsrXSxmPDEyOD9vKz1TdHJpbmcuZnJvbUNoYXJDb2RlKGYpOigxOTI9PT0oMjI0JmYpP2Y9KDMxJmYpPDw2fDYzJm5baSsrXToyMjQ9PT0oMjQwJmYpP2Y9KDE1JmYpPDwxMnwoNjMmbltpKytdKTw8Nnw2MyZuW2krK106MjQwPT09KDI0OCZmKSYmKGY9KDcmZik8PDE4fCg2MyZuW2krK10pPDwxMnwoNjMmbltpKytdKTw8Nnw2MyZuW2krK10pLGY+PTY1NTM2PyhmLT02NTUzNixvKz1TdHJpbmcuZnJvbUNoYXJDb2RlKChmPj4+MTApKzU1Mjk2LCgxMDIzJmYpKzU2MzIwKSk6bys9U3RyaW5nLmZyb21DaGFyQ29kZShmKSk7cmV0dXJuIG99ZnVuY3Rpb24gbyh0LHIsZSxuKXt2YXIgaTtlfHwoZT0wKSxufHwwPT09bnx8KG49dGhpcy5sZW5ndGgpLHJ8fChyPTApO3ZhciBvPW4tZTtpZih0PT09dGhpcyYmZTxyJiZyPG4pZm9yKGk9by0xO2k+PTA7aS0tKXRbaStyXT10aGlzW2krZV07ZWxzZSBmb3IoaT0wO2k8bztpKyspdFtpK3JdPXRoaXNbaStlXTtyZXR1cm4gb31lLmNvcHk9byxlLnRvU3RyaW5nPWksZS53cml0ZT1ufSx7fV0sNDpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIG5ldyBBcnJheSh0KX1mdW5jdGlvbiBpKHQpe2lmKCFvLmlzQnVmZmVyKHQpJiZvLmlzVmlldyh0KSl0PW8uVWludDhBcnJheS5mcm9tKHQpO2Vsc2UgaWYoby5pc0FycmF5QnVmZmVyKHQpKXQ9bmV3IFVpbnQ4QXJyYXkodCk7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gby5mcm9tLmNhbGwoZSx0KTtpZihcIm51bWJlclwiPT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKX1yZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCl9dmFyIG89dChcIi4vYnVmZmVyaXNoXCIpLGU9ci5leHBvcnRzPW4oMCk7ZS5hbGxvYz1uLGUuY29uY2F0PW8uY29uY2F0LGUuZnJvbT1pfSx7XCIuL2J1ZmZlcmlzaFwiOjh9XSw1OltmdW5jdGlvbih0LHIsZSl7ZnVuY3Rpb24gbih0KXtyZXR1cm4gbmV3IEJ1ZmZlcih0KX1mdW5jdGlvbiBpKHQpe2lmKCFvLmlzQnVmZmVyKHQpJiZvLmlzVmlldyh0KSl0PW8uVWludDhBcnJheS5mcm9tKHQpO2Vsc2UgaWYoby5pc0FycmF5QnVmZmVyKHQpKXQ9bmV3IFVpbnQ4QXJyYXkodCk7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdClyZXR1cm4gby5mcm9tLmNhbGwoZSx0KTtpZihcIm51bWJlclwiPT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKCdcInZhbHVlXCIgYXJndW1lbnQgbXVzdCBub3QgYmUgYSBudW1iZXInKX1yZXR1cm4gQnVmZmVyLmZyb20mJjEhPT1CdWZmZXIuZnJvbS5sZW5ndGg/QnVmZmVyLmZyb20odCk6bmV3IEJ1ZmZlcih0KX12YXIgbz10KFwiLi9idWZmZXJpc2hcIiksQnVmZmVyPW8uZ2xvYmFsLGU9ci5leHBvcnRzPW8uaGFzQnVmZmVyP24oMCk6W107ZS5hbGxvYz1vLmhhc0J1ZmZlciYmQnVmZmVyLmFsbG9jfHxuLGUuY29uY2F0PW8uY29uY2F0LGUuZnJvbT1pfSx7XCIuL2J1ZmZlcmlzaFwiOjh9XSw2OltmdW5jdGlvbih0LHIsZSl7ZnVuY3Rpb24gbih0LHIsZSxuKXt2YXIgbz1hLmlzQnVmZmVyKHRoaXMpLGY9YS5pc0J1ZmZlcih0KTtpZihvJiZmKXJldHVybiB0aGlzLmNvcHkodCxyLGUsbik7aWYoY3x8b3x8Znx8IWEuaXNWaWV3KHRoaXMpfHwhYS5pc1ZpZXcodCkpcmV0dXJuIHUuY29weS5jYWxsKHRoaXMsdCxyLGUsbik7dmFyIHM9ZXx8bnVsbCE9bj9pLmNhbGwodGhpcyxlLG4pOnRoaXM7cmV0dXJuIHQuc2V0KHMscikscy5sZW5ndGh9ZnVuY3Rpb24gaSh0LHIpe3ZhciBlPXRoaXMuc2xpY2V8fCFjJiZ0aGlzLnN1YmFycmF5O2lmKGUpcmV0dXJuIGUuY2FsbCh0aGlzLHQscik7dmFyIGk9YS5hbGxvYy5jYWxsKHRoaXMsci10KTtyZXR1cm4gbi5jYWxsKHRoaXMsaSwwLHQsciksaX1mdW5jdGlvbiBvKHQscixlKXt2YXIgbj0hcyYmYS5pc0J1ZmZlcih0aGlzKT90aGlzLnRvU3RyaW5nOnUudG9TdHJpbmc7cmV0dXJuIG4uYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGYodCl7ZnVuY3Rpb24gcigpe3ZhciByPXRoaXNbdF18fHVbdF07cmV0dXJuIHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiByfXZhciB1PXQoXCIuL2J1ZmZlci1saXRlXCIpO2UuY29weT1uLGUuc2xpY2U9aSxlLnRvU3RyaW5nPW8sZS53cml0ZT1mKFwid3JpdGVcIik7dmFyIGE9dChcIi4vYnVmZmVyaXNoXCIpLEJ1ZmZlcj1hLmdsb2JhbCxzPWEuaGFzQnVmZmVyJiZcIlRZUEVEX0FSUkFZX1NVUFBPUlRcImluIEJ1ZmZlcixjPXMmJiFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVH0se1wiLi9idWZmZXItbGl0ZVwiOjMsXCIuL2J1ZmZlcmlzaFwiOjh9XSw3OltmdW5jdGlvbih0LHIsZSl7ZnVuY3Rpb24gbih0KXtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkodCl9ZnVuY3Rpb24gaSh0KXtpZihvLmlzVmlldyh0KSl7dmFyIHI9dC5ieXRlT2Zmc2V0LG49dC5ieXRlTGVuZ3RoO3Q9dC5idWZmZXIsdC5ieXRlTGVuZ3RoIT09biYmKHQuc2xpY2U/dD10LnNsaWNlKHIscituKToodD1uZXcgVWludDhBcnJheSh0KSx0LmJ5dGVMZW5ndGghPT1uJiYodD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0LHIscituKSkpKX1lbHNle2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXJldHVybiBvLmZyb20uY2FsbChlLHQpO2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0KXRocm93IG5ldyBUeXBlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBhIG51bWJlcicpfXJldHVybiBuZXcgVWludDhBcnJheSh0KX12YXIgbz10KFwiLi9idWZmZXJpc2hcIiksZT1yLmV4cG9ydHM9by5oYXNBcnJheUJ1ZmZlcj9uKDApOltdO2UuYWxsb2M9bixlLmNvbmNhdD1vLmNvbmNhdCxlLmZyb209aX0se1wiLi9idWZmZXJpc2hcIjo4fV0sODpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCl7cmV0dXJuXCJzdHJpbmdcIj09dHlwZW9mIHQ/dS5jYWxsKHRoaXMsdCk6YSh0aGlzKS5mcm9tKHQpfWZ1bmN0aW9uIGkodCl7cmV0dXJuIGEodGhpcykuYWxsb2ModCl9ZnVuY3Rpb24gbyh0LHIpe2Z1bmN0aW9uIG4odCl7cis9dC5sZW5ndGh9ZnVuY3Rpb24gbyh0KXthKz13LmNvcHkuY2FsbCh0LHUsYSl9cnx8KHI9MCxBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHQsbikpO3ZhciBmPXRoaXMhPT1lJiZ0aGlzfHx0WzBdLHU9aS5jYWxsKGYsciksYT0wO3JldHVybiBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHQsbyksdX1mdW5jdGlvbiBmKHQpe3JldHVybiB0IGluc3RhbmNlb2YgQXJyYXlCdWZmZXJ8fEUodCl9ZnVuY3Rpb24gdSh0KXt2YXIgcj0zKnQubGVuZ3RoLGU9aS5jYWxsKHRoaXMsciksbj13LndyaXRlLmNhbGwoZSx0KTtyZXR1cm4gciE9PW4mJihlPXcuc2xpY2UuY2FsbChlLDAsbikpLGV9ZnVuY3Rpb24gYSh0KXtyZXR1cm4gZCh0KT9nOnkodCk/YjpwKHQpP3Y6aD9nOmw/Yjp2fWZ1bmN0aW9uIHMoKXtyZXR1cm4hMX1mdW5jdGlvbiBjKHQscil7cmV0dXJuIHQ9XCJbb2JqZWN0IFwiK3QrXCJdXCIsZnVuY3Rpb24oZSl7cmV0dXJuIG51bGwhPWUmJnt9LnRvU3RyaW5nLmNhbGwocj9lW3JdOmUpPT09dH19dmFyIEJ1ZmZlcj1lLmdsb2JhbD10KFwiLi9idWZmZXItZ2xvYmFsXCIpLGg9ZS5oYXNCdWZmZXI9QnVmZmVyJiYhIUJ1ZmZlci5pc0J1ZmZlcixsPWUuaGFzQXJyYXlCdWZmZXI9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyLHA9ZS5pc0FycmF5PXQoXCJpc2FycmF5XCIpO2UuaXNBcnJheUJ1ZmZlcj1sP2Y6czt2YXIgZD1lLmlzQnVmZmVyPWg/QnVmZmVyLmlzQnVmZmVyOnMseT1lLmlzVmlldz1sP0FycmF5QnVmZmVyLmlzVmlld3x8YyhcIkFycmF5QnVmZmVyXCIsXCJidWZmZXJcIik6cztlLmFsbG9jPWksZS5jb25jYXQ9byxlLmZyb209bjt2YXIgdj1lLkFycmF5PXQoXCIuL2J1ZmZlcmlzaC1hcnJheVwiKSxnPWUuQnVmZmVyPXQoXCIuL2J1ZmZlcmlzaC1idWZmZXJcIiksYj1lLlVpbnQ4QXJyYXk9dChcIi4vYnVmZmVyaXNoLXVpbnQ4YXJyYXlcIiksdz1lLnByb3RvdHlwZT10KFwiLi9idWZmZXJpc2gtcHJvdG9cIiksRT1jKFwiQXJyYXlCdWZmZXJcIil9LHtcIi4vYnVmZmVyLWdsb2JhbFwiOjIsXCIuL2J1ZmZlcmlzaC1hcnJheVwiOjQsXCIuL2J1ZmZlcmlzaC1idWZmZXJcIjo1LFwiLi9idWZmZXJpc2gtcHJvdG9cIjo2LFwiLi9idWZmZXJpc2gtdWludDhhcnJheVwiOjcsaXNhcnJheTozNH1dLDk6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQpe3JldHVybiB0aGlzIGluc3RhbmNlb2Ygbj8odGhpcy5vcHRpb25zPXQsdm9pZCB0aGlzLmluaXQoKSk6bmV3IG4odCl9ZnVuY3Rpb24gaSh0KXtmb3IodmFyIHIgaW4gdCluLnByb3RvdHlwZVtyXT1vKG4ucHJvdG90eXBlW3JdLHRbcl0pfWZ1bmN0aW9uIG8odCxyKXtmdW5jdGlvbiBlKCl7cmV0dXJuIHQuYXBwbHkodGhpcyxhcmd1bWVudHMpLHIuYXBwbHkodGhpcyxhcmd1bWVudHMpfXJldHVybiB0JiZyP2U6dHx8cn1mdW5jdGlvbiBmKHQpe2Z1bmN0aW9uIHIodCxyKXtyZXR1cm4gcih0KX1yZXR1cm4gdD10LnNsaWNlKCksZnVuY3Rpb24oZSl7cmV0dXJuIHQucmVkdWNlKHIsZSl9fWZ1bmN0aW9uIHUodCl7cmV0dXJuIHModCk/Zih0KTp0fWZ1bmN0aW9uIGEodCl7cmV0dXJuIG5ldyBuKHQpfXZhciBzPXQoXCJpc2FycmF5XCIpO2UuY3JlYXRlQ29kZWM9YSxlLmluc3RhbGw9aSxlLmZpbHRlcj11O3ZhciBjPXQoXCIuL2J1ZmZlcmlzaFwiKTtuLnByb3RvdHlwZS5pbml0PWZ1bmN0aW9uKCl7dmFyIHQ9dGhpcy5vcHRpb25zO3JldHVybiB0JiZ0LnVpbnQ4YXJyYXkmJih0aGlzLmJ1ZmZlcmlzaD1jLlVpbnQ4QXJyYXkpLHRoaXN9LGUucHJlc2V0PWEoe3ByZXNldDohMH0pfSx7XCIuL2J1ZmZlcmlzaFwiOjgsaXNhcnJheTozNH1dLDEwOltmdW5jdGlvbih0LHIsZSl7dChcIi4vcmVhZC1jb3JlXCIpLHQoXCIuL3dyaXRlLWNvcmVcIiksZS5jb2RlYz17cHJlc2V0OnQoXCIuL2NvZGVjLWJhc2VcIikucHJlc2V0fX0se1wiLi9jb2RlYy1iYXNlXCI6OSxcIi4vcmVhZC1jb3JlXCI6MjIsXCIuL3dyaXRlLWNvcmVcIjoyNX1dLDExOltmdW5jdGlvbih0LHIsZSl7ZnVuY3Rpb24gbih0KXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG4odCk7aWYodCYmKHRoaXMub3B0aW9ucz10LHQuY29kZWMpKXt2YXIgcj10aGlzLmNvZGVjPXQuY29kZWM7ci5idWZmZXJpc2gmJih0aGlzLmJ1ZmZlcmlzaD1yLmJ1ZmZlcmlzaCl9fWUuRGVjb2RlQnVmZmVyPW47dmFyIGk9dChcIi4vcmVhZC1jb3JlXCIpLnByZXNldCxvPXQoXCIuL2ZsZXgtYnVmZmVyXCIpLkZsZXhEZWNvZGVyO28ubWl4aW4obi5wcm90b3R5cGUpLG4ucHJvdG90eXBlLmNvZGVjPWksbi5wcm90b3R5cGUuZmV0Y2g9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5jb2RlYy5kZWNvZGUodGhpcyl9fSx7XCIuL2ZsZXgtYnVmZmVyXCI6MjEsXCIuL3JlYWQtY29yZVwiOjIyfV0sMTI6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQscil7dmFyIGU9bmV3IGkocik7cmV0dXJuIGUud3JpdGUodCksZS5yZWFkKCl9ZS5kZWNvZGU9bjt2YXIgaT10KFwiLi9kZWNvZGUtYnVmZmVyXCIpLkRlY29kZUJ1ZmZlcn0se1wiLi9kZWNvZGUtYnVmZmVyXCI6MTF9XSwxMzpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBuP3ZvaWQgby5jYWxsKHRoaXMsdCk6bmV3IG4odCl9ZS5EZWNvZGVyPW47dmFyIGk9dChcImV2ZW50LWxpdGVcIiksbz10KFwiLi9kZWNvZGUtYnVmZmVyXCIpLkRlY29kZUJ1ZmZlcjtuLnByb3RvdHlwZT1uZXcgbyxpLm1peGluKG4ucHJvdG90eXBlKSxuLnByb3RvdHlwZS5kZWNvZGU9ZnVuY3Rpb24odCl7YXJndW1lbnRzLmxlbmd0aCYmdGhpcy53cml0ZSh0KSx0aGlzLmZsdXNoKCl9LG4ucHJvdG90eXBlLnB1c2g9ZnVuY3Rpb24odCl7dGhpcy5lbWl0KFwiZGF0YVwiLHQpfSxuLnByb3RvdHlwZS5lbmQ9ZnVuY3Rpb24odCl7dGhpcy5kZWNvZGUodCksdGhpcy5lbWl0KFwiZW5kXCIpfX0se1wiLi9kZWNvZGUtYnVmZmVyXCI6MTEsXCJldmVudC1saXRlXCI6MzF9XSwxNDpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCl7aWYoISh0aGlzIGluc3RhbmNlb2YgbikpcmV0dXJuIG5ldyBuKHQpO2lmKHQmJih0aGlzLm9wdGlvbnM9dCx0LmNvZGVjKSl7dmFyIHI9dGhpcy5jb2RlYz10LmNvZGVjO3IuYnVmZmVyaXNoJiYodGhpcy5idWZmZXJpc2g9ci5idWZmZXJpc2gpfX1lLkVuY29kZUJ1ZmZlcj1uO3ZhciBpPXQoXCIuL3dyaXRlLWNvcmVcIikucHJlc2V0LG89dChcIi4vZmxleC1idWZmZXJcIikuRmxleEVuY29kZXI7by5taXhpbihuLnByb3RvdHlwZSksbi5wcm90b3R5cGUuY29kZWM9aSxuLnByb3RvdHlwZS53cml0ZT1mdW5jdGlvbih0KXt0aGlzLmNvZGVjLmVuY29kZSh0aGlzLHQpfX0se1wiLi9mbGV4LWJ1ZmZlclwiOjIxLFwiLi93cml0ZS1jb3JlXCI6MjV9XSwxNTpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCxyKXt2YXIgZT1uZXcgaShyKTtyZXR1cm4gZS53cml0ZSh0KSxlLnJlYWQoKX1lLmVuY29kZT1uO3ZhciBpPXQoXCIuL2VuY29kZS1idWZmZXJcIikuRW5jb2RlQnVmZmVyfSx7XCIuL2VuY29kZS1idWZmZXJcIjoxNH1dLDE2OltmdW5jdGlvbih0LHIsZSl7ZnVuY3Rpb24gbih0KXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4/dm9pZCBvLmNhbGwodGhpcyx0KTpuZXcgbih0KX1lLkVuY29kZXI9bjt2YXIgaT10KFwiZXZlbnQtbGl0ZVwiKSxvPXQoXCIuL2VuY29kZS1idWZmZXJcIikuRW5jb2RlQnVmZmVyO24ucHJvdG90eXBlPW5ldyBvLGkubWl4aW4obi5wcm90b3R5cGUpLG4ucHJvdG90eXBlLmVuY29kZT1mdW5jdGlvbih0KXt0aGlzLndyaXRlKHQpLHRoaXMuZW1pdChcImRhdGFcIix0aGlzLnJlYWQoKSl9LG4ucHJvdG90eXBlLmVuZD1mdW5jdGlvbih0KXthcmd1bWVudHMubGVuZ3RoJiZ0aGlzLmVuY29kZSh0KSx0aGlzLmZsdXNoKCksdGhpcy5lbWl0KFwiZW5kXCIpfX0se1wiLi9lbmNvZGUtYnVmZmVyXCI6MTQsXCJldmVudC1saXRlXCI6MzF9XSwxNzpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCxyKXtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIG4/KHRoaXMuYnVmZmVyPWkuZnJvbSh0KSx2b2lkKHRoaXMudHlwZT1yKSk6bmV3IG4odCxyKX1lLkV4dEJ1ZmZlcj1uO3ZhciBpPXQoXCIuL2J1ZmZlcmlzaFwiKX0se1wiLi9idWZmZXJpc2hcIjo4fV0sMTg6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQpe3QuYWRkRXh0UGFja2VyKDE0LEVycm9yLFt1LGldKSx0LmFkZEV4dFBhY2tlcigxLEV2YWxFcnJvcixbdSxpXSksdC5hZGRFeHRQYWNrZXIoMixSYW5nZUVycm9yLFt1LGldKSx0LmFkZEV4dFBhY2tlcigzLFJlZmVyZW5jZUVycm9yLFt1LGldKSx0LmFkZEV4dFBhY2tlcig0LFN5bnRheEVycm9yLFt1LGldKSx0LmFkZEV4dFBhY2tlcig1LFR5cGVFcnJvcixbdSxpXSksdC5hZGRFeHRQYWNrZXIoNixVUklFcnJvcixbdSxpXSksdC5hZGRFeHRQYWNrZXIoMTAsUmVnRXhwLFtmLGldKSx0LmFkZEV4dFBhY2tlcigxMSxCb29sZWFuLFtvLGldKSx0LmFkZEV4dFBhY2tlcigxMixTdHJpbmcsW28saV0pLHQuYWRkRXh0UGFja2VyKDEzLERhdGUsW051bWJlcixpXSksdC5hZGRFeHRQYWNrZXIoMTUsTnVtYmVyLFtvLGldKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhBcnJheSYmKHQuYWRkRXh0UGFja2VyKDE3LEludDhBcnJheSxjKSx0LmFkZEV4dFBhY2tlcigxOCxVaW50OEFycmF5LGMpLHQuYWRkRXh0UGFja2VyKDE5LEludDE2QXJyYXksYyksdC5hZGRFeHRQYWNrZXIoMjAsVWludDE2QXJyYXksYyksdC5hZGRFeHRQYWNrZXIoMjEsSW50MzJBcnJheSxjKSx0LmFkZEV4dFBhY2tlcigyMixVaW50MzJBcnJheSxjKSx0LmFkZEV4dFBhY2tlcigyMyxGbG9hdDMyQXJyYXksYyksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZsb2F0NjRBcnJheSYmdC5hZGRFeHRQYWNrZXIoMjQsRmxvYXQ2NEFycmF5LGMpLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSYmdC5hZGRFeHRQYWNrZXIoMjUsVWludDhDbGFtcGVkQXJyYXksYyksdC5hZGRFeHRQYWNrZXIoMjYsQXJyYXlCdWZmZXIsYyksdC5hZGRFeHRQYWNrZXIoMjksRGF0YVZpZXcsYykpLHMuaGFzQnVmZmVyJiZ0LmFkZEV4dFBhY2tlcigyNyxCdWZmZXIscy5mcm9tKX1mdW5jdGlvbiBpKHIpe3JldHVybiBhfHwoYT10KFwiLi9lbmNvZGVcIikuZW5jb2RlKSxhKHIpfWZ1bmN0aW9uIG8odCl7cmV0dXJuIHQudmFsdWVPZigpfWZ1bmN0aW9uIGYodCl7dD1SZWdFeHAucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodCkuc3BsaXQoXCIvXCIpLHQuc2hpZnQoKTt2YXIgcj1bdC5wb3AoKV07cmV0dXJuIHIudW5zaGlmdCh0LmpvaW4oXCIvXCIpKSxyfWZ1bmN0aW9uIHUodCl7dmFyIHI9e307Zm9yKHZhciBlIGluIGgpcltlXT10W2VdO3JldHVybiByfWUuc2V0RXh0UGFja2Vycz1uO3ZhciBhLHM9dChcIi4vYnVmZmVyaXNoXCIpLEJ1ZmZlcj1zLmdsb2JhbCxjPXMuVWludDhBcnJheS5mcm9tLGg9e25hbWU6MSxtZXNzYWdlOjEsc3RhY2s6MSxjb2x1bW5OdW1iZXI6MSxmaWxlTmFtZToxLGxpbmVOdW1iZXI6MX19LHtcIi4vYnVmZmVyaXNoXCI6OCxcIi4vZW5jb2RlXCI6MTV9XSwxOTpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCl7dC5hZGRFeHRVbnBhY2tlcigxNCxbaSxmKEVycm9yKV0pLHQuYWRkRXh0VW5wYWNrZXIoMSxbaSxmKEV2YWxFcnJvcildKSx0LmFkZEV4dFVucGFja2VyKDIsW2ksZihSYW5nZUVycm9yKV0pLHQuYWRkRXh0VW5wYWNrZXIoMyxbaSxmKFJlZmVyZW5jZUVycm9yKV0pLHQuYWRkRXh0VW5wYWNrZXIoNCxbaSxmKFN5bnRheEVycm9yKV0pLHQuYWRkRXh0VW5wYWNrZXIoNSxbaSxmKFR5cGVFcnJvcildKSx0LmFkZEV4dFVucGFja2VyKDYsW2ksZihVUklFcnJvcildKSx0LmFkZEV4dFVucGFja2VyKDEwLFtpLG9dKSx0LmFkZEV4dFVucGFja2VyKDExLFtpLHUoQm9vbGVhbildKSx0LmFkZEV4dFVucGFja2VyKDEyLFtpLHUoU3RyaW5nKV0pLHQuYWRkRXh0VW5wYWNrZXIoMTMsW2ksdShEYXRlKV0pLHQuYWRkRXh0VW5wYWNrZXIoMTUsW2ksdShOdW1iZXIpXSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFVpbnQ4QXJyYXkmJih0LmFkZEV4dFVucGFja2VyKDE3LHUoSW50OEFycmF5KSksdC5hZGRFeHRVbnBhY2tlcigxOCx1KFVpbnQ4QXJyYXkpKSx0LmFkZEV4dFVucGFja2VyKDE5LFthLHUoSW50MTZBcnJheSldKSx0LmFkZEV4dFVucGFja2VyKDIwLFthLHUoVWludDE2QXJyYXkpXSksdC5hZGRFeHRVbnBhY2tlcigyMSxbYSx1KEludDMyQXJyYXkpXSksdC5hZGRFeHRVbnBhY2tlcigyMixbYSx1KFVpbnQzMkFycmF5KV0pLHQuYWRkRXh0VW5wYWNrZXIoMjMsW2EsdShGbG9hdDMyQXJyYXkpXSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEZsb2F0NjRBcnJheSYmdC5hZGRFeHRVbnBhY2tlcigyNCxbYSx1KEZsb2F0NjRBcnJheSldKSxcInVuZGVmaW5lZFwiIT10eXBlb2YgVWludDhDbGFtcGVkQXJyYXkmJnQuYWRkRXh0VW5wYWNrZXIoMjUsdShVaW50OENsYW1wZWRBcnJheSkpLHQuYWRkRXh0VW5wYWNrZXIoMjYsYSksdC5hZGRFeHRVbnBhY2tlcigyOSxbYSx1KERhdGFWaWV3KV0pKSxjLmhhc0J1ZmZlciYmdC5hZGRFeHRVbnBhY2tlcigyNyx1KEJ1ZmZlcikpfWZ1bmN0aW9uIGkocil7cmV0dXJuIHN8fChzPXQoXCIuL2RlY29kZVwiKS5kZWNvZGUpLHMocil9ZnVuY3Rpb24gbyh0KXtyZXR1cm4gUmVnRXhwLmFwcGx5KG51bGwsdCl9ZnVuY3Rpb24gZih0KXtyZXR1cm4gZnVuY3Rpb24ocil7dmFyIGU9bmV3IHQ7Zm9yKHZhciBuIGluIGgpZVtuXT1yW25dO3JldHVybiBlfX1mdW5jdGlvbiB1KHQpe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gbmV3IHQocil9fWZ1bmN0aW9uIGEodCl7cmV0dXJuIG5ldyBVaW50OEFycmF5KHQpLmJ1ZmZlcn1lLnNldEV4dFVucGFja2Vycz1uO3ZhciBzLGM9dChcIi4vYnVmZmVyaXNoXCIpLEJ1ZmZlcj1jLmdsb2JhbCxoPXtuYW1lOjEsbWVzc2FnZToxLHN0YWNrOjEsY29sdW1uTnVtYmVyOjEsZmlsZU5hbWU6MSxsaW5lTnVtYmVyOjF9fSx7XCIuL2J1ZmZlcmlzaFwiOjgsXCIuL2RlY29kZVwiOjEyfV0sMjA6W2Z1bmN0aW9uKHQscixlKXt0KFwiLi9yZWFkLWNvcmVcIiksdChcIi4vd3JpdGUtY29yZVwiKSxlLmNyZWF0ZUNvZGVjPXQoXCIuL2NvZGVjLWJhc2VcIikuY3JlYXRlQ29kZWN9LHtcIi4vY29kZWMtYmFzZVwiOjksXCIuL3JlYWQtY29yZVwiOjIyLFwiLi93cml0ZS1jb3JlXCI6MjV9XSwyMTpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4oKXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG59ZnVuY3Rpb24gaSgpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGkpKXJldHVybiBuZXcgaX1mdW5jdGlvbiBvKCl7ZnVuY3Rpb24gdCh0KXt2YXIgcj10aGlzLm9mZnNldD9wLnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuYnVmZmVyLHRoaXMub2Zmc2V0KTp0aGlzLmJ1ZmZlcjt0aGlzLmJ1ZmZlcj1yP3Q/dGhpcy5idWZmZXJpc2guY29uY2F0KFtyLHRdKTpyOnQsdGhpcy5vZmZzZXQ9MH1mdW5jdGlvbiByKCl7Zm9yKDt0aGlzLm9mZnNldDx0aGlzLmJ1ZmZlci5sZW5ndGg7KXt2YXIgdCxyPXRoaXMub2Zmc2V0O3RyeXt0PXRoaXMuZmV0Y2goKX1jYXRjaCh0KXtpZih0JiZ0Lm1lc3NhZ2UhPXYpdGhyb3cgdDt0aGlzLm9mZnNldD1yO2JyZWFrfXRoaXMucHVzaCh0KX19ZnVuY3Rpb24gZSh0KXt2YXIgcj10aGlzLm9mZnNldCxlPXIrdDtpZihlPnRoaXMuYnVmZmVyLmxlbmd0aCl0aHJvdyBuZXcgRXJyb3Iodik7cmV0dXJuIHRoaXMub2Zmc2V0PWUscn1yZXR1cm57YnVmZmVyaXNoOnAsd3JpdGU6dCxmZXRjaDphLGZsdXNoOnIscHVzaDpjLHB1bGw6aCxyZWFkOnMscmVzZXJ2ZTplLG9mZnNldDowfX1mdW5jdGlvbiBmKCl7ZnVuY3Rpb24gdCgpe3ZhciB0PXRoaXMuc3RhcnQ7aWYodDx0aGlzLm9mZnNldCl7dmFyIHI9dGhpcy5zdGFydD10aGlzLm9mZnNldDtyZXR1cm4gcC5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmJ1ZmZlcix0LHIpfX1mdW5jdGlvbiByKCl7Zm9yKDt0aGlzLnN0YXJ0PHRoaXMub2Zmc2V0Oyl7dmFyIHQ9dGhpcy5mZXRjaCgpO3QmJnRoaXMucHVzaCh0KX19ZnVuY3Rpb24gZSgpe3ZhciB0PXRoaXMuYnVmZmVyc3x8KHRoaXMuYnVmZmVycz1bXSkscj10Lmxlbmd0aD4xP3RoaXMuYnVmZmVyaXNoLmNvbmNhdCh0KTp0WzBdO3JldHVybiB0Lmxlbmd0aD0wLHJ9ZnVuY3Rpb24gbih0KXt2YXIgcj0wfHQ7aWYodGhpcy5idWZmZXIpe3ZhciBlPXRoaXMuYnVmZmVyLmxlbmd0aCxuPTB8dGhpcy5vZmZzZXQsaT1uK3I7aWYoaTxlKXJldHVybiB0aGlzLm9mZnNldD1pLG47dGhpcy5mbHVzaCgpLHQ9TWF0aC5tYXgodCxNYXRoLm1pbigyKmUsdGhpcy5tYXhCdWZmZXJTaXplKSl9cmV0dXJuIHQ9TWF0aC5tYXgodCx0aGlzLm1pbkJ1ZmZlclNpemUpLHRoaXMuYnVmZmVyPXRoaXMuYnVmZmVyaXNoLmFsbG9jKHQpLHRoaXMuc3RhcnQ9MCx0aGlzLm9mZnNldD1yLDB9ZnVuY3Rpb24gaSh0KXt2YXIgcj10Lmxlbmd0aDtpZihyPnRoaXMubWluQnVmZmVyU2l6ZSl0aGlzLmZsdXNoKCksdGhpcy5wdXNoKHQpO2Vsc2V7dmFyIGU9dGhpcy5yZXNlcnZlKHIpO3AucHJvdG90eXBlLmNvcHkuY2FsbCh0LHRoaXMuYnVmZmVyLGUpfX1yZXR1cm57YnVmZmVyaXNoOnAsd3JpdGU6dSxmZXRjaDp0LGZsdXNoOnIscHVzaDpjLHB1bGw6ZSxyZWFkOnMscmVzZXJ2ZTpuLHNlbmQ6aSxtYXhCdWZmZXJTaXplOnksbWluQnVmZmVyU2l6ZTpkLG9mZnNldDowLHN0YXJ0OjB9fWZ1bmN0aW9uIHUoKXt0aHJvdyBuZXcgRXJyb3IoXCJtZXRob2Qgbm90IGltcGxlbWVudGVkOiB3cml0ZSgpXCIpfWZ1bmN0aW9uIGEoKXt0aHJvdyBuZXcgRXJyb3IoXCJtZXRob2Qgbm90IGltcGxlbWVudGVkOiBmZXRjaCgpXCIpfWZ1bmN0aW9uIHMoKXt2YXIgdD10aGlzLmJ1ZmZlcnMmJnRoaXMuYnVmZmVycy5sZW5ndGg7cmV0dXJuIHQ/KHRoaXMuZmx1c2goKSx0aGlzLnB1bGwoKSk6dGhpcy5mZXRjaCgpfWZ1bmN0aW9uIGModCl7dmFyIHI9dGhpcy5idWZmZXJzfHwodGhpcy5idWZmZXJzPVtdKTtyLnB1c2godCl9ZnVuY3Rpb24gaCgpe3ZhciB0PXRoaXMuYnVmZmVyc3x8KHRoaXMuYnVmZmVycz1bXSk7cmV0dXJuIHQuc2hpZnQoKX1mdW5jdGlvbiBsKHQpe2Z1bmN0aW9uIHIocil7Zm9yKHZhciBlIGluIHQpcltlXT10W2VdO3JldHVybiByfXJldHVybiByfWUuRmxleERlY29kZXI9bixlLkZsZXhFbmNvZGVyPWk7dmFyIHA9dChcIi4vYnVmZmVyaXNoXCIpLGQ9MjA0OCx5PTY1NTM2LHY9XCJCVUZGRVJfU0hPUlRBR0VcIjtuLm1peGluPWwobygpKSxuLm1peGluKG4ucHJvdG90eXBlKSxpLm1peGluPWwoZigpKSxpLm1peGluKGkucHJvdG90eXBlKX0se1wiLi9idWZmZXJpc2hcIjo4fV0sMjI6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQpe2Z1bmN0aW9uIHIodCl7dmFyIHI9cyh0KSxuPWVbcl07aWYoIW4pdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCB0eXBlOiBcIisocj9cIjB4XCIrci50b1N0cmluZygxNik6cikpO3JldHVybiBuKHQpfXZhciBlPWMuZ2V0UmVhZFRva2VuKHQpO3JldHVybiByfWZ1bmN0aW9uIGkoKXt2YXIgdD10aGlzLm9wdGlvbnM7cmV0dXJuIHRoaXMuZGVjb2RlPW4odCksdCYmdC5wcmVzZXQmJmEuc2V0RXh0VW5wYWNrZXJzKHRoaXMpLHRoaXN9ZnVuY3Rpb24gbyh0LHIpe3ZhciBlPXRoaXMuZXh0VW5wYWNrZXJzfHwodGhpcy5leHRVbnBhY2tlcnM9W10pO2VbdF09aC5maWx0ZXIocil9ZnVuY3Rpb24gZih0KXtmdW5jdGlvbiByKHIpe3JldHVybiBuZXcgdShyLHQpfXZhciBlPXRoaXMuZXh0VW5wYWNrZXJzfHwodGhpcy5leHRVbnBhY2tlcnM9W10pO3JldHVybiBlW3RdfHxyfXZhciB1PXQoXCIuL2V4dC1idWZmZXJcIikuRXh0QnVmZmVyLGE9dChcIi4vZXh0LXVucGFja2VyXCIpLHM9dChcIi4vcmVhZC1mb3JtYXRcIikucmVhZFVpbnQ4LGM9dChcIi4vcmVhZC10b2tlblwiKSxoPXQoXCIuL2NvZGVjLWJhc2VcIik7aC5pbnN0YWxsKHthZGRFeHRVbnBhY2tlcjpvLGdldEV4dFVucGFja2VyOmYsaW5pdDppfSksZS5wcmVzZXQ9aS5jYWxsKGgucHJlc2V0KX0se1wiLi9jb2RlYy1iYXNlXCI6OSxcIi4vZXh0LWJ1ZmZlclwiOjE3LFwiLi9leHQtdW5wYWNrZXJcIjoxOSxcIi4vcmVhZC1mb3JtYXRcIjoyMyxcIi4vcmVhZC10b2tlblwiOjI0fV0sMjM6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQpe3ZhciByPWsuaGFzQXJyYXlCdWZmZXImJnQmJnQuYmluYXJyYXlidWZmZXIsZT10JiZ0LmludDY0LG49VCYmdCYmdC51c2VtYXAsQj17bWFwOm4/bzppLGFycmF5OmYsc3RyOnUsYmluOnI/czphLGV4dDpjLHVpbnQ4OmgsdWludDE2OnAsdWludDMyOnksdWludDY0OmcoOCxlP0U6YiksaW50ODpsLGludDE2OmQsaW50MzI6dixpbnQ2NDpnKDgsZT9BOncpLGZsb2F0MzI6Zyg0LG0pLGZsb2F0NjQ6Zyg4LHgpfTtyZXR1cm4gQn1mdW5jdGlvbiBpKHQscil7dmFyIGUsbj17fSxpPW5ldyBBcnJheShyKSxvPW5ldyBBcnJheShyKSxmPXQuY29kZWMuZGVjb2RlO2ZvcihlPTA7ZTxyO2UrKylpW2VdPWYodCksb1tlXT1mKHQpO2ZvcihlPTA7ZTxyO2UrKyluW2lbZV1dPW9bZV07cmV0dXJuIG59ZnVuY3Rpb24gbyh0LHIpe3ZhciBlLG49bmV3IE1hcCxpPW5ldyBBcnJheShyKSxvPW5ldyBBcnJheShyKSxmPXQuY29kZWMuZGVjb2RlO2ZvcihlPTA7ZTxyO2UrKylpW2VdPWYodCksb1tlXT1mKHQpO2ZvcihlPTA7ZTxyO2UrKyluLnNldChpW2VdLG9bZV0pO3JldHVybiBufWZ1bmN0aW9uIGYodCxyKXtmb3IodmFyIGU9bmV3IEFycmF5KHIpLG49dC5jb2RlYy5kZWNvZGUsaT0wO2k8cjtpKyspZVtpXT1uKHQpO3JldHVybiBlfWZ1bmN0aW9uIHUodCxyKXt2YXIgZT10LnJlc2VydmUociksbj1lK3I7cmV0dXJuIF8udG9TdHJpbmcuY2FsbCh0LmJ1ZmZlcixcInV0Zi04XCIsZSxuKX1mdW5jdGlvbiBhKHQscil7dmFyIGU9dC5yZXNlcnZlKHIpLG49ZStyLGk9Xy5zbGljZS5jYWxsKHQuYnVmZmVyLGUsbik7cmV0dXJuIGsuZnJvbShpKX1mdW5jdGlvbiBzKHQscil7dmFyIGU9dC5yZXNlcnZlKHIpLG49ZStyLGk9Xy5zbGljZS5jYWxsKHQuYnVmZmVyLGUsbik7cmV0dXJuIGsuVWludDhBcnJheS5mcm9tKGkpLmJ1ZmZlcn1mdW5jdGlvbiBjKHQscil7dmFyIGU9dC5yZXNlcnZlKHIrMSksbj10LmJ1ZmZlcltlKytdLGk9ZStyLG89dC5jb2RlYy5nZXRFeHRVbnBhY2tlcihuKTtpZighbyl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGV4dCB0eXBlOiBcIisobj9cIjB4XCIrbi50b1N0cmluZygxNik6bikpO3ZhciBmPV8uc2xpY2UuY2FsbCh0LmJ1ZmZlcixlLGkpO3JldHVybiBvKGYpfWZ1bmN0aW9uIGgodCl7dmFyIHI9dC5yZXNlcnZlKDEpO3JldHVybiB0LmJ1ZmZlcltyXX1mdW5jdGlvbiBsKHQpe3ZhciByPXQucmVzZXJ2ZSgxKSxlPXQuYnVmZmVyW3JdO3JldHVybiAxMjgmZT9lLTI1NjplfWZ1bmN0aW9uIHAodCl7dmFyIHI9dC5yZXNlcnZlKDIpLGU9dC5idWZmZXI7cmV0dXJuIGVbcisrXTw8OHxlW3JdfWZ1bmN0aW9uIGQodCl7dmFyIHI9dC5yZXNlcnZlKDIpLGU9dC5idWZmZXIsbj1lW3IrK108PDh8ZVtyXTtyZXR1cm4gMzI3Njgmbj9uLTY1NTM2Om59ZnVuY3Rpb24geSh0KXt2YXIgcj10LnJlc2VydmUoNCksZT10LmJ1ZmZlcjtyZXR1cm4gMTY3NzcyMTYqZVtyKytdKyhlW3IrK108PDE2KSsoZVtyKytdPDw4KStlW3JdfWZ1bmN0aW9uIHYodCl7dmFyIHI9dC5yZXNlcnZlKDQpLGU9dC5idWZmZXI7cmV0dXJuIGVbcisrXTw8MjR8ZVtyKytdPDwxNnxlW3IrK108PDh8ZVtyXX1mdW5jdGlvbiBnKHQscil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPWUucmVzZXJ2ZSh0KTtyZXR1cm4gci5jYWxsKGUuYnVmZmVyLG4sUyl9fWZ1bmN0aW9uIGIodCl7cmV0dXJuIG5ldyBQKHRoaXMsdCkudG9OdW1iZXIoKX1mdW5jdGlvbiB3KHQpe3JldHVybiBuZXcgUih0aGlzLHQpLnRvTnVtYmVyKCl9ZnVuY3Rpb24gRSh0KXtyZXR1cm4gbmV3IFAodGhpcyx0KX1mdW5jdGlvbiBBKHQpe3JldHVybiBuZXcgUih0aGlzLHQpfWZ1bmN0aW9uIG0odCl7cmV0dXJuIEIucmVhZCh0aGlzLHQsITEsMjMsNCl9ZnVuY3Rpb24geCh0KXtyZXR1cm4gQi5yZWFkKHRoaXMsdCwhMSw1Miw4KX12YXIgQj10KFwiaWVlZTc1NFwiKSxVPXQoXCJpbnQ2NC1idWZmZXJcIiksUD1VLlVpbnQ2NEJFLFI9VS5JbnQ2NEJFO2UuZ2V0UmVhZEZvcm1hdD1uLGUucmVhZFVpbnQ4PWg7dmFyIGs9dChcIi4vYnVmZmVyaXNoXCIpLF89dChcIi4vYnVmZmVyaXNoLXByb3RvXCIpLFQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCxTPSEwfSx7XCIuL2J1ZmZlcmlzaFwiOjgsXCIuL2J1ZmZlcmlzaC1wcm90b1wiOjYsaWVlZTc1NDozMixcImludDY0LWJ1ZmZlclwiOjMzfV0sMjQ6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQpe3ZhciByPXMuZ2V0UmVhZEZvcm1hdCh0KTtyZXR1cm4gdCYmdC51c2VyYXc/byhyKTppKHIpfWZ1bmN0aW9uIGkodCl7dmFyIHIsZT1uZXcgQXJyYXkoMjU2KTtmb3Iocj0wO3I8PTEyNztyKyspZVtyXT1mKHIpO2ZvcihyPTEyODtyPD0xNDM7cisrKWVbcl09YShyLTEyOCx0Lm1hcCk7Zm9yKHI9MTQ0O3I8PTE1OTtyKyspZVtyXT1hKHItMTQ0LHQuYXJyYXkpO2ZvcihyPTE2MDtyPD0xOTE7cisrKWVbcl09YShyLTE2MCx0LnN0cik7Zm9yKGVbMTkyXT1mKG51bGwpLGVbMTkzXT1udWxsLGVbMTk0XT1mKCExKSxlWzE5NV09ZighMCksZVsxOTZdPXUodC51aW50OCx0LmJpbiksZVsxOTddPXUodC51aW50MTYsdC5iaW4pLGVbMTk4XT11KHQudWludDMyLHQuYmluKSxlWzE5OV09dSh0LnVpbnQ4LHQuZXh0KSxlWzIwMF09dSh0LnVpbnQxNix0LmV4dCksZVsyMDFdPXUodC51aW50MzIsdC5leHQpLGVbMjAyXT10LmZsb2F0MzIsZVsyMDNdPXQuZmxvYXQ2NCxlWzIwNF09dC51aW50OCxlWzIwNV09dC51aW50MTYsZVsyMDZdPXQudWludDMyLGVbMjA3XT10LnVpbnQ2NCxlWzIwOF09dC5pbnQ4LGVbMjA5XT10LmludDE2LGVbMjEwXT10LmludDMyLGVbMjExXT10LmludDY0LGVbMjEyXT1hKDEsdC5leHQpLGVbMjEzXT1hKDIsdC5leHQpLGVbMjE0XT1hKDQsdC5leHQpLGVbMjE1XT1hKDgsdC5leHQpLGVbMjE2XT1hKDE2LHQuZXh0KSxlWzIxN109dSh0LnVpbnQ4LHQuc3RyKSxlWzIxOF09dSh0LnVpbnQxNix0LnN0ciksZVsyMTldPXUodC51aW50MzIsdC5zdHIpLGVbMjIwXT11KHQudWludDE2LHQuYXJyYXkpLGVbMjIxXT11KHQudWludDMyLHQuYXJyYXkpLGVbMjIyXT11KHQudWludDE2LHQubWFwKSxlWzIyM109dSh0LnVpbnQzMix0Lm1hcCkscj0yMjQ7cjw9MjU1O3IrKyllW3JdPWYoci0yNTYpO3JldHVybiBlfWZ1bmN0aW9uIG8odCl7dmFyIHIsZT1pKHQpLnNsaWNlKCk7Zm9yKGVbMjE3XT1lWzE5Nl0sZVsyMThdPWVbMTk3XSxlWzIxOV09ZVsxOThdLHI9MTYwO3I8PTE5MTtyKyspZVtyXT1hKHItMTYwLHQuYmluKTtyZXR1cm4gZX1mdW5jdGlvbiBmKHQpe3JldHVybiBmdW5jdGlvbigpe3JldHVybiB0fX1mdW5jdGlvbiB1KHQscil7cmV0dXJuIGZ1bmN0aW9uKGUpe3ZhciBuPXQoZSk7cmV0dXJuIHIoZSxuKX19ZnVuY3Rpb24gYSh0LHIpe3JldHVybiBmdW5jdGlvbihlKXtyZXR1cm4gcihlLHQpfX12YXIgcz10KFwiLi9yZWFkLWZvcm1hdFwiKTtlLmdldFJlYWRUb2tlbj1ufSx7XCIuL3JlYWQtZm9ybWF0XCI6MjN9XSwyNTpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCl7ZnVuY3Rpb24gcih0LHIpe3ZhciBuPWVbdHlwZW9mIHJdO2lmKCFuKXRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgdHlwZSBcIicrdHlwZW9mIHIrJ1wiOiAnK3IpO24odCxyKX12YXIgZT1zLmdldFdyaXRlVHlwZSh0KTtyZXR1cm4gcn1mdW5jdGlvbiBpKCl7dmFyIHQ9dGhpcy5vcHRpb25zO3JldHVybiB0aGlzLmVuY29kZT1uKHQpLHQmJnQucHJlc2V0JiZhLnNldEV4dFBhY2tlcnModGhpcyksdGhpc31mdW5jdGlvbiBvKHQscixlKXtmdW5jdGlvbiBuKHIpe3JldHVybiBlJiYocj1lKHIpKSxuZXcgdShyLHQpfWU9Yy5maWx0ZXIoZSk7dmFyIGk9ci5uYW1lO2lmKGkmJlwiT2JqZWN0XCIhPT1pKXt2YXIgbz10aGlzLmV4dFBhY2tlcnN8fCh0aGlzLmV4dFBhY2tlcnM9e30pO29baV09bn1lbHNle3ZhciBmPXRoaXMuZXh0RW5jb2Rlckxpc3R8fCh0aGlzLmV4dEVuY29kZXJMaXN0PVtdKTtmLnVuc2hpZnQoW3Isbl0pfX1mdW5jdGlvbiBmKHQpe3ZhciByPXRoaXMuZXh0UGFja2Vyc3x8KHRoaXMuZXh0UGFja2Vycz17fSksZT10LmNvbnN0cnVjdG9yLG49ZSYmZS5uYW1lJiZyW2UubmFtZV07aWYobilyZXR1cm4gbjtmb3IodmFyIGk9dGhpcy5leHRFbmNvZGVyTGlzdHx8KHRoaXMuZXh0RW5jb2Rlckxpc3Q9W10pLG89aS5sZW5ndGgsZj0wO2Y8bztmKyspe3ZhciB1PWlbZl07aWYoZT09PXVbMF0pcmV0dXJuIHVbMV19fXZhciB1PXQoXCIuL2V4dC1idWZmZXJcIikuRXh0QnVmZmVyLGE9dChcIi4vZXh0LXBhY2tlclwiKSxzPXQoXCIuL3dyaXRlLXR5cGVcIiksYz10KFwiLi9jb2RlYy1iYXNlXCIpO2MuaW5zdGFsbCh7YWRkRXh0UGFja2VyOm8sZ2V0RXh0UGFja2VyOmYsaW5pdDppfSksZS5wcmVzZXQ9aS5jYWxsKGMucHJlc2V0KX0se1wiLi9jb2RlYy1iYXNlXCI6OSxcIi4vZXh0LWJ1ZmZlclwiOjE3LFwiLi9leHQtcGFja2VyXCI6MTgsXCIuL3dyaXRlLXR5cGVcIjoyN31dLDI2OltmdW5jdGlvbih0LHIsZSl7ZnVuY3Rpb24gbih0KXtyZXR1cm4gdCYmdC51aW50OGFycmF5P2koKTptfHxFLmhhc0J1ZmZlciYmdCYmdC5zYWZlP2YoKTpvKCl9ZnVuY3Rpb24gaSgpe3ZhciB0PW8oKTtyZXR1cm4gdFsyMDJdPWMoMjAyLDQscCksdFsyMDNdPWMoMjAzLDgsZCksdH1mdW5jdGlvbiBvKCl7dmFyIHQ9dy5zbGljZSgpO3JldHVybiB0WzE5Nl09dSgxOTYpLHRbMTk3XT1hKDE5NyksdFsxOThdPXMoMTk4KSx0WzE5OV09dSgxOTkpLHRbMjAwXT1hKDIwMCksdFsyMDFdPXMoMjAxKSx0WzIwMl09YygyMDIsNCx4LndyaXRlRmxvYXRCRXx8cCwhMCksdFsyMDNdPWMoMjAzLDgseC53cml0ZURvdWJsZUJFfHxkLCEwKSx0WzIwNF09dSgyMDQpLHRbMjA1XT1hKDIwNSksdFsyMDZdPXMoMjA2KSx0WzIwN109YygyMDcsOCxoKSx0WzIwOF09dSgyMDgpLHRbMjA5XT1hKDIwOSksdFsyMTBdPXMoMjEwKSx0WzIxMV09YygyMTEsOCxsKSx0WzIxN109dSgyMTcpLHRbMjE4XT1hKDIxOCksdFsyMTldPXMoMjE5KSx0WzIyMF09YSgyMjApLHRbMjIxXT1zKDIyMSksdFsyMjJdPWEoMjIyKSx0WzIyM109cygyMjMpLHR9ZnVuY3Rpb24gZigpe3ZhciB0PXcuc2xpY2UoKTtyZXR1cm4gdFsxOTZdPWMoMTk2LDEsQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4KSx0WzE5N109YygxOTcsMixCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUpLHRbMTk4XT1jKDE5OCw0LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSksdFsxOTldPWMoMTk5LDEsQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4KSx0WzIwMF09YygyMDAsMixCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUpLHRbMjAxXT1jKDIwMSw0LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSksdFsyMDJdPWMoMjAyLDQsQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkUpLHRbMjAzXT1jKDIwMyw4LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVEb3VibGVCRSksdFsyMDRdPWMoMjA0LDEsQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4KSx0WzIwNV09YygyMDUsMixCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUpLHRbMjA2XT1jKDIwNiw0LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSksdFsyMDddPWMoMjA3LDgsaCksdFsyMDhdPWMoMjA4LDEsQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDgpLHRbMjA5XT1jKDIwOSwyLEJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkJFKSx0WzIxMF09YygyMTAsNCxCdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJCRSksdFsyMTFdPWMoMjExLDgsbCksdFsyMTddPWMoMjE3LDEsQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQ4KSx0WzIxOF09YygyMTgsMixCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkUpLHRbMjE5XT1jKDIxOSw0LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRSksdFsyMjBdPWMoMjIwLDIsQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQxNkJFKSx0WzIyMV09YygyMjEsNCxCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDMyQkUpLHRbMjIyXT1jKDIyMiwyLEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZCRSksdFsyMjNdPWMoMjIzLDQsQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkJFKSx0fWZ1bmN0aW9uIHUodCl7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7dmFyIG49ci5yZXNlcnZlKDIpLGk9ci5idWZmZXI7aVtuKytdPXQsaVtuXT1lfX1mdW5jdGlvbiBhKHQpe3JldHVybiBmdW5jdGlvbihyLGUpe3ZhciBuPXIucmVzZXJ2ZSgzKSxpPXIuYnVmZmVyO2lbbisrXT10LGlbbisrXT1lPj4+OCxpW25dPWV9fWZ1bmN0aW9uIHModCl7cmV0dXJuIGZ1bmN0aW9uKHIsZSl7dmFyIG49ci5yZXNlcnZlKDUpLGk9ci5idWZmZXI7aVtuKytdPXQsaVtuKytdPWU+Pj4yNCxpW24rK109ZT4+PjE2LGlbbisrXT1lPj4+OCxpW25dPWV9fWZ1bmN0aW9uIGModCxyLGUsbil7cmV0dXJuIGZ1bmN0aW9uKGksbyl7dmFyIGY9aS5yZXNlcnZlKHIrMSk7aS5idWZmZXJbZisrXT10LGUuY2FsbChpLmJ1ZmZlcixvLGYsbil9fWZ1bmN0aW9uIGgodCxyKXtuZXcgZyh0aGlzLHIsdCl9ZnVuY3Rpb24gbCh0LHIpe25ldyBiKHRoaXMscix0KX1mdW5jdGlvbiBwKHQscil7eS53cml0ZSh0aGlzLHQsciwhMSwyMyw0KX1mdW5jdGlvbiBkKHQscil7eS53cml0ZSh0aGlzLHQsciwhMSw1Miw4KX12YXIgeT10KFwiaWVlZTc1NFwiKSx2PXQoXCJpbnQ2NC1idWZmZXJcIiksZz12LlVpbnQ2NEJFLGI9di5JbnQ2NEJFLHc9dChcIi4vd3JpdGUtdWludDhcIikudWludDgsRT10KFwiLi9idWZmZXJpc2hcIiksQnVmZmVyPUUuZ2xvYmFsLEE9RS5oYXNCdWZmZXImJlwiVFlQRURfQVJSQVlfU1VQUE9SVFwiaW4gQnVmZmVyLG09QSYmIUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JULHg9RS5oYXNCdWZmZXImJkJ1ZmZlci5wcm90b3R5cGV8fHt9O2UuZ2V0V3JpdGVUb2tlbj1ufSx7XCIuL2J1ZmZlcmlzaFwiOjgsXCIuL3dyaXRlLXVpbnQ4XCI6MjgsaWVlZTc1NDozMixcImludDY0LWJ1ZmZlclwiOjMzfV0sMjc6W2Z1bmN0aW9uKHQscixlKXtmdW5jdGlvbiBuKHQpe2Z1bmN0aW9uIHIodCxyKXt2YXIgZT1yPzE5NToxOTQ7X1tlXSh0LHIpfWZ1bmN0aW9uIGUodCxyKXt2YXIgZSxuPTB8cjtyZXR1cm4gciE9PW4/KGU9MjAzLHZvaWQgX1tlXSh0LHIpKTooZT0tMzI8PW4mJm48PTEyNz8yNTUmbjowPD1uP248PTI1NT8yMDQ6bjw9NjU1MzU/MjA1OjIwNjotMTI4PD1uPzIwODotMzI3Njg8PW4/MjA5OjIxMCx2b2lkIF9bZV0odCxuKSl9ZnVuY3Rpb24gbih0LHIpe3ZhciBlPTIwNztfW2VdKHQsci50b0FycmF5KCkpfWZ1bmN0aW9uIG8odCxyKXt2YXIgZT0yMTE7X1tlXSh0LHIudG9BcnJheSgpKX1mdW5jdGlvbiB2KHQpe3JldHVybiB0PDMyPzE6dDw9MjU1PzI6dDw9NjU1MzU/Mzo1fWZ1bmN0aW9uIGcodCl7cmV0dXJuIHQ8MzI/MTp0PD02NTUzNT8zOjV9ZnVuY3Rpb24gYih0KXtmdW5jdGlvbiByKHIsZSl7dmFyIG49ZS5sZW5ndGgsaT01KzMqbjtyLm9mZnNldD1yLnJlc2VydmUoaSk7dmFyIG89ci5idWZmZXIsZj10KG4pLHU9ci5vZmZzZXQrZjtuPXMud3JpdGUuY2FsbChvLGUsdSk7dmFyIGE9dChuKTtpZihmIT09YSl7dmFyIGM9dSthLWYsaD11K247cy5jb3B5LmNhbGwobyxvLGMsdSxoKX12YXIgbD0xPT09YT8xNjArbjphPD0zPzIxNSthOjIxOTtfW2xdKHIsbiksci5vZmZzZXQrPW59cmV0dXJuIHJ9ZnVuY3Rpb24gdyh0LHIpe2lmKG51bGw9PT1yKXJldHVybiBBKHQscik7aWYoSShyKSlyZXR1cm4gWSh0LHIpO2lmKGkocikpcmV0dXJuIG0odCxyKTtpZihmLmlzVWludDY0QkUocikpcmV0dXJuIG4odCxyKTtpZih1LmlzSW50NjRCRShyKSlyZXR1cm4gbyh0LHIpO3ZhciBlPXQuY29kZWMuZ2V0RXh0UGFja2VyKHIpO3JldHVybiBlJiYocj1lKHIpKSxyIGluc3RhbmNlb2YgbD9VKHQscik6dm9pZCBEKHQscil9ZnVuY3Rpb24gRSh0LHIpe3JldHVybiBJKHIpP2sodCxyKTp2b2lkIHcodCxyKX1mdW5jdGlvbiBBKHQscil7dmFyIGU9MTkyO19bZV0odCxyKX1mdW5jdGlvbiBtKHQscil7dmFyIGU9ci5sZW5ndGgsbj1lPDE2PzE0NCtlOmU8PTY1NTM1PzIyMDoyMjE7X1tuXSh0LGUpO2Zvcih2YXIgaT10LmNvZGVjLmVuY29kZSxvPTA7bzxlO28rKylpKHQscltvXSl9ZnVuY3Rpb24geCh0LHIpe3ZhciBlPXIubGVuZ3RoLG49ZTwyNTU/MTk2OmU8PTY1NTM1PzE5NzoxOTg7X1tuXSh0LGUpLHQuc2VuZChyKX1mdW5jdGlvbiBCKHQscil7eCh0LG5ldyBVaW50OEFycmF5KHIpKX1mdW5jdGlvbiBVKHQscil7dmFyIGU9ci5idWZmZXIsbj1lLmxlbmd0aCxpPXlbbl18fChuPDI1NT8xOTk6bjw9NjU1MzU/MjAwOjIwMSk7X1tpXSh0LG4pLGhbci50eXBlXSh0KSx0LnNlbmQoZSl9ZnVuY3Rpb24gUCh0LHIpe3ZhciBlPU9iamVjdC5rZXlzKHIpLG49ZS5sZW5ndGgsaT1uPDE2PzEyOCtuOm48PTY1NTM1PzIyMjoyMjM7X1tpXSh0LG4pO3ZhciBvPXQuY29kZWMuZW5jb2RlO2UuZm9yRWFjaChmdW5jdGlvbihlKXtvKHQsZSksbyh0LHJbZV0pfSl9ZnVuY3Rpb24gUih0LHIpe2lmKCEociBpbnN0YW5jZW9mIE1hcCkpcmV0dXJuIFAodCxyKTt2YXIgZT1yLnNpemUsbj1lPDE2PzEyOCtlOmU8PTY1NTM1PzIyMjoyMjM7X1tuXSh0LGUpO3ZhciBpPXQuY29kZWMuZW5jb2RlO3IuZm9yRWFjaChmdW5jdGlvbihyLGUsbil7aSh0LGUpLGkodCxyKX0pfWZ1bmN0aW9uIGsodCxyKXt2YXIgZT1yLmxlbmd0aCxuPWU8MzI/MTYwK2U6ZTw9NjU1MzU/MjE4OjIxOTtfW25dKHQsZSksdC5zZW5kKHIpfXZhciBfPWMuZ2V0V3JpdGVUb2tlbih0KSxUPXQmJnQudXNlcmF3LFM9cCYmdCYmdC5iaW5hcnJheWJ1ZmZlcixJPVM/YS5pc0FycmF5QnVmZmVyOmEuaXNCdWZmZXIsWT1TP0I6eCxDPWQmJnQmJnQudXNlbWFwLEQ9Qz9SOlAsTz17Ym9vbGVhbjpyLGZ1bmN0aW9uOkEsbnVtYmVyOmUsb2JqZWN0OlQ/RTp3LHN0cmluZzpiKFQ/Zzp2KSxzeW1ib2w6QSx1bmRlZmluZWQ6QX07cmV0dXJuIE99dmFyIGk9dChcImlzYXJyYXlcIiksbz10KFwiaW50NjQtYnVmZmVyXCIpLGY9by5VaW50NjRCRSx1PW8uSW50NjRCRSxhPXQoXCIuL2J1ZmZlcmlzaFwiKSxzPXQoXCIuL2J1ZmZlcmlzaC1wcm90b1wiKSxjPXQoXCIuL3dyaXRlLXRva2VuXCIpLGg9dChcIi4vd3JpdGUtdWludDhcIikudWludDgsbD10KFwiLi9leHQtYnVmZmVyXCIpLkV4dEJ1ZmZlcixwPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5LGQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIE1hcCx5PVtdO3lbMV09MjEyLHlbMl09MjEzLHlbNF09MjE0LHlbOF09MjE1LHlbMTZdPTIxNixlLmdldFdyaXRlVHlwZT1ufSx7XCIuL2J1ZmZlcmlzaFwiOjgsXCIuL2J1ZmZlcmlzaC1wcm90b1wiOjYsXCIuL2V4dC1idWZmZXJcIjoxNyxcIi4vd3JpdGUtdG9rZW5cIjoyNixcIi4vd3JpdGUtdWludDhcIjoyOCxcImludDY0LWJ1ZmZlclwiOjMzLGlzYXJyYXk6MzR9XSwyODpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4odCl7cmV0dXJuIGZ1bmN0aW9uKHIpe3ZhciBlPXIucmVzZXJ2ZSgxKTtyLmJ1ZmZlcltlXT10fX1mb3IodmFyIGk9ZS51aW50OD1uZXcgQXJyYXkoMjU2KSxvPTA7bzw9MjU1O28rKylpW29dPW4obyl9LHt9XSwyOTpbZnVuY3Rpb24odCxyLGUpeyhmdW5jdGlvbihyKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKCl7dHJ5e3ZhciB0PW5ldyBVaW50OEFycmF5KDEpO3JldHVybiB0Ll9fcHJvdG9fXz17X19wcm90b19fOlVpbnQ4QXJyYXkucHJvdG90eXBlLGZvbzpmdW5jdGlvbigpe3JldHVybiA0Mn19LDQyPT09dC5mb28oKSYmXCJmdW5jdGlvblwiPT10eXBlb2YgdC5zdWJhcnJheSYmMD09PXQuc3ViYXJyYXkoMSwxKS5ieXRlTGVuZ3RofWNhdGNoKHQpe3JldHVybiExfX1mdW5jdGlvbiBpKCl7cmV0dXJuIEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUPzIxNDc0ODM2NDc6MTA3Mzc0MTgyM31mdW5jdGlvbiBvKHQscil7aWYoaSgpPHIpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIHR5cGVkIGFycmF5IGxlbmd0aFwiKTtyZXR1cm4gQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQ/KHQ9bmV3IFVpbnQ4QXJyYXkociksdC5fX3Byb3RvX189QnVmZmVyLnByb3RvdHlwZSk6KG51bGw9PT10JiYodD1uZXcgQnVmZmVyKHIpKSx0Lmxlbmd0aD1yKSx0fWZ1bmN0aW9uIEJ1ZmZlcih0LHIsZSl7aWYoIShCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVHx8dGhpcyBpbnN0YW5jZW9mIEJ1ZmZlcikpcmV0dXJuIG5ldyBCdWZmZXIodCxyLGUpO2lmKFwibnVtYmVyXCI9PXR5cGVvZiB0KXtpZihcInN0cmluZ1wiPT10eXBlb2Ygcil0aHJvdyBuZXcgRXJyb3IoXCJJZiBlbmNvZGluZyBpcyBzcGVjaWZpZWQgdGhlbiB0aGUgZmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZ1wiKTtyZXR1cm4gcyh0aGlzLHQpfXJldHVybiBmKHRoaXMsdCxyLGUpfWZ1bmN0aW9uIGYodCxyLGUsbil7aWYoXCJudW1iZXJcIj09dHlwZW9mIHIpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJ2YWx1ZVwiIGFyZ3VtZW50IG11c3Qgbm90IGJlIGEgbnVtYmVyJyk7cmV0dXJuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZyIGluc3RhbmNlb2YgQXJyYXlCdWZmZXI/bCh0LHIsZSxuKTpcInN0cmluZ1wiPT10eXBlb2Ygcj9jKHQscixlKTpwKHQscil9ZnVuY3Rpb24gdSh0KXtpZihcIm51bWJlclwiIT10eXBlb2YgdCl0aHJvdyBuZXcgVHlwZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IGJlIGEgbnVtYmVyJyk7aWYodDwwKXRocm93IG5ldyBSYW5nZUVycm9yKCdcInNpemVcIiBhcmd1bWVudCBtdXN0IG5vdCBiZSBuZWdhdGl2ZScpfWZ1bmN0aW9uIGEodCxyLGUsbil7cmV0dXJuIHUocikscjw9MD9vKHQscik6dm9pZCAwIT09ZT9cInN0cmluZ1wiPT10eXBlb2Ygbj9vKHQscikuZmlsbChlLG4pOm8odCxyKS5maWxsKGUpOm8odCxyKX1mdW5jdGlvbiBzKHQscil7aWYodShyKSx0PW8odCxyPDA/MDowfGQocikpLCFCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVClmb3IodmFyIGU9MDtlPHI7KytlKXRbZV09MDtyZXR1cm4gdH1mdW5jdGlvbiBjKHQscixlKXtpZihcInN0cmluZ1wiPT10eXBlb2YgZSYmXCJcIiE9PWV8fChlPVwidXRmOFwiKSwhQnVmZmVyLmlzRW5jb2RpbmcoZSkpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJlbmNvZGluZ1wiIG11c3QgYmUgYSB2YWxpZCBzdHJpbmcgZW5jb2RpbmcnKTt2YXIgbj0wfHYocixlKTt0PW8odCxuKTt2YXIgaT10LndyaXRlKHIsZSk7cmV0dXJuIGkhPT1uJiYodD10LnNsaWNlKDAsaSkpLHR9ZnVuY3Rpb24gaCh0LHIpe3ZhciBlPXIubGVuZ3RoPDA/MDowfGQoci5sZW5ndGgpO3Q9byh0LGUpO2Zvcih2YXIgbj0wO248ZTtuKz0xKXRbbl09MjU1JnJbbl07cmV0dXJuIHR9ZnVuY3Rpb24gbCh0LHIsZSxuKXtpZihyLmJ5dGVMZW5ndGgsZTwwfHxyLmJ5dGVMZW5ndGg8ZSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIidvZmZzZXQnIGlzIG91dCBvZiBib3VuZHNcIik7aWYoci5ieXRlTGVuZ3RoPGUrKG58fDApKXRocm93IG5ldyBSYW5nZUVycm9yKFwiJ2xlbmd0aCcgaXMgb3V0IG9mIGJvdW5kc1wiKTtyZXR1cm4gcj12b2lkIDA9PT1lJiZ2b2lkIDA9PT1uP25ldyBVaW50OEFycmF5KHIpOnZvaWQgMD09PW4/bmV3IFVpbnQ4QXJyYXkocixlKTpuZXcgVWludDhBcnJheShyLGUsbiksQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQ/KHQ9cix0Ll9fcHJvdG9fXz1CdWZmZXIucHJvdG90eXBlKTp0PWgodCxyKSx0fWZ1bmN0aW9uIHAodCxyKXtpZihCdWZmZXIuaXNCdWZmZXIocikpe3ZhciBlPTB8ZChyLmxlbmd0aCk7cmV0dXJuIHQ9byh0LGUpLDA9PT10Lmxlbmd0aD90OihyLmNvcHkodCwwLDAsZSksdCl9aWYocil7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIEFycmF5QnVmZmVyJiZyLmJ1ZmZlciBpbnN0YW5jZW9mIEFycmF5QnVmZmVyfHxcImxlbmd0aFwiaW4gcilyZXR1cm5cIm51bWJlclwiIT10eXBlb2Ygci5sZW5ndGh8fEgoci5sZW5ndGgpP28odCwwKTpoKHQscik7aWYoXCJCdWZmZXJcIj09PXIudHlwZSYmUShyLmRhdGEpKXJldHVybiBoKHQsci5kYXRhKX10aHJvdyBuZXcgVHlwZUVycm9yKFwiRmlyc3QgYXJndW1lbnQgbXVzdCBiZSBhIHN0cmluZywgQnVmZmVyLCBBcnJheUJ1ZmZlciwgQXJyYXksIG9yIGFycmF5LWxpa2Ugb2JqZWN0LlwiKX1mdW5jdGlvbiBkKHQpe2lmKHQ+PWkoKSl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkF0dGVtcHQgdG8gYWxsb2NhdGUgQnVmZmVyIGxhcmdlciB0aGFuIG1heGltdW0gc2l6ZTogMHhcIitpKCkudG9TdHJpbmcoMTYpK1wiIGJ5dGVzXCIpO3JldHVybiAwfHR9ZnVuY3Rpb24geSh0KXtyZXR1cm4rdCE9dCYmKHQ9MCksQnVmZmVyLmFsbG9jKCt0KX1mdW5jdGlvbiB2KHQscil7aWYoQnVmZmVyLmlzQnVmZmVyKHQpKXJldHVybiB0Lmxlbmd0aDtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgQXJyYXlCdWZmZXImJlwiZnVuY3Rpb25cIj09dHlwZW9mIEFycmF5QnVmZmVyLmlzVmlldyYmKEFycmF5QnVmZmVyLmlzVmlldyh0KXx8dCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyKSlyZXR1cm4gdC5ieXRlTGVuZ3RoO1wic3RyaW5nXCIhPXR5cGVvZiB0JiYodD1cIlwiK3QpO3ZhciBlPXQubGVuZ3RoO2lmKDA9PT1lKXJldHVybiAwO2Zvcih2YXIgbj0hMTs7KXN3aXRjaChyKXtjYXNlXCJhc2NpaVwiOmNhc2VcImxhdGluMVwiOmNhc2VcImJpbmFyeVwiOnJldHVybiBlO2Nhc2VcInV0ZjhcIjpjYXNlXCJ1dGYtOFwiOmNhc2Ugdm9pZCAwOnJldHVybiBxKHQpLmxlbmd0aDtjYXNlXCJ1Y3MyXCI6Y2FzZVwidWNzLTJcIjpjYXNlXCJ1dGYxNmxlXCI6Y2FzZVwidXRmLTE2bGVcIjpyZXR1cm4gMiplO2Nhc2VcImhleFwiOnJldHVybiBlPj4+MTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gWCh0KS5sZW5ndGg7ZGVmYXVsdDppZihuKXJldHVybiBxKHQpLmxlbmd0aDtyPShcIlwiK3IpLnRvTG93ZXJDYXNlKCksbj0hMH19ZnVuY3Rpb24gZyh0LHIsZSl7dmFyIG49ITE7aWYoKHZvaWQgMD09PXJ8fHI8MCkmJihyPTApLHI+dGhpcy5sZW5ndGgpcmV0dXJuXCJcIjtpZigodm9pZCAwPT09ZXx8ZT50aGlzLmxlbmd0aCkmJihlPXRoaXMubGVuZ3RoKSxlPD0wKXJldHVyblwiXCI7aWYoZT4+Pj0wLHI+Pj49MCxlPD1yKXJldHVyblwiXCI7Zm9yKHR8fCh0PVwidXRmOFwiKTs7KXN3aXRjaCh0KXtjYXNlXCJoZXhcIjpyZXR1cm4gSSh0aGlzLHIsZSk7Y2FzZVwidXRmOFwiOmNhc2VcInV0Zi04XCI6cmV0dXJuIGsodGhpcyxyLGUpO2Nhc2VcImFzY2lpXCI6cmV0dXJuIFQodGhpcyxyLGUpO2Nhc2VcImxhdGluMVwiOmNhc2VcImJpbmFyeVwiOnJldHVybiBTKHRoaXMscixlKTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gUih0aGlzLHIsZSk7Y2FzZVwidWNzMlwiOmNhc2VcInVjcy0yXCI6Y2FzZVwidXRmMTZsZVwiOmNhc2VcInV0Zi0xNmxlXCI6cmV0dXJuIFkodGhpcyxyLGUpO2RlZmF1bHQ6aWYobil0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biBlbmNvZGluZzogXCIrdCk7dD0odCtcIlwiKS50b0xvd2VyQ2FzZSgpLG49ITB9fWZ1bmN0aW9uIGIodCxyLGUpe3ZhciBuPXRbcl07dFtyXT10W2VdLHRbZV09bn1mdW5jdGlvbiB3KHQscixlLG4saSl7aWYoMD09PXQubGVuZ3RoKXJldHVybi0xO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlPyhuPWUsZT0wKTplPjIxNDc0ODM2NDc/ZT0yMTQ3NDgzNjQ3OmU8LTIxNDc0ODM2NDgmJihlPS0yMTQ3NDgzNjQ4KSxlPStlLGlzTmFOKGUpJiYoZT1pPzA6dC5sZW5ndGgtMSksZTwwJiYoZT10Lmxlbmd0aCtlKSxlPj10Lmxlbmd0aCl7aWYoaSlyZXR1cm4tMTtlPXQubGVuZ3RoLTF9ZWxzZSBpZihlPDApe2lmKCFpKXJldHVybi0xO2U9MH1pZihcInN0cmluZ1wiPT10eXBlb2YgciYmKHI9QnVmZmVyLmZyb20ocixuKSksQnVmZmVyLmlzQnVmZmVyKHIpKXJldHVybiAwPT09ci5sZW5ndGg/LTE6RSh0LHIsZSxuLGkpO2lmKFwibnVtYmVyXCI9PXR5cGVvZiByKXJldHVybiByPTI1NSZyLEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBVaW50OEFycmF5LnByb3RvdHlwZS5pbmRleE9mP2k/VWludDhBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKHQscixlKTpVaW50OEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZi5jYWxsKHQscixlKTpFKHQsW3JdLGUsbixpKTt0aHJvdyBuZXcgVHlwZUVycm9yKFwidmFsIG11c3QgYmUgc3RyaW5nLCBudW1iZXIgb3IgQnVmZmVyXCIpfWZ1bmN0aW9uIEUodCxyLGUsbixpKXtmdW5jdGlvbiBvKHQscil7cmV0dXJuIDE9PT1mP3Rbcl06dC5yZWFkVUludDE2QkUocipmKX12YXIgZj0xLHU9dC5sZW5ndGgsYT1yLmxlbmd0aDtpZih2b2lkIDAhPT1uJiYobj1TdHJpbmcobikudG9Mb3dlckNhc2UoKSxcInVjczJcIj09PW58fFwidWNzLTJcIj09PW58fFwidXRmMTZsZVwiPT09bnx8XCJ1dGYtMTZsZVwiPT09bikpe2lmKHQubGVuZ3RoPDJ8fHIubGVuZ3RoPDIpcmV0dXJuLTE7Zj0yLHUvPTIsYS89MixlLz0yfXZhciBzO2lmKGkpe3ZhciBjPS0xO2ZvcihzPWU7czx1O3MrKylpZihvKHQscyk9PT1vKHIsYz09PS0xPzA6cy1jKSl7aWYoYz09PS0xJiYoYz1zKSxzLWMrMT09PWEpcmV0dXJuIGMqZn1lbHNlIGMhPT0tMSYmKHMtPXMtYyksYz0tMX1lbHNlIGZvcihlK2E+dSYmKGU9dS1hKSxzPWU7cz49MDtzLS0pe2Zvcih2YXIgaD0hMCxsPTA7bDxhO2wrKylpZihvKHQscytsKSE9PW8ocixsKSl7aD0hMTticmVha31pZihoKXJldHVybiBzfXJldHVybi0xfWZ1bmN0aW9uIEEodCxyLGUsbil7ZT1OdW1iZXIoZSl8fDA7dmFyIGk9dC5sZW5ndGgtZTtuPyhuPU51bWJlcihuKSxuPmkmJihuPWkpKTpuPWk7dmFyIG89ci5sZW5ndGg7aWYobyUyIT09MCl0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBoZXggc3RyaW5nXCIpO24+by8yJiYobj1vLzIpO2Zvcih2YXIgZj0wO2Y8bjsrK2Ype3ZhciB1PXBhcnNlSW50KHIuc3Vic3RyKDIqZiwyKSwxNik7aWYoaXNOYU4odSkpcmV0dXJuIGY7dFtlK2ZdPXV9cmV0dXJuIGZ9ZnVuY3Rpb24gbSh0LHIsZSxuKXtyZXR1cm4gRyhxKHIsdC5sZW5ndGgtZSksdCxlLG4pfWZ1bmN0aW9uIHgodCxyLGUsbil7cmV0dXJuIEcoVyhyKSx0LGUsbil9ZnVuY3Rpb24gQih0LHIsZSxuKXtyZXR1cm4geCh0LHIsZSxuKX1mdW5jdGlvbiBVKHQscixlLG4pe3JldHVybiBHKFgociksdCxlLG4pfWZ1bmN0aW9uIFAodCxyLGUsbil7cmV0dXJuIEcoSihyLHQubGVuZ3RoLWUpLHQsZSxuKX1mdW5jdGlvbiBSKHQscixlKXtyZXR1cm4gMD09PXImJmU9PT10Lmxlbmd0aD9aLmZyb21CeXRlQXJyYXkodCk6Wi5mcm9tQnl0ZUFycmF5KHQuc2xpY2UocixlKSl9ZnVuY3Rpb24gayh0LHIsZSl7ZT1NYXRoLm1pbih0Lmxlbmd0aCxlKTtmb3IodmFyIG49W10saT1yO2k8ZTspe3ZhciBvPXRbaV0sZj1udWxsLHU9bz4yMzk/NDpvPjIyMz8zOm8+MTkxPzI6MTtpZihpK3U8PWUpe3ZhciBhLHMsYyxoO3N3aXRjaCh1KXtjYXNlIDE6bzwxMjgmJihmPW8pO2JyZWFrO2Nhc2UgMjphPXRbaSsxXSwxMjg9PT0oMTkyJmEpJiYoaD0oMzEmbyk8PDZ8NjMmYSxoPjEyNyYmKGY9aCkpO2JyZWFrO2Nhc2UgMzphPXRbaSsxXSxzPXRbaSsyXSwxMjg9PT0oMTkyJmEpJiYxMjg9PT0oMTkyJnMpJiYoaD0oMTUmbyk8PDEyfCg2MyZhKTw8Nnw2MyZzLGg+MjA0NyYmKGg8NTUyOTZ8fGg+NTczNDMpJiYoZj1oKSk7YnJlYWs7Y2FzZSA0OmE9dFtpKzFdLHM9dFtpKzJdLGM9dFtpKzNdLDEyOD09PSgxOTImYSkmJjEyOD09PSgxOTImcykmJjEyOD09PSgxOTImYykmJihoPSgxNSZvKTw8MTh8KDYzJmEpPDwxMnwoNjMmcyk8PDZ8NjMmYyxoPjY1NTM1JiZoPDExMTQxMTImJihmPWgpKX19bnVsbD09PWY/KGY9NjU1MzMsdT0xKTpmPjY1NTM1JiYoZi09NjU1MzYsbi5wdXNoKGY+Pj4xMCYxMDIzfDU1Mjk2KSxmPTU2MzIwfDEwMjMmZiksbi5wdXNoKGYpLGkrPXV9cmV0dXJuIF8obil9ZnVuY3Rpb24gXyh0KXt2YXIgcj10Lmxlbmd0aDtpZihyPD0kKXJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZyx0KTtmb3IodmFyIGU9XCJcIixuPTA7bjxyOyllKz1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KFN0cmluZyx0LnNsaWNlKG4sbis9JCkpO3JldHVybiBlfWZ1bmN0aW9uIFQodCxyLGUpe3ZhciBuPVwiXCI7ZT1NYXRoLm1pbih0Lmxlbmd0aCxlKTtmb3IodmFyIGk9cjtpPGU7KytpKW4rPVN0cmluZy5mcm9tQ2hhckNvZGUoMTI3JnRbaV0pO3JldHVybiBufWZ1bmN0aW9uIFModCxyLGUpe3ZhciBuPVwiXCI7ZT1NYXRoLm1pbih0Lmxlbmd0aCxlKTtmb3IodmFyIGk9cjtpPGU7KytpKW4rPVN0cmluZy5mcm9tQ2hhckNvZGUodFtpXSk7cmV0dXJuIG59ZnVuY3Rpb24gSSh0LHIsZSl7dmFyIG49dC5sZW5ndGg7KCFyfHxyPDApJiYocj0wKSwoIWV8fGU8MHx8ZT5uKSYmKGU9bik7Zm9yKHZhciBpPVwiXCIsbz1yO288ZTsrK28paSs9Vih0W29dKTtyZXR1cm4gaX1mdW5jdGlvbiBZKHQscixlKXtmb3IodmFyIG49dC5zbGljZShyLGUpLGk9XCJcIixvPTA7bzxuLmxlbmd0aDtvKz0yKWkrPVN0cmluZy5mcm9tQ2hhckNvZGUobltvXSsyNTYqbltvKzFdKTtyZXR1cm4gaX1mdW5jdGlvbiBDKHQscixlKXtpZih0JTEhPT0wfHx0PDApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJvZmZzZXQgaXMgbm90IHVpbnRcIik7aWYodCtyPmUpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJUcnlpbmcgdG8gYWNjZXNzIGJleW9uZCBidWZmZXIgbGVuZ3RoXCIpfWZ1bmN0aW9uIEQodCxyLGUsbixpLG8pe2lmKCFCdWZmZXIuaXNCdWZmZXIodCkpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJidWZmZXJcIiBhcmd1bWVudCBtdXN0IGJlIGEgQnVmZmVyIGluc3RhbmNlJyk7aWYocj5pfHxyPG8pdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1widmFsdWVcIiBhcmd1bWVudCBpcyBvdXQgb2YgYm91bmRzJyk7aWYoZStuPnQubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpfWZ1bmN0aW9uIE8odCxyLGUsbil7cjwwJiYocj02NTUzNStyKzEpO2Zvcih2YXIgaT0wLG89TWF0aC5taW4odC5sZW5ndGgtZSwyKTtpPG87KytpKXRbZStpXT0ociYyNTU8PDgqKG4/aToxLWkpKT4+PjgqKG4/aToxLWkpfWZ1bmN0aW9uIEwodCxyLGUsbil7cjwwJiYocj00Mjk0OTY3Mjk1K3IrMSk7Zm9yKHZhciBpPTAsbz1NYXRoLm1pbih0Lmxlbmd0aC1lLDQpO2k8bzsrK2kpdFtlK2ldPXI+Pj44KihuP2k6My1pKSYyNTV9ZnVuY3Rpb24gTSh0LHIsZSxuLGksbyl7aWYoZStuPnQubGVuZ3RoKXRocm93IG5ldyBSYW5nZUVycm9yKFwiSW5kZXggb3V0IG9mIHJhbmdlXCIpO2lmKGU8MCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkluZGV4IG91dCBvZiByYW5nZVwiKX1mdW5jdGlvbiBOKHQscixlLG4saSl7cmV0dXJuIGl8fE0odCxyLGUsNCwzLjQwMjgyMzQ2NjM4NTI4ODZlMzgsLTMuNDAyODIzNDY2Mzg1Mjg4NmUzOCksSy53cml0ZSh0LHIsZSxuLDIzLDQpLGUrNH1mdW5jdGlvbiBGKHQscixlLG4saSl7cmV0dXJuIGl8fE0odCxyLGUsOCwxLjc5NzY5MzEzNDg2MjMxNTdlMzA4LC0xLjc5NzY5MzEzNDg2MjMxNTdlMzA4KSxLLndyaXRlKHQscixlLG4sNTIsOCksZSs4fWZ1bmN0aW9uIGoodCl7XG5pZih0PXoodCkucmVwbGFjZSh0dCxcIlwiKSx0Lmxlbmd0aDwyKXJldHVyblwiXCI7Zm9yKDt0Lmxlbmd0aCU0IT09MDspdCs9XCI9XCI7cmV0dXJuIHR9ZnVuY3Rpb24geih0KXtyZXR1cm4gdC50cmltP3QudHJpbSgpOnQucmVwbGFjZSgvXlxccyt8XFxzKyQvZyxcIlwiKX1mdW5jdGlvbiBWKHQpe3JldHVybiB0PDE2P1wiMFwiK3QudG9TdHJpbmcoMTYpOnQudG9TdHJpbmcoMTYpfWZ1bmN0aW9uIHEodCxyKXtyPXJ8fDEvMDtmb3IodmFyIGUsbj10Lmxlbmd0aCxpPW51bGwsbz1bXSxmPTA7ZjxuOysrZil7aWYoZT10LmNoYXJDb2RlQXQoZiksZT41NTI5NSYmZTw1NzM0NCl7aWYoIWkpe2lmKGU+NTYzMTkpeyhyLT0zKT4tMSYmby5wdXNoKDIzOSwxOTEsMTg5KTtjb250aW51ZX1pZihmKzE9PT1uKXsoci09Myk+LTEmJm8ucHVzaCgyMzksMTkxLDE4OSk7Y29udGludWV9aT1lO2NvbnRpbnVlfWlmKGU8NTYzMjApeyhyLT0zKT4tMSYmby5wdXNoKDIzOSwxOTEsMTg5KSxpPWU7Y29udGludWV9ZT0oaS01NTI5Njw8MTB8ZS01NjMyMCkrNjU1MzZ9ZWxzZSBpJiYoci09Myk+LTEmJm8ucHVzaCgyMzksMTkxLDE4OSk7aWYoaT1udWxsLGU8MTI4KXtpZigoci09MSk8MClicmVhaztvLnB1c2goZSl9ZWxzZSBpZihlPDIwNDgpe2lmKChyLT0yKTwwKWJyZWFrO28ucHVzaChlPj42fDE5Miw2MyZlfDEyOCl9ZWxzZSBpZihlPDY1NTM2KXtpZigoci09Myk8MClicmVhaztvLnB1c2goZT4+MTJ8MjI0LGU+PjYmNjN8MTI4LDYzJmV8MTI4KX1lbHNle2lmKCEoZTwxMTE0MTEyKSl0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGNvZGUgcG9pbnRcIik7aWYoKHItPTQpPDApYnJlYWs7by5wdXNoKGU+PjE4fDI0MCxlPj4xMiY2M3wxMjgsZT4+NiY2M3wxMjgsNjMmZXwxMjgpfX1yZXR1cm4gb31mdW5jdGlvbiBXKHQpe2Zvcih2YXIgcj1bXSxlPTA7ZTx0Lmxlbmd0aDsrK2Upci5wdXNoKDI1NSZ0LmNoYXJDb2RlQXQoZSkpO3JldHVybiByfWZ1bmN0aW9uIEoodCxyKXtmb3IodmFyIGUsbixpLG89W10sZj0wO2Y8dC5sZW5ndGgmJiEoKHItPTIpPDApOysrZillPXQuY2hhckNvZGVBdChmKSxuPWU+PjgsaT1lJTI1NixvLnB1c2goaSksby5wdXNoKG4pO3JldHVybiBvfWZ1bmN0aW9uIFgodCl7cmV0dXJuIFoudG9CeXRlQXJyYXkoaih0KSl9ZnVuY3Rpb24gRyh0LHIsZSxuKXtmb3IodmFyIGk9MDtpPG4mJiEoaStlPj1yLmxlbmd0aHx8aT49dC5sZW5ndGgpOysraSlyW2krZV09dFtpXTtyZXR1cm4gaX1mdW5jdGlvbiBIKHQpe3JldHVybiB0IT09dH12YXIgWj10KFwiYmFzZTY0LWpzXCIpLEs9dChcImllZWU3NTRcIiksUT10KFwiaXNhcnJheVwiKTtlLkJ1ZmZlcj1CdWZmZXIsZS5TbG93QnVmZmVyPXksZS5JTlNQRUNUX01BWF9CWVRFUz01MCxCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVD12b2lkIDAhPT1yLlRZUEVEX0FSUkFZX1NVUFBPUlQ/ci5UWVBFRF9BUlJBWV9TVVBQT1JUOm4oKSxlLmtNYXhMZW5ndGg9aSgpLEJ1ZmZlci5wb29sU2l6ZT04MTkyLEJ1ZmZlci5fYXVnbWVudD1mdW5jdGlvbih0KXtyZXR1cm4gdC5fX3Byb3RvX189QnVmZmVyLnByb3RvdHlwZSx0fSxCdWZmZXIuZnJvbT1mdW5jdGlvbih0LHIsZSl7cmV0dXJuIGYobnVsbCx0LHIsZSl9LEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUJiYoQnVmZmVyLnByb3RvdHlwZS5fX3Byb3RvX189VWludDhBcnJheS5wcm90b3R5cGUsQnVmZmVyLl9fcHJvdG9fXz1VaW50OEFycmF5LFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5zcGVjaWVzJiZCdWZmZXJbU3ltYm9sLnNwZWNpZXNdPT09QnVmZmVyJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoQnVmZmVyLFN5bWJvbC5zcGVjaWVzLHt2YWx1ZTpudWxsLGNvbmZpZ3VyYWJsZTohMH0pKSxCdWZmZXIuYWxsb2M9ZnVuY3Rpb24odCxyLGUpe3JldHVybiBhKG51bGwsdCxyLGUpfSxCdWZmZXIuYWxsb2NVbnNhZmU9ZnVuY3Rpb24odCl7cmV0dXJuIHMobnVsbCx0KX0sQnVmZmVyLmFsbG9jVW5zYWZlU2xvdz1mdW5jdGlvbih0KXtyZXR1cm4gcyhudWxsLHQpfSxCdWZmZXIuaXNCdWZmZXI9ZnVuY3Rpb24odCl7cmV0dXJuIShudWxsPT10fHwhdC5faXNCdWZmZXIpfSxCdWZmZXIuY29tcGFyZT1mdW5jdGlvbih0LHIpe2lmKCFCdWZmZXIuaXNCdWZmZXIodCl8fCFCdWZmZXIuaXNCdWZmZXIocikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50cyBtdXN0IGJlIEJ1ZmZlcnNcIik7aWYodD09PXIpcmV0dXJuIDA7Zm9yKHZhciBlPXQubGVuZ3RoLG49ci5sZW5ndGgsaT0wLG89TWF0aC5taW4oZSxuKTtpPG87KytpKWlmKHRbaV0hPT1yW2ldKXtlPXRbaV0sbj1yW2ldO2JyZWFrfXJldHVybiBlPG4/LTE6bjxlPzE6MH0sQnVmZmVyLmlzRW5jb2Rpbmc9ZnVuY3Rpb24odCl7c3dpdGNoKFN0cmluZyh0KS50b0xvd2VyQ2FzZSgpKXtjYXNlXCJoZXhcIjpjYXNlXCJ1dGY4XCI6Y2FzZVwidXRmLThcIjpjYXNlXCJhc2NpaVwiOmNhc2VcImxhdGluMVwiOmNhc2VcImJpbmFyeVwiOmNhc2VcImJhc2U2NFwiOmNhc2VcInVjczJcIjpjYXNlXCJ1Y3MtMlwiOmNhc2VcInV0ZjE2bGVcIjpjYXNlXCJ1dGYtMTZsZVwiOnJldHVybiEwO2RlZmF1bHQ6cmV0dXJuITF9fSxCdWZmZXIuY29uY2F0PWZ1bmN0aW9uKHQscil7aWYoIVEodCkpdGhyb3cgbmV3IFR5cGVFcnJvcignXCJsaXN0XCIgYXJndW1lbnQgbXVzdCBiZSBhbiBBcnJheSBvZiBCdWZmZXJzJyk7aWYoMD09PXQubGVuZ3RoKXJldHVybiBCdWZmZXIuYWxsb2MoMCk7dmFyIGU7aWYodm9pZCAwPT09cilmb3Iocj0wLGU9MDtlPHQubGVuZ3RoOysrZSlyKz10W2VdLmxlbmd0aDt2YXIgbj1CdWZmZXIuYWxsb2NVbnNhZmUociksaT0wO2ZvcihlPTA7ZTx0Lmxlbmd0aDsrK2Upe3ZhciBvPXRbZV07aWYoIUJ1ZmZlci5pc0J1ZmZlcihvKSl0aHJvdyBuZXcgVHlwZUVycm9yKCdcImxpc3RcIiBhcmd1bWVudCBtdXN0IGJlIGFuIEFycmF5IG9mIEJ1ZmZlcnMnKTtvLmNvcHkobixpKSxpKz1vLmxlbmd0aH1yZXR1cm4gbn0sQnVmZmVyLmJ5dGVMZW5ndGg9dixCdWZmZXIucHJvdG90eXBlLl9pc0J1ZmZlcj0hMCxCdWZmZXIucHJvdG90eXBlLnN3YXAxNj1mdW5jdGlvbigpe3ZhciB0PXRoaXMubGVuZ3RoO2lmKHQlMiE9PTApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMTYtYml0c1wiKTtmb3IodmFyIHI9MDtyPHQ7cis9MiliKHRoaXMscixyKzEpO3JldHVybiB0aGlzfSxCdWZmZXIucHJvdG90eXBlLnN3YXAzMj1mdW5jdGlvbigpe3ZhciB0PXRoaXMubGVuZ3RoO2lmKHQlNCE9PTApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJCdWZmZXIgc2l6ZSBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgMzItYml0c1wiKTtmb3IodmFyIHI9MDtyPHQ7cis9NCliKHRoaXMscixyKzMpLGIodGhpcyxyKzEscisyKTtyZXR1cm4gdGhpc30sQnVmZmVyLnByb3RvdHlwZS5zd2FwNjQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLmxlbmd0aDtpZih0JTghPT0wKXRocm93IG5ldyBSYW5nZUVycm9yKFwiQnVmZmVyIHNpemUgbXVzdCBiZSBhIG11bHRpcGxlIG9mIDY0LWJpdHNcIik7Zm9yKHZhciByPTA7cjx0O3IrPTgpYih0aGlzLHIscis3KSxiKHRoaXMscisxLHIrNiksYih0aGlzLHIrMixyKzUpLGIodGhpcyxyKzMscis0KTtyZXR1cm4gdGhpc30sQnVmZmVyLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciB0PTB8dGhpcy5sZW5ndGg7cmV0dXJuIDA9PT10P1wiXCI6MD09PWFyZ3VtZW50cy5sZW5ndGg/ayh0aGlzLDAsdCk6Zy5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LEJ1ZmZlci5wcm90b3R5cGUuZXF1YWxzPWZ1bmN0aW9uKHQpe2lmKCFCdWZmZXIuaXNCdWZmZXIodCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkFyZ3VtZW50IG11c3QgYmUgYSBCdWZmZXJcIik7cmV0dXJuIHRoaXM9PT10fHwwPT09QnVmZmVyLmNvbXBhcmUodGhpcyx0KX0sQnVmZmVyLnByb3RvdHlwZS5pbnNwZWN0PWZ1bmN0aW9uKCl7dmFyIHQ9XCJcIixyPWUuSU5TUEVDVF9NQVhfQllURVM7cmV0dXJuIHRoaXMubGVuZ3RoPjAmJih0PXRoaXMudG9TdHJpbmcoXCJoZXhcIiwwLHIpLm1hdGNoKC8uezJ9L2cpLmpvaW4oXCIgXCIpLHRoaXMubGVuZ3RoPnImJih0Kz1cIiAuLi4gXCIpKSxcIjxCdWZmZXIgXCIrdCtcIj5cIn0sQnVmZmVyLnByb3RvdHlwZS5jb21wYXJlPWZ1bmN0aW9uKHQscixlLG4saSl7aWYoIUJ1ZmZlci5pc0J1ZmZlcih0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQXJndW1lbnQgbXVzdCBiZSBhIEJ1ZmZlclwiKTtpZih2b2lkIDA9PT1yJiYocj0wKSx2b2lkIDA9PT1lJiYoZT10P3QubGVuZ3RoOjApLHZvaWQgMD09PW4mJihuPTApLHZvaWQgMD09PWkmJihpPXRoaXMubGVuZ3RoKSxyPDB8fGU+dC5sZW5ndGh8fG48MHx8aT50aGlzLmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIm91dCBvZiByYW5nZSBpbmRleFwiKTtpZihuPj1pJiZyPj1lKXJldHVybiAwO2lmKG4+PWkpcmV0dXJuLTE7aWYocj49ZSlyZXR1cm4gMTtpZihyPj4+PTAsZT4+Pj0wLG4+Pj49MCxpPj4+PTAsdGhpcz09PXQpcmV0dXJuIDA7Zm9yKHZhciBvPWktbixmPWUtcix1PU1hdGgubWluKG8sZiksYT10aGlzLnNsaWNlKG4saSkscz10LnNsaWNlKHIsZSksYz0wO2M8dTsrK2MpaWYoYVtjXSE9PXNbY10pe289YVtjXSxmPXNbY107YnJlYWt9cmV0dXJuIG88Zj8tMTpmPG8/MTowfSxCdWZmZXIucHJvdG90eXBlLmluY2x1ZGVzPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdGhpcy5pbmRleE9mKHQscixlKSE9PS0xfSxCdWZmZXIucHJvdG90eXBlLmluZGV4T2Y9ZnVuY3Rpb24odCxyLGUpe3JldHVybiB3KHRoaXMsdCxyLGUsITApfSxCdWZmZXIucHJvdG90eXBlLmxhc3RJbmRleE9mPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdyh0aGlzLHQscixlLCExKX0sQnVmZmVyLnByb3RvdHlwZS53cml0ZT1mdW5jdGlvbih0LHIsZSxuKXtpZih2b2lkIDA9PT1yKW49XCJ1dGY4XCIsZT10aGlzLmxlbmd0aCxyPTA7ZWxzZSBpZih2b2lkIDA9PT1lJiZcInN0cmluZ1wiPT10eXBlb2YgciluPXIsZT10aGlzLmxlbmd0aCxyPTA7ZWxzZXtpZighaXNGaW5pdGUocikpdGhyb3cgbmV3IEVycm9yKFwiQnVmZmVyLndyaXRlKHN0cmluZywgZW5jb2RpbmcsIG9mZnNldFssIGxlbmd0aF0pIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWRcIik7cj0wfHIsaXNGaW5pdGUoZSk/KGU9MHxlLHZvaWQgMD09PW4mJihuPVwidXRmOFwiKSk6KG49ZSxlPXZvaWQgMCl9dmFyIGk9dGhpcy5sZW5ndGgtcjtpZigodm9pZCAwPT09ZXx8ZT5pKSYmKGU9aSksdC5sZW5ndGg+MCYmKGU8MHx8cjwwKXx8cj50aGlzLmxlbmd0aCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIkF0dGVtcHQgdG8gd3JpdGUgb3V0c2lkZSBidWZmZXIgYm91bmRzXCIpO258fChuPVwidXRmOFwiKTtmb3IodmFyIG89ITE7Oylzd2l0Y2gobil7Y2FzZVwiaGV4XCI6cmV0dXJuIEEodGhpcyx0LHIsZSk7Y2FzZVwidXRmOFwiOmNhc2VcInV0Zi04XCI6cmV0dXJuIG0odGhpcyx0LHIsZSk7Y2FzZVwiYXNjaWlcIjpyZXR1cm4geCh0aGlzLHQscixlKTtjYXNlXCJsYXRpbjFcIjpjYXNlXCJiaW5hcnlcIjpyZXR1cm4gQih0aGlzLHQscixlKTtjYXNlXCJiYXNlNjRcIjpyZXR1cm4gVSh0aGlzLHQscixlKTtjYXNlXCJ1Y3MyXCI6Y2FzZVwidWNzLTJcIjpjYXNlXCJ1dGYxNmxlXCI6Y2FzZVwidXRmLTE2bGVcIjpyZXR1cm4gUCh0aGlzLHQscixlKTtkZWZhdWx0OmlmKG8pdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVua25vd24gZW5jb2Rpbmc6IFwiK24pO249KFwiXCIrbikudG9Mb3dlckNhc2UoKSxvPSEwfX0sQnVmZmVyLnByb3RvdHlwZS50b0pTT049ZnVuY3Rpb24oKXtyZXR1cm57dHlwZTpcIkJ1ZmZlclwiLGRhdGE6QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fYXJyfHx0aGlzLDApfX07dmFyICQ9NDA5NjtCdWZmZXIucHJvdG90eXBlLnNsaWNlPWZ1bmN0aW9uKHQscil7dmFyIGU9dGhpcy5sZW5ndGg7dD1+fnQscj12b2lkIDA9PT1yP2U6fn5yLHQ8MD8odCs9ZSx0PDAmJih0PTApKTp0PmUmJih0PWUpLHI8MD8ocis9ZSxyPDAmJihyPTApKTpyPmUmJihyPWUpLHI8dCYmKHI9dCk7dmFyIG47aWYoQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQpbj10aGlzLnN1YmFycmF5KHQsciksbi5fX3Byb3RvX189QnVmZmVyLnByb3RvdHlwZTtlbHNle3ZhciBpPXItdDtuPW5ldyBCdWZmZXIoaSx2b2lkIDApO2Zvcih2YXIgbz0wO288aTsrK28pbltvXT10aGlzW28rdF19cmV0dXJuIG59LEJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnRMRT1mdW5jdGlvbih0LHIsZSl7dD0wfHQscj0wfHIsZXx8Qyh0LHIsdGhpcy5sZW5ndGgpO2Zvcih2YXIgbj10aGlzW3RdLGk9MSxvPTA7KytvPHImJihpKj0yNTYpOyluKz10aGlzW3Qrb10qaTtyZXR1cm4gbn0sQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludEJFPWZ1bmN0aW9uKHQscixlKXt0PTB8dCxyPTB8cixlfHxDKHQscix0aGlzLmxlbmd0aCk7Zm9yKHZhciBuPXRoaXNbdCstLXJdLGk9MTtyPjAmJihpKj0yNTYpOyluKz10aGlzW3QrLS1yXSppO3JldHVybiBufSxCdWZmZXIucHJvdG90eXBlLnJlYWRVSW50OD1mdW5jdGlvbih0LHIpe3JldHVybiByfHxDKHQsMSx0aGlzLmxlbmd0aCksdGhpc1t0XX0sQnVmZmVyLnByb3RvdHlwZS5yZWFkVUludDE2TEU9ZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8Qyh0LDIsdGhpcy5sZW5ndGgpLHRoaXNbdF18dGhpc1t0KzFdPDw4fSxCdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MTZCRT1mdW5jdGlvbih0LHIpe3JldHVybiByfHxDKHQsMix0aGlzLmxlbmd0aCksdGhpc1t0XTw8OHx0aGlzW3QrMV19LEJ1ZmZlci5wcm90b3R5cGUucmVhZFVJbnQzMkxFPWZ1bmN0aW9uKHQscil7cmV0dXJuIHJ8fEModCw0LHRoaXMubGVuZ3RoKSwodGhpc1t0XXx0aGlzW3QrMV08PDh8dGhpc1t0KzJdPDwxNikrMTY3NzcyMTYqdGhpc1t0KzNdfSxCdWZmZXIucHJvdG90eXBlLnJlYWRVSW50MzJCRT1mdW5jdGlvbih0LHIpe3JldHVybiByfHxDKHQsNCx0aGlzLmxlbmd0aCksMTY3NzcyMTYqdGhpc1t0XSsodGhpc1t0KzFdPDwxNnx0aGlzW3QrMl08PDh8dGhpc1t0KzNdKX0sQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50TEU9ZnVuY3Rpb24odCxyLGUpe3Q9MHx0LHI9MHxyLGV8fEModCxyLHRoaXMubGVuZ3RoKTtmb3IodmFyIG49dGhpc1t0XSxpPTEsbz0wOysrbzxyJiYoaSo9MjU2KTspbis9dGhpc1t0K29dKmk7cmV0dXJuIGkqPTEyOCxuPj1pJiYobi09TWF0aC5wb3coMiw4KnIpKSxufSxCdWZmZXIucHJvdG90eXBlLnJlYWRJbnRCRT1mdW5jdGlvbih0LHIsZSl7dD0wfHQscj0wfHIsZXx8Qyh0LHIsdGhpcy5sZW5ndGgpO2Zvcih2YXIgbj1yLGk9MSxvPXRoaXNbdCstLW5dO24+MCYmKGkqPTI1Nik7KW8rPXRoaXNbdCstLW5dKmk7cmV0dXJuIGkqPTEyOCxvPj1pJiYoby09TWF0aC5wb3coMiw4KnIpKSxvfSxCdWZmZXIucHJvdG90eXBlLnJlYWRJbnQ4PWZ1bmN0aW9uKHQscil7cmV0dXJuIHJ8fEModCwxLHRoaXMubGVuZ3RoKSwxMjgmdGhpc1t0XT8oMjU1LXRoaXNbdF0rMSkqLTE6dGhpc1t0XX0sQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZMRT1mdW5jdGlvbih0LHIpe3J8fEModCwyLHRoaXMubGVuZ3RoKTt2YXIgZT10aGlzW3RdfHRoaXNbdCsxXTw8ODtyZXR1cm4gMzI3NjgmZT80Mjk0OTAxNzYwfGU6ZX0sQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MTZCRT1mdW5jdGlvbih0LHIpe3J8fEModCwyLHRoaXMubGVuZ3RoKTt2YXIgZT10aGlzW3QrMV18dGhpc1t0XTw8ODtyZXR1cm4gMzI3NjgmZT80Mjk0OTAxNzYwfGU6ZX0sQnVmZmVyLnByb3RvdHlwZS5yZWFkSW50MzJMRT1mdW5jdGlvbih0LHIpe3JldHVybiByfHxDKHQsNCx0aGlzLmxlbmd0aCksdGhpc1t0XXx0aGlzW3QrMV08PDh8dGhpc1t0KzJdPDwxNnx0aGlzW3QrM108PDI0fSxCdWZmZXIucHJvdG90eXBlLnJlYWRJbnQzMkJFPWZ1bmN0aW9uKHQscil7cmV0dXJuIHJ8fEModCw0LHRoaXMubGVuZ3RoKSx0aGlzW3RdPDwyNHx0aGlzW3QrMV08PDE2fHRoaXNbdCsyXTw8OHx0aGlzW3QrM119LEJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0TEU9ZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8Qyh0LDQsdGhpcy5sZW5ndGgpLEsucmVhZCh0aGlzLHQsITAsMjMsNCl9LEJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0QkU9ZnVuY3Rpb24odCxyKXtyZXR1cm4gcnx8Qyh0LDQsdGhpcy5sZW5ndGgpLEsucmVhZCh0aGlzLHQsITEsMjMsNCl9LEJ1ZmZlci5wcm90b3R5cGUucmVhZERvdWJsZUxFPWZ1bmN0aW9uKHQscil7cmV0dXJuIHJ8fEModCw4LHRoaXMubGVuZ3RoKSxLLnJlYWQodGhpcyx0LCEwLDUyLDgpfSxCdWZmZXIucHJvdG90eXBlLnJlYWREb3VibGVCRT1mdW5jdGlvbih0LHIpe3JldHVybiByfHxDKHQsOCx0aGlzLmxlbmd0aCksSy5yZWFkKHRoaXMsdCwhMSw1Miw4KX0sQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnRMRT1mdW5jdGlvbih0LHIsZSxuKXtpZih0PSt0LHI9MHxyLGU9MHxlLCFuKXt2YXIgaT1NYXRoLnBvdygyLDgqZSktMTtEKHRoaXMsdCxyLGUsaSwwKX12YXIgbz0xLGY9MDtmb3IodGhpc1tyXT0yNTUmdDsrK2Y8ZSYmKG8qPTI1Nik7KXRoaXNbcitmXT10L28mMjU1O3JldHVybiByK2V9LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50QkU9ZnVuY3Rpb24odCxyLGUsbil7aWYodD0rdCxyPTB8cixlPTB8ZSwhbil7dmFyIGk9TWF0aC5wb3coMiw4KmUpLTE7RCh0aGlzLHQscixlLGksMCl9dmFyIG89ZS0xLGY9MTtmb3IodGhpc1tyK29dPTI1NSZ0Oy0tbz49MCYmKGYqPTI1Nik7KXRoaXNbcitvXT10L2YmMjU1O3JldHVybiByK2V9LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50OD1mdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQ9K3Qscj0wfHIsZXx8RCh0aGlzLHQsciwxLDI1NSwwKSxCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVHx8KHQ9TWF0aC5mbG9vcih0KSksdGhpc1tyXT0yNTUmdCxyKzF9LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MTZMRT1mdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQ9K3Qscj0wfHIsZXx8RCh0aGlzLHQsciwyLDY1NTM1LDApLEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUPyh0aGlzW3JdPTI1NSZ0LHRoaXNbcisxXT10Pj4+OCk6Tyh0aGlzLHQsciwhMCkscisyfSxCdWZmZXIucHJvdG90eXBlLndyaXRlVUludDE2QkU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiB0PSt0LHI9MHxyLGV8fEQodGhpcyx0LHIsMiw2NTUzNSwwKSxCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVD8odGhpc1tyXT10Pj4+OCx0aGlzW3IrMV09MjU1JnQpOk8odGhpcyx0LHIsITEpLHIrMn0sQnVmZmVyLnByb3RvdHlwZS53cml0ZVVJbnQzMkxFPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdD0rdCxyPTB8cixlfHxEKHRoaXMsdCxyLDQsNDI5NDk2NzI5NSwwKSxCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVD8odGhpc1tyKzNdPXQ+Pj4yNCx0aGlzW3IrMl09dD4+PjE2LHRoaXNbcisxXT10Pj4+OCx0aGlzW3JdPTI1NSZ0KTpMKHRoaXMsdCxyLCEwKSxyKzR9LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVVSW50MzJCRT1mdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQ9K3Qscj0wfHIsZXx8RCh0aGlzLHQsciw0LDQyOTQ5NjcyOTUsMCksQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlQ/KHRoaXNbcl09dD4+PjI0LHRoaXNbcisxXT10Pj4+MTYsdGhpc1tyKzJdPXQ+Pj44LHRoaXNbciszXT0yNTUmdCk6TCh0aGlzLHQsciwhMSkscis0fSxCdWZmZXIucHJvdG90eXBlLndyaXRlSW50TEU9ZnVuY3Rpb24odCxyLGUsbil7aWYodD0rdCxyPTB8ciwhbil7dmFyIGk9TWF0aC5wb3coMiw4KmUtMSk7RCh0aGlzLHQscixlLGktMSwtaSl9dmFyIG89MCxmPTEsdT0wO2Zvcih0aGlzW3JdPTI1NSZ0OysrbzxlJiYoZio9MjU2KTspdDwwJiYwPT09dSYmMCE9PXRoaXNbcitvLTFdJiYodT0xKSx0aGlzW3Irb109KHQvZj4+MCktdSYyNTU7cmV0dXJuIHIrZX0sQnVmZmVyLnByb3RvdHlwZS53cml0ZUludEJFPWZ1bmN0aW9uKHQscixlLG4pe2lmKHQ9K3Qscj0wfHIsIW4pe3ZhciBpPU1hdGgucG93KDIsOCplLTEpO0QodGhpcyx0LHIsZSxpLTEsLWkpfXZhciBvPWUtMSxmPTEsdT0wO2Zvcih0aGlzW3Irb109MjU1JnQ7LS1vPj0wJiYoZio9MjU2KTspdDwwJiYwPT09dSYmMCE9PXRoaXNbcitvKzFdJiYodT0xKSx0aGlzW3Irb109KHQvZj4+MCktdSYyNTU7cmV0dXJuIHIrZX0sQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDg9ZnVuY3Rpb24odCxyLGUpe3JldHVybiB0PSt0LHI9MHxyLGV8fEQodGhpcyx0LHIsMSwxMjcsLTEyOCksQnVmZmVyLlRZUEVEX0FSUkFZX1NVUFBPUlR8fCh0PU1hdGguZmxvb3IodCkpLHQ8MCYmKHQ9MjU1K3QrMSksdGhpc1tyXT0yNTUmdCxyKzF9LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVJbnQxNkxFPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gdD0rdCxyPTB8cixlfHxEKHRoaXMsdCxyLDIsMzI3NjcsLTMyNzY4KSxCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVD8odGhpc1tyXT0yNTUmdCx0aGlzW3IrMV09dD4+PjgpOk8odGhpcyx0LHIsITApLHIrMn0sQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDE2QkU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiB0PSt0LHI9MHxyLGV8fEQodGhpcyx0LHIsMiwzMjc2NywtMzI3NjgpLEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUPyh0aGlzW3JdPXQ+Pj44LHRoaXNbcisxXT0yNTUmdCk6Tyh0aGlzLHQsciwhMSkscisyfSxCdWZmZXIucHJvdG90eXBlLndyaXRlSW50MzJMRT1mdW5jdGlvbih0LHIsZSl7cmV0dXJuIHQ9K3Qscj0wfHIsZXx8RCh0aGlzLHQsciw0LDIxNDc0ODM2NDcsLTIxNDc0ODM2NDgpLEJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUPyh0aGlzW3JdPTI1NSZ0LHRoaXNbcisxXT10Pj4+OCx0aGlzW3IrMl09dD4+PjE2LHRoaXNbciszXT10Pj4+MjQpOkwodGhpcyx0LHIsITApLHIrNH0sQnVmZmVyLnByb3RvdHlwZS53cml0ZUludDMyQkU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiB0PSt0LHI9MHxyLGV8fEQodGhpcyx0LHIsNCwyMTQ3NDgzNjQ3LC0yMTQ3NDgzNjQ4KSx0PDAmJih0PTQyOTQ5NjcyOTUrdCsxKSxCdWZmZXIuVFlQRURfQVJSQVlfU1VQUE9SVD8odGhpc1tyXT10Pj4+MjQsdGhpc1tyKzFdPXQ+Pj4xNix0aGlzW3IrMl09dD4+PjgsdGhpc1tyKzNdPTI1NSZ0KTpMKHRoaXMsdCxyLCExKSxyKzR9LEJ1ZmZlci5wcm90b3R5cGUud3JpdGVGbG9hdExFPWZ1bmN0aW9uKHQscixlKXtyZXR1cm4gTih0aGlzLHQsciwhMCxlKX0sQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0QkU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiBOKHRoaXMsdCxyLCExLGUpfSxCdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlTEU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiBGKHRoaXMsdCxyLCEwLGUpfSxCdWZmZXIucHJvdG90eXBlLndyaXRlRG91YmxlQkU9ZnVuY3Rpb24odCxyLGUpe3JldHVybiBGKHRoaXMsdCxyLCExLGUpfSxCdWZmZXIucHJvdG90eXBlLmNvcHk9ZnVuY3Rpb24odCxyLGUsbil7aWYoZXx8KGU9MCksbnx8MD09PW58fChuPXRoaXMubGVuZ3RoKSxyPj10Lmxlbmd0aCYmKHI9dC5sZW5ndGgpLHJ8fChyPTApLG4+MCYmbjxlJiYobj1lKSxuPT09ZSlyZXR1cm4gMDtpZigwPT09dC5sZW5ndGh8fDA9PT10aGlzLmxlbmd0aClyZXR1cm4gMDtpZihyPDApdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJ0YXJnZXRTdGFydCBvdXQgb2YgYm91bmRzXCIpO2lmKGU8MHx8ZT49dGhpcy5sZW5ndGgpdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJzb3VyY2VTdGFydCBvdXQgb2YgYm91bmRzXCIpO2lmKG48MCl0aHJvdyBuZXcgUmFuZ2VFcnJvcihcInNvdXJjZUVuZCBvdXQgb2YgYm91bmRzXCIpO24+dGhpcy5sZW5ndGgmJihuPXRoaXMubGVuZ3RoKSx0Lmxlbmd0aC1yPG4tZSYmKG49dC5sZW5ndGgtcitlKTt2YXIgaSxvPW4tZTtpZih0aGlzPT09dCYmZTxyJiZyPG4pZm9yKGk9by0xO2k+PTA7LS1pKXRbaStyXT10aGlzW2krZV07ZWxzZSBpZihvPDFlM3x8IUJ1ZmZlci5UWVBFRF9BUlJBWV9TVVBQT1JUKWZvcihpPTA7aTxvOysraSl0W2krcl09dGhpc1tpK2VdO2Vsc2UgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwodCx0aGlzLnN1YmFycmF5KGUsZStvKSxyKTtyZXR1cm4gb30sQnVmZmVyLnByb3RvdHlwZS5maWxsPWZ1bmN0aW9uKHQscixlLG4pe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXtpZihcInN0cmluZ1wiPT10eXBlb2Ygcj8obj1yLHI9MCxlPXRoaXMubGVuZ3RoKTpcInN0cmluZ1wiPT10eXBlb2YgZSYmKG49ZSxlPXRoaXMubGVuZ3RoKSwxPT09dC5sZW5ndGgpe3ZhciBpPXQuY2hhckNvZGVBdCgwKTtpPDI1NiYmKHQ9aSl9aWYodm9pZCAwIT09biYmXCJzdHJpbmdcIiE9dHlwZW9mIG4pdGhyb3cgbmV3IFR5cGVFcnJvcihcImVuY29kaW5nIG11c3QgYmUgYSBzdHJpbmdcIik7aWYoXCJzdHJpbmdcIj09dHlwZW9mIG4mJiFCdWZmZXIuaXNFbmNvZGluZyhuKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5rbm93biBlbmNvZGluZzogXCIrbil9ZWxzZVwibnVtYmVyXCI9PXR5cGVvZiB0JiYodD0yNTUmdCk7aWYocjwwfHx0aGlzLmxlbmd0aDxyfHx0aGlzLmxlbmd0aDxlKXRocm93IG5ldyBSYW5nZUVycm9yKFwiT3V0IG9mIHJhbmdlIGluZGV4XCIpO2lmKGU8PXIpcmV0dXJuIHRoaXM7cj4+Pj0wLGU9dm9pZCAwPT09ZT90aGlzLmxlbmd0aDplPj4+MCx0fHwodD0wKTt2YXIgbztpZihcIm51bWJlclwiPT10eXBlb2YgdClmb3Iobz1yO288ZTsrK28pdGhpc1tvXT10O2Vsc2V7dmFyIGY9QnVmZmVyLmlzQnVmZmVyKHQpP3Q6cShuZXcgQnVmZmVyKHQsbikudG9TdHJpbmcoKSksdT1mLmxlbmd0aDtmb3Iobz0wO288ZS1yOysrbyl0aGlzW28rcl09ZltvJXVdfXJldHVybiB0aGlzfTt2YXIgdHQ9L1teK1xcLzAtOUEtWmEtei1fXS9nfSkuY2FsbCh0aGlzLFwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWw/Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmP3NlbGY6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz93aW5kb3c6e30pfSx7XCJiYXNlNjQtanNcIjozMCxpZWVlNzU0OjMyLGlzYXJyYXk6MzR9XSwzMDpbZnVuY3Rpb24odCxyLGUpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4odCl7dmFyIHI9dC5sZW5ndGg7aWYociU0PjApdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdHJpbmcuIExlbmd0aCBtdXN0IGJlIGEgbXVsdGlwbGUgb2YgNFwiKTtyZXR1cm5cIj1cIj09PXRbci0yXT8yOlwiPVwiPT09dFtyLTFdPzE6MH1mdW5jdGlvbiBpKHQpe3JldHVybiAzKnQubGVuZ3RoLzQtbih0KX1mdW5jdGlvbiBvKHQpe3ZhciByLGUsaSxvLGYsdSxhPXQubGVuZ3RoO2Y9bih0KSx1PW5ldyBoKDMqYS80LWYpLGk9Zj4wP2EtNDphO3ZhciBzPTA7Zm9yKHI9MCxlPTA7cjxpO3IrPTQsZSs9MylvPWNbdC5jaGFyQ29kZUF0KHIpXTw8MTh8Y1t0LmNoYXJDb2RlQXQocisxKV08PDEyfGNbdC5jaGFyQ29kZUF0KHIrMildPDw2fGNbdC5jaGFyQ29kZUF0KHIrMyldLHVbcysrXT1vPj4xNiYyNTUsdVtzKytdPW8+PjgmMjU1LHVbcysrXT0yNTUmbztyZXR1cm4gMj09PWY/KG89Y1t0LmNoYXJDb2RlQXQocildPDwyfGNbdC5jaGFyQ29kZUF0KHIrMSldPj40LHVbcysrXT0yNTUmbyk6MT09PWYmJihvPWNbdC5jaGFyQ29kZUF0KHIpXTw8MTB8Y1t0LmNoYXJDb2RlQXQocisxKV08PDR8Y1t0LmNoYXJDb2RlQXQocisyKV0+PjIsdVtzKytdPW8+PjgmMjU1LHVbcysrXT0yNTUmbyksdX1mdW5jdGlvbiBmKHQpe3JldHVybiBzW3Q+PjE4JjYzXStzW3Q+PjEyJjYzXStzW3Q+PjYmNjNdK3NbNjMmdF19ZnVuY3Rpb24gdSh0LHIsZSl7Zm9yKHZhciBuLGk9W10sbz1yO288ZTtvKz0zKW49KHRbb108PDE2KSsodFtvKzFdPDw4KSt0W28rMl0saS5wdXNoKGYobikpO3JldHVybiBpLmpvaW4oXCJcIil9ZnVuY3Rpb24gYSh0KXtmb3IodmFyIHIsZT10Lmxlbmd0aCxuPWUlMyxpPVwiXCIsbz1bXSxmPTE2MzgzLGE9MCxjPWUtbjthPGM7YSs9ZilvLnB1c2godSh0LGEsYStmPmM/YzphK2YpKTtyZXR1cm4gMT09PW4/KHI9dFtlLTFdLGkrPXNbcj4+Ml0saSs9c1tyPDw0JjYzXSxpKz1cIj09XCIpOjI9PT1uJiYocj0odFtlLTJdPDw4KSt0W2UtMV0saSs9c1tyPj4xMF0saSs9c1tyPj40JjYzXSxpKz1zW3I8PDImNjNdLGkrPVwiPVwiKSxvLnB1c2goaSksby5qb2luKFwiXCIpfWUuYnl0ZUxlbmd0aD1pLGUudG9CeXRlQXJyYXk9byxlLmZyb21CeXRlQXJyYXk9YTtmb3IodmFyIHM9W10sYz1bXSxoPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBVaW50OEFycmF5P1VpbnQ4QXJyYXk6QXJyYXksbD1cIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky9cIixwPTAsZD1sLmxlbmd0aDtwPGQ7KytwKXNbcF09bFtwXSxjW2wuY2hhckNvZGVBdChwKV09cDtjW1wiLVwiLmNoYXJDb2RlQXQoMCldPTYyLGNbXCJfXCIuY2hhckNvZGVBdCgwKV09NjN9LHt9XSwzMTpbZnVuY3Rpb24odCxyLGUpe2Z1bmN0aW9uIG4oKXtpZighKHRoaXMgaW5zdGFuY2VvZiBuKSlyZXR1cm4gbmV3IG59IWZ1bmN0aW9uKHQpe2Z1bmN0aW9uIGUodCl7Zm9yKHZhciByIGluIHMpdFtyXT1zW3JdO3JldHVybiB0fWZ1bmN0aW9uIG4odCxyKXtyZXR1cm4gdSh0aGlzLHQpLnB1c2gociksdGhpc31mdW5jdGlvbiBpKHQscil7ZnVuY3Rpb24gZSgpe28uY2FsbChuLHQsZSksci5hcHBseSh0aGlzLGFyZ3VtZW50cyl9dmFyIG49dGhpcztyZXR1cm4gZS5vcmlnaW5hbExpc3RlbmVyPXIsdShuLHQpLnB1c2goZSksbn1mdW5jdGlvbiBvKHQscil7ZnVuY3Rpb24gZSh0KXtyZXR1cm4gdCE9PXImJnQub3JpZ2luYWxMaXN0ZW5lciE9PXJ9dmFyIG4saT10aGlzO2lmKGFyZ3VtZW50cy5sZW5ndGgpe2lmKHIpe2lmKG49dShpLHQsITApKXtpZihuPW4uZmlsdGVyKGUpLCFuLmxlbmd0aClyZXR1cm4gby5jYWxsKGksdCk7aVthXVt0XT1ufX1lbHNlIGlmKG49aVthXSxuJiYoZGVsZXRlIG5bdF0sIU9iamVjdC5rZXlzKG4pLmxlbmd0aCkpcmV0dXJuIG8uY2FsbChpKX1lbHNlIGRlbGV0ZSBpW2FdO3JldHVybiBpfWZ1bmN0aW9uIGYodCxyKXtmdW5jdGlvbiBlKHQpe3QuY2FsbChvKX1mdW5jdGlvbiBuKHQpe3QuY2FsbChvLHIpfWZ1bmN0aW9uIGkodCl7dC5hcHBseShvLHMpfXZhciBvPXRoaXMsZj11KG8sdCwhMCk7aWYoIWYpcmV0dXJuITE7dmFyIGE9YXJndW1lbnRzLmxlbmd0aDtpZigxPT09YSlmLmZvckVhY2goZSk7ZWxzZSBpZigyPT09YSlmLmZvckVhY2gobik7ZWxzZXt2YXIgcz1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSk7Zi5mb3JFYWNoKGkpfXJldHVybiEhZi5sZW5ndGh9ZnVuY3Rpb24gdSh0LHIsZSl7aWYoIWV8fHRbYV0pe3ZhciBuPXRbYV18fCh0W2FdPXt9KTtyZXR1cm4gbltyXXx8KG5bcl09W10pfX1cInVuZGVmaW5lZFwiIT10eXBlb2YgciYmKHIuZXhwb3J0cz10KTt2YXIgYT1cImxpc3RlbmVyc1wiLHM9e29uOm4sb25jZTppLG9mZjpvLGVtaXQ6Zn07ZSh0LnByb3RvdHlwZSksdC5taXhpbj1lfShuKX0se31dLDMyOltmdW5jdGlvbih0LHIsZSl7ZS5yZWFkPWZ1bmN0aW9uKHQscixlLG4saSl7dmFyIG8sZix1PTgqaS1uLTEsYT0oMTw8dSktMSxzPWE+PjEsYz0tNyxoPWU/aS0xOjAsbD1lPy0xOjEscD10W3IraF07Zm9yKGgrPWwsbz1wJigxPDwtYyktMSxwPj49LWMsYys9dTtjPjA7bz0yNTYqbyt0W3IraF0saCs9bCxjLT04KTtmb3IoZj1vJigxPDwtYyktMSxvPj49LWMsYys9bjtjPjA7Zj0yNTYqZit0W3IraF0saCs9bCxjLT04KTtpZigwPT09bylvPTEtcztlbHNle2lmKG89PT1hKXJldHVybiBmP05hTjoocD8tMToxKSooMS8wKTtmKz1NYXRoLnBvdygyLG4pLG8tPXN9cmV0dXJuKHA/LTE6MSkqZipNYXRoLnBvdygyLG8tbil9LGUud3JpdGU9ZnVuY3Rpb24odCxyLGUsbixpLG8pe3ZhciBmLHUsYSxzPTgqby1pLTEsYz0oMTw8cyktMSxoPWM+PjEsbD0yMz09PWk/TWF0aC5wb3coMiwtMjQpLU1hdGgucG93KDIsLTc3KTowLHA9bj8wOm8tMSxkPW4/MTotMSx5PXI8MHx8MD09PXImJjEvcjwwPzE6MDtmb3Iocj1NYXRoLmFicyhyKSxpc05hTihyKXx8cj09PTEvMD8odT1pc05hTihyKT8xOjAsZj1jKTooZj1NYXRoLmZsb29yKE1hdGgubG9nKHIpL01hdGguTE4yKSxyKihhPU1hdGgucG93KDIsLWYpKTwxJiYoZi0tLGEqPTIpLHIrPWYraD49MT9sL2E6bCpNYXRoLnBvdygyLDEtaCksciphPj0yJiYoZisrLGEvPTIpLGYraD49Yz8odT0wLGY9Yyk6ZitoPj0xPyh1PShyKmEtMSkqTWF0aC5wb3coMixpKSxmKz1oKToodT1yKk1hdGgucG93KDIsaC0xKSpNYXRoLnBvdygyLGkpLGY9MCkpO2k+PTg7dFtlK3BdPTI1NSZ1LHArPWQsdS89MjU2LGktPTgpO2ZvcihmPWY8PGl8dSxzKz1pO3M+MDt0W2UrcF09MjU1JmYscCs9ZCxmLz0yNTYscy09OCk7dFtlK3AtZF18PTEyOCp5fX0se31dLDMzOltmdW5jdGlvbih0LHIsZSl7KGZ1bmN0aW9uKEJ1ZmZlcil7dmFyIHQscixuLGk7IWZ1bmN0aW9uKGUpe2Z1bmN0aW9uIG8odCxyLG4pe2Z1bmN0aW9uIGkodCxyLGUsbil7cmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBpP3YodGhpcyx0LHIsZSxuKTpuZXcgaSh0LHIsZSxuKX1mdW5jdGlvbiBvKHQpe3JldHVybiEoIXR8fCF0W0ZdKX1mdW5jdGlvbiB2KHQscixlLG4saSl7aWYoRSYmQSYmKHIgaW5zdGFuY2VvZiBBJiYocj1uZXcgRShyKSksbiBpbnN0YW5jZW9mIEEmJihuPW5ldyBFKG4pKSksIShyfHxlfHxufHxnKSlyZXR1cm4gdm9pZCh0LmJ1ZmZlcj1oKG0sMCkpO2lmKCFzKHIsZSkpe3ZhciBvPWd8fEFycmF5O2k9ZSxuPXIsZT0wLHI9bmV3IG8oOCl9dC5idWZmZXI9cix0Lm9mZnNldD1lfD0wLGIhPT10eXBlb2YgbiYmKFwic3RyaW5nXCI9PXR5cGVvZiBuP3gocixlLG4saXx8MTApOnMobixpKT9jKHIsZSxuLGkpOlwibnVtYmVyXCI9PXR5cGVvZiBpPyhrKHIsZStULG4pLGsocixlK1MsaSkpOm4+MD9PKHIsZSxuKTpuPDA/TChyLGUsbik6YyhyLGUsbSwwKSl9ZnVuY3Rpb24geCh0LHIsZSxuKXt2YXIgaT0wLG89ZS5sZW5ndGgsZj0wLHU9MDtcIi1cIj09PWVbMF0mJmkrKztmb3IodmFyIGE9aTtpPG87KXt2YXIgcz1wYXJzZUludChlW2krK10sbik7aWYoIShzPj0wKSlicmVhazt1PXUqbitzLGY9ZipuK01hdGguZmxvb3IodS9CKSx1JT1CfWEmJihmPX5mLHU/dT1CLXU6ZisrKSxrKHQscitULGYpLGsodCxyK1MsdSl9ZnVuY3Rpb24gUCgpe3ZhciB0PXRoaXMuYnVmZmVyLHI9dGhpcy5vZmZzZXQsZT1fKHQscitUKSxpPV8odCxyK1MpO3JldHVybiBufHwoZXw9MCksZT9lKkIraTppfWZ1bmN0aW9uIFIodCl7dmFyIHI9dGhpcy5idWZmZXIsZT10aGlzLm9mZnNldCxpPV8ocixlK1QpLG89XyhyLGUrUyksZj1cIlwiLHU9IW4mJjIxNDc0ODM2NDgmaTtmb3IodSYmKGk9fmksbz1CLW8pLHQ9dHx8MTA7Oyl7dmFyIGE9aSV0KkIrbztpZihpPU1hdGguZmxvb3IoaS90KSxvPU1hdGguZmxvb3IoYS90KSxmPShhJXQpLnRvU3RyaW5nKHQpK2YsIWkmJiFvKWJyZWFrfXJldHVybiB1JiYoZj1cIi1cIitmKSxmfWZ1bmN0aW9uIGsodCxyLGUpe3RbcitEXT0yNTUmZSxlPj49OCx0W3IrQ109MjU1JmUsZT4+PTgsdFtyK1ldPTI1NSZlLGU+Pj04LHRbcitJXT0yNTUmZX1mdW5jdGlvbiBfKHQscil7cmV0dXJuIHRbcitJXSpVKyh0W3IrWV08PDE2KSsodFtyK0NdPDw4KSt0W3IrRF19dmFyIFQ9cj8wOjQsUz1yPzQ6MCxJPXI/MDozLFk9cj8xOjIsQz1yPzI6MSxEPXI/MzowLE89cj9sOmQsTD1yP3A6eSxNPWkucHJvdG90eXBlLE49XCJpc1wiK3QsRj1cIl9cIitOO3JldHVybiBNLmJ1ZmZlcj12b2lkIDAsTS5vZmZzZXQ9MCxNW0ZdPSEwLE0udG9OdW1iZXI9UCxNLnRvU3RyaW5nPVIsTS50b0pTT049UCxNLnRvQXJyYXk9Zix3JiYoTS50b0J1ZmZlcj11KSxFJiYoTS50b0FycmF5QnVmZmVyPWEpLGlbTl09byxlW3RdPWksaX1mdW5jdGlvbiBmKHQpe3ZhciByPXRoaXMuYnVmZmVyLGU9dGhpcy5vZmZzZXQ7cmV0dXJuIGc9bnVsbCx0IT09ITEmJjA9PT1lJiY4PT09ci5sZW5ndGgmJngocik/cjpoKHIsZSl9ZnVuY3Rpb24gdSh0KXt2YXIgcj10aGlzLmJ1ZmZlcixlPXRoaXMub2Zmc2V0O2lmKGc9dyx0IT09ITEmJjA9PT1lJiY4PT09ci5sZW5ndGgmJkJ1ZmZlci5pc0J1ZmZlcihyKSlyZXR1cm4gcjt2YXIgbj1uZXcgdyg4KTtyZXR1cm4gYyhuLDAscixlKSxufWZ1bmN0aW9uIGEodCl7dmFyIHI9dGhpcy5idWZmZXIsZT10aGlzLm9mZnNldCxuPXIuYnVmZmVyO2lmKGc9RSx0IT09ITEmJjA9PT1lJiZuIGluc3RhbmNlb2YgQSYmOD09PW4uYnl0ZUxlbmd0aClyZXR1cm4gbjt2YXIgaT1uZXcgRSg4KTtyZXR1cm4gYyhpLDAscixlKSxpLmJ1ZmZlcn1mdW5jdGlvbiBzKHQscil7dmFyIGU9dCYmdC5sZW5ndGg7cmV0dXJuIHJ8PTAsZSYmcis4PD1lJiZcInN0cmluZ1wiIT10eXBlb2YgdFtyXX1mdW5jdGlvbiBjKHQscixlLG4pe3J8PTAsbnw9MDtmb3IodmFyIGk9MDtpPDg7aSsrKXRbcisrXT0yNTUmZVtuKytdfWZ1bmN0aW9uIGgodCxyKXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodCxyLHIrOCl9ZnVuY3Rpb24gbCh0LHIsZSl7Zm9yKHZhciBuPXIrODtuPnI7KXRbLS1uXT0yNTUmZSxlLz0yNTZ9ZnVuY3Rpb24gcCh0LHIsZSl7dmFyIG49cis4O2ZvcihlKys7bj5yOyl0Wy0tbl09MjU1Ji1lXjI1NSxlLz0yNTZ9ZnVuY3Rpb24gZCh0LHIsZSl7Zm9yKHZhciBuPXIrODtyPG47KXRbcisrXT0yNTUmZSxlLz0yNTZ9ZnVuY3Rpb24geSh0LHIsZSl7dmFyIG49cis4O2ZvcihlKys7cjxuOyl0W3IrK109MjU1Ji1lXjI1NSxlLz0yNTZ9ZnVuY3Rpb24gdih0KXtyZXR1cm4hIXQmJlwiW29iamVjdCBBcnJheV1cIj09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHQpfXZhciBnLGI9XCJ1bmRlZmluZWRcIix3PWIhPT10eXBlb2YgQnVmZmVyJiZCdWZmZXIsRT1iIT09dHlwZW9mIFVpbnQ4QXJyYXkmJlVpbnQ4QXJyYXksQT1iIT09dHlwZW9mIEFycmF5QnVmZmVyJiZBcnJheUJ1ZmZlcixtPVswLDAsMCwwLDAsMCwwLDBdLHg9QXJyYXkuaXNBcnJheXx8dixCPTQyOTQ5NjcyOTYsVT0xNjc3NzIxNjt0PW8oXCJVaW50NjRCRVwiLCEwLCEwKSxyPW8oXCJJbnQ2NEJFXCIsITAsITEpLG49byhcIlVpbnQ2NExFXCIsITEsITApLGk9byhcIkludDY0TEVcIiwhMSwhMSl9KFwib2JqZWN0XCI9PXR5cGVvZiBlJiZcInN0cmluZ1wiIT10eXBlb2YgZS5ub2RlTmFtZT9lOnRoaXN8fHt9KX0pLmNhbGwodGhpcyx0KFwiYnVmZmVyXCIpLkJ1ZmZlcil9LHtidWZmZXI6Mjl9XSwzNDpbZnVuY3Rpb24odCxyLGUpe3ZhciBuPXt9LnRvU3RyaW5nO3IuZXhwb3J0cz1BcnJheS5pc0FycmF5fHxmdW5jdGlvbih0KXtyZXR1cm5cIltvYmplY3QgQXJyYXldXCI9PW4uY2FsbCh0KX19LHt9XX0se30sWzFdKSgxKX0pO1xuXG4gICAgLypcbiAqICBCaW5hcnlTb2NrZXQgLSBCaW5hcnkgV2ViIFNvY2tldHNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMTYgIFJvbGFuZCBTaW5nZXIgPHJvbGFuZC5zaW5nZXJbYXRdZGVzZXJ0Yml0LmNvbT5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiAgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqICBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG5cbnZhciBCaW5hcnlTb2NrZXQgPSBmdW5jdGlvbigpIHtcbiAgLy8gVHVybiBvbiBzdHJpY3QgbW9kZS5cbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIEluY2x1ZGUgdGhlIGRlcGVuZGVuY2llcy5cbiAgLyoqXG4gKiBieXRlLWJ1ZmZlciB2MS4wLjNcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE1IFRpbSBLdXJ2ZXJzIDx0aW1AbW9vbnNwaGVyZS5uZXQ+XG4gKlxuICogV3JhcHBlciBmb3IgSmF2YVNjcmlwdCdzIEFycmF5QnVmZmVyL0RhdGFWaWV3LlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZS5cbiAqL1xuXG4hZnVuY3Rpb24oZSl7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMpbW9kdWxlLmV4cG9ydHM9ZSgpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShlKTtlbHNle3ZhciBmO1widW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/Zj13aW5kb3c6XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbD9mPWdsb2JhbDpcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmKGY9c2VsZiksZi5CeXRlQnVmZmVyPWUoKX19KGZ1bmN0aW9uKCl7dmFyIGRlZmluZSxtb2R1bGUsZXhwb3J0cztyZXR1cm4gKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkoezE6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmICgndmFsdWUnIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvbicpOyB9IH1cblxudmFyIEJ5dGVCdWZmZXIgPSAoZnVuY3Rpb24gKCkge1xuXG4gIC8vIENyZWF0ZXMgYSBuZXcgQnl0ZUJ1ZmZlclxuICAvLyAtIGZyb20gZ2l2ZW4gc291cmNlIChhc3N1bWVkIHRvIGJlIG51bWJlciBvZiBieXRlcyB3aGVuIG51bWVyaWMpXG4gIC8vIC0gd2l0aCBnaXZlbiBieXRlIG9yZGVyIChkZWZhdWx0cyB0byBiaWctZW5kaWFuKVxuICAvLyAtIHdpdGggZ2l2ZW4gaW1wbGljaXQgZ3Jvd3RoIHN0cmF0ZWd5IChkZWZhdWx0cyB0byBmYWxzZSlcblxuICBmdW5jdGlvbiBCeXRlQnVmZmVyKCkge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgdmFyIG9yZGVyID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLmNvbnN0cnVjdG9yLkJJR19FTkRJQU4gOiBhcmd1bWVudHNbMV07XG4gICAgdmFyIGltcGxpY2l0R3Jvd3RoID0gYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IGFyZ3VtZW50c1syXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBCeXRlQnVmZmVyKTtcblxuICAgIC8vIEhvbGRzIGJ1ZmZlclxuICAgIHRoaXMuX2J1ZmZlciA9IG51bGw7XG5cbiAgICAvLyBIb2xkcyByYXcgYnVmZmVyXG4gICAgdGhpcy5fcmF3ID0gbnVsbDtcblxuICAgIC8vIEhvbGRzIGludGVybmFsIHZpZXcgZm9yIHJlYWRpbmcvd3JpdGluZ1xuICAgIHRoaXMuX3ZpZXcgPSBudWxsO1xuXG4gICAgLy8gSG9sZHMgYnl0ZSBvcmRlclxuICAgIHRoaXMuX29yZGVyID0gISFvcmRlcjtcblxuICAgIC8vIEhvbGRzIGltcGxpY2l0IGdyb3d0aCBzdHJhdGVneVxuICAgIHRoaXMuX2ltcGxpY2l0R3Jvd3RoID0gISFpbXBsaWNpdEdyb3d0aDtcblxuICAgIC8vIEhvbGRzIHJlYWQvd3JpdGUgaW5kZXhcbiAgICB0aGlzLl9pbmRleCA9IDA7XG5cbiAgICAvLyBBdHRlbXB0IHRvIGV4dHJhY3QgYSBidWZmZXIgZnJvbSBnaXZlbiBzb3VyY2VcbiAgICB2YXIgYnVmZmVyID0gdGhpcy5fZXh0cmFjdEJ1ZmZlcihzb3VyY2UsIHRydWUpO1xuXG4gICAgLy8gT24gZmFpbHVyZSwgYXNzdW1lIHNvdXJjZSBpcyBhIHByaW1pdGl2ZSBpbmRpY2F0aW5nIHRoZSBudW1iZXIgb2YgYnl0ZXNcbiAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKHNvdXJjZSk7XG4gICAgfVxuXG4gICAgLy8gQXNzaWduIG5ldyBidWZmZXJcbiAgICB0aGlzLmJ1ZmZlciA9IGJ1ZmZlcjtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhCeXRlQnVmZmVyLCBbe1xuICAgIGtleTogJ19zYW5pdGl6ZUluZGV4JyxcblxuICAgIC8vIFNhbml0aXplcyByZWFkL3dyaXRlIGluZGV4XG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9zYW5pdGl6ZUluZGV4KCkge1xuICAgICAgaWYgKHRoaXMuX2luZGV4IDwgMCkge1xuICAgICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faW5kZXggPiB0aGlzLmxlbmd0aCkge1xuICAgICAgICB0aGlzLl9pbmRleCA9IHRoaXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19leHRyYWN0QnVmZmVyJyxcblxuICAgIC8vIEV4dHJhY3RzIGJ1ZmZlciBmcm9tIGdpdmVuIHNvdXJjZSBhbmQgb3B0aW9uYWxseSBjbG9uZXMgaXRcbiAgICB2YWx1ZTogZnVuY3Rpb24gX2V4dHJhY3RCdWZmZXIoc291cmNlKSB7XG4gICAgICB2YXIgY2xvbmUgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogYXJndW1lbnRzWzFdO1xuXG4gICAgICAvLyBXaGV0aGVyIHNvdXJjZSBpcyBhIGJ5dGUtYXdhcmUgb2JqZWN0XG4gICAgICBpZiAoc291cmNlICYmIHR5cGVvZiBzb3VyY2UuYnl0ZUxlbmd0aCAhPT0gJ3VuZGVmaW5lZCcpIHtcblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciBzb3VyY2UgaXMgYSB2aWV3IG9yIGEgcmF3IGJ1ZmZlclxuICAgICAgICBpZiAodHlwZW9mIHNvdXJjZS5idWZmZXIgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgcmV0dXJuIGNsb25lID8gc291cmNlLmJ1ZmZlci5zbGljZSgwKSA6IHNvdXJjZS5idWZmZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNsb25lID8gc291cmNlLnNsaWNlKDApIDogc291cmNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gV2hldGhlciBzb3VyY2UgaXMgYSBzZXF1ZW5jZSBvZiBieXRlc1xuICAgICAgfSBlbHNlIGlmIChzb3VyY2UgJiYgdHlwZW9mIHNvdXJjZS5sZW5ndGggIT09ICd1bmRlZmluZWQnKSB7XG5cbiAgICAgICAgLy8gQWx0aG91Z2ggVWludDhBcnJheSdzIGNvbnN0cnVjdG9yIHN1Y2NlZWRzIHdoZW4gZ2l2ZW4gc3RyaW5ncyxcbiAgICAgICAgLy8gaXQgZG9lcyBub3QgY29ycmVjdGx5IGluc3RhbnRpYXRlIHRoZSBidWZmZXJcbiAgICAgICAgaWYgKHNvdXJjZS5jb25zdHJ1Y3RvciA9PSBTdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBVaW50OEFycmF5KHNvdXJjZSkuYnVmZmVyO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTm8gYnVmZmVyIGZvdW5kXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmcm9udCcsXG5cbiAgICAvLyBTZXRzIGluZGV4IHRvIGZyb250IG9mIHRoZSBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJvbnQoKSB7XG4gICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdlbmQnLFxuXG4gICAgLy8gU2V0cyBpbmRleCB0byBlbmQgb2YgdGhlIGJ1ZmZlclxuICAgIHZhbHVlOiBmdW5jdGlvbiBlbmQoKSB7XG4gICAgICB0aGlzLl9pbmRleCA9IHRoaXMubGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2VlaycsXG5cbiAgICAvLyBTZWVrcyBnaXZlbiBudW1iZXIgb2YgYnl0ZXNcbiAgICAvLyBOb3RlOiBCYWNrd2FyZHMgc2Vla2luZyBpcyBzdXBwb3J0ZWRcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VlaygpIHtcbiAgICAgIHZhciBieXRlcyA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gMSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdGhpcy5pbmRleCArPSBieXRlcztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JlYWQnLFxuXG4gICAgLy8gUmVhZHMgc2VxdWVuY2Ugb2YgZ2l2ZW4gbnVtYmVyIG9mIGJ5dGVzIChkZWZhdWx0cyB0byBudW1iZXIgb2YgYnl0ZXMgYXZhaWxhYmxlKVxuICAgIHZhbHVlOiBmdW5jdGlvbiByZWFkKCkge1xuICAgICAgdmFyIGJ5dGVzID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0aGlzLmF2YWlsYWJsZSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgaWYgKGJ5dGVzID4gdGhpcy5hdmFpbGFibGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVhZCAnICsgYnl0ZXMgKyAnIGJ5dGUocyksICcgKyB0aGlzLmF2YWlsYWJsZSArICcgYXZhaWxhYmxlJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChieXRlcyA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIG51bWJlciBvZiBieXRlcyAnICsgYnl0ZXMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBuZXcgQnl0ZUJ1ZmZlcih0aGlzLl9idWZmZXIuc2xpY2UodGhpcy5faW5kZXgsIHRoaXMuX2luZGV4ICsgYnl0ZXMpLCB0aGlzLm9yZGVyKTtcbiAgICAgIHRoaXMuX2luZGV4ICs9IGJ5dGVzO1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dyaXRlJyxcblxuICAgIC8vIFdyaXRlcyBzZXF1ZW5jZSBvZiBieXRlc1xuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZShzZXF1ZW5jZSkge1xuICAgICAgdmFyIHZpZXc7XG5cbiAgICAgIC8vIEVuc3VyZSB3ZSdyZSBkZWFsaW5nIHdpdGggYSBVaW50OEFycmF5IHZpZXdcbiAgICAgIGlmICghKHNlcXVlbmNlIGluc3RhbmNlb2YgVWludDhBcnJheSkpIHtcblxuICAgICAgICAvLyBFeHRyYWN0IHRoZSBidWZmZXIgZnJvbSB0aGUgc2VxdWVuY2VcbiAgICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2V4dHJhY3RCdWZmZXIoc2VxdWVuY2UpO1xuICAgICAgICBpZiAoIWJ1ZmZlcikge1xuICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCB3cml0ZSAnICsgc2VxdWVuY2UgKyAnLCBub3QgYSBzZXF1ZW5jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQW5kIGNyZWF0ZSBhIG5ldyBVaW50OEFycmF5IHZpZXcgZm9yIGl0XG4gICAgICAgIHZpZXcgPSBuZXcgVWludDhBcnJheShidWZmZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmlldyA9IHNlcXVlbmNlO1xuICAgICAgfVxuXG4gICAgICB2YXIgYXZhaWxhYmxlID0gdGhpcy5hdmFpbGFibGU7XG4gICAgICBpZiAodmlldy5ieXRlTGVuZ3RoID4gYXZhaWxhYmxlKSB7XG4gICAgICAgIGlmICh0aGlzLl9pbXBsaWNpdEdyb3d0aCkge1xuICAgICAgICAgIHRoaXMuYXBwZW5kKHZpZXcuYnl0ZUxlbmd0aCAtIGF2YWlsYWJsZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3Qgd3JpdGUgJyArIHNlcXVlbmNlICsgJyB1c2luZyAnICsgdmlldy5ieXRlTGVuZ3RoICsgJyBieXRlKHMpLCAnICsgdGhpcy5hdmFpbGFibGUgKyAnIGF2YWlsYWJsZScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3Jhdy5zZXQodmlldywgdGhpcy5faW5kZXgpO1xuICAgICAgdGhpcy5faW5kZXggKz0gdmlldy5ieXRlTGVuZ3RoO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVhZFN0cmluZycsXG5cbiAgICAvLyBSZWFkcyBVVEYtOCBlbmNvZGVkIHN0cmluZyBvZiBnaXZlbiBudW1iZXIgb2YgYnl0ZXMgKGRlZmF1bHRzIHRvIG51bWJlciBvZiBieXRlcyBhdmFpbGFibGUpXG4gICAgLy9cbiAgICAvLyBCYXNlZCBvbiBEYXZpZCBGbGFuYWdhbidzIEJ1ZmZlclZpZXcgKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXZpZGZsYW5hZ2FuL0J1ZmZlclZpZXcvYmxvYi9tYXN0ZXIvQnVmZmVyVmlldy5qcy8vTDE5NSlcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZFN0cmluZygpIHtcbiAgICAgIHZhciBieXRlcyA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5hdmFpbGFibGUgOiBhcmd1bWVudHNbMF07XG5cbiAgICAgIGlmIChieXRlcyA+IHRoaXMuYXZhaWxhYmxlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHJlYWQgJyArIGJ5dGVzICsgJyBieXRlKHMpLCAnICsgdGhpcy5hdmFpbGFibGUgKyAnIGF2YWlsYWJsZScpO1xuICAgICAgfVxuXG4gICAgICBpZiAoYnl0ZXMgPD0gMCkge1xuICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBudW1iZXIgb2YgYnl0ZXMgJyArIGJ5dGVzKTtcbiAgICAgIH1cblxuICAgICAgLy8gTG9jYWwgcmVmZXJlbmNlXG4gICAgICB2YXIgcmF3ID0gdGhpcy5fcmF3O1xuXG4gICAgICAvLyBIb2xkcyBkZWNvZGVkIGNoYXJhY3RlcnNcbiAgICAgIHZhciBjb2RlcG9pbnRzID0gW107XG5cbiAgICAgIC8vIEluZGV4IGludG8gY29kZXBvaW50c1xuICAgICAgdmFyIGMgPSAwO1xuXG4gICAgICAvLyBCeXRlc1xuICAgICAgdmFyIGIxLFxuICAgICAgICAgIGIyLFxuICAgICAgICAgIGIzLFxuICAgICAgICAgIGI0ID0gbnVsbDtcblxuICAgICAgLy8gVGFyZ2V0IGluZGV4XG4gICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5faW5kZXggKyBieXRlcztcblxuICAgICAgd2hpbGUgKHRoaXMuX2luZGV4IDwgdGFyZ2V0KSB7XG4gICAgICAgIGIxID0gcmF3W3RoaXMuX2luZGV4XTtcblxuICAgICAgICBpZiAoYjEgPCAxMjgpIHtcbiAgICAgICAgICAvLyBPbmUgYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgIGNvZGVwb2ludHNbYysrXSA9IGIxO1xuICAgICAgICAgIHRoaXMuX2luZGV4Kys7XG4gICAgICAgIH0gZWxzZSBpZiAoYjEgPCAxOTQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgfSBlbHNlIGlmIChiMSA8IDIyNCkge1xuICAgICAgICAgIC8vIFR3byBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgYjIgPSByYXdbdGhpcy5faW5kZXggKyAxXTtcblxuICAgICAgICAgIGlmIChiMiA8IDEyOCB8fCBiMiA+IDE5MSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb2RlcG9pbnRzW2MrK10gPSAoKGIxICYgMzEpIDw8IDYpICsgKGIyICYgNjMpO1xuXG4gICAgICAgICAgdGhpcy5faW5kZXggKz0gMjtcbiAgICAgICAgfSBlbHNlIGlmIChiMSA8IDI0MCkge1xuXG4gICAgICAgICAgLy8gVGhyZWUgYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgIGIyID0gcmF3W3RoaXMuX2luZGV4ICsgMV07XG5cbiAgICAgICAgICBpZiAoYjIgPCAxMjggfHwgYjIgPiAxOTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYjMgPSByYXdbdGhpcy5faW5kZXggKyAyXTtcblxuICAgICAgICAgIGlmIChiMyA8IDEyOCB8fCBiMyA+IDE5MSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb2RlcG9pbnRzW2MrK10gPSAoKGIxICYgMTUpIDw8IDEyKSArICgoYjIgJiA2MykgPDwgNikgKyAoYjMgJiA2Myk7XG5cbiAgICAgICAgICB0aGlzLl9pbmRleCArPSAzO1xuICAgICAgICB9IGVsc2UgaWYgKGIxIDwgMjQ1KSB7XG4gICAgICAgICAgLy8gRm91ciBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgYjIgPSByYXdbdGhpcy5faW5kZXggKyAxXTtcblxuICAgICAgICAgIGlmIChiMiA8IDEyOCB8fCBiMiA+IDE5MSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCYWQgY29udGludWF0aW9uIGJ5dGUnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBiMyA9IHJhd1t0aGlzLl9pbmRleCArIDJdO1xuXG4gICAgICAgICAgaWYgKGIzIDwgMTI4IHx8IGIzID4gMTkxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JhZCBjb250aW51YXRpb24gYnl0ZScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGI0ID0gcmF3W3RoaXMuX2luZGV4ICsgM107XG5cbiAgICAgICAgICBpZiAoYjQgPCAxMjggfHwgYjQgPiAxOTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmFkIGNvbnRpbnVhdGlvbiBieXRlJyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIGNwID0gKChiMSAmIDcpIDw8IDE4KSArICgoYjIgJiA2MykgPDwgMTIpICsgKChiMyAmIDYzKSA8PCA2KSArIChiNCAmIDYzKTtcbiAgICAgICAgICBjcCAtPSA2NTUzNjtcblxuICAgICAgICAgIC8vIFR1cm4gY29kZSBwb2ludCBpbnRvIHR3byBzdXJyb2dhdGUgcGFpcnNcbiAgICAgICAgICBjb2RlcG9pbnRzW2MrK10gPSA1NTI5NiArICgoY3AgJiAxMDQ3NTUyKSA+Pj4gMTApO1xuICAgICAgICAgIGNvZGVwb2ludHNbYysrXSA9IDU2MzIwICsgKGNwICYgMTAyMyk7XG5cbiAgICAgICAgICB0aGlzLl9pbmRleCArPSA0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBieXRlJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQnJvd3NlcnMgbWF5IGhhdmUgaGFyZGNvZGVkIG9yIGltcGxpY2l0IGxpbWl0cyBvbiB0aGUgYXJyYXkgbGVuZ3RoIHdoZW4gYXBwbHlpbmcgYSBmdW5jdGlvblxuICAgICAgLy8gU2VlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9hcHBseS8vYXBwbHlfYW5kX2J1aWx0LWluX2Z1bmN0aW9uc1xuICAgICAgdmFyIGxpbWl0ID0gMSA8PCAxNjtcbiAgICAgIHZhciBsZW5ndGggPSBjb2RlcG9pbnRzLmxlbmd0aDtcbiAgICAgIGlmIChsZW5ndGggPCBsaW1pdCkge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShTdHJpbmcsIGNvZGVwb2ludHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGNoYXJzID0gW107XG4gICAgICAgIHZhciBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICBjaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUuYXBwbHkoU3RyaW5nLCBjb2RlcG9pbnRzLnNsaWNlKGksIGkgKyBsaW1pdCkpKTtcbiAgICAgICAgICBpICs9IGxpbWl0O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaGFycy5qb2luKCcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3cml0ZVN0cmluZycsXG5cbiAgICAvLyBXcml0ZXMgVVRGLTggZW5jb2RlZCBzdHJpbmdcbiAgICAvLyBOb3RlOiBEb2VzIG5vdCB3cml0ZSBzdHJpbmcgbGVuZ3RoIG9yIHRlcm1pbmF0b3JcbiAgICAvL1xuICAgIC8vIEJhc2VkIG9uIERhdmlkIEZsYW5hZ2FuJ3MgQnVmZmVyVmlldyAoaHR0cHM6Ly9naXRodWIuY29tL2RhdmlkZmxhbmFnYW4vQnVmZmVyVmlldy9ibG9iL21hc3Rlci9CdWZmZXJWaWV3LmpzLy9MMjY0KVxuICAgIHZhbHVlOiBmdW5jdGlvbiB3cml0ZVN0cmluZyhzdHJpbmcpIHtcblxuICAgICAgLy8gRW5jb2RlZCBVVEYtOCBieXRlc1xuICAgICAgdmFyIGJ5dGVzID0gW107XG5cbiAgICAgIC8vIFN0cmluZyBsZW5ndGgsIG9mZnNldCBhbmQgYnl0ZSBvZmZzZXRcbiAgICAgIHZhciBsZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xuICAgICAgdmFyIGkgPSAwO1xuICAgICAgdmFyIGIgPSAwO1xuXG4gICAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICB2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXG4gICAgICAgIGlmIChjIDw9IDEyNykge1xuICAgICAgICAgIC8vIE9uZSBieXRlIHNlcXVlbmNlXG4gICAgICAgICAgYnl0ZXNbYisrXSA9IGM7XG4gICAgICAgIH0gZWxzZSBpZiAoYyA8PSAyMDQ3KSB7XG4gICAgICAgICAgLy8gVHdvIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICBieXRlc1tiKytdID0gMTkyIHwgKGMgJiAxOTg0KSA+Pj4gNjtcbiAgICAgICAgICBieXRlc1tiKytdID0gMTI4IHwgYyAmIDYzO1xuICAgICAgICB9IGVsc2UgaWYgKGMgPD0gNTUyOTUgfHwgYyA+PSA1NzM0NCAmJiBjIDw9IDY1NTM1KSB7XG4gICAgICAgICAgLy8gVGhyZWUgYnl0ZSBzZXF1ZW5jZVxuICAgICAgICAgIC8vIFNvdXJjZSBjaGFyYWN0ZXIgaXMgbm90IGEgVVRGLTE2IHN1cnJvZ2F0ZVxuICAgICAgICAgIGJ5dGVzW2IrK10gPSAyMjQgfCAoYyAmIDYxNDQwKSA+Pj4gMTI7XG4gICAgICAgICAgYnl0ZXNbYisrXSA9IDEyOCB8IChjICYgNDAzMikgPj4+IDY7XG4gICAgICAgICAgYnl0ZXNbYisrXSA9IDEyOCB8IGMgJiA2MztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBGb3VyIGJ5dGUgc2VxdWVuY2VcbiAgICAgICAgICBpZiAoaSA9PSBsZW5ndGggLSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucGFpcmVkIHN1cnJvZ2F0ZSAnICsgc3RyaW5nW2ldICsgJyAoaW5kZXggJyArIGkgKyAnKScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFJldHJpZXZlIHN1cnJvZ2F0ZVxuICAgICAgICAgIHZhciBkID0gc3RyaW5nLmNoYXJDb2RlQXQoKytpKTtcbiAgICAgICAgICBpZiAoYyA8IDU1Mjk2IHx8IGMgPiA1NjMxOSB8fCBkIDwgNTYzMjAgfHwgZCA+IDU3MzQzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VucGFpcmVkIHN1cnJvZ2F0ZSAnICsgc3RyaW5nW2ldICsgJyAoaW5kZXggJyArIGkgKyAnKScpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciBjcCA9ICgoYyAmIDEwMjMpIDw8IDEwKSArIChkICYgMTAyMykgKyA2NTUzNjtcblxuICAgICAgICAgIGJ5dGVzW2IrK10gPSAyNDAgfCAoY3AgJiAxODM1MDA4KSA+Pj4gMTg7XG4gICAgICAgICAgYnl0ZXNbYisrXSA9IDEyOCB8IChjcCAmIDI1ODA0OCkgPj4+IDEyO1xuICAgICAgICAgIGJ5dGVzW2IrK10gPSAxMjggfCAoY3AgJiA0MDMyKSA+Pj4gNjtcbiAgICAgICAgICBieXRlc1tiKytdID0gMTI4IHwgY3AgJiA2MztcbiAgICAgICAgfVxuXG4gICAgICAgICsraTtcbiAgICAgIH1cblxuICAgICAgdGhpcy53cml0ZShieXRlcyk7XG5cbiAgICAgIHJldHVybiBieXRlcy5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVhZENTdHJpbmcnLFxuXG4gICAgLy8gQWxpYXNlcyBmb3IgcmVhZGluZy93cml0aW5nIFVURi04IGVuY29kZWQgc3RyaW5nc1xuICAgIC8vIHJlYWRVVEZDaGFyczogdGhpcy46OnJlYWRTdHJpbmdcbiAgICAvLyB3cml0ZVVURkNoYXJzOiB0aGlzLjo6d3JpdGVTdHJpbmdcblxuICAgIC8vIFJlYWRzIFVURi04IGVuY29kZWQgQy1zdHJpbmcgKGV4Y2x1ZGluZyB0aGUgYWN0dWFsIE5VTEwtYnl0ZSlcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZENTdHJpbmcoKSB7XG4gICAgICB2YXIgYnl0ZXMgPSB0aGlzLl9yYXc7XG4gICAgICB2YXIgbGVuZ3RoID0gYnl0ZXMubGVuZ3RoO1xuICAgICAgdmFyIGkgPSB0aGlzLl9pbmRleDtcbiAgICAgIHdoaWxlIChieXRlc1tpXSAhPSAwICYmIGkgPCBsZW5ndGgpIHtcbiAgICAgICAgKytpO1xuICAgICAgfVxuXG4gICAgICBsZW5ndGggPSBpIC0gdGhpcy5faW5kZXg7XG4gICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gdGhpcy5yZWFkU3RyaW5nKGxlbmd0aCk7XG4gICAgICAgIHRoaXMucmVhZEJ5dGUoKTtcbiAgICAgICAgcmV0dXJuIHN0cmluZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnd3JpdGVDU3RyaW5nJyxcblxuICAgIC8vIFdyaXRlcyBVVEYtOCBlbmNvZGVkIEMtc3RyaW5nIChOVUxMLXRlcm1pbmF0ZWQpXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlQ1N0cmluZyhzdHJpbmcpIHtcbiAgICAgIHZhciBieXRlcyA9IHRoaXMud3JpdGVTdHJpbmcoc3RyaW5nKTtcbiAgICAgIHRoaXMud3JpdGVCeXRlKDApO1xuICAgICAgcmV0dXJuICsrYnl0ZXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncHJlcGVuZCcsXG5cbiAgICAvLyBQcmVwZW5kcyBnaXZlbiBudW1iZXIgb2YgYnl0ZXNcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJlcGVuZChieXRlcykge1xuICAgICAgaWYgKGJ5dGVzIDw9IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0ludmFsaWQgbnVtYmVyIG9mIGJ5dGVzICcgKyBieXRlcyk7XG4gICAgICB9XG5cbiAgICAgIHZhciB2aWV3ID0gbmV3IFVpbnQ4QXJyYXkodGhpcy5sZW5ndGggKyBieXRlcyk7XG4gICAgICB2aWV3LnNldCh0aGlzLl9yYXcsIGJ5dGVzKTtcbiAgICAgIHRoaXMuX2luZGV4ICs9IGJ5dGVzO1xuICAgICAgdGhpcy5idWZmZXIgPSB2aWV3LmJ1ZmZlcjtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2FwcGVuZCcsXG5cbiAgICAvLyBBcHBlbmRzIGdpdmVuIG51bWJlciBvZiBieXRlc1xuICAgIHZhbHVlOiBmdW5jdGlvbiBhcHBlbmQoYnl0ZXMpIHtcbiAgICAgIGlmIChieXRlcyA8PSAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIG51bWJlciBvZiBieXRlcyAnICsgYnl0ZXMpO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KHRoaXMubGVuZ3RoICsgYnl0ZXMpO1xuICAgICAgdmlldy5zZXQodGhpcy5fcmF3LCAwKTtcbiAgICAgIHRoaXMuYnVmZmVyID0gdmlldy5idWZmZXI7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGlwJyxcblxuICAgIC8vIENsaXBzIHRoaXMgYnVmZmVyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsaXAoKSB7XG4gICAgICB2YXIgYmVnaW4gPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHRoaXMuX2luZGV4IDogYXJndW1lbnRzWzBdO1xuICAgICAgdmFyIGVuZCA9IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gdGhpcy5sZW5ndGggOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIGlmIChiZWdpbiA8IDApIHtcbiAgICAgICAgYmVnaW4gPSB0aGlzLmxlbmd0aCArIGJlZ2luO1xuICAgICAgfVxuICAgICAgdmFyIGJ1ZmZlciA9IHRoaXMuX2J1ZmZlci5zbGljZShiZWdpbiwgZW5kKTtcbiAgICAgIHRoaXMuX2luZGV4IC09IGJlZ2luO1xuICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzbGljZScsXG5cbiAgICAvLyBTbGljZXMgdGhpcyBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2xpY2UoKSB7XG4gICAgICB2YXIgYmVnaW4gPSBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IDAgOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgZW5kID0gYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyB0aGlzLmxlbmd0aCA6IGFyZ3VtZW50c1sxXTtcblxuICAgICAgdmFyIHNsaWNlID0gbmV3IEJ5dGVCdWZmZXIodGhpcy5fYnVmZmVyLnNsaWNlKGJlZ2luLCBlbmQpLCB0aGlzLm9yZGVyKTtcbiAgICAgIHJldHVybiBzbGljZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbG9uZScsXG5cbiAgICAvLyBDbG9uZXMgdGhpcyBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xvbmUoKSB7XG4gICAgICB2YXIgY2xvbmUgPSBuZXcgQnl0ZUJ1ZmZlcih0aGlzLl9idWZmZXIuc2xpY2UoMCksIHRoaXMub3JkZXIsIHRoaXMuaW1wbGljaXRHcm93dGgpO1xuICAgICAgY2xvbmUuaW5kZXggPSB0aGlzLl9pbmRleDtcbiAgICAgIHJldHVybiBjbG9uZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdyZXZlcnNlJyxcblxuICAgIC8vIFJldmVyc2VzIHRoaXMgYnVmZmVyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJldmVyc2UoKSB7XG4gICAgICBBcnJheS5wcm90b3R5cGUucmV2ZXJzZS5jYWxsKHRoaXMuX3Jhdyk7XG4gICAgICB0aGlzLl9pbmRleCA9IDA7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0FycmF5JyxcblxuICAgIC8vIEFycmF5IG9mIGJ5dGVzIGluIHRoaXMgYnVmZmVyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQXJyYXkoKSB7XG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5fcmF3LCAwKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b1N0cmluZycsXG5cbiAgICAvLyBTaG9ydCBzdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBidWZmZXJcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICB2YXIgb3JkZXIgPSB0aGlzLl9vcmRlciA9PSB0aGlzLmNvbnN0cnVjdG9yLkJJR19FTkRJQU4gPyAnYmlnLWVuZGlhbicgOiAnbGl0dGxlLWVuZGlhbic7XG4gICAgICByZXR1cm4gJ1tCeXRlQnVmZmVyOyBPcmRlcjogJyArIG9yZGVyICsgJzsgTGVuZ3RoOiAnICsgdGhpcy5sZW5ndGggKyAnOyBJbmRleDogJyArIHRoaXMuX2luZGV4ICsgJzsgQXZhaWxhYmxlOiAnICsgdGhpcy5hdmFpbGFibGUgKyAnXSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9IZXgnLFxuXG4gICAgLy8gSGV4IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgYnVmZmVyIHdpdGggZ2l2ZW4gc3BhY2VyXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGV4KCkge1xuICAgICAgdmFyIHNwYWNlciA9IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJyAnIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKHRoaXMuX3JhdywgZnVuY3Rpb24gKGJ5dGUpIHtcbiAgICAgICAgcmV0dXJuICgnMDAnICsgYnl0ZS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKSkuc2xpY2UoLTIpO1xuICAgICAgfSkuam9pbihzcGFjZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvQVNDSUknLFxuXG4gICAgLy8gQVNDSUkgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBidWZmZXIgd2l0aCBnaXZlbiBzcGFjZXIgYW5kIG9wdGlvbmFsIGJ5dGUgYWxpZ25tZW50XG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvQVNDSUkoKSB7XG4gICAgICB2YXIgc3BhY2VyID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnICcgOiBhcmd1bWVudHNbMF07XG4gICAgICB2YXIgYWxpZ24gPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRydWUgOiBhcmd1bWVudHNbMV07XG4gICAgICB2YXIgdW5rbm93biA9IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gJ++/vScgOiBhcmd1bWVudHNbMl07XG5cbiAgICAgIHZhciBwcmVmaXggPSBhbGlnbiA/ICcgJyA6ICcnO1xuICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbCh0aGlzLl9yYXcsIGZ1bmN0aW9uIChieXRlKSB7XG4gICAgICAgIHJldHVybiBieXRlIDwgMzIgfHwgYnl0ZSA+IDEyNiA/IHByZWZpeCArIHVua25vd24gOiBwcmVmaXggKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGJ5dGUpO1xuICAgICAgfSkuam9pbihzcGFjZXIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2J1ZmZlcicsXG5cbiAgICAvLyBSZXRyaWV2ZXMgYnVmZmVyXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYnVmZmVyO1xuICAgIH0sXG5cbiAgICAvLyBTZXRzIG5ldyBidWZmZXIgYW5kIHNhbml0aXplcyByZWFkL3dyaXRlIGluZGV4XG4gICAgc2V0OiBmdW5jdGlvbiAoYnVmZmVyKSB7XG4gICAgICB0aGlzLl9idWZmZXIgPSBidWZmZXI7XG4gICAgICB0aGlzLl9yYXcgPSBuZXcgVWludDhBcnJheSh0aGlzLl9idWZmZXIpO1xuICAgICAgdGhpcy5fdmlldyA9IG5ldyBEYXRhVmlldyh0aGlzLl9idWZmZXIpO1xuICAgICAgdGhpcy5fc2FuaXRpemVJbmRleCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3JhdycsXG5cbiAgICAvLyBSZXRyaWV2ZXMgcmF3IGJ1ZmZlclxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3JhdztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd2aWV3JyxcblxuICAgIC8vIFJldHJpZXZlcyB2aWV3XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmlldztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsZW5ndGgnLFxuXG4gICAgLy8gUmV0cmlldmVzIG51bWJlciBvZiBieXRlc1xuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2J1ZmZlci5ieXRlTGVuZ3RoO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2J5dGVMZW5ndGgnLFxuXG4gICAgLy8gUmV0cmlldmVzIG51bWJlciBvZiBieXRlc1xuICAgIC8vIE5vdGU6IFRoaXMgYWxsb3dzIGZvciBCeXRlQnVmZmVyIHRvIGJlIGRldGVjdGVkIGFzIGEgcHJvcGVyIHNvdXJjZSBieSBpdHMgb3duIGNvbnN0cnVjdG9yXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3JkZXInLFxuXG4gICAgLy8gUmV0cmlldmVzIGJ5dGUgb3JkZXJcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9vcmRlcjtcbiAgICB9LFxuXG4gICAgLy8gU2V0cyBieXRlIG9yZGVyXG4gICAgc2V0OiBmdW5jdGlvbiAob3JkZXIpIHtcbiAgICAgIHRoaXMuX29yZGVyID0gISFvcmRlcjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbXBsaWNpdEdyb3d0aCcsXG5cbiAgICAvLyBSZXRyaWV2ZXMgaW1wbGljaXQgZ3Jvd3RoIHN0cmF0ZWd5XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5faW1wbGljaXRHcm93dGg7XG4gICAgfSxcblxuICAgIC8vIFNldHMgaW1wbGljaXQgZ3Jvd3RoIHN0cmF0ZWd5XG4gICAgc2V0OiBmdW5jdGlvbiAoaW1wbGljaXRHcm93dGgpIHtcbiAgICAgIHRoaXMuX2ltcGxpY2l0R3Jvd3RoID0gISFpbXBsaWNpdEdyb3d0aDtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpbmRleCcsXG5cbiAgICAvLyBSZXRyaWV2ZXMgcmVhZC93cml0ZSBpbmRleFxuICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2luZGV4O1xuICAgIH0sXG5cbiAgICAvLyBTZXRzIHJlYWQvd3JpdGUgaW5kZXhcbiAgICBzZXQ6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIGluZGV4ICcgKyBpbmRleCArICcsIHNob3VsZCBiZSBiZXR3ZWVuIDAgYW5kICcgKyB0aGlzLmxlbmd0aCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnYXZhaWxhYmxlJyxcblxuICAgIC8vIFJldHJpZXZlcyBudW1iZXIgb2YgYXZhaWxhYmxlIGJ5dGVzXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcy5sZW5ndGggLSB0aGlzLl9pbmRleDtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ0xJVFRMRV9FTkRJQU4nLFxuXG4gICAgLy8gQnl0ZSBvcmRlciBjb25zdGFudHNcbiAgICB2YWx1ZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiB0cnVlXG4gIH0sIHtcbiAgICBrZXk6ICdCSUdfRU5ESUFOJyxcbiAgICB2YWx1ZTogZmFsc2UsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxuICB9XSk7XG5cbiAgcmV0dXJuIEJ5dGVCdWZmZXI7XG59KSgpO1xuXG4vLyBHZW5lcmljIHJlYWRlclxudmFyIHJlYWRlciA9IGZ1bmN0aW9uIHJlYWRlcihtZXRob2QsIGJ5dGVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIG9yZGVyID0gYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB0aGlzLl9vcmRlciA6IGFyZ3VtZW50c1swXTtcblxuICAgIGlmIChieXRlcyA+IHRoaXMuYXZhaWxhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCByZWFkICcgKyBieXRlcyArICcgYnl0ZShzKSwgJyArIHRoaXMuYXZhaWxhYmxlICsgJyBhdmFpbGFibGUnKTtcbiAgICB9XG5cbiAgICB2YXIgdmFsdWUgPSB0aGlzLl92aWV3W21ldGhvZF0odGhpcy5faW5kZXgsIG9yZGVyKTtcbiAgICB0aGlzLl9pbmRleCArPSBieXRlcztcbiAgICByZXR1cm4gdmFsdWU7XG4gIH07XG59O1xuXG4vLyBHZW5lcmljIHdyaXRlclxudmFyIHdyaXRlciA9IGZ1bmN0aW9uIHdyaXRlcihtZXRob2QsIGJ5dGVzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YXIgb3JkZXIgPSBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHRoaXMuX29yZGVyIDogYXJndW1lbnRzWzFdO1xuXG4gICAgdmFyIGF2YWlsYWJsZSA9IHRoaXMuYXZhaWxhYmxlO1xuICAgIGlmIChieXRlcyA+IGF2YWlsYWJsZSkge1xuICAgICAgaWYgKHRoaXMuX2ltcGxpY2l0R3Jvd3RoKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGJ5dGVzIC0gYXZhaWxhYmxlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHdyaXRlICcgKyB2YWx1ZSArICcgdXNpbmcgJyArIGJ5dGVzICsgJyBieXRlKHMpLCAnICsgYXZhaWxhYmxlICsgJyBhdmFpbGFibGUnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl92aWV3W21ldGhvZF0odGhpcy5faW5kZXgsIHZhbHVlLCBvcmRlcik7XG4gICAgdGhpcy5faW5kZXggKz0gYnl0ZXM7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG59O1xuXG4vLyBSZWFkZXJzIGZvciBieXRlcywgc2hvcnRzLCBpbnRlZ2VycywgZmxvYXRzIGFuZCBkb3VibGVzXG5CeXRlQnVmZmVyLnByb3RvdHlwZS5yZWFkQnl0ZSA9IHJlYWRlcignZ2V0SW50OCcsIDEpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUucmVhZFVuc2lnbmVkQnl0ZSA9IHJlYWRlcignZ2V0VWludDgnLCAxKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLnJlYWRTaG9ydCA9IHJlYWRlcignZ2V0SW50MTYnLCAyKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLnJlYWRVbnNpZ25lZFNob3J0ID0gcmVhZGVyKCdnZXRVaW50MTYnLCAyKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLnJlYWRJbnQgPSByZWFkZXIoJ2dldEludDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS5yZWFkVW5zaWduZWRJbnQgPSByZWFkZXIoJ2dldFVpbnQzMicsIDQpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUucmVhZEZsb2F0ID0gcmVhZGVyKCdnZXRGbG9hdDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS5yZWFkRG91YmxlID0gcmVhZGVyKCdnZXRGbG9hdDY0JywgOCk7XG5cbi8vIFdyaXRlcnMgZm9yIGJ5dGVzLCBzaG9ydHMsIGludGVnZXJzLCBmbG9hdHMgYW5kIGRvdWJsZXNcbkJ5dGVCdWZmZXIucHJvdG90eXBlLndyaXRlQnl0ZSA9IHdyaXRlcignc2V0SW50OCcsIDEpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUud3JpdGVVbnNpZ25lZEJ5dGUgPSB3cml0ZXIoJ3NldFVpbnQ4JywgMSk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS53cml0ZVNob3J0ID0gd3JpdGVyKCdzZXRJbnQxNicsIDIpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUud3JpdGVVbnNpZ25lZFNob3J0ID0gd3JpdGVyKCdzZXRVaW50MTYnLCAyKTtcbkJ5dGVCdWZmZXIucHJvdG90eXBlLndyaXRlSW50ID0gd3JpdGVyKCdzZXRJbnQzMicsIDQpO1xuQnl0ZUJ1ZmZlci5wcm90b3R5cGUud3JpdGVVbnNpZ25lZEludCA9IHdyaXRlcignc2V0VWludDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS53cml0ZUZsb2F0ID0gd3JpdGVyKCdzZXRGbG9hdDMyJywgNCk7XG5CeXRlQnVmZmVyLnByb3RvdHlwZS53cml0ZURvdWJsZSA9IHdyaXRlcignc2V0RmxvYXQ2NCcsIDgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJ5dGVCdWZmZXI7XG59LHt9XX0se30sWzFdKVxuKDEpXG59KTtcblxuICAvKlxuICogIEJpbmFyeVNvY2tldCAtIEJpbmFyeSBXZWIgU29ja2V0c1xuICogIENvcHlyaWdodCAoQykgMjAxNiAgUm9sYW5kIFNpbmdlciA8cm9sYW5kLnNpbmdlclthdF1kZXNlcnRiaXQuY29tPlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqICBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qXG4qICBUaGlzIGNvZGUgbGl2ZXMgaW5zaWRlIHRoZSBCaW5hcnlTb2NrZXQgZnVuY3Rpb24uXG4qL1xuXG52YXIgdXRpbHMgPSB7XG4gIC8vIE1pbWljcyBqUXVlcnkncyBleHRlbmQgbWV0aG9kLlxuICAvLyBTb3VyY2U6IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTExOTcyNDcvamF2YXNjcmlwdC1lcXVpdmFsZW50LW9mLWpxdWVyeXMtZXh0ZW5kLW1ldGhvZFxuICBleHRlbmQ6IGZ1bmN0aW9uKCkge1xuICAgIGZvcih2YXIgaT0xOyBpPGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcbiAgICAgICAgZm9yKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKVxuICAgICAgICAgICAgaWYoYXJndW1lbnRzW2ldLmhhc093blByb3BlcnR5KGtleSkpXG4gICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICByZXR1cm4gYXJndW1lbnRzWzBdO1xuICB9LFxuXG4gIC8vIFJldHVybiBhIGZ1bmN0aW9uIHdoaWNoIGlzIHRyaWdnZXJlZCBvbmx5IG9uY2Ugd2l0aGluIHRoZSBsaW1pdCBkdXJhdGlvbi5cbiAgLy8gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbiAgLy8gbGVhZGluZyBlZGdlLCBpbnN0ZWFkIG9mIHRoZSB0cmFpbGluZy5cbiAgdGhyb3R0bGU6IGZ1bmN0aW9uKGNhbGxiYWNrLCBsaW1pdCwgaW1tZWRpYXRlKSB7XG4gICAgdmFyIHdhaXQgPSBmYWxzZTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLCBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICBpZiAoIXdhaXQpIHtcbiAgICAgICAgICBpZiAoaW1tZWRpYXRlKSB7IGNhbGxiYWNrLmFwcGx5KGNvbnRleHQsIGFyZ3MpOyB9XG4gICAgICAgICAgd2FpdCA9IHRydWU7XG4gICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3YWl0ID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSkgeyBjYWxsYmFjay5hcHBseShjb250ZXh0LCBhcmdzKTsgfVxuICAgICAgICAgIH0sIGxpbWl0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgfVxufTtcblxuICAvKlxuICogIEJpbmFyeVNvY2tldCAtIEJpbmFyeSBXZWIgU29ja2V0c1xuICogIENvcHlyaWdodCAoQykgMjAxNiAgUm9sYW5kIFNpbmdlciA8cm9sYW5kLnNpbmdlclthdF1kZXNlcnRiaXQuY29tPlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqICBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qXG4gKiAgVGhpcyBjb2RlIGxpdmVzIGluc2lkZSB0aGUgQmluYXJ5U29ja2V0IGZ1bmN0aW9uLlxuICovXG5cbnZhciBvcGVuU29ja2V0ID0gZnVuY3Rpb24oaG9zdCwgb3B0aW9ucykge1xuICAvLyBJbmNsdWRlIHRoZSBkZXBlbmRlbmNpZXMuXG4gIC8qXG4gKiAgQmluYXJ5U29ja2V0IC0gQmluYXJ5IFdlYiBTb2NrZXRzXG4gKiAgQ29weXJpZ2h0IChDKSAyMDE2ICBSb2xhbmQgU2luZ2VyIDxyb2xhbmQuc2luZ2VyW2F0XWRlc2VydGJpdC5jb20+XG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiAgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLypcbiogIFRoaXMgY29kZSBsaXZlcyBpbnNpZGUgdGhlIEJpbmFyeVNvY2tldCBmdW5jdGlvbi5cbiovXG5cbnZhciBuZXdXZWJTb2NrZXQgPSBmdW5jdGlvbiAoKSB7XG4gIC8qXG4gICAqIFZhcmlhYmxlc1xuICAgKi9cblxuICB2YXIgcyA9IHt9LFxuICAgICAgd3M7XG5cblxuXG4gIC8qXG4gICAqIFNvY2tldCBsYXllciBpbXBsZW1lbnRhdGlvbi5cbiAgICovXG5cbiAgcy5vcGVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSB3ZWJzb2NrZXQgdXJsLlxuICAgICAgICB2YXIgdXJsO1xuICAgICAgICBpZiAoaG9zdC5tYXRjaChcIl5odHRwczovL1wiKSkge1xuICAgICAgICAgICAgdXJsID0gXCJ3c3NcIiArIGhvc3Quc3Vic3RyKDUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdXJsID0gXCJ3c1wiICsgaG9zdC5zdWJzdHIoNCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPcGVuIHRoZSB3ZWJzb2NrZXQgY29ubmVjdGlvblxuICAgICAgICB3cyA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgd3MuYmluYXJ5VHlwZSA9ICdhcnJheWJ1ZmZlcic7XG5cbiAgICAgICAgLy8gU2V0IHRoZSBjYWxsYmFjayBoYW5kbGVyc1xuICAgICAgICB3cy5vbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgcy5vbk1lc3NhZ2UoZXZlbnQuZGF0YSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgd3Mub25lcnJvciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgbXNnID0gXCJ0aGUgd2Vic29ja2V0IGNsb3NlZCB0aGUgY29ubmVjdGlvbiB3aXRoIFwiO1xuICAgICAgICAgICAgaWYgKGV2ZW50LmNvZGUpIHtcbiAgICAgICAgICAgICAgICBtc2cgKz0gXCJ0aGUgZXJyb3IgY29kZTogXCIgKyBldmVudC5jb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbXNnICs9IFwiYW4gZXJyb3IuXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHMub25FcnJvcihtc2cpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdzLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHMub25DbG9zZSgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHdzLm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcy5vbk9wZW4oKTtcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHMub25FcnJvcigpO1xuICAgIH1cbiAgfTtcblxuICBzLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIFNlbmQgdGhlIGRhdGEgdG8gdGhlIHNlcnZlclxuICAgIHdzLnNlbmQoZGF0YSk7XG4gIH07XG5cbiAgcy5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICAgIC8vIENsb3NlIHRoZSB3ZWJzb2NrZXQgaWYgZGVmaW5lZC5cbiAgICBpZiAod3MpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHdzLmNsb3NlKCk7XG4gICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cblxuICAgIHdzID0gdW5kZWZpbmVkO1xuICB9O1xuXG4gIHJldHVybiBzO1xufTtcblxuICAvKlxuICogIEJpbmFyeVNvY2tldCAtIEJpbmFyeSBXZWIgU29ja2V0c1xuICogIENvcHlyaWdodCAoQykgMjAxNiAgUm9sYW5kIFNpbmdlciA8cm9sYW5kLnNpbmdlclthdF1kZXNlcnRiaXQuY29tPlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZnJlZSBzb2Z0d2FyZTogeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeVxuICogIGl0IHVuZGVyIHRoZSB0ZXJtcyBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgYXMgcHVibGlzaGVkIGJ5XG4gKiAgdGhlIEZyZWUgU29mdHdhcmUgRm91bmRhdGlvbiwgZWl0aGVyIHZlcnNpb24gMyBvZiB0aGUgTGljZW5zZSwgb3JcbiAqICAoYXQgeW91ciBvcHRpb24pIGFueSBsYXRlciB2ZXJzaW9uLlxuICpcbiAqICBUaGlzIHByb2dyYW0gaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCxcbiAqICBidXQgV0lUSE9VVCBBTlkgV0FSUkFOVFk7IHdpdGhvdXQgZXZlbiB0aGUgaW1wbGllZCB3YXJyYW50eSBvZlxuICogIE1FUkNIQU5UQUJJTElUWSBvciBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS4gIFNlZSB0aGVcbiAqICBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBmb3IgbW9yZSBkZXRhaWxzLlxuICpcbiAqICBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZVxuICogIGFsb25nIHdpdGggdGhpcyBwcm9ncmFtLiAgSWYgbm90LCBzZWUgPGh0dHA6Ly93d3cuZ251Lm9yZy9saWNlbnNlcy8+LlxuICovXG5cbi8qXG4gKiAgVGhpcyBjb2RlIGxpdmVzIGluc2lkZSB0aGUgQmluYXJ5U29ja2V0IGZ1bmN0aW9uLlxuICovXG5cbnZhciBuZXdBamF4U29ja2V0ID0gZnVuY3Rpb24gKCkge1xuICAvKlxuICAgKiBDb25zdGFudHNcbiAgICovXG5cbiAgdmFyIHNlbmRUaW1lb3V0ID0gMzAwMDAsXG4gICAgICBwb2xsVGltZW91dCA9IDQ1MDAwO1xuXG4gIHZhciBEYXRhRGVsaW1pdGVyID0gJyMnO1xuXG4gIHZhciBSZXF1ZXN0VHlwZSA9IHtcbiAgICAgIEluaXQ6IDAsXG4gICAgICBQdXNoOiAxLFxuICAgICAgUG9sbDogMlxuICB9O1xuXG4gIHZhciBQb2xsVHlwZSA9IHtcbiAgICAgIERhdGE6ICAgIDAsXG4gICAgICBUaW1lb3V0OiAxLFxuICAgICAgQ2xvc2VkOiAgMlxuICB9O1xuXG5cblxuICAvKlxuICAgKiBWYXJpYWJsZXNcbiAgICovXG5cbiAgIHZhciBzID0ge30sXG4gICAgICAgdWlkLCBwb2xsVG9rZW4sIHB1c2hUb2tlbixcbiAgICAgICBwb2xsWGhyID0gZmFsc2UsXG4gICAgICAgc2VuZFhociA9IGZhbHNlLFxuICAgICAgIHBvbGwsXG4gICAgICAgcHVzaEFjdGl2ZSA9IGZhbHNlLFxuICAgICAgIHB1c2hCdWZmZXIgPSBbXTtcblxuXG5cbiAgLypcbiAgICogTWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiBwb3N0QWpheCh1cmwsIHRpbWVvdXQsIGRhdGEsIHN1Y2Nlc3MsIGVycm9yKSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgc3VjY2Vzcyh4aHIucmVzcG9uc2UpO1xuICAgIH07XG5cbiAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuICAgICAgZXJyb3IoKTtcbiAgICB9O1xuXG4gICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgZXJyb3IoXCJ0aW1lb3V0XCIpO1xuICAgIH07XG5cbiAgICB4aHIub3BlbignUE9TVCcsIHVybCwgdHJ1ZSk7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9IFwiYXJyYXlidWZmZXJcIjtcbiAgICB4aHIudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgeGhyLnNlbmQobmV3IERhdGFWaWV3KGRhdGEpKTtcblxuICAgIHJldHVybiB4aHI7XG4gIH1cblxuICBmdW5jdGlvbiBzdG9wUmVxdWVzdHMoKSB7XG4gICAgLy8gU2V0IHRoZSBwb2xsIGZ1bmN0aW9uIHRvIGEgZHVtbXkgZnVuY3Rpb24uXG4gICAgLy8gVGhpcyB3aWxsIHByZXZlbnQgZnVydGhlciBwb2xsIGNhbGxzLlxuICAgIHBvbGwgPSBmdW5jdGlvbigpIHt9O1xuXG4gICAgLy8gS2lsbCB0aGUgYWpheCByZXF1ZXN0cy5cbiAgICBpZiAocG9sbFhocikge1xuICAgICAgICBwb2xsWGhyLmFib3J0KCk7XG4gICAgfVxuICAgIGlmIChzZW5kWGhyKSB7XG4gICAgICAgIHNlbmRYaHIuYWJvcnQoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB0cmlnZ2VyQ2xvc2VkKCkge1xuICAgIC8vIFN0b3AgdGhlIGFqYXggcmVxdWVzdHMuXG4gICAgc3RvcFJlcXVlc3RzKCk7XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBldmVudC5cbiAgICBzLm9uQ2xvc2UoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJFcnJvcihtc2cpIHtcbiAgICAvLyBTdG9wIHRoZSBhamF4IHJlcXVlc3RzLlxuICAgIHN0b3BSZXF1ZXN0cygpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBlcnJvciBtZXNzYWdlLlxuICAgIGlmICghbXNnKSB7XG4gICAgICBtc2cgPSBcInRoZSBhamF4IHNvY2tldCBjbG9zZWQgdGhlIGNvbm5lY3Rpb24gd2l0aCBhbiBlcnJvci5cIjtcbiAgICB9XG5cbiAgICAvLyBUcmlnZ2VyIHRoZSBldmVudC5cbiAgICBzLm9uRXJyb3IobXNnKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNlbmQocmVxVHlwZSwgaGVhZGVyU3RyLCBkYXRhLCBjYWxsYmFjaykge1xuICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoMywgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOLCB0cnVlKTtcbiAgICBiLndyaXRlQnl0ZShyZXFUeXBlKTtcblxuICAgIHZhciBoZWFkZXJTdHJMZW4gPSAwO1xuICAgIGlmIChoZWFkZXJTdHIgJiYgaGVhZGVyU3RyLmxlbmd0aCA+IDApIHtcbiAgICAgIGhlYWRlclN0ckxlbiA9IGhlYWRlclN0ci5sZW5ndGg7XG4gICAgfVxuICAgIGIud3JpdGVCeXRlKGhlYWRlclN0ckxlbik7XG5cbiAgICBpZiAoaGVhZGVyU3RyTGVuID4gMCkge1xuICAgICAgYi53cml0ZVN0cmluZyhoZWFkZXJTdHIpO1xuICAgIH1cblxuICAgIGlmIChkYXRhICYmIGRhdGEuYnl0ZUxlbmd0aCA+IDApIHtcbiAgICAgIGIud3JpdGUoZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybSB0aGUgYWN0dWFsIGFqYXggcmVxdWVzdC5cbiAgICBzZW5kWGhyID0gcG9zdEFqYXgoaG9zdCwgc2VuZFRpbWVvdXQsIGIuYnVmZmVyLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgc2VuZFhociA9IGZhbHNlO1xuXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZGF0YSk7XG4gICAgICB9XG4gICAgfSwgZnVuY3Rpb24gKG1zZykge1xuICAgICAgc2VuZFhociA9IGZhbHNlO1xuICAgICAgdHJpZ2dlckVycm9yKG1zZyk7XG4gICAgfSk7XG4gIH1cblxuICBwb2xsID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoMywgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOLCB0cnVlKTtcbiAgICBiLndyaXRlQnl0ZShSZXF1ZXN0VHlwZS5Qb2xsKTtcblxuICAgIHZhciBoZWFkZXJTdHIgPSB1aWQgKyBEYXRhRGVsaW1pdGVyICsgcG9sbFRva2VuO1xuICAgIGIud3JpdGVCeXRlKGhlYWRlclN0ci5sZW5ndGgpO1xuICAgIGIud3JpdGVTdHJpbmcoaGVhZGVyU3RyKTtcblxuICAgIC8vIFBlcmZvcm0gdGhlIGFjdHVhbCBhamF4IHJlcXVlc3QuXG4gICAgcG9sbFhociA9IHBvc3RBamF4KGhvc3QsIHBvbGxUaW1lb3V0LCBiLmJ1ZmZlciwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHBvbGxYaHIgPSBmYWxzZTtcblxuICAgICAgdmFyIGIgPSBuZXcgQnl0ZUJ1ZmZlcihkYXRhLCBCeXRlQnVmZmVyLkJJR19FTkRJQU4pO1xuXG4gICAgICAvLyBFeHRyYWN0IHRoZSB0eW9lLlxuICAgICAgaWYgKGIubGVuZ3RoIDwgMSkge1xuICAgICAgICB0cmlnZ2VyRXJyb3IoXCJhamF4IHNvY2tldDogcG9sbDogaW52YWxpZCBzZXJ2ZXIgcmVzcG9uc2VcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHZhciB0eXBlID0gYi5yZWFkQnl0ZSgpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGlzIGFqYXggY29ubmVjdGlvbiB3YXMgY2xvc2VkLlxuICAgICAgaWYgKHR5cGUgPT0gUG9sbFR5cGUuQ2xvc2VkKSB7XG4gICAgICAgIHRyaWdnZXJDbG9zZWQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBWYWxpZGF0ZS5cbiAgICAgIGlmIChiLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgdHJpZ2dlckVycm9yKFwiYWpheCBzb2NrZXQ6IHBvbGw6IGludmFsaWQgc2VydmVyIHJlc3BvbnNlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEV4dHJhY3QgYW5kIHNldCB0aGUgbmV3IHBvbGwgdG9rZW4uXG4gICAgICB2YXIgcG9sbFRva2VuTGVuID0gYi5yZWFkQnl0ZSgpO1xuICAgICAgcG9sbFRva2VuID0gYi5yZWFkU3RyaW5nKHBvbGxUb2tlbkxlbik7XG5cbiAgICAgIC8vIENoZWNrIGlmIHRoaXMgYWpheCByZXF1ZXN0IGhhcyByZWFjaGVkIHRoZSBzZXJ2ZXIncyB0aW1lb3V0LlxuICAgICAgaWYgKHR5cGUgPT0gUG9sbFR5cGUuVGltZW91dCkge1xuICAgICAgICAvLyBKdXN0IHN0YXJ0IHRoZSBuZXh0IHBvbGwgcmVxdWVzdC5cbiAgICAgICAgcG9sbCgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFN0YXJ0IHRoZSBuZXh0IHBvbGwgcmVxdWVzdC5cbiAgICAgIHBvbGwoKTtcblxuICAgICAgLy8gUmVtb3ZlIHRoZSBoZWFkZXIgZnJvbSB0aGUgYnVmZmVyLlxuICAgICAgYi5jbGlwKCk7XG5cbiAgICAgIC8vIENhbGwgdGhlIGV2ZW50LlxuICAgICAgcy5vbk1lc3NhZ2UoYi5idWZmZXIpO1xuICAgIH0sIGZ1bmN0aW9uIChtc2cpIHtcbiAgICAgIHBvbGxYaHIgPSBmYWxzZTtcbiAgICAgIHRyaWdnZXJFcnJvcihtc2cpO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBwdXNoID0gdXRpbHMudGhyb3R0bGUoZnVuY3Rpb24oKSB7XG4gICAgLy8gU2tpcCBpZiB0aGVyZSBpcyBhbHJlYWR5IGFuIGFjdGl2ZSBwdXNoIHJlcXVlc3QuXG4gICAgLy8gT25seSBvbmUgcHVzaCByZXF1ZXN0IGF0IG9uY2UgaXMgYWxsb3dlZC5cbiAgICAvLyBUaGUgbmV4dCBwdXNoIHdpbGwgYmUgdHJpZ2dlcmVkIGF1dG9tYXRpY2FsbHkuXG4gICAgaWYgKHB1c2hBY3RpdmUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBPYnRhaW4gdGhlIHRvdGFsIGJ1ZmZlciBzaXplLlxuICAgIHZhciBpLCB0b3RhbFNpemUgPSAwO1xuICAgIGZvciAoaT0wOyBpIDwgcHVzaEJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgdG90YWxTaXplICs9IHB1c2hCdWZmZXJbaV0uYnl0ZUxlbmd0aDtcbiAgICB9XG5cbiAgICAvLyBNZXJnZSBhbGwgYnVmZmVyZWQgYnl0ZXMgaW50byBvbmUgc2luZ2xlIGJ1ZmZlci5cbiAgICB2YXIgYiA9IG5ldyBCeXRlQnVmZmVyKHRvdGFsU2l6ZSwgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOKTtcbiAgICBmb3IgKGk9MDsgaSA8IHB1c2hCdWZmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgIGIud3JpdGUocHVzaEJ1ZmZlcltpXSk7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIHB1c2ggYnVmZmVyLlxuICAgIHB1c2hCdWZmZXIgPSBbXTtcblxuICAgIC8vIFBlcmZvcm0gdGhlIGFjdHVhbCBwdXNoIHJlcXVlc3QuXG4gICAgcHVzaEFjdGl2ZSA9IHRydWU7XG4gICAgc2VuZChSZXF1ZXN0VHlwZS5QdXNoLCB1aWQgKyBEYXRhRGVsaW1pdGVyICsgcHVzaFRva2VuLCBiLmJ1ZmZlciwgZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcHVzaEFjdGl2ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoIWRhdGEgfHwgZGF0YS5ieXRlTGVuZ3RoIDw9IDApIHtcbiAgICAgICAgdHJpZ2dlckVycm9yKFwiYWpheCBzb2NrZXQ6IHB1c2g6IGludmFsaWQgc2VydmVyIHJlc3BvbnNlXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoZGF0YSwgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOKTtcblxuICAgICAgLy8gU2V0IHRoZSBuZXcgcHVzaCB0b2tlbi5cbiAgICAgIHB1c2hUb2tlbiA9IGIucmVhZFN0cmluZygpO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGUgYnVmZmVyIGlzIGZpbGxlZCBhZ2Fpbi5cbiAgICAgIC8vIElmIHNvLCB0cmlnZ2VyIHRoZSBuZXh0IHB1c2guXG4gICAgICBpZiAocHVzaEJ1ZmZlci5sZW5ndGggPiAwKSB7XG4gICAgICAgIHB1c2goKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgNTApO1xuXG5cbiAgLypcbiAgICogU29ja2V0IGxheWVyIGltcGxlbWVudGF0aW9uLlxuICAgKi9cblxuICBzLm9wZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgYWpheCBzb2NrZXQgc2Vzc2lvblxuICAgIHNlbmQoUmVxdWVzdFR5cGUuSW5pdCwgbnVsbCwgbnVsbCwgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIGlmICghZGF0YSB8fCBkYXRhLmJ5dGVMZW5ndGggPD0gMCkge1xuICAgICAgICB0cmlnZ2VyRXJyb3IoXCJhamF4IHNvY2tldDogb3BlbjogaW52YWxpZCBzZXJ2ZXIgcmVzcG9uc2VcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gVHJhbnNmb3JtIHRvIHN0cmluZy5cbiAgICAgIHZhciBiID0gbmV3IEJ5dGVCdWZmZXIoZGF0YSwgQnl0ZUJ1ZmZlci5CSUdfRU5ESUFOKTtcbiAgICAgIGRhdGEgPSBiLnJlYWRTdHJpbmcoKTtcblxuICAgICAgLy8gU3BsaXQgdGhlIHN0cmluZy5cbiAgICAgIHZhciBzcGxpdCA9IGRhdGEuc3BsaXQoRGF0YURlbGltaXRlcik7XG4gICAgICBpZiAoc3BsaXQubGVuZ3RoICE9PSAzKSB7XG4gICAgICAgIHRyaWdnZXJFcnJvcihcImFqYXggc29ja2V0OiBmYWlsZWQgdG8gb2J0YWluIHVpZCBhbmQgdG9rZW5zXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCB0aGUgdWlkIGFuZCB0aGUgdG9rZW5zLlxuICAgICAgdWlkID0gc3BsaXRbMF07XG4gICAgICBwb2xsVG9rZW4gPSBzcGxpdFsxXTtcbiAgICAgIHB1c2hUb2tlbiA9IHNwbGl0WzJdO1xuXG4gICAgICAvLyBTdGFydCB0aGUgbG9uZyBwb2xsaW5nIHByb2Nlc3MuXG4gICAgICBwb2xsKCk7XG5cbiAgICAgIC8vIFRyaWdnZXIgdGhlIGV2ZW50LlxuICAgICAgcy5vbk9wZW4oKTtcbiAgICB9KTtcbiAgfTtcblxuICBzLnNlbmQgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgIC8vIEFkZCB0aGUgZGF0YSB0byB0aGUgcHVzaCBidWZmZXIgcXVldWUuXG4gICAgcHVzaEJ1ZmZlci5wdXNoKGRhdGEpO1xuXG4gICAgLy8gUHVzaCB0aGUgZGF0YSB0byB0aGUgc2VydmVyICh0aHJvdHRsZWQpLlxuICAgIHB1c2goKTtcbiAgfTtcblxuICBzLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgLy8gU3RvcCB0aGUgYWpheCByZXF1ZXN0cy5cbiAgICBzdG9wUmVxdWVzdHMoKTtcbiAgfTtcblxuICByZXR1cm4gcztcbn07XG5cblxuXG5cbiAgLypcbiAgICogQ29uc3RhbnRzXG4gICAqL1xuXG4gIHZhciBTb2NrZXRUeXBlcyA9IHtcbiAgICAgIFdlYlNvY2tldDogIFwiV2ViU29ja2V0XCIsXG4gICAgICBBamF4U29ja2V0OiBcIkFqYXhTb2NrZXRcIlxuICB9O1xuXG4gIHZhciBEZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgIC8vIEZvcmNlIGEgc29ja2V0IHR5cGUuXG4gICAgICAvLyBWYWx1ZXM6IGZhbHNlLCBcIldlYlNvY2tldFwiLCBcIkFqYXhTb2NrZXRcIlxuICAgICAgZm9yY2VTb2NrZXRUeXBlOiBmYWxzZSxcblxuICAgICAgLy8gS2lsbCB0aGUgY29ubmVjdCBhdHRlbXB0IGFmdGVyIHRoZSB0aW1lb3V0LlxuICAgICAgY29ubmVjdFRpbWVvdXQ6ICAxMDAwMFxuICB9O1xuXG5cblxuICAvKlxuICAgKiBWYXJpYWJsZXNcbiAgICovXG5cbiAgdmFyIGJzLCAgICAgLy8gQmFja2VuZCBzb2NrZXQuXG4gICAgICBpc0Nsb3NlZCA9IGZhbHNlO1xuXG5cblxuICAvKlxuICAgKiBQdWJsaWMgSW5zdGFuY2VcbiAgICovXG5cbiAgdmFyIGluc3RhbmNlID0ge1xuICAgIC8vIFJldHVybiB0aGUgY3VycmVudCBzb2NrZXQgdHlwZS5cbiAgICAvLyBWYWx1ZXM6IFwiV2ViU29ja2V0XCIsIFwiQWpheFNvY2tldFwiXG4gICAgc29ja2V0VHlwZTogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYnMuc29ja2V0VHlwZTtcbiAgICB9LFxuXG4gICAgLy8gQ2xvc2UgdGhlIHNvY2tldCBjb25uZWN0aW9uLlxuICAgIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICAgIGJzLmNsb3NlKCk7XG4gICAgICB0cmlnZ2VyQ2xvc2UoKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJucyBhIGJvb2xlYW4gd2hlbmV2ZXIgdGhlIHNvY2tldCBpcyBjbG9zZWQuXG4gICAgaXNDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGlzQ2xvc2VkO1xuICAgIH0sXG5cbiAgICAvLyBXcml0ZSB0aGUgQXJyYXlCdWZmZXIgdG8gdGhlIHNvY2tldC5cbiAgICB3cml0ZTogZnVuY3Rpb24oZGF0YSkge1xuICAgICAgaWYgKGlzQ2xvc2VkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQmluYXJ5U29ja2V0OiBmYWlsZWQgdG8gd3JpdGU6IHRoZSBzb2NrZXQgaXMgY2xvc2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIGlmICghKGRhdGEgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcikpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IGZhaWxlZCB0byB3cml0ZSBkYXRhOiBkYXRhIGlzIG5vdCBvZiB0eXBlIEFycmF5QnVmZmVyXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChkYXRhLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBicy5zZW5kKGRhdGEpO1xuICAgIH0sXG5cbiAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyBuZXcgYnl0ZXMgYXJlIHJlY2VpdmVkLlxuICAgIC8vIFRoZSBwYXNzZWQgZGF0YSBpcyBhbiBBcnJheUJ1ZmZlci5cbiAgICBvblJlYWQ6IGZ1bmN0aW9uKGRhdGEpIHt9IC8vIFNldCB0byBhbiBlbXB0eSBmdW5jdGlvbi4gVGhpcyBlbGltaW5hdGVzIGFuIGV4dHJhIGNoZWNrLlxuXG4gICAgLypcbiAgICAgIC8vIEhpbnQ6IEZ1cnRoZXIgYXZhaWxhYmxlIGV2ZW50IGZ1bmN0aW9uLlxuXG4gICAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyB0aGUgY29ubmVjdGlvbiBpcyBlc3RhYmxpc2hlZC5cbiAgICAgIG9uT3BlbjogZnVuY3Rpb24oKSB7fVxuXG4gICAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyB0aGUgY29ubmVjdGlvbiBjbG9zZXMuXG4gICAgICBvbkNsb3NlOiBmdW5jdGlvbigpIHt9XG5cbiAgICAgIC8vIEZ1bmN0aW9uIHdoaWNoIGlzIHRyaWdnZXJlZCBhcyBzb29uIGFzIHRoZSBjb25uZWN0aW9uIGNsb3NlcyB3aXRoIGFuIGVycm9yLlxuICAgICAgLy8gQW4gb3B0aW9uYWwgZXJyb3IgbWVzc2FnZSBpcyBwYXNzZWQuXG4gICAgICAvLyBvbkNsb3NlIGlzIGFsc28gdHJpZ2dlcmVkIGFmdGVyd2FyZHMuXG4gICAgICBvbkVycm9yOiBmdW5jdGlvbihtc2cpIHt9XG4gICAgKi9cbiAgfTtcblxuXG5cbiAgLypcbiAgICogTWV0aG9kc1xuICAgKi9cblxuICBmdW5jdGlvbiB0cmlnZ2VyT3BlbigpIHtcbiAgICAvLyBUcmlnZ2VyIG9ubHkgb25jZS5cbiAgICBpZiAoYnMub3BlblRyaWdnZXJlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBicy5vcGVuVHJpZ2dlcmVkID0gdHJ1ZTtcblxuICAgIGlmIChpbnN0YW5jZS5vbk9wZW4pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGluc3RhbmNlLm9uT3BlbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJpbmFyeVNvY2tldDogb25PcGVuOiBjYXRjaGVkIGV4Y2VwdGlvbjpcIiwgZSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRvIGNsb3NlIHRoZSBzb2NrZXQuXG4gICAgICAgIGJzLmNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdHJpZ2dlckNsb3NlKCkge1xuICAgIC8vIFRyaWdnZXIgb25seSBvbmNlLlxuICAgIGlmIChpc0Nsb3NlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpc0Nsb3NlZCA9IHRydWU7XG5cbiAgICBpZiAoaW5zdGFuY2Uub25DbG9zZSkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaW5zdGFuY2Uub25DbG9zZSgpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkJpbmFyeVNvY2tldDogb25DbG9zZTogY2F0Y2hlZCBleGNlcHRpb246XCIsIGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHRyaWdnZXJFcnJvcihtc2cpIHtcbiAgICAvLyBUcmlnZ2VyIG9ubHkgb25jZS5cbiAgICBpZiAoYnMuZXJyb3JUcmlnZ2VyZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYnMuZXJyb3JUcmlnZ2VyZWQgPSB0cnVlO1xuXG4gICAgaWYgKGluc3RhbmNlLm9uRXJyb3IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGluc3RhbmNlLm9uRXJyb3IobXNnKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IG9uRXJyb3I6IGNhdGNoZWQgZXhjZXB0aW9uOlwiLCBlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBjb25uZWN0U29ja2V0KCkge1xuICAgIC8vIENob29zZSB0aGUgc29ja2V0IGxheWVyIGRlcGVuZGluZyBvbiB0aGUgYnJvd3NlciBzdXBwb3J0LlxuICAgIGlmICgoIW9wdGlvbnMuZm9yY2VTb2NrZXRUeXBlICYmIHdpbmRvdy5XZWJTb2NrZXQpIHx8XG4gICAgICAgIG9wdGlvbnMuZm9yY2VTb2NrZXRUeXBlID09PSBTb2NrZXRUeXBlcy5XZWJTb2NrZXQpXG4gICAge1xuICAgICAgICBicyA9IG5ld1dlYlNvY2tldCgpO1xuICAgICAgICBicy5zb2NrZXRUeXBlID0gU29ja2V0VHlwZXMuV2ViU29ja2V0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgYnMgPSBuZXdBamF4U29ja2V0KCk7XG4gICAgICAgIGJzLnNvY2tldFR5cGUgPSBTb2NrZXRUeXBlcy5BamF4U29ja2V0O1xuICAgIH1cblxuICAgIC8vIFN0YXJ0IHRoZSB0aW1lb3V0LlxuICAgIHZhciBjb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNvbm5lY3RUaW1lb3V0ID0gZmFsc2U7XG5cbiAgICAgICAgLy8gRW5zdXJlIHRoZSBzb2NrZXQgaXMgY2xvc2VkLlxuICAgICAgICBicy5jbG9zZSgpO1xuXG4gICAgICAgIHRyaWdnZXJFcnJvcihcImNvbm5lY3Rpb24gdGltZW91dFwiKTtcbiAgICAgICAgdHJpZ2dlckNsb3NlKCk7XG4gICAgfSwgb3B0aW9ucy5jb25uZWN0VGltZW91dCk7XG5cbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24uXG4gICAgdmFyIHN0b3BDb25uZWN0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGNvbm5lY3RUaW1lb3V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgIGNsZWFyVGltZW91dChjb25uZWN0VGltZW91dCk7XG4gICAgICAgICAgY29ubmVjdFRpbWVvdXQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9O1xuXG5cblxuICAgIC8vIFNldCB0aGUgYmFja2VuZCBzb2NrZXQgZXZlbnRzLlxuICAgIGJzLm9uT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgc3RvcENvbm5lY3RUaW1lb3V0KCk7XG5cbiAgICAgIHRyaWdnZXJPcGVuKCk7XG4gICAgfTtcblxuICAgIGJzLm9uQ2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHN0b3BDb25uZWN0VGltZW91dCgpO1xuXG4gICAgICAvLyBFbnN1cmUgdGhlIHNvY2tldCBpcyBjbG9zZWQuXG4gICAgICBicy5jbG9zZSgpO1xuXG4gICAgICB0cmlnZ2VyQ2xvc2UoKTtcbiAgICB9O1xuXG4gICAgYnMub25FcnJvciA9IGZ1bmN0aW9uKG1zZykge1xuICAgICAgLy8gU3RvcCB0aGUgY29ubmVjdCB0aW1lb3V0LlxuICAgICAgc3RvcENvbm5lY3RUaW1lb3V0KCk7XG5cbiAgICAgIC8vIEVuc3VyZSB0aGUgc29ja2V0IGlzIGNsb3NlZC5cbiAgICAgIGJzLmNsb3NlKCk7XG5cbiAgICAgIHRyaWdnZXJFcnJvcihtc2cpO1xuICAgICAgdHJpZ2dlckNsb3NlKCk7XG4gICAgfTtcblxuICAgIGJzLm9uTWVzc2FnZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGluc3RhbmNlLm9uUmVhZChkYXRhKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IG9uUmVhZDogY2F0Y2hlZCBleGNlcHRpb246XCIsIGUpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDb25uZWN0IGR1cmluZyB0aGUgbmV4dCB0aWNrLlxuICAgIC8vIFRoZSB1c2VyIHNob3VsZCBiZSBhYmxlIHRvIGNvbm5lY3QgdGhlIGV2ZW50IGZ1bmN0aW9ucyBmaXJzdC5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgYnMub3BlbigpO1xuICAgIH0sIDApO1xuICB9XG5cblxuXG4gIC8qXG4gICAqIEluaXRpYWxpemUgc2VjdGlvblxuICAgKi9cblxuICAvLyBDaGVjayBpZiBBcnJheUJ1ZmZlcnMgYXJlIHN1cHBvcnRlZC4gVGhpcyBpcyBhIG11c3QhXG4gIGlmICghd2luZG93LkFycmF5QnVmZmVyKSB7XG4gICAgY29uc29sZS5sb2coXCJCaW5hcnlTb2NrZXQ6IEFycmF5QnVmZmVycyBhcmUgbm90IHN1cHBvcnRlZCBieSB0aGlzIGJyb3dzZXIhXCIpO1xuICAgIHJldHVybiA7XG4gIH1cblxuICAvLyBNZXJnZSB0aGUgb3B0aW9ucyB3aXRoIHRoZSBkZWZhdWx0IG9wdGlvbnMuXG4gIG9wdGlvbnMgPSB1dGlscy5leHRlbmQoe30sIERlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcblxuICAvLyBQcmVwYXJlIHRoZSBob3N0IHN0cmluZy5cbiAgLy8gUHJlcGVudCB0aGUgY3VycmVudCBsb2NhdGlvbiBpZiB0aGUgaG9zdCB1cmwgc3RhcnRzIHdpdGggYSBzbGFzaC5cbiAgaWYgKGhvc3QubWF0Y2goXCJeL1wiKSkge1xuICAgIGhvc3QgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdCArIGhvc3Q7XG4gIH1cbiAgLy8gVXNlIHRoZSBjdXJyZW50IGxvY2F0aW9uIGlmIHRoZSBob3N0IHN0cmluZyBpcyBub3Qgc2V0LlxuICBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSB3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyB3aW5kb3cubG9jYXRpb24uaG9zdDtcbiAgfVxuICAvLyBUaGUgaG9zdCBzdHJpbmcgaGFzIHRvIHN0YXJ0IHdpdGggaHR0cDovLyBvciBodHRwczovL1xuICBpZiAoIWhvc3QubWF0Y2goXCJeaHR0cDovL1wiKSAmJiAhaG9zdC5tYXRjaChcIl5odHRwczovL1wiKSkge1xuICAgIGNvbnNvbGUubG9nKFwiQmluYXJ5U29ja2V0OiBpbnZhbGlkIGhvc3Q6IG1pc3NpbmcgJ2h0dHA6Ly8nIG9yICdodHRwczovLychXCIpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIENvbm5lY3QgdGhlIHNvY2tldC5cbiAgY29ubmVjdFNvY2tldCgpO1xuXG5cbiAgLy8gUmV0dXJuIHRoZSBuZXdseSBjcmVhdGVkIHNvY2tldC5cbiAgcmV0dXJuIGluc3RhbmNlO1xufTtcblxuXG4gIC8vIFRoZSBwdWJsaWMgQmluYXJ5U29ja2V0IGluc3RhbmNlLlxuICByZXR1cm4ge1xuICAgIC8vIE9wZW4gYW5kIHJldHVybiBhIG5ldyBCaW5hcnlTb2NrZXQuXG4gICAgLy8gVGhlIGZpcnN0IGFyZ3VtZW50IGlzIHJlcXVpcmVkLiBJdCBkZWZpbmVzIGEgaG9zdCB3aGljaCBoYXMgdG8gc3RhcnQgd2l0aFxuICAgIC8vIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gb3IgLyBmb3IgYW4gYWJzb2x1dGUgcGF0aCB1c2luZyB0aGUgY3VycmVudCBob3N0LlxuICAgIC8vIFRoZSBzZWNvbmQgYXJndW1lbnQgZGVmaW5lcyBvcHRpb25hbCBvcHRpb25zLlxuICAgIG9wZW46IG9wZW5Tb2NrZXQsXG5cbiAgICAvLyBDcmVhdGUgYSBuZXcgQnl0ZUJ1ZmZlci5cbiAgICAvLyBPcHRpb25hbGx5IHNldCB0aGUgaW1wbGljaXRHcm93dGggYm9vbGVhbi5cbiAgICAvLyBXcmFwcGVyIGZvciBKYXZhU2NyaXB0J3MgQXJyYXlCdWZmZXIvRGF0YVZpZXcgbWFpbnRhaW5pbmcgaW5kZXggYW5kIGRlZmF1bHQgZW5kaWFubmVzcy5cbiAgICAvLyBNb3JlIGluZm9ybWF0aW9uOiBodHRwczovL2dpdGh1Yi5jb20vZGVzZXJ0Yml0L2J5dGUtYnVmZmVyXG4gICAgbmV3Qnl0ZUJ1ZmZlcjogZnVuY3Rpb24oZGF0YSwgaW1wbGljaXRHcm93dGgpIHtcbiAgICAgIHJldHVybiBuZXcgQnl0ZUJ1ZmZlcihkYXRhLCBCeXRlQnVmZmVyLkJJR19FTkRJQU4sIGltcGxpY2l0R3Jvd3RoKTtcbiAgICB9LFxuXG4gICAgLy8gQ29udmVydCBhbiBBcnJheUJ1ZmZlciB0byBhIHN0cmluZy5cbiAgICBieXRlc1RvU3RyaW5nOiBmdW5jdGlvbihiKSB7XG4gICAgICB2YXIgYmIgPSB0aGlzLm5ld0J5dGVCdWZmZXIoYik7XG4gICAgICByZXR1cm4gYmIucmVhZFN0cmluZygpO1xuICAgIH0sXG5cbiAgICAvLyBDb252ZXJ0IGEgc3RyaW5nIHRvIGFuIEFycmF5QnVmZmVyLlxuICAgIHN0cmluZ1RvQnl0ZXM6IGZ1bmN0aW9uKHMpIHtcbiAgICAgIHZhciBiID0gdGhpcy5uZXdCeXRlQnVmZmVyKDEsIHRydWUpO1xuICAgICAgYi53cml0ZVN0cmluZyhzKTtcbiAgICAgIHJldHVybiBiLmJ1ZmZlcjtcbiAgICB9XG4gIH07XG59KCk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnVZVzFsY3lJNlcxMHNJbTFoY0hCcGJtZHpJam9pSWl3aWMyOTFjbU5sY3lJNld5SmlhVzVoY25semIyTnJaWFF1YW5NaVhTd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeXBjYmlBcUlDQkNhVzVoY25sVGIyTnJaWFFnTFNCQ2FXNWhjbmtnVjJWaUlGTnZZMnRsZEhOY2JpQXFJQ0JEYjNCNWNtbG5hSFFnS0VNcElESXdNVFlnSUZKdmJHRnVaQ0JUYVc1blpYSWdQSEp2YkdGdVpDNXphVzVuWlhKYllYUmRaR1Z6WlhKMFltbDBMbU52YlQ1Y2JpQXFYRzRnS2lBZ1ZHaHBjeUJ3Y205bmNtRnRJR2x6SUdaeVpXVWdjMjltZEhkaGNtVTZJSGx2ZFNCallXNGdjbVZrYVhOMGNtbGlkWFJsSUdsMElHRnVaQzl2Y2lCdGIyUnBabmxjYmlBcUlDQnBkQ0IxYm1SbGNpQjBhR1VnZEdWeWJYTWdiMllnZEdobElFZE9WU0JIWlc1bGNtRnNJRkIxWW14cFl5Qk1hV05sYm5ObElHRnpJSEIxWW14cGMyaGxaQ0JpZVZ4dUlDb2dJSFJvWlNCR2NtVmxJRk52Wm5SM1lYSmxJRVp2ZFc1a1lYUnBiMjRzSUdWcGRHaGxjaUIyWlhKemFXOXVJRE1nYjJZZ2RHaGxJRXhwWTJWdWMyVXNJRzl5WEc0Z0tpQWdLR0YwSUhsdmRYSWdiM0IwYVc5dUtTQmhibmtnYkdGMFpYSWdkbVZ5YzJsdmJpNWNiaUFxWEc0Z0tpQWdWR2hwY3lCd2NtOW5jbUZ0SUdseklHUnBjM1J5YVdKMWRHVmtJR2x1SUhSb1pTQm9iM0JsSUhSb1lYUWdhWFFnZDJsc2JDQmlaU0IxYzJWbWRXd3NYRzRnS2lBZ1luVjBJRmRKVkVoUFZWUWdRVTVaSUZkQlVsSkJUbFJaT3lCM2FYUm9iM1YwSUdWMlpXNGdkR2hsSUdsdGNHeHBaV1FnZDJGeWNtRnVkSGtnYjJaY2JpQXFJQ0JOUlZKRFNFRk9WRUZDU1V4SlZGa2diM0lnUmtsVVRrVlRVeUJHVDFJZ1FTQlFRVkpVU1VOVlRFRlNJRkJWVWxCUFUwVXVJQ0JUWldVZ2RHaGxYRzRnS2lBZ1IwNVZJRWRsYm1WeVlXd2dVSFZpYkdsaklFeHBZMlZ1YzJVZ1ptOXlJRzF2Y21VZ1pHVjBZV2xzY3k1Y2JpQXFYRzRnS2lBZ1dXOTFJSE5vYjNWc1pDQm9ZWFpsSUhKbFkyVnBkbVZrSUdFZ1kyOXdlU0J2WmlCMGFHVWdSMDVWSUVkbGJtVnlZV3dnVUhWaWJHbGpJRXhwWTJWdWMyVmNiaUFxSUNCaGJHOXVaeUIzYVhSb0lIUm9hWE1nY0hKdlozSmhiUzRnSUVsbUlHNXZkQ3dnYzJWbElEeG9kSFJ3T2k4dmQzZDNMbWR1ZFM1dmNtY3ZiR2xqWlc1elpYTXZQaTVjYmlBcUwxeHVYRzVjYm5aaGNpQkNhVzVoY25sVGIyTnJaWFFnUFNCbWRXNWpkR2x2YmlncElIdGNiaUFnTHk4Z1ZIVnliaUJ2YmlCemRISnBZM1FnYlc5a1pTNWNiaUFnSjNWelpTQnpkSEpwWTNRbk8xeHVYRzRnSUM4dklFbHVZMngxWkdVZ2RHaGxJR1JsY0dWdVpHVnVZMmxsY3k1Y2JpQWdMeW9xWEc0Z0tpQmllWFJsTFdKMVptWmxjaUIyTVM0d0xqTmNiaUFxSUVOdmNIbHlhV2RvZENBb1l5a2dNakF4TWkweU1ERTFJRlJwYlNCTGRYSjJaWEp6SUR4MGFXMUFiVzl2Ym5Od2FHVnlaUzV1WlhRK1hHNGdLbHh1SUNvZ1YzSmhjSEJsY2lCbWIzSWdTbUYyWVZOamNtbHdkQ2R6SUVGeWNtRjVRblZtWm1WeUwwUmhkR0ZXYVdWM0xseHVJQ3BjYmlBcUlFeHBZMlZ1YzJWa0lIVnVaR1Z5SUhSb1pTQk5TVlFnYkdsalpXNXpaUzVjYmlBcUwxeHVYRzRoWm5WdVkzUnBiMjRvWlNsN2FXWW9YQ0p2WW1wbFkzUmNJajA5ZEhsd1pXOW1JR1Y0Y0c5eWRITXBiVzlrZFd4bExtVjRjRzl5ZEhNOVpTZ3BPMlZzYzJVZ2FXWW9YQ0ptZFc1amRHbHZibHdpUFQxMGVYQmxiMllnWkdWbWFXNWxKaVprWldacGJtVXVZVzFrS1dSbFptbHVaU2hsS1R0bGJITmxlM1poY2lCbU8xd2lkVzVrWldacGJtVmtYQ0loUFhSNWNHVnZaaUIzYVc1a2IzYy9aajEzYVc1a2IzYzZYQ0oxYm1SbFptbHVaV1JjSWlFOWRIbHdaVzltSUdkc2IySmhiRDltUFdkc2IySmhiRHBjSW5WdVpHVm1hVzVsWkZ3aUlUMTBlWEJsYjJZZ2MyVnNaaVltS0dZOWMyVnNaaWtzWmk1Q2VYUmxRblZtWm1WeVBXVW9LWDE5S0daMWJtTjBhVzl1S0NsN2RtRnlJR1JsWm1sdVpTeHRiMlIxYkdVc1pYaHdiM0owY3p0eVpYUjFjbTRnS0daMWJtTjBhVzl1SUdVb2RDeHVMSElwZTJaMWJtTjBhVzl1SUhNb2J5eDFLWHRwWmlnaGJsdHZYU2w3YVdZb0lYUmJiMTBwZTNaaGNpQmhQWFI1Y0dWdlppQnlaWEYxYVhKbFBUMWNJbVoxYm1OMGFXOXVYQ0ltSm5KbGNYVnBjbVU3YVdZb0lYVW1KbUVwY21WMGRYSnVJR0VvYnl3aE1DazdhV1lvYVNseVpYUjFjbTRnYVNodkxDRXdLVHQwYUhKdmR5QnVaWGNnUlhKeWIzSW9YQ0pEWVc1dWIzUWdabWx1WkNCdGIyUjFiR1VnSjF3aUsyOHJYQ0luWENJcGZYWmhjaUJtUFc1YmIxMDllMlY0Y0c5eWRITTZlMzE5TzNSYmIxMWJNRjB1WTJGc2JDaG1MbVY0Y0c5eWRITXNablZ1WTNScGIyNG9aU2w3ZG1GeUlHNDlkRnR2WFZzeFhWdGxYVHR5WlhSMWNtNGdjeWh1UDI0NlpTbDlMR1lzWmk1bGVIQnZjblJ6TEdVc2RDeHVMSElwZlhKbGRIVnliaUJ1VzI5ZExtVjRjRzl5ZEhOOWRtRnlJR2s5ZEhsd1pXOW1JSEpsY1hWcGNtVTlQVndpWm5WdVkzUnBiMjVjSWlZbWNtVnhkV2x5WlR0bWIzSW9kbUZ5SUc4OU1EdHZQSEl1YkdWdVozUm9PMjhyS3lsektISmJiMTBwTzNKbGRIVnliaUJ6ZlNrb2V6RTZXMloxYm1OMGFXOXVLRjlrWlhKbGNWOHNiVzlrZFd4bExHVjRjRzl5ZEhNcGUxeHVKM1Z6WlNCemRISnBZM1FuTzF4dVhHNTJZWElnWDJOeVpXRjBaVU5zWVhOeklEMGdLR1oxYm1OMGFXOXVJQ2dwSUhzZ1puVnVZM1JwYjI0Z1pHVm1hVzVsVUhKdmNHVnlkR2xsY3loMFlYSm5aWFFzSUhCeWIzQnpLU0I3SUdadmNpQW9kbUZ5SUdrZ1BTQXdPeUJwSUR3Z2NISnZjSE11YkdWdVozUm9PeUJwS3lzcElIc2dkbUZ5SUdSbGMyTnlhWEIwYjNJZ1BTQndjbTl3YzF0cFhUc2daR1Z6WTNKcGNIUnZjaTVsYm5WdFpYSmhZbXhsSUQwZ1pHVnpZM0pwY0hSdmNpNWxiblZ0WlhKaFlteGxJSHg4SUdaaGJITmxPeUJrWlhOamNtbHdkRzl5TG1OdmJtWnBaM1Z5WVdKc1pTQTlJSFJ5ZFdVN0lHbG1JQ2duZG1Gc2RXVW5JR2x1SUdSbGMyTnlhWEIwYjNJcElHUmxjMk55YVhCMGIzSXVkM0pwZEdGaWJHVWdQU0IwY25WbE95QlBZbXBsWTNRdVpHVm1hVzVsVUhKdmNHVnlkSGtvZEdGeVoyVjBMQ0JrWlhOamNtbHdkRzl5TG10bGVTd2daR1Z6WTNKcGNIUnZjaWs3SUgwZ2ZTQnlaWFIxY200Z1puVnVZM1JwYjI0Z0tFTnZibk4wY25WamRHOXlMQ0J3Y205MGIxQnliM0J6TENCemRHRjBhV05RY205d2N5a2dleUJwWmlBb2NISnZkRzlRY205d2N5a2daR1ZtYVc1bFVISnZjR1Z5ZEdsbGN5aERiMjV6ZEhKMVkzUnZjaTV3Y205MGIzUjVjR1VzSUhCeWIzUnZVSEp2Y0hNcE95QnBaaUFvYzNSaGRHbGpVSEp2Y0hNcElHUmxabWx1WlZCeWIzQmxjblJwWlhNb1EyOXVjM1J5ZFdOMGIzSXNJSE4wWVhScFkxQnliM0J6S1RzZ2NtVjBkWEp1SUVOdmJuTjBjblZqZEc5eU95QjlPeUI5S1NncE8xeHVYRzVtZFc1amRHbHZiaUJmWTJ4aGMzTkRZV3hzUTJobFkyc29hVzV6ZEdGdVkyVXNJRU52Ym5OMGNuVmpkRzl5S1NCN0lHbG1JQ2doS0dsdWMzUmhibU5sSUdsdWMzUmhibU5sYjJZZ1EyOXVjM1J5ZFdOMGIzSXBLU0I3SUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owTmhibTV2ZENCallXeHNJR0VnWTJ4aGMzTWdZWE1nWVNCbWRXNWpkR2x2YmljcE95QjlJSDFjYmx4dWRtRnlJRUo1ZEdWQ2RXWm1aWElnUFNBb1puVnVZM1JwYjI0Z0tDa2dlMXh1WEc0Z0lDOHZJRU55WldGMFpYTWdZU0J1WlhjZ1FubDBaVUoxWm1abGNseHVJQ0F2THlBdElHWnliMjBnWjJsMlpXNGdjMjkxY21ObElDaGhjM04xYldWa0lIUnZJR0psSUc1MWJXSmxjaUJ2WmlCaWVYUmxjeUIzYUdWdUlHNTFiV1Z5YVdNcFhHNGdJQzh2SUMwZ2QybDBhQ0JuYVhabGJpQmllWFJsSUc5eVpHVnlJQ2hrWldaaGRXeDBjeUIwYnlCaWFXY3RaVzVrYVdGdUtWeHVJQ0F2THlBdElIZHBkR2dnWjJsMlpXNGdhVzF3YkdsamFYUWdaM0p2ZDNSb0lITjBjbUYwWldkNUlDaGtaV1poZFd4MGN5QjBieUJtWVd4elpTbGNibHh1SUNCbWRXNWpkR2x2YmlCQ2VYUmxRblZtWm1WeUtDa2dlMXh1SUNBZ0lIWmhjaUJ6YjNWeVkyVWdQU0JoY21kMWJXVnVkSE5iTUYwZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSURBZ09pQmhjbWQxYldWdWRITmJNRjA3WEc0Z0lDQWdkbUZ5SUc5eVpHVnlJRDBnWVhKbmRXMWxiblJ6V3pGZElEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbU52Ym5OMGNuVmpkRzl5TGtKSlIxOUZUa1JKUVU0Z09pQmhjbWQxYldWdWRITmJNVjA3WEc0Z0lDQWdkbUZ5SUdsdGNHeHBZMmwwUjNKdmQzUm9JRDBnWVhKbmRXMWxiblJ6V3pKZElEMDlQU0IxYm1SbFptbHVaV1FnUHlCbVlXeHpaU0E2SUdGeVozVnRaVzUwYzFzeVhUdGNibHh1SUNBZ0lGOWpiR0Z6YzBOaGJHeERhR1ZqYXloMGFHbHpMQ0JDZVhSbFFuVm1abVZ5S1R0Y2JseHVJQ0FnSUM4dklFaHZiR1J6SUdKMVptWmxjbHh1SUNBZ0lIUm9hWE11WDJKMVptWmxjaUE5SUc1MWJHdzdYRzVjYmlBZ0lDQXZMeUJJYjJ4a2N5QnlZWGNnWW5WbVptVnlYRzRnSUNBZ2RHaHBjeTVmY21GM0lEMGdiblZzYkR0Y2JseHVJQ0FnSUM4dklFaHZiR1J6SUdsdWRHVnlibUZzSUhacFpYY2dabTl5SUhKbFlXUnBibWN2ZDNKcGRHbHVaMXh1SUNBZ0lIUm9hWE11WDNacFpYY2dQU0J1ZFd4c08xeHVYRzRnSUNBZ0x5OGdTRzlzWkhNZ1lubDBaU0J2Y21SbGNseHVJQ0FnSUhSb2FYTXVYMjl5WkdWeUlEMGdJU0Z2Y21SbGNqdGNibHh1SUNBZ0lDOHZJRWh2YkdSeklHbHRjR3hwWTJsMElHZHliM2QwYUNCemRISmhkR1ZuZVZ4dUlDQWdJSFJvYVhNdVgybHRjR3hwWTJsMFIzSnZkM1JvSUQwZ0lTRnBiWEJzYVdOcGRFZHliM2QwYUR0Y2JseHVJQ0FnSUM4dklFaHZiR1J6SUhKbFlXUXZkM0pwZEdVZ2FXNWtaWGhjYmlBZ0lDQjBhR2x6TGw5cGJtUmxlQ0E5SURBN1hHNWNiaUFnSUNBdkx5QkJkSFJsYlhCMElIUnZJR1Y0ZEhKaFkzUWdZU0JpZFdabVpYSWdabkp2YlNCbmFYWmxiaUJ6YjNWeVkyVmNiaUFnSUNCMllYSWdZblZtWm1WeUlEMGdkR2hwY3k1ZlpYaDBjbUZqZEVKMVptWmxjaWh6YjNWeVkyVXNJSFJ5ZFdVcE8xeHVYRzRnSUNBZ0x5OGdUMjRnWm1GcGJIVnlaU3dnWVhOemRXMWxJSE52ZFhKalpTQnBjeUJoSUhCeWFXMXBkR2wyWlNCcGJtUnBZMkYwYVc1bklIUm9aU0J1ZFcxaVpYSWdiMllnWW5sMFpYTmNiaUFnSUNCcFppQW9JV0oxWm1abGNpa2dlMXh1SUNBZ0lDQWdZblZtWm1WeUlEMGdibVYzSUVGeWNtRjVRblZtWm1WeUtITnZkWEpqWlNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1FYTnphV2R1SUc1bGR5QmlkV1ptWlhKY2JpQWdJQ0IwYUdsekxtSjFabVpsY2lBOUlHSjFabVpsY2p0Y2JpQWdmVnh1WEc0Z0lGOWpjbVZoZEdWRGJHRnpjeWhDZVhSbFFuVm1abVZ5TENCYmUxeHVJQ0FnSUd0bGVUb2dKMTl6WVc1cGRHbDZaVWx1WkdWNEp5eGNibHh1SUNBZ0lDOHZJRk5oYm1sMGFYcGxjeUJ5WldGa0wzZHlhWFJsSUdsdVpHVjRYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUY5ellXNXBkR2w2WlVsdVpHVjRLQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tIUm9hWE11WDJsdVpHVjRJRHdnTUNrZ2UxeHVJQ0FnSUNBZ0lDQjBhR2x6TGw5cGJtUmxlQ0E5SURBN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnSUNCcFppQW9kR2hwY3k1ZmFXNWtaWGdnUGlCMGFHbHpMbXhsYm1kMGFDa2dlMXh1SUNBZ0lDQWdJQ0IwYUdsekxsOXBibVJsZUNBOUlIUm9hWE11YkdWdVozUm9PMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMTlsZUhSeVlXTjBRblZtWm1WeUp5eGNibHh1SUNBZ0lDOHZJRVY0ZEhKaFkzUnpJR0oxWm1abGNpQm1jbTl0SUdkcGRtVnVJSE52ZFhKalpTQmhibVFnYjNCMGFXOXVZV3hzZVNCamJHOXVaWE1nYVhSY2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdYMlY0ZEhKaFkzUkNkV1ptWlhJb2MyOTFjbU5sS1NCN1hHNGdJQ0FnSUNCMllYSWdZMnh2Ym1VZ1BTQmhjbWQxYldWdWRITmJNVjBnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JR1poYkhObElEb2dZWEpuZFcxbGJuUnpXekZkTzF4dVhHNGdJQ0FnSUNBdkx5QlhhR1YwYUdWeUlITnZkWEpqWlNCcGN5QmhJR0o1ZEdVdFlYZGhjbVVnYjJKcVpXTjBYRzRnSUNBZ0lDQnBaaUFvYzI5MWNtTmxJQ1ltSUhSNWNHVnZaaUJ6YjNWeVkyVXVZbmwwWlV4bGJtZDBhQ0FoUFQwZ0ozVnVaR1ZtYVc1bFpDY3BJSHRjYmx4dUlDQWdJQ0FnSUNBdkx5QkVaWFJsY20xcGJtVWdkMmhsZEdobGNpQnpiM1Z5WTJVZ2FYTWdZU0IyYVdWM0lHOXlJR0VnY21GM0lHSjFabVpsY2x4dUlDQWdJQ0FnSUNCcFppQW9kSGx3Wlc5bUlITnZkWEpqWlM1aWRXWm1aWElnSVQwOUlDZDFibVJsWm1sdVpXUW5LU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdOc2IyNWxJRDhnYzI5MWNtTmxMbUoxWm1abGNpNXpiR2xqWlNnd0tTQTZJSE52ZFhKalpTNWlkV1ptWlhJN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHTnNiMjVsSUQ4Z2MyOTFjbU5sTG5Oc2FXTmxLREFwSURvZ2MyOTFjbU5sTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVjJobGRHaGxjaUJ6YjNWeVkyVWdhWE1nWVNCelpYRjFaVzVqWlNCdlppQmllWFJsYzF4dUlDQWdJQ0FnZlNCbGJITmxJR2xtSUNoemIzVnlZMlVnSmlZZ2RIbHdaVzltSUhOdmRYSmpaUzVzWlc1bmRHZ2dJVDA5SUNkMWJtUmxabWx1WldRbktTQjdYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1FXeDBhRzkxWjJnZ1ZXbHVkRGhCY25KaGVTZHpJR052Ym5OMGNuVmpkRzl5SUhOMVkyTmxaV1J6SUhkb1pXNGdaMmwyWlc0Z2MzUnlhVzVuY3l4Y2JpQWdJQ0FnSUNBZ0x5OGdhWFFnWkc5bGN5QnViM1FnWTI5eWNtVmpkR3g1SUdsdWMzUmhiblJwWVhSbElIUm9aU0JpZFdabVpYSmNiaUFnSUNBZ0lDQWdhV1lnS0hOdmRYSmpaUzVqYjI1emRISjFZM1J2Y2lBOVBTQlRkSEpwYm1jcElIdGNiaUFnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHNWxkeUJWYVc1ME9FRnljbUY1S0hOdmRYSmpaU2t1WW5WbVptVnlPMXh1SUNBZ0lDQWdJQ0I5SUdOaGRHTm9JQ2hsY25KdmNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUhKbGRIVnliaUJ1ZFd4c08xeHVJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnTHk4Z1RtOGdZblZtWm1WeUlHWnZkVzVrWEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNGdiblZzYkR0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkbWNtOXVkQ2NzWEc1Y2JpQWdJQ0F2THlCVFpYUnpJR2x1WkdWNElIUnZJR1p5YjI1MElHOW1JSFJvWlNCaWRXWm1aWEpjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z1puSnZiblFvS1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlwYm1SbGVDQTlJREE3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkbGJtUW5MRnh1WEc0Z0lDQWdMeThnVTJWMGN5QnBibVJsZUNCMGJ5QmxibVFnYjJZZ2RHaGxJR0oxWm1abGNseHVJQ0FnSUhaaGJIVmxPaUJtZFc1amRHbHZiaUJsYm1Rb0tTQjdYRzRnSUNBZ0lDQjBhR2x6TGw5cGJtUmxlQ0E5SUhSb2FYTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVJQ0I5TENCN1hHNGdJQ0FnYTJWNU9pQW5jMlZsYXljc1hHNWNiaUFnSUNBdkx5QlRaV1ZyY3lCbmFYWmxiaUJ1ZFcxaVpYSWdiMllnWW5sMFpYTmNiaUFnSUNBdkx5Qk9iM1JsT2lCQ1lXTnJkMkZ5WkhNZ2MyVmxhMmx1WnlCcGN5QnpkWEJ3YjNKMFpXUmNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYzJWbGF5Z3BJSHRjYmlBZ0lDQWdJSFpoY2lCaWVYUmxjeUE5SUdGeVozVnRaVzUwYzFzd1hTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z01TQTZJR0Z5WjNWdFpXNTBjMXN3WFR0Y2JseHVJQ0FnSUNBZ2RHaHBjeTVwYm1SbGVDQXJQU0JpZVhSbGN6dGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKM0psWVdRbkxGeHVYRzRnSUNBZ0x5OGdVbVZoWkhNZ2MyVnhkV1Z1WTJVZ2IyWWdaMmwyWlc0Z2JuVnRZbVZ5SUc5bUlHSjVkR1Z6SUNoa1pXWmhkV3gwY3lCMGJ5QnVkVzFpWlhJZ2IyWWdZbmwwWlhNZ1lYWmhhV3hoWW14bEtWeHVJQ0FnSUhaaGJIVmxPaUJtZFc1amRHbHZiaUJ5WldGa0tDa2dlMXh1SUNBZ0lDQWdkbUZ5SUdKNWRHVnpJRDBnWVhKbmRXMWxiblJ6V3pCZElEMDlQU0IxYm1SbFptbHVaV1FnUHlCMGFHbHpMbUYyWVdsc1lXSnNaU0E2SUdGeVozVnRaVzUwYzFzd1hUdGNibHh1SUNBZ0lDQWdhV1lnS0dKNWRHVnpJRDRnZEdocGN5NWhkbUZwYkdGaWJHVXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2REWVc1dWIzUWdjbVZoWkNBbklDc2dZbmwwWlhNZ0t5QW5JR0o1ZEdVb2N5a3NJQ2NnS3lCMGFHbHpMbUYyWVdsc1lXSnNaU0FySUNjZ1lYWmhhV3hoWW14bEp5azdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2xtSUNoaWVYUmxjeUE4UFNBd0tTQjdYRzRnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJTWVc1blpVVnljbTl5S0NkSmJuWmhiR2xrSUc1MWJXSmxjaUJ2WmlCaWVYUmxjeUFuSUNzZ1lubDBaWE1wTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMllYSWdkbUZzZFdVZ1BTQnVaWGNnUW5sMFpVSjFabVpsY2loMGFHbHpMbDlpZFdabVpYSXVjMnhwWTJVb2RHaHBjeTVmYVc1a1pYZ3NJSFJvYVhNdVgybHVaR1Y0SUNzZ1lubDBaWE1wTENCMGFHbHpMbTl5WkdWeUtUdGNiaUFnSUNBZ0lIUm9hWE11WDJsdVpHVjRJQ3M5SUdKNWRHVnpPMXh1SUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTzF4dUlDQWdJSDFjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjNkeWFYUmxKeXhjYmx4dUlDQWdJQzh2SUZkeWFYUmxjeUJ6WlhGMVpXNWpaU0J2WmlCaWVYUmxjMXh1SUNBZ0lIWmhiSFZsT2lCbWRXNWpkR2x2YmlCM2NtbDBaU2h6WlhGMVpXNWpaU2tnZTF4dUlDQWdJQ0FnZG1GeUlIWnBaWGM3WEc1Y2JpQWdJQ0FnSUM4dklFVnVjM1Z5WlNCM1pTZHlaU0JrWldGc2FXNW5JSGRwZEdnZ1lTQlZhVzUwT0VGeWNtRjVJSFpwWlhkY2JpQWdJQ0FnSUdsbUlDZ2hLSE5sY1hWbGJtTmxJR2x1YzNSaGJtTmxiMllnVldsdWREaEJjbkpoZVNrcElIdGNibHh1SUNBZ0lDQWdJQ0F2THlCRmVIUnlZV04wSUhSb1pTQmlkV1ptWlhJZ1puSnZiU0IwYUdVZ2MyVnhkV1Z1WTJWY2JpQWdJQ0FnSUNBZ2RtRnlJR0oxWm1abGNpQTlJSFJvYVhNdVgyVjRkSEpoWTNSQ2RXWm1aWElvYzJWeGRXVnVZMlVwTzF4dUlDQWdJQ0FnSUNCcFppQW9JV0oxWm1abGNpa2dlMXh1SUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCVWVYQmxSWEp5YjNJb0owTmhibTV2ZENCM2NtbDBaU0FuSUNzZ2MyVnhkV1Z1WTJVZ0t5QW5MQ0J1YjNRZ1lTQnpaWEYxWlc1alpTY3BPMXh1SUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdRVzVrSUdOeVpXRjBaU0JoSUc1bGR5QlZhVzUwT0VGeWNtRjVJSFpwWlhjZ1ptOXlJR2wwWEc0Z0lDQWdJQ0FnSUhacFpYY2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaGlkV1ptWlhJcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RtbGxkeUE5SUhObGNYVmxibU5sTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCMllYSWdZWFpoYVd4aFlteGxJRDBnZEdocGN5NWhkbUZwYkdGaWJHVTdYRzRnSUNBZ0lDQnBaaUFvZG1sbGR5NWllWFJsVEdWdVozUm9JRDRnWVhaaGFXeGhZbXhsS1NCN1hHNGdJQ0FnSUNBZ0lHbG1JQ2gwYUdsekxsOXBiWEJzYVdOcGRFZHliM2QwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdVlYQndaVzVrS0hacFpYY3VZbmwwWlV4bGJtZDBhQ0F0SUdGMllXbHNZV0pzWlNrN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZERZVzV1YjNRZ2QzSnBkR1VnSnlBcklITmxjWFZsYm1ObElDc2dKeUIxYzJsdVp5QW5JQ3NnZG1sbGR5NWllWFJsVEdWdVozUm9JQ3NnSnlCaWVYUmxLSE1wTENBbklDc2dkR2hwY3k1aGRtRnBiR0ZpYkdVZ0t5QW5JR0YyWVdsc1lXSnNaU2NwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIUm9hWE11WDNKaGR5NXpaWFFvZG1sbGR5d2dkR2hwY3k1ZmFXNWtaWGdwTzF4dUlDQWdJQ0FnZEdocGN5NWZhVzVrWlhnZ0t6MGdkbWxsZHk1aWVYUmxUR1Z1WjNSb08xeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTTdYRzRnSUNBZ2ZWeHVJQ0I5TENCN1hHNGdJQ0FnYTJWNU9pQW5jbVZoWkZOMGNtbHVaeWNzWEc1Y2JpQWdJQ0F2THlCU1pXRmtjeUJWVkVZdE9DQmxibU52WkdWa0lITjBjbWx1WnlCdlppQm5hWFpsYmlCdWRXMWlaWElnYjJZZ1lubDBaWE1nS0dSbFptRjFiSFJ6SUhSdklHNTFiV0psY2lCdlppQmllWFJsY3lCaGRtRnBiR0ZpYkdVcFhHNGdJQ0FnTHk5Y2JpQWdJQ0F2THlCQ1lYTmxaQ0J2YmlCRVlYWnBaQ0JHYkdGdVlXZGhiaWR6SUVKMVptWmxjbFpwWlhjZ0tHaDBkSEJ6T2k4dloybDBhSFZpTG1OdmJTOWtZWFpwWkdac1lXNWhaMkZ1TDBKMVptWmxjbFpwWlhjdllteHZZaTl0WVhOMFpYSXZRblZtWm1WeVZtbGxkeTVxY3k4dlRERTVOU2xjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2NtVmhaRk4wY21sdVp5Z3BJSHRjYmlBZ0lDQWdJSFpoY2lCaWVYUmxjeUE5SUdGeVozVnRaVzUwYzFzd1hTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z2RHaHBjeTVoZG1GcGJHRmliR1VnT2lCaGNtZDFiV1Z1ZEhOYk1GMDdYRzVjYmlBZ0lDQWdJR2xtSUNoaWVYUmxjeUErSUhSb2FYTXVZWFpoYVd4aFlteGxLU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduUTJGdWJtOTBJSEpsWVdRZ0p5QXJJR0o1ZEdWeklDc2dKeUJpZVhSbEtITXBMQ0FuSUNzZ2RHaHBjeTVoZG1GcGJHRmliR1VnS3lBbklHRjJZV2xzWVdKc1pTY3BPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0JwWmlBb1lubDBaWE1nUEQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnVW1GdVoyVkZjbkp2Y2lnblNXNTJZV3hwWkNCdWRXMWlaWElnYjJZZ1lubDBaWE1nSnlBcklHSjVkR1Z6S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0x5OGdURzlqWVd3Z2NtVm1aWEpsYm1ObFhHNGdJQ0FnSUNCMllYSWdjbUYzSUQwZ2RHaHBjeTVmY21GM08xeHVYRzRnSUNBZ0lDQXZMeUJJYjJ4a2N5QmtaV052WkdWa0lHTm9ZWEpoWTNSbGNuTmNiaUFnSUNBZ0lIWmhjaUJqYjJSbGNHOXBiblJ6SUQwZ1cxMDdYRzVjYmlBZ0lDQWdJQzh2SUVsdVpHVjRJR2x1ZEc4Z1kyOWtaWEJ2YVc1MGMxeHVJQ0FnSUNBZ2RtRnlJR01nUFNBd08xeHVYRzRnSUNBZ0lDQXZMeUJDZVhSbGMxeHVJQ0FnSUNBZ2RtRnlJR0l4TEZ4dUlDQWdJQ0FnSUNBZ0lHSXlMRnh1SUNBZ0lDQWdJQ0FnSUdJekxGeHVJQ0FnSUNBZ0lDQWdJR0kwSUQwZ2JuVnNiRHRjYmx4dUlDQWdJQ0FnTHk4Z1ZHRnlaMlYwSUdsdVpHVjRYRzRnSUNBZ0lDQjJZWElnZEdGeVoyVjBJRDBnZEdocGN5NWZhVzVrWlhnZ0t5QmllWFJsY3p0Y2JseHVJQ0FnSUNBZ2QyaHBiR1VnS0hSb2FYTXVYMmx1WkdWNElEd2dkR0Z5WjJWMEtTQjdYRzRnSUNBZ0lDQWdJR0l4SUQwZ2NtRjNXM1JvYVhNdVgybHVaR1Y0WFR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvWWpFZ1BDQXhNamdwSUh0Y2JpQWdJQ0FnSUNBZ0lDQXZMeUJQYm1VZ1lubDBaU0J6WlhGMVpXNWpaVnh1SUNBZ0lDQWdJQ0FnSUdOdlpHVndiMmx1ZEhOYll5c3JYU0E5SUdJeE8xeHVJQ0FnSUNBZ0lDQWdJSFJvYVhNdVgybHVaR1Y0S3lzN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9ZakVnUENBeE9UUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjFWdVpYaHdaV04wWldRZ1kyOXVkR2x1ZFdGMGFXOXVJR0o1ZEdVbktUdGNiaUFnSUNBZ0lDQWdmU0JsYkhObElHbG1JQ2hpTVNBOElESXlOQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJRlIzYnlCaWVYUmxJSE5sY1hWbGJtTmxYRzRnSUNBZ0lDQWdJQ0FnWWpJZ1BTQnlZWGRiZEdocGN5NWZhVzVrWlhnZ0t5QXhYVHRjYmx4dUlDQWdJQ0FnSUNBZ0lHbG1JQ2hpTWlBOElERXlPQ0I4ZkNCaU1pQStJREU1TVNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUVWeWNtOXlLQ2RDWVdRZ1kyOXVkR2x1ZFdGMGFXOXVJR0o1ZEdVbktUdGNiaUFnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQmpiMlJsY0c5cGJuUnpXMk1ySzEwZ1BTQW9LR0l4SUNZZ016RXBJRHc4SURZcElDc2dLR0l5SUNZZ05qTXBPMXh1WEc0Z0lDQWdJQ0FnSUNBZ2RHaHBjeTVmYVc1a1pYZ2dLejBnTWp0Y2JpQWdJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaGlNU0E4SURJME1Da2dlMXh1WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdWR2h5WldVZ1lubDBaU0J6WlhGMVpXNWpaVnh1SUNBZ0lDQWdJQ0FnSUdJeUlEMGdjbUYzVzNSb2FYTXVYMmx1WkdWNElDc2dNVjA3WEc1Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWWpJZ1BDQXhNamdnZkh3Z1lqSWdQaUF4T1RFcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduUW1Ga0lHTnZiblJwYm5WaGRHbHZiaUJpZVhSbEp5azdYRzRnSUNBZ0lDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBZ0lDQWdZak1nUFNCeVlYZGJkR2hwY3k1ZmFXNWtaWGdnS3lBeVhUdGNibHh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGlNeUE4SURFeU9DQjhmQ0JpTXlBK0lERTVNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZENZV1FnWTI5dWRHbHVkV0YwYVc5dUlHSjVkR1VuS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCamIyUmxjRzlwYm5SelcyTXJLMTBnUFNBb0tHSXhJQ1lnTVRVcElEdzhJREV5S1NBcklDZ29ZaklnSmlBMk15a2dQRHdnTmlrZ0t5QW9Zak1nSmlBMk15azdYRzVjYmlBZ0lDQWdJQ0FnSUNCMGFHbHpMbDlwYm1SbGVDQXJQU0F6TzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tHSXhJRHdnTWpRMUtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1JtOTFjaUJpZVhSbElITmxjWFZsYm1ObFhHNGdJQ0FnSUNBZ0lDQWdZaklnUFNCeVlYZGJkR2hwY3k1ZmFXNWtaWGdnS3lBeFhUdGNibHh1SUNBZ0lDQWdJQ0FnSUdsbUlDaGlNaUE4SURFeU9DQjhmQ0JpTWlBK0lERTVNU2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZENZV1FnWTI5dWRHbHVkV0YwYVc5dUlHSjVkR1VuS1R0Y2JpQWdJQ0FnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQ0FnSUNCaU15QTlJSEpoZDF0MGFHbHpMbDlwYm1SbGVDQXJJREpkTzF4dVhHNGdJQ0FnSUNBZ0lDQWdhV1lnS0dJeklEd2dNVEk0SUh4OElHSXpJRDRnTVRreEtTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjBKaFpDQmpiMjUwYVc1MVlYUnBiMjRnWW5sMFpTY3BPMXh1SUNBZ0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQWdJR0kwSUQwZ2NtRjNXM1JvYVhNdVgybHVaR1Y0SUNzZ00xMDdYRzVjYmlBZ0lDQWdJQ0FnSUNCcFppQW9ZalFnUENBeE1qZ2dmSHdnWWpRZ1BpQXhPVEVwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJSFJvY205M0lHNWxkeUJGY25KdmNpZ25RbUZrSUdOdmJuUnBiblZoZEdsdmJpQmllWFJsSnlrN1hHNGdJQ0FnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNBZ2RtRnlJR053SUQwZ0tDaGlNU0FtSURjcElEdzhJREU0S1NBcklDZ29ZaklnSmlBMk15a2dQRHdnTVRJcElDc2dLQ2hpTXlBbUlEWXpLU0E4UENBMktTQXJJQ2hpTkNBbUlEWXpLVHRjYmlBZ0lDQWdJQ0FnSUNCamNDQXRQU0EyTlRVek5qdGNibHh1SUNBZ0lDQWdJQ0FnSUM4dklGUjFjbTRnWTI5a1pTQndiMmx1ZENCcGJuUnZJSFIzYnlCemRYSnliMmRoZEdVZ2NHRnBjbk5jYmlBZ0lDQWdJQ0FnSUNCamIyUmxjRzlwYm5SelcyTXJLMTBnUFNBMU5USTVOaUFySUNnb1kzQWdKaUF4TURRM05UVXlLU0ErUGo0Z01UQXBPMXh1SUNBZ0lDQWdJQ0FnSUdOdlpHVndiMmx1ZEhOYll5c3JYU0E5SURVMk16SXdJQ3NnS0dOd0lDWWdNVEF5TXlrN1hHNWNiaUFnSUNBZ0lDQWdJQ0IwYUdsekxsOXBibVJsZUNBclBTQTBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduU1d4c1pXZGhiQ0JpZVhSbEp5azdYRzRnSUNBZ0lDQWdJSDFjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1FuSnZkM05sY25NZ2JXRjVJR2hoZG1VZ2FHRnlaR052WkdWa0lHOXlJR2x0Y0d4cFkybDBJR3hwYldsMGN5QnZiaUIwYUdVZ1lYSnlZWGtnYkdWdVozUm9JSGRvWlc0Z1lYQndiSGxwYm1jZ1lTQm1kVzVqZEdsdmJseHVJQ0FnSUNBZ0x5OGdVMlZsT2lCb2RIUndjem92TDJSbGRtVnNiM0JsY2k1dGIzcHBiR3hoTG05eVp5OWxiaTlLWVhaaFUyTnlhWEIwTDFKbFptVnlaVzVqWlM5SGJHOWlZV3hmVDJKcVpXTjBjeTlHZFc1amRHbHZiaTloY0hCc2VTOHZZWEJ3YkhsZllXNWtYMkoxYVd4MExXbHVYMloxYm1OMGFXOXVjMXh1SUNBZ0lDQWdkbUZ5SUd4cGJXbDBJRDBnTVNBOFBDQXhOanRjYmlBZ0lDQWdJSFpoY2lCc1pXNW5kR2dnUFNCamIyUmxjRzlwYm5SekxteGxibWQwYUR0Y2JpQWdJQ0FnSUdsbUlDaHNaVzVuZEdnZ1BDQnNhVzFwZENrZ2UxeHVJQ0FnSUNBZ0lDQnlaWFIxY200Z1UzUnlhVzVuTG1aeWIyMURhR0Z5UTI5a1pTNWhjSEJzZVNoVGRISnBibWNzSUdOdlpHVndiMmx1ZEhNcE8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2RtRnlJR05vWVhKeklEMGdXMTA3WEc0Z0lDQWdJQ0FnSUhaaGNpQnBJRDBnTUR0Y2JpQWdJQ0FnSUNBZ2QyaHBiR1VnS0drZ1BDQnNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdJQ0JqYUdGeWN5NXdkWE5vS0ZOMGNtbHVaeTVtY205dFEyaGhja052WkdVdVlYQndiSGtvVTNSeWFXNW5MQ0JqYjJSbGNHOXBiblJ6TG5Oc2FXTmxLR2tzSUdrZ0t5QnNhVzFwZENrcEtUdGNiaUFnSUNBZ0lDQWdJQ0JwSUNzOUlHeHBiV2wwTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCamFHRnljeTVxYjJsdUtDY25LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgwc0lIdGNiaUFnSUNCclpYazZJQ2QzY21sMFpWTjBjbWx1Wnljc1hHNWNiaUFnSUNBdkx5QlhjbWwwWlhNZ1ZWUkdMVGdnWlc1amIyUmxaQ0J6ZEhKcGJtZGNiaUFnSUNBdkx5Qk9iM1JsT2lCRWIyVnpJRzV2ZENCM2NtbDBaU0J6ZEhKcGJtY2diR1Z1WjNSb0lHOXlJSFJsY20xcGJtRjBiM0pjYmlBZ0lDQXZMMXh1SUNBZ0lDOHZJRUpoYzJWa0lHOXVJRVJoZG1sa0lFWnNZVzVoWjJGdUozTWdRblZtWm1WeVZtbGxkeUFvYUhSMGNITTZMeTluYVhSb2RXSXVZMjl0TDJSaGRtbGtabXhoYm1GbllXNHZRblZtWm1WeVZtbGxkeTlpYkc5aUwyMWhjM1JsY2k5Q2RXWm1aWEpXYVdWM0xtcHpMeTlNTWpZMEtWeHVJQ0FnSUhaaGJIVmxPaUJtZFc1amRHbHZiaUIzY21sMFpWTjBjbWx1WnloemRISnBibWNwSUh0Y2JseHVJQ0FnSUNBZ0x5OGdSVzVqYjJSbFpDQlZWRVl0T0NCaWVYUmxjMXh1SUNBZ0lDQWdkbUZ5SUdKNWRHVnpJRDBnVzEwN1hHNWNiaUFnSUNBZ0lDOHZJRk4wY21sdVp5QnNaVzVuZEdnc0lHOW1abk5sZENCaGJtUWdZbmwwWlNCdlptWnpaWFJjYmlBZ0lDQWdJSFpoY2lCc1pXNW5kR2dnUFNCemRISnBibWN1YkdWdVozUm9PMXh1SUNBZ0lDQWdkbUZ5SUdrZ1BTQXdPMXh1SUNBZ0lDQWdkbUZ5SUdJZ1BTQXdPMXh1WEc0Z0lDQWdJQ0IzYUdsc1pTQW9hU0E4SUd4bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNCMllYSWdZeUE5SUhOMGNtbHVaeTVqYUdGeVEyOWtaVUYwS0drcE8xeHVYRzRnSUNBZ0lDQWdJR2xtSUNoaklEdzlJREV5TnlrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUU5dVpTQmllWFJsSUhObGNYVmxibU5sWEc0Z0lDQWdJQ0FnSUNBZ1lubDBaWE5iWWlzclhTQTlJR003WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb1l5QThQU0F5TURRM0tTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1ZIZHZJR0o1ZEdVZ2MyVnhkV1Z1WTJWY2JpQWdJQ0FnSUNBZ0lDQmllWFJsYzF0aUt5dGRJRDBnTVRreUlId2dLR01nSmlBeE9UZzBLU0ErUGo0Z05qdGNiaUFnSUNBZ0lDQWdJQ0JpZVhSbGMxdGlLeXRkSUQwZ01USTRJSHdnWXlBbUlEWXpPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0dNZ1BEMGdOVFV5T1RVZ2ZId2dZeUErUFNBMU56TTBOQ0FtSmlCaklEdzlJRFkxTlRNMUtTQjdYRzRnSUNBZ0lDQWdJQ0FnTHk4Z1ZHaHlaV1VnWW5sMFpTQnpaWEYxWlc1alpWeHVJQ0FnSUNBZ0lDQWdJQzh2SUZOdmRYSmpaU0JqYUdGeVlXTjBaWElnYVhNZ2JtOTBJR0VnVlZSR0xURTJJSE4xY25KdloyRjBaVnh1SUNBZ0lDQWdJQ0FnSUdKNWRHVnpXMklySzEwZ1BTQXlNalFnZkNBb1l5QW1JRFl4TkRRd0tTQStQajRnTVRJN1hHNGdJQ0FnSUNBZ0lDQWdZbmwwWlhOYllpc3JYU0E5SURFeU9DQjhJQ2hqSUNZZ05EQXpNaWtnUGo0K0lEWTdYRzRnSUNBZ0lDQWdJQ0FnWW5sMFpYTmJZaXNyWFNBOUlERXlPQ0I4SUdNZ0ppQTJNenRjYmlBZ0lDQWdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnSUNBdkx5QkdiM1Z5SUdKNWRHVWdjMlZ4ZFdWdVkyVmNiaUFnSUNBZ0lDQWdJQ0JwWmlBb2FTQTlQU0JzWlc1bmRHZ2dMU0F4S1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMVZ1Y0dGcGNtVmtJSE4xY25KdloyRjBaU0FuSUNzZ2MzUnlhVzVuVzJsZElDc2dKeUFvYVc1a1pYZ2dKeUFySUdrZ0t5QW5LU2NwTzF4dUlDQWdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0FnSUM4dklGSmxkSEpwWlhabElITjFjbkp2WjJGMFpWeHVJQ0FnSUNBZ0lDQWdJSFpoY2lCa0lEMGdjM1J5YVc1bkxtTm9ZWEpEYjJSbFFYUW9LeXRwS1R0Y2JpQWdJQ0FnSUNBZ0lDQnBaaUFvWXlBOElEVTFNamsySUh4OElHTWdQaUExTmpNeE9TQjhmQ0JrSUR3Z05UWXpNakFnZkh3Z1pDQStJRFUzTXpRektTQjdYRzRnSUNBZ0lDQWdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjFWdWNHRnBjbVZrSUhOMWNuSnZaMkYwWlNBbklDc2djM1J5YVc1blcybGRJQ3NnSnlBb2FXNWtaWGdnSnlBcklHa2dLeUFuS1NjcE8xeHVJQ0FnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBZ0lIWmhjaUJqY0NBOUlDZ29ZeUFtSURFd01qTXBJRHc4SURFd0tTQXJJQ2hrSUNZZ01UQXlNeWtnS3lBMk5UVXpOanRjYmx4dUlDQWdJQ0FnSUNBZ0lHSjVkR1Z6VzJJcksxMGdQU0F5TkRBZ2ZDQW9ZM0FnSmlBeE9ETTFNREE0S1NBK1BqNGdNVGc3WEc0Z0lDQWdJQ0FnSUNBZ1lubDBaWE5iWWlzclhTQTlJREV5T0NCOElDaGpjQ0FtSURJMU9EQTBPQ2tnUGo0K0lERXlPMXh1SUNBZ0lDQWdJQ0FnSUdKNWRHVnpXMklySzEwZ1BTQXhNamdnZkNBb1kzQWdKaUEwTURNeUtTQStQajRnTmp0Y2JpQWdJQ0FnSUNBZ0lDQmllWFJsYzF0aUt5dGRJRDBnTVRJNElId2dZM0FnSmlBMk16dGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUNzcmFUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdkR2hwY3k1M2NtbDBaU2hpZVhSbGN5azdYRzVjYmlBZ0lDQWdJSEpsZEhWeWJpQmllWFJsY3k1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1SUNCOUxDQjdYRzRnSUNBZ2EyVjVPaUFuY21WaFpFTlRkSEpwYm1jbkxGeHVYRzRnSUNBZ0x5OGdRV3hwWVhObGN5Qm1iM0lnY21WaFpHbHVaeTkzY21sMGFXNW5JRlZVUmkwNElHVnVZMjlrWldRZ2MzUnlhVzVuYzF4dUlDQWdJQzh2SUhKbFlXUlZWRVpEYUdGeWN6b2dkR2hwY3k0Nk9uSmxZV1JUZEhKcGJtZGNiaUFnSUNBdkx5QjNjbWwwWlZWVVJrTm9ZWEp6T2lCMGFHbHpMam82ZDNKcGRHVlRkSEpwYm1kY2JseHVJQ0FnSUM4dklGSmxZV1J6SUZWVVJpMDRJR1Z1WTI5a1pXUWdReTF6ZEhKcGJtY2dLR1Y0WTJ4MVpHbHVaeUIwYUdVZ1lXTjBkV0ZzSUU1VlRFd3RZbmwwWlNsY2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdjbVZoWkVOVGRISnBibWNvS1NCN1hHNGdJQ0FnSUNCMllYSWdZbmwwWlhNZ1BTQjBhR2x6TGw5eVlYYzdYRzRnSUNBZ0lDQjJZWElnYkdWdVozUm9JRDBnWW5sMFpYTXViR1Z1WjNSb08xeHVJQ0FnSUNBZ2RtRnlJR2tnUFNCMGFHbHpMbDlwYm1SbGVEdGNiaUFnSUNBZ0lIZG9hV3hsSUNoaWVYUmxjMXRwWFNBaFBTQXdJQ1ltSUdrZ1BDQnNaVzVuZEdncElIdGNiaUFnSUNBZ0lDQWdLeXRwTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCc1pXNW5kR2dnUFNCcElDMGdkR2hwY3k1ZmFXNWtaWGc3WEc0Z0lDQWdJQ0JwWmlBb2JHVnVaM1JvSUQ0Z01Da2dlMXh1SUNBZ0lDQWdJQ0IyWVhJZ2MzUnlhVzVuSUQwZ2RHaHBjeTV5WldGa1UzUnlhVzVuS0d4bGJtZDBhQ2s3WEc0Z0lDQWdJQ0FnSUhSb2FYTXVjbVZoWkVKNWRHVW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJSE4wY21sdVp6dGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdjbVYwZFhKdUlHNTFiR3c3WEc0Z0lDQWdmVnh1SUNCOUxDQjdYRzRnSUNBZ2EyVjVPaUFuZDNKcGRHVkRVM1J5YVc1bkp5eGNibHh1SUNBZ0lDOHZJRmR5YVhSbGN5QlZWRVl0T0NCbGJtTnZaR1ZrSUVNdGMzUnlhVzVuSUNoT1ZVeE1MWFJsY20xcGJtRjBaV1FwWEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlIZHlhWFJsUTFOMGNtbHVaeWh6ZEhKcGJtY3BJSHRjYmlBZ0lDQWdJSFpoY2lCaWVYUmxjeUE5SUhSb2FYTXVkM0pwZEdWVGRISnBibWNvYzNSeWFXNW5LVHRjYmlBZ0lDQWdJSFJvYVhNdWQzSnBkR1ZDZVhSbEtEQXBPMXh1SUNBZ0lDQWdjbVYwZFhKdUlDc3JZbmwwWlhNN1hHNGdJQ0FnZlZ4dUlDQjlMQ0I3WEc0Z0lDQWdhMlY1T2lBbmNISmxjR1Z1WkNjc1hHNWNiaUFnSUNBdkx5QlFjbVZ3Wlc1a2N5Qm5hWFpsYmlCdWRXMWlaWElnYjJZZ1lubDBaWE5jYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z2NISmxjR1Z1WkNoaWVYUmxjeWtnZTF4dUlDQWdJQ0FnYVdZZ0tHSjVkR1Z6SUR3OUlEQXBJSHRjYmlBZ0lDQWdJQ0FnZEdoeWIzY2dibVYzSUZKaGJtZGxSWEp5YjNJb0owbHVkbUZzYVdRZ2JuVnRZbVZ5SUc5bUlHSjVkR1Z6SUNjZ0t5QmllWFJsY3lrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIWmhjaUIyYVdWM0lEMGdibVYzSUZWcGJuUTRRWEp5WVhrb2RHaHBjeTVzWlc1bmRHZ2dLeUJpZVhSbGN5azdYRzRnSUNBZ0lDQjJhV1YzTG5ObGRDaDBhR2x6TGw5eVlYY3NJR0o1ZEdWektUdGNiaUFnSUNBZ0lIUm9hWE11WDJsdVpHVjRJQ3M5SUdKNWRHVnpPMXh1SUNBZ0lDQWdkR2hwY3k1aWRXWm1aWElnUFNCMmFXVjNMbUoxWm1abGNqdGNiaUFnSUNBZ0lISmxkSFZ5YmlCMGFHbHpPMXh1SUNBZ0lIMWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKMkZ3Y0dWdVpDY3NYRzVjYmlBZ0lDQXZMeUJCY0hCbGJtUnpJR2RwZG1WdUlHNTFiV0psY2lCdlppQmllWFJsYzF4dUlDQWdJSFpoYkhWbE9pQm1kVzVqZEdsdmJpQmhjSEJsYm1Rb1lubDBaWE1wSUh0Y2JpQWdJQ0FnSUdsbUlDaGllWFJsY3lBOFBTQXdLU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEpiblpoYkdsa0lHNTFiV0psY2lCdlppQmllWFJsY3lBbklDc2dZbmwwWlhNcE8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQjJZWElnZG1sbGR5QTlJRzVsZHlCVmFXNTBPRUZ5Y21GNUtIUm9hWE11YkdWdVozUm9JQ3NnWW5sMFpYTXBPMXh1SUNBZ0lDQWdkbWxsZHk1elpYUW9kR2hwY3k1ZmNtRjNMQ0F3S1R0Y2JpQWdJQ0FnSUhSb2FYTXVZblZtWm1WeUlEMGdkbWxsZHk1aWRXWm1aWEk3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3p0Y2JpQWdJQ0I5WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkamJHbHdKeXhjYmx4dUlDQWdJQzh2SUVOc2FYQnpJSFJvYVhNZ1luVm1abVZ5WEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlHTnNhWEFvS1NCN1hHNGdJQ0FnSUNCMllYSWdZbVZuYVc0Z1BTQmhjbWQxYldWdWRITmJNRjBnUFQwOUlIVnVaR1ZtYVc1bFpDQS9JSFJvYVhNdVgybHVaR1Y0SURvZ1lYSm5kVzFsYm5Seld6QmRPMXh1SUNBZ0lDQWdkbUZ5SUdWdVpDQTlJR0Z5WjNWdFpXNTBjMXN4WFNBOVBUMGdkVzVrWldacGJtVmtJRDhnZEdocGN5NXNaVzVuZEdnZ09pQmhjbWQxYldWdWRITmJNVjA3WEc1Y2JpQWdJQ0FnSUdsbUlDaGlaV2RwYmlBOElEQXBJSHRjYmlBZ0lDQWdJQ0FnWW1WbmFXNGdQU0IwYUdsekxteGxibWQwYUNBcklHSmxaMmx1TzF4dUlDQWdJQ0FnZlZ4dUlDQWdJQ0FnZG1GeUlHSjFabVpsY2lBOUlIUm9hWE11WDJKMVptWmxjaTV6YkdsalpTaGlaV2RwYml3Z1pXNWtLVHRjYmlBZ0lDQWdJSFJvYVhNdVgybHVaR1Y0SUMwOUlHSmxaMmx1TzF4dUlDQWdJQ0FnZEdocGN5NWlkV1ptWlhJZ1BTQmlkV1ptWlhJN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN6dGNiaUFnSUNCOVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZHpiR2xqWlNjc1hHNWNiaUFnSUNBdkx5QlRiR2xqWlhNZ2RHaHBjeUJpZFdabVpYSmNiaUFnSUNCMllXeDFaVG9nWm5WdVkzUnBiMjRnYzJ4cFkyVW9LU0I3WEc0Z0lDQWdJQ0IyWVhJZ1ltVm5hVzRnUFNCaGNtZDFiV1Z1ZEhOYk1GMGdQVDA5SUhWdVpHVm1hVzVsWkNBL0lEQWdPaUJoY21kMWJXVnVkSE5iTUYwN1hHNGdJQ0FnSUNCMllYSWdaVzVrSUQwZ1lYSm5kVzFsYm5Seld6RmRJRDA5UFNCMWJtUmxabWx1WldRZ1B5QjBhR2x6TG14bGJtZDBhQ0E2SUdGeVozVnRaVzUwYzFzeFhUdGNibHh1SUNBZ0lDQWdkbUZ5SUhOc2FXTmxJRDBnYm1WM0lFSjVkR1ZDZFdabVpYSW9kR2hwY3k1ZlluVm1abVZ5TG5Oc2FXTmxLR0psWjJsdUxDQmxibVFwTENCMGFHbHpMbTl5WkdWeUtUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCemJHbGpaVHRjYmlBZ0lDQjlYRzRnSUgwc0lIdGNiaUFnSUNCclpYazZJQ2RqYkc5dVpTY3NYRzVjYmlBZ0lDQXZMeUJEYkc5dVpYTWdkR2hwY3lCaWRXWm1aWEpjYmlBZ0lDQjJZV3gxWlRvZ1puVnVZM1JwYjI0Z1kyeHZibVVvS1NCN1hHNGdJQ0FnSUNCMllYSWdZMnh2Ym1VZ1BTQnVaWGNnUW5sMFpVSjFabVpsY2loMGFHbHpMbDlpZFdabVpYSXVjMnhwWTJVb01Da3NJSFJvYVhNdWIzSmtaWElzSUhSb2FYTXVhVzF3YkdsamFYUkhjbTkzZEdncE8xeHVJQ0FnSUNBZ1kyeHZibVV1YVc1a1pYZ2dQU0IwYUdsekxsOXBibVJsZUR0Y2JpQWdJQ0FnSUhKbGRIVnliaUJqYkc5dVpUdGNiaUFnSUNCOVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZHlaWFpsY25ObEp5eGNibHh1SUNBZ0lDOHZJRkpsZG1WeWMyVnpJSFJvYVhNZ1luVm1abVZ5WEc0Z0lDQWdkbUZzZFdVNklHWjFibU4wYVc5dUlISmxkbVZ5YzJVb0tTQjdYRzRnSUNBZ0lDQkJjbkpoZVM1d2NtOTBiM1I1Y0dVdWNtVjJaWEp6WlM1allXeHNLSFJvYVhNdVgzSmhkeWs3WEc0Z0lDQWdJQ0IwYUdsekxsOXBibVJsZUNBOUlEQTdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjenRjYmlBZ0lDQjlYRzRnSUgwc0lIdGNiaUFnSUNCclpYazZJQ2QwYjBGeWNtRjVKeXhjYmx4dUlDQWdJQzh2SUVGeWNtRjVJRzltSUdKNWRHVnpJR2x1SUhSb2FYTWdZblZtWm1WeVhHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJSFJ2UVhKeVlYa29LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdRWEp5WVhrdWNISnZkRzkwZVhCbExuTnNhV05sTG1OaGJHd29kR2hwY3k1ZmNtRjNMQ0F3S1R0Y2JpQWdJQ0I5WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkMGIxTjBjbWx1Wnljc1hHNWNiaUFnSUNBdkx5QlRhRzl5ZENCemRISnBibWNnY21Wd2NtVnpaVzUwWVhScGIyNGdiMllnZEdocGN5QmlkV1ptWlhKY2JpQWdJQ0IyWVd4MVpUb2dablZ1WTNScGIyNGdkRzlUZEhKcGJtY29LU0I3WEc0Z0lDQWdJQ0IyWVhJZ2IzSmtaWElnUFNCMGFHbHpMbDl2Y21SbGNpQTlQU0IwYUdsekxtTnZibk4wY25WamRHOXlMa0pKUjE5RlRrUkpRVTRnUHlBblltbG5MV1Z1WkdsaGJpY2dPaUFuYkdsMGRHeGxMV1Z1WkdsaGJpYzdYRzRnSUNBZ0lDQnlaWFIxY200Z0oxdENlWFJsUW5WbVptVnlPeUJQY21SbGNqb2dKeUFySUc5eVpHVnlJQ3NnSnpzZ1RHVnVaM1JvT2lBbklDc2dkR2hwY3k1c1pXNW5kR2dnS3lBbk95QkpibVJsZURvZ0p5QXJJSFJvYVhNdVgybHVaR1Y0SUNzZ0p6c2dRWFpoYVd4aFlteGxPaUFuSUNzZ2RHaHBjeTVoZG1GcGJHRmliR1VnS3lBblhTYzdYRzRnSUNBZ2ZWeHVJQ0I5TENCN1hHNGdJQ0FnYTJWNU9pQW5kRzlJWlhnbkxGeHVYRzRnSUNBZ0x5OGdTR1Y0SUhKbGNISmxjMlZ1ZEdGMGFXOXVJRzltSUhSb2FYTWdZblZtWm1WeUlIZHBkR2dnWjJsMlpXNGdjM0JoWTJWeVhHNGdJQ0FnZG1Gc2RXVTZJR1oxYm1OMGFXOXVJSFJ2U0dWNEtDa2dlMXh1SUNBZ0lDQWdkbUZ5SUhOd1lXTmxjaUE5SUdGeVozVnRaVzUwYzFzd1hTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z0p5QW5JRG9nWVhKbmRXMWxiblJ6V3pCZE8xeHVYRzRnSUNBZ0lDQnlaWFIxY200Z1FYSnlZWGt1Y0hKdmRHOTBlWEJsTG0xaGNDNWpZV3hzS0hSb2FYTXVYM0poZHl3Z1puVnVZM1JwYjI0Z0tHSjVkR1VwSUh0Y2JpQWdJQ0FnSUNBZ2NtVjBkWEp1SUNnbk1EQW5JQ3NnWW5sMFpTNTBiMU4wY21sdVp5Z3hOaWt1ZEc5VmNIQmxja05oYzJVb0tTa3VjMnhwWTJVb0xUSXBPMXh1SUNBZ0lDQWdmU2t1YW05cGJpaHpjR0ZqWlhJcE8xeHVJQ0FnSUgxY2JpQWdmU3dnZTF4dUlDQWdJR3RsZVRvZ0ozUnZRVk5EU1VrbkxGeHVYRzRnSUNBZ0x5OGdRVk5EU1VrZ2NtVndjbVZ6Wlc1MFlYUnBiMjRnYjJZZ2RHaHBjeUJpZFdabVpYSWdkMmwwYUNCbmFYWmxiaUJ6Y0dGalpYSWdZVzVrSUc5d2RHbHZibUZzSUdKNWRHVWdZV3hwWjI1dFpXNTBYRzRnSUNBZ2RtRnNkV1U2SUdaMWJtTjBhVzl1SUhSdlFWTkRTVWtvS1NCN1hHNGdJQ0FnSUNCMllYSWdjM0JoWTJWeUlEMGdZWEpuZFcxbGJuUnpXekJkSUQwOVBTQjFibVJsWm1sdVpXUWdQeUFuSUNjZ09pQmhjbWQxYldWdWRITmJNRjA3WEc0Z0lDQWdJQ0IyWVhJZ1lXeHBaMjRnUFNCaGNtZDFiV1Z1ZEhOYk1WMGdQVDA5SUhWdVpHVm1hVzVsWkNBL0lIUnlkV1VnT2lCaGNtZDFiV1Z1ZEhOYk1WMDdYRzRnSUNBZ0lDQjJZWElnZFc1cmJtOTNiaUE5SUdGeVozVnRaVzUwYzFzeVhTQTlQVDBnZFc1a1pXWnBibVZrSUQ4Z0orKy92U2NnT2lCaGNtZDFiV1Z1ZEhOYk1sMDdYRzVjYmlBZ0lDQWdJSFpoY2lCd2NtVm1hWGdnUFNCaGJHbG5iaUEvSUNjZ0p5QTZJQ2NuTzF4dUlDQWdJQ0FnY21WMGRYSnVJRUZ5Y21GNUxuQnliM1J2ZEhsd1pTNXRZWEF1WTJGc2JDaDBhR2x6TGw5eVlYY3NJR1oxYm1OMGFXOXVJQ2hpZVhSbEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQmllWFJsSUR3Z016SWdmSHdnWW5sMFpTQStJREV5TmlBL0lIQnlaV1pwZUNBcklIVnVhMjV2ZDI0Z09pQndjbVZtYVhnZ0t5QlRkSEpwYm1jdVpuSnZiVU5vWVhKRGIyUmxLR0o1ZEdVcE8xeHVJQ0FnSUNBZ2ZTa3VhbTlwYmloemNHRmpaWElwTzF4dUlDQWdJSDFjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJKMVptWmxjaWNzWEc1Y2JpQWdJQ0F2THlCU1pYUnlhV1YyWlhNZ1luVm1abVZ5WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmWW5WbVptVnlPMXh1SUNBZ0lIMHNYRzVjYmlBZ0lDQXZMeUJUWlhSeklHNWxkeUJpZFdabVpYSWdZVzVrSUhOaGJtbDBhWHBsY3lCeVpXRmtMM2R5YVhSbElHbHVaR1Y0WEc0Z0lDQWdjMlYwT2lCbWRXNWpkR2x2YmlBb1luVm1abVZ5S1NCN1hHNGdJQ0FnSUNCMGFHbHpMbDlpZFdabVpYSWdQU0JpZFdabVpYSTdYRzRnSUNBZ0lDQjBhR2x6TGw5eVlYY2dQU0J1WlhjZ1ZXbHVkRGhCY25KaGVTaDBhR2x6TGw5aWRXWm1aWElwTzF4dUlDQWdJQ0FnZEdocGN5NWZkbWxsZHlBOUlHNWxkeUJFWVhSaFZtbGxkeWgwYUdsekxsOWlkV1ptWlhJcE8xeHVJQ0FnSUNBZ2RHaHBjeTVmYzJGdWFYUnBlbVZKYm1SbGVDZ3BPMXh1SUNBZ0lIMWNiaUFnZlN3Z2UxeHVJQ0FnSUd0bGVUb2dKM0poZHljc1hHNWNiaUFnSUNBdkx5QlNaWFJ5YVdWMlpYTWdjbUYzSUdKMVptWmxjbHh1SUNBZ0lHZGxkRG9nWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXVYM0poZHp0Y2JpQWdJQ0I5WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkMmFXVjNKeXhjYmx4dUlDQWdJQzh2SUZKbGRISnBaWFpsY3lCMmFXVjNYRzRnSUNBZ1oyVjBPaUJtZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnZEdocGN5NWZkbWxsZHp0Y2JpQWdJQ0I5WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkc1pXNW5kR2duTEZ4dVhHNGdJQ0FnTHk4Z1VtVjBjbWxsZG1WeklHNTFiV0psY2lCdlppQmllWFJsYzF4dUlDQWdJR2RsZERvZ1puVnVZM1JwYjI0Z0tDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIUm9hWE11WDJKMVptWmxjaTVpZVhSbFRHVnVaM1JvTzF4dUlDQWdJSDFjYmlBZ2ZTd2dlMXh1SUNBZ0lHdGxlVG9nSjJKNWRHVk1aVzVuZEdnbkxGeHVYRzRnSUNBZ0x5OGdVbVYwY21sbGRtVnpJRzUxYldKbGNpQnZaaUJpZVhSbGMxeHVJQ0FnSUM4dklFNXZkR1U2SUZSb2FYTWdZV3hzYjNkeklHWnZjaUJDZVhSbFFuVm1abVZ5SUhSdklHSmxJR1JsZEdWamRHVmtJR0Z6SUdFZ2NISnZjR1Z5SUhOdmRYSmpaU0JpZVNCcGRITWdiM2R1SUdOdmJuTjBjblZqZEc5eVhHNGdJQ0FnWjJWME9pQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdJQ0J5WlhSMWNtNGdkR2hwY3k1c1pXNW5kR2c3WEc0Z0lDQWdmVnh1SUNCOUxDQjdYRzRnSUNBZ2EyVjVPaUFuYjNKa1pYSW5MRnh1WEc0Z0lDQWdMeThnVW1WMGNtbGxkbVZ6SUdKNWRHVWdiM0prWlhKY2JpQWdJQ0JuWlhRNklHWjFibU4wYVc5dUlDZ3BJSHRjYmlBZ0lDQWdJSEpsZEhWeWJpQjBhR2x6TGw5dmNtUmxjanRjYmlBZ0lDQjlMRnh1WEc0Z0lDQWdMeThnVTJWMGN5QmllWFJsSUc5eVpHVnlYRzRnSUNBZ2MyVjBPaUJtZFc1amRHbHZiaUFvYjNKa1pYSXBJSHRjYmlBZ0lDQWdJSFJvYVhNdVgyOXlaR1Z5SUQwZ0lTRnZjbVJsY2p0Y2JpQWdJQ0I5WEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkcGJYQnNhV05wZEVkeWIzZDBhQ2NzWEc1Y2JpQWdJQ0F2THlCU1pYUnlhV1YyWlhNZ2FXMXdiR2xqYVhRZ1ozSnZkM1JvSUhOMGNtRjBaV2Q1WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVmYVcxd2JHbGphWFJIY205M2RHZzdYRzRnSUNBZ2ZTeGNibHh1SUNBZ0lDOHZJRk5sZEhNZ2FXMXdiR2xqYVhRZ1ozSnZkM1JvSUhOMGNtRjBaV2Q1WEc0Z0lDQWdjMlYwT2lCbWRXNWpkR2x2YmlBb2FXMXdiR2xqYVhSSGNtOTNkR2dwSUh0Y2JpQWdJQ0FnSUhSb2FYTXVYMmx0Y0d4cFkybDBSM0p2ZDNSb0lEMGdJU0ZwYlhCc2FXTnBkRWR5YjNkMGFEdGNiaUFnSUNCOVhHNGdJSDBzSUh0Y2JpQWdJQ0JyWlhrNklDZHBibVJsZUNjc1hHNWNiaUFnSUNBdkx5QlNaWFJ5YVdWMlpYTWdjbVZoWkM5M2NtbDBaU0JwYm1SbGVGeHVJQ0FnSUdkbGREb2dablZ1WTNScGIyNGdLQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJSFJvYVhNdVgybHVaR1Y0TzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2THlCVFpYUnpJSEpsWVdRdmQzSnBkR1VnYVc1a1pYaGNiaUFnSUNCelpYUTZJR1oxYm1OMGFXOXVJQ2hwYm1SbGVDa2dlMXh1SUNBZ0lDQWdhV1lnS0dsdVpHVjRJRHdnTUNCOGZDQnBibVJsZUNBK0lIUm9hWE11YkdWdVozUm9LU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCU1lXNW5aVVZ5Y205eUtDZEpiblpoYkdsa0lHbHVaR1Y0SUNjZ0t5QnBibVJsZUNBcklDY3NJSE5vYjNWc1pDQmlaU0JpWlhSM1pXVnVJREFnWVc1a0lDY2dLeUIwYUdsekxteGxibWQwYUNrN1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIUm9hWE11WDJsdVpHVjRJRDBnYVc1a1pYZzdYRzRnSUNBZ2ZWeHVJQ0I5TENCN1hHNGdJQ0FnYTJWNU9pQW5ZWFpoYVd4aFlteGxKeXhjYmx4dUlDQWdJQzh2SUZKbGRISnBaWFpsY3lCdWRXMWlaWElnYjJZZ1lYWmhhV3hoWW14bElHSjVkR1Z6WEc0Z0lDQWdaMlYwT2lCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z2RHaHBjeTVzWlc1bmRHZ2dMU0IwYUdsekxsOXBibVJsZUR0Y2JpQWdJQ0I5WEc0Z0lIMWRMQ0JiZTF4dUlDQWdJR3RsZVRvZ0oweEpWRlJNUlY5RlRrUkpRVTRuTEZ4dVhHNGdJQ0FnTHk4Z1FubDBaU0J2Y21SbGNpQmpiMjV6ZEdGdWRITmNiaUFnSUNCMllXeDFaVG9nZEhKMVpTeGNiaUFnSUNCbGJuVnRaWEpoWW14bE9pQjBjblZsWEc0Z0lIMHNJSHRjYmlBZ0lDQnJaWGs2SUNkQ1NVZGZSVTVFU1VGT0p5eGNiaUFnSUNCMllXeDFaVG9nWm1Gc2MyVXNYRzRnSUNBZ1pXNTFiV1Z5WVdKc1pUb2dkSEoxWlZ4dUlDQjlYU2s3WEc1Y2JpQWdjbVYwZFhKdUlFSjVkR1ZDZFdabVpYSTdYRzU5S1NncE8xeHVYRzR2THlCSFpXNWxjbWxqSUhKbFlXUmxjbHh1ZG1GeUlISmxZV1JsY2lBOUlHWjFibU4wYVc5dUlISmxZV1JsY2lodFpYUm9iMlFzSUdKNWRHVnpLU0I3WEc0Z0lISmxkSFZ5YmlCbWRXNWpkR2x2YmlBb0tTQjdYRzRnSUNBZ2RtRnlJRzl5WkdWeUlEMGdZWEpuZFcxbGJuUnpXekJkSUQwOVBTQjFibVJsWm1sdVpXUWdQeUIwYUdsekxsOXZjbVJsY2lBNklHRnlaM1Z0Wlc1MGMxc3dYVHRjYmx4dUlDQWdJR2xtSUNoaWVYUmxjeUErSUhSb2FYTXVZWFpoYVd4aFlteGxLU0I3WEc0Z0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KME5oYm01dmRDQnlaV0ZrSUNjZ0t5QmllWFJsY3lBcklDY2dZbmwwWlNoektTd2dKeUFySUhSb2FYTXVZWFpoYVd4aFlteGxJQ3NnSnlCaGRtRnBiR0ZpYkdVbktUdGNiaUFnSUNCOVhHNWNiaUFnSUNCMllYSWdkbUZzZFdVZ1BTQjBhR2x6TGw5MmFXVjNXMjFsZEdodlpGMG9kR2hwY3k1ZmFXNWtaWGdzSUc5eVpHVnlLVHRjYmlBZ0lDQjBhR2x6TGw5cGJtUmxlQ0FyUFNCaWVYUmxjenRjYmlBZ0lDQnlaWFIxY200Z2RtRnNkV1U3WEc0Z0lIMDdYRzU5TzF4dVhHNHZMeUJIWlc1bGNtbGpJSGR5YVhSbGNseHVkbUZ5SUhkeWFYUmxjaUE5SUdaMWJtTjBhVzl1SUhkeWFYUmxjaWh0WlhSb2IyUXNJR0o1ZEdWektTQjdYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUFvZG1Gc2RXVXBJSHRjYmlBZ0lDQjJZWElnYjNKa1pYSWdQU0JoY21kMWJXVnVkSE5iTVYwZ1BUMDlJSFZ1WkdWbWFXNWxaQ0EvSUhSb2FYTXVYMjl5WkdWeUlEb2dZWEpuZFcxbGJuUnpXekZkTzF4dVhHNGdJQ0FnZG1GeUlHRjJZV2xzWVdKc1pTQTlJSFJvYVhNdVlYWmhhV3hoWW14bE8xeHVJQ0FnSUdsbUlDaGllWFJsY3lBK0lHRjJZV2xzWVdKc1pTa2dlMXh1SUNBZ0lDQWdhV1lnS0hSb2FYTXVYMmx0Y0d4cFkybDBSM0p2ZDNSb0tTQjdYRzRnSUNBZ0lDQWdJSFJvYVhNdVlYQndaVzVrS0dKNWRHVnpJQzBnWVhaaGFXeGhZbXhsS1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUhSb2NtOTNJRzVsZHlCRmNuSnZjaWduUTJGdWJtOTBJSGR5YVhSbElDY2dLeUIyWVd4MVpTQXJJQ2NnZFhOcGJtY2dKeUFySUdKNWRHVnpJQ3NnSnlCaWVYUmxLSE1wTENBbklDc2dZWFpoYVd4aFlteGxJQ3NnSnlCaGRtRnBiR0ZpYkdVbktUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNCMGFHbHpMbDkyYVdWM1cyMWxkR2h2WkYwb2RHaHBjeTVmYVc1a1pYZ3NJSFpoYkhWbExDQnZjbVJsY2lrN1hHNGdJQ0FnZEdocGN5NWZhVzVrWlhnZ0t6MGdZbmwwWlhNN1hHNGdJQ0FnY21WMGRYSnVJSFJvYVhNN1hHNGdJSDA3WEc1OU8xeHVYRzR2THlCU1pXRmtaWEp6SUdadmNpQmllWFJsY3l3Z2MyaHZjblJ6TENCcGJuUmxaMlZ5Y3l3Z1pteHZZWFJ6SUdGdVpDQmtiM1ZpYkdWelhHNUNlWFJsUW5WbVptVnlMbkJ5YjNSdmRIbHdaUzV5WldGa1FubDBaU0E5SUhKbFlXUmxjaWduWjJWMFNXNTBPQ2NzSURFcE8xeHVRbmwwWlVKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpGVnVjMmxuYm1Wa1FubDBaU0E5SUhKbFlXUmxjaWduWjJWMFZXbHVkRGduTENBeEtUdGNia0o1ZEdWQ2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5KbFlXUlRhRzl5ZENBOUlISmxZV1JsY2lnbloyVjBTVzUwTVRZbkxDQXlLVHRjYmtKNWRHVkNkV1ptWlhJdWNISnZkRzkwZVhCbExuSmxZV1JWYm5OcFoyNWxaRk5vYjNKMElEMGdjbVZoWkdWeUtDZG5aWFJWYVc1ME1UWW5MQ0F5S1R0Y2JrSjVkR1ZDZFdabVpYSXVjSEp2ZEc5MGVYQmxMbkpsWVdSSmJuUWdQU0J5WldGa1pYSW9KMmRsZEVsdWRETXlKeXdnTkNrN1hHNUNlWFJsUW5WbVptVnlMbkJ5YjNSdmRIbHdaUzV5WldGa1ZXNXphV2R1WldSSmJuUWdQU0J5WldGa1pYSW9KMmRsZEZWcGJuUXpNaWNzSURRcE8xeHVRbmwwWlVKMVptWmxjaTV3Y205MGIzUjVjR1V1Y21WaFpFWnNiMkYwSUQwZ2NtVmhaR1Z5S0NkblpYUkdiRzloZERNeUp5d2dOQ2s3WEc1Q2VYUmxRblZtWm1WeUxuQnliM1J2ZEhsd1pTNXlaV0ZrUkc5MVlteGxJRDBnY21WaFpHVnlLQ2RuWlhSR2JHOWhkRFkwSnl3Z09DazdYRzVjYmk4dklGZHlhWFJsY25NZ1ptOXlJR0o1ZEdWekxDQnphRzl5ZEhNc0lHbHVkR1ZuWlhKekxDQm1iRzloZEhNZ1lXNWtJR1J2ZFdKc1pYTmNia0o1ZEdWQ2RXWm1aWEl1Y0hKdmRHOTBlWEJsTG5keWFYUmxRbmwwWlNBOUlIZHlhWFJsY2lnbmMyVjBTVzUwT0Njc0lERXBPMXh1UW5sMFpVSjFabVpsY2k1d2NtOTBiM1I1Y0dVdWQzSnBkR1ZWYm5OcFoyNWxaRUo1ZEdVZ1BTQjNjbWwwWlhJb0ozTmxkRlZwYm5RNEp5d2dNU2s3WEc1Q2VYUmxRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlZOb2IzSjBJRDBnZDNKcGRHVnlLQ2R6WlhSSmJuUXhOaWNzSURJcE8xeHVRbmwwWlVKMVptWmxjaTV3Y205MGIzUjVjR1V1ZDNKcGRHVlZibk5wWjI1bFpGTm9iM0owSUQwZ2QzSnBkR1Z5S0NkelpYUlZhVzUwTVRZbkxDQXlLVHRjYmtKNWRHVkNkV1ptWlhJdWNISnZkRzkwZVhCbExuZHlhWFJsU1c1MElEMGdkM0pwZEdWeUtDZHpaWFJKYm5Rek1pY3NJRFFwTzF4dVFubDBaVUoxWm1abGNpNXdjbTkwYjNSNWNHVXVkM0pwZEdWVmJuTnBaMjVsWkVsdWRDQTlJSGR5YVhSbGNpZ25jMlYwVldsdWRETXlKeXdnTkNrN1hHNUNlWFJsUW5WbVptVnlMbkJ5YjNSdmRIbHdaUzUzY21sMFpVWnNiMkYwSUQwZ2QzSnBkR1Z5S0NkelpYUkdiRzloZERNeUp5d2dOQ2s3WEc1Q2VYUmxRblZtWm1WeUxuQnliM1J2ZEhsd1pTNTNjbWwwWlVSdmRXSnNaU0E5SUhkeWFYUmxjaWduYzJWMFJteHZZWFEyTkNjc0lEZ3BPMXh1WEc1dGIyUjFiR1V1Wlhod2IzSjBjeUE5SUVKNWRHVkNkV1ptWlhJN1hHNTlMSHQ5WFgwc2UzMHNXekZkS1Z4dUtERXBYRzU5S1R0Y2JseHVJQ0F2S2x4dUlDb2dJRUpwYm1GeWVWTnZZMnRsZENBdElFSnBibUZ5ZVNCWFpXSWdVMjlqYTJWMGMxeHVJQ29nSUVOdmNIbHlhV2RvZENBb1F5a2dNakF4TmlBZ1VtOXNZVzVrSUZOcGJtZGxjaUE4Y205c1lXNWtMbk5wYm1kbGNsdGhkRjFrWlhObGNuUmlhWFF1WTI5dFBseHVJQ3BjYmlBcUlDQlVhR2x6SUhCeWIyZHlZVzBnYVhNZ1puSmxaU0J6YjJaMGQyRnlaVG9nZVc5MUlHTmhiaUJ5WldScGMzUnlhV0oxZEdVZ2FYUWdZVzVrTDI5eUlHMXZaR2xtZVZ4dUlDb2dJR2wwSUhWdVpHVnlJSFJvWlNCMFpYSnRjeUJ2WmlCMGFHVWdSMDVWSUVkbGJtVnlZV3dnVUhWaWJHbGpJRXhwWTJWdWMyVWdZWE1nY0hWaWJHbHphR1ZrSUdKNVhHNGdLaUFnZEdobElFWnlaV1VnVTI5bWRIZGhjbVVnUm05MWJtUmhkR2x2Yml3Z1pXbDBhR1Z5SUhabGNuTnBiMjRnTXlCdlppQjBhR1VnVEdsalpXNXpaU3dnYjNKY2JpQXFJQ0FvWVhRZ2VXOTFjaUJ2Y0hScGIyNHBJR0Z1ZVNCc1lYUmxjaUIyWlhKemFXOXVMbHh1SUNwY2JpQXFJQ0JVYUdseklIQnliMmR5WVcwZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYVc0Z2RHaGxJR2h2Y0dVZ2RHaGhkQ0JwZENCM2FXeHNJR0psSUhWelpXWjFiQ3hjYmlBcUlDQmlkWFFnVjBsVVNFOVZWQ0JCVGxrZ1YwRlNVa0ZPVkZrN0lIZHBkR2h2ZFhRZ1pYWmxiaUIwYUdVZ2FXMXdiR2xsWkNCM1lYSnlZVzUwZVNCdlpseHVJQ29nSUUxRlVrTklRVTVVUVVKSlRFbFVXU0J2Y2lCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSUzRnSUZObFpTQjBhR1ZjYmlBcUlDQkhUbFVnUjJWdVpYSmhiQ0JRZFdKc2FXTWdUR2xqWlc1elpTQm1iM0lnYlc5eVpTQmtaWFJoYVd4ekxseHVJQ3BjYmlBcUlDQlpiM1VnYzJodmRXeGtJR2hoZG1VZ2NtVmpaV2wyWldRZ1lTQmpiM0I1SUc5bUlIUm9aU0JIVGxVZ1IyVnVaWEpoYkNCUWRXSnNhV01nVEdsalpXNXpaVnh1SUNvZ0lHRnNiMjVuSUhkcGRHZ2dkR2hwY3lCd2NtOW5jbUZ0TGlBZ1NXWWdibTkwTENCelpXVWdQR2gwZEhBNkx5OTNkM2N1WjI1MUxtOXlaeTlzYVdObGJuTmxjeTgrTGx4dUlDb3ZYRzVjYmk4cVhHNHFJQ0JVYUdseklHTnZaR1VnYkdsMlpYTWdhVzV6YVdSbElIUm9aU0JDYVc1aGNubFRiMk5yWlhRZ1puVnVZM1JwYjI0dVhHNHFMMXh1WEc1MllYSWdkWFJwYkhNZ1BTQjdYRzRnSUM4dklFMXBiV2xqY3lCcVVYVmxjbmtuY3lCbGVIUmxibVFnYldWMGFHOWtMbHh1SUNBdkx5QlRiM1Z5WTJVNklHaDBkSEE2THk5emRHRmphMjkyWlhKbWJHOTNMbU52YlM5eGRXVnpkR2x2Ym5Ndk1URXhPVGN5TkRjdmFtRjJZWE5qY21sd2RDMWxjWFZwZG1Gc1pXNTBMVzltTFdweGRXVnllWE10WlhoMFpXNWtMVzFsZEdodlpGeHVJQ0JsZUhSbGJtUTZJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJR1p2Y2loMllYSWdhVDB4T3lCcFBHRnlaM1Z0Wlc1MGN5NXNaVzVuZEdnN0lHa3JLeWxjYmlBZ0lDQWdJQ0FnWm05eUtIWmhjaUJyWlhrZ2FXNGdZWEpuZFcxbGJuUnpXMmxkS1Z4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lvWVhKbmRXMWxiblJ6VzJsZExtaGhjMDkzYmxCeWIzQmxjblI1S0d0bGVTa3BYRzRnSUNBZ0lDQWdJQ0FnSUNBZ0lDQWdZWEpuZFcxbGJuUnpXekJkVzJ0bGVWMGdQU0JoY21kMWJXVnVkSE5iYVYxYmEyVjVYVHRjYmlBZ0lDQnlaWFIxY200Z1lYSm5kVzFsYm5Seld6QmRPMXh1SUNCOUxGeHVYRzRnSUM4dklGSmxkSFZ5YmlCaElHWjFibU4wYVc5dUlIZG9hV05vSUdseklIUnlhV2RuWlhKbFpDQnZibXg1SUc5dVkyVWdkMmwwYUdsdUlIUm9aU0JzYVcxcGRDQmtkWEpoZEdsdmJpNWNiaUFnTHk4Z1NXWWdZR2x0YldWa2FXRjBaV0FnYVhNZ2NHRnpjMlZrTENCMGNtbG5aMlZ5SUhSb1pTQm1kVzVqZEdsdmJpQnZiaUIwYUdWY2JpQWdMeThnYkdWaFpHbHVaeUJsWkdkbExDQnBibk4wWldGa0lHOW1JSFJvWlNCMGNtRnBiR2x1Wnk1Y2JpQWdkR2h5YjNSMGJHVTZJR1oxYm1OMGFXOXVLR05oYkd4aVlXTnJMQ0JzYVcxcGRDd2dhVzF0WldScFlYUmxLU0I3WEc0Z0lDQWdkbUZ5SUhkaGFYUWdQU0JtWVd4elpUdGNiaUFnSUNCeVpYUjFjbTRnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUNBZ2RtRnlJR052Ym5SbGVIUWdQU0IwYUdsekxDQmhjbWR6SUQwZ1lYSm5kVzFsYm5Sek8xeHVJQ0FnSUNBZ0lDQnBaaUFvSVhkaGFYUXBJSHRjYmlBZ0lDQWdJQ0FnSUNCcFppQW9hVzF0WldScFlYUmxLU0I3SUdOaGJHeGlZV05yTG1Gd2NHeDVLR052Ym5SbGVIUXNJR0Z5WjNNcE95QjlYRzRnSUNBZ0lDQWdJQ0FnZDJGcGRDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lDQWdjMlYwVkdsdFpXOTFkQ2htZFc1amRHbHZiaUFvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IzWVdsMElEMGdabUZzYzJVN1hHNGdJQ0FnSUNBZ0lDQWdJQ0JwWmlBb0lXbHRiV1ZrYVdGMFpTa2dleUJqWVd4c1ltRmpheTVoY0hCc2VTaGpiMjUwWlhoMExDQmhjbWR6S1RzZ2ZWeHVJQ0FnSUNBZ0lDQWdJSDBzSUd4cGJXbDBLVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlR0Y2JpQWdmVnh1ZlR0Y2JseHVJQ0F2S2x4dUlDb2dJRUpwYm1GeWVWTnZZMnRsZENBdElFSnBibUZ5ZVNCWFpXSWdVMjlqYTJWMGMxeHVJQ29nSUVOdmNIbHlhV2RvZENBb1F5a2dNakF4TmlBZ1VtOXNZVzVrSUZOcGJtZGxjaUE4Y205c1lXNWtMbk5wYm1kbGNsdGhkRjFrWlhObGNuUmlhWFF1WTI5dFBseHVJQ3BjYmlBcUlDQlVhR2x6SUhCeWIyZHlZVzBnYVhNZ1puSmxaU0J6YjJaMGQyRnlaVG9nZVc5MUlHTmhiaUJ5WldScGMzUnlhV0oxZEdVZ2FYUWdZVzVrTDI5eUlHMXZaR2xtZVZ4dUlDb2dJR2wwSUhWdVpHVnlJSFJvWlNCMFpYSnRjeUJ2WmlCMGFHVWdSMDVWSUVkbGJtVnlZV3dnVUhWaWJHbGpJRXhwWTJWdWMyVWdZWE1nY0hWaWJHbHphR1ZrSUdKNVhHNGdLaUFnZEdobElFWnlaV1VnVTI5bWRIZGhjbVVnUm05MWJtUmhkR2x2Yml3Z1pXbDBhR1Z5SUhabGNuTnBiMjRnTXlCdlppQjBhR1VnVEdsalpXNXpaU3dnYjNKY2JpQXFJQ0FvWVhRZ2VXOTFjaUJ2Y0hScGIyNHBJR0Z1ZVNCc1lYUmxjaUIyWlhKemFXOXVMbHh1SUNwY2JpQXFJQ0JVYUdseklIQnliMmR5WVcwZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYVc0Z2RHaGxJR2h2Y0dVZ2RHaGhkQ0JwZENCM2FXeHNJR0psSUhWelpXWjFiQ3hjYmlBcUlDQmlkWFFnVjBsVVNFOVZWQ0JCVGxrZ1YwRlNVa0ZPVkZrN0lIZHBkR2h2ZFhRZ1pYWmxiaUIwYUdVZ2FXMXdiR2xsWkNCM1lYSnlZVzUwZVNCdlpseHVJQ29nSUUxRlVrTklRVTVVUVVKSlRFbFVXU0J2Y2lCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSUzRnSUZObFpTQjBhR1ZjYmlBcUlDQkhUbFVnUjJWdVpYSmhiQ0JRZFdKc2FXTWdUR2xqWlc1elpTQm1iM0lnYlc5eVpTQmtaWFJoYVd4ekxseHVJQ3BjYmlBcUlDQlpiM1VnYzJodmRXeGtJR2hoZG1VZ2NtVmpaV2wyWldRZ1lTQmpiM0I1SUc5bUlIUm9aU0JIVGxVZ1IyVnVaWEpoYkNCUWRXSnNhV01nVEdsalpXNXpaVnh1SUNvZ0lHRnNiMjVuSUhkcGRHZ2dkR2hwY3lCd2NtOW5jbUZ0TGlBZ1NXWWdibTkwTENCelpXVWdQR2gwZEhBNkx5OTNkM2N1WjI1MUxtOXlaeTlzYVdObGJuTmxjeTgrTGx4dUlDb3ZYRzVjYmk4cVhHNGdLaUFnVkdocGN5QmpiMlJsSUd4cGRtVnpJR2x1YzJsa1pTQjBhR1VnUW1sdVlYSjVVMjlqYTJWMElHWjFibU4wYVc5dUxseHVJQ292WEc1Y2JuWmhjaUJ2Y0dWdVUyOWphMlYwSUQwZ1puVnVZM1JwYjI0b2FHOXpkQ3dnYjNCMGFXOXVjeWtnZTF4dUlDQXZMeUJKYm1Oc2RXUmxJSFJvWlNCa1pYQmxibVJsYm1OcFpYTXVYRzRnSUM4cVhHNGdLaUFnUW1sdVlYSjVVMjlqYTJWMElDMGdRbWx1WVhKNUlGZGxZaUJUYjJOclpYUnpYRzRnS2lBZ1EyOXdlWEpwWjJoMElDaERLU0F5TURFMklDQlNiMnhoYm1RZ1UybHVaMlZ5SUR4eWIyeGhibVF1YzJsdVoyVnlXMkYwWFdSbGMyVnlkR0pwZEM1amIyMCtYRzRnS2x4dUlDb2dJRlJvYVhNZ2NISnZaM0poYlNCcGN5Qm1jbVZsSUhOdlpuUjNZWEpsT2lCNWIzVWdZMkZ1SUhKbFpHbHpkSEpwWW5WMFpTQnBkQ0JoYm1RdmIzSWdiVzlrYVdaNVhHNGdLaUFnYVhRZ2RXNWtaWElnZEdobElIUmxjbTF6SUc5bUlIUm9aU0JIVGxVZ1IyVnVaWEpoYkNCUWRXSnNhV01nVEdsalpXNXpaU0JoY3lCd2RXSnNhWE5vWldRZ1lubGNiaUFxSUNCMGFHVWdSbkpsWlNCVGIyWjBkMkZ5WlNCR2IzVnVaR0YwYVc5dUxDQmxhWFJvWlhJZ2RtVnljMmx2YmlBeklHOW1JSFJvWlNCTWFXTmxibk5sTENCdmNseHVJQ29nSUNoaGRDQjViM1Z5SUc5d2RHbHZiaWtnWVc1NUlHeGhkR1Z5SUhabGNuTnBiMjR1WEc0Z0tseHVJQ29nSUZSb2FYTWdjSEp2WjNKaGJTQnBjeUJrYVhOMGNtbGlkWFJsWkNCcGJpQjBhR1VnYUc5d1pTQjBhR0YwSUdsMElIZHBiR3dnWW1VZ2RYTmxablZzTEZ4dUlDb2dJR0oxZENCWFNWUklUMVZVSUVGT1dTQlhRVkpTUVU1VVdUc2dkMmwwYUc5MWRDQmxkbVZ1SUhSb1pTQnBiWEJzYVdWa0lIZGhjbkpoYm5SNUlHOW1YRzRnS2lBZ1RVVlNRMGhCVGxSQlFrbE1TVlJaSUc5eUlFWkpWRTVGVTFNZ1JrOVNJRUVnVUVGU1ZFbERWVXhCVWlCUVZWSlFUMU5GTGlBZ1UyVmxJSFJvWlZ4dUlDb2dJRWRPVlNCSFpXNWxjbUZzSUZCMVlteHBZeUJNYVdObGJuTmxJR1p2Y2lCdGIzSmxJR1JsZEdGcGJITXVYRzRnS2x4dUlDb2dJRmx2ZFNCemFHOTFiR1FnYUdGMlpTQnlaV05sYVhabFpDQmhJR052Y0hrZ2IyWWdkR2hsSUVkT1ZTQkhaVzVsY21Gc0lGQjFZbXhwWXlCTWFXTmxibk5sWEc0Z0tpQWdZV3h2Ym1jZ2QybDBhQ0IwYUdseklIQnliMmR5WVcwdUlDQkpaaUJ1YjNRc0lITmxaU0E4YUhSMGNEb3ZMM2QzZHk1bmJuVXViM0puTDJ4cFkyVnVjMlZ6THo0dVhHNGdLaTljYmx4dUx5cGNiaW9nSUZSb2FYTWdZMjlrWlNCc2FYWmxjeUJwYm5OcFpHVWdkR2hsSUVKcGJtRnllVk52WTJ0bGRDQm1kVzVqZEdsdmJpNWNiaW92WEc1Y2JuWmhjaUJ1WlhkWFpXSlRiMk5yWlhRZ1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDOHFYRzRnSUNBcUlGWmhjbWxoWW14bGMxeHVJQ0FnS2k5Y2JseHVJQ0IyWVhJZ2N5QTlJSHQ5TEZ4dUlDQWdJQ0FnZDNNN1hHNWNibHh1WEc0Z0lDOHFYRzRnSUNBcUlGTnZZMnRsZENCc1lYbGxjaUJwYlhCc1pXMWxiblJoZEdsdmJpNWNiaUFnSUNvdlhHNWNiaUFnY3k1dmNHVnVJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhSeWVTQjdYRzRnSUNBZ0lDQWdJQzh2SUVkbGJtVnlZWFJsSUhSb1pTQjNaV0p6YjJOclpYUWdkWEpzTGx4dUlDQWdJQ0FnSUNCMllYSWdkWEpzTzF4dUlDQWdJQ0FnSUNCcFppQW9hRzl6ZEM1dFlYUmphQ2hjSWw1b2RIUndjem92TDF3aUtTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RYSnNJRDBnWENKM2MzTmNJaUFySUdodmMzUXVjM1ZpYzNSeUtEVXBPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0FnSUNBZ2RYSnNJRDBnWENKM2Mxd2lJQ3NnYUc5emRDNXpkV0p6ZEhJb05DazdYRzRnSUNBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnSUNBdkx5QlBjR1Z1SUhSb1pTQjNaV0p6YjJOclpYUWdZMjl1Ym1WamRHbHZibHh1SUNBZ0lDQWdJQ0IzY3lBOUlHNWxkeUJYWldKVGIyTnJaWFFvZFhKc0tUdGNiaUFnSUNBZ0lDQWdkM011WW1sdVlYSjVWSGx3WlNBOUlDZGhjbkpoZVdKMVptWmxjaWM3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdVMlYwSUhSb1pTQmpZV3hzWW1GamF5Qm9ZVzVrYkdWeWMxeHVJQ0FnSUNBZ0lDQjNjeTV2Ym0xbGMzTmhaMlVnUFNCbWRXNWpkR2x2YmlobGRtVnVkQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjeTV2YmsxbGMzTmhaMlVvWlhabGJuUXVaR0YwWVNrN1hHNGdJQ0FnSUNBZ0lIMDdYRzVjYmlBZ0lDQWdJQ0FnZDNNdWIyNWxjbkp2Y2lBOUlHWjFibU4wYVc5dUtHVjJaVzUwS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0IyWVhJZ2JYTm5JRDBnWENKMGFHVWdkMlZpYzI5amEyVjBJR05zYjNObFpDQjBhR1VnWTI5dWJtVmpkR2x2YmlCM2FYUm9JRndpTzF4dUlDQWdJQ0FnSUNBZ0lDQWdhV1lnS0dWMlpXNTBMbU52WkdVcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ0lDQnRjMmNnS3owZ1hDSjBhR1VnWlhKeWIzSWdZMjlrWlRvZ1hDSWdLeUJsZG1WdWRDNWpiMlJsTzF4dUlDQWdJQ0FnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0FnSUNBZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0lDQWdJQ0FnYlhObklDczlJRndpWVc0Z1pYSnliM0l1WENJN1hHNGdJQ0FnSUNBZ0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUNBZ0lDQWdJSE11YjI1RmNuSnZjaWh0YzJjcE8xeHVJQ0FnSUNBZ0lDQjlPMXh1WEc0Z0lDQWdJQ0FnSUhkekxtOXVZMnh2YzJVZ1BTQm1kVzVqZEdsdmJpZ3BJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lITXViMjVEYkc5elpTZ3BPMXh1SUNBZ0lDQWdJQ0I5TzF4dVhHNGdJQ0FnSUNBZ0lIZHpMbTl1YjNCbGJpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjeTV2Yms5d1pXNG9LVHRjYmlBZ0lDQWdJQ0FnZlR0Y2JpQWdJQ0I5SUdOaGRHTm9JQ2hsS1NCN1hHNGdJQ0FnSUNBZ0lITXViMjVGY25KdmNpZ3BPMXh1SUNBZ0lIMWNiaUFnZlR0Y2JseHVJQ0J6TG5ObGJtUWdQU0JtZFc1amRHbHZiaUFvWkdGMFlTa2dlMXh1SUNBZ0lDOHZJRk5sYm1RZ2RHaGxJR1JoZEdFZ2RHOGdkR2hsSUhObGNuWmxjbHh1SUNBZ0lIZHpMbk5sYm1Rb1pHRjBZU2s3WEc0Z0lIMDdYRzVjYmlBZ2N5NWpiRzl6WlNBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDOHZJRU5zYjNObElIUm9aU0IzWldKemIyTnJaWFFnYVdZZ1pHVm1hVzVsWkM1Y2JpQWdJQ0JwWmlBb2QzTXBJSHRjYmlBZ0lDQWdJSFJ5ZVNCN1hHNGdJQ0FnSUNBZ0lIZHpMbU5zYjNObEtDazdYRzRnSUNBZ0lDQjlJR05oZEdOb0lDaGxLU0I3ZlZ4dUlDQWdJSDFjYmx4dUlDQWdJSGR6SUQwZ2RXNWtaV1pwYm1Wa08xeHVJQ0I5TzF4dVhHNGdJSEpsZEhWeWJpQnpPMXh1ZlR0Y2JseHVJQ0F2S2x4dUlDb2dJRUpwYm1GeWVWTnZZMnRsZENBdElFSnBibUZ5ZVNCWFpXSWdVMjlqYTJWMGMxeHVJQ29nSUVOdmNIbHlhV2RvZENBb1F5a2dNakF4TmlBZ1VtOXNZVzVrSUZOcGJtZGxjaUE4Y205c1lXNWtMbk5wYm1kbGNsdGhkRjFrWlhObGNuUmlhWFF1WTI5dFBseHVJQ3BjYmlBcUlDQlVhR2x6SUhCeWIyZHlZVzBnYVhNZ1puSmxaU0J6YjJaMGQyRnlaVG9nZVc5MUlHTmhiaUJ5WldScGMzUnlhV0oxZEdVZ2FYUWdZVzVrTDI5eUlHMXZaR2xtZVZ4dUlDb2dJR2wwSUhWdVpHVnlJSFJvWlNCMFpYSnRjeUJ2WmlCMGFHVWdSMDVWSUVkbGJtVnlZV3dnVUhWaWJHbGpJRXhwWTJWdWMyVWdZWE1nY0hWaWJHbHphR1ZrSUdKNVhHNGdLaUFnZEdobElFWnlaV1VnVTI5bWRIZGhjbVVnUm05MWJtUmhkR2x2Yml3Z1pXbDBhR1Z5SUhabGNuTnBiMjRnTXlCdlppQjBhR1VnVEdsalpXNXpaU3dnYjNKY2JpQXFJQ0FvWVhRZ2VXOTFjaUJ2Y0hScGIyNHBJR0Z1ZVNCc1lYUmxjaUIyWlhKemFXOXVMbHh1SUNwY2JpQXFJQ0JVYUdseklIQnliMmR5WVcwZ2FYTWdaR2x6ZEhKcFluVjBaV1FnYVc0Z2RHaGxJR2h2Y0dVZ2RHaGhkQ0JwZENCM2FXeHNJR0psSUhWelpXWjFiQ3hjYmlBcUlDQmlkWFFnVjBsVVNFOVZWQ0JCVGxrZ1YwRlNVa0ZPVkZrN0lIZHBkR2h2ZFhRZ1pYWmxiaUIwYUdVZ2FXMXdiR2xsWkNCM1lYSnlZVzUwZVNCdlpseHVJQ29nSUUxRlVrTklRVTVVUVVKSlRFbFVXU0J2Y2lCR1NWUk9SVk5USUVaUFVpQkJJRkJCVWxSSlExVk1RVklnVUZWU1VFOVRSUzRnSUZObFpTQjBhR1ZjYmlBcUlDQkhUbFVnUjJWdVpYSmhiQ0JRZFdKc2FXTWdUR2xqWlc1elpTQm1iM0lnYlc5eVpTQmtaWFJoYVd4ekxseHVJQ3BjYmlBcUlDQlpiM1VnYzJodmRXeGtJR2hoZG1VZ2NtVmpaV2wyWldRZ1lTQmpiM0I1SUc5bUlIUm9aU0JIVGxVZ1IyVnVaWEpoYkNCUWRXSnNhV01nVEdsalpXNXpaVnh1SUNvZ0lHRnNiMjVuSUhkcGRHZ2dkR2hwY3lCd2NtOW5jbUZ0TGlBZ1NXWWdibTkwTENCelpXVWdQR2gwZEhBNkx5OTNkM2N1WjI1MUxtOXlaeTlzYVdObGJuTmxjeTgrTGx4dUlDb3ZYRzVjYmk4cVhHNGdLaUFnVkdocGN5QmpiMlJsSUd4cGRtVnpJR2x1YzJsa1pTQjBhR1VnUW1sdVlYSjVVMjlqYTJWMElHWjFibU4wYVc5dUxseHVJQ292WEc1Y2JuWmhjaUJ1WlhkQmFtRjRVMjlqYTJWMElEMGdablZ1WTNScGIyNGdLQ2tnZTF4dUlDQXZLbHh1SUNBZ0tpQkRiMjV6ZEdGdWRITmNiaUFnSUNvdlhHNWNiaUFnZG1GeUlITmxibVJVYVcxbGIzVjBJRDBnTXpBd01EQXNYRzRnSUNBZ0lDQndiMnhzVkdsdFpXOTFkQ0E5SURRMU1EQXdPMXh1WEc0Z0lIWmhjaUJFWVhSaFJHVnNhVzFwZEdWeUlEMGdKeU1uTzF4dVhHNGdJSFpoY2lCU1pYRjFaWE4wVkhsd1pTQTlJSHRjYmlBZ0lDQWdJRWx1YVhRNklEQXNYRzRnSUNBZ0lDQlFkWE5vT2lBeExGeHVJQ0FnSUNBZ1VHOXNiRG9nTWx4dUlDQjlPMXh1WEc0Z0lIWmhjaUJRYjJ4c1ZIbHdaU0E5SUh0Y2JpQWdJQ0FnSUVSaGRHRTZJQ0FnSURBc1hHNGdJQ0FnSUNCVWFXMWxiM1YwT2lBeExGeHVJQ0FnSUNBZ1EyeHZjMlZrT2lBZ01seHVJQ0I5TzF4dVhHNWNibHh1SUNBdktseHVJQ0FnS2lCV1lYSnBZV0pzWlhOY2JpQWdJQ292WEc1Y2JpQWdJSFpoY2lCeklEMGdlMzBzWEc0Z0lDQWdJQ0FnZFdsa0xDQndiMnhzVkc5clpXNHNJSEIxYzJoVWIydGxiaXhjYmlBZ0lDQWdJQ0J3YjJ4c1dHaHlJRDBnWm1Gc2MyVXNYRzRnSUNBZ0lDQWdjMlZ1WkZob2NpQTlJR1poYkhObExGeHVJQ0FnSUNBZ0lIQnZiR3dzWEc0Z0lDQWdJQ0FnY0hWemFFRmpkR2wyWlNBOUlHWmhiSE5sTEZ4dUlDQWdJQ0FnSUhCMWMyaENkV1ptWlhJZ1BTQmJYVHRjYmx4dVhHNWNiaUFnTHlwY2JpQWdJQ29nVFdWMGFHOWtjMXh1SUNBZ0tpOWNibHh1SUNCbWRXNWpkR2x2YmlCd2IzTjBRV3BoZUNoMWNtd3NJSFJwYldWdmRYUXNJR1JoZEdFc0lITjFZMk5sYzNNc0lHVnljbTl5S1NCN1hHNGdJQ0FnZG1GeUlIaG9jaUE5SUc1bGR5QllUVXhJZEhSd1VtVnhkV1Z6ZENncE8xeHVYRzRnSUNBZ2VHaHlMbTl1Ykc5aFpDQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnYzNWalkyVnpjeWg0YUhJdWNtVnpjRzl1YzJVcE8xeHVJQ0FnSUgwN1hHNWNiaUFnSUNCNGFISXViMjVsY25KdmNpQTlJR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnWlhKeWIzSW9LVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdlR2h5TG05dWRHbHRaVzkxZENBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdaWEp5YjNJb1hDSjBhVzFsYjNWMFhDSXBPMXh1SUNBZ0lIMDdYRzVjYmlBZ0lDQjRhSEl1YjNCbGJpZ25VRTlUVkNjc0lIVnliQ3dnZEhKMVpTazdYRzRnSUNBZ2VHaHlMbkpsYzNCdmJuTmxWSGx3WlNBOUlGd2lZWEp5WVhsaWRXWm1aWEpjSWp0Y2JpQWdJQ0I0YUhJdWRHbHRaVzkxZENBOUlIUnBiV1Z2ZFhRN1hHNGdJQ0FnZUdoeUxuTmxibVFvYm1WM0lFUmhkR0ZXYVdWM0tHUmhkR0VwS1R0Y2JseHVJQ0FnSUhKbGRIVnliaUI0YUhJN1hHNGdJSDFjYmx4dUlDQm1kVzVqZEdsdmJpQnpkRzl3VW1WeGRXVnpkSE1vS1NCN1hHNGdJQ0FnTHk4Z1UyVjBJSFJvWlNCd2IyeHNJR1oxYm1OMGFXOXVJSFJ2SUdFZ1pIVnRiWGtnWm5WdVkzUnBiMjR1WEc0Z0lDQWdMeThnVkdocGN5QjNhV3hzSUhCeVpYWmxiblFnWm5WeWRHaGxjaUJ3YjJ4c0lHTmhiR3h6TGx4dUlDQWdJSEJ2Ykd3Z1BTQm1kVzVqZEdsdmJpZ3BJSHQ5TzF4dVhHNGdJQ0FnTHk4Z1MybHNiQ0IwYUdVZ1lXcGhlQ0J5WlhGMVpYTjBjeTVjYmlBZ0lDQnBaaUFvY0c5c2JGaG9jaWtnZTF4dUlDQWdJQ0FnSUNCd2IyeHNXR2h5TG1GaWIzSjBLQ2s3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2h6Wlc1a1dHaHlLU0I3WEc0Z0lDQWdJQ0FnSUhObGJtUllhSEl1WVdKdmNuUW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUIwY21sbloyVnlRMnh2YzJWa0tDa2dlMXh1SUNBZ0lDOHZJRk4wYjNBZ2RHaGxJR0ZxWVhnZ2NtVnhkV1Z6ZEhNdVhHNGdJQ0FnYzNSdmNGSmxjWFZsYzNSektDazdYRzVjYmlBZ0lDQXZMeUJVY21sbloyVnlJSFJvWlNCbGRtVnVkQzVjYmlBZ0lDQnpMbTl1UTJ4dmMyVW9LVHRjYmlBZ2ZWeHVYRzRnSUdaMWJtTjBhVzl1SUhSeWFXZG5aWEpGY25KdmNpaHRjMmNwSUh0Y2JpQWdJQ0F2THlCVGRHOXdJSFJvWlNCaGFtRjRJSEpsY1hWbGMzUnpMbHh1SUNBZ0lITjBiM0JTWlhGMVpYTjBjeWdwTzF4dVhHNGdJQ0FnTHk4Z1EzSmxZWFJsSUhSb1pTQmxjbkp2Y2lCdFpYTnpZV2RsTGx4dUlDQWdJR2xtSUNnaGJYTm5LU0I3WEc0Z0lDQWdJQ0J0YzJjZ1BTQmNJblJvWlNCaGFtRjRJSE52WTJ0bGRDQmpiRzl6WldRZ2RHaGxJR052Ym01bFkzUnBiMjRnZDJsMGFDQmhiaUJsY25KdmNpNWNJanRjYmlBZ0lDQjlYRzVjYmlBZ0lDQXZMeUJVY21sbloyVnlJSFJvWlNCbGRtVnVkQzVjYmlBZ0lDQnpMbTl1UlhKeWIzSW9iWE5uS1R0Y2JpQWdmVnh1WEc0Z0lHWjFibU4wYVc5dUlITmxibVFvY21WeFZIbHdaU3dnYUdWaFpHVnlVM1J5TENCa1lYUmhMQ0JqWVd4c1ltRmpheWtnZTF4dUlDQWdJSFpoY2lCaUlEMGdibVYzSUVKNWRHVkNkV1ptWlhJb015d2dRbmwwWlVKMVptWmxjaTVDU1VkZlJVNUVTVUZPTENCMGNuVmxLVHRjYmlBZ0lDQmlMbmR5YVhSbFFubDBaU2h5WlhGVWVYQmxLVHRjYmx4dUlDQWdJSFpoY2lCb1pXRmtaWEpUZEhKTVpXNGdQU0F3TzF4dUlDQWdJR2xtSUNob1pXRmtaWEpUZEhJZ0ppWWdhR1ZoWkdWeVUzUnlMbXhsYm1kMGFDQStJREFwSUh0Y2JpQWdJQ0FnSUdobFlXUmxjbE4wY2t4bGJpQTlJR2hsWVdSbGNsTjBjaTVzWlc1bmRHZzdYRzRnSUNBZ2ZWeHVJQ0FnSUdJdWQzSnBkR1ZDZVhSbEtHaGxZV1JsY2xOMGNreGxiaWs3WEc1Y2JpQWdJQ0JwWmlBb2FHVmhaR1Z5VTNSeVRHVnVJRDRnTUNrZ2UxeHVJQ0FnSUNBZ1lpNTNjbWwwWlZOMGNtbHVaeWhvWldGa1pYSlRkSElwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR2xtSUNoa1lYUmhJQ1ltSUdSaGRHRXVZbmwwWlV4bGJtZDBhQ0ErSURBcElIdGNiaUFnSUNBZ0lHSXVkM0pwZEdVb1pHRjBZU2s3WEc0Z0lDQWdmVnh1WEc0Z0lDQWdMeThnVUdWeVptOXliU0IwYUdVZ1lXTjBkV0ZzSUdGcVlYZ2djbVZ4ZFdWemRDNWNiaUFnSUNCelpXNWtXR2h5SUQwZ2NHOXpkRUZxWVhnb2FHOXpkQ3dnYzJWdVpGUnBiV1Z2ZFhRc0lHSXVZblZtWm1WeUxDQm1kVzVqZEdsdmJpQW9aR0YwWVNrZ2UxeHVJQ0FnSUNBZ2MyVnVaRmhvY2lBOUlHWmhiSE5sTzF4dVhHNGdJQ0FnSUNCcFppQW9ZMkZzYkdKaFkyc3BJSHRjYmlBZ0lDQWdJQ0FnWTJGc2JHSmhZMnNvWkdGMFlTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZTd2dablZ1WTNScGIyNGdLRzF6WnlrZ2UxeHVJQ0FnSUNBZ2MyVnVaRmhvY2lBOUlHWmhiSE5sTzF4dUlDQWdJQ0FnZEhKcFoyZGxja1Z5Y205eUtHMXpaeWs3WEc0Z0lDQWdmU2s3WEc0Z0lIMWNibHh1SUNCd2IyeHNJRDBnWm5WdVkzUnBiMjRnS0NrZ2UxeHVJQ0FnSUhaaGNpQmlJRDBnYm1WM0lFSjVkR1ZDZFdabVpYSW9NeXdnUW5sMFpVSjFabVpsY2k1Q1NVZGZSVTVFU1VGT0xDQjBjblZsS1R0Y2JpQWdJQ0JpTG5keWFYUmxRbmwwWlNoU1pYRjFaWE4wVkhsd1pTNVFiMnhzS1R0Y2JseHVJQ0FnSUhaaGNpQm9aV0ZrWlhKVGRISWdQU0IxYVdRZ0t5QkVZWFJoUkdWc2FXMXBkR1Z5SUNzZ2NHOXNiRlJ2YTJWdU8xeHVJQ0FnSUdJdWQzSnBkR1ZDZVhSbEtHaGxZV1JsY2xOMGNpNXNaVzVuZEdncE8xeHVJQ0FnSUdJdWQzSnBkR1ZUZEhKcGJtY29hR1ZoWkdWeVUzUnlLVHRjYmx4dUlDQWdJQzh2SUZCbGNtWnZjbTBnZEdobElHRmpkSFZoYkNCaGFtRjRJSEpsY1hWbGMzUXVYRzRnSUNBZ2NHOXNiRmhvY2lBOUlIQnZjM1JCYW1GNEtHaHZjM1FzSUhCdmJHeFVhVzFsYjNWMExDQmlMbUoxWm1abGNpd2dablZ1WTNScGIyNGdLR1JoZEdFcElIdGNiaUFnSUNBZ0lIQnZiR3hZYUhJZ1BTQm1ZV3h6WlR0Y2JseHVJQ0FnSUNBZ2RtRnlJR0lnUFNCdVpYY2dRbmwwWlVKMVptWmxjaWhrWVhSaExDQkNlWFJsUW5WbVptVnlMa0pKUjE5RlRrUkpRVTRwTzF4dVhHNGdJQ0FnSUNBdkx5QkZlSFJ5WVdOMElIUm9aU0IwZVc5bExseHVJQ0FnSUNBZ2FXWWdLR0l1YkdWdVozUm9JRHdnTVNrZ2UxeHVJQ0FnSUNBZ0lDQjBjbWxuWjJWeVJYSnliM0lvWENKaGFtRjRJSE52WTJ0bGREb2djRzlzYkRvZ2FXNTJZV3hwWkNCelpYSjJaWElnY21WemNHOXVjMlZjSWlrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUhaaGNpQjBlWEJsSUQwZ1lpNXlaV0ZrUW5sMFpTZ3BPMXh1WEc0Z0lDQWdJQ0F2THlCRGFHVmpheUJwWmlCMGFHbHpJR0ZxWVhnZ1kyOXVibVZqZEdsdmJpQjNZWE1nWTJ4dmMyVmtMbHh1SUNBZ0lDQWdhV1lnS0hSNWNHVWdQVDBnVUc5c2JGUjVjR1V1UTJ4dmMyVmtLU0I3WEc0Z0lDQWdJQ0FnSUhSeWFXZG5aWEpEYkc5elpXUW9LVHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVPMXh1SUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0F2THlCV1lXeHBaR0YwWlM1Y2JpQWdJQ0FnSUdsbUlDaGlMbXhsYm1kMGFDQThJRElwSUh0Y2JpQWdJQ0FnSUNBZ2RISnBaMmRsY2tWeWNtOXlLRndpWVdwaGVDQnpiMk5yWlhRNklIQnZiR3c2SUdsdWRtRnNhV1FnYzJWeWRtVnlJSEpsYzNCdmJuTmxYQ0lwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFVjRkSEpoWTNRZ1lXNWtJSE5sZENCMGFHVWdibVYzSUhCdmJHd2dkRzlyWlc0dVhHNGdJQ0FnSUNCMllYSWdjRzlzYkZSdmEyVnVUR1Z1SUQwZ1lpNXlaV0ZrUW5sMFpTZ3BPMXh1SUNBZ0lDQWdjRzlzYkZSdmEyVnVJRDBnWWk1eVpXRmtVM1J5YVc1bktIQnZiR3hVYjJ0bGJreGxiaWs3WEc1Y2JpQWdJQ0FnSUM4dklFTm9aV05ySUdsbUlIUm9hWE1nWVdwaGVDQnlaWEYxWlhOMElHaGhjeUJ5WldGamFHVmtJSFJvWlNCelpYSjJaWEluY3lCMGFXMWxiM1YwTGx4dUlDQWdJQ0FnYVdZZ0tIUjVjR1VnUFQwZ1VHOXNiRlI1Y0dVdVZHbHRaVzkxZENrZ2UxeHVJQ0FnSUNBZ0lDQXZMeUJLZFhOMElITjBZWEowSUhSb1pTQnVaWGgwSUhCdmJHd2djbVZ4ZFdWemRDNWNiaUFnSUNBZ0lDQWdjRzlzYkNncE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDOHZJRk4wWVhKMElIUm9aU0J1WlhoMElIQnZiR3dnY21WeGRXVnpkQzVjYmlBZ0lDQWdJSEJ2Ykd3b0tUdGNibHh1SUNBZ0lDQWdMeThnVW1WdGIzWmxJSFJvWlNCb1pXRmtaWElnWm5KdmJTQjBhR1VnWW5WbVptVnlMbHh1SUNBZ0lDQWdZaTVqYkdsd0tDazdYRzVjYmlBZ0lDQWdJQzh2SUVOaGJHd2dkR2hsSUdWMlpXNTBMbHh1SUNBZ0lDQWdjeTV2YmsxbGMzTmhaMlVvWWk1aWRXWm1aWElwTzF4dUlDQWdJSDBzSUdaMWJtTjBhVzl1SUNodGMyY3BJSHRjYmlBZ0lDQWdJSEJ2Ykd4WWFISWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lIUnlhV2RuWlhKRmNuSnZjaWh0YzJjcE8xeHVJQ0FnSUgwcE8xeHVJQ0I5TzF4dVhHNGdJSFpoY2lCd2RYTm9JRDBnZFhScGJITXVkR2h5YjNSMGJHVW9ablZ1WTNScGIyNG9LU0I3WEc0Z0lDQWdMeThnVTJ0cGNDQnBaaUIwYUdWeVpTQnBjeUJoYkhKbFlXUjVJR0Z1SUdGamRHbDJaU0J3ZFhOb0lISmxjWFZsYzNRdVhHNGdJQ0FnTHk4Z1QyNXNlU0J2Ym1VZ2NIVnphQ0J5WlhGMVpYTjBJR0YwSUc5dVkyVWdhWE1nWVd4c2IzZGxaQzVjYmlBZ0lDQXZMeUJVYUdVZ2JtVjRkQ0J3ZFhOb0lIZHBiR3dnWW1VZ2RISnBaMmRsY21Wa0lHRjFkRzl0WVhScFkyRnNiSGt1WEc0Z0lDQWdhV1lnS0hCMWMyaEJZM1JwZG1VcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCUFluUmhhVzRnZEdobElIUnZkR0ZzSUdKMVptWmxjaUJ6YVhwbExseHVJQ0FnSUhaaGNpQnBMQ0IwYjNSaGJGTnBlbVVnUFNBd08xeHVJQ0FnSUdadmNpQW9hVDB3T3lCcElEd2djSFZ6YUVKMVptWmxjaTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUNBZ2RHOTBZV3hUYVhwbElDczlJSEIxYzJoQ2RXWm1aWEpiYVYwdVlubDBaVXhsYm1kMGFEdGNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5Qk5aWEpuWlNCaGJHd2dZblZtWm1WeVpXUWdZbmwwWlhNZ2FXNTBieUJ2Ym1VZ2MybHVaMnhsSUdKMVptWmxjaTVjYmlBZ0lDQjJZWElnWWlBOUlHNWxkeUJDZVhSbFFuVm1abVZ5S0hSdmRHRnNVMmw2WlN3Z1FubDBaVUoxWm1abGNpNUNTVWRmUlU1RVNVRk9LVHRjYmlBZ0lDQm1iM0lnS0drOU1Ec2dhU0E4SUhCMWMyaENkV1ptWlhJdWJHVnVaM1JvT3lCcEt5c3BJSHRjYmlBZ0lDQWdJR0l1ZDNKcGRHVW9jSFZ6YUVKMVptWmxjbHRwWFNrN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnTHk4Z1EyeGxZWElnZEdobElIQjFjMmdnWW5WbVptVnlMbHh1SUNBZ0lIQjFjMmhDZFdabVpYSWdQU0JiWFR0Y2JseHVJQ0FnSUM4dklGQmxjbVp2Y20wZ2RHaGxJR0ZqZEhWaGJDQndkWE5vSUhKbGNYVmxjM1F1WEc0Z0lDQWdjSFZ6YUVGamRHbDJaU0E5SUhSeWRXVTdYRzRnSUNBZ2MyVnVaQ2hTWlhGMVpYTjBWSGx3WlM1UWRYTm9MQ0IxYVdRZ0t5QkVZWFJoUkdWc2FXMXBkR1Z5SUNzZ2NIVnphRlJ2YTJWdUxDQmlMbUoxWm1abGNpd2dablZ1WTNScGIyNG9aR0YwWVNrZ2UxeHVJQ0FnSUNBZ2NIVnphRUZqZEdsMlpTQTlJR1poYkhObE8xeHVYRzRnSUNBZ0lDQnBaaUFvSVdSaGRHRWdmSHdnWkdGMFlTNWllWFJsVEdWdVozUm9JRHc5SURBcElIdGNiaUFnSUNBZ0lDQWdkSEpwWjJkbGNrVnljbTl5S0Z3aVlXcGhlQ0J6YjJOclpYUTZJSEIxYzJnNklHbHVkbUZzYVdRZ2MyVnlkbVZ5SUhKbGMzQnZibk5sWENJcE8xeHVJQ0FnSUNBZ0lDQnlaWFIxY200N1hHNGdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lIWmhjaUJpSUQwZ2JtVjNJRUo1ZEdWQ2RXWm1aWElvWkdGMFlTd2dRbmwwWlVKMVptWmxjaTVDU1VkZlJVNUVTVUZPS1R0Y2JseHVJQ0FnSUNBZ0x5OGdVMlYwSUhSb1pTQnVaWGNnY0hWemFDQjBiMnRsYmk1Y2JpQWdJQ0FnSUhCMWMyaFViMnRsYmlBOUlHSXVjbVZoWkZOMGNtbHVaeWdwTzF4dVhHNGdJQ0FnSUNBdkx5QkRhR1ZqYXlCcFppQjBhR1VnWW5WbVptVnlJR2x6SUdacGJHeGxaQ0JoWjJGcGJpNWNiaUFnSUNBZ0lDOHZJRWxtSUhOdkxDQjBjbWxuWjJWeUlIUm9aU0J1WlhoMElIQjFjMmd1WEc0Z0lDQWdJQ0JwWmlBb2NIVnphRUoxWm1abGNpNXNaVzVuZEdnZ1BpQXdLU0I3WEc0Z0lDQWdJQ0FnSUhCMWMyZ29LVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlLVHRjYmlBZ2ZTd2dOVEFwTzF4dVhHNWNiaUFnTHlwY2JpQWdJQ29nVTI5amEyVjBJR3hoZVdWeUlHbHRjR3hsYldWdWRHRjBhVzl1TGx4dUlDQWdLaTljYmx4dUlDQnpMbTl3Wlc0Z1BTQm1kVzVqZEdsdmJpQW9LU0I3WEc0Z0lDQWdMeThnU1c1cGRHbGhiR2w2WlNCMGFHVWdZV3BoZUNCemIyTnJaWFFnYzJWemMybHZibHh1SUNBZ0lITmxibVFvVW1WeGRXVnpkRlI1Y0dVdVNXNXBkQ3dnYm5Wc2JDd2diblZzYkN3Z1puVnVZM1JwYjI0Z0tHUmhkR0VwSUh0Y2JpQWdJQ0FnSUdsbUlDZ2haR0YwWVNCOGZDQmtZWFJoTG1KNWRHVk1aVzVuZEdnZ1BEMGdNQ2tnZTF4dUlDQWdJQ0FnSUNCMGNtbG5aMlZ5UlhKeWIzSW9YQ0poYW1GNElITnZZMnRsZERvZ2IzQmxiam9nYVc1MllXeHBaQ0J6WlhKMlpYSWdjbVZ6Y0c5dWMyVmNJaWs3WEc0Z0lDQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1ZISmhibk5tYjNKdElIUnZJSE4wY21sdVp5NWNiaUFnSUNBZ0lIWmhjaUJpSUQwZ2JtVjNJRUo1ZEdWQ2RXWm1aWElvWkdGMFlTd2dRbmwwWlVKMVptWmxjaTVDU1VkZlJVNUVTVUZPS1R0Y2JpQWdJQ0FnSUdSaGRHRWdQU0JpTG5KbFlXUlRkSEpwYm1jb0tUdGNibHh1SUNBZ0lDQWdMeThnVTNCc2FYUWdkR2hsSUhOMGNtbHVaeTVjYmlBZ0lDQWdJSFpoY2lCemNHeHBkQ0E5SUdSaGRHRXVjM0JzYVhRb1JHRjBZVVJsYkdsdGFYUmxjaWs3WEc0Z0lDQWdJQ0JwWmlBb2MzQnNhWFF1YkdWdVozUm9JQ0U5UFNBektTQjdYRzRnSUNBZ0lDQWdJSFJ5YVdkblpYSkZjbkp2Y2loY0ltRnFZWGdnYzI5amEyVjBPaUJtWVdsc1pXUWdkRzhnYjJKMFlXbHVJSFZwWkNCaGJtUWdkRzlyWlc1elhDSXBPMXh1SUNBZ0lDQWdJQ0J5WlhSMWNtNDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJQzh2SUZObGRDQjBhR1VnZFdsa0lHRnVaQ0IwYUdVZ2RHOXJaVzV6TGx4dUlDQWdJQ0FnZFdsa0lEMGdjM0JzYVhSYk1GMDdYRzRnSUNBZ0lDQndiMnhzVkc5clpXNGdQU0J6Y0d4cGRGc3hYVHRjYmlBZ0lDQWdJSEIxYzJoVWIydGxiaUE5SUhOd2JHbDBXekpkTzF4dVhHNGdJQ0FnSUNBdkx5QlRkR0Z5ZENCMGFHVWdiRzl1WnlCd2IyeHNhVzVuSUhCeWIyTmxjM011WEc0Z0lDQWdJQ0J3YjJ4c0tDazdYRzVjYmlBZ0lDQWdJQzh2SUZSeWFXZG5aWElnZEdobElHVjJaVzUwTGx4dUlDQWdJQ0FnY3k1dmJrOXdaVzRvS1R0Y2JpQWdJQ0I5S1R0Y2JpQWdmVHRjYmx4dUlDQnpMbk5sYm1RZ1BTQm1kVzVqZEdsdmJpQW9aR0YwWVNrZ2UxeHVJQ0FnSUM4dklFRmtaQ0IwYUdVZ1pHRjBZU0IwYnlCMGFHVWdjSFZ6YUNCaWRXWm1aWElnY1hWbGRXVXVYRzRnSUNBZ2NIVnphRUoxWm1abGNpNXdkWE5vS0dSaGRHRXBPMXh1WEc0Z0lDQWdMeThnVUhWemFDQjBhR1VnWkdGMFlTQjBieUIwYUdVZ2MyVnlkbVZ5SUNoMGFISnZkSFJzWldRcExseHVJQ0FnSUhCMWMyZ29LVHRjYmlBZ2ZUdGNibHh1SUNCekxtTnNiM05sSUQwZ1puVnVZM1JwYjI0b0tTQjdYRzRnSUNBZ0x5OGdVM1J2Y0NCMGFHVWdZV3BoZUNCeVpYRjFaWE4wY3k1Y2JpQWdJQ0J6ZEc5d1VtVnhkV1Z6ZEhNb0tUdGNiaUFnZlR0Y2JseHVJQ0J5WlhSMWNtNGdjenRjYm4wN1hHNWNibHh1WEc1Y2JpQWdMeXBjYmlBZ0lDb2dRMjl1YzNSaGJuUnpYRzRnSUNBcUwxeHVYRzRnSUhaaGNpQlRiMk5yWlhSVWVYQmxjeUE5SUh0Y2JpQWdJQ0FnSUZkbFlsTnZZMnRsZERvZ0lGd2lWMlZpVTI5amEyVjBYQ0lzWEc0Z0lDQWdJQ0JCYW1GNFUyOWphMlYwT2lCY0lrRnFZWGhUYjJOclpYUmNJbHh1SUNCOU8xeHVYRzRnSUhaaGNpQkVaV1poZFd4MFQzQjBhVzl1Y3lBOUlIdGNiaUFnSUNBZ0lDOHZJRVp2Y21ObElHRWdjMjlqYTJWMElIUjVjR1V1WEc0Z0lDQWdJQ0F2THlCV1lXeDFaWE02SUdaaGJITmxMQ0JjSWxkbFlsTnZZMnRsZEZ3aUxDQmNJa0ZxWVhoVGIyTnJaWFJjSWx4dUlDQWdJQ0FnWm05eVkyVlRiMk5yWlhSVWVYQmxPaUJtWVd4elpTeGNibHh1SUNBZ0lDQWdMeThnUzJsc2JDQjBhR1VnWTI5dWJtVmpkQ0JoZEhSbGJYQjBJR0ZtZEdWeUlIUm9aU0IwYVcxbGIzVjBMbHh1SUNBZ0lDQWdZMjl1Ym1WamRGUnBiV1Z2ZFhRNklDQXhNREF3TUZ4dUlDQjlPMXh1WEc1Y2JseHVJQ0F2S2x4dUlDQWdLaUJXWVhKcFlXSnNaWE5jYmlBZ0lDb3ZYRzVjYmlBZ2RtRnlJR0p6TENBZ0lDQWdMeThnUW1GamEyVnVaQ0J6YjJOclpYUXVYRzRnSUNBZ0lDQnBjME5zYjNObFpDQTlJR1poYkhObE8xeHVYRzVjYmx4dUlDQXZLbHh1SUNBZ0tpQlFkV0pzYVdNZ1NXNXpkR0Z1WTJWY2JpQWdJQ292WEc1Y2JpQWdkbUZ5SUdsdWMzUmhibU5sSUQwZ2UxeHVJQ0FnSUM4dklGSmxkSFZ5YmlCMGFHVWdZM1Z5Y21WdWRDQnpiMk5yWlhRZ2RIbHdaUzVjYmlBZ0lDQXZMeUJXWVd4MVpYTTZJRndpVjJWaVUyOWphMlYwWENJc0lGd2lRV3BoZUZOdlkydGxkRndpWEc0Z0lDQWdjMjlqYTJWMFZIbHdaVG9nWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNCeVpYUjFjbTRnWW5NdWMyOWphMlYwVkhsd1pUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ0x5OGdRMnh2YzJVZ2RHaGxJSE52WTJ0bGRDQmpiMjV1WldOMGFXOXVMbHh1SUNBZ0lHTnNiM05sT2lCbWRXNWpkR2x2YmlncElIdGNiaUFnSUNBZ0lHSnpMbU5zYjNObEtDazdYRzRnSUNBZ0lDQjBjbWxuWjJWeVEyeHZjMlVvS1R0Y2JpQWdJQ0I5TEZ4dVhHNGdJQ0FnTHk4Z1VtVjBkWEp1Y3lCaElHSnZiMnhsWVc0Z2QyaGxibVYyWlhJZ2RHaGxJSE52WTJ0bGRDQnBjeUJqYkc5elpXUXVYRzRnSUNBZ2FYTkRiRzl6WldRNklHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHbHpRMnh2YzJWa08xeHVJQ0FnSUgwc1hHNWNiaUFnSUNBdkx5QlhjbWwwWlNCMGFHVWdRWEp5WVhsQ2RXWm1aWElnZEc4Z2RHaGxJSE52WTJ0bGRDNWNiaUFnSUNCM2NtbDBaVG9nWm5WdVkzUnBiMjRvWkdGMFlTa2dlMXh1SUNBZ0lDQWdhV1lnS0dselEyeHZjMlZrS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibk52YkdVdWJHOW5LRndpUW1sdVlYSjVVMjlqYTJWME9pQm1ZV2xzWldRZ2RHOGdkM0pwZEdVNklIUm9aU0J6YjJOclpYUWdhWE1nWTJ4dmMyVmtYQ0lwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JsYkhObElHbG1JQ2doS0dSaGRHRWdhVzV6ZEdGdVkyVnZaaUJCY25KaGVVSjFabVpsY2lrcElIdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvWENKQ2FXNWhjbmxUYjJOclpYUTZJR1poYVd4bFpDQjBieUIzY21sMFpTQmtZWFJoT2lCa1lYUmhJR2x6SUc1dmRDQnZaaUIwZVhCbElFRnljbUY1UW5WbVptVnlYQ0lwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc0Z0lDQWdJQ0JsYkhObElHbG1JQ2hrWVhSaExtSjVkR1ZNWlc1bmRHZ2dQVDA5SURBcElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdU8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmljeTV6Wlc1a0tHUmhkR0VwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2THlCR2RXNWpkR2x2YmlCM2FHbGphQ0JwY3lCMGNtbG5aMlZ5WldRZ1lYTWdjMjl2YmlCaGN5QnVaWGNnWW5sMFpYTWdZWEpsSUhKbFkyVnBkbVZrTGx4dUlDQWdJQzh2SUZSb1pTQndZWE56WldRZ1pHRjBZU0JwY3lCaGJpQkJjbkpoZVVKMVptWmxjaTVjYmlBZ0lDQnZibEpsWVdRNklHWjFibU4wYVc5dUtHUmhkR0VwSUh0OUlDOHZJRk5sZENCMGJ5QmhiaUJsYlhCMGVTQm1kVzVqZEdsdmJpNGdWR2hwY3lCbGJHbHRhVzVoZEdWeklHRnVJR1Y0ZEhKaElHTm9aV05yTGx4dVhHNGdJQ0FnTHlwY2JpQWdJQ0FnSUM4dklFaHBiblE2SUVaMWNuUm9aWElnWVhaaGFXeGhZbXhsSUdWMlpXNTBJR1oxYm1OMGFXOXVMbHh1WEc0Z0lDQWdJQ0F2THlCR2RXNWpkR2x2YmlCM2FHbGphQ0JwY3lCMGNtbG5aMlZ5WldRZ1lYTWdjMjl2YmlCaGN5QjBhR1VnWTI5dWJtVmpkR2x2YmlCcGN5QmxjM1JoWW14cGMyaGxaQzVjYmlBZ0lDQWdJRzl1VDNCbGJqb2dablZ1WTNScGIyNG9LU0I3ZlZ4dVhHNGdJQ0FnSUNBdkx5QkdkVzVqZEdsdmJpQjNhR2xqYUNCcGN5QjBjbWxuWjJWeVpXUWdZWE1nYzI5dmJpQmhjeUIwYUdVZ1kyOXVibVZqZEdsdmJpQmpiRzl6WlhNdVhHNGdJQ0FnSUNCdmJrTnNiM05sT2lCbWRXNWpkR2x2YmlncElIdDlYRzVjYmlBZ0lDQWdJQzh2SUVaMWJtTjBhVzl1SUhkb2FXTm9JR2x6SUhSeWFXZG5aWEpsWkNCaGN5QnpiMjl1SUdGeklIUm9aU0JqYjI1dVpXTjBhVzl1SUdOc2IzTmxjeUIzYVhSb0lHRnVJR1Z5Y205eUxseHVJQ0FnSUNBZ0x5OGdRVzRnYjNCMGFXOXVZV3dnWlhKeWIzSWdiV1Z6YzJGblpTQnBjeUJ3WVhOelpXUXVYRzRnSUNBZ0lDQXZMeUJ2YmtOc2IzTmxJR2x6SUdGc2MyOGdkSEpwWjJkbGNtVmtJR0ZtZEdWeWQyRnlaSE11WEc0Z0lDQWdJQ0J2YmtWeWNtOXlPaUJtZFc1amRHbHZiaWh0YzJjcElIdDlYRzRnSUNBZ0tpOWNiaUFnZlR0Y2JseHVYRzVjYmlBZ0x5cGNiaUFnSUNvZ1RXVjBhRzlrYzF4dUlDQWdLaTljYmx4dUlDQm1kVzVqZEdsdmJpQjBjbWxuWjJWeVQzQmxiaWdwSUh0Y2JpQWdJQ0F2THlCVWNtbG5aMlZ5SUc5dWJIa2diMjVqWlM1Y2JpQWdJQ0JwWmlBb1luTXViM0JsYmxSeWFXZG5aWEpsWkNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQmljeTV2Y0dWdVZISnBaMmRsY21Wa0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUdsbUlDaHBibk4wWVc1alpTNXZiazl3Wlc0cElIdGNiaUFnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsdWMzUmhibU5sTG05dVQzQmxiaWdwTzF4dUlDQWdJQ0FnZlNCallYUmphQ0FvWlNrZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6YjJ4bExteHZaeWhjSWtKcGJtRnllVk52WTJ0bGREb2diMjVQY0dWdU9pQmpZWFJqYUdWa0lHVjRZMlZ3ZEdsdmJqcGNJaXdnWlNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnUlc1emRYSmxJSFJ2SUdOc2IzTmxJSFJvWlNCemIyTnJaWFF1WEc0Z0lDQWdJQ0FnSUdKekxtTnNiM05sS0NrN1hHNGdJQ0FnSUNCOVhHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ1puVnVZM1JwYjI0Z2RISnBaMmRsY2tOc2IzTmxLQ2tnZTF4dUlDQWdJQzh2SUZSeWFXZG5aWElnYjI1c2VTQnZibU5sTGx4dUlDQWdJR2xtSUNocGMwTnNiM05sWkNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDFjYmlBZ0lDQnBjME5zYjNObFpDQTlJSFJ5ZFdVN1hHNWNiaUFnSUNCcFppQW9hVzV6ZEdGdVkyVXViMjVEYkc5elpTa2dlMXh1SUNBZ0lDQWdkSEo1SUh0Y2JpQWdJQ0FnSUNBZ2FXNXpkR0Z1WTJVdWIyNURiRzl6WlNncE8xeHVJQ0FnSUNBZ2ZTQmpZWFJqYUNBb1pTa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emIyeGxMbXh2WnloY0lrSnBibUZ5ZVZOdlkydGxkRG9nYjI1RGJHOXpaVG9nWTJGMFkyaGxaQ0JsZUdObGNIUnBiMjQ2WENJc0lHVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJR1oxYm1OMGFXOXVJSFJ5YVdkblpYSkZjbkp2Y2lodGMyY3BJSHRjYmlBZ0lDQXZMeUJVY21sbloyVnlJRzl1YkhrZ2IyNWpaUzVjYmlBZ0lDQnBaaUFvWW5NdVpYSnliM0pVY21sbloyVnlaV1FwSUh0Y2JpQWdJQ0FnSUhKbGRIVnlianRjYmlBZ0lDQjlYRzRnSUNBZ1luTXVaWEp5YjNKVWNtbG5aMlZ5WldRZ1BTQjBjblZsTzF4dVhHNGdJQ0FnYVdZZ0tHbHVjM1JoYm1ObExtOXVSWEp5YjNJcElIdGNiaUFnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsdWMzUmhibU5sTG05dVJYSnliM0lvYlhObktUdGNiaUFnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb1hDSkNhVzVoY25sVGIyTnJaWFE2SUc5dVJYSnliM0k2SUdOaGRHTm9aV1FnWlhoalpYQjBhVzl1T2x3aUxDQmxLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JtZFc1amRHbHZiaUJqYjI1dVpXTjBVMjlqYTJWMEtDa2dlMXh1SUNBZ0lDOHZJRU5vYjI5elpTQjBhR1VnYzI5amEyVjBJR3hoZVdWeUlHUmxjR1Z1WkdsdVp5QnZiaUIwYUdVZ1luSnZkM05sY2lCemRYQndiM0owTGx4dUlDQWdJR2xtSUNnb0lXOXdkR2x2Ym5NdVptOXlZMlZUYjJOclpYUlVlWEJsSUNZbUlIZHBibVJ2ZHk1WFpXSlRiMk5yWlhRcElIeDhYRzRnSUNBZ0lDQWdJRzl3ZEdsdmJuTXVabTl5WTJWVGIyTnJaWFJVZVhCbElEMDlQU0JUYjJOclpYUlVlWEJsY3k1WFpXSlRiMk5yWlhRcFhHNGdJQ0FnZTF4dUlDQWdJQ0FnSUNCaWN5QTlJRzVsZDFkbFlsTnZZMnRsZENncE8xeHVJQ0FnSUNBZ0lDQmljeTV6YjJOclpYUlVlWEJsSUQwZ1UyOWphMlYwVkhsd1pYTXVWMlZpVTI5amEyVjBPMXh1SUNBZ0lIMWNiaUFnSUNCbGJITmxJSHRjYmlBZ0lDQWdJQ0FnWW5NZ1BTQnVaWGRCYW1GNFUyOWphMlYwS0NrN1hHNGdJQ0FnSUNBZ0lHSnpMbk52WTJ0bGRGUjVjR1VnUFNCVGIyTnJaWFJVZVhCbGN5NUJhbUY0VTI5amEyVjBPMXh1SUNBZ0lIMWNibHh1SUNBZ0lDOHZJRk4wWVhKMElIUm9aU0IwYVcxbGIzVjBMbHh1SUNBZ0lIWmhjaUJqYjI1dVpXTjBWR2x0Wlc5MWRDQTlJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lHTnZibTVsWTNSVWFXMWxiM1YwSUQwZ1ptRnNjMlU3WEc1Y2JpQWdJQ0FnSUNBZ0x5OGdSVzV6ZFhKbElIUm9aU0J6YjJOclpYUWdhWE1nWTJ4dmMyVmtMbHh1SUNBZ0lDQWdJQ0JpY3k1amJHOXpaU2dwTzF4dVhHNGdJQ0FnSUNBZ0lIUnlhV2RuWlhKRmNuSnZjaWhjSW1OdmJtNWxZM1JwYjI0Z2RHbHRaVzkxZEZ3aUtUdGNiaUFnSUNBZ0lDQWdkSEpwWjJkbGNrTnNiM05sS0NrN1hHNGdJQ0FnZlN3Z2IzQjBhVzl1Y3k1amIyNXVaV04wVkdsdFpXOTFkQ2s3WEc1Y2JpQWdJQ0F2THlCSVpXeHdaWElnWm5WdVkzUnBiMjR1WEc0Z0lDQWdkbUZ5SUhOMGIzQkRiMjV1WldOMFZHbHRaVzkxZENBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdhV1lnS0dOdmJtNWxZM1JVYVcxbGIzVjBJQ0U5UFNCbVlXeHpaU2tnZTF4dUlDQWdJQ0FnSUNBZ0lHTnNaV0Z5VkdsdFpXOTFkQ2hqYjI1dVpXTjBWR2x0Wlc5MWRDazdYRzRnSUNBZ0lDQWdJQ0FnWTI5dWJtVmpkRlJwYldWdmRYUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOU8xeHVYRzVjYmx4dUlDQWdJQzh2SUZObGRDQjBhR1VnWW1GamEyVnVaQ0J6YjJOclpYUWdaWFpsYm5SekxseHVJQ0FnSUdKekxtOXVUM0JsYmlBOUlHWjFibU4wYVc5dUtDa2dlMXh1SUNBZ0lDQWdjM1J2Y0VOdmJtNWxZM1JVYVcxbGIzVjBLQ2s3WEc1Y2JpQWdJQ0FnSUhSeWFXZG5aWEpQY0dWdUtDazdYRzRnSUNBZ2ZUdGNibHh1SUNBZ0lHSnpMbTl1UTJ4dmMyVWdQU0JtZFc1amRHbHZiaWdwSUh0Y2JpQWdJQ0FnSUhOMGIzQkRiMjV1WldOMFZHbHRaVzkxZENncE8xeHVYRzRnSUNBZ0lDQXZMeUJGYm5OMWNtVWdkR2hsSUhOdlkydGxkQ0JwY3lCamJHOXpaV1F1WEc0Z0lDQWdJQ0JpY3k1amJHOXpaU2dwTzF4dVhHNGdJQ0FnSUNCMGNtbG5aMlZ5UTJ4dmMyVW9LVHRjYmlBZ0lDQjlPMXh1WEc0Z0lDQWdZbk11YjI1RmNuSnZjaUE5SUdaMWJtTjBhVzl1S0cxelp5a2dlMXh1SUNBZ0lDQWdMeThnVTNSdmNDQjBhR1VnWTI5dWJtVmpkQ0IwYVcxbGIzVjBMbHh1SUNBZ0lDQWdjM1J2Y0VOdmJtNWxZM1JVYVcxbGIzVjBLQ2s3WEc1Y2JpQWdJQ0FnSUM4dklFVnVjM1Z5WlNCMGFHVWdjMjlqYTJWMElHbHpJR05zYjNObFpDNWNiaUFnSUNBZ0lHSnpMbU5zYjNObEtDazdYRzVjYmlBZ0lDQWdJSFJ5YVdkblpYSkZjbkp2Y2lodGMyY3BPMXh1SUNBZ0lDQWdkSEpwWjJkbGNrTnNiM05sS0NrN1hHNGdJQ0FnZlR0Y2JseHVJQ0FnSUdKekxtOXVUV1Z6YzJGblpTQTlJR1oxYm1OMGFXOXVLR1JoZEdFcElIdGNiaUFnSUNBZ0lIUnllU0I3WEc0Z0lDQWdJQ0FnSUdsdWMzUmhibU5sTG05dVVtVmhaQ2hrWVhSaEtUdGNiaUFnSUNBZ0lIMGdZMkYwWTJnZ0tHVXBJSHRjYmlBZ0lDQWdJQ0FnWTI5dWMyOXNaUzVzYjJjb1hDSkNhVzVoY25sVGIyTnJaWFE2SUc5dVVtVmhaRG9nWTJGMFkyaGxaQ0JsZUdObGNIUnBiMjQ2WENJc0lHVXBPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMDdYRzVjYmlBZ0lDQXZMeUJEYjI1dVpXTjBJR1IxY21sdVp5QjBhR1VnYm1WNGRDQjBhV05yTGx4dUlDQWdJQzh2SUZSb1pTQjFjMlZ5SUhOb2IzVnNaQ0JpWlNCaFlteGxJSFJ2SUdOdmJtNWxZM1FnZEdobElHVjJaVzUwSUdaMWJtTjBhVzl1Y3lCbWFYSnpkQzVjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLR1oxYm1OMGFXOXVLQ2tnZTF4dUlDQWdJQ0FnWW5NdWIzQmxiaWdwTzF4dUlDQWdJSDBzSURBcE8xeHVJQ0I5WEc1Y2JseHVYRzRnSUM4cVhHNGdJQ0FxSUVsdWFYUnBZV3hwZW1VZ2MyVmpkR2x2Ymx4dUlDQWdLaTljYmx4dUlDQXZMeUJEYUdWamF5QnBaaUJCY25KaGVVSjFabVpsY25NZ1lYSmxJSE4xY0hCdmNuUmxaQzRnVkdocGN5QnBjeUJoSUcxMWMzUWhYRzRnSUdsbUlDZ2hkMmx1Wkc5M0xrRnljbUY1UW5WbVptVnlLU0I3WEc0Z0lDQWdZMjl1YzI5c1pTNXNiMmNvWENKQ2FXNWhjbmxUYjJOclpYUTZJRUZ5Y21GNVFuVm1abVZ5Y3lCaGNtVWdibTkwSUhOMWNIQnZjblJsWkNCaWVTQjBhR2x6SUdKeWIzZHpaWEloWENJcE8xeHVJQ0FnSUhKbGRIVnliaUE3WEc0Z0lIMWNibHh1SUNBdkx5Qk5aWEpuWlNCMGFHVWdiM0IwYVc5dWN5QjNhWFJvSUhSb1pTQmtaV1poZFd4MElHOXdkR2x2Ym5NdVhHNGdJRzl3ZEdsdmJuTWdQU0IxZEdsc2N5NWxlSFJsYm1Rb2UzMHNJRVJsWm1GMWJIUlBjSFJwYjI1ekxDQnZjSFJwYjI1ektUdGNibHh1SUNBdkx5QlFjbVZ3WVhKbElIUm9aU0JvYjNOMElITjBjbWx1Wnk1Y2JpQWdMeThnVUhKbGNHVnVkQ0IwYUdVZ1kzVnljbVZ1ZENCc2IyTmhkR2x2YmlCcFppQjBhR1VnYUc5emRDQjFjbXdnYzNSaGNuUnpJSGRwZEdnZ1lTQnpiR0Z6YUM1Y2JpQWdhV1lnS0dodmMzUXViV0YwWTJnb1hDSmVMMXdpS1NrZ2UxeHVJQ0FnSUdodmMzUWdQU0IzYVc1a2IzY3ViRzlqWVhScGIyNHVjSEp2ZEc5amIyd2dLeUJjSWk4dlhDSWdLeUIzYVc1a2IzY3ViRzlqWVhScGIyNHVhRzl6ZENBcklHaHZjM1E3WEc0Z0lIMWNiaUFnTHk4Z1ZYTmxJSFJvWlNCamRYSnlaVzUwSUd4dlkyRjBhVzl1SUdsbUlIUm9aU0JvYjNOMElITjBjbWx1WnlCcGN5QnViM1FnYzJWMExseHVJQ0JsYkhObElHbG1JQ2doYUc5emRDa2dlMXh1SUNBZ0lHaHZjM1FnUFNCM2FXNWtiM2N1Ykc5allYUnBiMjR1Y0hKdmRHOWpiMndnS3lCY0lpOHZYQ0lnS3lCM2FXNWtiM2N1Ykc5allYUnBiMjR1YUc5emREdGNiaUFnZlZ4dUlDQXZMeUJVYUdVZ2FHOXpkQ0J6ZEhKcGJtY2dhR0Z6SUhSdklITjBZWEowSUhkcGRHZ2dhSFIwY0Rvdkx5QnZjaUJvZEhSd2N6b3ZMMXh1SUNCcFppQW9JV2h2YzNRdWJXRjBZMmdvWENKZWFIUjBjRG92TDF3aUtTQW1KaUFoYUc5emRDNXRZWFJqYUNoY0lsNW9kSFJ3Y3pvdkwxd2lLU2tnZTF4dUlDQWdJR052Ym5OdmJHVXViRzluS0Z3aVFtbHVZWEo1VTI5amEyVjBPaUJwYm5aaGJHbGtJR2h2YzNRNklHMXBjM05wYm1jZ0oyaDBkSEE2THk4bklHOXlJQ2RvZEhSd2N6b3ZMeWNoWENJcE8xeHVJQ0FnSUhKbGRIVnlianRjYmlBZ2ZWeHVYRzRnSUM4dklFTnZibTVsWTNRZ2RHaGxJSE52WTJ0bGRDNWNiaUFnWTI5dWJtVmpkRk52WTJ0bGRDZ3BPMXh1WEc1Y2JpQWdMeThnVW1WMGRYSnVJSFJvWlNCdVpYZHNlU0JqY21WaGRHVmtJSE52WTJ0bGRDNWNiaUFnY21WMGRYSnVJR2x1YzNSaGJtTmxPMXh1ZlR0Y2JseHVYRzRnSUM4dklGUm9aU0J3ZFdKc2FXTWdRbWx1WVhKNVUyOWphMlYwSUdsdWMzUmhibU5sTGx4dUlDQnlaWFIxY200Z2UxeHVJQ0FnSUM4dklFOXdaVzRnWVc1a0lISmxkSFZ5YmlCaElHNWxkeUJDYVc1aGNubFRiMk5yWlhRdVhHNGdJQ0FnTHk4Z1ZHaGxJR1pwY25OMElHRnlaM1Z0Wlc1MElHbHpJSEpsY1hWcGNtVmtMaUJKZENCa1pXWnBibVZ6SUdFZ2FHOXpkQ0IzYUdsamFDQm9ZWE1nZEc4Z2MzUmhjblFnZDJsMGFGeHVJQ0FnSUM4dklHaDBkSEE2THk4Z2IzSWdhSFIwY0hNNkx5OGdiM0lnTHlCbWIzSWdZVzRnWVdKemIyeDFkR1VnY0dGMGFDQjFjMmx1WnlCMGFHVWdZM1Z5Y21WdWRDQm9iM04wTGx4dUlDQWdJQzh2SUZSb1pTQnpaV052Ym1RZ1lYSm5kVzFsYm5RZ1pHVm1hVzVsY3lCdmNIUnBiMjVoYkNCdmNIUnBiMjV6TGx4dUlDQWdJRzl3Wlc0NklHOXdaVzVUYjJOclpYUXNYRzVjYmlBZ0lDQXZMeUJEY21WaGRHVWdZU0J1WlhjZ1FubDBaVUoxWm1abGNpNWNiaUFnSUNBdkx5QlBjSFJwYjI1aGJHeDVJSE5sZENCMGFHVWdhVzF3YkdsamFYUkhjbTkzZEdnZ1ltOXZiR1ZoYmk1Y2JpQWdJQ0F2THlCWGNtRndjR1Z5SUdadmNpQktZWFpoVTJOeWFYQjBKM01nUVhKeVlYbENkV1ptWlhJdlJHRjBZVlpwWlhjZ2JXRnBiblJoYVc1cGJtY2dhVzVrWlhnZ1lXNWtJR1JsWm1GMWJIUWdaVzVrYVdGdWJtVnpjeTVjYmlBZ0lDQXZMeUJOYjNKbElHbHVabTl5YldGMGFXOXVPaUJvZEhSd2N6b3ZMMmRwZEdoMVlpNWpiMjB2WkdWelpYSjBZbWwwTDJKNWRHVXRZblZtWm1WeVhHNGdJQ0FnYm1WM1FubDBaVUoxWm1abGNqb2dablZ1WTNScGIyNG9aR0YwWVN3Z2FXMXdiR2xqYVhSSGNtOTNkR2dwSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ1WlhjZ1FubDBaVUoxWm1abGNpaGtZWFJoTENCQ2VYUmxRblZtWm1WeUxrSkpSMTlGVGtSSlFVNHNJR2x0Y0d4cFkybDBSM0p2ZDNSb0tUdGNiaUFnSUNCOUxGeHVYRzRnSUNBZ0x5OGdRMjl1ZG1WeWRDQmhiaUJCY25KaGVVSjFabVpsY2lCMGJ5QmhJSE4wY21sdVp5NWNiaUFnSUNCaWVYUmxjMVJ2VTNSeWFXNW5PaUJtZFc1amRHbHZiaWhpS1NCN1hHNGdJQ0FnSUNCMllYSWdZbUlnUFNCMGFHbHpMbTVsZDBKNWRHVkNkV1ptWlhJb1lpazdYRzRnSUNBZ0lDQnlaWFIxY200Z1ltSXVjbVZoWkZOMGNtbHVaeWdwTzF4dUlDQWdJSDBzWEc1Y2JpQWdJQ0F2THlCRGIyNTJaWEowSUdFZ2MzUnlhVzVuSUhSdklHRnVJRUZ5Y21GNVFuVm1abVZ5TGx4dUlDQWdJSE4wY21sdVoxUnZRbmwwWlhNNklHWjFibU4wYVc5dUtITXBJSHRjYmlBZ0lDQWdJSFpoY2lCaUlEMGdkR2hwY3k1dVpYZENlWFJsUW5WbVptVnlLREVzSUhSeWRXVXBPMXh1SUNBZ0lDQWdZaTUzY21sMFpWTjBjbWx1WnloektUdGNiaUFnSUNBZ0lISmxkSFZ5YmlCaUxtSjFabVpsY2p0Y2JpQWdJQ0I5WEc0Z0lIMDdYRzU5S0NrN1hHNGlYU3dpWm1sc1pTSTZJbUpwYm1GeWVYTnZZMnRsZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJdmMyOTFjbU5sTHlKOVxuXG4gICAgLypcbiAqICBQcm90b24gLSBBIHBvd2VyZnVsIHBsYXRmb3JtIGZvciB5b3VyIHJlYWwtdGltZSB3ZWIgYXBwbGljYXRpb25zXG4gKiAgQ29weXJpZ2h0IChDKSAyMDE3ICBSb2xhbmQgU2luZ2VyIDxyb2xhbmQuc2luZ2VyW2F0XWRlc2VydGJpdC5jb20+XG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBmcmVlIHNvZnR3YXJlOiB5b3UgY2FuIHJlZGlzdHJpYnV0ZSBpdCBhbmQvb3IgbW9kaWZ5XG4gKiAgaXQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSBhcyBwdWJsaXNoZWQgYnlcbiAqICB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLCBlaXRoZXIgdmVyc2lvbiAzIG9mIHRoZSBMaWNlbnNlLCBvclxuICogIChhdCB5b3VyIG9wdGlvbikgYW55IGxhdGVyIHZlcnNpb24uXG4gKlxuICogIFRoaXMgcHJvZ3JhbSBpcyBkaXN0cmlidXRlZCBpbiB0aGUgaG9wZSB0aGF0IGl0IHdpbGwgYmUgdXNlZnVsLFxuICogIGJ1dCBXSVRIT1VUIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mXG4gKiAgTUVSQ0hBTlRBQklMSVRZIG9yIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLiAgU2VlIHRoZVxuICogIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogIFlvdSBzaG91bGQgaGF2ZSByZWNlaXZlZCBhIGNvcHkgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiAgYWxvbmcgd2l0aCB0aGlzIHByb2dyYW0uICBJZiBub3QsIHNlZSA8aHR0cDovL3d3dy5nbnUub3JnL2xpY2Vuc2VzLz4uXG4gKi9cblxuLypcbiAqICBUaGlzIGNvZGUgbGl2ZXMgaW5zaWRlIHRoZSBQcm90b24gZnVuY3Rpb24uXG4gKi9cblxuUHJvdG9uLnV0aWxzID0ge1xuICAgIC8vIE1pbWljcyBqUXVlcnkncyBleHRlbmQgbWV0aG9kLlxuICAgIC8vIFNvdXJjZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTE5NzI0Ny9qYXZhc2NyaXB0LWVxdWl2YWxlbnQtb2YtanF1ZXJ5cy1leHRlbmQtbWV0aG9kXG4gICAgZXh0ZW5kOiBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gYXJndW1lbnRzW2ldKVxuICAgICAgICAgICAgICAgIGlmIChhcmd1bWVudHNbaV0uaGFzT3duUHJvcGVydHkoa2V5KSlcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzWzBdW2tleV0gPSBhcmd1bWVudHNbaV1ba2V5XTtcbiAgICAgICAgcmV0dXJuIGFyZ3VtZW50c1swXTtcbiAgICB9LFxuXG4gICAgcmFuZG9tU3RyaW5nOiBmdW5jdGlvbihsZW4pIHtcbiAgICAgICAgdmFyIHRleHQgPSBcIlwiO1xuICAgICAgICB2YXIgcG9zc2libGUgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG4gICAgICAgIGZvciggdmFyIGk9MDsgaSA8IGxlbjsgaSsrICkge1xuICAgICAgICAgICAgdGV4dCArPSBwb3NzaWJsZS5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcG9zc2libGUubGVuZ3RoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgfSxcblxuICAgIGlzRnVuY3Rpb246IGZ1bmN0aW9uKGYpIHtcbiAgICAgICAgdmFyIGdldFR5cGUgPSB7fTtcbiAgICAgICAgcmV0dXJuIGYgJiYgZ2V0VHlwZS50b1N0cmluZy5jYWxsKGYpID09PSAnW29iamVjdCBGdW5jdGlvbl0nO1xuICAgIH1cbn07XG5cbiAgICBcbiAgICAvKlxuICogIFByb3RvbiAtIEEgcG93ZXJmdWwgcGxhdGZvcm0gZm9yIHlvdXIgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMTcgIFJvbGFuZCBTaW5nZXIgPHJvbGFuZC5zaW5nZXJbYXRdZGVzZXJ0Yml0LmNvbT5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiAgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqICBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKlxuICogIFRoaXMgY29kZSBsaXZlcyBpbnNpZGUgdGhlIFByb3RvbiBmdW5jdGlvbi5cbiAqL1xuXG4vLyBDb25uZWN0IHRoZSBzb2NrZXQgYW5kIHJldHVybiBhIG5ldyBQcm90b24gaW5zdGFuY2UuXG4vLyBUaGUgZmlyc3QgYXJndW1lbnQgZGVmaW5lcyBhIGhvc3Qgd2hpY2ggaGFzIHRvIHN0YXJ0IHdpdGhcbi8vIGh0dHA6Ly8gb3IgaHR0cHM6Ly8gb3IgLyBmb3IgYW4gYWJzb2x1dGUgcGF0aCB1c2luZyB0aGUgY3VycmVudCBob3N0LlxuLy8gVGhlIGRlZmF1bHQgaG9zdCB2YWx1ZSBpcyAvcHJvdG9uLlxuLy8gVGhlIHNlY29uZCBhcmd1bWVudCBkZWZpbmVzIG9wdGlvbmFsIG9wdGlvbnMuXG5Qcm90b24ubmV3ID0gZnVuY3Rpb24oaG9zdCwgb3B0aW9ucykge1xuICAgIC8vIEluY2x1ZGUgdGhlIGRlcGVuZGVuY2llcy5cbiAgICAvKlxuICogIFByb3RvbiAtIEEgcG93ZXJmdWwgcGxhdGZvcm0gZm9yIHlvdXIgcmVhbC10aW1lIHdlYiBhcHBsaWNhdGlvbnNcbiAqICBDb3B5cmlnaHQgKEMpIDIwMTcgIFJvbGFuZCBTaW5nZXIgPHJvbGFuZC5zaW5nZXJbYXRdZGVzZXJ0Yml0LmNvbT5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGZyZWUgc29mdHdhcmU6IHlvdSBjYW4gcmVkaXN0cmlidXRlIGl0IGFuZC9vciBtb2RpZnlcbiAqICBpdCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlIGFzIHB1Ymxpc2hlZCBieVxuICogIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sIGVpdGhlciB2ZXJzaW9uIDMgb2YgdGhlIExpY2Vuc2UsIG9yXG4gKiAgKGF0IHlvdXIgb3B0aW9uKSBhbnkgbGF0ZXIgdmVyc2lvbi5cbiAqXG4gKiAgVGhpcyBwcm9ncmFtIGlzIGRpc3RyaWJ1dGVkIGluIHRoZSBob3BlIHRoYXQgaXQgd2lsbCBiZSB1c2VmdWwsXG4gKiAgYnV0IFdJVEhPVVQgQU5ZIFdBUlJBTlRZOyB3aXRob3V0IGV2ZW4gdGhlIGltcGxpZWQgd2FycmFudHkgb2ZcbiAqICBNRVJDSEFOVEFCSUxJVFkgb3IgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlXG4gKiAgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2UgZm9yIG1vcmUgZGV0YWlscy5cbiAqXG4gKiAgWW91IHNob3VsZCBoYXZlIHJlY2VpdmVkIGEgY29weSBvZiB0aGUgR05VIEdlbmVyYWwgUHVibGljIExpY2Vuc2VcbiAqICBhbG9uZyB3aXRoIHRoaXMgcHJvZ3JhbS4gIElmIG5vdCwgc2VlIDxodHRwOi8vd3d3LmdudS5vcmcvbGljZW5zZXMvPi5cbiAqL1xuXG4vKlxuICogIFRoaXMgY29kZSBsaXZlcyBpbnNpZGUgdGhlIFByb3RvbiBpbnN0YW5jZS5cbiAqL1xuXG52YXIgTW9kdWxlcyA9IGZ1bmN0aW9uKCkge1xuICAgIC8qXG4gICAgICogQ29uc3RhbnRzXG4gICAgICovXG5cbiAgICB2YXIgcmtleUxlbiA9IDE0O1xuXG5cblxuICAgIC8qXG4gICAgICogVmFyaWFibGVzXG4gICAgICovXG5cbiAgICB2YXIgY2FsbGJhY2tzTWFwID0ge307XG5cblxuXG4gICAgLypcbiAgICAgKiBNZXRob2RzXG4gICAgICovXG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyQ0JFcnJvcihjYiwgbXNnKSB7XG4gICAgICAgIC8vIFRyaWdnZXIgdGhlIGVycm9yIGNhbGxiYWNrIGlmIGRlZmluZWQuXG4gICAgICAgIC8vIE90aGVyd2lzZSB0cmlnZ2VyIHRoZSBnbG9iYWwgZXJyb3IgZXZlbnQuXG4gICAgICAgIGlmIChjYi5lcnJvcikge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYi5lcnJvcihtc2cpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvdG9uOiBlcnJvciBjYWxsYmFjazogY2F0Y2hlZCBleGNlcHRpb246XCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdHJpZ2dlckVycm9yKG1zZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYWxsIGEgbW9kdWxlIG1ldGhvZCBvbiB0aGUgc2VydmVyLXNpZGUuXG4gICAgZnVuY3Rpb24gY2FsbE1ldGhvZChtb2R1bGUsIG1ldGhvZCkge1xuICAgICAgICB2YXIgcGFyYW1zID0gZmFsc2UsXG4gICAgICAgICAgICBjYWxsYmFjayA9IGZhbHNlLFxuICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IGZhbHNlO1xuXG4gICAgICAgIC8vIERlZmluZSBhIG1ldGhvZCB0byBwcmludCBlcnJvciBtZXNzYWdlcy5cbiAgICAgICAgdmFyIGxvZ0Vycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb3RvbjogaW52YWxpZCBtZXRob2QgY2FsbDogbW9kdWxlPSdcIiArIG1vZHVsZSArIFwiJyBtZXRob2Q9J1wiICsgbWV0aG9kICsgXCInXCIpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFRoZSBtZXRob2QgbmFtZSBoYXMgdG8gYmUgZGVmaW5lZC5cbiAgICAgICAgaWYgKCFtb2R1bGUgfHwgIW1ldGhvZCkge1xuICAgICAgICAgICAgbG9nRXJyb3IoKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFBhcnNlIHRoZSBmdW5jdGlvbiBhcmd1bWVudHMuXG4gICAgICAgIGZvciAodmFyIGkgPSAyOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGlzIGFyZ3VtZW50IGlzIHRoZSBwYXJhbWV0ZXIgb2JqZWN0LlxuICAgICAgICAgICAgaWYgKGFyZyAhPT0gbnVsbCAmJiB0eXBlb2YgYXJnID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGFscmVhZHkgc2V0LlxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXMgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvZ0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHBhcmFtZXRlciBvYmplY3QuXG4gICAgICAgICAgICAgICAgcGFyYW1zID0gYXJnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhpcyBhcmd1bWVudCBpcyBhIGNhbGxiYWNrIGZ1bmN0aW9uLlxuICAgICAgICAgICAgZWxzZSBpZiAoUHJvdG9uLnV0aWxzLmlzRnVuY3Rpb24oYXJnKSkge1xuICAgICAgICAgICAgICAgIC8vIFNldCB0aGUgc3VjY2VzcyBjYWxsYmFjayBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayA9IGFyZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gU2V0IHRoZSBlcnJvciBjYWxsYmFjayBpZiBub3QgYWxyZWFkeSBzZXQuXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZXJyb3JDYWxsYmFjayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JDYWxsYmFjayA9IGFyZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gVG9vIG1hbnkgZnVuY3Rpb25zIHBhc3NlZCB0byB0aGlzIG1ldGhvZC4gSGFuZGxlIHRoZSBlcnJvci5cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nRXJyb3IoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhhbmRsZSB1bmtub3duIHR5cGVzLlxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nRXJyb3IoKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcmVhdGUgdGhlIHJlcXVlc3QgaGVhZGVyLlxuICAgICAgICB2YXIgaGVhZGVyID0ge1xuICAgICAgICAgICAgTW9kdWxlOiBtb2R1bGUsXG4gICAgICAgICAgICBNZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgICAgIFJLZXk6IFwiXCIsICAgICAgIC8vIElmIGVtcHR5LCBubyByZXR1cm4gd2lsbCBiZSBjYWxsZWQuXG4gICAgICAgICAgICBIZWFkZXI6IHt9ICAgICAgLy8gVE9ET1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIFJlZ2lzdGVyIHRoZSBjYWxsYmFja3MgaWYgZGVmaW5lZC5cbiAgICAgICAgaWYgKGNhbGxiYWNrICE9PSBmYWxzZSB8fCBlcnJvckNhbGxiYWNrICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcmFuZG9tIHJldHVybiBrZXkgYW5kIGNoZWNrIGlmIGl0IGRvZXMgbm90IGV4aXN0IGFscmVhZHkuXG4gICAgICAgICAgICB2YXIgcmtleTtcbiAgICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgICAgICBya2V5ID0gUHJvdG9uLnV0aWxzLnJhbmRvbVN0cmluZyhya2V5TGVuKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbGxiYWNrc01hcFtya2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBjYWxsYmFja3MgbWFwIGl0ZW0uXG4gICAgICAgICAgICB2YXIgY2IgPSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6ICAgY2FsbGJhY2ssXG4gICAgICAgICAgICAgICAgZXJyb3I6ICAgICAgZXJyb3JDYWxsYmFja1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgdGltZW91dC5cbiAgICAgICAgICAgIGNiLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNiLnRpbWVvdXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIC8vIFJlbW92ZSB0aGUgY2FsbGJhY2sgb2JqZWN0IGFnYWluIGZyb20gdGhlIG1hcC5cbiAgICAgICAgICAgICAgICBkZWxldGUgY2FsbGJhY2tzTWFwW3JrZXldO1xuXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciB0aGUgZXJyb3IgY2FsbGJhY2suXG4gICAgICAgICAgICAgICAgdHJpZ2dlckNCRXJyb3IoY2IsIFwibWV0aG9kIGNhbGwgdGltZW91dDogbm8gc2VydmVyIHJlc3BvbnNlIHJlY2VpdmVkIHdpdGhpbiB0aGUgdGltZW91dFwiKTtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMubWV0aG9kQ2FsbFRpbWVvdXQpO1xuXG4gICAgICAgICAgICBjYWxsYmFja3NNYXBbcmtleV0gPSBjYjtcbiAgICAgICAgICAgIGhlYWRlci5SS2V5ID0gcmtleTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFdyaXRlIHRoZSByZXF1ZXN0IHRvIHRoZSBzZXJ2ZXIuXG4gICAgICAgIHdyaXRlKFJlcXVlc3RUeXBlLk1ldGhvZENhbGwsIGhlYWRlciwgcGFyYW1zKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaGFuZGxlTWV0aG9kUmV0dXJuKGhlYWRlciwgcGF5bG9hZCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaGVhZGVyID0gbXNncGFjay5kZWNvZGUoaGVhZGVyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm90b246IGhhbmRsZSByZXR1cm4gcmVxdWVzdDogY2F0Y2hlZCBleGNlcHRpb246IG1zZ3BhY2sgZGVjb2RlOlwiLCBlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFRoZSByZXR1cm4ga2V5IG11c3QgYmUgdmFsaWQuXG4gICAgICAgIGlmICghaGVhZGVyLlJLZXkgfHwgU3RyaW5nKGhlYWRlci5SS2V5KS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRyaWdnZXJFcnJvcihcImZhaWxlZCB0byBoYW5kbGUgcmV0dXJuIHJlcXVlc3Q6IGludmFsaWQgcmV0dXJuIGtleVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9idGFpbiB0aGUgY2FsbGJhY2sgb2JqZWN0LlxuICAgICAgICB2YXIgY2IgPSBjYWxsYmFja3NNYXBbaGVhZGVyLlJLZXldO1xuICAgICAgICBpZiAoIWNiKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXJyb3IoXCJmYWlsZWQgdG8gaGFuZGxlIHJldHVybiByZXF1ZXN0OiBpbnZhbGlkIHJldHVybiBrZXlcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgdGhlIGNhbGxiYWNrIG9iamVjdCBmcm9tIHRoZSBtYXAuXG4gICAgICAgIGRlbGV0ZSBjYWxsYmFja3NNYXBbaGVhZGVyLlJLZXldO1xuXG4gICAgICAgIC8vIFN0b3AgdGhlIHRpbWVvdXQuXG4gICAgICAgIGlmIChjYi50aW1lb3V0KSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoY2IudGltZW91dCk7XG4gICAgICAgICAgICBjYi50aW1lb3V0ID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDYWxsIHRoZSByZXF1aXJlZCBjYWxsYmFjay5cbiAgICAgICAgaWYgKGhlYWRlci5FcnIgJiYgU3RyaW5nKGhlYWRlci5FcnIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRyaWdnZXJDQkVycm9yKGNiLCBTdHJpbmcoaGVhZGVyLkVycikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFjYi5jYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBheWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gbXNncGFjay5kZWNvZGUocGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb3RvbjogaGFuZGxlIHJldHVybiByZXF1ZXN0OiBjYXRjaGVkIGV4Y2VwdGlvbjogbXNncGFjayBkZWNvZGU6XCIsIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjYi5jYWxsYmFjayhwYXlsb2FkKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb3RvbjogaGFuZGxlIHJldHVybiByZXF1ZXN0OiBjYXRjaGVkIGV4Y2VwdGlvbjpcIiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLypcbiAgICAgKiBQdWJsaWMgbW9kdWxlcyBpbnN0YW5jZS5cbiAgICAgKi9cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKG1vZHVsZSkge1xuICAgICAgICAgICAgLy8gUmV0dXJuIHRoZSBwdWJsaWMgbW9kdWxlIGluc3RhbmNlLlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAvLyBjYWxsIGEgbW9kdWxlIG1ldGhvZCBvbiB0aGUgc2VydmVyLXNpZGUuXG4gICAgICAgICAgICAgICAgY2FsbDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFByZXBlbmQgdGhlIG1vZHVsZSB2YXJpYWJsZSB0byB0aGUgYXJndW1lbnRzIGFycmF5LlxuICAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUudW5zaGlmdC5jYWxsKGFyZ3VtZW50cywgbW9kdWxlKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDYWxsIHRoZSBtZXRob2QuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsTWV0aG9kLmFwcGx5KGNhbGxNZXRob2QsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcblxuICAgICAgICBoYW5kbGVNZXRob2RSZXR1cm46IGhhbmRsZU1ldGhvZFJldHVyblxuICAgIH07XG59KCk7XG5cblxuXG4gICAgLypcbiAgICAgKiBDb25zdGFudHNcbiAgICAgKi9cblxuICAgIHZhciBQcm90b2NvbFZlcnNpb24gPSAwLFxuICAgICAgICBIZWFkU2l6ZSA9IDgsXG4gICAgICAgIE1heEhlYWRlckJ1ZmZlclNpemUgPSAzMCAqIDEwMjQ7IC8vIDMwIEtCXG5cbiAgICB2YXIgUmVxdWVzdFR5cGUgPSB7XG4gICAgICAgIENsb3NlOiAwLFxuICAgICAgICBQaW5nOiAxLFxuICAgICAgICBQb25nOiAyLFxuICAgICAgICBNZXRob2RDYWxsOiAzLFxuICAgICAgICBNZXRob2RSZXR1cm46IDRcbiAgICB9O1xuXG4gICAgdmFyIERlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAvLyBLaWxsIHRoZSBjb25uZWN0IGF0dGVtcHQgYWZ0ZXIgdGhlIHRpbWVvdXQuXG4gICAgICAgIGNvbm5lY3RUaW1lb3V0OiAxMDAwMCxcblxuICAgICAgICAvLyBUaGUgcmVjb25uZWN0IHRpbWVvdXQuXG4gICAgICAgIHJlY29ubmVjdFRpbWVvdXQ6IDMwMDAsXG5cbiAgICAgICAgLy8gRGlzY29ubmVjdHMgdGhlIHNvY2tldCBpZiBubyBwb25nIHJlc3BvbnNlIGlzIHJlY2VpdmVkIHdpdGhpbiB0aGlzIHRpbWVvdXQuXG4gICAgICAgIGtlZXBhbGl2ZVRpbWVvdXQ6IDQ1MDAwLFxuXG4gICAgICAgIC8vIElmIG5vIHJlcXVlc3QgaXMgcmVjZWl2ZWQsIGNoZWNrIGlmIHRoZSBjb25uZWN0aW9uIGlzIHN0aWxsIGFsaXZlIHdpdGhpbmcgdGhpcyBpbnRlcnZhbC5cbiAgICAgICAgcGluZ0ludGVydmFsOiAgMzAwMDAsXG5cbiAgICAgICAgLy8gVHRoZSBtYXhpbXVtIG1lc3NhZ2UgcGF5bG9hZCBzaXplIGluIGJ5dGVzLlxuICAgICAgICBtYXhNZXNzYWdlU2l6ZTogMzAwICogMTAyNCwgLy8gMzAwIEtCXG5cbiAgICAgICAgLy8gVGltZW91dCB3aGVuIGEgY2FsbCByZXF1ZXN0IHdpbGwgYmUgY2FuY2VsbGVkLlxuICAgICAgICBtZXRob2RDYWxsVGltZW91dDogMTIwMDBcbiAgICB9O1xuXG5cblxuICAgIC8qXG4gICAgICogVmFyaWFibGVzXG4gICAgICovXG5cbiAgICB2YXIgYnMsIC8vIEJhY2tlbmQgc29ja2V0LlxuICAgICAgICBpc0Nvbm5lY3RlZCAgICAgICAgICAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgcmVjb25uZWN0VGltZW91dCAgICAgICAgICAgID0gZmFsc2UsXG4gICAgICAgIGtlZXBhbGl2ZVRpbWVvdXQgICAgICAgICAgICA9IGZhbHNlLFxuICAgICAgICBwaW5nVGltZW91dCAgICAgICAgICAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgd3JpdGVDYWNoZSAgICAgICAgICAgICAgICAgID0gW107XG5cblxuXG4gICAgLypcbiAgICAgKiBQdWJsaWMgSW5zdGFuY2VcbiAgICAgKi9cblxuICAgIHZhciBpbnN0YW5jZSA9IHtcbiAgICAgICAgLy8gQ2xvc2UgdGhlIHNvY2tldCBjb25uZWN0aW9uLlxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9zZVNvY2tldCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIFJldHVybnMgYSBib29sZWFuIHdoZW5ldmVyIHRoZSBzb2NrZXQgaXMgY3VycmVudGx5IGNvbm5lY3RlZC5cbiAgICAgICAgaXNDb25uZWN0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGlzQ29ubmVjdGVkO1xuICAgICAgICB9LFxuXG4gICAgICAgIG1vZHVsZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIE1vZHVsZXMuZ2V0KG5hbWUpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEhpbnQ6IEZ1cnRoZXIgYXZhaWxhYmxlIGV2ZW50IGZ1bmN0aW9uLlxuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHdoaWNoIGlzIHRyaWdnZXJlZCBkdXJpbmcgYSBjb25uZWN0aW5nIGF0dGVtcHQuXG4gICAgICAgIG9uQ29ubmVjdGluZzogZnVuY3Rpb24oKSB7fSxcblxuICAgICAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyB0aGUgY29ubmVjdGlvbiB3YXMgZXN0YWJsaXNoZWQuXG4gICAgICAgIG9uQ29ubmVjdGVkOiBmdW5jdGlvbigpIHt9LFxuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHdoaWNoIGlzIHRyaWdnZXJlZCBpZiB0aGUgY29ubmVjdGlvbiB3YXMgbG9zdC5cbiAgICAgICAgb25EaXNjb25uZWN0ZWQ6IGZ1bmN0aW9uKCkge30sXG5cbiAgICAgICAgLy8gRnVuY3Rpb24gd2hpY2ggaXMgdHJpZ2dlcmVkIG9uIGFueSBlcnJvci5cbiAgICAgICAgLy8gQW4gb3B0aW9uYWwgZXJyb3IgbWVzc2FnZSBpcyBwYXNzZWQuXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uKG1zZykge1xuICAgICAgICAgICAgaWYgKG1zZykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvdG9uIGVycm9yOiBcIiArIG1zZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvdG9uIGVycm9yOiBhbiB1bmtub3duIGVycm9yIG9jY3VycmVkXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuXG5cbiAgICAvKlxuICAgICAqIE1ldGhvZHNcbiAgICAgKi9cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJDb25uZWN0aW5nKCkge1xuICAgICAgICBpZiAoaW5zdGFuY2Uub25Db25uZWN0aW5nKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLm9uQ29ubmVjdGluZygpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvdG9uOiBvbkNvbm5lY3Rpbmc6IGNhdGNoZWQgZXhjZXB0aW9uOlwiLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHRyaWdnZXJDb25uZWN0ZWQoKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5vbkNvbm5lY3RlZCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5vbkNvbm5lY3RlZCgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvdG9uOiBvbkNvbm5lY3RlZDogY2F0Y2hlZCBleGNlcHRpb246XCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlckRpc2Nvbm5lY3RlZCgpIHtcbiAgICAgICAgaWYgKGluc3RhbmNlLm9uRGlzY29ubmVjdGVkKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLm9uRGlzY29ubmVjdGVkKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm90b246IG9uRGlzY29ubmVjdGVkOiBjYXRjaGVkIGV4Y2VwdGlvbjpcIiwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB0cmlnZ2VyRXJyb3IobXNnKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5vbkVycm9yKSB7XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLm9uRXJyb3IobXNnKTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlByb3Rvbjogb25FcnJvcjogY2F0Y2hlZCBleGNlcHRpb246XCIsIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdHJpZ2dlckZhdGFsKG1zZykge1xuICAgICAgICB0cmlnZ2VyRXJyb3IobXNnKTtcbiAgICAgICAgY2xvc2VTb2NrZXQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbG9zZVNvY2tldCgpIHtcbiAgICAgICAgaXNDb25uZWN0ZWQgPSBmYWxzZTtcblxuICAgICAgICAvLyBDbG9zZSB0aGUgc29ja2V0IGlmIGNvbm5lY3RlZC5cbiAgICAgICAgaWYgKGJzKSB7XG4gICAgICAgICAgICAvLyBKdXN0IHRvIGdvIHN1cmUgbm8gZXZlbnQgaXMgdHJpZ2dlcmVkIGFmdGVyIHRoZSBjbG9zZS5cbiAgICAgICAgICAgIGJzLm9uT3BlbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGJzLm9uQ2xvc2UgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBicy5vbkVycm9yID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgYnMub25SZWFkID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgICAvLyBUcnkgdG8gd3JpdGUgdGhlIGNsb3NlIGZyYW1lIGlmIHBvc3NpYmxlLlxuICAgICAgICAgICAgd3JpdGUoUmVxdWVzdFR5cGUuQ2xvc2UpO1xuXG4gICAgICAgICAgICBicy5jbG9zZSgpO1xuICAgICAgICAgICAgYnMgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgIHRyaWdnZXJEaXNjb25uZWN0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0b3AgdGltZW91dHMuXG4gICAgICAgIHN0b3BLZWVwYWxpdmVUaW1lb3V0KCk7XG4gICAgICAgIHN0b3BQaW5nVGltZW91dCgpO1xuICAgICAgICBzdG9wUmVjb25uZWN0VGltZW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlY29ubmVjdFNvY2tldCgpIHtcbiAgICAgICAgY2xvc2VTb2NrZXQoKTtcblxuICAgICAgICAvLyBTdGFydCByZWNvbm5lY3RpbmcuXG4gICAgICAgIHN0YXJ0UmVjb25uZWN0VGltZW91dCgpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbm5lY3RTb2NrZXQoKSB7XG4gICAgICAgIHRyaWdnZXJDb25uZWN0aW5nKCk7XG5cbiAgICAgICAgYnMgPSBCaW5hcnlTb2NrZXQub3Blbihob3N0LCB7XG4gICAgICAgICAgICBmb3JjZVNvY2tldFR5cGU6IFwiV2ViU29ja2V0XCIsXG4gICAgICAgICAgICBjb25uZWN0VGltZW91dDogb3B0aW9ucy5jb25uZWN0VGltZW91dFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFicykge1xuICAgICAgICAgICAgdHJpZ2dlckZhdGFsKFwiUHJvdG9uOiBmYXRhbDogZmFpbGVkIHRvIGNyZWF0ZSBiaW5hcnkgc29ja2V0XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRnVuY3Rpb24gd2hpY2ggaXMgdHJpZ2dlcmVkIGFzIHNvb24gYXMgdGhlIGNvbm5lY3Rpb24gaXMgZXN0YWJsaXNoZWQuXG4gICAgICAgIGJzLm9uT3BlbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVzZXRLZWVwYWxpdmVUaW1lb3V0KCk7XG4gICAgICAgICAgICByZXNldFBpbmdUaW1lb3V0KCk7XG4gICAgICAgICAgICB0cmlnZ2VyQ29ubmVjdGVkKCk7XG4gICAgICAgICAgICBmbHVzaFdyaXRlQ2FjaGUoKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyZWQgYXMgc29vbiBhcyB0aGUgY29ubmVjdGlvbiBjbG9zZXMuXG4gICAgICAgIGJzLm9uQ2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vIEFsd2F5cyByZWNvbm5lY3QgdGhlIHNvY2tldC5cbiAgICAgICAgICAgIHJlY29ubmVjdFNvY2tldCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIEZ1bmN0aW9uIHdoaWNoIGlzIHRyaWdnZXJlZCBhcyBzb29uIGFzIHRoZSBjb25uZWN0aW9uIGNsb3NlcyB3aXRoIGFuIGVycm9yLlxuICAgICAgICAvLyBBbiBvcHRpb25hbCBlcnJvciBtZXNzYWdlIGlzIHBhc3NlZC5cbiAgICAgICAgLy8gb25DbG9zZSBpcyBhbHNvIHRyaWdnZXJlZCBhZnRlcndhcmRzLlxuICAgICAgICBicy5vbkVycm9yID0gZnVuY3Rpb24obXNnKSB7XG4gICAgICAgICAgICB0cmlnZ2VyRXJyb3IobXNnKTtcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBGdW5jdGlvbiB3aGljaCBpcyB0cmlnZ2VyIG9uIHJlYWQuXG4gICAgICAgIGJzLm9uUmVhZCA9IG5ld1JlYWRIYW5kbGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RhcnRSZWNvbm5lY3RUaW1lb3V0KCkge1xuICAgICAgICAvLyBTdGFydCB0aGUgdGltZW91dC5cbiAgICAgICAgcmVjb25uZWN0VGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZWNvbm5lY3RUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgICAgICBjb25uZWN0U29ja2V0KCk7XG4gICAgICAgIH0sIG9wdGlvbnMucmVjb25uZWN0VGltZW91dCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFJlY29ubmVjdFRpbWVvdXQoKSB7XG4gICAgICAgIGlmIChyZWNvbm5lY3RUaW1lb3V0ICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHJlY29ubmVjdFRpbWVvdXQpO1xuICAgICAgICAgICAgcmVjb25uZWN0VGltZW91dCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzZXRLZWVwYWxpdmVUaW1lb3V0KCkge1xuICAgICAgICBzdG9wS2VlcGFsaXZlVGltZW91dCgpO1xuXG4gICAgICAgIC8vIFN0YXJ0IHRoZSB0aW1lb3V0LiBDbG9zZSB0aGUgc29ja2V0IG9uIHRpbWVvdXQgYW5kIHRyeSB0byByZWNvbm5lY3QuXG4gICAgICAgIGtlZXBhbGl2ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAga2VlcGFsaXZlVGltZW91dCA9IGZhbHNlO1xuICAgICAgICAgICAgdHJpZ2dlckVycm9yKFwiY29ubmVjdGlvbiBjbG9zZWQ6IHNlcnZlciBkaWQgbm90IHJlc3BvbmRcIik7XG4gICAgICAgICAgICByZWNvbm5lY3RTb2NrZXQoKTtcbiAgICAgICAgfSwgb3B0aW9ucy5rZWVwYWxpdmVUaW1lb3V0KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBzdG9wS2VlcGFsaXZlVGltZW91dCgpIHtcbiAgICAgICAgaWYgKGtlZXBhbGl2ZVRpbWVvdXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoa2VlcGFsaXZlVGltZW91dCk7XG4gICAgICAgICAgICBrZWVwYWxpdmVUaW1lb3V0ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXNldFBpbmdUaW1lb3V0KCkge1xuICAgICAgICBzdG9wUGluZ1RpbWVvdXQoKTtcblxuICAgICAgICAvLyBTdGFydCB0aGUgdGltZW91dCB0byByZXF1ZXN0IGEgcG9uZyByZXNwb25zZS5cbiAgICAgICAgcGluZ1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcGluZ1RpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdyaXRlKFJlcXVlc3RUeXBlLlBpbmcpO1xuICAgICAgICB9LCBvcHRpb25zLnBpbmdJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3RvcFBpbmdUaW1lb3V0KCkge1xuICAgICAgICBpZiAocGluZ1RpbWVvdXQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQocGluZ1RpbWVvdXQpO1xuICAgICAgICAgICAgcGluZ1RpbWVvdXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1JlYWRIYW5kbGVyKCkge1xuICAgICAgICB2YXIgcmVhZEJ1ZiAgICAgICAgICAgICA9IEJpbmFyeVNvY2tldC5uZXdCeXRlQnVmZmVyKEhlYWRTaXplLCB0cnVlKSxcbiAgICAgICAgICAgIGhhc0hlYWQgICAgICAgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGhhc0hlYWRlckRhdGEgICAgICAgPSBmYWxzZSxcbiAgICAgICAgICAgIGluZGV4ICAgICAgICAgICAgICAgPSAwLFxuICAgICAgICAgICAgcmVxVHlwZSxcbiAgICAgICAgICAgIGhlYWRlckxlbixcbiAgICAgICAgICAgIHBheWxvYWRMZW4sXG4gICAgICAgICAgICBoZWFkZXJEYXRhLFxuICAgICAgICAgICAgcGF5bG9hZERhdGE7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIHRoZSBuZXcgcmVjZWl2ZWQgZGF0YSB0byBvdXIgcmVhZCBidWZmZXIuXG4gICAgICAgICAgICAgICAgcmVhZEJ1Zi5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHJlYWRCdWYud3JpdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgaW5kZXggPSByZWFkQnVmLmluZGV4O1xuICAgICAgICAgICAgICAgIHJlYWRCdWYuZnJvbnQoKTtcblxuICAgICAgICAgICAgICAgIC8vIFJlYWQgdGhlIGhlYWQgaWYgcmVxdWlyZWQuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNIZWFkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgaWYgbm90IGVub3VnaCBieXRlcyBhcmUgYXZhaWxhYmxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZEJ1Zi5sZW5ndGggPCBIZWFkU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGZpcnN0IGJ5dGUgaXMgdGhlIHZlcnNpb24gZmllbGQuXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgcHJvdG9jb2wgdmVyc2lvbiBtYXRjaGVzLlxuICAgICAgICAgICAgICAgICAgICB2YXIgYiA9IHJlYWRCdWYucmVhZEJ5dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGIgIT09IFByb3RvY29sVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJpZ2dlckZhdGFsKFwiZmFpbGVkIHRvIHJlYWQgcmVxdWVzdDogaW52YWxpZCBwcm90b2NvbCB2ZXJzaW9uXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgaGVhZGVyIGZpZWxkcy5cbiAgICAgICAgICAgICAgICAgICAgcmVxVHlwZSA9IHJlYWRCdWYucmVhZEJ5dGUoKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyTGVuID0gcmVhZEJ1Zi5yZWFkVW5zaWduZWRTaG9ydCgpO1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkTGVuID0gcmVhZEJ1Zi5yZWFkVW5zaWduZWRJbnQoKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbWF4aW11bSBoZWFkZXIgc2l6ZSBpcyBleGNlZWRlZC5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlYWRlckxlbiA+IE1heEhlYWRlckJ1ZmZlclNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJGYXRhbChcImZhaWxlZCB0byByZWFkIHJlcXVlc3Q6IG1heGltdW0gaGVhZGVyIHNpemUgZXhjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgbWF4aW11bSBtZXNzYWdlIHNpemUgaXMgZXhjZWVkZWRcbiAgICAgICAgICAgICAgICAgICAgLy8gKE9ubHkgdGhlIHBheWxvYWQgc2l6ZSB3aXRob3V0IHRoZSBoZWFkZXIpLlxuICAgICAgICAgICAgICAgICAgICBpZiAocGF5bG9hZExlbiA+IG9wdGlvbnMubWF4TWVzc2FnZVNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyaWdnZXJGYXRhbChcImZhaWxlZCB0byByZWFkIHJlcXVlc3Q6IG1heGltdW0gcGF5bG9hZCBzaXplIGV4Y2VlZGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaGFzSGVhZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gUmVhZCB0aGUgaGVhZGVyIGRhdGEgaWYgcmVxdWlyZWQuXG4gICAgICAgICAgICAgICAgaWYgKCFoYXNIZWFkZXJEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFNraXAgaWYgbm90IGVub3VnaCBieXRlcyBhcmUgYXZhaWxhYmxlLlxuICAgICAgICAgICAgICAgICAgICBpZiAocmVhZEJ1Zi5sZW5ndGggPCBoZWFkZXJMZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChoZWFkZXJMZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJEYXRhID0gcmVhZEJ1Zi5yZWFkKGhlYWRlckxlbikucmF3O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaGFzSGVhZGVyRGF0YSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gU2tpcCBpZiBub3QgZW5vdWdoIGJ5dGVzIGFyZSBhdmFpbGFibGUuXG4gICAgICAgICAgICAgICAgaWYgKHJlYWRCdWYubGVuZ3RoIDwgcGF5bG9hZExlbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHBheWxvYWRMZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWREYXRhID0gcmVhZEJ1Zi5yZWFkKHBheWxvYWRMZW4pLnJhdztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgdGhlIHJlcXVlc3QuXG4gICAgICAgICAgICAgICAgaGFuZGxlUmVxdWVzdChyZXFUeXBlLCBoZWFkZXJEYXRhLCBwYXlsb2FkRGF0YSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCBldmVyeXRoaW5nLlxuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICBoYXNIZWFkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaGFzSGVhZGVyRGF0YSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGhlYWRlckRhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgcGF5bG9hZERhdGEgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICAgICAgICAvLyBSZXNldCB0aGUgYnVmZmVyLCBidXQga2VlcCB1bnJlYWQgYnl0ZXMuXG4gICAgICAgICAgICAgICAgcmVhZEJ1Zi5jbGlwKDAsIHJlYWRCdWYuaW5kZXgpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUHJvdG9uOiBvblJlYWQ6IGNhdGNoZWQgZXhjZXB0aW9uOlwiLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KHJlcVR5cGUsIGhlYWRlckRhdGEsIHBheWxvYWREYXRhKSB7XG4gICAgICAgIC8vIFJlc2V0IHRoZSB0aW1lb3V0cy5cbiAgICAgICAgcmVzZXRLZWVwYWxpdmVUaW1lb3V0KCk7XG4gICAgICAgIHJlc2V0UGluZ1RpbWVvdXQoKTtcblxuICAgICAgICAvLyBDaGVjayB0aGUgcmVxdWVzdCB0eXBlLlxuICAgICAgICBzd2l0Y2ggKHJlcVR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgUmVxdWVzdFR5cGUuQ2xvc2U6XG4gICAgICAgICAgICAgICAgLy8gVGhlIHNvY2tldCBwZWVyIGhhcyBjbG9zZWQgdGhlIGNvbm5lY3Rpb24uIFJlY29ubmVjdC4uLlxuICAgICAgICAgICAgICAgIHJlY29ubmVjdFNvY2tldCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFJlcXVlc3RUeXBlLlBpbmc6XG4gICAgICAgICAgICAgICAgLy8gVGhlIHNvY2tldCBwZWVyIGhhcyByZXF1ZXN0ZWQgYSBwb25nIHJlc3BvbnNlLlxuICAgICAgICAgICAgICAgIHdyaXRlKFJlcXVlc3RUeXBlLlBvbmcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFJlcXVlc3RUeXBlLlBvbmc6XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgZG8gYW55dGhpbmcuIFRoZSBzb2NrZXQgdGltZW91dHMgaGF2ZSBhbHJlYWR5IGJlZW4gcmVzZXQuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgUmVxdWVzdFR5cGUuTWV0aG9kUmV0dXJuOlxuICAgICAgICAgICAgICAgIE1vZHVsZXMuaGFuZGxlTWV0aG9kUmV0dXJuKGhlYWRlckRhdGEsIHBheWxvYWREYXRhKTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXJyb3IoXCJmYWlsZWQgdG8gaGFuZGxlIHJlcXVlc3Q6IGludmFsaWQgcmVxdWVzdCB0eXBlOiBcIiArIFN0cmluZyhyZXFUeXBlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhcldyaXRlQ2FjaGUoKSB7XG4gICAgICAgIHdyaXRlQ2FjaGUgPSBbXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmbHVzaFdyaXRlQ2FjaGUoKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd3JpdGVDYWNoZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGMgPSB3cml0ZUNhY2hlW2ldO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYWNoZVwiKTtcbiAgICAgICAgICAgIHdyaXRlKGMucmVxVHlwZSwgYy5oZWFkZXIsIGMuZGF0YSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjbGVhcldyaXRlQ2FjaGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB3cml0ZShyZXFUeXBlLCBoZWFkZXIsIGRhdGEsIGRpc2FibGVDYWNoZSkge1xuICAgICAgICAvLyBJZiBub3QgY29ubmVjdGVkIGFkZCBpdCB0byB0aGUgdGVtcG9yYXJ5IHdyaXRlIGNhY2hlLlxuICAgICAgICBpZiAoIWlzQ29ubmVjdGVkKSB7XG4gICAgICAgICAgICBpZiAoIWRpc2FibGVDYWNoZSkge1xuICAgICAgICAgICAgICAgIHdyaXRlQ2FjaGUucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHJlcVR5cGU6ICAgIHJlcVR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogICAgIGhlYWRlcixcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogICAgICAgZGF0YVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXJyb3IoXCJmYWlsZWQgc2VuZCByZXF1ZXN0OiBub3QgY29ubmVjdGVkIHRvIHNlcnZlclwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB2YXIgYiA9IEJpbmFyeVNvY2tldC5uZXdCeXRlQnVmZmVyKDEsIHRydWUpLFxuICAgICAgICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAgICAgICAgcGF5bG9hZExlbiA9IDAsXG4gICAgICAgICAgICAgICAgaGVhZGVyTGVuID0gMDtcblxuICAgICAgICAgICAgLy8gTWFyc2hhbCB0aGUgcGF5bG9hZCBkYXRhIGlmIHByZXNlbnQuXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xuICAgICAgICAgICAgICAgIHBheWxvYWQgPSBtc2dwYWNrLmVuY29kZShkYXRhKTtcbiAgICAgICAgICAgICAgICBwYXlsb2FkTGVuID0gcGF5bG9hZC5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSBtYXhpbXVtIG1lc3NhZ2Ugc2l6ZSBpcyBleGNlZWRlZFxuICAgICAgICAgICAgLy8gKE9ubHkgdGhlIHBheWxvYWQgc2l6ZSB3aXRob3V0IHRoZSBoZWFkZXIpLlxuICAgICAgICAgICAgaWYgKHBheWxvYWRMZW4gPiBvcHRpb25zLm1heE1lc3NhZ2VTaXplKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlckVycm9yKFwiZmFpbGVkIHRvIHNlbmQgcmVxdWVzdDogbWF4aW11bSBwYXlsb2FkIHNpemUgZXhjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBNYXJzaGFsIHRoZSBoZWFkZXIgZGF0YSBpZiBwcmVzZW50LlxuICAgICAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgICAgIGhlYWRlciA9IG1zZ3BhY2suZW5jb2RlKGhlYWRlcik7XG4gICAgICAgICAgICAgICAgaGVhZGVyTGVuID0gaGVhZGVyLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1heGltdW0gaGVhZGVyIHNpemUgaXMgZXhjZWVkZWQuXG4gICAgICAgICAgICBpZiAoaGVhZGVyTGVuID4gTWF4SGVhZGVyQnVmZmVyU2l6ZSkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJFcnJvcihcImZhaWxlZCB0byBzZW5kIHJlcXVlc3Q6IG1heGltdW0gaGVhZGVyIHNpemUgZXhjZWVkZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaWxsIG91ciBtZXNzYWdlIGJ1ZmZlci5cbiAgICAgICAgICAgIGIud3JpdGVVbnNpZ25lZEJ5dGUoUHJvdG9jb2xWZXJzaW9uKTtcbiAgICAgICAgICAgIGIud3JpdGVVbnNpZ25lZEJ5dGUocmVxVHlwZSk7XG4gICAgICAgICAgICBiLndyaXRlVW5zaWduZWRTaG9ydChoZWFkZXJMZW4pO1xuICAgICAgICAgICAgYi53cml0ZVVuc2lnbmVkSW50KHBheWxvYWRMZW4pO1xuXG4gICAgICAgICAgICBpZiAoaGVhZGVyTGVuID4gMCkge1xuICAgICAgICAgICAgICAgIGIud3JpdGUoaGVhZGVyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHBheWxvYWRMZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgYi53cml0ZShwYXlsb2FkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gV3JpdGUgdG8gdGhlIHNvY2tldC5cbiAgICAgICAgICAgIGJzLndyaXRlKGIuYnVmZmVyKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJQcm90b246IHdyaXRlOiBjYXRjaGVkIGV4Y2VwdGlvbjpcIiwgZSk7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG4gICAgLypcbiAgICAgKiBJbml0aWFsaXplIHNlY3Rpb25cbiAgICAgKi9cblxuICAgIC8vIE1lcmdlIHRoZSBvcHRpb25zIHdpdGggdGhlIGRlZmF1bHQgb3B0aW9ucy5cbiAgICBvcHRpb25zID0gUHJvdG9uLnV0aWxzLmV4dGVuZCh7fSwgRGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuXG4gICAgLy8gU2V0IHRoZSBkZWZhdWx0IGhvc3QgaWYgbm90IHNldC5cbiAgICBpZiAoIWhvc3QpIHtcbiAgICAgICAgaG9zdCA9IFwiL3Byb3RvblwiO1xuICAgIH1cblxuICAgIC8vIENvbm5lY3QgZHVyaW5nIHRoZSBuZXh0IHRpY2suXG4gICAgLy8gVGhlIHVzZXIgc2hvdWxkIGJlIGFibGUgdG8gY29ubmVjdCB0aGUgZXZlbnQgZnVuY3Rpb25zIGZpcnN0LlxuICAgIHNldFRpbWVvdXQoY29ubmVjdFNvY2tldCwgMCk7XG5cbiAgICAvLyBSZXR1cm4gdGhlIG5ld2x5IGNyZWF0ZWQgc29ja2V0LlxuICAgIHJldHVybiBpbnN0YW5jZTtcbn07XG5cblxuICAgIHJldHVybiBQcm90b247XG59KCk7XG4iXSwiZmlsZSI6InByb3Rvbi5qcyJ9
