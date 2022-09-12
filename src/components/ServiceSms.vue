<script setup>
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
const InputSelect = ref([
  { text: "کدملی", value: "1" },
  { text: "کد اختصاصی گذرنامه", value: "2" },
  { text: "کد کارت آمایش", value: "3" },
  { text: " کد کارت پناهندگی", value: "4" },
  { text: " کد کارت هویتی", value: "5" },
  { text: "شناسه ملی", value: "6" },
  { text: "شماره فراگیر گذرنامه", value: "7" },
]);
const Onvan = ref("");
const InputSelectValue = ref("");
const Shenase = ref("");
const MatneSms = ref("");
const AllInputSms = computed(() => {
  return (
    Onvan.value && InputSelectValue.value && Shenase.value && MatneSms.value
  );
});
const HandelService = () => {
  if (AllInputSms.value) {
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
const ShenasePlaceHolder = computed(() => {
  if (InputSelectValue.value) {
    const Placeholder = InputSelect.value.filter(
      (items) => items.value === InputSelectValue.value
    );
    return `${Placeholder[0].text} خود را وارد کنید`;
  } else {
    return "شناسه هویتی";
  }
});
</script>
<template>
  <div class="ParentService">
    <notifications position="top center" class="mt-2" width="320" />
    <img
      src="../assets/image/SmsService.png"
      style="width: 320px"
      alt="SmsService"

    />
    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        placeholder="عنوان"
        v-model="Onvan"
        type="text"
      />
      <div class="ParentInputSelectSms">
        <span class="SpanInputSelectSms">نوع احراز هویت :</span>
        <select
          v-model="InputSelectValue"
          class="InputSelectSms"
          style="width: 175px"
        >
          <option
            v-for="(items, index) in InputSelect"
            :value="items.value"
            :key="index"
          >
            {{ items.text }}
          </option>
        </select>
      </div>
      <input
        :placeholder="ShenasePlaceHolder"
        class="InputService mt-3"
        v-model="Shenase"
        type="text"
      />
      <textarea
        class="InputService mt-3"
        placeholder="متن پیامک"
        v-model="MatneSms"
        rows="7"
      ></textarea>

      <button @click="HandelService" type="submit" class="BtnService">
        ارسال پیامک
      </button>
    </div>
  </div>
</template>
<style></style>
