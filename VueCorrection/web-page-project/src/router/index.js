import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView";
import PolicyView from "../views/PolicyView";
import ServiceView from "../views/ServiceView";

const routes = [
  {
    path: "/",
    name: "home",
    component: LandingView,
  },
  {
    path: "/Policy",
    name: "policy",
    component: PolicyView,
  },
  {
    path: "/Service",
    name: "service",
    component: ServiceView,
  },
];

const router = createRouter({
  head: {
    title: "랜딩페이지",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  history: createWebHistory(process.env.BASE_URL),
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return window.scrollTo(0, 0);
    }
  },
});

export default router;
