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
  <nav class="NavBreadCrumb">
    <nav aria-label="breadcrumb">
      <ol class="list-reset text-black flex items-center align-baseline">
        <li>
          <a href="#"
            ><font-awesome-icon
              class="text-blue-600"
              icon="fa-solid fa-house-chimney"
          /></a>
        </li>
        <li><span class="mx-2">/</span></li>
        <li>
          <a href="#" class="text-yellow-600">زیر مجموعه</a>
        </li>
        <li><span class="mx-2">/</span></li>
        <li>
          <a href="#" class="text-yellow-600">ارتباطات</a>
        </li>
      </ol>
    </nav>
    <!-- <div class="NavTarikh">
      <button type="button" class="TarikhBtn">
        {{ Tarikh[2] }} {{ Tarikh[0] }} {{ Tarikh[1] }} {{ Tarikh[3] }}
      </button>
    </div> -->
  </nav>
</template>

<style scoped></style>
