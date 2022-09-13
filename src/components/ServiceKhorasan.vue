<script setup>
import KhorasanServiceApi from "../api/KhaharanServiceApi";
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
// //////////////////////////////////////
const Route = useRoute();
const ServiceMethodId = ref();
const ServiceId = ref();
const Onvan = ref();
const ChekBox = ref(true);
ServiceMethodId.value = Route.meta.Servicemethodid;
ServiceId.value = Route.meta.serviceid;
// HandelRequestForServiceKhorasan
const GetServiceKhorasan = (Onvan, ChekBox, ServiceMethodId, ServiceId) => {
  console.log(Onvan, ChekBox, ServiceMethodId, ServiceId);
  // KhorasanServiceApi.KhorasanService()
  //   .then((response) => {})
  //   .catch((error) => {
  //     alert(error.message);
  //   });
};
// FinishHandelRequestForServiceKhorasan;
const HandelServiceKhorasan = () => {
  if (Onvan.value) {
    GetServiceKhorasan(
      Onvan.value,
      ChekBox.value,
      ServiceMethodId.value,
      ServiceId.value
    );
    Onvan.value = "";
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
      src="../assets/image/WebService2.png"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model.trim="Onvan"
        placeholder="عنوان"
        type="text"
      />
      <div class="flex flex-row-reverse my-3 items-start justify-center">
        <input v-model="ChekBox" class="InputChekBox" type="checkbox" />
        <label
          class="form-check-label text-lg inline-block text-gray-800"
          for="flexCheckDefault"
        >
          فقط شامل یک سال تحصیلی مشخص میباشد
          <br />
          <p class="p-0 m-0 text-blue-500">
            (واکشی اطلاعات ممتازین برای یک سال تحصیلی خاص)
          </p>
        </label>
      </div>
      <button class="BtnService" @click="HandelServiceKhorasan">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>
