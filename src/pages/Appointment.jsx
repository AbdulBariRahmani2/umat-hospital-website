import PageHero from "@/components/layout/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
import Reveal from "@/components/Reveal";

export default function Appointment() {
  return (
    <main>
      <PageHero
        eyebrow="Appointments"
        title={<>Request a consultation with our <span className="italic text-primary">specialists</span></>}
        description="Tell us who you would like to see and a preferred date. A member of the patient services team will confirm your appointment."
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
