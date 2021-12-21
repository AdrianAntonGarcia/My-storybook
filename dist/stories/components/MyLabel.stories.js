"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    component: MyLabel_1.MyLabel,
    title: 'Ui/Etiquetas/MyLabel',
    // Personalizacion control
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        // No hace falta si la propiedad tiene de nombre color
        fontColor: { control: 'color' },
    },
};
const Template = (args) => ((0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, { ...args }, void 0));
exports.Basic = Template.bind({});
exports.Basic.args = { size: 'normal', allCaps: false };
exports.AllCaps = Template.bind({});
exports.AllCaps.args = { size: 'normal', allCaps: true };
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary',
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    fontColor: '#754877',
    size: 'h1',
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    fontColor: '#ffffff',
    size: 'h1',
    backgroundColor: '#000000',
};
