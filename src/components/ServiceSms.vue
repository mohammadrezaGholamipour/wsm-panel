<script setup>
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";
const InputSelect = ref([
  { text: "کدملی", value: "1" },
  { text: "کد اختصاصی گذرنامه", value: "2" },
  { text: "کارت آمایش", value: "3" },
  { text: "کارت پناهندگی", value: "4" },
  { text: "کارت هویتی", value: "5" },
  { text: "شناسه ملی", value: "6" },
  { text: "شماره فراگیر گذرنامه", value: "7" },
]);
</script>
<template>
  <div class="ParentService">
    <notifications position="top center" class="mt-2" width="320" />
    <img
      src="../assets/image/SmsService.png"
      style="width: 320px"
      class="mb-2"
      alt="SmsService"
    />
    <div class="flex justify-center flex-col items-center">
      <input placeholder="عنوان" type="text" class="InputService" />
      <div class="ParentInputSelectSms">
        <select class="InputSelectSms" style="width: 175px">
          <option
            v-for="(items, index) in InputSelect"
            :value="items.value"
            :key="index"
          >
            {{ items.text }}
          </option>
        </select>
        <span class="SpanInputSelectSms">: نوع احراز هویت</span>
      </div>
      <input placeholder="شناسه هویتی" type="text" class="InputService mt-3" />
      <textarea
        class="InputService mt-3"
        placeholder="متن پیامک"
        rows="7"
      ></textarea>

      <button type="submit" class="BtnService">ارسال پیامک</button>
    </div>
  </div>
</template>
<style></style>
