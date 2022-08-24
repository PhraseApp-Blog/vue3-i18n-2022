<script setup>
import { RouterLink } from 'vue-router'
import LocalizedLink from './l10n/LocalizedLink.vue'
</script>

<template>
  <nav class="flex items-center">
    <img :alt="$t('logo')" src="@/assets/logo.svg" width="60" height="60" />
    <span class="font-bold text-purple-300">{{ $t('appTitle') }}</span>

    <LocalizedLink
      to="/"
      class="ltr:ml-9 rtl:mr-9 text-purple-100 font-light"
      >{{ $t('home') }}</LocalizedLink
    >

    <!-- Notice that we point to about not /about -->
    <LocalizedLink
      to="about"
      class="ltr:ml-4 rtl:mr-4 text-purple-100 font-light"
      >{{ $t('about') }}</LocalizedLink
    >
  </nav>
</template>
