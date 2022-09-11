<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
// ////////////////////////
const Route = useRoute();
const WebService = ref();
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
      WebService.value = {
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
      WebService.value = {
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
  <div class="ParentWebService">
    <img
      src="../assets/image/WebService.webp"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex pt-6 justify-center flex-col items-center">
      <input
        class="InputWebService"
        placeholder="عنوان"
        v-model="Onvan"
        type="text"
        autofocus
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
          v-show="Route.meta.isone > 0"
          class="InputWebService"
          placeholder="ورودی"
          v-model="Code"
          type="text"
        />
      </transition>

      <button class="BtnWebService" @click="HandelWebService">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
<style></style>
