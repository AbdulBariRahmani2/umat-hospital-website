import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Clock } from "lucide-react";
import Reveal from "@/components/Reveal";
import { insights } from "@/data/articles";

export default function HealthInsights() {
  const [feat, ...rest] = insights;
  return (
    <section className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Health advice
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Plain words from our doctors
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link to="/news" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              All articles
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <Reveal className="lg:col-span-7">
            <Link to={`/news/${feat.slug}`} className="group relative flex h-full flex-col justify-end overflow-hidden rounded-3xl border border-border/70 bg-card p-8 min-h-[420px]">
              <div className="pointer-events-none absolute inset-0 -z-0 opacity-90">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-accent/10 to-transparent" />
                <div className="absolute -top-10 -right-10 h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
              </div>
              <div className="relative">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary-foreground">
                  {feat.cat}
                </span>
                <h3 className="mt-5 font-heading text-3xl lg:text-4xl font-semibold leading-tight text-foreground text-balance">
                  {feat.title}
                </h3>
                <p className="mt-4 max-w-lg text-muted-foreground text-pretty">{feat.excerpt}</p>
                <div className="mt-6 flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {feat.read}</span>
                  <span>{feat.date}</span>
                </div>
              </div>
            </Link>
          </Reveal>

          <div className="lg:col-span-5 space-y-5">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={0.1 + i * 0.08}>
                <Link to={`/news/${a.slug}`} className="group flex gap-5 rounded-2xl border border-border/70 bg-card p-5 transition-all hover:border-primary/40 hover:shadow-md">
                  <div className="flex-1">
                    <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">{a.cat}</span>
                    <h3 className="mt-2 font-heading text-xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                    <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.read}</span>
                      <span>{a.date}</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
