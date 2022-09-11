<script setup>
import { notify } from "@kyvg/vue3-notification";
import { watch } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
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
      notify({
        type: "error",
        title: "اطلاعات را کامل وارد کنید",
      });
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
      notify({
        type: "success",
        title: "انجام شد",
        ignoreDuplicates: false,
      });
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
      notify({
        type: "success",
        title: "انجام شد",
        ignoreDuplicates: false,
      });
    } else {
      notify({
        type: "error",
        title: "عنوان را وارد کنید",
      });
    }
  }
};
</script>
<template>
  <div class="ParentWebService">
    <notifications position="top center" class="mt-2" width="320" />
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
<style>
.vue-notification {
  text-align: center !important;
  font-size: 14pt !important;
}
.vue-notification {
  border: none !important;
  border-radius: 5px;
}
.notification-title {
  font-weight: 550 !important;
}
.vue-notification.warn {
  background: #bd8736;
}
</style>