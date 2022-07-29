import { createI18n } from 'vue-i18n'
import messages from './messages'
import { numberFormats } from './numbers'
import { arabicPluralRules } from './plurals'
import { datetimeFormats } from './datetimes'

const i18n = createI18n({
  locale: 'en-US',
  fallbackLocale: 'en-US',
  messages,
  numberFormats,
  datetimeFormats,
  pluralizationRules: {
    'ar-EG': arabicPluralRules,
  },
})

export default i18n
