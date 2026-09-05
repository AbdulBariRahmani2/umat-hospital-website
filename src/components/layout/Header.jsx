import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Search, Phone, CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Patient Care", href: "#specialties" },
  { label: "Doctors", href: "#doctors" },
  { label: "Patients & Visitors", href: "#patient-info" },
  { label: "Research", href: "#research" },
  { label: "News", href: "#news" },
  { label: "About", href: "#why" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-slab border-b border-border/60 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm transition-transform group-hover:scale-105">
              <span className="absolute inset-0 rounded-full ring-1 ring-primary/30" />
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 3v18M3 12h18" />
              </svg>
            </span>
            <div className="leading-none">
              <span className="font-heading text-lg font-semibold tracking-tight text-foreground block">Ummat</span>
              <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-muted-foreground">International Hospital</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button aria-label="Search" className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
              <Search className="h-[18px] w-[18px]" />
            </button>
            <Button asChild size="sm" className="rounded-full px-5 shadow-sm">
              <a href="#appointment"><CalendarPlus className="mr-1.5 h-4 w-4" /> Appointment</a>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-400 ease-out ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } glass-slab border-t border-border/60`}
      >
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3 text-base font-medium text-foreground border-b border-border/40"
            >
              {l.label}
            </a>
          ))}
          <div className="flex gap-3 pt-4">
            <Button asChild className="flex-1 rounded-full">
              <a href="#appointment" onClick={() => setOpen(false)}><CalendarPlus className="mr-1.5 h-4 w-4" /> Appointment</a>
            </Button>
            <Button asChild variant="outline" className="flex-1 rounded-full">
              <a href="tel:+93"><Phone className="mr-1.5 h-4 w-4" /> Emergency</a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}