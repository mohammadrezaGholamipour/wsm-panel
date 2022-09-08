<script setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
const MenuIconPosition = ref(false);
const HandelCollapseUl = (itemstitle) => {
  MenuList.value.forEach((items) => {
    if (items.title === itemstitle) {
      items.isOpen = !items.isOpen;
    }
  });
};
const MenuList = ref([
  {
    title: "خواهران",
    children: [
      {
        title: "اجرای  کامل  ",
        link: "/home/runkhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای اساتید ",
        link: "/home/runkhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای   موردی ",
        link: "/home/runonekhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: " اجرای موردی اساتید ",
        link: "/home/runonekhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: " اجرای بر اساس تغییرات",
        link: "/home/run_haharan_bychange",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست اجرای کامل ",
        link: "/home/listkhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اساتید ",
        link: "/home/listkhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی ",
        link: "/home/listkhaharanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی اساتید ",
        link: "/home/listkhaharanoneasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست خواهران بر اساس تغییرات ",
        link: "/home/list_haharan_bychange",
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
        title: "اجرای  کامل خراسان ",
        link: "/home/runkhorasan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای ممتازین خراسان ",
        link: "/home/runkhorasan_momtazin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای موردی  خراسان ",
        link: "/home/runkhorasanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست کامل خراسان ",
        link: "/home/listkhorasan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست ممتازین خراسان ",
        link: "/home/list_khorasanone_momtazin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست موردی خراسان ",
        link: "/home/listkhorasanone",
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
        title: "اجرای  کامل  ",
        link: "/home/runAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای اساتید ",
        link: "/home/runAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای   موردی ",
        link: "/home/runoneAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: " اجرای موردی اساتید ",
        link: "/home/runoneAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: " اجرای موردی براساس کدبایگانی ",
        link: "/home/runoneAlzahr_archivedcode",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: " اجرای مبلغین الزهرا ",
        link: "/home/runoneAlzahr_mobaleghin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اجرای کامل ",
        link: "/home/listAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اساتید ",
        link: "/home/listAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی ",
        link: "/home/listAlzahraone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی اساتید ",
        link: "/home/listAlzahraoneasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی براساس کدبایگانی ",
        link: "/home/listAlzahra_archivedcode",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست مبلغین الزهرا ",
        link: "/home/listAlzahra_mobaleghin",
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
        title: "اجرای  کامل اهل سنت ",
        link: "/home/runsonnat",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای تکی اهل سنت ",
        link: "/home/runsonnat_one",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست کامل اهل سنت ",
        link: "/home/listsonnat",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست تکی اهل سنت ",
        link: "/home/listsonnat_one",
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
        link: "/home/run_almostafa_allstudents",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اطلاعات تجمیعی طلاب المصطفی",
        link: "/home/almostaf_allstudents",
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
        title: "اجرای تکی مبلغ ",
        link: "/home/tablighat_office_one_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرا براساس بازه تاریخ ",
        link: "/home/tablighat_office_run_by_dates",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست تکی مبلغ ",
        link: "/home/tablighat_office_one_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اجرا براساس بازه تاریخ ",
        link: "/home/tablighat_office_list_by_dates",
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
        link: "/home/chappar_sms",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "ارسال پیامک",
        link: "/home/run_chappar_sms",
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
        link: "/home/tablighat_org_mobaleghin_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای تکی مبلغین",
        link: "/home/tablighat_org_mobalegh_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست مبلغین",
        link: "/home/tablighat_org_mobaleghin_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست تکی مبلغین",
        link: "/home/tablighat_org_mobalegh_list",
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
        link: "/home/employee_inquery_bylist_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای موردی استعلام کارمند",
        link: "/home/employee_inquery_single_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست بلوکی استعلام کارمندان",
        link: "/home/employee_inquery_bylist_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست موردی استعلام کارمند",
        link: "/home/employee_inquery_single_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
]);
</script>
<template>
  <div class="MenuSystemParent">
    <div class="MenuSystemParentUl">
      <ul
        @click="HandelCollapseUl(items.title)"
        v-for="items in MenuList"
        :key="items.title"
      >
        <li>
          <a
            data-mdb-ripple-color="info"
            data-mdb-ripple="true"
            class="MenuLink"
          >
            <span>{{ items.title }}</span>
            <font-awesome-icon
              icon=" fa-solid fa-circle-arrow-down"
              :class="
                items.isOpen
                  ? 'rotate-180 text-green-600  duration-500 '
                  : ' text-green-600 duration-500'
              "
            />
          </a>
          <ul :class="items.isOpen ? 'accordion-collapse' : 'collapse'">
            <li
              class="flex w-full flex-row justify-between"
              v-for="item in items.children"
              :key="item.title"
            >
              <router-link
                data-mdb-ripple-color="info"
                class="MenuLinkNested"
                data-mdb-ripple="true"
                :to="item.link"
              >
                <span>{{ item.title }}</span>

                <font-awesome-icon
                  class="text-xs ml-1 text-green-600"
                  icon="fa-solid fa-grip-lines"
                />
              </router-link>
            </li>
          </ul>
        </li>
        <hr class="MenuSystemHr" />
      </ul>
    </div>
  </div>
</template>
