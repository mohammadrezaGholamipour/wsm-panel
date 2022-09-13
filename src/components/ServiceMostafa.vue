<script setup>
import MostafaServiceApi from "../api/MostafaServiceApi";
import { notify } from "@kyvg/vue3-notification";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
// //////////////////////////////////////
const Route = useRoute();
const state = reactive({
  ServiceId: "",
  ServiceMethodId: "",
  Onvan: "",
  ChekBox: false,
  Code: "",
});

state.ServiceId = Route.meta.serviceid;
state.ServiceMethodId = Route.meta.Servicemethodid;
// HandelRequestForServiceMostafa
const GetServiceMostafa = (Onvan, ChekBox, ServiceMethodId, ServiceId) => {
  console.log(Onvan, ChekBox, ServiceMethodId, ServiceId);
  // MostafaServiceApi.MostafaService()
  //   .then((response) => {})
  //   .catch((error) => {
  //     alert(error.message);
  //   });
};
// FinishHandelRequestForServiceMostafa;
const HandelServiceMostafa = () => {
  if (state.ChekBox) {
    if (state.Onvan && state.Code) {
      GetServiceMostafa(
        state.Onvan,
        state.ChekBox,
        state.ServiceId,
        state.ServiceMethodId
      );
      state.Onvan = "";
      state.Code = "";
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
  } else {
    if (state.Onvan) {
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
  <div class="ParentService">
    <notifications position="center top" class="mt-1" width="265" />
    <img
      src="../assets/image/WebService2.png"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="state.Onvan"
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
        v-model.trim="state.Code"
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
