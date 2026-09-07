import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import Faq from "@/components/sections/Faq";
import { faqs } from "@/data/faqs";
import { breadcrumbJsonLd, faqJsonLd, hospitalJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

const contactItems = [
  { icon: MapPin, labelKey: "common.address", valueKey: "common.hospitalAddress" },
  { icon: Phone, labelKey: "common.phone", valueKey: "common.hospitalPhone" },
  { icon: Mail, labelKey: "common.email", valueKey: "common.hospitalEmail" },
  { icon: Clock, labelKey: "common.hours", valueKey: "common.hospitalHours" },
];

export default function Contact() {
  const { t } = useI18n();
  return (
    <main>
      <Seo
        title={t("pages.contact.title")}
        description={t("pages.contact.description")}
        path="/contact"
        jsonLd={[
          hospitalJsonLd(),
          breadcrumbJsonLd([{ name: t("pages.contact.title"), path: "/contact" }]),
          faqJsonLd(faqs),
        ]}
      />
      <PageHero
        eyebrow={t("common.contactLocation")}
        title={t("pages.contact.title")}
        description={t("pages.contact.description")}
        crumbs={[{ label: t("contactCrumbs") }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-3">
              {contactItems.map((c, i) => (
                <Reveal key={c.labelKey} delay={i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t(c.labelKey)}</p>
                      <p className="mt-0.5 text-foreground">{t(c.valueKey)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <div className="mt-2 overflow-hidden rounded-2xl border border-border/70 h-72 bg-secondary/60">
                  <iframe
                    title={t("common.mapContactTitle")}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=69.1%2C34.5%2C69.2%2C34.55&layer=mapnik&marker=34.5228%2C69.1450"
                    className="h-full w-full grayscale-[0.3]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-border/70 bg-card p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-semibold text-foreground">{t("common.emergencyGeneral")}</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {t("common.emergencyDesc")}
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  {t("common.phoneEmailListed")}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Faq />
    </main>
  );
}
