<script setup>
import { ref } from "@vue/reactivity";

const InputSelect = ref([
  { text: "کد ملی", value: 1 },
  { text: "کد اختصاصی گذرنامه", value: 2 },
  { text: "کارت آمایش", value: 3 },
  { text: "کارت پناهندگی", value: 4 },
  { text: "کارت هویتی", value: 5 },
  { text: "شناسه ملی", value: 6 },
  { text: "شماره فراگیر گذرنامه", value: 7 },
]);
</script>
<template>
  <div class="SmsService">
    <div class="form-group mb-6">
      <input
        type="text"
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        placeholder="عنوان"
      />
    </div>
    <div>
      <label for="">نوع احراز هویت</label>
      <select 
        class="form-select px-3 py-1.5 appearance-none text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
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
    <textarea
      class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      id="exampleFormControlTextarea13"
      rows="3"
      placeholder="متن پیامک"
    ></textarea>

    <button
      type="submit"
      class="w-full px-6 mt-5 py-2.5 bg-blue-600 text-white font-medium rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
    >
      ارسال پیام
    </button>
  </div>
</template>