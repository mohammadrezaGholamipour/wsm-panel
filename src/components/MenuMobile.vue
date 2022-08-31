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
    <div class="offcanvas-body flex-grow p-4 overflow-y-auto">...</div>
  </div>
</template>
