<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex items-center">
    <img alt="Mushahed logo" src="@/assets/logo.svg" width="60" height="60" />
    <span class="font-bold text-purple-300">Mushahed</span>

    <RouterLink to="/" class="ml-9 text-purple-100 font-light">Home</RouterLink>
    <RouterLink to="/about" class="ml-4 text-purple-100 font-light"
      >About</RouterLink
    >
  </nav>
</template>
