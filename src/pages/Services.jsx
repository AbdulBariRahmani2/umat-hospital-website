import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { specialties } from "@/data/specialties";
import { getServices } from "@/services/services";



import { breadcrumbJsonLd } from "@/lib/seo";

import { useI18n } from "@/hooks/use-i18n";

export default function Services() {
  const { t } = useI18n();

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadServices = async () => {
      try {
        const data = await getServices();
        setServices(data);
      } catch (err) {
        console.error("Failed to load services:", err);
        setError("Failed to load services.");
      } finally {
        setLoading(false);
      }
    };

    loadServices();
  }, []);

  const dynamicServices = services.map((service) => {
  const frontendService = specialties.find(
    (specialty) => specialty.slug === service.slug
  );

  return {
    ...frontendService,
    ...service,
  };
});

  return (
    <main>
      <Seo
        title={t("pages.services.title")}
        description={t("pages.services.description")}
        path="/services"
        jsonLd={breadcrumbJsonLd([
          {
            name: t("common.servicesCrumbs"),
            path: "/services",
          },
        ])}
      />

      <PageHero
        eyebrow={t("common.servicesCrumbs")}
        title={t("pages.services.title")}
        description={t("pages.services.description")}
        crumbs={[{ label: t("common.servicesCrumbs") }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          {loading && (
            <p className="text-center text-muted-foreground">
              Loading services...
            </p>
          )}

          {error && (
            <p className="text-center text-destructive">
              {error}
            </p>
          )}

          {!loading && !error && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dynamicServices.map((s, i) => (
                <Reveal key={s.slug} delay={i * 0.06}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5"
                  >
                    <img
                      src={s.image}
                      alt={s.image_alt || s.imageAlt}
                      width="640"
                      height="360"
                      className="aspect-[16/9] w-full object-cover"
                    />

                    <div className="flex flex-1 flex-col p-7">
                      <span
                        className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.bg} ${s.accent}`}
                      >
                        {s.icon && (
                            <s.icon
                               className="h-5 w-5"
                               strokeWidth={1.6}
                              />
                            )}
                      </span>

                      <h2 className="mt-5 font-heading text-2xl font-semibold text-foreground">
                        {s.title}
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                        {s.short_description}
                      </p>

                      <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                        {t("common.readAboutThisService")}

                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}