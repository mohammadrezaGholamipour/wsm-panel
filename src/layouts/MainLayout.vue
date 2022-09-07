<script setup>
import MenuSystem from "../components/Menu/MenuSystem.vue";
import MenuMobile from "../components/Menu/MenuMobile.vue";
import FullHeader from "../components/Header/FullHeader.vue";
</script>

<template>
  <MenuMobile />
  <!-- ////////////////////////// -->
  <header id="Header">
    <FullHeader />
  </header>
  <!-- ////////////////////////// -->
  <main id="Main">
    <!-- ////////////////////////// -->
    <div id="Content">
      <router-view />
    </div>
    <!-- ////////////////////////// -->
    <MenuSystem />
    <!-- ////////////////////////// -->
  </main>
</template>
