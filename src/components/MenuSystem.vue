<script setup>
import { ref } from "@vue/reactivity";
const MenuIconPosition = ref(false);
const HandelIconMenu = (event) => {
  const FindCollapsed = event.currentTarget.classList;
  FindCollapsed.forEach((items) => {
    if (items === "collapsed") {
      MenuIconPosition.value = false;
    } else {
      MenuIconPosition.value = true;
    }
  });
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
      <hr class="my-2" />
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
          <font-awesome-icon
            :icon="
              MenuIconPosition
                ? 'fa-solid fa-circle-arrow-up'
                : 'fa-solid fa-circle-arrow-down'
            "
          />
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
  </div>
</template>

<style scoped></style>
