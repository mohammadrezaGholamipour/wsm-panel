<script setup>
import KhorasanServiceApi from "../api/KhaharanServiceApi";
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
  KhorasanService: {},
});
// HandelRequestForServiceKhorasan
const GetServiceKhorasan = (KhorasanService) => {
  console.log(KhorasanService);
  // KhorasanServiceApi.KhorasanService()
  //   .then((response) => {})
  //   .catch((error) => {
  //     alert(error.message);
  //   });
};
// FinishHandelRequestForServiceKhorasan;
const HandelServiceKhorasan = () => {
  if (state.ChekBox) {
    if (state.Onvan && state.Code) {
      // پر کردن اطلاعات
      state.KhorasanService = {
        Name: state.Onvan,
        Input: state.Code,
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
      };
      // ارسال اطلاعات
      GetServiceMostafa(JSON.stringify(state.KhorasanService));
      // خالی کردن
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
      // پر کردن اطلاعات
      state.KhorasanService = {
        Name: state.Onvan,
        Input: "",
        Serviceid: Route.meta.serviceid,
        Servicemethodid: Route.meta.Servicemethodid,
      };
      // ارسال اطلاعات
      GetServiceMostafa(JSON.stringify(state.KhorasanService));
      // خالی کردن
      state.Onvan = "";
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
      <div class="flex flex-row-reverse my-3 items-start justify-center">
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
      <input
        v-model.trim="state.Code"
        v-show="state.ChekBox"
        class="InputService"
        placeholder="سال تحصیلی"
        type="text"
      />
      <button class="BtnService" @click="HandelServiceKhorasan">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
