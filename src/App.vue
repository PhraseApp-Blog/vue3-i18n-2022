<script setup>
import { RouterView } from 'vue-router'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="mx-auto mt-4 px-6">
    <header class="mb-4">
      <Nav />
    </header>

    <RouterView />

    <Footer />
  </div>
</template>
