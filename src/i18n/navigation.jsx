import { forwardRef } from "react";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import { useLocale } from "@/hooks/use-i18n";
import { localizePath } from "@/i18n/path";

/**
 * @typedef {import("react-router-dom").LinkProps & { locale?: string }} LocaleLinkProps
 * @typedef {import("react-router-dom").NavLinkProps & { locale?: string }} LocaleNavLinkProps
 */

export const Link = forwardRef(
  /**
   * @param {LocaleLinkProps} props
   * @param {import("react").ForwardedRef<HTMLAnchorElement>} ref
   */
  function LocaleLink({ to, locale: localeOverride, ...props }, ref) {
    const { locale } = useLocale();
    return <RouterLink ref={ref} to={localizePath(to, localeOverride || locale)} {...props} />;
  }
);

export const NavLink = forwardRef(
  /**
   * @param {LocaleNavLinkProps} props
   * @param {import("react").ForwardedRef<HTMLAnchorElement>} ref
   */
  function LocaleNavLink({ to, locale: localeOverride, ...props }, ref) {
    const { locale } = useLocale();
    return <RouterNavLink ref={ref} to={localizePath(to, localeOverride || locale)} {...props} />;
  }
);
