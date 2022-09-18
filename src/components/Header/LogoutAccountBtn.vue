<script setup>
import ServiceAccount from "../../api/ServiceAccount";
import AuthService from "../../api/auth.js";
import { useRouter } from "vue-router";
const Route = useRouter();
const HandelLogOut = () => {
  AuthService.removeAllUserInfo();
  ServiceAccount.LogOut();
  Route.replace("/login");
};
</script>
<template>
  <button @click="HandelLogOut" type="button" class="BtnLogout">
    <font-awesome-icon icon="fa-solid fa-power-off" beat />
  </button>
</template>