import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";
import gallery from "../views/gallery.vue";
import training from "../views/training.vue";

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
    path: "/gallery",
    name: "gallery",
    component: gallery
  },
  {
    path: "/training",
    name: "training",
    component: training
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
