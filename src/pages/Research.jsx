import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Microscope, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { researchPrograms } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

const icons = [FlaskConical, Microscope, BookOpen];

export default function Research() {
  const { t } = useI18n();
  return (
    <main>
      <Seo
        title={t("pages.research.title")}
        description={t("pages.research.description")}
        path="/research"
        jsonLd={breadcrumbJsonLd([{ name: t("researchCrumbs"), path: "/research" }])}
      />
      <PageHero
        eyebrow={t("researchCrumbs")}
        title={t("pages.research.title")}
        description={t("pages.research.description")}
        crumbs={[{ label: t("researchCrumbs") }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {researchPrograms.map((p, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <article className="h-full rounded-3xl border border-border/70 bg-card p-8">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                    <p className="mt-6 font-heading text-4xl font-semibold text-foreground">{p.n}</p>
                    <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">{p.title}</h2>
                    <p className="text-xs text-muted-foreground">{p.sub}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-16 max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-foreground">{t("common.readAboutResearch")}</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {t("common.clinicianInterest")}
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full px-7">
              <Link to="/contact">
                {t("common.contactOffice")} <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
