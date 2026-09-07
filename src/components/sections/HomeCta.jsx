import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/Reveal";
import { hospital } from "@/data/site";
import { useI18n } from "@/hooks/use-i18n";

export default function HomeCta() {
  const { t } = useI18n();
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-foreground px-8 py-12 lg:px-14 lg:py-16 text-background">
            <div className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">{t("common.visitUIH")}</p>
                <h2 className="mt-3 font-heading text-3xl lg:text-5xl font-semibold tracking-tight text-balance">
                  {t("common.comeSeeUs")}
                </h2>
                <p className="mt-4 max-w-xl text-background/70 text-pretty">
                  {t("common.bookClinic")}
                </p>
                <div className="mt-6 space-y-2 text-sm text-background/70">
                  <p className="flex items-start gap-2.5">
                    <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
                    {hospital.address}
                  </p>
                  <p className="flex items-center gap-2.5">
                    <Phone className="h-4 w-4 text-primary shrink-0" />
                    {hospital.phone}. {t("common.emergencyOpen")}
                  </p>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link to="/appointment">
                    {t("common.bookAppointmentBtn")} <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="rounded-full px-7 bg-background text-foreground hover:bg-background/90">
                  <Link to="/contact">{t("common.contactLocation")}</Link>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
