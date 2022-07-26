<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="flex items-center">
    <img :alt="$t('logo')" src="@/assets/logo.svg" width="60" height="60" />
    <span class="font-bold text-purple-300">{{ $t('appTitle') }}</span>

    <RouterLink to="/" class="ltr:ml-9 rtl:mr-9 text-purple-100 font-light">{{
      $t('home')
    }}</RouterLink>
    <RouterLink
      to="/about"
      class="ltr:ml-4 rtl:mr-4 text-purple-100 font-light"
      >{{ $t('about') }}</RouterLink
    >
  </nav>
</template>
