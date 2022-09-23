<script setup>
import LocalizedLink from '@/components/l10n/LocalizedLink.vue'
import LocaleSwitcher from '@/components/l10n/LocaleSwitcher.vue'
</script>

<template>
  <div class="flex justify-between items-center">
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

    <LocaleSwitcher />
  </div>
</template>
