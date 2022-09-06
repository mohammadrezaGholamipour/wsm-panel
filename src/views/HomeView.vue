<script setup>
import MenuSystem from "../components/Menu/MenuSystem.vue";
import MenuMobile from "../components/Menu/MenuMobile.vue";
import FullHeader from "../components/FullHeader.vue";
import TablePerson from "../components/TablePerson.vue";
import WebService from "../components/WebService.vue";
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
      <TablePerson />
      <WebService/>
    </div>
    <!-- ////////////////////////// -->
    <MenuSystem />
    <!-- ////////////////////////// -->
  </main>
</template>
