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
      <transition
        enter-active-class="duration-300 ease-out"
        enter-from-class="transform opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="transform opacity-0"
      >
        <router-view />
      </transition>
    </div>
    <!-- ////////////////////////// -->
    <MenuSystem />
    <!-- ////////////////////////// -->
  </main>
</template>
