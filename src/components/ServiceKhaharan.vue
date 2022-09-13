<script setup>
import KhaharanServiceApi from "../api/KhaharanServiceApi";
import DatePicker from "vue3-persian-datetime-picker";
import { notify } from "@kyvg/vue3-notification";
import Convert from "../config/common";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
/////////////////////////////////////////////////
const Route = useRoute();
const state = reactive({
  ServiceId: "",
  ServiceMethodId: "",
  InputOnvan: "",
  InputTarikh: [
    { Placeholder: "تاریخ شروع", Value: "" },
    { Placeholder: "تاریخ پایان", Value: "" },
  ],
});

state.ServiceMethodId = Route.meta.Servicemethodid;
state.ServiceId = Route.meta.serviceid;
// HandelRequestForServiceKhaharan
const GetServiceKhaharan = (
  InputOnvan,
  InputTarikhStart,
  InputTarikhEnd,
  ServiceId,
  ServiceMethodId
) => {
  console.log(
    InputOnvan,
    InputTarikhStart,
    InputTarikhEnd,
    ServiceId,
    ServiceMethodId
  );
  // KhaharanServiceApi.KhaharanService(InputOnvan,InputTarikhStart,InputTarikhEnd,ServiceMethodId,ServiceId)
  //   .then((response) => {
  //
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   });
};
// FinishHandelRequestForServiceKhaharan
const HandelWebService = () => {
  const Tarikh = state.InputTarikh.every((items) => !!items.Value === true);
  if (Tarikh && state.InputOnvan) {
    state.InputTarikh.forEach(
      (items) => (items.Value = Convert.dateConvertToGregorian(items.Value))
    );
    GetServiceKhaharan(
      state.InputOnvan,
      state.InputTarikh[0].Value,
      state.InputTarikh[1].Value,
      state.ServiceId,
      state.ServiceMethodId
    );
    // خالی کردن اینپوت ها
    state.InputTarikh[0].Value = "";
    state.InputTarikh[1].Value = "";
    state.InputOnvan = "";

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
};
</script>
<template>
  <div class="ParentService">
    <notifications position="center top" class="mt-1" width="265" />
    <img
      src="../assets/image/WebService3.png"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.InputOnvan"
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
