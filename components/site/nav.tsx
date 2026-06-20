"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { OsmaniLogo } from "@/components/brand/logo";
import { ThemeToggle } from "@/components/theme/toggle";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#company", label: "Company" },
  { href: "/#ventures", label: "Ventures" },
  { href: "/#flagship", label: "Chattōsales" },
  { href: "/contact", label: "Contact" },
];

export function SiteNav() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/75 border-b border-border"
          : "bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" aria-label="Osmani Technologies — Home" className="group">
          <OsmaniLogo size={24} className="transition-opacity group-hover:opacity-80" />
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-muted-foreground hover:text-[var(--brass)] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-1.5 rounded-full border border-foreground/20 bg-card px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-[var(--brass)] hover:text-[var(--brass)]"
          >
            Get in touch
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((s) => !s)}
            className="rounded-md p-2 text-foreground hover:bg-card"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
          <nav className="container-page flex flex-col gap-1 py-6 text-base">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-muted-foreground hover:bg-card hover:text-foreground"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full border border-[var(--brass)] bg-card px-4 py-3 text-sm font-medium text-[var(--brass)]"
            >
              Get in touch
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
