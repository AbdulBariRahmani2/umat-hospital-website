import { Link, useParams } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { getDoctor } from "@/data/doctors";
import PageNotFound from "@/lib/PageNotFound";
import { absUrl, breadcrumbJsonLd, getSiteUrl } from "@/lib/seo";

export default function DoctorDetail() {
  const { slug } = useParams();
  const doctor = getDoctor(slug);

  if (!doctor) return <PageNotFound />;

  const path = `/doctors/${doctor.slug}`;

  return (
    <main>
      <Seo
        title={doctor.seoTitle}
        description={doctor.seoDescription}
        path={path}
        image={doctor.img}
        imageAlt={`${doctor.name}, ${doctor.role} at Ummat International Hospital in Kabul`}
        jsonLd={[
          breadcrumbJsonLd([
            { name: "Doctors", path: "/doctors" },
            { name: doctor.name, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Physician",
            name: doctor.name,
            url: absUrl(path),
            image: doctor.img,
            jobTitle: doctor.role,
            medicalSpecialty: doctor.dept,
            worksFor: { "@id": `${getSiteUrl()}/#hospital` },
            knowsLanguage: doctor.languages,
            description: doctor.bio,
          },
        ]}
      />
      <PageHero
        eyebrow={doctor.dept}
        title={doctor.name}
        description={`${doctor.role} at Ummat International Hospital in Kabul`}
        crumbs={[{ label: "Doctors", to: "/doctors" }, { label: doctor.name }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <div className="overflow-hidden rounded-[2rem] border border-border/70">
                <Image src={doctor.img} alt={`${doctor.name}, ${doctor.role} at Ummat International Hospital`} className="aspect-[3/4] w-full object-cover" fittingType="fill" />
              </div>
            </Reveal>

            <div className="lg:col-span-7">
              <Reveal as="p" className="text-muted-foreground leading-relaxed text-pretty">
                {doctor.bio}
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-5 text-sm text-muted-foreground">{doctor.education}</p>
              </Reveal>

              <div className="mt-8 flex flex-wrap gap-2">
                {doctor.tags.map((t) => (
                  <span key={t} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-medium text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <Reveal delay={0.12} className="mt-10 rounded-3xl border border-border/70 bg-card p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Languages</p>
                <p className="mt-2 text-foreground">{doctor.languages.join(", ")}</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-muted-foreground">Department</p>
                <Link to={`/services/${doctor.deptSlug}`} className="mt-2 inline-block text-primary hover:underline">
                  {doctor.dept}
                </Link>
              </Reveal>

              <Reveal delay={0.18} className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link to={`/appointment?dept=${encodeURIComponent(doctor.dept)}&doctor=${encodeURIComponent(doctor.name)}`}>
                    Book appointment <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-7">
                  <Link to="/doctors">All doctors</Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
