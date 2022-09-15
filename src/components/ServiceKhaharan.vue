<script setup>
import ServiceKhaharanApi from "../api/ServiceKhaharanApi";
import DatePicker from "vue3-persian-datetime-picker";
import RequestLoading from "./RequestLoading.vue";
import { notify } from "@kyvg/vue3-notification";
import Convert from "@/utilities/common.js";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";

/////////////////////////////////////////////////
const Route = useRoute();
const state = reactive({
  RequestLaoding: false,
  ServiceId: "",
  ServiceMethodId: "",
  Name: "",
  InputTarikh: [
    { Placeholder: "تاریخ شروع", Value: "" },
    { Placeholder: "تاریخ پایان", Value: "" },
  ],
  WebService: {},
});

// HandelRequestForServiceKhaharan
const GetServiceKhaharan = (WebService) => {
  state.RequestLaoding = true;
  ServiceKhaharanApi.Khaharan(WebService)
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
// FinishHandelRequestForServiceKhaharan
const HandelWebService = () => {
  const Tarikh = state.InputTarikh.every((items) => !!items.Value === true);
  if (Tarikh && state.Name) {
    // تبدیل تاریخ به میلادی
    state.InputTarikh.forEach(
      (items) => (items.Value = Convert.dateConvertToGregorian(items.Value))
    );
    // پر کردن اطلاعات
    state.WebService = {
      Name: state.Name,
      Input: `${state.InputTarikh[0].Value},${state.InputTarikh[1].Value}`,
      Serviceid: Route.meta.serviceid,
      Servicemethodid: Route.meta.Servicemethodid,
    };
    // ارسال کردن
    GetServiceKhaharan(JSON.stringify(state.WebService));
    // خالی کردن اینپوت ها
    state.InputTarikh[0].Value = "";
    state.InputTarikh[1].Value = "";
    state.Name = "";
  } else {
    notify({
      type: "error",
      title: "اطلاعات را کامل وارد",
      ignoreDuplicates: true,
    });
  }
};
</script>
<template>
  <RequestLoading v-show="state.RequestLaoding" />
  <div class="ParentService">
    <notifications position="center top" class="mt-1" width="320" />
    <img
      src="../assets/image/KhaharanService.png"
      style="width: 367px; margin: 0"
      alt="KhaharanService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.Name"
        placeholder="عنوان"
        type="text"
      />
      <DatePicker
        class="InputService p-0"
        v-for="(items, index) in state.InputTarikh"
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
