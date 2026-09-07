import React from "react";
import { useI18n } from "@/hooks/use-i18n";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "ps", label: "پښتو", dir: "rtl" },
  { code: "prs", label: "دری", dir: "rtl" },
];

export default function LanguageSwitcher() {
  const { i18n, lang } = useI18n();

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    const selected = languages.find((l) => l.code === code);
    if (selected) {
      document.documentElement.dir = selected.dir;
      document.documentElement.lang = code;
    }
  };

  const current = languages.find((l) => l.code === lang) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-1.5 rounded-full px-3 text-xs font-medium">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline">{current.label}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[8rem]">
        {languages.map((l) => (
          <DropdownMenuItem
            key={l.code}
            onClick={() => handleChange(l.code)}
            className={`cursor-pointer ${lang === l.code ? "font-semibold" : "font-normal"}`}
          >
            {l.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
