<script setup>
import ServiceKhaharanApi from "../api/ServiceKhaharanApi";
import DatePicker from "vue3-persian-datetime-picker";
import RequestLoading from "./RequestLoading.vue";
import { useRoute, useRouter } from "vue-router";
import { useToast } from "vue-toastification";
import Convert from "@/utilities/common.js";
import { reactive } from "@vue/reactivity";

/////////////////////////////////////////////////
const router = useRouter();
const toast = useToast();
const route = useRoute();
const state = reactive({
  requestLaoding: false,
  serviceId: "",
  serviceMethodId: "",
  name: "",
  inputTarikh: [
    { placeholder: "تاریخ شروع", value: "" },
    { placeholder: "تاریخ پایان", value: "" },
  ],
});

// HandelRequestForServiceKhaharan
const getServiceKhaharan = (webService) => {
  state.requestLaoding = true;
  ServiceKhaharanApi.khaharan(webService)
    .then((response) => {
      console.log(response);
      toast.success("با موفقیت انجام شد", {
        timeout: 5000,
      });
      setTimeout(() => {
        router.push({ name: route.meta.Servicemethodid });
      }, 250);
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("درخواست انجام نشد", {
        timeout: 5000,
      });
    })
    .finally(() => (state.requestLaoding = false));
};
// FinishHandelRequestForServiceKhaharan
const handelWebService = () => {
  const tarikh = state.inputTarikh.every((items) => !!items.value === true);
  if (tarikh && state.name) {
    // تبدیل تاریخ به میلادی
    state.inputTarikh.forEach(
      (items) => (items.value = Convert.dateConvertToGregorian(items.value))
    );
    // پر کردن اطلاعات
    const webServiceParams = {
      name: state.name,
      input: `${state.inputTarikh[0].value},${state.inputTarikh[1].value}`,
      serviceId: route.meta.serviceid,
      serviceMethodId: route.meta.Servicemethodid,
    };
    // ارسال کردن
    getServiceKhaharan(webServiceParams);
    // خالی کردن اینپوت ها
    state.inputTarikh[0].value = "";
    state.inputTarikh[1].value = "";
    state.name = "";
  } else {
    toast.error("اطلاعات را کامل کنید", {
      timeout: 2500,
    });
  }
};
</script>
<template>
  <div class="ParentService">
    <RequestLoading v-show="state.requestLaoding" />
    <img
      src="../assets/image/KhaharanService.png"
      style="width: 367px; margin: 0"
      alt="KhaharanService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.name"
        placeholder="عنوان"
        type="text"
      />
      <DatePicker
        class="InputService p-0"
        v-for="(items, index) in state.inputTarikh"
        :placeholder="items.placeholder"
        v-model="items.value"
        :key="index"
      />
      <button class="BtnService" @click="handelWebService">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
<style>
.vpd-main {
  margin-top: 7px;
  width: 300px;
}
.vpd-input-group input {
  padding: 7px;
  text-align: center;
}
.vpd-year-label {
  display: none;
}
.vpd-content {
  border-radius: 20px !important;
}
.vpd-content svg {
  display: inline;
}
.vpd-header {
  text-align: center;
  border-top-right-radius: 17px;
  border-top-left-radius: 17px;
}
.vpd-month-label {
  width: 117px;
}
.vpd-actions {
  text-align: center;
}
.vpd-next,
.vpd-prev {
  width: 31px;
  background: #000;
}
</style>
