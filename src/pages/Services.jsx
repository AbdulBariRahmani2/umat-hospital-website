import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { specialties } from "@/data/specialties";

export default function Services() {
  return (
    <main>
      <PageHero
        eyebrow="Patient Care"
        title={<>Specialized medicine, <span className="italic text-primary">unified</span> under one roof</>}
        description="Four pillars of clinical excellence — plus 24/7 emergency care — each led by experienced specialists and supported by advanced facilities."
        crumbs={[{ label: "Patient Care" }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {specialties.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.06}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group relative flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${s.bg} ${s.accent} transition-transform duration-300 group-hover:scale-110`}>
                    <s.icon className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                  <h2 className="mt-6 font-heading text-2xl font-semibold text-foreground">{s.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">{s.desc}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                    View service
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
