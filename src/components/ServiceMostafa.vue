<script setup>
import ServiceMostafaApi from "../api/ServiceMostafaApi";
import RequestLoading from "./RequestLoading.vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { reactive } from "@vue/reactivity";
// //////////////////////////////////////
const route = useRoute();
const router = useRouter();
const toast = useToast();
const state = reactive({
  requestLaoding: false,
  serviceId: "",
  serviceMethodId: "",
  name: "",
  chekBox: false,
  input: "",
});
// HandelRequestForServiceMostafa
const getServiceMostafa = (webService) => {
  state.requestLaoding = true;
  ServiceMostafaApi.mostafa(webService)
    .then((response) => {
      console.log(response);
      toast.success("با موفقیت انجام شد", {
        timeout: 2000,
      });
      setTimeout(() => {
        router.push({ name: route.meta.Servicemethodid });
      }, 2000);
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
// FinishHandelRequestForServiceMostafa;
const handelServiceMostafa = () => {
  if (state.chekBox) {
    if (state.name && state.input) {
      const webServiceParams = {
        name: state.name,
        input: state.input,
        serviceId: route.meta.serviceid,
        serviceMethodId: route.meta.Servicemethodid,
      };
      getServiceMostafa(webServiceParams);
      state.name = "";
      state.input = "";
    } else {
      toast.error("اطلاعات را کامل وارد کنید", {
        timeout: 2000,
      });
    }
  } else {
    if (state.name) {
      const webServiceParams = {
        name: state.name,
        input: "",
        serviceId: route.meta.serviceid,
        serviceMethodId: route.meta.Servicemethodid,
      };
      getServiceMostafa(webServiceParams);
      state.name = "";
    } else {
      toast.error("اطلاعات را کامل وارد کنید", {
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
      src="../assets/image/MostafaService.png"
      style="width: 367px; margin: 0"
      alt="MostafaService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.name"
        placeholder="عنوان"
        type="text"
      />
      <div class="flex flex-row-reverse mt-4 mb-2 items-start justify-center">
        <input v-model="state.chekBox" class="InputChekBox" type="checkbox" />
        <label
          class="form-check-label text-lg inline-block text-gray-800"
          for="flexCheckDefault"
        >
          <p class="p-0 m-0 text-blue-500">اطلاعات طلبه با کد تحصیلی المصطفی</p>
        </label>
      </div>
      <input
        v-model.trim="state.input"
        placeholder="کد تحصیلی"
        v-show="state.chekBox"
        class="InputService"
        type="text"
      />
      <button class="BtnService" @click="handelServiceMostafa">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
