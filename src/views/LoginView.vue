<script setup>
import ServiceLogin from "../api/ServiceLogin";
import AuthService from "../api/auth.js";
import { ref } from "@vue/reactivity";
import { Form, Field, ErrorMessage } from "vee-validate";
import { notify } from "@kyvg/vue3-notification";
const UserName = ref("");
const Password = ref("");
const SendServiceLogin = (login) => {
  ServiceLogin.Login(login)
    .then((response) => {
      AuthService.setToken(response.data.jwToken);
      AuthService.setUserInfo(response.data);
      setTimeout(() => {
        notify({
          type: "success",
          title: "با موفقیت انجام شد",
        });
      }, 2000);
    })
    .catch((error) => {
      console.log(error.message);
      setTimeout(() => {
        notify({
          type: "error",
          title: "درخواست انجام نشد",
        });
      }, 2000);
    });
};
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
      const Person = {
        UserName: UserName.value,
        Password: Password.value,
      };
      SendServiceLogin(JSON.stringify(Person));
    } else {
      notify({
        type: "warn",
        title: "رمز عبور باید بیشتر از 5 رقم باشد",
        ignoreDuplicates: true,
      });
    }
  } else {
    notify({
      type: "error",
      title: "اطلاعات را کامل وارد",
      ignoreDuplicates: true,
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
