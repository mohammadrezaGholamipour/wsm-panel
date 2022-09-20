<script setup>
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
const route = useRoute();
const menuList = ref([
  {
    title: "خواهران",
    children: [
      {
        title: "اجرای  کامل",
        link: "/runkhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای اساتید",
        link: "/runkhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای موردی",
        link: "/runonekhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای موردی اساتید",
        link: "/runonekhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای بر اساس تغییرات",
        link: "/run_haharan_bychange",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست اجرای کامل",
        link: "/listkhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اساتید",
        link: "/listkhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی ",
        link: "/listkhaharanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی اساتید",
        link: "/listkhaharanoneasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست خواهران بر اساس تغییرات",
        link: "/list_haharan_bychange",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "خراسان",
    children: [
      {
        title: "اجرای  کامل خراسان",
        link: "/runkhorasan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای ممتازین خراسان",
        link: "/runkhorasan_momtazin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای موردی  خراسان",
        link: "/runkhorasanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست کامل خراسان",
        link: "/listkhorasan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست ممتازین خراسان",
        link: "/list_khorasanone_momtazin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست موردی خراسان",
        link: "/listkhorasanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "جامعه الزهرا",
    children: [
      {
        title: "اجرای  کامل",
        link: "/runAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای اساتید",
        link: "/runAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای موردی",
        link: "/runoneAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای موردی اساتید",
        link: "/runoneAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای موردی براساس کدبایگانی",
        link: "/runoneAlzahr_archivedcode",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای مبلغین الزهرا",
        link: "/runoneAlzahr_mobaleghin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اجرای کامل",
        link: "/listAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اساتید",
        link: "/listAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی",
        link: "/listAlzahraone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی اساتید",
        link: "/listAlzahraoneasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی براساس کدبایگانی",
        link: "/listAlzahra_archivedcode",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست مبلغین الزهرا",
        link: "/listAlzahra_mobaleghin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "اهل سنت",
    children: [
      {
        title: "اجرای کامل اهل سنت",
        link: "/runsonnat",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای تکی اهل سنت",
        link: "/runsonnat_one",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست کامل اهل سنت",
        link: "/listsonnat",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست تکی اهل سنت",
        link: "/listsonnat_one",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "جامعه المصطفی",
    children: [
      {
        title: "اجرای تجمیعی المصطفی",
        link: "/run_almostafa_allstudents",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اطلاعات تجمیعی طلاب المصطفی",
        link: "/almostaf_allstudents",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "دفترتبلیغات",
    children: [
      {
        title: "اجرای تکی مبلغ",
        link: "/tablighat_office_one_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرا براساس بازه تاریخ",
        link: "/tablighat_office_run_by_dates",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست تکی مبلغ",
        link: "/tablighat_office_one_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اجرا براساس بازه تاریخ",
        link: "/tablighat_office_list_by_dates",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "سامانه پیامک چاپار",
    children: [
      {
        title: "تاریخچه ارسال پیامک",
        link: "/chappar_sms",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "ارسال پیامک",
        link: "/run_chappar_sms",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "سازمان تبلیغات",
    children: [
      {
        title: "اجرای مبلغین",
        link: "/tablighat_org_mobaleghin_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای تکی مبلغین",
        link: "/tablighat_org_mobalegh_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست مبلغین",
        link: "/tablighat_org_mobaleghin_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست تکی مبلغین",
        link: "/tablighat_org_mobalegh_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "امور استخدامی",
    children: [
      {
        title: "اجرای لیستی استعلام کارمندان",
        link: "/employee_inquery_bylist_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای موردی استعلام کارمند",
        link: "/employee_inquery_single_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست بلوکی استعلام کارمندان",
        link: "/employee_inquery_bylist_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست موردی استعلام کارمند",
        link: "/employee_inquery_single_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
]);
const handelCollapseUl = (itemstitle) => {
  menuList.value.forEach((items) => {
    if (items.title === itemstitle) {
      items.isOpen = !items.isOpen;
    } else {
      items.isOpen = false;
    }
  });
};
</script>
<template>
  <div class="MenuSystemParent">
    <div class="MenuSystemParentUl">
      <ul
        @click="handelCollapseUl(items.title)"
        v-for="items in menuList"
        :key="items.title"
      >
        <li>
          <a
            data-mdb-ripple-color="black"
            data-mdb-ripple="true"
            class="MenuLink"
          >
            <span>{{ items.title }}</span>
            <font-awesome-icon
              icon=" fa-solid fa-circle-arrow-down"
              :class="
                items.isOpen
                  ? 'rotate-180 text-red-500  duration-700'
                  : ' text-slate-500 duration-700'
              "
            />
          </a>
          <transition
            enter-active-class="duration-700 ease-out"
            enter-from-class="transform opacity-0"
            leave-to-class="transform opacity-0"
            leave-from-class="opacity-200"
            enter-to-class="opacity-200"
          >
            <ul class="pr-1" @click.stop v-show="items.isOpen">
              <li
                :class="
                  route.path === item.link
                    ? 'hover:bg-[#60645f1c] rounded-lg bg-[#e02d2d1c]'
                    : ''
                "
                class="flex w-full flex-row justify-between"
                v-for="item in items.children"
                :key="item.title"
              >
                <router-link class="MenuLinkNested" :to="item.link">
                  <span>{{ item.title }}</span>

                  <font-awesome-icon
                    class="text-xs ml-1 text-green-600"
                    icon="fa-solid fa-grip-lines"
                  />
                </router-link>
              </li>
            </ul>
          </transition>
        </li>

        <hr class="MenuSystemHr" />
      </ul>
    </div>
  </div>
</template>
