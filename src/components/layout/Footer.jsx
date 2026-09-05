import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter, ArrowUpRight } from "lucide-react";

const columns = [
  {
    title: "Patient Care",
    links: ["Neuroscience", "Surgery", "Cancer Care", "Advanced Diagnostics", "Emergency Care"],
  },
  {
    title: "Patients & Visitors",
    links: ["Before Your Visit", "Visiting Hours", "Patient Rights", "Medical Records", "Billing Information"],
  },
  {
    title: "About UIH",
    links: ["About Us", "Leadership", "Facilities", "Quality & Safety", "Careers"],
  },
  {
    title: "Resources",
    links: ["News & Insights", "Health Articles", "Research", "Education", "Events"],
  },
];

const legal = ["Privacy Policy", "Terms of Use", "Medical Disclaimer", "Accessibility"];

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 pt-20 pb-10">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 3v18M3 12h18" />
                </svg>
              </span>
              <div className="leading-none">
                <span className="font-heading text-lg font-semibold block">Ummat</span>
                <span className="text-[10px] font-medium uppercase tracking-[0.22em] text-background/50">International Hospital</span>
              </div>
            </Link>
            <p className="mt-6 max-w-sm text-sm text-background/60 leading-relaxed">
              A physician-led tertiary care hospital in Kabul — uniting neuroscience, surgery, cancer care, and advanced
              diagnostics with patient-centered compassion.
            </p>
            <div className="mt-6 space-y-2.5 text-sm text-background/70">
              <p className="flex items-start gap-2.5"><MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" /> Darulaman Road, Next to National Museum of Afghanistan, Kabul, Afghanistan</p>
              <p className="flex items-center gap-2.5"><Phone className="h-4 w-4 text-primary shrink-0" /> To be provided</p>
              <p className="flex items-center gap-2.5"><Mail className="h-4 w-4 text-primary shrink-0" /> To be provided</p>
            </div>
            <div className="mt-6 flex gap-3">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="flex h-10 w-10 items-center justify-center rounded-full border border-background/15 text-background/70 transition-colors hover:border-primary hover:text-primary">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-background/50">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#" className="group inline-flex items-center gap-1 text-sm text-background/75 hover:text-primary transition-colors">
                        {l}
                        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pulse-line opacity-30" />

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-background/50">© 2026 Ummat International Hospital. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legal.map((l) => (
              <a key={l} href="#" className="text-xs text-background/50 hover:text-background/80 transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}