import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FlaskConical, Microscope, BookOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";

const programs = [
  { icon: FlaskConical, label: "Clinical Research", n: "12", sub: "active programs" },
  { icon: Microscope, label: "Practice studies", n: "8", sub: "ongoing studies" },
  { icon: BookOpen, label: "Publications", n: "30+", sub: "peer-reviewed" },
];

export default function ResearchInnovation() {
  return (
    <section id="research" className="relative py-24 lg:py-32 overflow-hidden bg-foreground text-background">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[400px] rounded-full bg-accent/15 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <div>
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              Research
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-balance">
              Studies that should help the next patient
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 max-w-lg text-background/70 text-pretty">
                UIH supports clinical research, careful review of how we work, and training for doctors. The point is better care here in Kabul, not a brochure.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8">
                <Button asChild variant="secondary" size="lg" className="rounded-full px-7 bg-background text-foreground hover:bg-background/90">
                  <Link to="/research">Read about research <ArrowRight className="ml-1.5 h-4 w-4" /></Link>
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            {programs.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-3xl border border-background/15 bg-background/5 p-6 backdrop-blur-sm"
              >
                <p.icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                <p className="mt-6 font-heading text-4xl font-semibold text-background">{p.n}</p>
                <p className="mt-1 text-sm font-medium text-background">{p.label}</p>
                <p className="text-xs text-background/50">{p.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}