import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, HeartHandshake, Microscope, Award, Users, ChevronDown } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/hooks/use-i18n";

const values = [
  {
    icon: Award,
    titleKey: "common.clinicalStandards",
    descKey: "common.clinicalStandards",
  },
  {
    icon: HeartHandshake,
    titleKey: "common.patientFirst",
    descKey: "common.dignityOptional",
  },
  {
    icon: Microscope,
    titleKey: "common.testsMatchCase",
    descKey: "common.testsMatchCase",
  },
  {
    icon: Users,
    titleKey: "common.teamsTalk",
    descKey: "common.teamsTalk",
  },
];

const stats = [
  { n: "10k+", lKey: "common.patientsServed" },
  { n: "50+", lKey: "common.specialistPhysicians" },
  { n: "4", lKey: "common.coreSpecialties" },
  { n: "24/7", lKey: "common.emergencyCare" },
];

export default function WhyUIH() {
  const [open, setOpen] = useState(0);
  const { t } = useI18n();

  return (
    <section id="why" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          {/* Left — accordion */}
          <div>
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t("common.whyUIH")}
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {t("common.doctorsLead")}
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-muted-foreground text-pretty max-w-lg">
                {t("common.uiH2026")}
              </p>
            </Reveal>

            <div className="mt-10 space-y-3">
              {values.map((v, i) => {
                const active = open === i;
                return (
                  <Reveal key={v.titleKey} delay={0.1 + i * 0.06}>
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
                        <span className="flex-1 font-heading text-xl font-semibold text-foreground">{t(v.titleKey)}</span>
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
                            <p className="px-5 pb-5 pl-20 text-muted-foreground leading-relaxed">{t(v.descKey)}</p>
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
                  {t("common.safetyChecks")}
                </h3>
                <p className="mt-4 text-background/70 leading-relaxed">
                  {t("common.infectionsControl")} {t("common.speakUpEarly")}
                </p>

                <div className="mt-10 grid grid-cols-2 gap-6">
                  {stats.map((s) => (
                    <div key={s.lKey} className="border-t border-background/15 pt-4">
                      <p className="font-heading text-4xl font-semibold text-primary">{s.n}</p>
                      <p className="mt-1 text-sm text-background/60">{t(s.lKey)}</p>
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