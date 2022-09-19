<script setup>
import RequestLoading from "./RequestLoading.vue";
import ServiceSmsApi from "../api/ServiceSmsApi";
import { useToast } from "vue-toastification";
import { computed } from "@vue/runtime-core";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
/////////////////////////////////////////////////
const Route = useRoute();
const toast = useToast();
const state = reactive({
  RequestLaoding: false,
  ServiceId: "",
  ServiceMethodId: "",
  Name: "",
  InputSelectValue: "",
  Shenase: "",
  MatneSms: "",
  InputSelect: [
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
const SendSms = (WebService) => {
  state.RequestLaoding = true;
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
        state.RequestLaoding = false;
      }, 1500);
    });
};
const AllInputSms = computed(() => {
  return (
    state.Name && state.InputSelectValue && state.Shenase && state.MatneSms
  );
});
const HandelServiceSms = () => {
  if (AllInputSms.value) {
    const webServiceParams = {
      Name: state.Name,
      IdType: state.InputSelectValue,
      IdNumber: state.Shenase,
      Message: state.MatneSms,
      Serviceid: Route.meta.serviceid,
      Servicemethodid: Route.meta.Servicemethodid,
    };
    SendSms(webServiceParams);
    // خالی کردن اینپوت ها
    state.Name = "";
    state.InputSelectValue = "";
    state.Shenase = "";
    state.MatneSms = "";
  } else {
    toast.error("اطلاعات را کامل وارد کنید", {
      timeout: 2000,
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
    <RequestLoading v-show="state.RequestLaoding" />
    <img
      src="../assets/image/SmsService.png"
      style="width: 320px"
      alt="SmsService"
    />
    <div class="flex justify-center flex-col items-center">
      <input
        class="InputService"
        placeholder="عنوان"
        v-model.trim="state.Name"
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
