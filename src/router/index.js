import { createRouter, createWebHashHistory, useRouter } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    // {
    //   path: "/",
    //   redirect: "/index",
    // },
    {
      path: "/login",
      component: () => import("../views/login/login.vue"),
    },
    {
      path: "/",
      component: () => import(/* webpackChunkName: "layout" */ "@/layout/index.vue"),
      children: [
        {
          path: "/",
          name: "首页",
          component: () => import("@/views/index/index.vue"),
        },
      ],
    },

    {
      path: "/:pathMatch(.*)",
      component: () => import("../views/not-found/Not-Found.vue"),
    },
  ],
});

export default router;
