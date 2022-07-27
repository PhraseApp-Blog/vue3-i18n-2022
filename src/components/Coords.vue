<script>
import { fn } from '../i18n/numbers'

export default {
  data() {
    return {
      loading: true,
      coords: null,
      datetime: '',
    }
  },

  created() {
    this.loading = true

    fetch('/data/coords.json')
      .then((res) => res.json())
      .then(({ coords, timestamp }) => {
        this.coords = coords
        this.datetime = new Date(timestamp * 1000)
        this.loading = false
      })
  },

  computed: {
    issPosition() {
      const { latitude, longitude } = this.coords

      return this.$t('issPosition', {
        latitude: fn(latitude, 'coords', this.$i18n.locale),
        longitude: fn(longitude, 'coords', this.$i18n.locale),
        datetime: this.datetime,
      })
    },
  },
}
</script>

<template>
  <p
    class="text-sm text-purple-300 text-center border-purple-700 border-solid border-[0.5px] rounded-md p-3 mb-8"
  >
    <span v-if="loading">{{ $t('loading') }}</span>
    <span v-else>{{ issPosition }}</span>
  </p>
</template>
