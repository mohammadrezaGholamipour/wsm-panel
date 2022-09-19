<script setup>
import ServiceKhorasanApi from "../api/ServiceKhorasanApi";
import RequestLoading from "./RequestLoading.vue";
import { notify } from "@kyvg/vue3-notification";
import { useToast } from "vue-toastification";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";

// //////////////////////////////////////
const toast = useToast();
const Route = useRoute();
const state = reactive({
  RequestLaoding: false,
  ServiceId: "",
  ServiceMethodId: "",
  Name: "",
  ChekBox: false,
  Input: "",
  InputSelect: [
    { text: "1394", value: "1" },
    { text: "1395", value: "2" },
    { text: "1396", value: "3" },
    { text: "1397", value: "4" },
    { text: "1398", value: "5" },
    { text: "1399", value: "6" },
    { text: "1400", value: "7" },
    { text: "1401", value: "8" },
  ],
  WebService: {},
});
// HandelRequestForServiceKhorasan
const GetServiceKhorasan = (WebService) => {
  state.RequestLaoding = true;
  ServiceKhorasanApi.Khorasan(WebService)
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
// FinishHandelRequestForServiceKhorasan;
const HandelServiceKhorasan = () => {
  if (state.ChekBox) {
    if (state.Name && state.Input) {
      // پر کردن اطلاعات
      state.WebService = {
        Name: state.Name,
        Input: state.Input,
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
      };
      // ارسال اطلاعات
      GetServiceKhorasan(JSON.stringify(state.WebService));
      // خالی کردن
      state.Name = "";
      state.Input = "";
    } else {
      toast.error("اطلاعات را کامل کنید", {
        timeout: 2000,
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
      // ارسال اطلاعات
      GetServiceKhorasan(JSON.stringify(state.WebService));
      // خالی کردن
      state.Name = "";
    } else {
      toast.error("اطلاعات را کامل کنید", {
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
      src="../assets/image/KhorasanService.png"
      style="width: 367px; margin: 0"
      alt="KhorasanService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.Name"
        placeholder="عنوان"
        type="text"
      />
      <div class="flex flex-row-reverse my-3 mt-4 items-start justify-center">
        <input v-model="state.ChekBox" class="InputChekBox" type="checkbox" />
        <label
          class="form-check-label text-lg inline-block text-gray-800"
          for="flexCheckDefault"
        >
          <p class="p-0 m-0 text-blue-500">
            (واکشی اطلاعات ممتازین برای یک سال تحصیلی خاص)
          </p>
        </label>
      </div>
      <select
        v-model.trim="state.Input"
        v-show="state.ChekBox"
        class="InputSelect"
      >
        <option
          v-for="items in state.InputSelect"
          :value="items.value"
          :key="items.value"
        >
          {{ items.text }}
        </option>
      </select>

      <button class="BtnService" @click="HandelServiceKhorasan">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
