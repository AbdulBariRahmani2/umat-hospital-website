import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { newsItems } from "@/data/articles";

export default function News() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Hospital News & Events
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              What's happening at <span className="italic text-primary">UIH</span>
            </Reveal>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {newsItems.map((n, i) => (
            <Reveal key={n.slug} delay={i * 0.08}>
              <Link to={`/news/${n.slug}`} className="group flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5">
                <div className="flex items-center justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <n.icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{n.date}</span>
                </div>
                <span className="mt-6 text-[11px] font-semibold uppercase tracking-wide text-accent">{n.tag}</span>
                <h3 className="mt-2 font-heading text-2xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                  {n.title}
                </h3>
                <span className="mt-auto pt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Read story
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
