import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHero from "@/components/layout/PageHero";
import WhyUIH from "@/components/sections/WhyUIH";
import Reveal from "@/components/Reveal";
import { leadership, facilities } from "@/data/site";

export default function About() {
  return (
    <main>
      <PageHero
        eyebrow="About UIH"
        title={<>A physician-led hospital built for <span className="italic text-primary">Kabul</span></>}
        description="Founded in 2026, Ummat International Hospital is a tertiary care institution where experienced physicians lead clinical decisions — and every patient is treated as a person, not a procedure."
        crumbs={[{ label: "About" }]}
      />

      <WhyUIH />

      <section id="leadership" className="relative py-24 lg:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Leadership
          </Reveal>
          <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            The people guiding our <span className="italic text-primary">standard</span>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {leadership.map((person, i) => (
              <Reveal key={person.role} delay={i * 0.08}>
                <div className="h-full rounded-3xl border border-border/70 bg-card p-7">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 font-heading text-lg font-semibold text-primary">
                    UIH
                  </div>
                  <h3 className="mt-6 font-heading text-xl font-semibold text-foreground">{person.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{person.name}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{person.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="relative py-24 lg:py-32 bg-secondary/40 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Facilities
          </Reveal>
          <Reveal as="h2" delay={0.06} className="mt-3 max-w-2xl font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            A campus designed around <span className="italic text-primary">care</span>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {facilities.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-3xl border border-border/70 bg-card p-7">
                  <h3 className="font-heading text-2xl font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="quality" className="relative py-24 lg:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="max-w-3xl">
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Quality & Safety
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              International standards, practiced <span className="italic text-primary">daily</span>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
                From admission to discharge, UIH protocols are built on continuous audit, infection control, and a culture
                that does not compromise on patient safety. Clinical teams review outcomes, escalate concerns early, and
                treat every near-miss as a chance to improve.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="careers" className="relative py-24 lg:py-32 bg-secondary/40 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div className="max-w-2xl">
              <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
                Careers
              </Reveal>
              <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
                Join a team still being <span className="italic text-primary">built</span> with care
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-muted-foreground text-pretty">
                  We welcome physicians, nurses, and allied professionals who want to help establish a tertiary hospital
                  worthy of the patients it serves. Enquiries can be sent through our contact team.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.18}>
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/contact">
                  Contact us <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
