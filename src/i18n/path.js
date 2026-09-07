import { DEFAULT_LOCALE, isLocaleCode } from "@/i18n/config";

function splitPath(input) {
  if (input == null) {
    return { pathname: "/", search: "", hash: "" };
  }

  if (typeof input === "object") {
    return {
      pathname: input.pathname || "/",
      search: input.search || "",
      hash: input.hash || "",
    };
  }

  const value = String(input);
  if (
    value.startsWith("http://") ||
    value.startsWith("https://") ||
    value.startsWith("mailto:") ||
    value.startsWith("tel:") ||
    value.startsWith("#")
  ) {
    return { href: value };
  }

  const url = new URL(value, "https://uih.local");
  return {
    pathname: url.pathname,
    search: url.search,
    hash: url.hash,
  };
}

export function getLocaleFromPathname(pathname = "/") {
  const segment = String(pathname).split("/").filter(Boolean)[0];
  return isLocaleCode(segment) ? segment : DEFAULT_LOCALE;
}

export function stripLocalePrefix(pathname = "/") {
  const parts = String(pathname).split("/");
  if (parts[1] && isLocaleCode(parts[1])) {
    const rest = parts.slice(2).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function localizePathname(pathname = "/", locale = DEFAULT_LOCALE) {
  const clean = stripLocalePrefix(pathname);
  if (locale === DEFAULT_LOCALE) return clean || "/";
  return clean === "/" ? `/${locale}` : `/${locale}${clean}`;
}

export function localizePath(to, locale = DEFAULT_LOCALE) {
  const parts = splitPath(to);
  if (parts.href) return parts.href;

  const pathname = localizePathname(parts.pathname, locale);
  if (typeof to === "object") {
    return {
      ...to,
      pathname,
      search: parts.search || to.search || "",
      hash: parts.hash || to.hash || "",
    };
  }

  return `${pathname}${parts.search || ""}${parts.hash || ""}`;
}

export function switchLocalePath(location, nextLocale) {
  const path = stripLocalePrefix(location.pathname || "/");
  return localizePath(`${path}${location.search || ""}${location.hash || ""}`, nextLocale);
}

export function localeFromWindow() {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  return getLocaleFromPathname(window.location.pathname);
}
