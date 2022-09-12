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
  <div class="ParentSmsService">
    <notifications position="top center" class="mt-2" width="320" />
    <img
      src="../assets/image/SmsService.png"
      style="width: 320px"
      class="mb-2"
      alt="SmsService"
    />
    <div class="flex justify-center flex-col items-center">
      <input placeholder="عنوان" type="text" class="InputSmsService" />
      <div class="flex justify-center items-center mt-3 shadow-lg">
        <select
          dir="ltr"
          class="text-center cursor-pointer appearance-none px-1 py-1.5 text-gray-700 bg-no-repeat rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white active:border-none focus:border-none focus:outline-none"
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
        <span
          class="py-1.5 px-2.5 text-center bg-green-500 text-white rounded rounded-r-none"
          >: نوع احراز هویت</span
        >
      </div>
      <textarea
        class="InputSmsService mt-3"
        placeholder="متن پیامک"
        rows="7"
      ></textarea>

      <button type="submit" class="BtnSmsService">ارسال پیامک</button>
    </div>
  </div>
</template>
<style></style>