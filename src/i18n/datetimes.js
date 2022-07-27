import qualifiedLocales from './qualifiedLocales'

export const datetimeFormats = {
  'en-US': {
    full: {
      dateStyle: 'full',
      timeStyle: 'full',
    },
    short: {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    },
  },
  'ar-EG': {
    full: {
      dateStyle: 'full',
      timeStyle: 'full',
    },
    short: {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    },
  },
}

export function fd(date, format, locale) {
  const qualifiedLocale = qualifiedLocales[locale]

  return new Intl.DateTimeFormat(
    qualifiedLocale,
    datetimeFormats[qualifiedLocale][format]
  ).format(date)
}
