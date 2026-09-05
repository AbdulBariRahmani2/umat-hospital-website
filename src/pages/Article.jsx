import { Link, useParams } from "react-router-dom";
import { Clock } from "lucide-react";
import PageHero from "@/components/layout/PageHero";
import Reveal from "@/components/Reveal";
import { getArticle } from "@/data/articles";
import PageNotFound from "@/lib/PageNotFound";

export default function Article() {
  const { slug } = useParams();
  const article = getArticle(slug);

  if (!article) return <PageNotFound />;

  return (
    <main>
      <PageHero
        eyebrow={article.cat}
        title={article.title}
        description={article.excerpt}
        crumbs={[{ label: "News", to: "/news" }, { label: article.title }]}
      />

      <section className="relative py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {article.read}
              </span>
              <span>·</span>
              <span>{article.date}</span>
            </div>
          </Reveal>
          <div className="mt-8 space-y-5">
            {article.body.map((paragraph) => (
              <Reveal key={paragraph}>
                <p className="text-lg leading-relaxed text-muted-foreground">{paragraph}</p>
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-12">
            <Link to="/news" className="text-sm font-semibold text-primary hover:underline">
              Back to news & insights
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
