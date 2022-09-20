<script setup>
import { ref, computed } from 'vue'

const loading = ref(true)
const coords = ref(null)
const datetime = ref('')

fetch('/data/coords.json')
  .then((res) => res.json())
  .then(({ loadedCoords, timestamp }) => {
    coords.value = loadedCoords
    datetime.value = new Date(timestamp * 1000)
    loading.value = false
  })

const formattedCoords = computed(
  () => `${coords.latitude}° N, ${coords.longitude}° E`
)
</script>

<template>
  <p
    class="text-sm text-purple-300 text-center border-purple-700 border-solid border-[0.5px] rounded-md p-3 mb-8"
  >
    <span v-if="loading">Loading...</span>
    <span v-else>The ISS was over {{ formattedCoords }} on {{ datetime }}</span>
  </p>
</template>
