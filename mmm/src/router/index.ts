import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Layout from "@/components/Layout.vue";
import FrameIn from "@/router/frameIn";
import FrameOut from "@/router/frameOut";
//路由配置
const routes: Array<RouteRecordRaw> = [
  {
    name: "home",
    path: "/",
    component: Layout,
    redirect: "/index", //重定向
    children: FrameIn,
  },
  //不在layout里面显示的页面都放在frameOut当中
  //注册登入等独立页面
  ...FrameOut,
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
