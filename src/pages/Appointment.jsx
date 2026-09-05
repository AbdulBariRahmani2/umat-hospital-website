import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo";

export default function Appointment() {
  return (
    <main>
      <Seo
        title="Book a Hospital Appointment in Kabul | UIH"
        description="Request a clinic visit at Ummat International Hospital in Kabul. Choose a department and a preferred date. Patient services will confirm."
        path="/appointment"
        jsonLd={breadcrumbJsonLd([{ name: "Appointment", path: "/appointment" }])}
      />
      <PageHero
        eyebrow="Appointments"
        title="Book a hospital appointment in Kabul"
        description="Tell us who you would like to see and a date that works. Patient services will confirm the visit."
        crumbs={[{ label: "Appointment" }]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-10">
          <Reveal>
            <AppointmentForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
