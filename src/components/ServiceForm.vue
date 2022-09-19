<script setup>
import ServiceFormApi from "../api/ServiceFormApi";
import RequestLoading from "./RequestLoading.vue";
import { useToast } from "vue-toastification";
import { reactive } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRoute } from "vue-router";
/////////////////////////////////////////////////
const toast = useToast();
const route = useRoute();
const state = reactive({
  requestLaoding: false,
  name: "",
  input: "",
});
// ////////////////////////
const getWebService = (WebService) => {
  state.requestLaoding = true;
  ServiceFormApi.Form(WebService)
    .then((response) => {
      console.log(response);
      toast.success("با موفقیت انجام شد", {
        timeout: 2000,
      });
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("درخواست انجام نشد", {
        timeout: 2000,
      });
    })
    .finally(() => {
      setTimeout(() => {
        state.requestLaoding = false;
      }, 1500);
    });
};
watch(route, () => {
  state.name = "";
  state.input = "";
});
const HandelService = () => {
  if (route.meta.isone > 0) {
    if (!state.name || !state.input) {
      toast.error("اطلاعات را کامل وارد کنید", {
        timeout: 2000,
      });
    } else {
      // پر کردن اطلاعات
      const webServiceParams = {
        name: state.name,
        input: state.input,
        Serviceid: route.meta.serviceid,
        Servicemethodid: route.meta.Servicemethodid,
      };
      // ارسال کردن
      getWebService(webServiceParams);
      // خالی کردن
      state.name = "";
      state.input = "";
    }
  } else {
    if (state.name) {
      // پر کردن اطلاعات
      const webServiceParams = {
        name: state.name,
        input: "",
        Serviceid: route.meta.serviceid,
        Servicemethodid: route.meta.Servicemethodid,
      };
      // ارسال کردن
      getWebService(webServiceParams);
      // خالی کردن
      state.name = "";
    } else {
      toast.error("عنوان را وارد کنید", {
        timeout: 2000,
      });
    }
  }
};
</script>
<template>
  <div class="ParentService">
    <RequestLoading v-show="state.requestLaoding" />
    <img
      src="../assets/image/FormService.png"
      style="width: 367px; margin: 0"
      alt="FormService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        v-model.trim="state.name"
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
          v-show="route.meta.isone > 0"
          v-model.trim="state.input"
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
