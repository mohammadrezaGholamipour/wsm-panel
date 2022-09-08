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
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای کل خواهران",
            serviceid: "4",
            type: "1006",
            isone: "0",
          },
        },
        {
          path: "runkhaharanasatid",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای اساتید خواهران",
            serviceid: "4",
            type: "1009",
            isone: "0",
          },
        },
        {
          path: "runonekhaharan",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای موردی خواهران",
            serviceid: "4",
            type: "1010",
            isone: "1",
          },
        },
        {
          path: "runonekhaharanasatid",
          component: () => import("../views//ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای موردی اساتید خواهران",
            serviceid: "4",
            type: "1011",
            isone: "1",
          },
        },
        {
          path: "run_haharan_bychange",
          component: () =>
            import("../views/ServiceRunKhahranByChangeAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای خواهران بر اساس تغییرات",
            serviceid: "4",
            type: "1022",
            isone: "1",
          },
        },
        //لیست خواهران
        {
          path: "listkhaharan",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست کامل خواهران",
            requestType: "1006",
            serviceid: "4",
          },
        },
        {
          path: "listkhaharanasatid",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست اساتید خواهران",
            requestType: "1009",
            serviceid: "4",
          },
        },
        {
          path: "listkhaharanone",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی خواهران",
            requestType: "1010",
            serviceid: "4",
          },
        },
        {
          path: "listkhaharanoneasatid",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی  اساتید خواهران",
            requestType: "1011",
            serviceid: "4",
          },
        },
        {
          path: "list_haharan_bychange",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست تغییرات  خواهران",
            requestType: "1022",
            serviceid: "4",
          },
        },
        // خراسان
        {
          path: "runkhorasan",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای کل خراسان",
            serviceid: "2",
            type: "1003",
            isone: "0",
          },
        },
        {
          path: "runkhorasan_momtazin",
          component: () =>
            import("../views/ServiceRunKhorasanAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای ممتازین خراسان",
            serviceid: "2",
            type: "1025",
            isone: "0",
          },
        },
        {
          path: "runkhorasanone",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای موردی خراسان",
            serviceid: "2",
            type: "1013",
            isone: "1",
          },
        },
        //لیست خراسان
        {
          path: "listkhorasan",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست کامل خراسان",
            requestType: "1003",
            serviceid: "2",
          },
        },
        {
          path: "list_khorasanone_momtazin",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست ممتازین خراسان",
            requestType: "1025",
            serviceid: "2",
          },
        },
        {
          path: "listkhorasanone",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی خراسان",
            requestType: "1013",
            serviceid: "2",
          },
        },
        //جامعه الزهرا
        {
          path: "runAlzahra",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای کل جامعه الزهرا",
            serviceid: "3",
            type: "1005",
            isone: "0",
          },
        },
        {
          path: "runAlzahraasatid",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای اساتید جامعه الزهرا",
            serviceid: "3",
            type: "1008",
            isone: "0",
          },
        },
        {
          path: "runoneAlzahra",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای موردی جامعه الزهرا",
            serviceid: "3",
            type: "1012",
            isone: "1",
          },
        },
        {
          path: "runoneAlzahraasatid",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای موردی اساتید جامعه الزهرا",
            serviceid: "3",
            type: "1014",
            isone: "1",
          },
        },
        {
          path: "runoneAlzahr_archivedcode",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای موردی جامعه الزهرا-براساس کدبایگانی",
            serviceid: "3",
            type: "1026",
            isone: "1",
          },
        },
        {
          path: "runoneAlzahr_mobaleghin",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای مبلغین جامعه الزهرا",
            serviceid: "3",
            type: "1042",
            isone: "0",
          },
        },
        // لیست جامعه الزهرا
        {
          path: "listAlzahra",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست کامل جامعه الزهرا",
            requestType: "1005",
            serviceid: "3",
          },
        },
        {
          path: "listAlzahraasatid",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست اساتید جامعه الزهرا",
            requestType: "1008",
            serviceid: "3",
          },
        },
        {
          path: "listAlzahraone",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی جامعه الزهرا",
            requestType: "1012",
            serviceid: "3",
          },
        },
        {
          path: "listAlzahraoneasatid",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی اساتید جامعه الزهرا",
            requestType: "1014",
            serviceid: "3",
          },
        },
        {
          path: "listAlzahra_archivedcode",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی جامعه الزهرا-کدبایگانی",
            requestType: "1026",
            serviceid: "3",
          },
        },
        {
          path: "listAlzahra_mobaleghin",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست مبلغین جامعه الزهرا",
            requestType: "1042",
            serviceid: "3",
          },
        },
        //اهل سنت
        {
          path: "runsonnat",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای کل سنت",
            serviceid: "1",
            type: "1007",
            isone: "0",
          },
        },
        {
          path: "runsonnat_one",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای تکی اهل سنت",
            serviceid: "1",
            type: "1036",
            isone: "1",
          },
        },
        // لیست اهل سنت
        {
          path: "listsonnat",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست کامل سنت ",
            requestType: "1007",
            serviceid: "1",
          },
        },
        {
          path: "listsonnat_one",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست تکی اهل سنت",
            serviceid: "1",
            requestType: "1036",
          },
        },
        // جامعه المصطفی
        {
          path: "run_almostafa_allstudents",
          component: () =>
            import("../views/ServiceRunAlMostafaAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای تجمیعی المصطفی",
            serviceid: "7",
            type: "1034",
            isone: "0",
          },
        },
        {
          path: "almostaf_allstudents",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست اطللاعات تجمیعی طلاب المصطفی",
            requestType: "1034",
            serviceid: "7",
          },
        },
        // دفتر تبلیغات
        {
          path: "tablighat_office_one_run",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای تکی دفتر تبلیغات",
            serviceid: "8",
            type: "1038",
            isone: "1",
          },
        },
        {
          path: "tablighat_office_run_by_dates",
          component: () =>
            import("../views/ServiceRunTablighatOfficeAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای کل دفتر تبلیغات براساس بازه تاریخ",
            serviceid: "8",
            type: "1039",
            isone: "1",
          },
        },
        // لیست دفتر تبلیغات
        {
          path: "tablighat_office_one_list",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست تکی دفتر تبلیغات",
            serviceid: "8",
            requestType: "1038",
          },
        },
        {
          path: "tablighat_office_list_by_dates",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست دفتر تبلیغات براساس سال",
            requestType: "1039",
            serviceid: "8",
          },
        },
        //سامانه پیامک چاپار
        {
          path: "chappar_sms",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "تاریخچه ارسال",
            serviceid: "9",
            type: "1041",
            isone: "1",
          },
        },
        {
          path: "run_chappar_sms",
          component: () =>
            import("../views/ServiceRunAlChapparAddComponent.vue"),
          meta: {
            breadcrumb: "ارسال پیامک",
            serviceid: "9",
            type: "1041",
            isone: "1",
          },
        },
        // سازمان تبلیغات
        {
          path: "tablighat_org_mobaleghin_run",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای مبلغین سازمان تبلیغات",
            serviceid: "10",
            type: "1043",
            isone: "0",
          },
        },
        {
          path: "tablighat_org_mobalegh_run",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای تکی مبلغ سازمان تبلیغات",
            serviceid: "10",
            type: "1044",
            isone: "1",
          },
        },
        // لیست سازمان تبلیغات
        {
          path: "tablighat_org_mobaleghin_list",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست مبلغین سازمان تبلیغات",
            requestType: "1043",
            serviceid: "10",
          },
        },
        {
          path: "tablighat_org_mobalegh_list",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی مبلغ سازمان تبلیغات",
            requestType: "1044",
            serviceid: "10",
          },
        },
        // امور استخدامی
        {
          path: "employee_inquery_bylist_run",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای لیستی استعلام کارمند",
            serviceid: "11",
            type: "1046",
            isone: "1",
          },
        },
        {
          path: "employee_inquery_single_run",
          component: () => import("../views/ServiceRunAddComponent.vue"),
          meta: {
            breadcrumb: "اجرای موردی استعلام کارمند",
            serviceid: "11",
            type: "1045",
            isone: "1",
          },
        },
        {
          path: "employee_inquery_bylist_list",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست استعلام کارمندان",
            requestType: "1046",
            serviceid: "11",
          },
        },
        {
          path: "employee_inquery_single_list",
          component: () => import("../views/ServiceRunAdminComponent.vue"),
          meta: {
            breadcrumb: "لیست موردی استعلام کارمند",
            requestType: "1045",
            serviceid: "11",
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
