import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import WhyUIH from "@/components/sections/WhyUIH";
import Reveal from "@/components/Reveal";
import { leadership, facilities } from "@/data/site";
import { breadcrumbJsonLd, hospitalJsonLd } from "@/lib/seo";

export default function About() {
  return (
    <main>
      <Seo
        title="About Ummat International Hospital in Kabul"
        description="UIH opened in 2026 on Darulaman Road in Kabul. A physician-led tertiary hospital for neuroscience, surgery, cancer care, and diagnostics."
        path="/about"
        jsonLd={[hospitalJsonLd(), breadcrumbJsonLd([{ name: "About", path: "/about" }])]}
      />
      <PageHero
        eyebrow="About UIH"
        title="About Ummat International Hospital"
        description="We opened in 2026 on Darulaman Road, next to the National Museum. Senior doctors lead the clinical work. Patients are treated as people, not as a slot on a list."
        crumbs={[{ label: "About" }]}
      />

      <WhyUIH />

      <section id="leadership" className="relative py-24 lg:py-32 scroll-mt-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Leadership
          </Reveal>
          <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Who runs the hospital
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
            Rooms and wards on the Kabul campus
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
              Quality and safety
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Written rules, checked in daily work
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-muted-foreground leading-relaxed text-pretty">
                From admission to discharge we use infection control, audit, and a habit of speaking up early. Teams look at outcomes. A near miss is treated as a lesson, not something to hide.
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
                Work with us
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-5 text-muted-foreground text-pretty">
                  We welcome doctors, nurses, and other health staff who want to help build a tertiary hospital that Kabul can rely on. Write through the contact page.
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
