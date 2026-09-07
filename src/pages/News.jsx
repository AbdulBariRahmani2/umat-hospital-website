import { Link } from "@/i18n/navigation";
import { ArrowUpRight, Clock } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { articles } from "@/data/articles";
import { breadcrumbJsonLd } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

export default function News() {
  const { t } = useI18n();
  return (
    <main>
      <Seo
        title={t("pages.news.title")}
        description={t("pages.news.description")}
        path="/news"
        jsonLd={breadcrumbJsonLd([{ name: t("newsCrumbs"), path: "/news" }])}
      />
      <PageHero
        eyebrow={t("common.newsAndAdvice")}
        title={t("pages.news.title")}
        description={t("pages.news.description")}
        crumbs={[{ label: t("newsCrumbs") }]}
      />

      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={i * 0.06}>
                <Link
                  to={`/news/${article.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border/70 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-foreground/5"
                >
                  <img src={article.image} alt={article.imageAlt} width="640" height="360" className="aspect-[16/9] w-full object-cover" />
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-[11px] font-semibold uppercase tracking-wide text-primary">{article.cat}</span>
                      <span className="text-xs text-muted-foreground">{article.date}</span>
                    </div>
                    <h2 className="mt-4 font-heading text-2xl font-semibold leading-snug text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h2>
                    <p className="mt-3 text-sm text-muted-foreground flex-1">{article.excerpt}</p>
                    <div className="mt-6 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-1.5 text-muted-foreground">
                        <Clock className="h-4 w-4" /> {article.read}
                      </span>
                      <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                        {t("common.read")}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
