import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/hooks/use-i18n";
import { applyDocumentLanguage } from "@/i18n";
import { LOCALE_STORAGE_KEY } from "@/i18n/config";

export default function LocaleDocument() {
  const { locale } = useLocale();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (i18n.resolvedLanguage !== locale) {
      i18n.changeLanguage(locale);
    }
    applyDocumentLanguage(locale);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, locale);
    } catch {
      // ignore private-mode storage failures
    }
  }, [locale, i18n]);

  return null;
}
