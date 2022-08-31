<script setup>
import MenuSystem from "../components/Menu/MenuSystem.vue";
import MenuMobile from "../components/Menu/MenuMobile.vue";
import FullHeader from "../components/Header/FullHeader.vue";
</script>

<template>
  <header id="Header">
    <FullHeader />
  </header>
  <main id="Main">
    <MenuSystem />
    <MenuMobile />
  </main>
</template>

<style scoped></style>
