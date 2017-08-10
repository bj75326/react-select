'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _style = require('./style.css');

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