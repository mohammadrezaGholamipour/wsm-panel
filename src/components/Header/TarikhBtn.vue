<script setup>
import { ref } from "@vue/reactivity";
const TarikhOption = [
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
const Tarikh = ref([]);
TarikhOption.forEach((items) => {
  Tarikh.value.push(new Intl.DateTimeFormat("fa-IR", items).format(new Date()));
});
</script>
<template>
  <div class="Tarikh">
    {{ Tarikh[2] }} {{ Tarikh[0] }} {{ Tarikh[1] }} {{ Tarikh[3] }}
  </div>
</template>
