<script setup>
import { ref } from "@vue/reactivity";

const Unvan = ref();
const Code = ref();
const HandelWebService = () => {
  if (!Unvan.value || !Code.value) {
    alert("کامل نیست");
  }
};
</script>
<template>
  <div class="flex wrap justify-center items-center mt-6">
    <input
      v-model="Unvan"
      type="text"
      class="form-control ml-1 block text-center shadow-lg w-60 px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="عنوان"
    />

    <input
      v-model="Code"
      type="text"
      class="form-control text-center ml-1 block w-60 shadow-lg px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="کد ملی"
    />
    <button
      @click="HandelWebService"
      class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium rounded shadow-lg hover:bg-purple-700   transition duration-150 ease-in-out"
    >
      تایید
    </button>
  </div>
</template>
<style></style>