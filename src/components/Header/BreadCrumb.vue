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
    <ol class="list-reset text-black flex items-center align-baseline">
      <li>
        <a href="#"
          ><font-awesome-icon
            class="text-blue-600 hover:scale-110 transition-all"
            icon="fa-solid fa-house-chimney"
        /></a>
      </li>
      <li>
        <span class="mx-2">/</span>
      </li>
      <li>
        <a href="#" style="color: #64748b">{{ Route.meta.breadcrumb }}</a>
      </li>
    </ol>
  </nav>
</template>
