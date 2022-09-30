"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var Layout_vue_1 = require("@/components/Layout.vue");
var frameIn_1 = require("@/router/frameIn");
var frameOut_1 = require("@/router/frameOut");
//路由配置
var routes = __spreadArrays([
    {
        name: "home",
        path: "/",
        component: Layout_vue_1["default"],
        redirect: "/index",
        children: frameIn_1["default"]
    }
], frameOut_1["default"]);
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHashHistory(),
    routes: routes
});
exports["default"] = router;
