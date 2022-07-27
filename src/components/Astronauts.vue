<script>
import { fd } from '../i18n/datetimes'
import AstroCard from './AstroCard.vue'

export default {
  components: { AstroCard },

  data() {
    return {
      loading: true,
      astros: [],
      updated: new Date(),
    }
  },

  methods: {
    fd,
  },

  created() {
    fetch('/data/astronauts.json')
      .then((res) => res.json())
      .then((data) => {
        this.astros = data
        this.loading = false
      })
  },
}
</script>
<template>
  <p v-if="loading">Loading...</p>

  <div v-else>
    <div class="flex justify-between items-baseline mb-6">
      <h2 class="text-purple-300 text-2xl font-extralight">
        🧑‍🚀 {{ $tc('peopleInSpace', astros.length) }}
      </h2>

      <p class="text-purple-300 font-extralight text-sm">
        {{ $t('updatedAt', { date: fd(updated, 'short', $i18n.locale) }) }}
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
