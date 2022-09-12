<script setup>
import DatePicker from "vue3-persian-datetime-picker";
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";

// ////////////////////////
const InputOnvan = ref();
const InputTarikh = ref([
  { Placeholder: "تاریخ شروع", Value: "" },
  { Placeholder: "تاریخ پایان", Value: "" },
]);
// ////////////////////////
const HandelWebService = () => {
  const Tarikh = InputTarikh.value.every((items) => !!items.Value === true);
  if (Tarikh && InputOnvan.value) {
    notify({
      type: "success",
      title: "با موفقیت انجام شد",
      ignoreDuplicates: true,
    });
    InputTarikh.value.forEach((items) => (items.Value = ""));
    InputOnvan.value = "";
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
  <div class="ParentWebService">
    <notifications position="top center" class="mt-2" width="320" />
    <img
      src="../assets/image/WebService.png"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputWebService"
        v-model="InputOnvan"
        placeholder="عنوان"
        type="text"
        autofocus
      />
      <DatePicker
        class="shadow-lg border border-solid border-gray-200 rounded-xl"
        v-for="(items, index) in InputTarikh"
        :placeholder="items.Placeholder"
        v-model="items.Value"
        :key="index"
      />
      <button class="BtnWebService" @click="HandelWebService">
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