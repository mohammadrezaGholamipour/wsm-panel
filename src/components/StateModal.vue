<script setup>
const props = defineProps(["state"]);
</script>
<template>
  <div
    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
    aria-labelledby="exampleModalCenterTitle"
    id="exampleModalCenter"
    aria-modal="true"
    tabindex="-1"
    role="dialog"
  >
    <div
      class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none"
    >
      <div
        class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current"
      >
        <div class="modal-body relative p-4">
          <p class="text-2xl">{{ props.state }}</p>
        </div>
        <div
          class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-center p-4 border-t border-gray-200 rounded-b-md"
        >
          <button
            type="button"
            class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
            data-bs-dismiss="modal"
          >
            بازگشت
          </button>
        </div>
      </div>
    </div>
  </div>
</template>