<script setup>
import ServiceMostafaApi from "../api/ServiceMostafaApi";
import RequestLoading from "./RequestLoading.vue";
import { useToast } from "vue-toastification";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";

// //////////////////////////////////////
const Route = useRoute();
const toast = useToast();
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
        state.RequestLaoding = false;
      }, 1500);
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
      toast.error("اطلاعات را کامل وارد کنید", {
        timeout: 2000,
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
    <RequestLoading v-show="state.RequestLaoding" />
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
