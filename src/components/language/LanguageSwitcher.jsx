import React from "react";
import { useLocation } from "react-router-dom";
import { useI18n } from "@/hooks/use-i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { LOCALES, LOCALE_CODES } from "@/i18n/config";
import { stripLocalePrefix } from "@/i18n/path";

export default function LanguageSwitcher() {
  const { t, locale } = useI18n();
  const location = useLocation();
  const currentPath = `${stripLocalePrefix(location.pathname)}${location.search}${location.hash}`;
  const current = LOCALES[locale] || LOCALES.en;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 rounded-full px-3 text-xs font-medium"
          aria-label={t("header.languageSwitcher")}
        >
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{current.nativeLabel}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]" lang={current.htmlLang}>
        {LOCALE_CODES.map((code) => {
          const item = LOCALES[code];
          const isActive = locale === code;
          return (
            <DropdownMenuItem key={code} asChild className="cursor-pointer">
              <Link
                to={currentPath}
                locale={code}
                hrefLang={item.hreflang}
                lang={item.htmlLang}
                aria-current={isActive ? "true" : undefined}
                className={isActive ? "font-semibold" : "font-normal"}
              >
                <span>{item.nativeLabel}</span>
                <span className="ms-2 text-muted-foreground">{item.englishLabel}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
