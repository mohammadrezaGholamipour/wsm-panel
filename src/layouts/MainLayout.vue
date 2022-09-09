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
      <router-view v-slot="{ Component }">
        <transition
          enter-active-class="duration-500 ease-out"
          enter-from-class="transform opacity-0"
          leave-to-class="transform opacity-0"
          leave-from-class="opacity-100"
          enter-to-class="opacity-100"
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    <!-- ////////////////////////// -->
    <MenuSystem />
    <!-- ////////////////////////// -->
  </main>
</template>
