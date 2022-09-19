<script setup>
import serviceAccount from "../api/serviceAccount";
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
  serviceAccount
    .GetUser()
    .then((response) => {
      AuthService.setUserInfo(response.data);
      router.push("/");
    })
    .catch((error) => {
      console.log(error);
      toast.error("اطلاعات شما یافت نشد", {
        timeout: 2000,
      });
    });
};
// ///////////////////////////////////////
const sendServiceLogin = (perosn) => {
  serviceAccount
    .Login(perosn)
    .then((response) => {
      AuthService.setToken(response.jwToken);
      getUserInfo();
    })
    .catch((error) => {
      console.log(error);
      toast.error("شما اجازه ورود ندارید", {
        timeout: 2000,
      });
    });
};
const handelLogin = () => {
  if (userName.value && password.value) {
    if (password.value.length > 5) {
      const Person = {
        userName: userName.value,
        password: password.value,
      };
      sendServiceLogin(Person);
    } else {
      toast.warning("رمز عبور باید بیشتر از 5 رقم باشد", {
        timeout: 2000,
      });
    }
  } else {
    toast.error("اطلاعات را کامل وارد کنید", {
      timeout: 2000,
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
            type="text"
          />
          <input
            placeholder="رمز عبور"
            v-model="password"
            class="LoginInput"
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
