import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import ps from './locales/ps.json';
import prs from './locales/prs.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ps: { translation: ps },
    prs: { translation: prs },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
