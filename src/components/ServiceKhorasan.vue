<script setup>
import ServiceKhorasanApi from "../api/ServiceKhorasanApi";
import RequestLoading from "./RequestLoading.vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import { reactive } from "@vue/reactivity";
// //////////////////////////////////////
const toast = useToast();
const route = useRoute();
const router = useRouter();
const state = reactive({
  requestLaoding: false,
  serviceId: "",
  serviceMethodId: "",
  name: "",
  chekBox: false,
  input: "",
  inputSelect: [
    { text: "1394", value: "1" },
    { text: "1395", value: "2" },
    { text: "1396", value: "3" },
    { text: "1397", value: "4" },
    { text: "1398", value: "5" },
    { text: "1399", value: "6" },
    { text: "1400", value: "7" },
    { text: "1401", value: "8" },
  ],
});
// HandelRequestForServiceKhorasan
const getServiceKhorasan = (webService) => {
  state.requestLaoding = true;
  ServiceKhorasanApi.khorasan(webService)
    .then((response) => {
      console.log(response);
      toast.success("با موفقیت انجام شد", {
        timeout: 5000,
      });
      setTimeout(() => {
        router.push({ name: route.meta.Servicemethodid });
      }, 200);
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("درخواست انجام نشد", {
        timeout: 2000,
      });
    })
    .finally(() => (state.requestLaoding = false));
};
// FinishHandelRequestForServiceKhorasan;
const handelServiceKhorasan = () => {
  if (state.chekBox) {
    if (state.name && state.input) {
      // پر کردن اطلاعات
      const webServiceParams = {
        name: state.name,
        input: state.input,
        serviceId: route.meta.serviceid,
        serviceMethodId: route.meta.Servicemethodid,
      };
      // ارسال اطلاعات
      getServiceKhorasan(webServiceParams);
      // خالی کردن
      state.name = "";
      state.input = "";
    } else {
      toast.error("اطلاعات را کامل کنید", {
        timeout: 2000,
      });
    }
  } else {
    if (state.name) {
      // پر کردن اطلاعات
      const webServiceParams = {
        name: state.name,
        input: "",
        serviceId: route.meta.serviceid,
        serviceMethodId: route.meta.Servicemethodid,
      };
      // ارسال اطلاعات
      getServiceKhorasan(webServiceParams);
      // خالی کردن
      state.name = "";
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
    <RequestLoading v-show="state.requestLaoding" />
    <img
      src="../assets/image/KhorasanService.png"
      style="width: 367px; margin: 0"
      alt="KhorasanService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.name"
        placeholder="عنوان"
        type="text"
      />
      <div class="flex flex-row-reverse my-3 mt-4 items-start justify-center">
        <input v-model="state.chekBox" class="InputChekBox" type="checkbox" />
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
        v-model.trim="state.input"
        v-show="state.chekBox"
        class="inputSelect"
      >
        <option
          v-for="items in state.inputSelect"
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
