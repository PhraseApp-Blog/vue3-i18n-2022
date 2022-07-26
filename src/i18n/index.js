import { createI18n } from 'vue-i18n'
import messages from './messages'
import { arabicPluralRules } from './plurals'

const i18n = createI18n({
  locale: 'ar',
  fallbackLocale: 'en',
  messages,
  pluralizationRules: {
    ar: arabicPluralRules,
  },
})

export default i18n
