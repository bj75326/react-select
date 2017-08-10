'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames2 = require('classnames');

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