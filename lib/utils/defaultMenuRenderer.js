'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var _style = require('../component/style.css');

var _style2 = _interopRequireDefault(_style);

var _reactFontawesome = require('react-fontawesome');

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