"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var router_1 = require("./router");
var store_1 = require("./store");
var element_plus_1 = require("element-plus");
require("element-plus/dist/index.css");
var app = vue_1.createApp(App_vue_1["default"]); //App组件就是根实例组件
app.use(store_1["default"]);
app.use(router_1["default"]);
app.use(element_plus_1["default"]);
app.mount('#app');
