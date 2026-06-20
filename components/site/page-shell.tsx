import * as React from "react";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { CursorSpotlight } from "@/components/effects/cursor-spotlight";
import { Gem } from "@/components/effects/gem";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <CursorSpotlight />
      <SiteNav />
      <main className="flex-1 pt-32">
        <header className="container-page pb-12">
          <div className="mx-auto max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
              <Gem size={11} />
              <span>{eyebrow}</span>
            </div>
            <h1 className="font-display text-balance text-5xl leading-[1.05] md:text-7xl">
              {title}
            </h1>
            {intro && (
              <p className="mt-6 text-balance text-base text-muted-foreground md:text-lg">
                {intro}
              </p>
            )}
          </div>
        </header>

        <div className="container-page pb-32">
          <div className="mx-auto max-w-3xl">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function PageSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-16 first:mt-0">
      <div className="mb-5 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
        <Gem size={10} />
        <span>{heading}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <div className="prose-osmani">{children}</div>
    </section>
  );
}

export function KeyValueGrid({
  items,
}: {
  items: { label: string; value: React.ReactNode }[];
}) {
  return (
    <dl className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
      {items.map((it) => (
        <div key={it.label} className="bg-card p-5">
          <dt className="font-mono text-[10px] uppercase tracking-widest text-[var(--gold)]">
            {it.label}
          </dt>
          <dd className="mt-2 break-words text-sm text-foreground">{it.value}</dd>
        </div>
      ))}
    </dl>
  );
}
