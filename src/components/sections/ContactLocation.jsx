import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/hooks/use-i18n";

const contactItems = [
  { icon: MapPin, labelKey: "common.address", valueKey: "common.hospitalAddress" },
  { icon: Phone, labelKey: "common.phone", valueKey: "common.hospitalPhone" },
  { icon: Mail, labelKey: "common.email", valueKey: "common.hospitalEmail" },
  { icon: Clock, labelKey: "common.hours", valueKey: "common.hospitalHours" },
];

export default function ContactLocation() {
  const [sent, setSent] = useState(false);
  const { t } = useI18n();

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    e.target.reset();
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left — info + map */}
          <div>
            <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t("common.contactLocation")}
            </Reveal>
            <Reveal as="h2" delay={0.06} className="mt-3 font-heading text-4xl lg:text-5xl font-semibold tracking-tight text-foreground text-balance">
              {t("common.findUsReachUs")}
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-muted-foreground max-w-md text-pretty">
                {t("common.comeSeeUs")}
              </p>
            </Reveal>

            <div className="mt-8 space-y-3">
              {contactItems.map((c, i) => (
                <Reveal key={c.labelKey} delay={0.1 + i * 0.06}>
                  <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <c.icon className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{t(c.labelKey)}</p>
                      <p className="mt-0.5 text-foreground">{t(c.valueKey)}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.3}>
              <div className="mt-5 overflow-hidden rounded-2xl border border-border/70 h-56 bg-secondary/60">
                <iframe
                  title="UIH location"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=69.1%2C34.5%2C69.2%2C34.55&layer=mapnik&marker=34.5228%2C69.1450"
                  className="h-full w-full grayscale-[0.3]"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          {/* Right — contact form */}
          <Reveal delay={0.15}>
            <div id="appointment" className="relative scroll-mt-24 rounded-[2rem] border border-border/70 bg-card p-8 lg:p-10 shadow-xl shadow-foreground/5">
              <h3 className="font-heading text-2xl lg:text-3xl font-semibold text-foreground">{t("pages.appointment.title")}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {t("common.submitConfirm")}
              </p>

              <form onSubmit={onSubmit} className="mt-7 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">{t("forms.fullName")}</Label>
                    <Input id="name" name="name" placeholder={t("forms.namePlaceholder")} required />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">{t("forms.phone")}</Label>
                    <Input id="phone" name="phone" placeholder={t("forms.phonePlaceholder")} required />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">{t("forms.email")}</Label>
                  <Input id="email" type="email" name="email" placeholder={t("forms.emailPlaceholder")} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="dept">{t("forms.department")}</Label>
                    <Input id="dept" name="dept" placeholder={t("common.selectADepartment")} />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="date">{t("forms.preferredDate")}</Label>
                    <Input id="date" type="date" name="date" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="message">{t("forms.reasonForVisit")}</Label>
                  <Textarea id="message" name="message" placeholder={t("forms.reasonPlaceholder")} rows={3} />
                </div>
                <label className="flex items-start gap-3 text-sm text-muted-foreground">
                  <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary" />
                  <span>{t("forms.consent")}</span>
                </label>
                <Button type="submit" size="lg" className="w-full rounded-full shadow-md">
                  {sent ? (
                    <><CheckCircle2 className="mr-2 h-5 w-5" /> {t("buttons.requestReceived")}</>
                  ) : (
                    <>{t("buttons.submit")} <Send className="ml-2 h-4 w-4" /></>
                  )}
                </Button>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center text-sm font-medium text-primary"
                  >
                    {t("buttons.thankYou")}
                  </motion.p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}