'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _stripDiacritics = require('./stripDiacritics.js');

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