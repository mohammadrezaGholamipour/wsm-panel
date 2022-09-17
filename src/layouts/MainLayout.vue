<script setup>
import MenuSystem from "../components/Menu/MenuSystem.vue";
import MenuMobile from "../components/Menu/MenuMobile.vue";
import FullHeader from "../components/Header/FullHeader.vue";
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import FirstLoading from "../components/FirstLoading.vue";
const Loading = ref(false);
onMounted(() => {
  setTimeout(() => {
    Loading.value = true;
  }, 3000);
});
</script>

<template>
  <FirstLoading v-if="!Loading" />
  <!-- ////////////////////////// -->
  <header v-show="Loading" id="Header">
    <FullHeader />
  </header>
  <!-- ////////////////////////// -->
  <main v-show="Loading" id="Main">
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
