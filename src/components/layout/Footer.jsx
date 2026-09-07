import React from "react";
import { Link } from "@/i18n/navigation";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";
import { footerColumns, hospital, legalLinks } from "@/data/site";
import { useI18n } from "@/hooks/use-i18n";

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="relative bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5" aria-label="Ummat International Hospital home">
              <img
                src="/images/uih-logo-mark.png"
                alt="Ummat International Hospital logo"
                width="36"
                height="36"
                className="h-9 w-9 rounded-full object-cover"
              />
              <div className="leading-none">
                <span className="font-heading text-lg font-semibold block">Ummat</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-background/50">International Hospital</span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-background/60 leading-relaxed">
              {t("common.footerDesc")}
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-background/70">
              <p className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> {hospital.address}</p>
              <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-primary shrink-0" /> {hospital.phone}</p>
              <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary shrink-0" /> {hospital.email}</p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label={t("common.socialLabel")} className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-primary hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {footerColumns.map((col) => (
              <div key={col.i18nKey || col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">{t(col.i18nKey || col.title)}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link to={l.to} className="group inline-flex items-center gap-1 text-sm text-background/75 hover:text-primary transition-colors">
                        {t(l.i18nKey || l.label)}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pulse-line opacity-30" />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">{t("common.copyright")}</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((l) => (
              <Link key={l.label} to={l.to} className="text-xs text-background/50 hover:text-background/80 transition-colors">
                {t(l.i18nKey || l.label)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
