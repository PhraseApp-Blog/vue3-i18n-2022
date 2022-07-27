import { createI18n } from 'vue-i18n'
import messages from './messages'
import { numberFormats } from './numbers'
import { arabicPluralRules } from './plurals'

const i18n = createI18n({
  locale: 'en',
  fallbackLocale: {
    en: ['en-US'],
    ar: ['ar-EG'],
    default: ['en'],
  },
  messages,
  numberFormats,
  pluralizationRules: {
    ar: arabicPluralRules,
  },
})

export default i18n
