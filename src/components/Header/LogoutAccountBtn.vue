<script setup>
import ServiceAccount from "../../api/ServiceAccount";
import AuthService from "../../api/auth.js";
import { useRouter } from "vue-router";
// ////////////////////////////////////////////
const route = useRouter();
ServiceAccount.getUser();
const handelLogOut = () => {
  ServiceAccount.logOut()
    .then(() => {
      AuthService.removeAllUserInfo();
      route.replace("/login");
    })
    .catch((error) => {
      console.log(error);
    });
};
</script>
<template>
  <button @click="handelLogOut" type="button" class="BtnLogout">
    <font-awesome-icon icon="fa-solid fa-power-off" beat />
  </button>
</template>