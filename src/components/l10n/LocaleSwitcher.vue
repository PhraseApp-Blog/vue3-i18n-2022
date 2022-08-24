<script>
import { supportedLocales } from '../../i18n'

export default {
  methods: {
    onLocaleChange(event) {
      const newLocale = event.target.value

      if (newLocale === this.$i18n.locale) {
        return
      }

      this.$router.push(`/${newLocale}`)
    },
  },
  computed: {
    locales() {
      return Object.keys(supportedLocales).map((code) => ({
        code,
        name: supportedLocales[code].name,
      }))
    },
  },
}
</script>

<template>
  <select
    :value="$i18n.locale"
    @change="onLocaleChange($event)"
    class="px-2 py-1 rounded-sm"
  >
    <option v-for="locale in locales" :key="locale.code" :value="locale.code">
      {{ locale.name }}
    </option>
  </select>
</template>
