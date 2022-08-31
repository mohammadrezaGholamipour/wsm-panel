<script setup></script>
<template>
  <div
    aria-labelledby="offcanvasRightLabel"
    class="MenuMobile offcanvas"
    id="offcanvasRight"
  >
    <div class="offcanvas-header flex items-center justify-between p-4">
      <h5 class="offcanvas-title mb-0" id="offcanvasRightLabel">
        مرکز خدمات حوزه های علمیه قم
      </h5>
      <button
        type="button"
        class="flex text-3xl focus:opacity-100 hover:opacity-75"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      >
        <font-awesome-icon
          icon="fa-solid fa-circle-xmark"
          class="text-red-500 border-2 rounded-full border-red-600"
        />
      </button>
    </div>
    <div class="offcanvas-body px-4 overflow-y-auto">
      <ul class="relative">
        <li class="relative">
          <a
            class="MenuLink"
            href="#!"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
          >
            <font-awesome-icon
              icon="fa-solid fa-building-columns"
              class="mx-1"
            />
            <span>جامعه الزهرا</span>
          </a>
        </li>
        <li class="relative" id="sidenavXxEx2">
          <a
            class="MenuLink"
            data-mdb-ripple="true"
            data-mdb-ripple-color="primary"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSidenavXxEx2"
            aria-expanded="false"
            aria-controls="collapseSidenavXxEx2"
          >
            <span>جامعه المصطفی</span>
            <font-awesome-icon
              icon="fa-solid fa-circle-arrow-down"
              class="mx-1"
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
            <font-awesome-icon
              icon="fa-solid fa-circle-arrow-down"
              class="mx-1"
            />
          </a>
          <ul
            class="relative accordion-collapse collapse"
            id="collapseSidenavXxEx3"
            aria-labelledby="sidenavXxEx3"
            data-bs-parent="#sidenavSecExample"
          >
            <li class="relative">
              <a
                href="#!"
                class="MenuLinkNested"
                data-mdb-ripple="true"
                data-mdb-ripple-color="primary"
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
  </div>
</template>
