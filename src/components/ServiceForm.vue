<script setup>
import ServiceFormApi from "../api/ServiceFormApi";
import RequestLoading from "./RequestLoading.vue";
import { notify } from "@kyvg/vue3-notification";
import { watch } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";

// ////////////////////////
const Route = useRoute();
const state = reactive({
  RequestLaoding: false,
  WebService: {},
  Name: "",
  Input: "",
});
// ////////////////////////
const GetWebService = (WebService) => {
  state.RequestLaoding = true;
  ServiceFormApi.Form(WebService)
    .then((response) => {
      console.log(response);
      setTimeout(() => {
        state.RequestLaoding = false;
        notify({
          type: "success",
          title: "با موفقیت انجام شد",
          ignoreDuplicates: true,
        });
      }, 2000);
    })
    .catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        state.RequestLaoding = false;
        notify({
          type: "error",
          title: "درخواست انجام نشد ",
          ignoreDuplicates: true,
        });
      }, 2000);
    });
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
    <RequestLoading v-show="state.RequestLaoding" />
    <notifications
      position="top center"
      close-on-click
      class="mt-1"
      width="320"
    />
    <img
      src="../assets/image/FormService.png"
      style="width: 367px; margin: 0"
      alt="FormService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        v-model.trim="state.Name"
        class="InputService"
        placeholder="عنوان"
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
          v-model.trim="state.Input"
          class="InputService"
          placeholder="ورودی"
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