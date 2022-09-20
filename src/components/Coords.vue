<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, n, d } = useI18n()

const loading = ref(true)
const coords = ref(null)
const datetime = ref('')

fetch('/data/coords.json')
  .then((res) => res.json())
  .then(({ coords: loadedCoords, timestamp }) => {
    coords.value = loadedCoords
    datetime.value = new Date(timestamp * 1000)
    loading.value = false
  })

const issPosition = computed(() => {
  const { latitude, longitude } = coords.value

  return t('issPosition', {
    latitude: n(latitude, 'coords'),
    longitude: n(longitude, 'coords'),
    datetime: d(datetime.value, 'full'),
  })
})
</script>

<template>
  <p
    class="text-sm text-purple-300 text-center border-purple-700 border-solid border-[0.5px] rounded-md p-3 mb-8"
  >
    <span v-if="loading">{{ $t('loading') }}</span>
    <span v-else>{{ issPosition }}</span>
  </p>
</template>
