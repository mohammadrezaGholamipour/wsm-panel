<script setup>
import ServiceMostafaApi from "../api/ServiceMostafaApi";
import RequestLoading from "./RequestLoading.vue";
import { notify } from "@kyvg/vue3-notification";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";

// //////////////////////////////////////
const Route = useRoute();
const state = reactive({
  RequestLaoding: false,
  ServiceId: "",
  ServiceMethodId: "",
  Name: "",
  ChekBox: false,
  Input: "",
  WebService: {},
});

// HandelRequestForServiceMostafa
const GetServiceMostafa = (WebService) => {
  state.RequestLaoding = true;
  ServiceMostafaApi.Mostafa(WebService)
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
// FinishHandelRequestForServiceMostafa;
const HandelServiceMostafa = () => {
  if (state.ChekBox) {
    if (state.Name && state.Input) {
      state.WebService = {
        Name: state.Name,
        Input: state.Input,
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
      };
      GetServiceMostafa(JSON.stringify(state.WebService));
      state.Name = "";
      state.Input = "";
    } else {
      notify({
        type: "error",
        title: "اطلاعات را کامل وارد",
        ignoreDuplicates: true,
      });
    }
  } else {
    if (state.Name) {
      state.WebService = {
        Name: state.Name,
        Input: "",
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
      };
      GetServiceMostafa(JSON.stringify(state.WebService));
      state.Name = "";
      notify({
        type: "success",
        title: "با موفقیت انجام شد",
        ignoreDuplicates: true,
      });
    } else {
      notify({
        type: "error",
        title: "اطلاعات را کامل وارد",
        ignoreDuplicates: true,
      });
    }
  }
};
</script>
<template>
  <RequestLoading v-show="state.RequestLaoding" />
  <div class="ParentService">
    <notifications position="center top" class="mt-1" width="320" />
    <img
      src="../assets/image/MostafaService.png"
      style="width: 367px; margin: 0"
      alt="MostafaService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.Name"
        placeholder="عنوان"
        type="text"
      />
      <div class="flex flex-row-reverse mt-4 mb-2 items-start justify-center">
        <input v-model="state.ChekBox" class="InputChekBox" type="checkbox" />
        <label
          class="form-check-label text-lg inline-block text-gray-800"
          for="flexCheckDefault"
        >
          <p class="p-0 m-0 text-blue-500">
            (واکشی اطلاعات فقط برای یک طلبه با کد تحصیلی المصطفی)
          </p>
        </label>
      </div>
      <input
        v-model.trim="state.Input"
        placeholder="کد تحصیلی"
        v-show="state.ChekBox"
        class="InputService"
        type="text"
      />
      <button class="BtnService" @click="HandelServiceMostafa">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
