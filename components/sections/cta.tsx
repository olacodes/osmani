import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="container-page py-32">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-12 md:p-20">
        {/* Deep brass glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.515 0.078 70 / 16%), transparent 70%)",
          }}
        />
        {/* Gold glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.7 0.1 75 / 18%), transparent 70%)",
          }}
        />

        <div className="relative grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--brass)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Let&rsquo;s build
            </div>
            <h2 className="font-display text-balance text-4xl leading-[1.05] md:text-6xl">
              Have a product, brand,
              <br />
              or idea?{" "}
              <em className="italic text-[var(--brass)]">Let&rsquo;s build it.</em>
            </h2>
            <p className="mt-6 max-w-lg text-base text-muted-foreground md:text-lg">
              Partnerships, ventures, or just a conversation — we&rsquo;re open.
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-wrap gap-3 lg:justify-end">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-4 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
            >
              Start a conversation
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
