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
      children: [
        //خواهران
        {
          path: "runkhaharan",
          component: () =>
            import("../components/Khaharan/ServiceRunAddComponent.vue"),
          data: {
            breadcrumb: " اجرای کل خواهران  ",
            serviceid: "4",
            type: "1006",
            isone: "0",
          },
        },
        {
          path: "runkhaharanasatid",
          component: () =>
            import("../components/Khaharan/ServiceRunAddComponent.vue"),
          data: {
            breadcrumb: "اجرای اساتید خواهران",
            serviceid: "4",
            type: "1009",
            isone: "0",
          },
        },
        {
          path: "runonekhaharan",
          component: () =>
            import("../components/Khaharan/ServiceRunAddComponent.vue"),
          data: {
            breadcrumb: " اجرای موردی خواهران ",
            serviceid: "4",
            type: "1010",
            isone: "1",
          },
        },
        {
          path: "runonekhaharanasatid",
          component: () =>
            import("../components/Khaharan/ServiceRunAddComponent.vue"),
          data: {
            breadcrumb: " اجرای موردی اساتید خواهران ",
            serviceid: "4",
            type: "1011",
            isone: "1",
          },
        },
        {
          path: "run_haharan_bychange",
          component: () =>
            import(
              "../components/Khaharan/ServiceRunKhahranByChangeAddComponent.vue"
            ),
          data: {
            breadcrumb: "اجرای خواهران بر اساس تغییرات ",
            serviceid: "4",
            type: "1022",
            isone: "1",
          },
        },
        //لیست خواهران
        {
          path: "listkhaharan",
          component: () =>
            import(
              "../components/Khaharan/ListKhaharan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: "لیست کامل خواهران ",
            requestType: "1006",
            serviceid: "4",
          },
        },
        {
          path: "listkhaharanasatid",
          component: () =>
            import(
              "../components/Khaharan/ListKhaharan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: "لیست اساتید خواهران ",
            requestType: "1009",
            serviceid: "4",
          },
        },
        {
          path: "listkhaharanone",
          component: () =>
            import(
              "../components/Khaharan/ListKhaharan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: " لیست موردی خواهران   ",
            requestType: "1010",
            serviceid: "4",
          },
        },
        {
          path: "listkhaharanoneasatid",
          component: () =>
            import(
              "../components/Khaharan/ListKhaharan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: " لیست موردی  اساتید خواهران   ",
            requestType: "1011",
            serviceid: "4",
          },
        },
        {
          path: "list_haharan_bychange",
          component: () =>
            import(
              "../components/Khaharan/ListKhaharan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: " لیست تغییرات  خواهران   ",
            requestType: "1022",
            serviceid: "4",
          },
        },
        // خراسان
        {
          path: "runkhorasan",
          component: () =>
            import("../components/Khorasan/ServiceRunAddComponent.vue"),
          data: {
            breadcrumb: " اجرای کل خراسان  ",
            serviceid: "2",
            type: "1003",
            isone: "0",
          },
        },
        {
          path: "runkhorasan_momtazin",
          component: () =>
            import("../components/Khorasan/ServiceRunKhorasanAddComponent.vue"),
          data: {
            breadcrumb: " اجرای ممتازین خراسان ",
            serviceid: "2",
            type: "1025",
            isone: "0",
          },
        },
        {
          path: "runkhorasanone",
          component: () =>
            import("../components/Khorasan/ServiceRunAddComponent.vue"),
          data: {
            breadcrumb: "اجرای موردی خراسان",
            serviceid: "2",
            type: "1013",
            isone: "1",
          },
        },
        //لیست خراسان
        {
          path: "listkhorasan",
          component: () =>
            import(
              "../components/Khorasan/ListKhorasan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: "لیست کامل خراسان ",
            requestType: "1003",
            serviceid: "2",
          },
        },
        {
          path: "list_khorasanone_momtazin",
          component: () =>
            import(
              "../components/Khorasan/ListKhorasan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: "لیست ممتازین خراسان ",
            requestType: "1025",
            serviceid: "2",
          },
        },
        {
          path: "listkhorasanone",
          component: () =>
            import(
              "../components/Khorasan/ListKhorasan/ServiceRunAdminComponent.vue"
            ),
          data: {
            breadcrumb: "لیست موردی خراسان ",
            requestType: "1013",
            serviceid: "2",
          },
        },
      ],
    },
    {
      path: "/:catchAll(.*)*",
      component: () => import("../views/ErrorNotFound.vue"),
    },
  ],
});

export default router;
