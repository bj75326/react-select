'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//util.js

var on = exports.on = function on(element, type, handler, userCapture) {
    if (document.attachEvent) {
        element.attachEvent('on' + type, handler);
    } else if (document.addEventListener) {
        element.addEventListener(type, handler, userCapture);
    }
};

var off = exports.off = function off(element, type, handler, userCapture) {
    if (document.detachEvent) {
        element.detachEvent('on' + type, handler);
    } else if (document.removeEventListener) {
        element.removeEventListener(type, handler, userCapture);
    }
};