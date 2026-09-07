import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { specialties } from "@/data/specialties";
import { useI18n } from "@/hooks/use-i18n";

const featured = specialties.filter((s) => s.featured);

export default function FeaturedSpecialties() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t("common.servicesInKabul")}
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {t("common.fourMainServices")}
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-md text-muted-foreground text-pretty">
              {t("common.servicesDesc")}
            </p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.08}>
              <Link
                to={`/services/${s.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5"
              >
                <img src={s.image} alt={s.imageAlt} width="480" height="270" loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="flex flex-1 flex-col p-7">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.bg} ${s.accent} transition-transform duration-300 group-hover:scale-110`}>
                    <s.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{s.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    {t("common.readMore")}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
