import React from "react";
import { ClipboardList, Clock, ShieldCheck, FileText } from "lucide-react";
import Reveal from "@/components/Reveal";

const guides = [
  { icon: ClipboardList, title: "Before Your Visit", desc: "Registration, admission, and what to bring." },
  { icon: Clock, title: "Visiting Hours", desc: "Daily schedules and visitor guidelines." },
  { icon: ShieldCheck, title: "Patient Safety & Rights", desc: "Our commitment to your dignity and safety." },
  { icon: FileText, title: "Medical Records & Billing", desc: "Access records, discharge, and billing info." },
];

export default function PatientInfo() {
  return (
    <section id="patient-info" className="relative py-24 lg:py-32 bg-secondary/40">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="max-w-2xl mb-14">
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            Patients & Visitors
          </Reveal>
          <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
            Everything you need, <span className="italic text-primary">before</span> you arrive
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {guides.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <a href="#patient-info" className="group flex h-full flex-col rounded-3xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-foreground/5">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <g.icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-semibold text-foreground">{g.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{g.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}