/** BCP 47 locale registry. English is the default and has no URL prefix. */

export const DEFAULT_LOCALE = "en";
export const LOCALE_STORAGE_KEY = "uih.locale";

export const LOCALES = {
  en: {
    code: "en",
    htmlLang: "en",
    dir: "ltr",
    ogLocale: "en_US",
    hreflang: "en",
    nativeLabel: "English",
    englishLabel: "English",
    urlPrefix: "",
  },
  ps: {
    code: "ps",
    htmlLang: "ps",
    dir: "rtl",
    ogLocale: "ps_AF",
    hreflang: "ps",
    nativeLabel: "پښتو",
    englishLabel: "Pashto",
    urlPrefix: "ps",
  },
  prs: {
    code: "prs",
    htmlLang: "fa-AF",
    dir: "rtl",
    ogLocale: "fa_AF",
    hreflang: "fa-AF",
    nativeLabel: "دری",
    englishLabel: "Dari",
    urlPrefix: "prs",
  },
};

export const LOCALE_CODES = Object.keys(LOCALES);
export const PREFIXED_LOCALES = LOCALE_CODES.filter((code) => code !== DEFAULT_LOCALE);

export function isLocaleCode(value) {
  return LOCALE_CODES.includes(value);
}

export function getLocaleMeta(code) {
  return LOCALES[code] || LOCALES[DEFAULT_LOCALE];
}

export function applyDocumentLanguage(locale = DEFAULT_LOCALE) {
  if (typeof document === "undefined") return;
  const meta = getLocaleMeta(locale);
  document.documentElement.lang = meta.htmlLang;
  document.documentElement.dir = meta.dir;
  document.documentElement.dataset.locale = locale;
}
