'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = require('../common/util.js');

//EVENT_NAME_MAP 用来决定哪种事件种类在 transition/animation end 时该被触发。
var EVENT_NAME_MAP = {
    transitionend: {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'mozTransitionEnd',
        'OTransition': 'oTransitionEnd',
        'msTransition': 'MSTransitionEnd'
    },

    animationend: {
        'animation': 'animationend',
        'WebkitAnimation': 'webkitAnimationEnd',
        'MozAnimation': 'mozAnimationEnd',
        'OAnimation': 'oAnimationEnd',
        'msAnimation': 'MSAnimationEnd'
    }
}; //TransitionEventHandler.js

var endEvents = [];

//
var detectEvents = function detectEvents() {
    var testEl = document.createElement('div');
    var style = testEl.style;

    if (!('AnimationEvent' in window)) {
        delete EVENT_NAME_MAP.animationend.animation;
    }
    if (!('TransitionEvent' in window)) {
        delete EVENT_NAME_MAP.animationend.transition;
    }

    for (var baseEventName in EVENT_NAME_MAP) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
            if (styleName in style) {
                endEvents.push(baseEvents[styleName]);
                break;
            }
        }
    }
};

detectEvents();

var TransitionEventsHandler = {
    addEndEventListener: function addEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
            //CSS transition not supported, use setTimeout run eventListener immediately.
            window.setTimeout(eventListener, 0);
        }
        endEvents.forEach(function (endEvent) {
            (0, _util.on)(node, endEvent, eventListener, false);
        });
    },
    removeEndEventListener: function removeEndEventListener(node, eventListener) {
        if (endEvents.length === 0) {
            return;
        }
        endEvents.forEach(function (endEvent) {
            (0, _util.off)(node, endEvent, eventListener, false);
        });
    }
};

exports.default = TransitionEventsHandler;