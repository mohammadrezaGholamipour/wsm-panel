<script setup>
import { ref } from "@vue/reactivity";
const test = ref();
const HandelIconMenu = (event) => {
  test.value = event.currentTarget.ariaExpanded;
};
</script>
<template>
  <div class="MenuSystem" id="sidenavSecExample">
    <ul class="relative w-full px-2">
      <li class="relative">
        <a
          class="MenuLink"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="primary"
        >
          <span>جامعه الزهرا</span>
        </a>
      </li>
      <li class="relative" id="sidenavXxEx2">
        <a
          @click="HandelIconMenu"
          class="MenuLink"
          data-mdb-ripple="true"
          data-mdb-ripple-color="primary"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSidenavXxEx2"
          aria-expanded="true"
          aria-controls="collapseSidenavXxEx2"
        >
          <span>جامعه المصطفی</span>
          <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
        </a>
        <ul
          class="relative accordion-collapse text-center collapse"
          id="collapseSidenavXxEx2"
          aria-labelledby="sidenavXxEx2"
          data-bs-parent="#sidenavSecExample"
        >
          <li class="relative">
            <a
              href="#!"
              class="MenuLinkNested"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              >مدیریت</a
            >
          </li>
          <li class="relative">
            <a
              href="#!"
              class="MenuLinkNested"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              >کارمندان</a
            >
          </li>
        </ul>
      </li>
      <hr class="my-2" />
      <!-- ////////////////////////////// -->
      <li class="relative" id="sidenavXxEx3">
        <a
          class="MenuLink"
          data-mdb-ripple="true"
          data-mdb-ripple-color="primary"
          data-bs-toggle="collapse"
          data-bs-target="#collapseSidenavXxEx3"
          aria-expanded="false"
          aria-controls="collapseSidenavXxEx3"
        >
          <span>سازمان تبلیغات</span>
          <font-awesome-icon icon="fa-solid fa-circle-arrow-down" />
        </a>
        <ul
          class="relative accordion-collapse collapse"
          data-bs-parent="#sidenavSecExample"
          aria-labelledby="sidenavXxEx3"
          id="collapseSidenavXxEx3"
        >
          <li class="relative">
            <a
              data-mdb-ripple-color="primary"
              class="MenuLinkNested"
              data-mdb-ripple="true"
              href="#!"
              >امور مالی</a
            >
          </li>
          <li class="relative">
            <a
              href="#!"
              class="MenuLinkNested"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              >امور اداری</a
            >
          </li>
        </ul>
      </li>
    </ul>
    <div class="text-center bottom-0 absolute bg-blue-400 w-full">
      <p class="py-2 text-sm text-white">مرکز خدمات حوزه های علمیه قم</p>
    </div>
  </div>
</template>

<style scoped></style>
