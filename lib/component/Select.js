'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; //Select.js

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames4 = require('classnames');

var _classnames5 = _interopRequireDefault(_classnames4);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = require('react-fontawesome');

var _reactFontawesome2 = _interopRequireDefault(_reactFontawesome);

var _Option = require('./Option.js');

var _Option2 = _interopRequireDefault(_Option);

var _Value = require('./Value.js');

var _Value2 = _interopRequireDefault(_Value);

var _style = require('./style.css');

var _style2 = _interopRequireDefault(_style);

var _defaultFilterOptions = require('../utils/defaultFilterOptions.js');

var _defaultFilterOptions2 = _interopRequireDefault(_defaultFilterOptions);

var _defaultClearRenderer = require('../utils/defaultClearRenderer.js');

var _defaultClearRenderer2 = _interopRequireDefault(_defaultClearRenderer);

var _defaultArrowRenderer = require('../utils/defaultArrowRenderer.js');

var _defaultArrowRenderer2 = _interopRequireDefault(_defaultArrowRenderer);

var _defaultMenuRenderer = require('../utils/defaultMenuRenderer.js');

var _defaultMenuRenderer2 = _interopRequireDefault(_defaultMenuRenderer);

var _TransitionEventsHandler = require('../utils/TransitionEventsHandler.js');

var _TransitionEventsHandler2 = _interopRequireDefault(_TransitionEventsHandler);

var _AutosizeInput = require('./AutosizeInput.js');

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