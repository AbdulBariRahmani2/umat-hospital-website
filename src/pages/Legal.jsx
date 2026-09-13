import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";

import { breadcrumbJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

const pages = {
  "/privacy": {
    titleKey: "pages.legal.privacy.title",
    descriptionKey: "pages.legal.privacy.description",
    eyebrowKey: "legal.eyebrow",
    paragraphsKey: ["legal.privacy.p1", "legal.privacy.p2", "legal.privacy.p3"],
  },
  "/terms": {
    titleKey: "pages.legal.terms.title",
    descriptionKey: "pages.legal.terms.description",
    eyebrowKey: "legal.eyebrow",
    paragraphsKey: ["legal.terms.p1", "legal.terms.p2", "legal.terms.p3"],
  },
  "/disclaimer": {
    titleKey: "pages.legal.disclaimer.title",
    descriptionKey: "pages.legal.disclaimer.description",
    eyebrowKey: "legal.eyebrow",
    paragraphsKey: ["legal.disclaimer.p1", "legal.disclaimer.p2"],
  },
  "/accessibility": {
    titleKey: "pages.legal.accessibility.title",
    descriptionKey: "pages.legal.accessibility.description",
    eyebrowKey: "legal.eyebrow",
    paragraphsKey: ["legal.accessibility.p1", "legal.accessibility.p2"],
  },
};

export default function Legal() {
  const { t, path } = useI18n();
  const page = pages[path] || pages["/privacy"];

  return (
    <main>
      <Seo
        title={t(page.titleKey)}
        description={t(page.descriptionKey)}
        path={path}
        jsonLd={breadcrumbJsonLd([{ name: t(page.titleKey), path }])}
      />
      <PageHero eyebrow={t(page.eyebrowKey)} title={t(page.titleKey)} crumbs={[{ label: t(page.titleKey) }]} />
      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10 space-y-5">
          {page.paragraphsKey.map((key) => (
            <Reveal key={key}>
              <p className="text-lg leading-relaxed text-muted-foreground">{t(key)}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
