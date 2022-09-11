<script setup>
import DatePicker from "@alireza-ab/vue3-persian-datepicker";
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";

// ////////////////////////
const InputOnvan = ref();
const InputTarikh = ref([
  { Placeholder: "", Value: "" },
  { Placeholder: "", Value: "" },
]);
const HandelChangeTarikh = (index, Value) => {
  InputTarikh.value[index].Value = Value;
};
// ////////////////////////
const HandelWebService = () => {};
</script>
<template>
  <div class="ParentWebService">
    <notifications position="top center" class="mt-2" width="320" />
    <img
      src="../assets/image/WebService.webp"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex pt-6 justify-center flex-col items-center">
      <input
        class="InputWebService"
        v-model="InputOnvan"
        placeholder="عنوان"
        type="text"
        autofocus
      />
      <date-picker
        @update:model-value="HandelChangeTarikh(index, items.Value)"
        v-for="(items, index) in InputTarikh"
        placeholder="تاریخ شروع"
        v-model="items.Value"
        color="purple"
        :key="index"
        mode="single"
        :modal="true"
        :column="1"
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
.pdp .pdp-group .pdp-input {
  text-align: center;
}
.pdp.rtl {
  margin-top: 10px;
  width: 240px;
}
</style>
