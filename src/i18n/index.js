import { nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import { numberFormats } from './numbers'
import { arabicPluralRules } from './plurals'
import { datetimeFormats } from './datetimes'
import defaultMessages from '../translations/en-US.json'

export const supportedLocales = {
  'en-US': { name: 'English', dir: 'ltr' },
  'ar-EG': { name: 'العربية (Arabic)', dir: 'rtl' },
}

export const defaultLocale = 'en-US'

let _i18n

function setup(options = { locale: defaultLocale }) {
  _i18n = createI18n({
    locale: options.locale,
    fallbackLocale: defaultLocale,
    messages: { [defaultLocale]: defaultMessages },
    numberFormats,
    datetimeFormats,
    pluralizationRules: {
      'ar-EG': arabicPluralRules,
    },
  })

  setLocale(options.locale)

  return _i18n
}

function setLocale(newLocale) {
  _i18n.global.locale = newLocale
  setDocumentAttributesFor(newLocale)
}

async function loadMessagesFor(locale) {
  const messages = await import(
    /* webpackChunkName: "locale-[request]" */ `../translations/${locale}.json`
  )

  _i18n.global.setLocaleMessage(locale, messages.default)

  return nextTick()
}

function setDocumentAttributesFor(locale) {
  const htmlElement = document.querySelector('html')

  htmlElement.setAttribute('lang', locale)
  htmlElement.setAttribute('dir', supportedLocales[locale].dir)
}

export default {
  get vueI18n() {
    return _i18n
  },
  setup,
  setLocale,
  loadMessagesFor,
}
