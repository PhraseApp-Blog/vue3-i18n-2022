<script>
import { RouterLink } from 'vue-router'

export default {
  props: ['to'],
  components: { RouterLink },
  computed: {
    localizedUrl() {
      return this.to == '/'
        ? `/${this.$i18n.locale}`
        : `/${this.$i18n.locale}/${this.to}`
    },
  },
}
</script>

<template>
  <router-link :to="localizedUrl">
    <slot></slot>
  </router-link>
</template>
