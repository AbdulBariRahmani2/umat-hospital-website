import { forwardRef } from "react";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import { useLocale } from "@/hooks/use-i18n";
import { localizePath } from "@/i18n/path";

export const Link = forwardRef(function LocaleLink({ to, locale: localeOverride, ...props }, ref) {
  const { locale } = useLocale();
  return <RouterLink ref={ref} to={localizePath(to, localeOverride || locale)} {...props} />;
});

export const NavLink = forwardRef(function LocaleNavLink({ to, locale: localeOverride, ...props }, ref) {
  const { locale } = useLocale();
  return <RouterNavLink ref={ref} to={localizePath(to, localeOverride || locale)} {...props} />;
});
