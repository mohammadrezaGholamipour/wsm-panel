<script setup>
import { useRoute } from "vue-router";

const Route = useRoute();
</script>
<template>
  <nav
    v-if="Route.meta.breadcrumb"
    aria-label="breadcrumb"
    class="breadcrumb"
    dir="rtl"
  >
    <ol
      class="text-white py-1 px-2 rounded shadow-md bg-blue-500 hover:shadow-lg transition duration-150 ease-in-out flex justify-center items-center align-center"
    >
      <li>
        <router-link to="/home">
          <font-awesome-icon
            class="hover:scale-110 transition-all"
            icon="fa-solid fa-house-chimney"
        /></router-link>
      </li>
      <li class="mx-2 flex"><font-awesome-icon icon="fa-solid fa-link" /></li>
      <li>
        <router-link to="">{{ Route.meta.breadcrumb }}</router-link>
      </li>
    </ol>
  </nav>
</template>