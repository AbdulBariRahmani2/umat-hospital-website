import { Link } from "react-router-dom";
import { ArrowRight, FlaskConical, Microscope, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { researchPrograms } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";

const icons = [FlaskConical, Microscope, BookOpen];

export default function Research() {
  return (
    <main>
      <Seo
        title="Clinical Research at Ummat International Hospital"
        description="Doctor-led clinical studies at UIH in Kabul. Stroke, surgery, and cancer research with ethics review and consent."
        path="/research"
        jsonLd={breadcrumbJsonLd([{ name: "Research", path: "/research" }])}
      />
      <PageHero
        eyebrow="Research"
        title="Clinical research at UIH"
        description="We support studies led by practicing doctors, plus training. Patients who are invited to a study are always asked for consent."
        crumbs={[{ label: "Research" }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-3 gap-5">
            {researchPrograms.map((p, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <article className="h-full rounded-3xl border border-border/70 bg-card p-8">
                    <Icon className="h-8 w-8 text-primary" strokeWidth={1.5} />
                    <p className="mt-6 font-heading text-4xl font-semibold text-foreground">{p.n}</p>
                    <h2 className="mt-1 font-heading text-xl font-semibold text-foreground">{p.title}</h2>
                    <p className="text-xs text-muted-foreground">{p.sub}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-16 max-w-3xl">
            <h2 className="font-heading text-3xl font-semibold text-foreground">How a study reaches a patient</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Studies at UIH are proposed by practicing physicians, reviewed for ethics and feasibility, and designed so
              participation never replaces standard care. Findings are shared through teaching rounds and, where
              appropriate, peer-reviewed publication.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you are a clinician interested in collaboration, or a patient who has been invited to a study, our
              research office can explain the process in plain language.
            </p>
            <Button asChild size="lg" className="mt-8 rounded-full px-7">
              <Link to="/contact">
                Contact the research office <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
