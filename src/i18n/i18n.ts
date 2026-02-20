import en from './translations/en.json';
import pl from './translations/pl.json';

export const languages = {
  pl: 'Polski',
  en: 'English',
};

export const translations = {
  pl: pl,
  en: en,
} as const;

export const getTranslations = (lang: string | undefined) => {
  const currentLang = lang && lang in translations ? (lang as keyof typeof translations) : 'pl';

  return function t(key: string) {
    return translations[currentLang][key as keyof (typeof translations)['pl']] || key;
  };
};
