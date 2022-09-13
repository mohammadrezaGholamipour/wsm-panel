<script setup>
import SmsServiceApi from "../api/SmsServiceApi";
import { notify } from "@kyvg/vue3-notification";
import { computed } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
const Route = useRoute();
/////////////////////////////////////////////////
const state = reactive({
  ServiceId: "",
  ServiceMethodId: "",
  Onvan: "",
  InputSelect: [
    { text: "کدملی", value: "1" },
    { text: "کد اختصاصی گذرنامه", value: "2" },
    { text: "کد کارت آمایش", value: "3" },
    { text: " کد کارت پناهندگی", value: "4" },
    { text: " کد کارت هویتی", value: "5" },
    { text: "شناسه ملی", value: "6" },
    { text: "شماره فراگیر گذرنامه", value: "7" },
  ],
  InputSelectValue: "",
  Shenase: "",
  MatneSms: "",
});
state.ServiceMethodId = Route.meta.Servicemethodid;
state.ServiceId = Route.meta.serviceid;
/////////////////////////////////////
const SendSms = (
  Onvan,
  InputSelectValue,
  Shenase,
  MatneSms,
  ServiceId,
  ServiceMethodId
) => {
  console.log(
    Onvan,
    InputSelectValue,
    Shenase,
    MatneSms,
    ServiceId,
    ServiceMethodId
  );
  // SmsServiceApi.SmsService()
  //   .then((response) => {
  //
  //   })
  //   .catch((error) => {
  //     alert(error.message);
  //   });
};
const AllInputSms = computed(() => {
  return (
    state.Onvan && state.InputSelectValue && state.Shenase && state.MatneSms
  );
});
const HandelServiceSms = () => {
  if (AllInputSms.value) {
    SendSms(
      state.Onvan,
      state.InputSelectValue,
      state.Shenase,
      state.MatneSms,
      state.ServiceId,
      state.ServiceMethodId
    );
    // خالی کردن اینپوت ها
    state.Onvan = "";
    state.InputSelectValue = "";
    state.Shenase = "";
    state.MatneSms = "";
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
  if (state.InputSelectValue) {
    const Placeholder = state.InputSelect.filter(
      (items) => items.value === state.InputSelectValue
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
        v-model.trim="state.Onvan"
        type="text"
      />
      <div class="ParentInputSelectSms">
        <span class="SpanInputSelectSms">نوع احراز هویت :</span>
        <select
          v-model="state.InputSelectValue"
          class="InputSelectSms"
          style="width: 175px"
        >
          <option
            v-for="(items, index) in state.InputSelect"
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
        v-model.trim="state.Shenase"
        type="text"
      />
      <textarea
        class="InputService mt-3"
        placeholder="متن پیامک"
        v-model.trim="state.MatneSms"
        rows="7"
      ></textarea>

      <button @click="HandelServiceSms" type="submit" class="BtnService">
        ارسال پیامک
      </button>
    </div>
  </div>
</template>
<style></style>
