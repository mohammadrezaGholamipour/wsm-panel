<script setup>
import MenuSystem from "../components/MenuSystem.vue";
import MenuMobile from "../components/MenuMobile.vue";
import HeaderPanel from "../components/HeaderPanel.vue";
</script>

<template>
  <header id="Header">
    <HeaderPanel />
  </header>
  <main id="Main">
    <MenuSystem />
    <MenuMobile />
  </main>
</template>

<style scoped></style>
