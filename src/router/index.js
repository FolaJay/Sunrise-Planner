import Vue from "vue";
import VueRouter from "vue-router";
import page1 from "../views/page1.vue";
import page2 from "../views/page2.vue";
import page3 from "../views/page3.vue";

Vue.use(VueRouter);

const routes = [
  
  {
    path: "/",
    name: "page1",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: page1
  },
  {
    path: "/page2",
    name: "page2",
    component: page2
  },
  {
    path: "/page3",
    name: "page3",
    component: page3
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
