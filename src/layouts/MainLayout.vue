<script setup>
import FullHeader from "../components/Header/FullHeader.vue";
import MenuSystem from "../components/Menu/MenuSystem.vue";
import MenuMobile from "../components/Menu/MenuMobile.vue";
import FirstLoading from "../components/FirstLoading.vue";
import { onMounted } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";

const loading = ref(false);
onMounted(() => {
  setTimeout(() => {
    loading.value = true;
  }, 3000);
});
</script>

<template>
  <Teleport to="body">
    <FirstLoading v-if="!loading" />
  </Teleport>
  <!-- ////////////////////////// -->
  <header v-show="loading" id="Header">
    <FullHeader />
  </header>
  <!-- ////////////////////////// -->
  <main v-show="loading" id="Main">
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
    <MenuMobile />
    <!-- ////////////////////////// -->
  </main>
</template>
