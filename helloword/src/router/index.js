import Vue from "vue";
import VueRouter from "vue-router"; // 导入vue-router"
import Home from "../views/Home.vue";
import News from "@/components/News";
import Books from "@/components/Books";
import Book from "@/components/Book";
import Videos from "@/components/Videos";

// 安装vue-router插件
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/news",
    component: News,
  },
  {
    path: "/books",
    component: Books,
    children: [
      { path: "/book/:id", component: Book }
    ],
  },
  // {
  //   path: "/books",
  //   component: Books,
  // },
  {
    path: "/book/:id",
    component: Book,
  },
  {
    path: "/book",
    component: Book,
  },
  {
    path: "/videos",
    component: Videos,
  },

  {
    path: "user-*",
  },
  {
    // 通配符匹配
    path: "*",
    component: 404,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
