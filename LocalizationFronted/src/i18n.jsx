import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../src/Localization/en.json';
import translationTR from '../src/Localization/tr.json';


const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  },
};

const storedLanguage = localStorage.getItem('language');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: storedLanguage,
    fallbackLng: 'en',
    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
