import { useEffect } from "react";
import { DEFAULT_DESCRIPTION, DEFAULT_IMAGE, DEFAULT_IMAGE_ALT, DEFAULT_TITLE, absUrl } from "@/lib/seo";
import { useLocale } from "@/hooks/use-i18n";
import { LOCALES, LOCALE_CODES, DEFAULT_LOCALE } from "@/i18n/config";
import { localizePath } from "@/i18n/path";

function upsertMeta(attr, key, content) {
  if (content == null || content === "") return;
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  let el = document.head.querySelector(`link[rel="${rel}"]:not([hreflang])`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function syncHreflang(links) {
  document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove());
  links.forEach(({ hreflang, href }) => {
    const el = document.createElement("link");
    el.setAttribute("rel", "alternate");
    el.setAttribute("hreflang", hreflang);
    el.setAttribute("href", href);
    document.head.appendChild(el);
  });
}

function syncOgLocaleAlternates(ogLocales) {
  document.head.querySelectorAll('meta[property="og:locale:alternate"]').forEach((el) => el.remove());
  ogLocales.forEach((ogLocale) => {
    const el = document.createElement("meta");
    el.setAttribute("property", "og:locale:alternate");
    el.setAttribute("content", ogLocale);
    document.head.appendChild(el);
  });
}

function setJsonLd(data) {
  const id = "seo-jsonld";
  let el = document.getElementById(id);
  if (!data) {
    el?.remove();
    return;
  }
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(Array.isArray(data) ? data : [data].flat());
}

export default function Seo({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = "/",
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = "website",
  jsonLd = null,
  noindex = false,
}) {
  const { locale, ogLocale } = useLocale();

  useEffect(() => {
    const localizedPath = localizePath(path, locale);
    const url = absUrl(localizedPath);
    const ogImage = image.startsWith("http") ? image : absUrl(image);
    const fullTitle = title.includes("Ummat International Hospital") || title.includes("| UIH")
      ? title
      : `${title} | Ummat International Hospital`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMeta("name", "author", "Ummat International Hospital");
    upsertMeta("name", "geo.region", "AF-KAB");
    upsertMeta("name", "geo.placename", "Kabul");
    upsertMeta("name", "geo.position", "34.5228;69.1450");
    upsertMeta("name", "ICBM", "34.5228, 69.1450");
    upsertLink("canonical", url);

    const hreflangLinks = [
      ...LOCALE_CODES.map((code) => ({
        hreflang: LOCALES[code].hreflang,
        href: absUrl(localizePath(path, code)),
      })),
      { hreflang: "x-default", href: absUrl(localizePath(path, DEFAULT_LOCALE)) },
    ];
    syncHreflang(hreflangLinks);

    upsertMeta("property", "og:type", type);
    upsertMeta("property", "og:site_name", "Ummat International Hospital");
    upsertMeta("property", "og:locale", ogLocale);
    syncOgLocaleAlternates(
      LOCALE_CODES.filter((code) => code !== locale).map((code) => LOCALES[code].ogLocale)
    );
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:image:alt", imageAlt);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", ogImage);
    upsertMeta("name", "twitter:image:alt", imageAlt);

    setJsonLd(jsonLd);
  }, [title, description, path, image, imageAlt, type, noindex, locale, ogLocale, JSON.stringify(jsonLd)]);

  return null;
}
