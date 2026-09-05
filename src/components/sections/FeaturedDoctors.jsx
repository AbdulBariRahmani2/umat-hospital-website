import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";
import { doctors } from "@/data/doctors";

export default function FeaturedDoctors() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Meet Our Specialists
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Experienced physicians, <span className="italic text-primary">leading</span> your care
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <Link to="/doctors" className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors">
              View all doctors
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {doctors.map((d, i) => (
            <Reveal key={d.slug} delay={i * 0.08}>
              <Link to={`/doctors/${d.slug}`} className="group block overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-foreground/5">
                <div className="relative overflow-hidden">
                  <Image
                    src={d.img}
                    alt={d.name}
                    className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    fittingType="fill"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary backdrop-blur">
                    {d.dept}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{d.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{d.role}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {d.tags.map((t) => (
                      <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
