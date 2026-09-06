import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const heroImg = "/images/hospital-entrance-kabul.png";

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[460px] w-[460px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Hospital in Kabul
              </span>
            </Reveal>

            <Reveal delay={0.08} as="h1" className="mt-6 font-heading text-[2.75rem] sm:text-5xl lg:text-[4.25rem] leading-[1.05] font-semibold tracking-tight text-foreground text-balance">
              Ummat International
              <br className="hidden sm:block" /> Hospital in Kabul
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                A physician-led hospital on Darulaman Road for neuroscience, surgery, cancer care, hospital tests, and emergency cases. Doctors make the clinical calls. You and your family get a plan you can follow.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-full px-7 shadow-md">
                  <Link to="/appointment">Book a visit <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <Link to="/services">See our services</Link>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.32}>
              <div className="mt-10 flex items-center gap-5">
                <div className="flex -space-x-3">
                  {[0, 1, 2, 3].map((i) => (
                    <span
                      key={i}
                      className="h-10 w-10 rounded-full ring-2 ring-background bg-gradient-to-br from-primary/30 to-accent/30 border border-border"
                    />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="mt-1 text-muted-foreground">
                    <span className="font-semibold text-foreground">Seen</span> by more than 10,000 patients
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2}>
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-foreground/10 ring-1 ring-border/60">
                <img
                  src={heroImg}
                  alt="Entrance to Ummat International Hospital on Darulaman Road in Kabul"
                  width="720"
                  height="900"
                  className="aspect-[4/5] w-full object-cover"
                  fetchPriority="high"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-heading text-2xl font-semibold text-white">Darulaman Road, Kabul</p>
                  <p className="text-sm text-white/80">Next to National Museum of Afghanistan</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}