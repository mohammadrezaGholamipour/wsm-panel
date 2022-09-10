<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
// ////////////////////////
const Route = useRoute();
const Onvan = ref();
const Code = ref();
// ////////////////////////
watch(Route, () => {
  Onvan.value = "";
  Code.value = "";
});
const HandelWebService = () => {
  if (Route.meta.isone > 0) {
    if (!Onvan.value || !Code.value) {
      alert("کامل نیست");
    } else {
      console.log(Route.meta.serviceid, Route.meta.Servicemethodid);
      console.log(Onvan.value);
      console.log(Code.value);
    }
  } else {
    if (Onvan.value) {
      console.log(Route.meta.serviceid);
      console.log(Onvan.value);
    } else {
      alert("کامل نیست");
    }
  }
};
</script>
<template>
  <div class="flex wrap justify-center flex-wrap items-center mt-6">
    <input
      v-model="Onvan"
      type="text"
      class="InputWebService"
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
        class="InputWebService"
        v-show="Route.meta.isone > 0"
        placeholder="ورودی"
        v-model="Code"
        type="text"
      />
    </transition>
    <button class="BtnWebService" @click="HandelWebService">
      اجرای وب سرویس
    </button>
  </div>
</template>
<style></style>