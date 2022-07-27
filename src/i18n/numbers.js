import qualifiedLocales from './qualifiedLocales'

export const numberFormats = {
  'en-US': {
    coords: {
      style: 'decimal',
      minimumSignificantDigits: 6,
      maximumSignificantDigits: 6,
    },
  },
  'ar-EG': {
    coords: {
      style: 'decimal',
      minimumSignificantDigits: 6,
      maximumSignificantDigits: 6,
    },
  },
}

export function fn(number, format, locale) {
  const qualifiedLocale = qualifiedLocales[locale]

  return new Intl.NumberFormat(
    qualifiedLocale,
    numberFormats[qualifiedLocale][format]
  ).format(number)
}
