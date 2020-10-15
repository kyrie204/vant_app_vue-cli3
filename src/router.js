import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Nav from "./views/nav.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [{
      path: "/",
      name: "root",
      component: Nav,
      redirect: '/login',
      children: [{
          path: "/index",
          name: "index",
          component: () => import("./views/index.vue")
        }, {
          path: "/about",
          name: "about",
          component: () => import("./views/About.vue")
        },
        {
          path: "/home",
          name: "home",
          component: () => import("./components/HelloWorld.vue")
        },
      ]
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/login.vue")
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import( /* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});