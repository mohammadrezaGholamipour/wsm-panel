<script setup>
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
const MenuIconPosition = ref(false);
const HandelCollapseUl = (itemstitle) => {
  MenuList.value.forEach((items) => {
    if (items.title === itemstitle) {
      items.isOpen = !items.isOpen;
      console.log(items.isOpen);
    }
  });
};
const MenuList = ref([
  {
    title: "خواهران",
    children: [
      {
        title: "اجرای  کامل  ",
        link: "/servicebus/runkhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای اساتید ",
        link: "/servicebus/runkhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای   موردی ",
        link: "/servicebus/runonekhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: " اجرای موردی اساتید ",
        link: "/servicebus/runonekhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: " اجرای بر اساس تغییرات",
        link: "/servicebus/run_haharan_bychange",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست اجرای کامل ",
        link: "/servicebus/listkhaharan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اساتید ",
        link: "/servicebus/listkhaharanasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی ",
        link: "/servicebus/listkhaharanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی اساتید ",
        link: "/servicebus/listkhaharanoneasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست خواهران بر اساس تغییرات ",
        link: "/servicebus/list_haharan_bychange",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true,
  },
  {
    title: "خراسان",
    children: [
      {
        title: "اجرای  کامل خراسان ",
        link: "/servicebus/runkhorasan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای ممتازین خراسان ",
        link: "/servicebus/runkhorasan_momtazin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای موردی  خراسان ",
        link: "/servicebus/runkhorasanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست کامل خراسان ",
        link: "/servicebus/listkhorasan",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست ممتازین خراسان ",
        link: "/servicebus/list_khorasanone_momtazin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست موردی خراسان ",
        link: "/servicebus/listkhorasanone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "جامعه الزهرا",
    children: [
      {
        title: "اجرای  کامل  ",
        link: "/servicebus/runAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای اساتید ",
        link: "/servicebus/runAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای   موردی ",
        link: "/servicebus/runoneAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: " اجرای موردی اساتید ",
        link: "/servicebus/runoneAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: " اجرای موردی براساس کدبایگانی ",
        link: "/servicebus/runoneAlzahr_archivedcode",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: " اجرای مبلغین الزهرا ",
        link: "/servicebus/runoneAlzahr_mobaleghin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اجرای کامل ",
        link: "/servicebus/listAlzahra",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اساتید ",
        link: "/servicebus/listAlzahraasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی ",
        link: "/servicebus/listAlzahraone",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی اساتید ",
        link: "/servicebus/listAlzahraoneasatid",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست موردی براساس کدبایگانی ",
        link: "/servicebus/listAlzahra_archivedcode",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست مبلغین الزهرا ",
        link: "/servicebus/listAlzahra_mobaleghin",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "اهل سنت",
    children: [
      {
        title: "اجرای  کامل اهل سنت ",
        link: "/servicebus/runsonnat",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرای تکی اهل سنت ",
        link: "/servicebus/runsonnat_one",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست کامل اهل سنت ",
        link: "/servicebus/listsonnat",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست تکی اهل سنت ",
        link: "/servicebus/listsonnat_one",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "جامعه المصطفی",
    children: [
      {
        title: "اجرای تجمیعی المصطفی",
        link: "/servicebus/run_almostafa_allstudents",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اطلاعات تجمیعی طلاب المصطفی",
        link: "/servicebus/almostaf_allstudents",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "دفترتبلیغات",
    children: [
      {
        title: "اجرای تکی مبلغ ",
        link: "/servicebus/tablighat_office_one_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "اجرا براساس بازه تاریخ ",
        link: "/servicebus/tablighat_office_run_by_dates",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست تکی مبلغ ",
        link: "/servicebus/tablighat_office_one_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
      {
        title: "لیست اجرا براساس بازه تاریخ ",
        link: "/servicebus/tablighat_office_list_by_dates",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "سامانه پیامک چاپار ",
    children: [
      {
        title: "تاریخچه ارسال پیامک",
        link: "/servicebus/chappar_sms",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "ارسال پیامک",
        link: "/servicebus/run_chappar_sms",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "سازمان تبلیغات",
    children: [
      {
        title: "اجرای مبلغین",
        link: "/servicebus/tablighat_org_mobaleghin_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای تکی مبلغین",
        link: "/servicebus/tablighat_org_mobalegh_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست مبلغین",
        link: "/servicebus/tablighat_org_mobaleghin_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست تکی مبلغین",
        link: "/servicebus/tablighat_org_mobalegh_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
  },
  {
    title: "امور استخدامی",
    children: [
      {
        title: "اجرای لیستی استعلام کارمندان",
        link: "/servicebus/employee_inquery_bylist_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "اجرای موردی استعلام کارمند",
        link: "/servicebus/employee_inquery_single_run",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست بلوکی استعلام کارمندان",
        link: "/servicebus/employee_inquery_bylist_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },

      {
        title: "لیست موردی استعلام کارمند",
        link: "/servicebus/employee_inquery_single_list",
        children: [],
        isOpen: false,
        hasAccess: true,
      },
    ],
    isOpen: false,
    hasAccess: true, //await this.checkAdminAccess(en_AppId.ManagmentGallery, PageEnumManagmentGallery.HomePage as number),
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
            class="MenuLink"
            data-mdb-ripple-color="info"
            data-mdb-ripple="true"
          >
            <span>{{ items.title }}</span>
            <font-awesome-icon
              class="text-green-700"
              icon=" fa-solid fa-circle-arrow-down"
            />
          </a>
          <ul
            class="MenuUlNested"
            :class="items.isOpen ? ' accordion-collapse' : 'collapse'"
          >
            <li
              class="flex w-full flex-row justify-between"
              v-for="item in items.children"
              :key="item.title"
            >
              <a
                data-mdb-ripple-color="info"
                class="MenuLinkNested"
                data-mdb-ripple="true"
                href="#!"
              >
                <span>{{ item.title }}</span>

                <font-awesome-icon
                  class="text-xs ml-1 text-green-600"
                  icon="fa-solid fa-grip-lines"
                />
              </a>
            </li>
          </ul>
        </li>
        <hr class="MenuSystemHr" />
      </ul>
    </div>
  </div>
</template>