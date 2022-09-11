<script setup>
import DatePicker from "vue3-persian-datetime-picker";
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";

// ////////////////////////
const InputOnvan = ref();
const InputTarikh = ref([
  { Placeholder: "", Value: "" },
  { Placeholder: "", Value: "" },
]);
// const HandelChangeTarikh = (index, value) => {
//   console.log(value);
//   InputTarikh.value[index].Value = value;
// };
// ////////////////////////
const HandelWebService = () => {
  InputTarikh.value.forEach((items) => console.log(items.Value));
  const Tarikh = InputTarikh.value.every((items) => !!items.Value === true);
  if (Tarikh && InputOnvan.value) {
    notify({
      type: "success",
      title: "خوش آمدید",
      ignoreDuplicates: false,
    });
  } else {
    notify({
      type: "error",
      title: "اطلاعات را کامل وارد",
      ignoreDuplicates: false,
    });
  }
};
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
      <DatePicker />
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
</style>
