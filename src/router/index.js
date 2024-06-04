import { createRouter, createWebHashHistory, useRouter } from "vue-router";
import pinia from "../stores/index";

const async_routers = [
  {
    path: "/",
    component: () => import(/* webpackChunkName: "layout" */ "../views/home/index.vue"),
    children: [
      {
        path: "/",
        name: "首页",
        component: () => import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
      },
      {
        path: "/category",
        name: "类别",
        children: [
          {
            path: "/category/asus",
            name: "华硕",
            component: () => import(/* webpackChunkName: "home" */ "../views/category/asus.vue"),
          },
          {
            path: "/category/lenovo",
            name: "拯救者",
            component: () => import(/* webpackChunkName: "home" */ "../views/category/lenovo.vue"),
          },
        ],
      },
      {
        path: "/cpu",
        name: "处理器",
        children: [
          {
            path: "/cpu/amd",
            name: "amd",
            component: () => import(/* webpackChunkName: "home" */ "../views/cpu/amd.vue"),
          },
          {
            path: "/cpu/intel",
            name: "intel",
            component: () => import(/* webpackChunkName: "home" */ "../views/cpu/intel.vue"),
          },
        ],
      },
    ],
  },
  // {},
];

const static_routers = [
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/not-found/Not-Found.vue"),
  },
];

const routes = [
  {
    path: "/login",
    component: () => import(/* webpackChunkName: "login" */ "../views/login/login.vue"),
  },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "layout" */ "../layout/index.vue"),
    children: [
      {
        path: "/",
        name: "首页",
        component: () => import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
      },
      {
        path: "/category",
        name: "类别",
        children: [
          {
            path: "/category/asus",
            name: "华硕",
            component: () => import(/* webpackChunkName: "home" */ "../views/category/asus.vue"),
          },
          {
            path: "/category/lenovo",
            name: "拯救者",
            component: () => import(/* webpackChunkName: "home" */ "../views/category/lenovo.vue"),
          },
        ],
      },
      {
        path: "/cpu",
        name: "处理器",
        children: [
          {
            path: "/cpu/amd",
            name: "amd",
            component: () => import(/* webpackChunkName: "home" */ "../views/cpu/amd.vue"),
          },
          {
            path: "/cpu/intel",
            name: "intel",
            component: () => import(/* webpackChunkName: "home" */ "../views/cpu/intel.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("../views/not-found/Not-Found.vue"),
  },
];

// function getNewRouters(routers, i) {
//   return routers.filter((e, idx) => {
//     const index = i || i === 0 ? `${i}-${idx}` : `${idx}`;
//     e.meta = { ...e.meta, index };

//     if (e.children && e.children.length) {
//       const childs = getNewRouters(e.children, index);

//       e.children = childs;

//       return !!childs.length;
//     } else {
//       return true;
//     }
//   });
// }

// function getLayoutRouters(routers) {
//   return [
//     {
//       path: "/",
//       component: () => import(/* webpackChunkName: "layout" */ "../layout/index.vue"),
//       children: [...routers, ...static_routers],
//     },
//   ];
// }

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from) => {
  // const routers = getNewRouters(async_routers);
  // console.log("routers", routers);
  // const isNewRouters = getLayoutRouters(routers);
  // console.log("isNewRouters", isNewRouters);
  // router.addRoute(isNewRouters); // vue3 摒弃了addRoutes方法
  // useMenu.sidebar = routers;
  // console.log("router", router);
  // next({ ...to, replace: true });
});

export default router;
