import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import Faq from "@/components/sections/Faq";
import { faqs } from "@/data/faqs";
import { breadcrumbJsonLd, faqJsonLd, hospitalJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

export default function Contact() {
  const { t } = useI18n();

  const [contact, setContact] = useState({
    address: "",
    phone: "",
    email: "",
  });

  const [loadingContact, setLoadingContact] = useState(true);
  const [contactError, setContactError] = useState(false);

  useEffect(() => {
    const API_URL = "http://127.0.0.1:8000";

    console.log("Django URL:", API_URL);

    fetch(`${API_URL}/api/contact/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch contact information");
        }

        return response.json();
      })
      .then((data) => {
        console.log("Contact data from Django:", data);

        setContact(data);
        setLoadingContact(false);
      })
      .catch((error) => {
        console.error("Contact API error:", error);

        setContactError(true);
        setLoadingContact(false);
      });
  }, []);

  return (
    <main>
      <Seo
        title={t("pages.contact.title")}
        description={t("pages.contact.description")}
        path="/contact"
        jsonLd={[
          hospitalJsonLd(),
          breadcrumbJsonLd([
            {
              name: t("pages.contact.title"),
              path: "/contact",
            },
          ]),
          faqJsonLd(faqs),
        ]}
      />

      <PageHero
        eyebrow={t("common.contactLocation")}
        title={t("pages.contact.title")}
        description={t("pages.contact.description")}
        crumbs={[]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Contact Information */}
            <div className="space-y-3">

              {/* Address */}
              <Reveal>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <MapPin
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("common.address")}
                    </p>

                    <p className="mt-0.5 text-foreground">
                      {loadingContact
                        ? "Loading..."
                        : contactError
                        ? "Unable to load address"
                        : contact.address}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Phone */}
              <Reveal delay={0.06}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Phone
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("common.phone")}
                    </p>

                    <p className="mt-0.5 text-foreground">
                      {loadingContact
                        ? "Loading..."
                        : contactError
                        ? "Unable to load phone"
                        : contact.phone}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Email */}
              <Reveal delay={0.12}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Mail
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("common.email")}
                    </p>

                    <p className="mt-0.5 text-foreground">
                      {loadingContact
                        ? "Loading..."
                        : contactError
                        ? "Unable to load email"
                        : contact.email}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Hospital Hours */}
              <Reveal delay={0.18}>
                <div className="flex items-start gap-4 rounded-2xl border border-border/70 bg-card p-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Clock
                      className="h-5 w-5"
                      strokeWidth={1.6}
                    />
                  </span>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {t("common.hours")}
                    </p>

                    <p className="mt-0.5 text-foreground">
                      {t("common.hospitalHours")}
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Map */}
              <Reveal delay={0.3}>
                <div className="mt-2 overflow-hidden rounded-2xl border border-border/70 h-72 bg-secondary/60">
                  <iframe
                    title={t("common.mapContactTitle")}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=69.1%2C34.5%2C69.2%2C34.55&layer=mapnik&marker=34.5228%2C69.1450"
                    className="h-full w-full grayscale-[0.3]"
                    loading="lazy"
                  />
                </div>
              </Reveal>
            </div>

            {/* Emergency Information */}
            <Reveal delay={0.12}>
              <div className="rounded-[2rem] border border-border/70 bg-card p-8 lg:p-10">
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  {t("common.emergencyGeneral")}
                </h2>

                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {t("common.emergencyDesc")}
                </p>

                <p className="mt-4 text-sm text-muted-foreground">
                  {t("common.phoneEmailListed")}
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      <Faq />
    </main>
  );
}