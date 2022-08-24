import { createI18n } from 'vue-i18n'
import messages from './messages'
import { numberFormats } from './numbers'
import { arabicPluralRules } from './plurals'
import { datetimeFormats } from './datetimes'

export const defaultLocale = 'en-US'

const i18n = createI18n({
  locale: defaultLocale,
  fallbackLocale: defaultLocale,
  messages,
  numberFormats,
  datetimeFormats,
  pluralizationRules: {
    'ar-EG': arabicPluralRules,
  },
})

export default i18n
