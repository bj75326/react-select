'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = clearRenderer;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//defaultClearRenderer.js

function clearRenderer() {
    return _react2.default.createElement(_reactFontawesome2.default, { name: 'times-circle' });
};