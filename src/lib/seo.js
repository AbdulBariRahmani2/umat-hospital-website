import { DEFAULT_LOCALE, LOCALES } from "@/i18n/config";
import { getLocaleFromPathname, localizePath } from "@/i18n/path";

export const DEFAULT_TITLE = "Ummat International Hospital | Tertiary Care in Kabul";
export const DEFAULT_DESCRIPTION =
  "Physician-led hospital on Darulaman Road in Kabul. Neuroscience, surgery, cancer care, diagnostics, and emergency care open all day and night. Book a visit.";
export const DEFAULT_IMAGE = "/images/og-hospital-kabul.png";
export const DEFAULT_IMAGE_ALT = "Ummat International Hospital campus on Darulaman Road in Kabul";

export const SITE_PATHS = [
  "/",
  "/about",
  "/services",
  "/services/neuroscience",
  "/services/surgery",
  "/services/cancer-care",
  "/services/diagnostics",
  "/services/emergency",
  "/doctors",
  "/doctors/aria-salehi",
  "/doctors/lina-karimi",
  "/doctors/yasin-noori",
  "/doctors/soraya-ahmadi",
  "/patients",
  "/research",
  "/news",
  "/news/understanding-stroke-signs",
  "/news/early-cancer-screening",
  "/news/advanced-imaging-explained",
  "/news/diagnostics-wing-opens",
  "/news/clinical-research-partnership",
  "/news/residency-applications-2027",
  "/contact",
  "/appointment",
  "/privacy",
  "/terms",
  "/disclaimer",
  "/accessibility",
];

export function getSiteUrl() {
  const fromEnv = String(import.meta.env.VITE_SITE_URL || "").replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (typeof window !== "undefined" && window.location?.origin) {
    return window.location.origin;
  }
  return "";
}

export function absUrl(path = "/") {
  const origin = getSiteUrl();
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return origin ? `${origin}${normalized === "/" ? "/" : normalized}` : normalized;
}

export function hospitalJsonLd() {
  const url = getSiteUrl() || "/";
  return {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "@id": `${url}/#hospital`,
    name: "Ummat International Hospital",
    alternateName: ["UIH", "Ummat Hospital Kabul"],
    url,
    logo: absUrl("/images/uih-logo-mark.png"),
    image: absUrl(DEFAULT_IMAGE),
    description: DEFAULT_DESCRIPTION,
    foundingDate: "2026",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Darulaman Road, Next to National Museum of Afghanistan",
      addressLocality: "Kabul",
      addressCountry: "AF",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.5228,
      longitude: 69.145,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
        description: "Emergency Department",
      },
    ],
    medicalSpecialty: [
      "Neurologic",
      "Surgical",
      "Oncologic",
      "Diagnostic",
      "Emergency",
    ],
    availableLanguage: Object.values(LOCALES).map((locale) => locale.htmlLang),
  };
}

export function websiteJsonLd() {
  const url = getSiteUrl() || "/";
  const locale = typeof window !== "undefined" ? getLocaleFromPathname(window.location.pathname) : DEFAULT_LOCALE;
  const doctorsPath = localizePath("/doctors", locale);
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${url}/#website`,
    name: "Ummat International Hospital",
    url,
    inLanguage: LOCALES[locale].htmlLang,
    publisher: { "@id": `${url}/#hospital` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${url}${doctorsPath}?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbJsonLd(crumbs = []) {
  const locale = typeof window !== "undefined" ? getLocaleFromPathname(window.location.pathname) : DEFAULT_LOCALE;
  const items = [{ name: "Home", path: localizePath("/", locale) }, ...crumbs.map((item) => ({
    ...item,
    path: item.path ? localizePath(item.path, locale) : undefined,
  }))];
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absUrl(item.path || localizePath("/", locale)),
    })),
  };
}

export function faqJsonLd(faqs = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
