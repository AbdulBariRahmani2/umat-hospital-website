import { ChevronRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { useI18n } from "@/hooks/use-i18n";
import { Link } from "@/i18n/navigation";

export default function PageHero({ eyebrow, title, description = "", crumbs = [] }) {
  const { t } = useI18n();
  return (
    <section className="relative pt-32 lg:pt-36 pb-16 lg:pb-20 overflow-hidden bg-secondary/40">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -right-24 h-[380px] w-[380px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-20 -left-32 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {crumbs.length > 0 && (
          <Reveal>
            <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
              <Link to="/" className="hover:text-foreground transition-colors">
                {t("common.home")}
              </Link>
              {crumbs.map((c) => (
                <span key={c.label} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3.5 w-3.5 rtl:rotate-180" />
                  {c.to ? (
                    <Link to={c.to} className="hover:text-foreground transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                </span>
              ))}
            </nav>
          </Reveal>
        )}

        {eyebrow && (
          <Reveal as="p" className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            {eyebrow}
          </Reveal>
        )}
        <Reveal as="h1" delay={0.06} className="mt-3 max-w-4xl font-heading text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-foreground text-balance">
          {title}
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground text-pretty">{description}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
