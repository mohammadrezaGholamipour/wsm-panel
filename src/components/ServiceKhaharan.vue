<script setup>
import KhaharanServiceApi from "../api/KhaharanServiceApi";
import DatePicker from "vue3-persian-datetime-picker";
import { notify } from "@kyvg/vue3-notification";
import Convert from "../config/common";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
/////////////////////////////////////////////////
const Route = useRoute();
const ServiceMethodId = ref();
const ServiceId = ref();
ServiceMethodId.value = Route.meta.Servicemethodid;
ServiceId.value = Route.meta.serviceid;
const InputOnvan = ref();
const InputTarikh = ref([
  { Placeholder: "تاریخ شروع", Value: "" },
  { Placeholder: "تاریخ پایان", Value: "" },
]);
// HandelRequestForServiceKhaharan
const GetServiceKhaharan = (
  InputOnvan,
  InputTarikhStart,
  InputTarikhEnd,
  ServiceMethodId,
  ServiceId
) => {
  console.log(
    InputOnvan,
    InputTarikhStart,
    InputTarikhEnd,
    ServiceMethodId,
    ServiceId
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
  const Tarikh = InputTarikh.value.every((items) => !!items.Value === true);
  if (Tarikh && InputOnvan.value) {
    InputTarikh.value.forEach(
      (items) => (items.Value = Convert.dateConvertToGregorian(items.Value))
    );
    GetServiceKhaharan(
      InputOnvan.value,
      InputTarikh.value[0].Value,
      InputTarikh.value[1].Value,
      ServiceMethodId.value,
      ServiceId.value
    );
    // خالی کردن اینپوت ها
    InputTarikh.value[0].Value = "";
    InputTarikh.value[1].Value = "";
    InputOnvan.value = "";

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
      src="../assets/image/WebService.png"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="InputOnvan"
        placeholder="عنوان"
        type="text"
      />
      <DatePicker
        class="InputService p-1"
        v-for="(items, index) in InputTarikh"
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
  width: 240px;
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