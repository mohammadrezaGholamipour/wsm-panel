<script setup>
import ServiceFormApi from "../api/ServiceFormApi";
import { notify } from "@kyvg/vue3-notification";
import { watch } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
// ////////////////////////
const Route = useRoute();
const state = reactive({
  WebService: {},
  Name: "",
  Input: "",
});
// ////////////////////////
const GetWebService = (WebService) => {
  console.log(WebService);
  // ServiceFormApi.Form(WebService)
  //   .then((response) => {
  // // console.log(response);
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   });
};
watch(Route, () => {
  state.WebService = "";
  state.Name = "";
  state.Input = "";
});
const HandelService = () => {
  if (Route.meta.isone > 0) {
    if (!state.Name || !state.Input) {
      notify({
        type: "error",
        title: "اطلاعات را کامل وارد کنید",
      });
    } else {
      // پر کردن اطلاعات
      state.WebService = {
        Name: state.Name,
        Input: state.Input,
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
      };
      // ارسال کردن
      GetWebService(JSON.stringify(state.WebService));
      // خالی کردن
      state.Name = "";
      state.Input = "";
      notify({
        type: "success",
        title: "با موفقیت انجام شد",
        ignoreDuplicates: true,
      });
    }
  } else {
    if (state.Name) {
      // پر کردن اطلاعات
      state.WebService = {
        Name: state.Name,
        Input: "",
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
      };
      // ارسال کردن
      GetWebService(JSON.stringify(state.WebService));
      // خالی کردن
      state.Name = "";
      notify({
        type: "success",
        title: "انجام شد",
        ignoreDuplicates: true,
      });
    } else {
      notify({
        type: "error",
        title: "عنوان را وارد کنید",
        ignoreDuplicates: true,
      });
    }
  }
};
</script>
<template>
  <div class="ParentService">
    <notifications position="top center" class="mt-1" width="320" />
    <img
      src="../assets/image/WebService.png"
      style="width: 367px; margin: 0"
      alt="WebService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        placeholder="عنوان"
        v-model.trim="state.Name"
        type="text"
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
          class="InputService"
          placeholder="ورودی"
          v-model.trim="state.Input"
          type="text"
        />
      </transition>

      <button class="BtnService" @click="HandelService">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
<style>

/* left: calc(50% - 160px); */
</style>
