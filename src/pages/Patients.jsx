import { Link } from "@/i18n/navigation";

import {
  ArrowRight,
  ClipboardList,
  Clock,
  ShieldCheck,
  FileText,
  Wallet,
} from "lucide-react";

import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { patientGuides } from "@/data/site";
import { breadcrumbJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

/**
 * @type {Record<string, any>}
 */
const icons = {
  "before-your-visit": ClipboardList,
  "visiting-hours": Clock,
  "patient-rights": ShieldCheck,
  "medical-records": FileText,
  billing: Wallet,
};

/**
 * @type {Record<string, string>}
 */
const patientGuideTitleKey = {
  "before-your-visit": "common.beforeVisit",
  "visiting-hours": "common.visitingHours",
  "patient-rights": "common.patientRights",
  "medical-records": "common.medicalRecords",
  billing: "common.billingInfo",
};

/**
 * @type {Record<string, string>}
 */
const patientGuideDescKey = {
  "before-your-visit": "common.beforeVisitDesc",
  "visiting-hours": "common.visitingHoursDesc",
  "patient-rights": "common.patientRightsDesc",
  "medical-records": "common.medicalRecordsDesc",
  billing: "common.billingInfoDesc",
};

export default function Patients() {
  const { t } = useI18n();

  /**
   * Seo currently has an overly narrow inferred jsonLd type.
   * Keep the existing SEO data while avoiding the checkJs error.
   */
  const patientBreadcrumbJsonLd = /** @type {any} */ (
    breadcrumbJsonLd([
      {
        name: t("common.patientsCrumbs"),
        path: "/patients",
      },
    ])
  );

  return (
    <main>
      <Seo
        title={t("pages.patients.title")}
        description={t("pages.patients.description")}
        path="/patients"
        jsonLd={patientBreadcrumbJsonLd}
      />

      <PageHero
        eyebrow={t("common.patientsAndVisitorsPage")}
        title={t("pages.patients.title")}
        description={t("pages.patients.description")}
        crumbs={[
          {
            label: t("common.patientsCrumbs"),
          },
        ]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] space-y-8 px-6 lg:px-10">
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
                      <Icon
                        className="h-5 w-5"
                        strokeWidth={1.6}
                      />
                    </span>

                    <div>
                      <h2 className="font-heading text-2xl font-semibold text-foreground lg:text-3xl">
                        {t(
                          patientGuideTitleKey[guide.id] ||
                            guide.titleI18nKey
                        )}
                      </h2>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {t(
                          patientGuideDescKey[guide.id] ||
                            guide.descI18nKey
                        )}
                      </p>
                    </div>
                  </div>

                  <ul className="mt-6 space-y-3">
                    {guide.pointsI18nKeys.map((pointKey) => (
                      <li
                        key={pointKey}
                        className="border-l-2 border-primary/20 pl-4 leading-relaxed text-muted-foreground"
                      >
                        {t(pointKey)}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}

          <Reveal>
            <div className="flex flex-col gap-6 rounded-[2rem] bg-foreground p-8 text-background sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="font-heading text-2xl font-semibold">
                  {t("common.readyToSchedule")}
                </h2>

                <p className="mt-2 text-sm text-background/70">
                  {t("common.scheduleDesc")}
                </p>
              </div>

              <Link
                to="/appointment"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-primary px-7 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {t("common.bookAppointmentBtn")}
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}