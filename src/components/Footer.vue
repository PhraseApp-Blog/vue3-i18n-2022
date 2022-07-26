<script>
export default {
  data() {
    return {
      vueUrl: 'https://vuejs.org/',
      phraseBlogUrl: 'https://phrase.com/blog',
    }
  },
}
</script>

<template>
  <i18n-t
    keypath="footer"
    tag="p"
    scope="global"
    class="text-purple-300 font-extralight text-sm text-center mt-6 mb-4 pt-3 border-solid border-t-[0.5px] border-slate-800"
  >
    <a :href="vueUrl" class="text-purple-200 underline">{{ $t('vue') }}</a>
    <a :href="phraseBlogUrl" class="text-purple-200 underline">{{
      $t('phraseBlogTutorial')
    }}</a>
  </i18n-t>
</template>
