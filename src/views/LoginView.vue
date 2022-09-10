<script setup>
import { ref } from "@vue/reactivity";
import { Form, Field, ErrorMessage } from "vee-validate";
import { notify } from "@kyvg/vue3-notification";
const UserName = ref("");
const Password = ref("");
const ValidateUserName = (value) => {
  if (!value) {
    return "لطفا نام کاربری خود را وارد کنید";
  }
  return true;
};
const ValidatePassword = (value) => {
  if (!value) {
    return "لطفا رمز خود را وارد کنید";
  }
  return true;
};
const HandelLogin = () => {
  if (UserName.value && Password.value) {
    if (Password.value.length > 5) {
      notify({
        type: "success",
        title: "خوش آمدید",
        ignoreDuplicates: false,
      });
    } else {
      notify({
        type: "warn",
        title: "رمز عبور باید بیشتر از 5 رقم باشد",
        ignoreDuplicates: false,
      });
    }
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
  <div class="LoginPage">
    <notifications position="top center" class="mt-2" width="320" />
    <div class="LoginForm">
      <img src="../assets/image/Logo.png" alt="مرکز خدمات حوزه های علمیه" />
      <Form @submit.prevent>
        <div class="LoginParentInput">
          <Field
            placeholder="نام کاربری"
            :rules="ValidateUserName"
            v-model="UserName"
            class="LoginInput"
            name="username"
            type="text"
          />
          <ErrorMessage name="username" class="text-red-500 my-1" />
          <Field
            placeholder="رمز عبور"
            :rules="ValidatePassword"
            v-model="Password"
            class="LoginInput"
            name="password"
            type="password"
          />
          <ErrorMessage name="password" class="text-red-500 my-1" />
        </div>
        <div class="LoginParentBtn">
          <button @click="HandelLogin" type="button" class="LoginBtn">
            وارد شدن
          </button>
        </div>
      </Form>
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
