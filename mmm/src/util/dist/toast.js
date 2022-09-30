"use strict";
exports.__esModule = true;
exports.showMsg = void 0;
var element_plus_1 = require("element-plus");
exports.showMsg = function (message) {
    element_plus_1.ElMessage({
        showClose: true,
        message: message,
        type: 'warning'
    });
};
