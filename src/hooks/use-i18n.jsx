import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { DEFAULT_LOCALE, getLocaleMeta } from "@/i18n/config";
import { getLocaleFromPathname, localizePath, stripLocalePrefix } from "@/i18n/path";

export function useLocale() {
  const { pathname, search, hash } = useLocation();
  const locale = getLocaleFromPathname(pathname);
  const path = stripLocalePrefix(pathname);
  const meta = getLocaleMeta(locale);

  return {
    locale,
    path,
    search,
    hash,
    dir: meta.dir,
    htmlLang: meta.htmlLang,
    hreflang: meta.hreflang,
    ogLocale: meta.ogLocale,
    isDefault: locale === DEFAULT_LOCALE,
    localize: (to) => localizePath(to, locale),
  };
}

export function useI18n() {
  const { t, i18n } = useTranslation();
  const localeState = useLocale();
  return { t, i18n, lang: localeState.locale, ...localeState };
}
