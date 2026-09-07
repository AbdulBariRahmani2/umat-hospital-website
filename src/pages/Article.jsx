import { Link, useParams } from "react-router-dom";
import { Clock } from "lucide-react";
import Seo from "@/components/Seo";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { getArticle } from "@/data/articles";
import PageNotFound from "@/lib/PageNotFound";
import { absUrl, breadcrumbJsonLd, getSiteUrl } from "@/lib/seo";
import { useI18n } from "@/hooks/use-i18n";

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);
  const { t } = useI18n();

  if (!article) return <PageNotFound />;

  const path = `/news/${article.slug}`;

  return (
    <main>
      <Seo
        title={article.seoTitle || article.title}
        description={article.seoDescription || article.excerpt}
        path={path}
        image={article.image}
        imageAlt={article.imageAlt}
        type="article"
        jsonLd={[
          breadcrumbJsonLd([
            { name: t("newsCrumbs"), path: "/news" },
            { name: article.title, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: article.title,
            description: article.excerpt,
            image: absUrl(article.image),
            datePublished: article.dateIso,
            dateModified: article.dateIso,
            author: {
              "@type": "Organization",
              name: article.author,
            },
            publisher: { "@id": `${getSiteUrl()}/#hospital` },
            mainEntityOfPage: absUrl(path),
          },
        ]}
      />
      <PageHero
        eyebrow={article.cat}
        title={article.title}
        description={article.excerpt}
        crumbs={[{ label: t("newsCrumbs"), to: "/news" }, { label: article.title }]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <img
              src={article.image}
              alt={article.imageAlt}
              width="960"
              height="540"
              className="mb-8 w-full rounded-[2rem] object-cover aspect-[16/9]"
            />
          </Reveal>
          <Reveal>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {article.read}
              </span>
              <span>{article.date}</span>
              <span>{article.author}</span>
            </div>
          </Reveal>
          <article className="mt-8 space-y-5">
            {article.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </article>
          <Reveal className="mt-12">
            <Link to="/news" className="text-sm font-semibold text-primary hover:underline">
              {t("pages.article.backToNews")}
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
