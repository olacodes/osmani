"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MessageSquare, Zap, ShoppingCart } from "lucide-react";
import { SectionHeader } from "./ventures";
import { Gem } from "@/components/effects/gem";
import { company } from "@/lib/company";

const features = [
  {
    icon: MessageSquare,
    title: "Chat-native commerce",
    body: "Sell, support, and close — inside the same conversation.",
  },
  {
    icon: Zap,
    title: "Built for speed",
    body: "From inbox to checkout in seconds, not steps.",
  },
  {
    icon: ShoppingCart,
    title: "End-to-end retail",
    body: "Catalog, payments, fulfilment, analytics — one platform.",
  },
];

export function Flagship() {
  return (
    <section id="flagship" className="container-page scroll-mt-24 py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
        <div className="lg:col-span-5">
          <SectionHeader
            section="03"
            eyebrow="Flagship product"
            title={"Meet Chattōsales —\nour first product."}
            copy="A chat-first commerce platform where conversations become orders. Built and shipped by Osmani Software."
          />

          {/* Registered flagship badge */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/30 bg-card px-4 py-2">
            <Gem size={12} className="text-[var(--gold)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
              Registered to {company.legalName}
            </span>
            <span className="h-3 w-px bg-border" />
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[var(--gold)]">
              CAC 2026
            </span>
          </div>

          <ul className="mt-10 space-y-6">
            {features.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex gap-4">
                <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-card">
                  <Icon className="h-4 w-4 text-[var(--gold)]" />
                </div>
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="text-sm text-muted-foreground">{body}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-12">
            <a
              href={company.flagshipUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--brass)]/40 bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:bg-[var(--brass)] hover:text-background hover:border-[var(--brass)]"
            >
              Visit Chattōsales
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7">
          <ChattosalesMockup />
        </div>
      </div>
    </section>
  );
}

function ChattosalesMockup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative aspect-[5/4] overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[0_24px_80px_-32px_oklch(0_0_0_/_40%)] md:p-8"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, oklch(0.71 0.12 165 / 18%), transparent 70%)",
        }}
      />

      <div className="relative flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <div className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
        <div className="ml-3 flex-1 rounded-md border border-border bg-background/80 px-3 py-1 font-mono text-[10px] text-muted-foreground">
          chattosales.com / orders
        </div>
      </div>

      <div className="relative mt-6 flex items-end justify-between border-b border-border pb-4">
        <div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            Today
          </div>
          <div className="mt-1 font-display text-3xl leading-none">
            Orders, live.
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-[var(--highlight)]/30 bg-[var(--highlight)]/10 px-3 py-1">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--highlight)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--highlight)]" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--highlight)]">
            Live
          </span>
        </div>
      </div>

      <div className="relative mt-5 grid grid-cols-3 gap-4">
        <Stat label="Inbox" value="142" />
        <Stat label="Carts" value="38" tint />
        <Stat label="Paid" value="₦4.2M" tint gold />
      </div>

      <div className="relative mt-5 space-y-2.5">
        <OrderRow stage={1} sku="OSM-104" label="Conversation" amount="—" />
        <OrderRow stage={2} sku="OSM-102" label="Checkout sent" amount="₦42,000" />
        <OrderRow stage={3} sku="OSM-099" label="Paid" amount="₦78,000" />
        <OrderRow stage={4} sku="OSM-095" label="Fulfilled" amount="₦156,000" />
      </div>
    </motion.div>
  );
}

function Stat({
  label,
  value,
  tint,
  gold,
}: {
  label: string;
  value: string;
  tint?: boolean;
  gold?: boolean;
}) {
  return (
    <div className="rounded-lg border border-border bg-background/60 p-3">
      <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
      <div
        className={`mt-1 font-display text-2xl leading-none ${
          gold
            ? "text-[var(--gold)]"
            : tint
              ? "text-[var(--highlight)]"
              : "text-foreground"
        }`}
      >
        {value}
      </div>
    </div>
  );
}

function OrderRow({
  stage,
  sku,
  label,
  amount,
}: {
  stage: 1 | 2 | 3 | 4;
  sku: string;
  label: string;
  amount: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-border bg-background/60 px-3 py-2.5">
      <div className="flex items-center gap-1.5">
        {[1, 2, 3, 4].map((s) => (
          <span
            key={s}
            className={`h-1.5 w-3 rounded-full transition-colors ${
              s <= stage
                ? s === 4
                  ? "bg-[var(--gold)]"
                  : "bg-[var(--highlight)]"
                : "bg-foreground/10"
            }`}
          />
        ))}
      </div>
      <div className="font-mono text-[10px] text-muted-foreground">{sku}</div>
      <div className="flex-1 text-sm">{label}</div>
      <div className="font-mono text-xs text-foreground">{amount}</div>
    </div>
  );
}
