<script setup>
import { notify } from "@kyvg/vue3-notification";
import { ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
// //////////////////////////////////////
const Route = useRoute();
const ServiceMethodId = ref();
const ServiceId = ref();
const InputOnvan = ref();
const InputChekBox = ref(true);
</script>
<template>
  <div class="ParentService">
    <notifications position="center top" class="mt-1" width="265" />
    <img
      src="../assets/image/WebService.png"
      style="width: 367px; margin: 0"
      alt="webService"
    />

    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        v-model="InputOnvan"
        placeholder="عنوان"
        type="text"
      />
      <div class="flex flex-row-reverse my-3 items-start justify-center">
        <input
          class="shadow-lg form-check-input appearance-none h-5 w-5 border mt-1 border-gray-300 rounded-full bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 bg-no-repeat bg-center float-left cursor-pointer"
          v-model="InputChekBox"
          type="checkbox"
        />
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
      <button class="BtnService" @click="HandelWebService">
        وب سرویس
        <font-awesome-icon icon="fa-solid fa-sliders" class="mr-2" />
      </button>
    </div>
  </div>
</template>