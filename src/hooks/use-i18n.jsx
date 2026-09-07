import { useTranslation } from 'react-i18next';

export function useI18n() {
  const { t, i18n } = useTranslation();
  return { t, i18n, lang: i18n.language };
}
