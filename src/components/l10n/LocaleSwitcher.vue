<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import { supportedLocales } from '@/i18n'

const router = useRouter()
const { locale } = useI18n()

function onLocaleChange(event_) {
  const newLocale = event_.target.value

  if (newLocale === locale.value) {
    return
  }

  router.push(`/${newLocale}`)
}

const locales = computed(() =>
  Object.keys(supportedLocales).map((code) => ({
    code,
    name: supportedLocales[code].name,
  }))
)
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
