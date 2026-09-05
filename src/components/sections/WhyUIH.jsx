import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HeartHandshake, Microscope, Award, Users, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";

const values = [
  {
    icon: Award,
    title: "High clinical standards",
    desc: "We follow proven practice and keep training our staff. Each department is expected to review its results and fix problems when they show up.",
  },
  {
    icon: HeartHandshake,
    title: "The patient comes first",
    desc: "We start with the person in the room. You should leave knowing what is wrong, what we suggest, and why. Dignity is not optional.",
  },
  {
    icon: Microscope,
    title: "Tests and surgery that match the case",
    desc: "We use the imaging and operations that the case needs, not the ones that sound impressive. New methods are used when the evidence supports them.",
  },
  {
    icon: Users,
    title: "Teams that talk to each other",
    desc: "Neurology, surgery, cancer, and diagnostics sit in the same hospital so your file does not get lost between buildings.",
  },
];

export default function WhyUIH() {
  const [open, setOpen] = useState(0);

  return (
    <section id="why" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — accordion */}
          <div>
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Why Ummat International Hospital
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              Doctors lead the work. You are not a number.
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-muted-foreground text-pretty max-w-lg">
                UIH opened in 2026 as a tertiary hospital in Kabul. Senior doctors make the clinical decisions. We treat the person in front of us, not only the scan or the operation.
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {values.map((v, i) => {
                const active = open === i;
                return (
                  <Reveal key={v.title} delay={0.1 + i * 0.06}>
                    <div
                      className={`rounded-2xl border transition-colors ${
                        active ? "border-primary/40 bg-card shadow-md" : "border-border/70 bg-card/50 hover:border-border"
                      }`}
                    >
                      <button
                        onClick={() => setOpen(i)}
                        className="flex w-full items-center gap-4 p-5 text-left"
                      >
                        <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${active ? "bg-primary text-primary-foreground" : "bg-primary/10 text-primary"}`}>
                          <v.icon className="h-5 w-5" strokeWidth={1.6} />
                        </span>
                        <span className="flex-1 font-heading text-xl font-semibold text-foreground">{v.title}</span>
                        <ChevronDown className={`h-5 w-5 text-muted-foreground transition-transform duration-300 ${active ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {active && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="overflow-hidden"
                          >
                            <p className="px-5 pb-5 pl-20 text-muted-foreground leading-relaxed">{v.desc}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Right — stat panel */}
          <Reveal delay={0.15} className="lg:sticky lg:top-28">
            <div className="relative overflow-hidden rounded-[2rem] bg-foreground p-8 lg:p-10 text-background shadow-2xl">
              <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative">
                <ShieldCheck className="h-10 w-10 text-primary" strokeWidth={1.5} />
                <h3 className="mt-6 font-heading text-3xl font-semibold leading-tight">
                  Safety checks from admission to discharge
                </h3>
                <p className="mt-4 text-background/70 leading-relaxed">
                  We follow written protocols, infection control, and regular audit. If something nearly goes wrong, we look at it. Patient safety is not a slogan on the wall.
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  {[
                    { n: "10k+", l: "Patients served" },
                    { n: "50+", l: "Specialist physicians" },
                    { n: "4", l: "Core specialties" },
                    { n: "24/7", l: "Emergency care" },
                  ].map((s) => (
                    <div key={s.l} className="border-t border-background/15 pt-4">
                      <p className="font-heading text-4xl font-semibold text-primary">{s.n}</p>
                      <p className="mt-1 text-sm text-background/60">{s.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}