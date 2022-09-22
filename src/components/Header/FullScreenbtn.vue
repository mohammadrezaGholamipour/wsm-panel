<script setup>
import { ref, watch } from "@vue/runtime-core";
import { useFullscreen } from "@vueuse/core";
// ///////////////////////////////////////////////
const { isFullscreen, enter, exit } = useFullscreen();
const iconFullOrDefaultScreen = ref(false);
watch(isFullscreen, (value) => {
  iconFullOrDefaultScreen.value = value;
});
const handelFullOrDefaultScreen = () => {
  iconFullOrDefaultScreen.value = !iconFullOrDefaultScreen.value;
  if (iconFullOrDefaultScreen.value) {
    enter();
  } else {
    exit();
  }
};
</script>
<template>
  <button
    type="button"
    class="FullOrDefaultScreen"
    @click="handelFullOrDefaultScreen"
  >
    <font-awesome-icon
      :icon="
        isFullscreen
          ? 'fa-solid fa-down-left-and-up-right-to-center'
          : 'fa-solid fa-up-right-and-down-left-from-center'
      "
    />
  </button>
</template>