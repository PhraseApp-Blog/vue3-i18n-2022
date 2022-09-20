<script setup>
import { ref } from 'vue'
import AstroCard from './AstroCard.vue'

const loading = ref(true)
const astros = ref([])
const updated = ref(new Date())

fetch('/data/astronauts.json')
  .then((res) => res.json())
  .then((data) => {
    astros.value = data
    loading.value = false
  })
</script>

<template>
  <p v-if="loading">Loading...</p>

  <div v-else>
    <div class="flex justify-between items-baseline mb-6">
      <h2 class="text-purple-300 text-2xl font-extralight">
        🧑‍🚀 {{ $t('peopleInSpace', astros.length) }}
      </h2>

      <p class="text-purple-300 font-extralight text-sm">
        {{ $t('updatedAt', { date: $d(updated, 'short') }) }}
      </p>
    </div>

    <div class="grid gap-9 grid-cols-3">
      <AstroCard
        v-for="astro in astros"
        :key="astro.id"
        :name="astro.name"
        :nationality="astro.nationality"
        :craft="astro.craft"
        :photoUrl="astro.photoUrl"
      />
    </div>
  </div>
</template>
