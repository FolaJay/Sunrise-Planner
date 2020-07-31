import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import covid from "../views/covid-19.vue";
import store from "../views/store.vue";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: home
  },
  {
    path: "/covid-19",
    name: "covvid-19",
    component: covid
  },
  {
    path: "/store",
    name: "store",
    component: store
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
