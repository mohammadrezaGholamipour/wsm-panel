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
      const WebService = {
        Id: 0,
        state: 0,
        Name: Onvan.value,
        Servicemethodname: "",
        Input: Code.value,
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
        ServiceName: 0,
      };
      console.log(WebService);
    }
  } else {
    if (Onvan.value) {
      const WebService = {
        Id: 0,
        state: 0,
        Name: Onvan.value,
        Servicemethodname: "",
        Input: "",
        Serviceid: Route.meta.serviceid,
        Servicemethodid: "",
        ServiceName: 0,
      };
      console.log(WebService);
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
      <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
    </button>
  </div>
</template>
<style></style>
