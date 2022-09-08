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
      class="breadcrumbOl"
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
        {{ Route.meta.breadcrumb }}
      </li>
    </ol>
  </nav>
</template>
