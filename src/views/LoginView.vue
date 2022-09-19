<script setup>
import { Form, Field, ErrorMessage } from "vee-validate";
import ServiceAccount from "../api/ServiceAccount";
import { notify } from "@kyvg/vue3-notification";
import AuthService from "../api/auth.js";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";

const Router = useRouter();
const UserName = ref("");
const Password = ref("");
// ///////////////////////////////////////
const GetUserInfo = () => {
  ServiceAccount.GetUser()
    .then((response) => {
      AuthService.setUserInfo(response.data);
      Router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
// ///////////////////////////////////////
const SendServiceLogin = (perosn) => {
  ServiceAccount.Login(perosn)
    .then((response) => {
      console.log(response);
      AuthService.setToken(response.jwToken);
      GetUserInfo();
    })
    .catch((error) => {
      console.log(error);
      notify({
        type: "error",
        title: "درخواست انجام نشد",
      });
    });
};
// ///////////////////////////////////////
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
        username: UserName.value,
        password: Password.value,
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
    <notifications
      position="top center"
      v-if="false"
      class="mt-2"
      width="320"
    />
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
