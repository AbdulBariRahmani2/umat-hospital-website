import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search } from "lucide-react";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { doctors } from "@/data/doctors";
import { specialties } from "@/data/specialties";
import { breadcrumbJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

export default function Doctors() {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [dept, setDept] = useState(searchParams.get("specialty") || "all");
  const { t } = useI18n();

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return doctors.filter((d) => {
      const matchesDept = dept === "all" || d.deptSlug === dept;
      const matchesQuery =
        !q ||
        d.name.toLowerCase().includes(q) ||
        d.role.toLowerCase().includes(q) ||
        d.dept.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q));
      return matchesDept && matchesQuery;
    });
  }, [query, dept]);

  return (
    <main>
      <Seo
        title={t("pages.doctors.title")}
        description={t("pages.doctors.description")}
        path="/doctors"
        jsonLd={breadcrumbJsonLd([{ name: t("common.doctorsCrumbs"), path: "/doctors" }])}
      />
      <PageHero
        eyebrow={t("common.findDoctorKabul")}
        title={t("pages.doctors.title")}
        description={t("pages.doctors.description")}
        crumbs={[{ label: t("common.doctorsCrumbs") }]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row gap-4 mb-10">
            <label className="relative flex-1">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t("common.searchPlaceholder")}
                className="h-12 w-full rounded-full border border-border bg-card pl-11 pr-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-ring"
              />
            </label>
            <select
              value={dept}
              onChange={(e) => setDept(e.target.value)}
              className="h-12 rounded-full border border-border bg-card px-4 text-sm shadow-sm outline-none focus:ring-2 focus:ring-ring lg:w-64"
            >
              <option value="all">{t("common.all")}</option>
              {specialties.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="rounded-3xl border border-border/70 bg-card p-10 text-center text-muted-foreground">
              {t("common.noResults")}
            </p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {filtered.map((d, i) => (
                <Reveal key={d.slug} delay={i * 0.06}>
                  <Link
                    to={`/doctors/${d.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-foreground/5"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={d.img}
                        alt={d.name}
                        className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        fittingType="fill"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
                      <span className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary backdrop-blur">
                        {d.dept}
                      </span>
                    </div>
                    <div className="p-5">
                      <h2 className="font-heading text-xl font-semibold text-foreground">{d.name}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{d.role}</p>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
