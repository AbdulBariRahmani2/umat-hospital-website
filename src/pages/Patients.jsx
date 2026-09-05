import { Link } from "react-router-dom";
import { ArrowRight, ClipboardList, Clock, ShieldCheck, FileText, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { patientGuides } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

const icons = {
  "before-your-visit": ClipboardList,
  "visiting-hours": Clock,
  "patient-rights": ShieldCheck,
  "medical-records": FileText,
  billing: Wallet,
};

export default function Patients() {
  return (
    <main>
      <Seo
        title="Patients and Visitors | Visiting Hours at UIH Kabul"
        description="Visiting hours, what to bring, patient rights, medical records, and bills at Ummat International Hospital on Darulaman Road in Kabul."
        path="/patients"
        jsonLd={breadcrumbJsonLd([{ name: "Patients", path: "/patients" }])}
      />
      <PageHero
        eyebrow="Patients and visitors"
        title="If you are coming to the hospital"
        description="Registration, visiting hours, records, bills, and your rights as a patient at Ummat International Hospital in Kabul."
        crumbs={[{ label: "Patients and Visitors" }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 space-y-8">
          {patientGuides.map((guide, i) => {
            const Icon = icons[guide.id] || FileText;
            return (
              <Reveal key={guide.id} delay={i * 0.05}>
                <article
                  id={guide.id}
                  className="scroll-mt-28 rounded-[2rem] border border-border/70 bg-card p-8 lg:p-10"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">{guide.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{guide.desc}</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {guide.points.map((point) => (
                      <li key={point} className="text-muted-foreground leading-relaxed pl-4 border-l-2 border-primary/20">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 rounded-[2rem] bg-foreground p-8 text-background">
              <div>
                <h2 className="font-heading text-2xl font-semibold">Ready to schedule a visit?</h2>
                <p className="mt-2 text-sm text-background/70">Request an appointment and our team will confirm a time with you.</p>
              </div>
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/appointment">
                  Book appointment <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
