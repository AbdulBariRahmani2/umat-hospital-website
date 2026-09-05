import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname.substring(1);

  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-20">
      <Seo
        title="Page not found"
        description="This page is not on the Ummat International Hospital website. Return home or contact the hospital in Kabul."
        path={location.pathname}
        noindex
      />
      <div className="max-w-md w-full text-center">
        <p className="font-heading text-7xl font-semibold text-primary/30">404</p>
        <h1 className="mt-4 font-heading text-3xl font-semibold text-foreground">Page not found</h1>
        <p className="mt-3 text-muted-foreground leading-relaxed">
          The page <span className="font-medium text-foreground">"{pageName}"</span> is not on this site.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-full px-6">
            <Link to="/">Go home</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-full px-6">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
