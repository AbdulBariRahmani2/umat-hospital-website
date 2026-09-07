import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useI18n } from "@/hooks/use-i18n";
import LocaleDocument from "@/i18n/LocaleDocument";

export default function Layout() {
  const { t } = useI18n();
  return (
    <div className="relative min-h-screen bg-background">
      <LocaleDocument />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        {t("common.skipToContent")}
      </a>
      <Header />
      <div id="main-content" dir="ltr" lang="en">
        <Outlet />
      </div>
      <div dir="ltr" lang="en">
        <Footer />
      </div>
    </div>
  );
}
