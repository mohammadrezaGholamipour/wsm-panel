<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import BreadCrumb from "./BreadCrumb.vue";
import { useFullscreen } from "@vueuse/core";
const { isFullscreen, enter, exit } = useFullscreen();
const IconFullOrDefaultScreen = ref(false);

const TarikhOption = [
  {
    day: "numeric",
  },
  {
    month: "long",
  },
  {
    weekday: "long",
  },
  {
    year: "numeric",
  },
];

const Tarikh = ref([]);
TarikhOption.forEach((items) => {
  Tarikh.value.push(new Intl.DateTimeFormat("fa-IR", items).format(new Date()));
});
watch(isFullscreen, (value) => {
  IconFullOrDefaultScreen.value = value;
});
const HandelFullOrDefaultScreen = () => {
  IconFullOrDefaultScreen.value = !IconFullOrDefaultScreen.value;
  if (IconFullOrDefaultScreen.value) {
    enter();
  } else {
    exit();
  }
};
</script>

<template>
  <nav class="Header">
    <div class="HeaderBtn">
      <!-- ////////////////////////////// -->
      <!-- LogOutBtn -->
      <button type="button" class="BtnLogout">
        <font-awesome-icon icon="fa-solid fa-power-off" beat />
      </button>
      <!-- //////////////////////////////// -->
      <!-- MenuMobileBtn -->
      <button
        data-bs-target="#offcanvasRight"
        aria-controls="offcanvasRight"
        data-bs-toggle="offcanvas"
        class="BtnMenuMobile"
        type="button"
      >
        <font-awesome-icon icon="fa-solid fa-bars" />
      </button>
      <!-- ////////////////////////////////// -->
      <!-- Tarikh -->
      <div class="Tarikh">
        {{ Tarikh[2] }} {{ Tarikh[0] }} {{ Tarikh[1] }} {{ Tarikh[3] }}
      </div>
      <!-- ////////////////////////////// -->
      <!-- AccountInfoBtn -->
      <div class="relative">
        <button
          data-bs-toggle="dropdown"
          aria-expanded="false"
          class="BtnAccount"
          type="button"
          id="test"
        >
          <font-awesome-icon icon="fa-solid fa-user-pen" />
        </button>
        <ul
          class="UlAccount py-0 overflow-hidden hidden text-white dropdown-menu bg-slate-500"
          aria-labelledby="test"
        >
          <h5 class="text-sm py-2 px-4 block w-full">آقای مجتبی شاقی</h5>
          <hr
            class="h-0 border border-solid border-t-0 border-white opacity-25"
          />
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-white hover:text-black"
              href="#"
              >تغییر اطلاعات</a
            >
          </li>
          <hr
            class="h-0 border border-solid border-t-0 border-white opacity-25"
          />
          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-white hover:text-black"
              href="#"
            >
              نظر سنجی</a
            >
          </li>

          <hr
            class="h-0 border border-solid border-t-0 border-white opacity-25"
          />

          <li>
            <a
              class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-white hover:text-black focus:text-white focus:bg-gray-700"
              href="#"
              >خروج از اکانت</a
            >
          </li>
        </ul>
      </div>
      <!-- ////////////////////////////// -->
      <!-- FullOrDefaultScreen -->
      <button
        type="button"
        class="FullOrDefaultScreen"
        @click="HandelFullOrDefaultScreen"
      >
        <font-awesome-icon
          :icon="
            isFullscreen
              ? 'fa-solid fa-down-left-and-up-right-to-center'
              : 'fa-solid fa-up-right-and-down-left-from-center'
          "
        />
      </button>
      <!-- FinishFullOrDefaultScreen -->
    </div>

    <BreadCrumb />

    <!-- MessagesBtn -->
    <button type="button" class="BtnMessages ml-1">
      <font-awesome-icon icon="fa-solid fa-envelope" />
      <p class="ml-2">پیام ها</p>
    </button>
    <!-- FinishMessagesBtn -->
  </nav>
</template>

<style></style>
