<script setup>
import LogoutAccountBtn from "./LogoutAccountBtn.vue";
import AccountInfoBtn from "./AccountInfoBtn.vue";
import MenuMobileBtn from "./MenuMobileBtn.vue";
import FullScreenbtn from "./FullScreenbtn.vue";
import Messagesbtn from "./Messagesbtn.vue";
import BreadCrumb from "./BreadCrumb.vue";
import TarikhBtn from "./TarikhBtn.vue";
</script>
<!-- //////////////////////////////////////////// -->
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