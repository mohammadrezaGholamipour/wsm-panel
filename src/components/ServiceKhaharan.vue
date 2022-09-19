<script setup>
import ServiceKhaharanApi from "../api/ServiceKhaharanApi";
import DatePicker from "vue3-persian-datetime-picker";
import RequestLoading from "./RequestLoading.vue";
import { useToast } from "vue-toastification";
import Convert from "@/utilities/common.js";
import { reactive } from "@vue/reactivity";
import { useRoute, useRouter } from "vue-router";
/////////////////////////////////////////////////
const toast = useToast();
const route = useRoute();
const router = useRouter();
const state = reactive({
  requestLaoding: false,
  serviceId: "",
  ServiceMethodId: "",
  name: "",
  inputTarikh: [
    { Placeholder: "تاریخ شروع", Value: "" },
    { Placeholder: "تاریخ پایان", Value: "" },
  ],
});

// HandelRequestForServiceKhaharan
const getServiceKhaharan = (WebService) => {
  state.requestLaoding = true;
  ServiceKhaharanApi.Khaharan(WebService)
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
// FinishHandelRequestForServiceKhaharan
const HandelWebService = () => {
  const tarikh = state.inputTarikh.every((items) => !!items.Value === true);
  if (tarikh && state.name) {
    // تبدیل تاریخ به میلادی
    state.inputTarikh.forEach(
      (items) => (items.Value = Convert.dateConvertToGregorian(items.Value))
    );
    // پر کردن اطلاعات
    const webServiceParams = {
      name: state.name,
      Input: `${state.inputTarikh[0].Value},${state.inputTarikh[1].Value}`,
      serviceId: route.meta.serviceId,
      Servicemethodid: route.meta.Servicemethodid,
    };
    // ارسال کردن
    getServiceKhaharan(webServiceParams);
    // خالی کردن اینپوت ها
    state.inputTarikh[0].Value = "";
    state.inputTarikh[1].Value = "";
    state.name = "";
  } else {
    toast.error("اطلاعات را کامل کنید", {
      timeout: 2000,
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
        :placeholder="items.Placeholder"
        v-model="items.Value"
        :key="index"
      />
      <button class="BtnService" @click="HandelWebService">
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