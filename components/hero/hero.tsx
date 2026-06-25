"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import { Gem, GemWatermark } from "@/components/effects/gem";
import { company } from "@/lib/company";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 md:pt-36 md:pb-28">
      <AuroraBg />

      {/* Giant faint gem watermark — Osmani's signature mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-8%] top-[6%] hidden md:block lg:right-[-2%] lg:top-[4%]"
      >
        <GemWatermark
          size={620}
          className="text-[var(--brass)] opacity-[0.07]"
        />
      </div>

      {/* Small corner gem sigil */}
      <div className="pointer-events-none absolute right-6 top-24 hidden text-[var(--brass)] md:block md:right-10 md:top-28">
        <Gem size={26} className="animate-facet-pulse" />
      </div>

      <div className="container-page relative">
        {/* Ship log — currently building */}
        <ShipLog />

        {/* Eyebrow */}
        <div className="mt-5 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
          <Gem size={11} />
          <span>Built in Ibadan · For the world</span>
        </div>

        {/* Headline + vertical meta block */}
        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-9">
            <h1 className="font-display text-[clamp(2.6rem,10vw,8.25rem)] leading-[0.94] tracking-[-0.03em] text-foreground">
              <AnimatedLine words={["Software,", "commerce,"]} />
              <AnimatedLine
                words={["and"]}
                trail={
                  <em className="font-display-italic text-gradient-brass">
                    capital
                  </em>
                }
                trailDelay={2}
                period
              />
            </h1>
          </div>

          {/* Vertical editorial meta — desktop only */}
          <aside className="hidden lg:col-span-3 lg:flex lg:items-end lg:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="flex flex-col gap-3 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground"
            >
              {[
                { label: "Osmani Technologies", highlight: true },
                { label: `Est. ${company.incorporatedReadable}`, highlight: false },
                { label: "Ibadan · Nigeria", highlight: false },
                { label: `RC ${company.rcNumber}`, highlight: false },
              ].map((row) => (
                <div key={row.label} className="flex items-center gap-3">
                  <span className="h-px w-6 bg-[var(--gold)]/60" />
                  <span className={row.highlight ? "text-foreground" : ""}>
                    {row.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </aside>
        </div>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-12 md:items-end"
        >
          <p className="md:col-span-7 max-w-2xl text-balance text-lg leading-relaxed text-muted-foreground md:text-xl">
            A Nigerian technology company engaged in software, SaaS, and the
            distribution of physical products — across digital and physical
            channels.
          </p>
          <div className="md:col-span-5 flex flex-wrap items-center gap-3 md:justify-end">
            <Link
              href="#ventures"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              Explore ventures
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-foreground/20 bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              Talk to us
            </Link>
          </div>
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex items-center gap-5 text-[var(--gold)]"
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground whitespace-nowrap">
            Two arms · One standard
          </span>
          <span className="h-px flex-1 editorial-rule opacity-50" />
          <Gem size={12} className="animate-facet-pulse" />
          <span className="h-px w-8 bg-current/30" />
          <ArrowDown className="h-3 w-3 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

function ShipLog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
      className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 px-3.5 py-1.5 backdrop-blur"
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--brass-soft)] opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--brass-soft)]" />
      </span>
      <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
        Currently building
      </span>
      <span className="h-3 w-px bg-border" />
      <span className="text-xs font-medium text-foreground">
        Chattōsales
      </span>
    </motion.div>
  );
}

function AnimatedLine({
  words,
  trail,
  trailDelay = 0,
  period = false,
}: {
  words: string[];
  trail?: React.ReactNode;
  trailDelay?: number;
  period?: boolean;
}) {
  const reduce = useReducedMotion();
  return (
    <span className="block overflow-hidden">
      {words.map((w, i) => (
        <Word key={`${w}-${i}`} index={i} reduce={!!reduce}>
          {w}
        </Word>
      ))}
      {trail && (
        <Word index={words.length + trailDelay} reduce={!!reduce}>
          {trail}
          {period ? "." : ""}
        </Word>
      )}
    </span>
  );
}

function Word({
  children,
  index,
  reduce,
}: {
  children: React.ReactNode;
  index: number;
  reduce: boolean;
}) {
  return (
    <motion.span
      initial={reduce ? { opacity: 0 } : { y: "100%", opacity: 0 }}
      animate={reduce ? { opacity: 1 } : { y: "0%", opacity: 1 }}
      transition={{
        duration: 0.85,
        delay: index * 0.09,
        ease: [0.2, 0.75, 0.25, 1],
      }}
      style={{ display: "inline-block", marginRight: "0.22em" }}
    >
      {children}
    </motion.span>
  );
}

function AuroraBg() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute -top-40 -left-40 h-[75vh] w-[75vh] rounded-full blur-3xl animate-aurora-1"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.66 0.082 72 / 16%), transparent 70%)",
        }}
      />
      <div
        className="absolute top-1/3 -right-48 h-[70vh] w-[70vh] rounded-full blur-3xl animate-aurora-2"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.515 0.078 70 / 12%), transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[55vh] w-[55vh] rounded-full blur-3xl animate-aurora-3"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.78 0.06 65 / 6%), transparent 70%)",
        }}
      />
    </div>
  );
}
