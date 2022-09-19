<script setup>
import RequestLoading from "./RequestLoading.vue";
import ServiceSmsApi from "../api/ServiceSmsApi";
import { useToast } from "vue-toastification";
import { computed } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
/////////////////////////////////////////////////
const route = useRoute();
const toast = useToast();
const state = reactive({
  requestLaoding: false,
  ServiceId: "",
  ServiceMethodId: "",
  name: "",
  input: {
    inputSelectValue: "",
    shenase: "",
    matneSms: "",
  },
  inputSelect: [
    { text: "کدملی", value: "1" },
    { text: "کد اختصاصی گذرنامه", value: "2" },
    { text: "کد کارت آمایش", value: "3" },
    { text: " کد کارت پناهندگی", value: "4" },
    { text: " کد کارت هویتی", value: "5" },
    { text: "شناسه ملی", value: "6" },
    { text: "شماره فراگیر گذرنامه", value: "7" },
  ],
});
/////////////////////////////////////
const sendSms = (WebService) => {
  state.requestLaoding = true;
  ServiceSmsApi.Sms(WebService)
    .then((response) => {
      console.log(response);
      toast.success("با موفقیت انجام شد", {
        timeout: 2000,
      });
    })
    .catch((error) => {
      console.log(error.message);
      toast.error("درخواست انجام نشد", {
        timeout: 2000,
      });
    })
    .finally(() => {
      setTimeout(() => {
        state.requestLaoding = false;
      }, 1500);
    });
};
const AllInputSms = computed(() => {
  return (
    state.name &&
    state.input.inputSelectValue &&
    state.input.shenase &&
    state.input.matneSms
  );
});
const HandelServiceSms = () => {
  if (AllInputSms.value) {
    const webServiceParams = {
      name: state.name,
      input: {
        IdType: state.input.inputSelectValue,
        IdNumber: state.input.shenase,
        Message: state.input.matneSms,
      },
      Serviceid: route.meta.serviceid,
      Servicemethodid: route.meta.Servicemethodid,
    };
    webServiceParams.input = JSON.stringify(webServiceParams.input);
    sendSms(webServiceParams);
    // خالی کردن اینپوت ها
    state.name = "";
    state.input.inputSelectValue = "";
    state.input.shenase = "";
    state.input.matneSms = "";
  } else {
    toast.error("اطلاعات را کامل وارد کنید", {
      timeout: 2000,
    });
  }
};
const ShenasePlaceHolder = computed(() => {
  if (state.input.inputSelectValue) {
    const Placeholder = state.inputSelect.filter(
      (items) => items.value === state.input.inputSelectValue
    );
    return `${Placeholder[0].text} خود را وارد کنید`;
  } else {
    return "شناسه هویتی";
  }
});
</script>
<template>
  <div class="ParentService">
    <RequestLoading v-show="state.requestLaoding" />
    <img
      src="../assets/image/SmsService.png"
      style="width: 320px"
      alt="SmsService"
    />
    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        placeholder="عنوان"
        v-model.trim="state.name"
        type="text"
      />
      <div class="ParentInputSelectSms">
        <span class="SpanInputSelectSms">نوع احراز هویت :</span>
        <select
          v-model="state.input.inputSelectValue"
          class="InputSelectSms"
          style="width: 175px"
        >
          <option
            v-for="(items, index) in state.inputSelect"
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
        v-model.trim="state.input.shenase"
        type="text"
      />
      <textarea
        class="InputService mt-3"
        placeholder="متن پیامک"
        v-model.trim="state.input.matneSms"
        rows="7"
      ></textarea>

      <button @click="HandelServiceSms" type="submit" class="BtnService">
        ارسال پیامک
      </button>
    </div>
  </div>
</template>
