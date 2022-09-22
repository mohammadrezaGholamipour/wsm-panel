<script setup>
import ServiceAccount from "../api/ServiceAccount";
import { useToast } from "vue-toastification";
import AuthService from "../api/auth.js";
import { useRouter } from "vue-router";
import { ref } from "@vue/reactivity";
/////////////////////////////////////////////////
const router = useRouter();
const toast = useToast();
const userName = ref("");
const password = ref("");
// ///////////////////////////////////////
const getUserInfo = () => {
  ServiceAccount.getUser()
    .then((response) => {
      AuthService.setUserInfo(response.data);
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
    });
};
// ///////////////////////////////////////
const sendServiceLogin = (perosn) => {
  ServiceAccount.login(perosn)
    .then((response) => {
      console.log(response);
      const userInfo = response && response.data && response.data.UserInfo;
      AuthService.setUserInfo(userInfo);
      setTimeout(() => router.push("/"), 250);
      //GetUserInfo();
    })
    .catch((error) => {
      console.log(error);
      toast.error("درخواست انجام نشد", {
        timeout: 2000,
      });
    });
};
// ///////////////////////////////////////
const handelLogin = () => {
  if (userName.value && password.value) {
    if (password.value.length >= 4) {
      const person = {
        username: userName.value,
        password: password.value,
      };
      sendServiceLogin(person);
    } else {
      toast.warning("رمز عبور باید بیشتر از 3 رقم باشد", {
        timeout: 100,
      });
    }
  } else {
    toast.error("اطلاعات را کامل وارد کنید", {
      timeout: 100,
    });
  }
};
</script>
<template>
  <div class="LoginPage">
    <div class="LoginForm">
      <img src="../assets/image/Logo.png" alt="مرکز خدمات حوزه های علمیه" />
      <form @submit.prevent>
        <div class="LoginParentInput">
          <input
            placeholder="نام کاربری"
            v-model="userName"
            class="LoginInput"
            name="username"
            type="text"
          />
          <input
            placeholder="رمز عبور"
            v-model="password"
            class="LoginInput"
            name="password"
            type="password"
          />
        </div>
        <div class="LoginParentBtn">
          <button @click="handelLogin" type="button" class="LoginBtn">
            وارد شدن
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
