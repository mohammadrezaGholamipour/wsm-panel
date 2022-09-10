<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
const Onvan = ref();
const Code = ref();
const Route = useRoute();
const HandelWebService = () => {
  if (Route.meta.isone > 0) {
    if (!Onvan.value || !Code.value) {
      alert("کامل نیست");
    } else {
      console.log(Route.meta.serviceid, Route.meta.Servicemethodid);
    }
  } else {
    if (Onvan.value) {
      console.log(Route.meta.serviceid);
    } else {
      alert("کامل نیست");
    }
  }
};
</script>
<template>
  <div class="flex wrap justify-center items-center mt-6">
    <input
      v-model="Onvan"
      type="text"
      class="form-control ml-1 block text-center shadow-lg w-60 px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      placeholder="عنوان"
    />
    <transition
      enter-active-class="duration-500 ease-out"
      leave-active-class="duration-200 ease-out"
      enter-from-class="transform opacity-0"
      leave-to-class="transform opacity-0"
      leave-from-class="opacity-100"
      enter-to-class="opacity-100"
    >
      <input
        class="form-control text-center ml-1 block w-60 shadow-lg px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        v-show="Route.meta.isone > 0"
        placeholder="ورودی"
        v-model="Code"
        type="text"
      />
    </transition>
    <button
      class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium rounded shadow-lg hover:bg-purple-700 transition duration-150 ease-in-out"
      @click="HandelWebService"
    >
      اجرای وب سرویس
    </button>
  </div>
</template>
<style></style>
