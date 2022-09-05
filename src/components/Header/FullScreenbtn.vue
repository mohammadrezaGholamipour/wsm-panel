<script setup>
import { useFullscreen } from "@vueuse/core";
import { ref, watch } from "@vue/runtime-core";
const { isFullscreen, enter, exit } = useFullscreen();
const IconFullOrDefaultScreen = ref(false);
watch(isFullscreen, (value) => {
  IconFullOrDefaultScreen.value = value;
});
const HandelFullOrDefaultScreen = () => {
  IconFullOrDefaultScreen.value = !IconFullOrDefaultScreen.value;
  if (IconFullOrDefaultScreen.value) {
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
    @click="HandelFullOrDefaultScreen"
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
