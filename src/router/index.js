import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: LoginView,
    },
    {
      path: "/home",
      component: () => import("../layouts/MainLayout.vue"),
      children: [],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../views/ErrorNotFound.vue"),
    },
  ],
});

export default router;
