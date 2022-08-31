<script setup>
import BreadCrumb from "../components/BreadCrumb.vue";
import MenuSystem from "../components/MenuSystem.vue";
import MenuMobile from "../components/MenuMobile.vue";
import HeaderPanel from "../components/HeaderPanel.vue";
</script>

<template>
  <header>
    <HeaderPanel />
  </header>
  <main class="Main">
    <BreadCrumb />
    <MenuSystem />
    <MenuMobile />
  </main>
</template>

<style scoped></style>
