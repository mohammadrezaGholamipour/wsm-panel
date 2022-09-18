<script setup>
import ServiceAccount from "../../api/ServiceAccount";
import AuthService from "../../api/auth.js";
import { useRouter } from "vue-router";
const Route = useRouter();
ServiceAccount.GetUser();
const HandelLogOut = () => {
  ServiceAccount.LogOut()
    .then(() => {
      AuthService.removeAllUserInfo();
      Route.replace("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<template>
  <button @click="HandelLogOut" type="button" class="BtnLogout">
    <font-awesome-icon icon="fa-solid fa-power-off" beat />
  </button>
</template>