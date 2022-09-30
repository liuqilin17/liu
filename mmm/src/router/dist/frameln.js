"use strict";
exports.__esModule = true;
var Home_vue_1 = require("@/views/Home.vue");
var famesIn = [
    //子路由
    {
        name: 'index',
        path: 'index',
        component: Home_vue_1["default"]
    },
    {
        name: 'qa',
        path: 'qa',
        component: function () { return Promise.resolve().then(function () { return require('@/views/qa.vue'); }); }
    },
    {
        name: 'stu',
        path: 'stu',
        component: function () { return Promise.resolve().then(function () { return require('@/views/stu.vue'); }); }
    },
    {
        name: 'company',
        path: 'company',
        component: function () { return Promise.resolve().then(function () { return require('@/views/company.vue'); }); }
    },
];
exports["default"] = famesIn;
