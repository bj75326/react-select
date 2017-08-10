(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (true) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(12)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require('./factoryWithThrowingShims')();
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _screenReaderStyles = __webpack_require__(14);

var _screenReaderStyles2 = _interopRequireDefault(_screenReaderStyles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A React component for the font-awesome icon library.
 *
 * @param {String} [ariaLabel] An extra accessibility label to put on the icon
 * @param {Boolean} [border=false] Whether or not to show a border radius
 * @param {String} [className] An extra set of CSS classes to add to the component
 * @param {Object} [cssModule] Option to pass FontAwesome CSS as a module
 * @param {Boolean} [fixedWidth=false] Make buttons fixed width
 * @param {String} [flip=false] Flip the icon's orientation.
 * @param {Boolean} [inverse=false]Inverse the icon's color
 * @param {String} name Name of the icon to use
 * @param {Boolean} [pulse=false] Rotate icon with 8 steps, rather than smoothly
 * @param {Number} [rotate] The degress to rotate the icon by
 * @param {String} [size] The icon scaling size
 * @param {Boolean} [spin=false] Spin the icon
 * @param {String} [stack] Stack an icon on top of another
 * @param {String} [tag=span] The HTML tag to use as a string, eg 'i' or 'em'
 * @module FontAwesome
 * @type {ReactClass}
 */
var FontAwesome = function (_React$Component) {
  _inherits(FontAwesome, _React$Component);

  function FontAwesome() {
    _classCallCheck(this, FontAwesome);

    var _this = _possibleConstructorReturn(this, (FontAwesome.__proto__ || Object.getPrototypeOf(FontAwesome)).call(this));

    _this.displayName = 'FontAwesome';
    return _this;
  }

  _createClass(FontAwesome, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          border = _props.border,
          cssModule = _props.cssModule,
          className = _props.className,
          fixedWidth = _props.fixedWidth,
          flip = _props.flip,
          inverse = _props.inverse,
          name = _props.name,
          pulse = _props.pulse,
          rotate = _props.rotate,
          size = _props.size,
          spin = _props.spin,
          stack = _props.stack,
          _props$tag = _props.tag,
          tag = _props$tag === undefined ? 'span' : _props$tag,
          ariaLabel = _props.ariaLabel,
          props = _objectWithoutProperties(_props, ['border', 'cssModule', 'className', 'fixedWidth', 'flip', 'inverse', 'name', 'pulse', 'rotate', 'size', 'spin', 'stack', 'tag', 'ariaLabel']);

      var classNames = [];

      if (cssModule) {
        classNames.push(cssModule['fa']);
        classNames.push(cssModule['fa-' + name]);
        size && classNames.push(cssModule['fa-' + size]);
        spin && classNames.push(cssModule['fa-spin']);
        pulse && classNames.push(cssModule['fa-pulse']);
        border && classNames.push(cssModule['fa-border']);
        fixedWidth && classNames.push(cssModule['fa-fw']);
        inverse && classNames.push(cssModule['fa-inverse']);
        flip && classNames.push(cssModule['fa-flip-' + flip]);
        rotate && classNames.push(cssModule['fa-rotate-' + rotate]);
        stack && classNames.push(cssModule['fa-stack-' + stack]);
      } else {
        classNames.push('fa');
        classNames.push('fa-' + name);
        size && classNames.push('fa-' + size);
        spin && classNames.push('fa-spin');
        pulse && classNames.push('fa-pulse');
        border && classNames.push('fa-border');
        fixedWidth && classNames.push('fa-fw');
        inverse && classNames.push('fa-inverse');
        flip && classNames.push('fa-flip-' + flip);
        rotate && classNames.push('fa-rotate-' + rotate);
        stack && classNames.push('fa-stack-' + stack);
      }

      // Add any custom class names at the end.
      className && classNames.push(className);
      return _react2.default.createElement(tag, _extends({}, props, { 'aria-hidden': true, className: classNames.join(' ') }), ariaLabel ? _react2.default.createElement('span', { style: _screenReaderStyles2.default }, ariaLabel) : null);
    }
  }]);

  return FontAwesome;
}(_react2.default.Component);

FontAwesome.propTypes = {
  ariaLabel: _propTypes2.default.string,
  border: _propTypes2.default.bool,
  className: _propTypes2.default.string,
  cssModule: _propTypes2.default.object,
  fixedWidth: _propTypes2.default.bool,
  flip: _propTypes2.default.oneOf(['horizontal', 'vertical']),
  inverse: _propTypes2.default.bool,
  name: _propTypes2.default.string.isRequired,
  pulse: _propTypes2.default.bool,
  rotate: _propTypes2.default.oneOf([90, 180, 270]),
  size: _propTypes2.default.oneOf(['lg', '2x', '3x', '4x', '5x']),
  spin: _propTypes2.default.bool,
  stack: _propTypes2.default.oneOf(['1x', '2x']),
  tag: _propTypes2.default.string
};

exports.default = FontAwesome;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(17);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(19)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js?modules!./style.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js?modules!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(11);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (true) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



var emptyFunction = __webpack_require__(6);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (true) {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(5);
module.exports = __webpack_require__(5);


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //Select.js

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames4 = __webpack_require__(1);

var _classnames5 = _interopRequireDefault(_classnames4);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(3);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Option = __webpack_require__(15);

var _Option2 = _interopRequireDefault(_Option);

var _Value = __webpack_require__(16);

var _Value2 = _interopRequireDefault(_Value);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

var _defaultFilterOptions = __webpack_require__(21);

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultClearRenderer = __webpack_require__(23);

var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

var _defaultArrowRenderer = __webpack_require__(24);

var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

var _defaultMenuRenderer = __webpack_require__(25);

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

var _TransitionEventsHandler = __webpack_require__(26);

var _TransitionEventsHandler2 = _interopRequireDefault(_TransitionEventsHandler);

var _AutosizeInput = __webpack_require__(28);

var _AutosizeInput2 = _interopRequireDefault(_AutosizeInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var stringifyValue = function stringifyValue(value) {
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
    if (type === 'string') {
        return value;
    } else if (type === 'object') {
        return JSON.stringify(value);
    } else if (type === 'number' || type === 'boolean') {
        return String(value);
    } else {
        return '';
    }
};

var stringOrNode = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node]);

var Select = function (_Component) {
    _inherits(Select, _Component);

    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        var inputValue = '';
        if (!_this.props.multi && _this.props.searchable) {
            var valueArray = _this.getValueArray(_this.props.selectedValue);
            inputValue = valueArray[0] ? valueArray[0][_this.props.labelKey] : '';
        }

        _this.state = {
            inputValue: inputValue,
            showDropdown: false,
            isFocused: false,
            required: false,
            isPseudoFocused: false
            //focusedOption
        };
        return _this;
    }

    _createClass(Select, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            if (this.dropdown) {
                var prefixCls = this.props.prefixCls;

                var dropdownClassList = this.dropdown.classList;
                var endListener = this._endListener = function () {
                    var showDropdown = _this2.state.showDropdown;
                    if (!showDropdown) {
                        dropdownClassList.remove(_style2.default['slide-up-leave-active']);
                        dropdownClassList.remove(_style2.default[prefixCls + '-dropdown-active']);
                    } else {
                        dropdownClassList.remove(_style2.default['slide-up-enter-active']);
                    }
                };
                //dropdown动画结束事件绑定
                _TransitionEventsHandler2.default.addEndEventListener(this.dropdown, endListener);
            }
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {

            //dropdown动画在select组件卸载前解除绑定
            if (this.dropdown) {
                _TransitionEventsHandler2.default.removeEndEventListener(this.dropdown, this._endListener);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps() {}
    }, {
        key: 'componentWillUpdate',
        value: function componentWillUpdate(nextProps, nextState) {

            //某些情况下，filterOptions应该按照前一个状态的inputValue进行筛选。
            var prevInputValue = this.state.inputValue;
            var prevShowDropdown = this.state.showDropdown;
            var nextInputValue = nextState.inputValue;
            var nextShowDropdown = nextState.showDropdown;
            this._renderPrevOptions = false;
            this._prevInputValue = null;
            if (prevInputValue !== nextInputValue && prevShowDropdown === true && nextShowDropdown === false) {
                this._renderPrevOptions = true;
                this._prevInputValue = prevInputValue;
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {}
    }, {
        key: 'handleValueClick',
        value: function handleValueClick(option, event) {
            if (!this.props.onValueClick) {
                return;
            }
            this.props.onValueClick(option, event);
        }
    }, {
        key: 'handleKeyDown',
        value: function handleKeyDown(event) {
            if (this.props.disabled) return;

            if (this.props.onInputKeyDown) {
                this.props.onInputKeyDown(event);
                if (event.defaultPrevented) {
                    return;
                }
            }

            switch (event.keyCode) {
                case 8:
                    //backspace
                    if (!this.state.inputValue && this.props.backspaceRemoves) {
                        event.preventDefault();
                        this.popValue();
                    }
                    return;
                case 9:
                    //tab
                    if (event.shiftKey || !this.state.showDropdown || !this.props.tabSelectsValue) {
                        return;
                    }
                    this.selectFocusedOption();
                    return;
                case 13:
                    //enter
                    if (!this.state.showDropdown) return;
                    event.stopPropagation();
                    this.selectFocusedOption();
                    break;
                case 27:
                    //escape
                    if (this.state.showDropdown) {
                        this.closeDropdown();
                    } else if (this.props.clearable && this.props.escapeClearsValue) {
                        this.clearValue(event);
                        event.stopPropagation();
                    }
                    break;
                case 38:
                    //up
                    this.focusPrevOption();
                    break;
                case 40:
                    //down
                    this.focusNextOption();
                    break;
                case 33:
                    //page up
                    this.focusPageUpOption();
                    break;
                case 34:
                    //page down
                    this.focusPageDownOption();
                    break;
                case 35:
                    //end key
                    if (event.shiftKey) return;
                    this.focusEndOption();
                    break;
                case 36:
                    //home key
                    if (event.shiftKey) return;
                    this.focusStartOption();
                    break;
                case 46:
                    //delete
                    if (!this.state.inputValue && this.props.backspaceRemoves) {
                        event.preventDefault();
                        this.popValue();
                    }
                    return;
                default:
                    return;
            }

            event.preventDefault();
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(event) {
            //如果select组件为disabled，或者不为左键点击，不作处理
            if (this.props.disabled || event.button !== 0) {
                return;
            }
            //MouseDown事件如果发生在input上，默认操作
            //if(event.target.tagName === 'INPUT'){
            //    return;
            //}

            //阻止冒泡与默认行为
            event.stopPropagation();
            event.preventDefault();
            /*
            if(!this.props.searchable){
                this.focus();
                this.toggleDropdownClass();
                return;
            }*/
            if (!this.state.showDropdown) {
                this.focus();
                this.openDropdown();

                if (this.state.inputValue.length > 0) {
                    var input = this.input;
                    if (typeof input.getInput === 'function') {
                        input = input.getInput;
                    }
                    input.select();
                }
            } else {
                this.blurInput();
                //this.closeDropdown();
            }
        }
    }, {
        key: 'handleMouseDownOnMenu',
        value: function handleMouseDownOnMenu(event) {
            if (this.props.disabled || event.type === 'mousedown' && event.button !== 0) {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart() {
            this.dragging = false;
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove() {
            this.dragging = true;
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(event) {
            if (this.dragging) return;
            this.handleMouseDown(event);
        }
    }, {
        key: 'handleTouchEndClearValue',
        value: function handleTouchEndClearValue(event) {
            if (this.dragging) {
                return;
            }
            this.clearValue(event);
        }
    }, {
        key: 'selectFocusedOption',
        value: function selectFocusedOption() {
            if (this._focusedOption) {
                this.selectValue(this._focusedOption);
            }
        }
    }, {
        key: 'focusPrevOption',
        value: function focusPrevOption() {
            this.focusAdjacentOption('previous');
        }
    }, {
        key: 'focusNextOption',
        value: function focusNextOption() {
            this.focusAdjacentOption('next');
        }
    }, {
        key: 'focusPageUpOption',
        value: function focusPageUpOption() {
            this.focusAdjacentOption('page_up');
        }
    }, {
        key: 'focusPageDownOption',
        value: function focusPageDownOption() {
            this.focusAdjacentOption('page_down');
        }
    }, {
        key: 'focusEndOption',
        value: function focusEndOption() {
            this.focusAdjacentOption('end');
        }
    }, {
        key: 'focusStartOption',
        value: function focusStartOption() {
            this.focusAdjacentOption('start');
        }
    }, {
        key: 'focusAdjacentOption',
        value: function focusAdjacentOption(dir) {
            var options = this._visibleOptions.map(function (option, index) {
                return { option: option, index: index };
            }).filter(function (option) {
                return !option.option.disabled;
            });
            this._scrollToFocusedOptionOnUpdate = true; //
            if (!this.state.showDropdown) {
                this.openDropdown();
                this.setState({
                    inputValue: '',
                    focusedOption: this._focusedOption || (options.length ? options[dir === 'next' ? 0 : options.length - 1].option : null)
                });
                return;
            }
            if (!options.length) return;
            var focusedIndex = -1;
            for (var i = 0; i < options.length; i++) {
                if (this._focusedOption === options[i].option) {
                    focusedIndex = i;
                    break;
                }
            }
            if (dir === 'next' && focusedIndex !== -1) {
                focusedIndex = (focusedIndex + 1) % options.length;
            } else if (dir === 'previous') {
                if (focusedIndex > 0) {
                    focusedIndex = focusedIndex - 1;
                } else {
                    focusedIndex = options.length - 1;
                }
            } else if (dir === 'start') {
                focusedIndex = 0;
            } else if (dir === 'end') {
                focusedIndex = options.length - 1;
            } else if (dir === 'page_up') {
                var potentialIndex = focusedIndex - this.props.pageNumber;
                if (potentialIndex < 0) {
                    focusedIndex = 0;
                } else {
                    focusedIndex = potentialIndex;
                }
            } else if (dir === 'page_down') {
                var _potentialIndex = focusedIndex + this.props.pageNumber;
                if (_potentialIndex > options.length) {
                    focusedIndex = options.length;
                } else {
                    focusedIndex = _potentialIndex;
                }
            }

            if (focusedIndex === -1) {
                focusedIndex = 0;
            }

            this.setState({
                focusedOption: options[focusedIndex].option
            });
        }

        //dropdown动画切换，临时方案

    }, {
        key: 'toggleDropdownClass',
        value: function toggleDropdownClass() {
            var _this3 = this;

            if (!this.dropdown) return;

            var showDropdown = this.state.showDropdown;
            var prefixCls = this.props.prefixCls;

            var dropdownClassList = this.dropdown.classList;
            if (!showDropdown) {
                setTimeout(function () {
                    _this3.setState({ showDropdown: !showDropdown });
                    dropdownClassList.remove(_style2.default['slide-up-leave-active']);
                    dropdownClassList.add(_style2.default[prefixCls + '-dropdown-active']);
                    dropdownClassList.add(_style2.default['slide-up-enter-active']);
                }, 0);
            } else {
                setTimeout(function () {
                    _this3.setState({ showDropdown: !showDropdown });
                    dropdownClassList.remove(_style2.default['slide-up-enter-active']);
                    dropdownClassList.add(_style2.default['slide-up-leave-active']);
                }, 0);
            }
        }
    }, {
        key: 'openDropdown',
        value: function openDropdown() {
            if (!this.dropdown) return;

            var prefixCls = this.props.prefixCls;

            var dropdownClassList = this.dropdown.classList;

            this.setState({ showDropdown: true });
            dropdownClassList.remove(_style2.default['slide-up-leave-active']);
            dropdownClassList.add(_style2.default[prefixCls + '-dropdown-active']);
            dropdownClassList.add(_style2.default['slide-up-enter-active']);
        }
    }, {
        key: 'closeDropdown',
        value: function closeDropdown(nextState) {
            if (!this.dropdown) return;

            var dropdownClassList = this.dropdown.classList;
            var inputValue = '';

            if (!this.props.multi && this.props.searchable) {
                inputValue = this.resetInputValue();
            } else if (this.props.searchable && this.props.onCloseResetsInput) {
                inputValue = this.handleInputValueChange('');
            }

            inputValue = nextState ? nextState.inputValue : inputValue;
            var isFocused = nextState ? nextState.isFocused : this.state.isFocused;

            this.setState({
                showDropdown: false,
                inputValue: inputValue,
                isPseudoFocused: isFocused && !this.props.multi
            });

            dropdownClassList.remove(_style2.default['slide-up-enter-active']);
            dropdownClassList.add(_style2.default['slide-up-leave-active']);
        }

        //this.input 获取焦点

    }, {
        key: 'focus',
        value: function focus() {
            if (!this.input) return;
            this.input.focus();
        }
        //this.input 失去焦点

    }, {
        key: 'blurInput',
        value: function blurInput() {
            if (!this.input) return;
            this.input.blur();
        }
        //指定某个option获取焦点

    }, {
        key: 'focusOption',
        value: function focusOption(option) {
            this.setState({
                focusedOption: option
            });
        }

        //根据value获取相应option对象的数组

    }, {
        key: 'getValueArray',
        value: function getValueArray(value, nextProps) {
            var _this4 = this;

            var props = (typeof nextProps === 'undefined' ? 'undefined' : _typeof(nextProps)) === 'object' ? nextProps : this.props;
            if (props.multi) {
                if (typeof value === 'string') value = value.split(props.delimiter);
                if (!Array.isArray(value)) {
                    if (value === null || value === undefined) return [];
                    value = [value];
                }
                return value.map(function (value) {
                    return _this4.expandValue(value, props);
                }).filter(function (i) {
                    return i;
                });
            }
            var expandedValue = this.expandValue(value, props);
            return expandedValue ? [expandedValue] : [];
        }

        //根据value获取相应option对象
        //任何时候调用expandValue返回的是options数组的某个对象引用，方便之后setValue时直接比较

    }, {
        key: 'expandValue',
        value: function expandValue(value, props) {
            if (typeof value !== 'string' && typeof value !== 'number' && typeof value !== 'boolean') {
                return value;
            }
            var options = props.options,
                valueKey = props.valueKey;

            if (!options) {
                return;
            }
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var option = _step.value;

                    if (option[valueKey] === value) {
                        return option;
                    }
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion && _iterator.return) {
                        _iterator.return();
                    }
                } finally {
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
    }, {
        key: 'setValue',
        value: function setValue(value) {
            var _this5 = this;

            if (this.props.autoBlur) {
                this.blurInput();
            }

            if (!this.props.onChange) return;

            if (this.props.required) {
                var required = this.handleRequired(value, this.props.multi);
                this.setState({ required: required });
            }
            if (this.props.simpleValue && value) {
                value = this.props.multi ? value.map(function (i) {
                    return i[_this5.props.valueKey];
                }).join(this.props.delimiter) : value[this.props.valueKey];
            }
            this.props.onChange(this.props.ident, value);
        }
    }, {
        key: 'removeValue',
        value: function removeValue(value) {
            var _this6 = this;

            var valueArray = this.getValueArray(this.props.selectedValue);
            this.setValue(valueArray.filter(function (i) {
                return i !== value;
            }));
            //to fix multi input unmount issue
            setTimeout(function () {
                _this6.focus();
            }, 0);
        }
    }, {
        key: 'addValue',
        value: function addValue(value) {
            var _this7 = this;

            var valueArray = this.getValueArray(this.props.selectedValue);
            var visibleOptions = this._visibleOptions.filter(function (val) {
                return !val.disabled;
            });
            var lastValueIndex = visibleOptions.indexOf(value);
            this.setValue(valueArray.concat(value));
            if (visibleOptions.length - 1 === lastValueIndex) {
                this.focusOption(visibleOptions[lastValueIndex - 1]);
            } else if (visibleOptions.length > lastValueIndex) {
                this.focusOption(visibleOptions[lastValueIndex + 1]);
            }
            //to fix multi input unmount issue
            setTimeout(function () {
                _this7.focus();
            }, 0);
        }
    }, {
        key: 'popValue',
        value: function popValue() {
            var valueArray = this.getValueArray(this.props.selectedValue);
            if (!valueArray.length) return;
            if (valueArray[valueArray.length - 1].clearableValue === false) return;
            this.setValue(this.props.multi ? valueArray.slice(0, valueArray.length - 1) : null);
        }
    }, {
        key: 'selectValue',
        value: function selectValue(value) {
            var _this8 = this;

            if (this.props.multi) {
                this.setState({
                    inputValue: this.handleInputValueChange(''),
                    focusedOption: null
                }, function () {
                    var valueArray = _this8.getValueArray(_this8.props.selectedValue);
                    if (valueArray.indexOf(value) > -1) {
                        _this8.removeValue(value);
                    } else {
                        _this8.addValue(value);
                    }
                });
            } else {
                var inputValue = this.getOptionLabel(value) || '';
                this.closeDropdown();
                this.setState({
                    //showDropdown: false,
                    inputValue: this.handleInputValueChange(inputValue),
                    isPseudoFocused: true
                }, function () {
                    _this8.setValue(value);
                });
            }
        }
    }, {
        key: 'clearValue',
        value: function clearValue(event) {
            var _this9 = this;

            if (event && event.type === 'mousedown' && event.button !== 0) {
                return;
            }
            event.stopPropagation();
            event.preventDefault();
            this.setValue(this.getResetValue());
            setTimeout(function () {
                _this9.closeDropdown();
                _this9.focus();
            }, 0);
        }
    }, {
        key: 'getResetValue',
        value: function getResetValue() {
            if (this.props.resetValue !== undefined) {
                return this.props.resetValue;
            } else if (this.props.multi) {
                return [];
            } else {
                return null;
            }
        }

        //可输入单选在 closeDropdown blurInput 时，需要reset inputValue

    }, {
        key: 'resetInputValue',
        value: function resetInputValue() {
            var valueArray = this.getValueArray(this.props.selectedValue);
            var inputValue = valueArray[0] ? this.handleInputValueChange(valueArray[0][this.props.labelKey]) : this.handleInputValueChange('');
            return inputValue;
        }
    }, {
        key: 'handleInputBlur',
        value: function handleInputBlur(event) {
            if (this.dropdown && (this.dropdown === document.activeElement || this.dropdown.contains(document.activeElement))) {
                this.focus();
                return;
            }
            if (this.props.onBlur) {
                this.props.onBlur(event);
            }

            var onBlurredState = {
                isFocused: false,
                isPseudoFocused: false
            };

            if (!this.props.multi && this.props.searchable) {

                onBlurredState.inputValue = this.resetInputValue();
            } else if (this.props.onBlurResetsInput) {

                onBlurredState.inputValue = this.handleInputValueChange('');
            }
            //input blur 时需要关闭dropdown
            this.closeDropdown(onBlurredState);

            this.setState(onBlurredState);
        }
    }, {
        key: 'handleInputChange',
        value: function handleInputChange(event) {
            this.filterSlient = false;
            var newInputValue = event.target.value;
            if (this.state.inputValue !== newInputValue) {
                newInputValue = this.handleInputValueChange(newInputValue);
            }
            this.setState({
                inputValue: newInputValue,
                isPseudoFocused: false
            });
            this.openDropdown();
        }
    }, {
        key: 'handleInputValueChange',
        value: function handleInputValueChange(newValue) {
            if (this.props.onInputChange) {
                var nextState = this.props.onInputChange(newValue);
                if (nextState != null && (typeof nextState === 'undefined' ? 'undefined' : _typeof(nextState)) !== 'object') {
                    newValue = '' + nextState;
                }
            }
            return newValue;
        }
    }, {
        key: 'handleInputFocus',
        value: function handleInputFocus(event) {
            if (this.props.disabled) return;
            //后续补充
            //const showDropdown = this.state.showDropdown;
            if (this.props.onFocus) {
                this.props.onFocus(event);
            }
            this.filterSlient = true;
            this.setState({
                isFocused: true,
                isPseudoFocused: false
                //showDropdown: showDropdown
            });
        }

        //根据输入值筛选options

    }, {
        key: 'filterOptions',
        value: function filterOptions(excludeOptions) {
            var filterValue = '';
            if (this._renderPrevOptions) {
                filterValue = this._prevInputValue;
            } else {
                filterValue = this.state.inputValue;
            }
            var options = this.props.options || [];
            if (this.props.filterOptions) {
                var filterOptions = typeof this.props.filterOptions === 'function' ? this.props.filterOptions : _defaultFilterOptions2.default;
                return filterOptions(options, filterValue, excludeOptions, {
                    filterOption: this.props.filterOption,
                    ignoreAccents: this.props.ignoreAccents,
                    ignoreCase: this.props.ignoreCase,
                    labelKey: this.props.labelKey,
                    valueKey: this.props.valueKey,
                    matchPos: this.props.matchPos,
                    matchProp: this.props.matchProp
                });
            } else {
                return options;
            }
        }

        //获取当前focus的option的index。

    }, {
        key: 'getFocusableOptionIndex',
        value: function getFocusableOptionIndex(selectedOption) {
            var options = this._visibleOptions;

            if (!options.length) {
                return null;
            }
            var valueKey = this.props.valueKey;
            var focusedOption = this.state.focusedOption || selectedOption;

            if (focusedOption && !focusedOption.disabled) {
                console.log('++');
                console.log(focusedOption);
                var focusedOptionIndex = -1;
                options.some(function (option, index) {
                    var isOptionEqual = option[valueKey] === focusedOption[valueKey];
                    if (isOptionEqual) {
                        focusedOptionIndex = index;
                    }
                    return isOptionEqual;
                });
                if (focusedOptionIndex !== -1) {
                    return focusedOptionIndex;
                }
            }

            //如果当前state或者selectedOption都不能提供focusedIndex，返回第一个没有disabled的option index。
            for (var i = 0; i < options.length; i++) {
                if (!options[i].disabled) {
                    return i;
                }
            }

            return null;
        }

        //渲染一个hidden的input，用作表单提交

    }, {
        key: 'renderHiddenField',
        value: function renderHiddenField(valueArray) {
            var _this10 = this;

            if (!this.props.name) return;
            if (this.props.joinValues) {
                var value = valueArray.map(function (i) {
                    return stringifyValue(i[_this10.props.valueKey]);
                }).join(this.props.delimiter);
                return _react2.default.createElement('input', {
                    type: 'hidden',
                    name: this.props.name,
                    value: value,
                    disabled: this.props.disabled,
                    ref: function ref(_ref) {
                        _this10.value = _ref;
                    }
                });
            }
            return valueArray.map(function (item, index) {
                return _react2.default.createElement('input', {
                    key: "hidden." + index,
                    type: 'hidden',
                    name: _this10.props.name,
                    disabled: _this10.props.disabled,
                    value: stringifyValue(item[_this10.props.valueKey]),
                    ref: function ref(_ref2) {
                        _this10['value' + index] = _ref2;
                    }
                });
            });
        }
    }, {
        key: 'handleRequired',
        value: function handleRequired(value, multi) {
            if (!value) return true;
            return multi ? value.length === 0 : Object.keys(value).length === 0;
        }
    }, {
        key: 'getOptionLabel',
        value: function getOptionLabel(option) {
            return option[this.props.labelKey];
        }
    }, {
        key: 'renderValue',
        value: function renderValue(valueArray, showDropdown) {
            var _this11 = this;

            var renderLabel = this.props.valueRenderer || this.getOptionLabel.bind(this);
            var ValueComponent = this.props.valueComponent;

            var _props = this.props,
                prefixCls = _props.prefixCls,
                placeholder = _props.placeholder,
                multi = _props.multi,
                ident = _props.ident,
                disabled = _props.disabled,
                searchable = _props.searchable;
            //<div className={styles[`${prefixCls}-placeholder`]}>请选择</div>

            if (!valueArray.length) {
                //无值，不可输入，渲染placeholder
                return !searchable ? _react2.default.createElement(
                    'div',
                    { className: _style2.default[prefixCls + '-placeholder'] },
                    placeholder
                ) : null;
            }
            var onClick = this.props.onValueClick ? this.handleValueClick.bind(this) : null;

            if (multi) {
                //有值，多选，可输入&不可输入都应正常渲染value
                return valueArray.map(function (value, i) {
                    return _react2.default.createElement(
                        ValueComponent,
                        {
                            id: ident + '_value_' + i
                            //dom diff
                            , key: ident + '_value_' + i,
                            disabled: disabled,
                            option: value,
                            onClick: onClick,
                            onRemove: _this11.removeValue.bind(_this11)
                        },
                        renderLabel(value, i),
                        _react2.default.createElement(_reactFontawesome2.default, { name: 'times' })
                    );
                });
            } else if (!searchable) {
                //有值，单选，只有在不可输入的情况渲染value，可输入用input代替
                if (showDropdown) onClick = null;
                return _react2.default.createElement(
                    ValueComponent,
                    {
                        id: ident + '_value_item',
                        disabled: disabled,
                        onClick: onClick,
                        option: valueArray[0]
                    },
                    renderLabel(valueArray[0])
                );
            }
            /*
            if(multi){
                //有值 多选
                return valueArray.map((value, i)=>{
                    return (
                        <ValueComponent
                            id={ident + '_value_' + i}
                            disabled={disabled}
                            option={value}
                            onClick={onClick}
                            onRemove={this.removeValue.bind(this)}
                        >
                            {renderLabel(value, i)}
                            <FontAwesome name="times"/>
                        </ValueComponent>
                    );
                });
            }else if(!this.state.inputValue){
                //有值 单选 没输入
                if(showDropdown) onClick = null;
                return (
                    <ValueComponent
                        id={ident + '_value_item'}
                        disabled={disabled}
                        onClick={onClick}
                        option={valueArray[0]}
                    >
                        {renderLabel(valueArray[0])}
                    </ValueComponent>
                );
            } */
        }
    }, {
        key: 'renderInput',
        value: function renderInput(valueArray, focusedOptionIndex) {
            var _classnames,
                _this12 = this;

            var showDropdown = this.state.showDropdown;

            var prefixCls = this.props.prefixCls;

            var ariaOwns = (0, _classnames5.default)((_classnames = {}, _defineProperty(_classnames, this.props.ident + '-list', showDropdown), _defineProperty(_classnames, this.props.ident + '-backspace-remove-message', this.props.multi && !this.props.disabled && this.state.isFocused && !this.state.inputValue), _classnames));

            var inputProps = Object.assign({}, this.props.inputProps, {
                role: 'combobox',
                'aria-expanded': '' + showDropdown,
                'aria-owns': ariaOwns,
                'aria-haspopup': '' + showDropdown,
                'aria-activedescendant': showDropdown ? this.props.ident + '-option-' + focusedOptionIndex : this.props.ident + '-value',
                'aria-describedby': this.props['aria-describedby'],
                'aria-labelledby': this.props['aria-labelledby'],
                'aria-label': this.props['aria-labels'],
                tabIndex: this.props.tabIndex,
                onBlur: this.handleInputBlur.bind(this),
                onChange: this.handleInputChange.bind(this),
                onFocus: this.handleInputFocus.bind(this),
                ref: function ref(_ref3) {
                    return _this12.input = _ref3;
                },
                required: this.state.required,
                value: this.state.inputValue
            });

            if (this.props.inputRenderer) {
                return this.props.inputRenderer(inputProps);
            }

            if (this.props.disabled || !this.props.searchable) {
                var divProps = _objectWithoutProperties(this.props.inputProps, []);

                var _ariaOwns = (0, _classnames5.default)(_defineProperty({}, this.props.ident + '-list', showDropdown));

                return _react2.default.createElement('div', _extends({}, divProps, {
                    role: 'combobox',
                    'aria-expanded': showDropdown,
                    'aria-owns': _ariaOwns,
                    'aria-activedescendant': showDropdown ? this.props.ident + '-option-' + focusedOptionIndex : this.props.ident + '-value',
                    className: _style2.default[prefixCls + '-input'],
                    tabIndex: this.props.tabIndex || 0,
                    onBlur: this.handleInputBlur.bind(this),
                    onFocus: this.handleInputFocus.bind(this),
                    ref: function ref(_ref4) {
                        return _this12.input = _ref4;
                    },
                    'aria-readonly': '' + !!this.props.disabled,
                    style: { border: 0, width: 1, display: 'inline-block' }
                }));
            }

            if (this.props.multi && valueArray.length > 0) {
                return _react2.default.createElement(_AutosizeInput2.default, _extends({}, inputProps, { prefixCls: 'bin-select', className: _style2.default[prefixCls + '-input'] }));
            }

            return _react2.default.createElement(
                'div',
                { className: _style2.default[prefixCls + '-input'] },
                _react2.default.createElement('input', _extends({}, inputProps, { placeholder: this.props.placeholder }))
            );
        }

        //<span className={styles[`${prefixCls}-clean`]}><FontAwesome name="times-circle"/></span>

    }, {
        key: 'renderClear',
        value: function renderClear(valueArray) {
            if (!this.props.clearable || !valueArray.length || this.props.disabled) return;

            var clear = this.props.clearRenderer();

            return _react2.default.createElement(
                'span',
                { className: _style2.default[this.props.prefixCls + '-clean-zone'],
                    title: this.props.multi ? this.props.clearAllText : this.props.clearValueText,
                    'aria-label': this.props.multi ? this.props.clearAllText : this.props.clearValueText,
                    onMouseDown: this.clearValue.bind(this),
                    onTouchStart: this.handleTouchStart.bind(this),
                    onTouchMove: this.handleTouchMove.bind(this),
                    onTouchEnd: this.handleTouchEndClearValue.bind(this)
                },
                _react2.default.createElement(
                    'span',
                    { className: _style2.default[this.props.prefixCls + '-clean'] },
                    clear
                )
            );
        }

        //<span className={styles[`${prefixCls}-arrow`]}><FontAwesome name="caret-down"/></span>

    }, {
        key: 'renderArrow',
        value: function renderArrow() {

            var arrow = this.props.arrowRenderer();

            return _react2.default.createElement(
                'span',
                { className: _style2.default[this.props.prefixCls + '-arrow-zone'] },
                _react2.default.createElement(
                    'span',
                    { className: _style2.default[this.props.prefixCls + '-arrow'] },
                    arrow
                )
            );
        }
    }, {
        key: 'onOptionRef',
        value: function onOptionRef(ref, isFocused) {
            if (isFocused) {
                this.focused = ref;
            }
        }
    }, {
        key: 'renderMenu',
        value: function renderMenu(options, valueArray, focusedOption) {
            if (options && options.length) {
                return this.props.menuRenderer({
                    focusedOption: focusedOption,
                    focusOption: this.focusOption.bind(this),
                    ident: this.props.ident,
                    prefixCls: this.props.prefixCls,
                    multi: this.props.multi,
                    labelKey: this.props.labelKey,
                    onFocus: this.focusOption.bind(this),
                    onSelect: this.selectValue.bind(this),
                    optionClassName: this.props.optionClassName,
                    optionComponent: this.props.optionComponent,
                    optionRenderer: this.props.optionRenderer || this.getOptionLabel.bind(this),
                    options: options,
                    selectValue: this.selectValue.bind(this),
                    valueArray: valueArray,
                    valueKey: this.props.valueKey,
                    onOptionRef: this.onOptionRef.bind(this)
                });
            } else if (this.props.noResultText) {
                return _react2.default.createElement(
                    'ul',
                    { className: _style2.default[this.props.prefixCls + '-not-found'] },
                    _react2.default.createElement(
                        'li',
                        null,
                        this.props.noResultText
                    )
                );
            } else {
                return null;
            }
        }
    }, {
        key: 'renderDropdown',
        value: function renderDropdown(options, valueArray, focusedOption) {
            var _this13 = this;

            var dropdownStyle = {
                position: 'absolute',
                left: '0px',
                transformOrigin: 'center top 0px'
            };
            if (this.control) {
                dropdownStyle.width = this.control.offsetWidth + 'px';
                dropdownStyle.top = this.control.offsetHeight + 'px';
            }

            if (this.props.dropdownStyle) {
                Object.assign(dropdownStyle, this.props.dropdownStyle);
            }

            var menu = this.renderMenu(options, valueArray, focusedOption);

            return _react2.default.createElement(
                'div',
                { ref: function ref(_ref5) {
                        _this13.dropdown = _ref5;
                    }, className: _style2.default[this.props.prefixCls + '-dropdown'], style: dropdownStyle,
                    role: 'listbox', id: this.props.ident + '-list',
                    onMouseDown: this.handleMouseDownOnMenu.bind(this)
                },
                menu
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames3,
                _this14 = this;

            console.log('render!');
            //根据selectedValue获取已选择option对象数组。
            var valueArray = this.getValueArray(this.props.selectedValue);

            var options = void 0;

            var searchable = this.props.searchable;
            var multi = this.props.multi;
            //searchable === false, 不进行filterOptions，所有options显示
            //searchable === true, 进行filterOptions
            if (searchable === false || this.filterSlient === true) {
                options = this._visibleOptions = this.props.options;
            } else {
                options = this._visibleOptions = this.filterOptions(multi ? this.getValueArray(this.props.selectedValue) : null);
            }

            var focusedOptionIndex = this.getFocusableOptionIndex(valueArray[0]);
            console.log('focusedOptionIndex');
            console.log(focusedOptionIndex);
            var focusedOption = null;
            if (focusedOptionIndex !== null) {
                focusedOption = this._focusedOption = options[focusedOptionIndex];
            } else {
                focusedOption = this._focusedOption = null;
            }

            var showDropdown = this.state.showDropdown;
            var isFocused = this.state.isFocused;
            var isPseudoFocused = this.state.isPseudoFocused;

            var _props2 = this.props,
                className = _props2.className,
                prefixCls = _props2.prefixCls;


            var selectClassName = (0, _classnames5.default)((_classnames3 = {}, _defineProperty(_classnames3, _style2.default[prefixCls], true), _defineProperty(_classnames3, _style2.default[className], !!className), _defineProperty(_classnames3, _style2.default[prefixCls + '-single'], !multi), _defineProperty(_classnames3, _style2.default[prefixCls + '-multiple'], multi), _defineProperty(_classnames3, _style2.default[prefixCls + '-visible'], showDropdown), _defineProperty(_classnames3, _style2.default[prefixCls + '-focus'], isFocused), _defineProperty(_classnames3, _style2.default[prefixCls + '-pseudoFocus'], isPseudoFocused), _classnames3));

            return _react2.default.createElement(
                'div',
                { className: selectClassName, style: this.props.wrapperStyle },
                this.renderHiddenField(valueArray),
                _react2.default.createElement(
                    'div',
                    { className: _style2.default[prefixCls + '-control'],
                        ref: function ref(_ref6) {
                            _this14.control = _ref6;
                        },
                        style: this.props.style,
                        onKeyDown: this.handleKeyDown.bind(this),
                        onMouseDown: this.handleMouseDown.bind(this),
                        onTouchStart: this.handleTouchStart.bind(this),
                        onTouchMove: this.handleTouchMove.bind(this),
                        onTouchEnd: this.handleTouchEnd.bind(this)
                    },
                    _react2.default.createElement(
                        'span',
                        { className: _style2.default[prefixCls + '-value-wrapper'] },
                        this.renderValue(valueArray, showDropdown),
                        this.renderInput(valueArray, focusedOptionIndex)
                    ),
                    this.renderArrow(),
                    this.renderClear(valueArray)
                ),
                this.renderDropdown(options, valueArray, focusedOption)
            );
        }
    }]);

    return Select;
}(_react.Component);

Select.defaultProps = {
    prefixCls: 'bin-select',
    className: '',
    ident: '',
    selectedValue: '',
    multi: false,
    required: false,
    placeholder: '请选择',
    delimiter: ',',
    valueKey: 'value',

    filterOptions: _defaultFilterOptions2.default,
    ignoreAccents: true,
    ignoreCase: true,
    labelKey: 'label',
    matchPos: 'any',
    matchProp: 'any',

    searchable: false,

    joinValues: false,

    valueComponent: _Value2.default,
    simpleValue: false,

    onBlurResetsInput: true,
    backspaceRemoves: true,
    tabSelectsValue: true,
    clearable: true,
    escapeClearsValue: true,
    onCloseResetsInput: true,

    clearRenderer: _defaultClearRenderer2.default,
    arrowRenderer: _defaultArrowRenderer2.default,
    clearAllText: 'Clear All',
    clearValueText: 'Clear Value',

    noResultText: '无匹配数据',
    menuRenderer: _defaultMenuRenderer2.default,
    optionComponent: _Option2.default,
    pageNumber: 5
};
Select.PropTypes = {
    prefixCls: _propTypes2.default.string,
    className: _propTypes2.default.string,
    ident: _propTypes2.default.string.isRequired, //select组件实例key
    selectedValue: _propTypes2.default.any, //已选option value
    options: _propTypes2.default.array, //select所有选项 option object's array
    disabled: _propTypes2.default.bool,
    multi: _propTypes2.default.bool, //是否多选
    required: _propTypes2.default.bool, //Form控件是否要求必需有值, validator
    placeholder: _propTypes2.default.string, //placeholder
    delimiter: _propTypes2.default.string, //selectedValue多选分隔符
    valueKey: _propTypes2.default.string, //option对象value属性名
    onChange: _propTypes2.default.func, //母组件传递的更新句柄

    filterOptions: _propTypes2.default.any, //自定义筛选函数模块，设置为假值(false, 0, '')可跳过筛选
    filterOption: _propTypes2.default.func, //自定义条件筛选函数
    ignoreAccents: _propTypes2.default.bool, //筛选options时是否忽略特殊字符
    ignoreCase: _propTypes2.default.bool, //筛选options时是否忽略大小写
    labelKey: _propTypes2.default.string, //option对象label属性名
    matchPos: _propTypes2.default.string, //(any|start)筛选字符串任意位置或者从头开始匹配
    matchProp: _propTypes2.default.string, //(any|label|value)筛选基于option对象的哪个值

    searchable: _propTypes2.default.bool, //是否开启输入框和filterOption功能

    wrapperStyle: _propTypes2.default.object, //select补充样式
    style: _propTypes2.default.object, //select control补充样式

    name: _propTypes2.default.string, //input hidden name
    joinValues: _propTypes2.default.bool, //使用delimiter合并input hidden values，设置false渲染多个input

    valueRenderer: _propTypes2.default.func, //自定义渲染value的fn function(option){...}
    valueComponent: _propTypes2.default.func, //用来渲染value的react component
    onValueClick: _propTypes2.default.func, //已选value绑定的click事件句柄

    autoBlur: _propTypes2.default.bool, //选择某个option或者删除某个value(多选)后，是否自动失焦

    simpleValue: _propTypes2.default.bool, //setValue时用哪种方式传值给onChange，默认false传递完整value对象

    inputProps: _propTypes2.default.object, //自定义input属性
    inputRenderer: _propTypes2.default.func, //自定义渲染input的fn function(){...}

    'aria-describedby': _propTypes2.default.string,
    'aria-labelledby': _propTypes2.default.string,
    'aria-label': _propTypes2.default.string,

    tabIndex: _propTypes2.default.string, //tab index

    onFocus: _propTypes2.default.func, //select input(div)获取焦点回调句柄
    onBlur: _propTypes2.default.func, //select input(div)失去焦点回调句柄
    onBlurResetsInput: _propTypes2.default.bool, //select input 失去焦点时是否清空输入内容
    onInputChange: _propTypes2.default.func, //select input value改变回调句柄
    onInputKeyDown: _propTypes2.default.func, //select control 键盘事件回调句柄

    backspaceRemoves: _propTypes2.default.bool, //backSpace 按键是否移除selected value
    tabSelectsValue: _propTypes2.default.bool, //tab 按键是否触发select 当前焦点选项

    clearable: _propTypes2.default.bool, //select 已选值是否可以清除
    escapeClearsValue: _propTypes2.default.bool, //esc按键清除已选值
    onCloseResetsInput: _propTypes2.default.bool, //select input closeDropdown时是否清空输入内容

    clearRenderer: _propTypes2.default.func, //用来渲染clear 的函数
    arrowRenderer: _propTypes2.default.func, //用来渲染arrow 的函数
    clearAllText: stringOrNode, //指示用来清除所有selected value
    clearValueText: stringOrNode, //指示用来清除当前selected value
    resetValue: _propTypes2.default.any, //默认clearValue时的重置值

    dropdownStyle: _propTypes2.default.object, //dropdown自定义行内样式
    noResultText: stringOrNode, //没有可以匹配的option 时所要渲染的内容
    menuRenderer: _propTypes2.default.func, //用来渲染dropdown 的函数
    optionClassName: _propTypes2.default.string, //option自定义css 类
    optionComponent: _propTypes2.default.func, //用来渲染option的react component
    optionRenderer: _propTypes2.default.func, //自定义渲染option的fn

    pageNumber: _propTypes2.default.number //page up/down 按键指定条数
};
exports.default = Select;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(6);
var invariant = __webpack_require__(7);
var warning = __webpack_require__(8);

var ReactPropTypesSecret = __webpack_require__(9);
var checkPropTypes = __webpack_require__(13);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if ("development" !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
       true ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplid to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



if (true) {
  var invariant = __webpack_require__(7);
  var warning = __webpack_require__(8);
  var ReactPropTypesSecret = __webpack_require__(9);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'React.PropTypes.', componentName || 'React class', location, typeSpecName);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0px',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0px, 0px, 0px, 0px)',
  border: '0px'
};
module.exports = exports['default'];

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Option.js

var Option = function (_Component) {
    _inherits(Option, _Component);

    function Option(props) {
        _classCallCheck(this, Option);

        return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).call(this, props));
    }

    _createClass(Option, [{
        key: 'blockEvent',
        value: function blockEvent(event) {
            event.stopPropagation();
            event.preventDefault();
            if (event.target.tagName !== 'A' || !event.target.href) {
                return;
            }
            if (event.target.target) {
                window.open(event.target.href, event.target.target);
            } else {
                window.location.href = event.target.href;
            }
        }
    }, {
        key: 'onFocus',
        value: function onFocus(event) {
            if (this.props.onFocus) {
                this.props.onFocus(this.props.option, event);
            }
        }
    }, {
        key: 'handleMouseDown',
        value: function handleMouseDown(event) {
            event.preventDefault();
            event.stopPropagation();
            this.props.onSelect(this.props.option, event);
        }
    }, {
        key: 'handleMouseEnter',
        value: function handleMouseEnter(event) {
            this.onFocus(event);
        }
    }, {
        key: 'handleMouseMove',
        value: function handleMouseMove(event) {
            this.onFocus(event);
        }
    }, {
        key: 'handleTouchStart',
        value: function handleTouchStart() {
            this.dragging = false;
        }
    }, {
        key: 'handleTouchMove',
        value: function handleTouchMove() {
            this.dragging = true;
        }
    }, {
        key: 'handleTouchEnd',
        value: function handleTouchEnd(event) {
            if (this.dragging === true) {
                return;
            }
            this.handleMouseDown(event);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames;

            var _props = this.props,
                option = _props.option,
                children = _props.children,
                ident = _props.ident,
                optionIndex = _props.optionIndex;

            var className = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, this.props.className, !!this.props.className), _defineProperty(_classnames, option.className, !!option.className), _classnames));

            return option.disabled ? _react2.default.createElement(
                'li',
                { className: className,
                    onMouseDown: this.blockEvent.bind(this),
                    onClick: this.blockEvent.bind(this)
                },
                children
            ) : _react2.default.createElement(
                'li',
                { className: className,
                    style: option.style,
                    role: 'option',
                    onMouseDown: this.handleMouseDown.bind(this),
                    onMouseEnter: this.handleMouseEnter.bind(this),
                    onMouseMove: this.handleMouseMove.bind(this),
                    onTouchStart: this.handleTouchStart.bind(this),
                    onTouchMove: this.handleTouchMove.bind(this),
                    onTouchEnd: this.handleTouchEnd.bind(this),
                    id: ident + '-option-' + optionIndex,
                    title: option.title
                },
                children
            );
        }
    }]);

    return Option;
}(_react.Component);

Option.PropTypes = {
    children: _propTypes2.default.node,
    className: _propTypes2.default.string,
    ident: _propTypes2.default.string,
    isDisabled: _propTypes2.default.bool,
    isFocused: _propTypes2.default.bool,
    isSelected: _propTypes2.default.bool,
    onFocus: _propTypes2.default.func,
    onSelect: _propTypes2.default.func,
    onUnfocus: _propTypes2.default.func,
    option: _propTypes2.default.object.isRequired,
    optionIndex: _propTypes2.default.number
    //扩展option object
    // {
    //      value: ...,
    //      label: ...,
    //      style: ...,
    //      className: ...,
    //      title: ...,
    //      href: ...,
    //      target: ...,
    //      disabled: ...,
    //      clearableValue: ...
    // }
};
exports.default = Option;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //Value.js

var Value = function (_Component) {
    _inherits(Value, _Component);

    function Value(props) {
        _classCallCheck(this, Value);

        return _possibleConstructorReturn(this, (Value.__proto__ || Object.getPrototypeOf(Value)).call(this, props));
    }

    _createClass(Value, [{
        key: 'handleMouseDown',
        value: function handleMouseDown(event) {
            if (event.type === 'mousedown' && event.button !== 0) {
                return;
            }
            if (this.props.onClick) {
                event.stopPropagation();
                this.props.onClick(this.props.option, event);
                return;
            }
            if (this.props.option.href) {
                event.stopPropagation();
            }
        }
    }, {
        key: 'onRemove',
        value: function onRemove(event) {
            event.preventDefault();
            event.stopPropagation();
            this.props.onRemove(this.props.option);
        }
    }, {
        key: 'handleIconTouchStart',
        value: function handleIconTouchStart() {
            this.dragging = false;
        }
    }, {
        key: 'handleIconTouchMove',
        value: function handleIconTouchMove() {
            this.dragging = true;
        }
    }, {
        key: 'handleIconTouchEnd',
        value: function handleIconTouchEnd(event) {
            if (this.dragging) return;

            this.onRemove(event);
        }
    }, {
        key: 'renderLabel',
        value: function renderLabel() {
            var _props = this.props,
                prefixCls = _props.prefixCls,
                option = _props.option,
                children = _props.children,
                id = _props.id;

            return option.onClick || option.href ? _react2.default.createElement(
                'a',
                { className: _style2.default[prefixCls + '-value-label'], href: option.href, target: option.target,
                    onMouseDown: this.handleMouseDown.bind(this), onTouchEnd: this.handleMouseDown.bind(this)
                },
                Array.isArray(children) ? children[0] : children
            ) : _react2.default.createElement(
                'span',
                { className: _style2.default[prefixCls + '-value-label'], role: 'option', 'aria-selected': 'true',
                    id: id
                },
                Array.isArray(children) ? children[0] : children
            );
        }
    }, {
        key: 'renderRemoveIcon',
        value: function renderRemoveIcon() {
            if (this.props.disabled || !this.props.onRemove) {
                return;
            }

            var _props2 = this.props,
                prefixCls = _props2.prefixCls,
                children = _props2.children;


            return _react2.default.createElement(
                'span',
                { className: _style2.default[prefixCls + '-value-icon'],
                    'aria-hidden': 'true',
                    onMouseDown: this.onRemove.bind(this),
                    onTouchStart: this.handleIconTouchStart.bind(this),
                    onTouchMove: this.handleIconTouchMove.bind(this),
                    onTouchEnd: this.handleIconTouchEnd.bind(this)
                },
                children[1]
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var _classnames;

            var _props3 = this.props,
                prefixCls = _props3.prefixCls,
                option = _props3.option;


            var valueClassName = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, _style2.default[prefixCls + '-value'], true), _defineProperty(_classnames, option.className, !!option.className), _classnames));

            return _react2.default.createElement(
                'div',
                { className: valueClassName,
                    style: option.style, title: option.title
                },
                this.renderLabel(),
                this.renderRemoveIcon()
            );
        }
    }]);

    return Value;
}(_react.Component);

Value.defaultProps = {
    prefixCls: 'bin-select'
};
Value.Proptypes = {
    prefixCls: _propTypes2.default.string,
    children: _propTypes2.default.node.isRequired, //value渲染内容
    disabled: _propTypes2.default.bool,
    id: _propTypes2.default.string, //value唯一id，asia使用
    onClick: _propTypes2.default.func, //click事件句柄
    onRemove: _propTypes2.default.func, //多选remove事件句柄
    option: _propTypes2.default.object.isRequired //option对象 {value: ..., label: ...}
    //扩展option object
    // {
    //      value: ...,
    //      label: ...,
    //      style: ...,
    //      className: ...,
    //      title: ...,
    //      href: ...,
    //      target: ...,
    //      disabled: ...
    // }

};
exports.default = Value;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(undefined);
// imports


// module
exports.push([module.i, "._1XNxOl91vI5PKL4b1zLyKf, ._1XNxOl91vI5PKL4b1zLyKf div, ._1XNxOl91vI5PKL4b1zLyKf input, ._1XNxOl91vI5PKL4b1zLyKf span{\n    -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n._1XNxOl91vI5PKL4b1zLyKf{\n    display: inline-block;\n    position: relative;\n    width: 100%;\n    color: #495060;\n    font-size: 14px;\n    line-height: normal;\n    vertical-align: middle;\n}\n\n._3ensMR5Jk5jBh7mw-fJVbd{\n    background-color: #fff;\n    border: 1px solid #dddee1;\n    border-radius: 4px;\n    outline: 0;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    cursor: pointer;\n    position: relative;\n    transition: all .2s ease-in-out;\n    overflow: hidden;\n}\n\n._3ensMR5Jk5jBh7mw-fJVbd:hover{\n    border-color: #247db0;\n}\n\n._3ensMR5Jk5jBh7mw-fJVbd ._1p4ao6aytBi2n0ZotomE4t{\n    display: none;\n}\n\n._3ensMR5Jk5jBh7mw-fJVbd:hover ._1p4ao6aytBi2n0ZotomE4t{\n    display: inline-block;\n}\n\n._2tB5_CKRyqrVq6MtAZKpEQ ._3ensMR5Jk5jBh7mw-fJVbd{\n    height: 32px;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3ensMR5Jk5jBh7mw-fJVbd{\n    padding: 0 24px 0 4px;\n    min-height: 32px;\n}\n\n._1yq9_MpqaxWEPAAyPZC-Ao ._3ensMR5Jk5jBh7mw-fJVbd{\n    border-color: #247db0;\n    outline: 0;\n    box-shadow: 0 0 0 2px rgba(45,140,240,.2);\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._1FxjNt4aDuQ7g14I-B2DV5{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    align-content: center;\n}\n\n._2tB5_CKRyqrVq6MtAZKpEQ ._3ensMR5Jk5jBh7mw-fJVbd ._8z2gl2rtqEETNxJcAinXU,\n._2tB5_CKRyqrVq6MtAZKpEQ ._3ensMR5Jk5jBh7mw-fJVbd ._21CcDi1CSkcyDvhotb4Gql {\n    display: block;\n    height: 30px;\n    line-height: 30px;\n    font-size:12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 8px;\n    padding-right: 24px;\n}\n\n._2tB5_CKRyqrVq6MtAZKpEQ ._3ensMR5Jk5jBh7mw-fJVbd ._8z2gl2rtqEETNxJcAinXU{\n    color: #bbbec4;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3ensMR5Jk5jBh7mw-fJVbd ._8z2gl2rtqEETNxJcAinXU{\n    display: block;\n    height: 30px;\n    line-height: 30px;\n    color: #bbbec4;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 4px;\n    padding-right: 22px;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3ensMR5Jk5jBh7mw-fJVbd ._21CcDi1CSkcyDvhotb4Gql{\n    display: inline-block;\n    height: 22px;\n    line-height: 22px;\n    margin: 2px 4px 2px 0;\n    padding: 0 8px;\n    border: 1px solid #e9eaec;\n    border-radius: 3px;\n    background: #f7f7f7;\n    font-size: 12px;\n    vertical-align: middle;\n    opacity: 1;\n    overflow: hidden;\n    cursor: pointer;\n    flex: 0 0 auto;\n}\n\n._21CcDi1CSkcyDvhotb4Gql ._1wVGHYVb3UI2D0bmZUgE5I {\n    cursor: pointer;\n    margin-left: 8px;\n    color: #666;\n    opacity: .66;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3ensMR5Jk5jBh7mw-fJVbd ._21CcDi1CSkcyDvhotb4Gql:hover{\n    opacity: .85;\n}\n\n._21CcDi1CSkcyDvhotb4Gql ._1wVGHYVb3UI2D0bmZUgE5I:hover{\n    opacity: 1;\n}\n\n\n._3-VJ52HyUqvHR5tKu2PiiD {\n    display: inline-block;\n    height: 30px;\n    line-height: 30px;\n    padding: 0 24px 0 8px;\n    font-size: 12px;\n    outline: 0;\n    border: none;\n    color: #495060;\n    background-color: transparent;\n    position: relative;\n    cursor: pointer;\n}\n._3-VJ52HyUqvHR5tKu2PiiD>input{\n    height: 100%;\n    padding: 0;\n    color: #495060;\n    outline: 0;\n    border: none;\n    background-color: transparent;\n}\n\n._2tB5_CKRyqrVq6MtAZKpEQ ._3-VJ52HyUqvHR5tKu2PiiD{\n    width: 100%;\n}\n._2tB5_CKRyqrVq6MtAZKpEQ ._3-VJ52HyUqvHR5tKu2PiiD>input{\n    width: 100%;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3-VJ52HyUqvHR5tKu2PiiD{\n    height: 29px;\n    line-height: 32px;\n    padding: 0 0 0 4px;\n    flex: 1 1 6px;\n}\n._3YP9kWvm-86MiGlHeV4tke ._3-VJ52HyUqvHR5tKu2PiiD>input{\n    width: 100%;\n}\n\n._3uAPTGNBr8YUJC41Y5PdAJ ._3-VJ52HyUqvHR5tKu2PiiD>input{\n    color: transparent;\n    /*text-shadow:0 0 0 #495060;*/\n    text-shadow: 0 0 0 red;\n}\n\n._1p4ao6aytBi2n0ZotomE4t, ._2SP8kcvPhbXeQ7KicpxKCe{\n    position: absolute;\n    right: 0px;\n    top: 0px;\n    line-height: 100%;\n    font-size: 14px;\n    color: #80848f;\n    height: 100%;\n    width: 24px;\n    background-color: #fff;\n    z-index: 1;\n}\n\n._9cMV1PMAQZwxBlUnd-5R8, ._-3S9LG6b34DHAqUUW2GPq{\n    position: absolute;\n    right: 8px;\n    top: 50%;\n    margin-top: -7px;\n    transition: all .2s ease-in-out;\n}\n\n._9cMV1PMAQZwxBlUnd-5R8{\n    right: 6px;\n}\n\n._2wyK6IJperabNKfJE4_fgX ._-3S9LG6b34DHAqUUW2GPq{\n    transform: rotate(180deg);\n}\n\n._12-nR94Tm933jdC4iOqQFQ{\n    width: inherit;\n    max-height: 200px;\n    overflow: auto;\n    margin: 5px 0;\n    padding: 5px 0;\n    background-color: #fff;\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 1px 6px rgba(0,0,0,.2);\n    position: absolute;\n    z-index: 999;\n    display: none;\n}\n\n._12-nR94Tm933jdC4iOqQFQ.sIOgu7rcVBk_ouuls3oDU{\n    display: block;\n}\n\n._1QNYIw4M4vAGt5gVGYINTW, ._26FnMu8HQvuj0ftaBkipOg{\n    animation-duration: .3s;\n    animation-fill-mode: both;\n    animation-play-state: paused;\n}\n\n._1QNYIw4M4vAGt5gVGYINTW{\n    animation-name: _3k2gf_ekikTzlgJ-GVVFom;\n    animation-play-state: running;\n    opacity: 0;\n    animation-timing-function: ease-in-out;\n}\n\n._26FnMu8HQvuj0ftaBkipOg{\n    animation-name: _2E0REjBIYl9hqpDrvRY4LJ;\n    animation-play-state: running;\n    animation-timing-function: ease-in-out;\n}\n\n@keyframes _3k2gf_ekikTzlgJ-GVVFom {\n    0% {\n        opacity: 0;\n        transform-origin: 0 0;\n        transform: scaleY(.8)\n    }\n\n    to {\n        opacity: 1;\n        transform-origin: 0 0;\n        transform: scaleY(1)\n    }\n}\n\n@keyframes _2E0REjBIYl9hqpDrvRY4LJ {\n    0% {\n        opacity: 1;\n        transform-origin: 0 0;\n        transform: scaleY(1)\n    }\n\n    to {\n        opacity: 0;\n        transform-origin: 0 0;\n        transform: scaleY(.8)\n    }\n}\n\n._1XNxOl91vI5PKL4b1zLyKf ul {\n    list-style-type: none;\n    padding-left: 0!important;\n}\n._1QQyIRfTTs5GZqIiCvhQTd{\n    text-align: center;\n    color: #bbbec4;\n}\n\n._3vPTZ34aT8nrEpXK5Bs35o {\n    margin: 0;\n    line-height: normal;\n    padding: 7px 16px;\n    clear: both;\n    color: #495060;\n    font-size: 12px!important;\n    white-space: nowrap;\n    list-style: none;\n    cursor: pointer;\n    transition: background .2s ease-in-out;\n}\n._3rWw6SjFry1QMshQ92zC7w, ._3vPTZ34aT8nrEpXK5Bs35o:hover {\n    background: #f3f3f3;\n}\n\n._3vPTZ34aT8nrEpXK5Bs35o._2ZVkGes-9ylGBN8DiUZRbN {\n    color: #fff;\n    background-color: #247db0;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3vPTZ34aT8nrEpXK5Bs35o._2ZVkGes-9ylGBN8DiUZRbN{\n    color: #247db0;\n    background-color: #fff;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3vPTZ34aT8nrEpXK5Bs35o._2ZVkGes-9ylGBN8DiUZRbN:hover{\n    background-color: #f3f3f3;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3vPTZ34aT8nrEpXK5Bs35o span:last-child{\n    float: right;\n    padding-top: 3px;\n    display: none;\n    opacity: .66;\n}\n\n._3YP9kWvm-86MiGlHeV4tke ._3vPTZ34aT8nrEpXK5Bs35o._2ZVkGes-9ylGBN8DiUZRbN span:last-child{\n    display: inline-block;\n}\n\n\n", ""]);

// exports
exports.locals = {
	"bin-select": "_1XNxOl91vI5PKL4b1zLyKf",
	"bin-select-control": "_3ensMR5Jk5jBh7mw-fJVbd",
	"bin-select-clean-zone": "_1p4ao6aytBi2n0ZotomE4t",
	"bin-select-single": "_2tB5_CKRyqrVq6MtAZKpEQ",
	"bin-select-multiple": "_3YP9kWvm-86MiGlHeV4tke",
	"bin-select-focus": "_1yq9_MpqaxWEPAAyPZC-Ao",
	"bin-select-value-wrapper": "_1FxjNt4aDuQ7g14I-B2DV5",
	"bin-select-placeholder": "_8z2gl2rtqEETNxJcAinXU",
	"bin-select-value": "_21CcDi1CSkcyDvhotb4Gql",
	"bin-select-value-icon": "_1wVGHYVb3UI2D0bmZUgE5I",
	"bin-select-input": "_3-VJ52HyUqvHR5tKu2PiiD",
	"bin-select-pseudoFocus": "_3uAPTGNBr8YUJC41Y5PdAJ",
	"bin-select-arrow-zone": "_2SP8kcvPhbXeQ7KicpxKCe",
	"bin-select-clean": "_9cMV1PMAQZwxBlUnd-5R8",
	"bin-select-arrow": "_-3S9LG6b34DHAqUUW2GPq",
	"bin-select-visible": "_2wyK6IJperabNKfJE4_fgX",
	"bin-select-dropdown": "_12-nR94Tm933jdC4iOqQFQ",
	"bin-select-dropdown-active": "sIOgu7rcVBk_ouuls3oDU",
	"slide-up-enter-active": "_1QNYIw4M4vAGt5gVGYINTW",
	"slide-up-leave-active": "_26FnMu8HQvuj0ftaBkipOg",
	"binSlideUpIn": "_3k2gf_ekikTzlgJ-GVVFom",
	"binSlideUpOut": "_2E0REjBIYl9hqpDrvRY4LJ",
	"bin-select-not-found": "_1QQyIRfTTs5GZqIiCvhQTd",
	"bin-select-item": "_3vPTZ34aT8nrEpXK5Bs35o",
	"bin-select-item-focused": "_3rWw6SjFry1QMshQ92zC7w",
	"bin-select-item-selected": "_2ZVkGes-9ylGBN8DiUZRbN"
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stripDiacritics = __webpack_require__(22);

var _stripDiacritics2 = _interopRequireDefault(_stripDiacritics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filterOptions = function filterOptions(options, filterValue, excludeOptions, props) {
    if (props.ignoreAccents) {
        filterValue = (0, _stripDiacritics2.default)(filterValue);
    }

    if (props.ignoreCase) {
        filterValue = filterValue.toLowerCase();
    }

    if (excludeOptions) excludeOptions = excludeOptions.map(function (option) {
        return option[props.valueKey];
    });

    return options.filter(function (option) {
        //排除excludeOptions
        if (excludeOptions && excludeOptions.indexOf(option[props.valueKey]) > -1) return false;
        //自定义props.filterOption
        if (props.filterOption) return props.filterOption.call(undefined, options, filterValue);
        //filterValue为空，options全部返回
        if (!filterValue) return true;

        var valueTest = String(option[props.valueKey]);
        var labelTest = String(option[props.labelKey]);

        if (props.ignoreAccents) {
            if (props.matchProp !== 'label') valueTest = (0, _stripDiacritics2.default)(valueTest);
            if (props.matchProp !== 'value') labelTest = (0, _stripDiacritics2.default)(labelTest);
        }

        if (props.ignoreCase) {
            if (props.matchProp !== 'label') valueTest = valueTest.toLowerCase();
            if (props.matchProp !== 'value') labelTest = labelTest.toLowerCase();
        }

        return props.matchPos === 'start' ? props.matchProp !== 'label' && valueTest.substr(0, filterValue.length) === filterValue || props.matchProp !== 'value' && labelTest.substr(0, filterValue.length) === filterValue : props.matchProp !== 'label' && valueTest.indexOf(filterValue) > -1 || props.matchProp !== 'value' && labelTest.indexOf(filterValue) > -1;
    });
}; //defaultFilterOptions.js

exports.default = filterOptions;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//copy from https://github.com/JedWatson/react-select

var map = [{ 'base': 'A', 'letters': /[\u0041\u24B6\uFF21\u00C0\u00C1\u00C2\u1EA6\u1EA4\u1EAA\u1EA8\u00C3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\u00C4\u01DE\u1EA2\u00C5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F]/g }, { 'base': 'AA', 'letters': /[\uA732]/g }, { 'base': 'AE', 'letters': /[\u00C6\u01FC\u01E2]/g }, { 'base': 'AO', 'letters': /[\uA734]/g }, { 'base': 'AU', 'letters': /[\uA736]/g }, { 'base': 'AV', 'letters': /[\uA738\uA73A]/g }, { 'base': 'AY', 'letters': /[\uA73C]/g }, { 'base': 'B', 'letters': /[\u0042\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181]/g }, { 'base': 'C', 'letters': /[\u0043\u24B8\uFF23\u0106\u0108\u010A\u010C\u00C7\u1E08\u0187\u023B\uA73E]/g }, { 'base': 'D', 'letters': /[\u0044\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779]/g }, { 'base': 'DZ', 'letters': /[\u01F1\u01C4]/g }, { 'base': 'Dz', 'letters': /[\u01F2\u01C5]/g }, { 'base': 'E', 'letters': /[\u0045\u24BA\uFF25\u00C8\u00C9\u00CA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\u00CB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E]/g }, { 'base': 'F', 'letters': /[\u0046\u24BB\uFF26\u1E1E\u0191\uA77B]/g }, { 'base': 'G', 'letters': /[\u0047\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E]/g }, { 'base': 'H', 'letters': /[\u0048\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D]/g }, { 'base': 'I', 'letters': /[\u0049\u24BE\uFF29\u00CC\u00CD\u00CE\u0128\u012A\u012C\u0130\u00CF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197]/g }, { 'base': 'J', 'letters': /[\u004A\u24BF\uFF2A\u0134\u0248]/g }, { 'base': 'K', 'letters': /[\u004B\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2]/g }, { 'base': 'L', 'letters': /[\u004C\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780]/g }, { 'base': 'LJ', 'letters': /[\u01C7]/g }, { 'base': 'Lj', 'letters': /[\u01C8]/g }, { 'base': 'M', 'letters': /[\u004D\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C]/g }, { 'base': 'N', 'letters': /[\u004E\u24C3\uFF2E\u01F8\u0143\u00D1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4]/g }, { 'base': 'NJ', 'letters': /[\u01CA]/g }, { 'base': 'Nj', 'letters': /[\u01CB]/g }, { 'base': 'O', 'letters': /[\u004F\u24C4\uFF2F\u00D2\u00D3\u00D4\u1ED2\u1ED0\u1ED6\u1ED4\u00D5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\u00D6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\u00D8\u01FE\u0186\u019F\uA74A\uA74C]/g }, { 'base': 'OI', 'letters': /[\u01A2]/g }, { 'base': 'OO', 'letters': /[\uA74E]/g }, { 'base': 'OU', 'letters': /[\u0222]/g }, { 'base': 'P', 'letters': /[\u0050\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754]/g }, { 'base': 'Q', 'letters': /[\u0051\u24C6\uFF31\uA756\uA758\u024A]/g }, { 'base': 'R', 'letters': /[\u0052\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782]/g }, { 'base': 'S', 'letters': /[\u0053\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784]/g }, { 'base': 'T', 'letters': /[\u0054\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786]/g }, { 'base': 'TZ', 'letters': /[\uA728]/g }, { 'base': 'U', 'letters': /[\u0055\u24CA\uFF35\u00D9\u00DA\u00DB\u0168\u1E78\u016A\u1E7A\u016C\u00DC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244]/g }, { 'base': 'V', 'letters': /[\u0056\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245]/g }, { 'base': 'VY', 'letters': /[\uA760]/g }, { 'base': 'W', 'letters': /[\u0057\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72]/g }, { 'base': 'X', 'letters': /[\u0058\u24CD\uFF38\u1E8A\u1E8C]/g }, { 'base': 'Y', 'letters': /[\u0059\u24CE\uFF39\u1EF2\u00DD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE]/g }, { 'base': 'Z', 'letters': /[\u005A\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762]/g }, { 'base': 'a', 'letters': /[\u0061\u24D0\uFF41\u1E9A\u00E0\u00E1\u00E2\u1EA7\u1EA5\u1EAB\u1EA9\u00E3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\u00E4\u01DF\u1EA3\u00E5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250]/g }, { 'base': 'aa', 'letters': /[\uA733]/g }, { 'base': 'ae', 'letters': /[\u00E6\u01FD\u01E3]/g }, { 'base': 'ao', 'letters': /[\uA735]/g }, { 'base': 'au', 'letters': /[\uA737]/g }, { 'base': 'av', 'letters': /[\uA739\uA73B]/g }, { 'base': 'ay', 'letters': /[\uA73D]/g }, { 'base': 'b', 'letters': /[\u0062\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253]/g }, { 'base': 'c', 'letters': /[\u0063\u24D2\uFF43\u0107\u0109\u010B\u010D\u00E7\u1E09\u0188\u023C\uA73F\u2184]/g }, { 'base': 'd', 'letters': /[\u0064\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A]/g }, { 'base': 'dz', 'letters': /[\u01F3\u01C6]/g }, { 'base': 'e', 'letters': /[\u0065\u24D4\uFF45\u00E8\u00E9\u00EA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\u00EB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD]/g }, { 'base': 'f', 'letters': /[\u0066\u24D5\uFF46\u1E1F\u0192\uA77C]/g }, { 'base': 'g', 'letters': /[\u0067\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F]/g }, { 'base': 'h', 'letters': /[\u0068\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265]/g }, { 'base': 'hv', 'letters': /[\u0195]/g }, { 'base': 'i', 'letters': /[\u0069\u24D8\uFF49\u00EC\u00ED\u00EE\u0129\u012B\u012D\u00EF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131]/g }, { 'base': 'j', 'letters': /[\u006A\u24D9\uFF4A\u0135\u01F0\u0249]/g }, { 'base': 'k', 'letters': /[\u006B\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3]/g }, { 'base': 'l', 'letters': /[\u006C\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747]/g }, { 'base': 'lj', 'letters': /[\u01C9]/g }, { 'base': 'm', 'letters': /[\u006D\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F]/g }, { 'base': 'n', 'letters': /[\u006E\u24DD\uFF4E\u01F9\u0144\u00F1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5]/g }, { 'base': 'nj', 'letters': /[\u01CC]/g }, { 'base': 'o', 'letters': /[\u006F\u24DE\uFF4F\u00F2\u00F3\u00F4\u1ED3\u1ED1\u1ED7\u1ED5\u00F5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\u00F6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\u00F8\u01FF\u0254\uA74B\uA74D\u0275]/g }, { 'base': 'oi', 'letters': /[\u01A3]/g }, { 'base': 'ou', 'letters': /[\u0223]/g }, { 'base': 'oo', 'letters': /[\uA74F]/g }, { 'base': 'p', 'letters': /[\u0070\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755]/g }, { 'base': 'q', 'letters': /[\u0071\u24E0\uFF51\u024B\uA757\uA759]/g }, { 'base': 'r', 'letters': /[\u0072\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783]/g }, { 'base': 's', 'letters': /[\u0073\u24E2\uFF53\u00DF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B]/g }, { 'base': 't', 'letters': /[\u0074\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787]/g }, { 'base': 'tz', 'letters': /[\uA729]/g }, { 'base': 'u', 'letters': /[\u0075\u24E4\uFF55\u00F9\u00FA\u00FB\u0169\u1E79\u016B\u1E7B\u016D\u00FC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289]/g }, { 'base': 'v', 'letters': /[\u0076\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C]/g }, { 'base': 'vy', 'letters': /[\uA761]/g }, { 'base': 'w', 'letters': /[\u0077\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73]/g }, { 'base': 'x', 'letters': /[\u0078\u24E7\uFF58\u1E8B\u1E8D]/g }, { 'base': 'y', 'letters': /[\u0079\u24E8\uFF59\u1EF3\u00FD\u0177\u1EF9\u0233\u1E8F\u00FF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF]/g }, { 'base': 'z', 'letters': /[\u007A\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763]/g }];

module.exports = function stripDiacritics(str) {
    for (var i = 0; i < map.length; i++) {
        str = str.replace(map[i].letters, map[i].base);
    }
    return str;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clearRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(3);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//defaultClearRenderer.js

function clearRenderer() {
    return _react2.default.createElement(_reactFontawesome2.default, { name: 'times-circle' });
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ArrowRenderer;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(3);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//defaultArrowRenderer.js

function ArrowRenderer() {
    return _react2.default.createElement(_reactFontawesome2.default, { name: 'caret-down' });
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

var _style = __webpack_require__(4);

var _style2 = _interopRequireDefault(_style);

var _reactFontawesome = __webpack_require__(3);

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //defaultMenuRenderer.js

var menuRenderer = function menuRenderer(_ref) {
    var focusedOption = _ref.focusedOption,
        ident = _ref.ident,
        prefixCls = _ref.prefixCls,
        multi = _ref.multi,
        labelKey = _ref.labelKey,
        onFocus = _ref.onFocus,
        onSelect = _ref.onSelect,
        optionClassName = _ref.optionClassName,
        optionRenderer = _ref.optionRenderer,
        optionComponent = _ref.optionComponent,
        options = _ref.options,
        valueArray = _ref.valueArray,
        valueKey = _ref.valueKey,
        onOptionRef = _ref.onOptionRef;

    var Option = optionComponent;

    return _react2.default.createElement(
        'ul',
        { className: _style2.default[prefixCls + '-dropdown-list'] },
        options.map(function (option, i) {
            var _classnames;

            var isSelected = valueArray && valueArray.indexOf(option) > -1;
            var isFocused = option === focusedOption;
            var optionClass = (0, _classnames3.default)((_classnames = {}, _defineProperty(_classnames, _style2.default[prefixCls + '-item'], true), _defineProperty(_classnames, _style2.default[prefixCls + '-item-selected'], isSelected), _defineProperty(_classnames, _style2.default[prefixCls + '-item-disabled'], option.disabled), _defineProperty(_classnames, _style2.default[prefixCls + '-item-focused'], isFocused), _classnames));
            return _react2.default.createElement(
                Option,
                {
                    className: optionClass,
                    ident: ident,
                    isDisabled: option.disabled,
                    isFocused: isFocused,
                    isSelected: isSelected,
                    key: ident + '-' + i,
                    onFocus: onFocus,
                    onSelect: onSelect,
                    option: option,
                    optionIndex: i,
                    ref: function ref(_ref2) {
                        onOptionRef(_ref2, isFocused);
                    } //Select.js 中可以获取 this.focused
                },
                _react2.default.createElement(
                    'span',
                    null,
                    optionRenderer(option, i)
                ),
                multi ? _react2.default.createElement(_reactFontawesome2.default, { name: 'check' }) : null
            );
        })
    );
};

exports.default = menuRenderer;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _util = __webpack_require__(27);

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

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(2);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = __webpack_require__(1);

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //AutosizeInput.js


var sizerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    visibility: 'hidden',
    height: 0,
    overflow: 'scroll',
    whiteSpace: 'pre'
};

var AutosizeInput = function (_Component) {
    _inherits(AutosizeInput, _Component);

    function AutosizeInput(props) {
        _classCallCheck(this, AutosizeInput);

        var _this = _possibleConstructorReturn(this, (AutosizeInput.__proto__ || Object.getPrototypeOf(AutosizeInput)).call(this, props));

        _this.state = {
            inputWidth: _this.props.minWidth
        };
        return _this;
    }

    _createClass(AutosizeInput, [{
        key: 'inputRef',
        value: function inputRef(el) {
            this.input = el;
        }
    }, {
        key: 'sizerRef',
        value: function sizerRef(el) {
            this.sizer = el;
        }
    }, {
        key: 'placeHolderSizerRef',
        value: function placeHolderSizerRef(el) {
            this.placeHolderSizer = el;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('autosizeinput mounted');
            console.log(this.mounted);
            this.mounted = true;
            this.copyInputStyles();
            this.updateInputWidth();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log('autosizeinput unmount');
            this.mounted = false;
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps, prevState) {

            if (prevState.inputWidth !== this.state.inputWidth) {
                if (typeof this.props.onAutosize === 'function') {
                    this.props.onAutosize(this.state.inputWidth);
                }
            }
            this.updateInputWidth();
        }
    }, {
        key: 'getInput',
        value: function getInput() {
            return this.input;
        }
    }, {
        key: 'focus',
        value: function focus() {
            this.input.focus();
        }
    }, {
        key: 'blur',
        value: function blur() {
            this.input.blur();
        }

        //挂载之后获取 input css 样式

    }, {
        key: 'copyInputStyles',
        value: function copyInputStyles() {

            if (!this.mounted || !window.getComputedStyle) {
                return;
            }
            var inputStyle = this.input && window.getComputedStyle(this.input);

            if (!inputStyle) {
                return;
            }

            var widthNode = this.sizer;

            widthNode.style.fontSize = inputStyle.fontSize;
            widthNode.style.fontFamily = inputStyle.fontFamily;
            widthNode.style.fontWeight = inputStyle.fontWeight;
            widthNode.style.fontStyle = inputStyle.fontStyle;
            widthNode.style.letterSpacing = inputStyle.letterSpacing;
            widthNode.style.textTransform = inputStyle.textTransform;
            if (this.props.placeholder) {
                var placeholderNode = this.placeHolderSizer;
                placeholderNode.style.fontSize = inputStyle.fontSize;
                placeholderNode.style.fontFamily = inputStyle.fontFamily;
                placeholderNode.style.fontWeight = inputStyle.fontWeight;
                placeholderNode.style.fontStyle = inputStyle.fontStyle;
                placeholderNode.style.letterSpacing = inputStyle.letterSpacing;
                placeholderNode.style.textTransform = inputStyle.textTransform;
            }
        }

        //获取 sizer width 并且更改 input width

    }, {
        key: 'updateInputWidth',
        value: function updateInputWidth() {
            if (!this.mounted || !this.sizer || typeof this.sizer.scrollWidth === 'undefined') {
                return;
            }
            var newInputWidth = this.sizer.scrollWidth + 2;

            if (this.props.placeholder && this.props.placeholderIsMinWidth) {
                newInputWidth = Math.max(newInputWidth, this.placeHolderSizer.scrollWidth) + 2;
            }

            if (newInputWidth < this.props.minWidth) {
                newInputWidth = this.props.minWidth;
            }

            if (newInputWidth !== this.state.inputWidth) {
                this.setState({
                    inputWidth: newInputWidth
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                className = _props.className,
                style = _props.style,
                defaultValue = _props.defaultValue,
                value = _props.value,
                inputClassName = _props.inputClassName,
                placeholder = _props.placeholder;

            var sizerValue = [defaultValue, value, ''].reduce(function (prev, curr) {
                if (prev !== undefined && prev !== null) return prev;
                return curr;
            });
            var wrapperStyle = Object.assign({}, style);
            if (!wrapperStyle.display) wrapperStyle.display = 'inline-block';

            var inputStyle = Object.assign({}, this.props.inputStyle);
            inputStyle.width = this.state.inputWidth + 'px';
            inputStyle.boxSizing = 'content-box';

            var inputProps = Object.assign({}, this.props);
            inputProps.className = inputClassName;
            inputProps.style = inputStyle;

            delete inputProps.className;
            delete inputProps.prefixCls;
            delete inputProps.defaultValue;
            delete inputProps.minWidth;
            delete inputProps.placeholderIsMinWidth;
            delete inputProps.inputStyle;
            delete inputProps.inputClassName;

            delete inputProps.onAutosize;

            var autosizeInputClass = (0, _classnames3.default)(_defineProperty({}, className, !!className));
            return _react2.default.createElement(
                'div',
                { className: autosizeInputClass, style: wrapperStyle },
                _react2.default.createElement('input', _extends({}, inputProps, { ref: this.inputRef.bind(this) })),
                _react2.default.createElement(
                    'div',
                    { ref: this.sizerRef.bind(this), style: sizerStyle },
                    sizerValue
                ),
                placeholder ? _react2.default.createElement(
                    'div',
                    { ref: this.placeHolderSizerRef.bind(this), style: sizerStyle },
                    placeholder
                ) : null
            );
        }
    }]);

    return AutosizeInput;
}(_react.Component);

AutosizeInput.defaultProps = {
    prefixCls: 'bin-autosizeInput',
    minWidth: 1
};
AutosizeInput.PropTypes = {
    className: _propTypes2.default.string, // wrapper 添加 classnames
    prefixCls: _propTypes2.default.string,

    defaultValue: _propTypes2.default.any, // input field default value
    value: _propTypes2.default.any, // input field value

    minWidth: _propTypes2.default.oneOfType([// input 最小 width
    _propTypes2.default.number, _propTypes2.default.string]),

    placeholder: _propTypes2.default.string, // input placeholder text
    placeholderIsMinWidth: _propTypes2.default.bool, // 是否设置 input 最小 width 为 placeholder 的长度

    style: _propTypes2.default.object, // wrapper 添加行内样式
    inputStyle: _propTypes2.default.object, // input 添加行内样式
    inputClassName: _propTypes2.default.string, // input 添加 classnames

    onChange: _propTypes2.default.func, // input onChange 句柄
    onAutosize: _propTypes2.default.func // did Update 触发 autoSize 句柄

};
exports.default = AutosizeInput;

/***/ })
/******/ ]);
});