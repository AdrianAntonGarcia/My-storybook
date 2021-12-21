"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyLabel = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
require("./mylabel.scss");
const MyLabel = ({ allCaps = false, color = 'primary', label = 'No label', size = 'normal', fontColor, backgroundColor = 'transparent', }) => {
    return ((0, jsx_runtime_1.jsx)("span", { className: `label ${size} text-${color}`, style: { color: fontColor, backgroundColor }, children: allCaps ? label.toUpperCase() : label }, void 0));
};
exports.MyLabel = MyLabel;
exports.default = exports.MyLabel;
