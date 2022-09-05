<script setup>
import MenuSystem from "../components/Menu/MenuSystem.vue";
import MenuMobile from "../components/Menu/MenuMobile.vue";
import FullHeader from "../components/FullHeader.vue";
import TablePerson from "../components/TablePerson.vue";
</script>

<template>
  <!-- ////////////////////////// -->
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
    </div>
    <!-- ////////////////////////// -->
    <MenuSystem />
    <!-- ////////////////////////// -->
  </main>
  <!-- ////////////////////////// -->
</template>
