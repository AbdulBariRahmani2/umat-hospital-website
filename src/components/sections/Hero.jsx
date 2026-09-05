import React from "react";
import { motion } from "framer-motion";
import { Search, CalendarPlus, Siren, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/Reveal";

const heroImg = "https://media.base44.com/images/public/6a9a40678987c8c77881f46a/9f3cc1f0b_generated_09d1a488.jpg";

const quickActions = [
  { icon: Search, label: "Find a Doctor", desc: "Search by specialty or name", href: "#doctors" },
  { icon: CalendarPlus, label: "Book Appointment", desc: "Request a consultation", href: "#appointment" },
  { icon: Siren, label: "Emergency Services", desc: "24/7 urgent care", href: "#contact", urgent: true },
];

export default function Hero() {
  return (
    <section className="relative pt-32 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* ambient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -right-32 h-[520px] w-[520px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-40 -left-40 h-[460px] w-[460px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left — headline */}
          <div className="lg:col-span-7">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                Your Health, Our Priority
              </span>
            </Reveal>

            <Reveal delay={0.08} as="h1" className="mt-6 font-heading text-[2.75rem] sm:text-5xl lg:text-[4.25rem] leading-[1.05] font-semibold tracking-tight text-foreground text-balance">
              The Future of
              <br className="hidden sm:block" /> Specialized Care
              <span className="block text-primary italic font-normal">in Kabul</span>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
                Ummat International Hospital is a physician-led tertiary care institution — uniting neuroscience,
                surgery, cancer care, and advanced diagnostics with a patient-centered approach.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Button asChild size="lg" className="rounded-full px-7 shadow-md">
                  <a href="#appointment">Book Appointment <ArrowRight className="ml-1.5 h-4 w-4" /></a>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <a href="#specialties">Explore Specialties</a>
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
                    <span className="font-semibold text-foreground">Trusted</span> by 10,000+ patients
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right — quick action console */}
          <div className="lg:col-span-5">
            <Reveal delay={0.2} className="relative">
              <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-foreground/10 ring-1 ring-border/60">
                <Image
                  src={heroImg}
                  alt="Ummat International Hospital facility at golden hour"
                  className="aspect-[4/5] w-full object-cover"
                  fittingType="fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="font-heading text-2xl font-semibold text-white">Darulaman Road, Kabul</p>
                  <p className="text-sm text-white/80">Next to National Museum of Afghanistan</p>
                </div>
              </div>

              {/* Floating quick actions */}
              <div className="mt-5 grid gap-3">
                {quickActions.map((a, i) => (
                  <motion.a
                    key={a.label}
                    href={a.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className={`group glass-slab flex items-center gap-4 rounded-2xl border border-border/60 p-4 shadow-lg shadow-foreground/5 transition-all hover:shadow-xl hover:-translate-y-0.5 ${
                      a.urgent ? "hover:border-destructive/40" : "hover:border-primary/40"
                    }`}
                  >
                    <span
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors ${
                        a.urgent ? "bg-destructive/10 text-destructive" : "bg-primary/10 text-primary"
                      }`}
                    >
                      <a.icon className="h-5 w-5" />
                    </span>
                    <span className="flex-1">
                      <span className="block text-sm font-semibold text-foreground">{a.label}</span>
                      <span className="block text-xs text-muted-foreground">{a.desc}</span>
                    </span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </motion.a>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}