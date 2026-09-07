import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Search, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { navLinks } from "@/data/site";
import LanguageSwitcher from "@/components/language/LanguageSwitcher";
import { useI18n } from "@/hooks/use-i18n";

function linkClass(isActive) {
  return `relative text-sm font-medium transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-primary after:transition-all ${
    isActive
      ? "text-foreground after:w-full"
      : "text-muted-foreground hover:text-foreground after:w-0 hover:after:w-full"
  }`;
}

const navKeyMap = {
  "/services": "nav.patientCare",
  "/doctors": "nav.doctors",
  "/patients": "nav.patients",
  "/research": "nav.research",
  "/news": "nav.news",
  "/about": "nav.about",
  "/contact": "nav.contact",
};

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const solid = scrolled || !isHome;
  const { t } = useI18n();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid ? "glass-slab border-b border-border/60 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group" aria-label="Ummat International Hospital home">
            <img
              src="/images/uih-logo-mark.png"
              alt="Ummat International Hospital logo"
              width="36"
              height="36"
              className="h-9 w-9 rounded-full object-cover shadow-sm transition-transform group-hover:scale-105"
            />
            <div className="leading-none">
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground block">Ummat</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">International Hospital</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((l) => (
              <NavLink
                key={l.label}
                to={l.to}
                className={({ isActive }) => linkClass(isActive || pathname.startsWith(`${l.to}/`))}
              >
                {t(navKeyMap[l.to] || l.label)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              to="/doctors"
              aria-label="Find a doctor"
              className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Search className="h-[18px] w-[18px]" />
            </Link>
            <Button asChild size="sm" className="rounded-full px-5 shadow-sm">
              <Link to="/appointment"><CalendarPlus className="mr-1.5 h-4 w-4" /> Appointment</Link>
            </Button>
          </div>

          <button
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      <Drawer open={open} onOpenChange={setOpen} direction="right">
        <DrawerContent className="fixed inset-y-0 right-0 left-auto z-50 h-full w-[85%] max-w-sm rounded-l-[10px] rounded-tr-none border-l bg-background">
          <DrawerHeader className="flex flex-row items-center justify-between border-b border-border/60 px-6 py-5 text-left">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2.5"
              aria-label="Ummat International Hospital home"
            >
              <img
                src="/images/uih-logo-mark.png"
                alt="Ummat International Hospital logo"
                width="32"
                height="32"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="leading-none">
                <span className="font-heading text-base font-semibold tracking-tight text-foreground block">Ummat</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">International Hospital</span>
              </div>
            </Link>
            <DrawerClose asChild>
              <button
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </DrawerClose>
          </DrawerHeader>

          <nav className="flex-1 overflow-y-auto px-6 py-6">
            <DrawerTitle className="sr-only">Menu</DrawerTitle>
            <ul className="space-y-1">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between rounded-lg px-3 py-3 text-base font-medium transition-colors ${
                        isActive || pathname.startsWith(`${l.to}/`)
                          ? "bg-secondary text-foreground"
                          : "text-foreground/80 hover:bg-secondary/60 hover:text-foreground"
                      }`
                    }
                  >
                    {t(navKeyMap[l.to] || l.label)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <LanguageSwitcher />
            </div>
          </nav>
        </DrawerContent>
      </Drawer>
    </header>
  );
}