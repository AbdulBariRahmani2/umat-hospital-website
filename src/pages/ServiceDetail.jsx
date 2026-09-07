import { Link, useParams } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { getSpecialty } from "@/data/specialties";
import { getDoctorsByDept } from "@/data/doctors";
import PageNotFound from "@/lib/PageNotFound";
import { absUrl, breadcrumbJsonLd, getSiteUrl } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getSpecialty(slug);
  const { t } = useI18n();

  if (!service) return <PageNotFound />;

  const relatedDoctors = getDoctorsByDept(service.slug);
  const path = `/services/${service.slug}`;

  return (
    <main>
      <Seo
        title={service.seoTitle}
        description={service.seoDescription}
        path={path}
        image={service.image}
        imageAlt={service.imageAlt}
        jsonLd={[
          breadcrumbJsonLd([
            { name: t("common.servicesCrumbs"), path: "/services" },
            { name: service.title, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "MedicalWebPage",
            name: service.title,
            url: absUrl(path),
            description: service.seoDescription,
            about: {
              "@type": "MedicalProcedure",
              name: service.title,
            },
            sourceOrganization: { "@id": `${getSiteUrl()}/#hospital` },
          },
        ]}
      />
      <PageHero
        eyebrow={t("common.servicesCrumbs")}
        title={`${service.title} in Kabul`}
        description={service.desc}
        crumbs={[{ label: t("common.servicesCrumbs"), to: "/services" }, { label: service.title }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  width="960"
                  height="540"
                  className="mb-10 w-full rounded-[2rem] object-cover aspect-[16/9]"
                />
              </Reveal>
              <Reveal as="h2" className="font-heading text-3xl font-semibold text-foreground">
                {t("common.overview")}
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">{service.overview}</p>
              </Reveal>

              <Reveal delay={0.12} as="h3" className="mt-12 font-heading text-2xl font-semibold text-foreground">
                {t("common.conditionsWeSee")}
              </Reveal>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3">
                {service.conditions.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>

              <Reveal delay={0.16} as="h3" className="mt-12 font-heading text-2xl font-semibold text-foreground">
                {t("common.howWeHelp")}
              </Reveal>
              <ul className="mt-5 space-y-3">
                {service.treatments.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <Reveal>
                <div className="rounded-3xl border border-border/70 bg-card p-7">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{t("common.requestThisService")}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t("common.bookVisit")} {service.title.toLowerCase()} {t("common.ourTeamConfirm")}
                  </p>
                  <div className="mt-6 flex flex-col gap-3">
                    <Button asChild className="rounded-full">
                      <Link to={`/appointment?dept=${encodeURIComponent(service.title)}`}>
                        {t("common.bookAppointmentBtn")} <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                    {service.slug === "emergency" ? (
                      <Button asChild variant="outline" className="rounded-full">
                        <Link to="/contact">{t("common.emergencyLocation")}</Link>
                      </Button>
                    ) : (
                      <Button asChild variant="outline" className="rounded-full">
                        <Link to="/doctors">{t("common.findDoctor")}</Link>
                      </Button>
                    )}
                  </div>
                </div>
              </Reveal>

              {relatedDoctors.length > 0 && (
                <Reveal delay={0.1}>
                  <div className="rounded-3xl border border-border/70 bg-card p-7">
                    <h3 className="font-heading text-xl font-semibold text-foreground">{t("common.specialists")}</h3>
                    <ul className="mt-4 space-y-3">
                      {relatedDoctors.map((d) => (
                        <li key={d.slug}>
                          <Link to={`/doctors/${d.slug}`} className="group flex items-center justify-between gap-3">
                            <span>
                              <span className="block text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                                {d.name}
                              </span>
                              <span className="block text-xs text-muted-foreground">{d.role}</span>
                            </span>
                            <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
