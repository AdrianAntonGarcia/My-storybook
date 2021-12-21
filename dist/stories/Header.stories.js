"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoggedOut = exports.LoggedIn = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Header_1 = require("./Header");
exports.default = {
    title: 'Example/Header',
    component: Header_1.Header,
};
const Template = (args) => (0, jsx_runtime_1.jsx)(Header_1.Header, { ...args }, void 0);
exports.LoggedIn = Template.bind({});
exports.LoggedIn.args = {
    user: {},
};
exports.LoggedOut = Template.bind({});
exports.LoggedOut.args = {};
