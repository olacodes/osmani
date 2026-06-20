"use client";

import { motion } from "framer-motion";
import { Code2, ShoppingBag, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Gem } from "@/components/effects/gem";

type Venture = {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  points: string[];
};

const ventures: Venture[] = [
  {
    id: "software",
    number: "01",
    name: "Osmani Software",
    tagline: "Digital products and SaaS.",
    description:
      "Development, marketing, and distribution of digital software products and SaaS-based solutions — including our flagship product, Chattōsales.",
    icon: Code2,
    points: ["Web & mobile apps", "SaaS platforms", "API & integrations"],
  },
  {
    id: "commerce",
    number: "02",
    name: "Osmani Commerce",
    tagline: "Physical products, distributed.",
    description:
      "Sourcing, marketing, and distribution of physical products and general merchandise — across digital and physical channels in Nigeria and abroad.",
    icon: ShoppingBag,
    points: ["E-commerce", "Sourcing", "Retail & distribution"],
  },
];

export function Ventures() {
  return (
    <section id="ventures" className="container-page scroll-mt-24 py-24">
      <SectionHeader
        section="02"
        eyebrow="The two arms"
        title="Two arms. One standard."
        copy="Osmani operates two registered arms — and a single standard for what we ship, sell, and stand behind."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
        {ventures.map((v, i) => (
          <VentureCard key={v.id} venture={v} index={i} />
        ))}
      </div>

      <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground">
        <Gem size={11} className="text-[var(--gold)]" />
        <span className="font-mono uppercase tracking-[0.3em]">
          Capital · Consulting — exploring
        </span>
        <span className="h-px flex-1 bg-border" />
      </div>
    </section>
  );
}

function VentureCard({ venture, index }: { venture: Venture; index: number }) {
  const Icon = venture.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.2, 0.7, 0.2, 1] }}
      className="group relative flex flex-col gap-8 bg-card p-10 transition-all hover:bg-background md:p-14"
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background">
            <Icon className="h-4 w-4 text-[var(--gold)]" />
          </div>
          <span className="font-mono text-xs tracking-widest text-muted-foreground">
            §{venture.number}
          </span>
        </div>
        <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--gold)]" />
      </div>

      <div>
        <h3 className="font-display text-3xl leading-tight md:text-[2.5rem]">
          {venture.name}
        </h3>
        <p className="mt-2 text-sm text-[var(--gold-soft)]">{venture.tagline}</p>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
          {venture.description}
        </p>
      </div>

      <ul className="mt-auto flex flex-wrap gap-2">
        {venture.points.map((p) => (
          <li
            key={p}
            className="rounded-full border border-border bg-background px-3 py-1 text-xs text-muted-foreground"
          >
            {p}
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export function SectionHeader({
  eyebrow,
  section,
  title,
  copy,
  align = "left",
}: {
  eyebrow?: string;
  /** Section number — renders as §NN before the eyebrow. */
  section?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"
      }
    >
      {(eyebrow || section) && (
        <div className="mb-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
          <Gem size={11} />
          {section && <span className="text-[var(--gold)]">§{section}</span>}
          {eyebrow && (
            <>
              {section && <span className="h-px w-4 bg-current/40" />}
              <span>{eyebrow}</span>
            </>
          )}
        </div>
      )}
      <h2 className="font-display text-balance text-[2rem] leading-[1.05] tracking-tight md:text-[2.75rem] lg:text-[3.5rem]">
        {title}
      </h2>
      {copy && (
        <p className="mt-5 max-w-xl text-balance text-base text-muted-foreground md:text-lg">
          {copy}
        </p>
      )}
    </div>
  );
}
