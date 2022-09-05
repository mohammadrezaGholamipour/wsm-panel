<script setup></script>
<template>
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
      <hr class="h-0 border border-solid border-t-0 border-white opacity-25" />
      <li>
        <a
          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-white hover:text-black"
          href="#"
          >تغییر اطلاعات</a
        >
      </li>
      <hr class="h-0 border border-solid border-t-0 border-white opacity-25" />
      <li>
        <a
          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-white hover:text-black"
          href="#"
        >
          نظر سنجی</a
        >
      </li>

      <hr class="h-0 border border-solid border-t-0 border-white opacity-25" />

      <li>
        <a
          class="dropdown-item text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent hover:bg-white hover:text-black focus:text-white focus:bg-gray-700"
          href="#"
          >خروج از اکانت</a
        >
      </li>
    </ul>
  </div>
</template>
