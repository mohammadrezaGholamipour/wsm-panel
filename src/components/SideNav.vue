<script setup></script>
<template>
  <div class="SideNav" id="sidenavSecExample">
    <ul class="relative pr-5">
      <li class="relative">
        <a
          class="flex items-center justify-center h-12 rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
          href="#!"
          data-mdb-ripple="true"
          data-mdb-ripple-color="primary"
        >
          <font-awesome-icon icon="fa-solid fa-building-columns" class="mx-1" />
          <span>جامعه الزهرا</span>
        </a>
      </li>
      <li class="relative" id="sidenavXxEx2">
        <a
          class="flex items-center justify-center h-12 rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
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
              class="flex items-center py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              >مدیریت</a
            >
          </li>
          <li class="relative">
            <a
              href="#!"
              class="flex items-center py-4 pl-12 pr-6 h-6 overflow-hidden text-gray-600 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
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
          class="flex justify-center items-center h-12 rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out cursor-pointer"
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
              class="flex items-center text-gray-600 py-4 pr-6 h-6 rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
              data-mdb-ripple="true"
              data-mdb-ripple-color="primary"
              >امور مالی</a
            >
          </li>
          <li class="relative">
            <a
              href="#!"
              class="flex items-center text-gray-600 py-4 pr-6 h-6 rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
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
