<script setup>
import ServiceFormApi from "../api/ServiceFormApi";
import { notify } from "@kyvg/vue3-notification";
import { watch } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
import RequestLoading from "./RequestLoading.vue";
// ////////////////////////
const Route = useRoute();
const state = reactive({
  Loading: false,
  WebService: {},
  Name: "",
  Input: "",
});
// HandelRequestForWebService
const GetWebService = (WebService) => {
  state.Loading = true;
  ServiceFormApi.Form(WebService)
    .then((response) => {
      console.log(response);
      setTimeout(() => {
        state.Loading = false;
        notify({
          type: "success",
          title: "اطلاعات با موفقیت دریافت شد",
          ignoreDuplicates: false,
        });
      }, 3000);
    })
    .catch((error) => {
      state.Loading = true;
      console.log(error.message);
      notify({
        type: "error",
        title: "اطلاعات دریافت نشد لطفا مجدد امتحان کنید",
        ignoreDuplicates: false,
      });
    })
    .finally(() => {
      setTimeout(() => {
        state.Loading = false;
      }, 3000);
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
        ignoreDuplicates: false,
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
        ignoreDuplicates: false,
      });
    }
  }
};
</script>
<template>
  <div class="ParentService">

      <RequestLoading v-show="state.Loading" />
    
    <notifications position="top center" class="mt-2" width="350" />
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

      <button @click="HandelService" class="BtnService">
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
