import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { DEFAULT_LOCALE, LOCALE_CODES, applyDocumentLanguage } from "@/i18n/config";
import { localeFromWindow } from "@/i18n/path";
import en from "@/i18n/locales/en.json";
import ps from "@/i18n/locales/ps.json";
import prs from "@/i18n/locales/prs.json";

const initialLocale = localeFromWindow();

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ps: { translation: ps },
    prs: { translation: prs },
  },
  lng: initialLocale,
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: LOCALE_CODES,
  load: "currentOnly",
  nonExplicitSupportedLngs: false,
  interpolation: { escapeValue: false },
  returnNull: false,
  returnEmptyString: false,
  react: { useSuspense: false },
});

applyDocumentLanguage(initialLocale);

export default i18n;
