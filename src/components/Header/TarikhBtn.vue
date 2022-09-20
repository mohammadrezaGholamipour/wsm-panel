<script setup>
import { ref } from "@vue/reactivity";
const tarikhOption = [
  {
    day: "numeric",
  },
  {
    month: "long",
  },
  {
    weekday: "long",
  },
  {
    year: "numeric",
  },
];
const tarikh = ref([]);
tarikhOption.forEach((items) => {
  tarikh.value.push(new Intl.DateTimeFormat("fa-IR", items).format(new Date()));
});
</script>
<template>
  <div class="Tarikh">
    {{ tarikh[2] }} {{ tarikh[0] }} {{ tarikh[1] }} {{ tarikh[3] }}
  </div>
</template>
