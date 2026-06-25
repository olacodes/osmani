import { Gem, GemRule } from "@/components/effects/gem";

export function Manifesto() {
  return (
    <section className="relative isolate overflow-hidden py-32 md:py-44">
      {/* Subtle architectural grid — only used in this section as an accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        style={{
          maskImage:
            "radial-gradient(60% 60% at 50% 50%, black 0%, transparent 80%)",
        }}
      />
      {/* Warm brass glow over the grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, oklch(0.66 0.082 72 / 9%), transparent 75%)",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
            <Gem size={11} />
            <span>§05</span>
            <span className="h-px w-4 bg-current/40" />
            <span>Principles</span>
          </div>

          <blockquote className="relative">
            <span
              aria-hidden
              className="absolute -left-2 -top-12 font-display text-[10rem] leading-none text-[var(--gold)]/35 md:-left-8 md:-top-24 md:text-[16rem]"
            >
              &ldquo;
            </span>
            <p className="font-display text-balance text-[2.25rem] leading-[1.12] tracking-[-0.015em] text-foreground md:text-[3.5rem]">
              Osmani builds where most companies don&rsquo;t — across the{" "}
              <em className="font-display-italic text-gradient-brass">
                digital
              </em>{" "}
              and the{" "}
              <em className="font-display-italic text-gradient-brass">
                physical
              </em>
              . Software to write the rules, and goods to move under them. From
              Nigeria. For markets that want both.
            </p>
          </blockquote>

          <div className="mt-14">
            <GemRule />
            <div className="mt-6 text-center font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
              Osmani Principles · Excerpt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Manifesto as Stats };
