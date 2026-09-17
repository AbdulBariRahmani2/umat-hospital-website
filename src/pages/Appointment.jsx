import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import AppointmentForm from "@/components/AppointmentForm";
import Reveal from "@/components/Reveal";
import { breadcrumbJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

export default function Appointment() {
  const { t } = useI18n();
  return (
    <main>
      <Seo
        title={t("pages.appointment.title")}
        description={t("pages.appointment.description")}
        path="/appointment"
        jsonLd={breadcrumbJsonLd([{ name: t("pages.appointment.title"), path: "/appointment" }])}
      />
      <PageHero
        eyebrow={t("appointmentCrumbs")}
        title={t("pages.appointment.title")}
        description={t("pages.appointment.description")}
        crumbs={[{ label: t("appointmentCrumbs") }]}
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
