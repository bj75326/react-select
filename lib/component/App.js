'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Select = require('./Select.js');

var _Select2 = _interopRequireDefault(_Select);

var _city = require('../../data/city.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } //App.js

var App = function (_Component) {
    _inherits(App, _Component);

    function App(props) {
        _classCallCheck(this, App);

        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this.state = {
            selector_01: {
                selectedValue: 'beijing',
                disabled: false,
                required: false
            },
            selector_02: {
                selectedValue: 'beijing,shanghai',
                disabled: false,
                required: false
            }
        };
        return _this;
    }
    //simpleValue set as true.


    _createClass(App, [{
        key: 'onChange',
        value: function onChange(ident, value) {
            var _this2 = this;

            console.log('onChange');
            console.log(value);
            this.setState(_defineProperty({}, ident, { selectedValue: value }), function () {
                console.log(_this2.state);
            });
            console.log(this.state);
        }
    }, {
        key: 'render',
        value: function render() {

            var options = _city.CITYS;

            return _react2.default.createElement(
                'div',
                { className: 'page' },
                _react2.default.createElement(
                    'header',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'inner' },
                        _react2.default.createElement(
                            'h1',
                            null,
                            'React-Select'
                        ),
                        _react2.default.createElement(
                            'h2',
                            null,
                            'An alternative solution to apply common style for Select build with ReactJS.'
                        ),
                        _react2.default.createElement(
                            'a',
                            { href: '#', className: 'button' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(_reactFontawesome2.default, { name: 'github' })
                            ),
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    'View project on'
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'github' },
                                    'Github'
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'content-wrapper' },
                    _react2.default.createElement(
                        'h3',
                        { id: 'ji-chu-yong-fa' },
                        _react2.default.createElement(
                            'a',
                            { href: '#ji-chu-yong-fa', className: 'header-anchor', 'aria-hidden': 'true' },
                            '#'
                        ),
                        '\u57FA\u672C\u7528\u6CD5'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u9002\u7528\u4E8E\u5E7F\u6CDB\u7684\u57FA\u7840\u5355\u9009'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'demo-box', style: { height: '300px' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'demo-showcase', style: { width: '248px' } },
                            _react2.default.createElement(_Select2.default, { options: options, ident: "selector_01", selectedValue: this.state.selector_01.selectedValue,
                                disabled: this.state.selector_01.disabled,
                                onChange: this.onChange.bind(this),
                                simpleValue: true,
                                searchable: true
                            })
                        )
                    ),
                    _react2.default.createElement(
                        'h3',
                        { id: 'ji-chu-duo-xuan' },
                        _react2.default.createElement(
                            'a',
                            { href: '#ji-chu-duo-xuan', className: 'header-anchor', 'aria-hidden': 'true' },
                            '#'
                        ),
                        '\u57FA\u672C\u591A\u9009'
                    ),
                    _react2.default.createElement(
                        'p',
                        null,
                        '\u9002\u7528\u6027\u8F83\u5E7F\u7684\u57FA\u7840\u591A\u9009\uFF0C\u7528 Tag \u5C55\u793A\u5DF2\u9009\u9879'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'demo-box', style: { height: '300px' } },
                        _react2.default.createElement(
                            'div',
                            { className: 'demo-showcase', style: { width: '308px' } },
                            _react2.default.createElement(_Select2.default, { options: options, ident: 'selector_02', selectedValue: this.state.selector_02.selectedValue,
                                disabled: this.state.selector_02.disabled,
                                multi: true,
                                onChange: this.onChange.bind(this),
                                simpleValue: true,
                                searchable: true
                            })
                        )
                    )
                )
            );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;