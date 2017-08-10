'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _propTypes = require('prop-types');

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