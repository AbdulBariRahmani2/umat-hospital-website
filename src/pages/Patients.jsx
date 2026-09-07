import { Link } from "@/i18n/navigation";
import { ArrowRight, ClipboardList, Clock, ShieldCheck, FileText, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { patientGuides } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

const icons = {
  "before-your-visit": ClipboardList,
  "visiting-hours": Clock,
  "patient-rights": ShieldCheck,
  "medical-records": FileText,
  billing: Wallet,
};

const patientGuideTitleKey = {
  "before-your-visit": "common.beforeVisit",
  "visiting-hours": "common.visitingHours",
  "patient-rights": "common.patientRights",
  "medical-records": "common.medicalRecords",
  billing: "common.billingInfo",
};

const patientGuideDescKey = {
  "before-your-visit": "common.beforeVisitDesc",
  "visiting-hours": "common.visitingHoursDesc",
  "patient-rights": "common.patientRightsDesc",
  "medical-records": "common.medicalRecordsDesc",
  billing: "common.billingInfoDesc",
};

export default function Patients() {
  const { t } = useI18n();
  return (
    <main>
      <Seo
        title={t("pages.patients.title")}
        description={t("pages.patients.description")}
        path="/patients"
        jsonLd={breadcrumbJsonLd([{ name: t("common.patientsCrumbs"), path: "/patients" }])}
      />
      <PageHero
        eyebrow={t("common.patientsAndVisitorsPage")}
        title={t("pages.patients.title")}
        description={t("pages.patients.description")}
        crumbs={[{ label: t("common.patientsCrumbs") }]}
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
                      <h2 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">{t(patientGuideTitleKey[guide.id] || guide.title)}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{t(patientGuideDescKey[guide.id] || guide.desc)}</p>
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
                <h2 className="font-heading text-2xl font-semibold">{t("common.readyToSchedule")}</h2>
                <p className="mt-2 text-sm text-background/70">{t("common.scheduleDesc")}</p>
              </div>
              <Button asChild size="lg" className="rounded-full px-7">
                <Link to="/appointment">
                  {t("common.bookAppointmentBtn")} <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
