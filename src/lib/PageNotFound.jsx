import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { useI18n } from "@/hooks/use-i18n";
import { Link } from "@/i18n/navigation";

export default function PageNotFound() {
  const { t, path } = useI18n();
  const pageName = path === "/" ? "" : path.substring(1);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
      <Seo
        title={t("pages.notFound.title")}
        description={t("pages.notFound.description")}
        path={path}
        noindex
      />
      <div className="max-w-md w-full text-center">
        <p className="font-heading text-7xl font-semibold text-primary/30">404</p>
        <h1 className="mt-4 font-heading text-3xl font-semibold text-foreground">{t("pages.notFound.title")}</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          {t("pages.notFound.description").replace("{pageName}", pageName)}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full px-6">
            <Link to="/">{t("common.home")}</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/contact">{t("common.contactUs")}</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
