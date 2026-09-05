import { MapPin, Phone, Mail, Clock } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { hospital } from "@/data/site";

const contactItems = [
  { icon: MapPin, label: "Address", value: hospital.address },
  { icon: Phone, label: "Phone", value: hospital.phone },
  { icon: Mail, label: "Email", value: hospital.email },
  { icon: Clock, label: "Hours", value: hospital.hours },
];

export default function Contact() {
  return (
    <main>
      <PageHero
        eyebrow="Contact & Location"
        title={<>Find us, <span className="italic text-primary">reach</span> us</>}
        description="Located on Darulaman Road in Kabul, UIH is accessible to patients, families, and international visitors."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="space-y-3">
              {contactItems.map((c, i) => (
                <Reveal key={c.label} delay={i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{c.label}</p>
                      <p className="mt-0.5 text-foreground">{c.value}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={0.3}>
                <div className="mt-2 overflow-hidden rounded-2xl border border-border/70 h-72 bg-secondary/60">
                  <iframe
                    title="UIH location"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=69.1%2C34.5%2C69.2%2C34.55&layer=mapnik&marker=34.5228%2C69.1450"
                    className="h-full w-full grayscale-[0.3]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-border/70 bg-card p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-semibold text-foreground">Emergency & general enquiries</h2>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  For life-threatening symptoms, come directly to the Emergency Department — it is open 24 hours a day.
                  For appointments, referrals, records, or general questions, use the appointment form or the contact
                  details on this page.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Phone and email will be published here as soon as they are confirmed.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
