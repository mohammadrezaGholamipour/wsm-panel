<script setup>
import WebServiceApi from "../api/TabelServiceApi";
import { notify } from "@kyvg/vue3-notification";
import { watch } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
// ////////////////////////
const Route = useRoute();
const state = reactive({
  WebService: "",
  Onvan: "",
  Code: "",
});
// ////////////////////////
const GetWebService = (WebService) => {
  console.log(WebService);
  // WebServiceApi.WebService(WebService)
  //   .then((response) => {
  //  
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   });
};
watch(Route, () => {
  state.WebService = "";
  state.Onvan = "";
  state.Code = "";
});
const HandelService = () => {
  if (Route.meta.isone > 0) {
    if (!state.Onvan || !state.Code) {
      notify({
        type: "error",
        title: "اطلاعات را کامل وارد کنید",
      });
    } else {
      state.WebService = {
        Id: 0,
        state: 0,
        Name: state.Onvan,
        Servicemethodname: "",
        Input: state.Code,
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
        ServiceName: 0,
      };
      GetWebService(state.WebService);
      state.Onvan = "";
      state.Code = "";
      notify({
        type: "success",
        title: "با موفقیت انجام شد",
        ignoreDuplicates: true,
      });
    }
  } else {
    if (state.Onvan) {
      state.WebService = {
        Id: 0,
        state: 0,
        Name: state.Onvan,
        Servicemethodname: "",
        Input: "",
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
        ServiceName: 0,
      };
      GetWebService(state.WebService);
      state.Onvan = "";
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
    <notifications position="top right" class="mt-2" width="320" />
    <img
      src="../assets/image/WebService.png"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        placeholder="عنوان"
        v-model.trim="state.Onvan"
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
          v-model.trim="state.Code"
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
