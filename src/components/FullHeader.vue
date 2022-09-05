<script setup>
import FullScreenbtn from "./Header/FullScreenbtn.vue";
import AccountInfoBtn from "./Header/AccountInfoBtn.vue";
import Messagesbtn from "./Header/Messagesbtn.vue";
import BreadCrumb from "./Header/BreadCrumb.vue";
import TarikhBtn from "./Header/TarikhBtn.vue";
import LogoutAccountBtn from "./Header/LogoutAccountBtn.vue";
import MenuMobileBtn from "./Header/MenuMobileBtn.vue";
</script>

<template>
  <nav class="Header">
    <div class="Left">
      <LogoutAccountBtn />
      <MenuMobileBtn />
      <TarikhBtn />
      <AccountInfoBtn />
      <FullScreenbtn />
    </div>
    <div class="Center">
      <BreadCrumb />
    </div>
    <div class="Right">
      <Messagesbtn />
    </div>
  </nav>
</template>

<style></style>
