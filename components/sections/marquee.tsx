import { Gem } from "@/components/effects/gem";

const arms = [
  { id: "01", name: "Software" },
  { id: "02", name: "Commerce" },
];

export function ArmsRow() {
  return (
    <section
      aria-label="The two arms"
      className="border-y border-border bg-card"
    >
      <div className="container-page">
        <div className="flex flex-col items-start justify-between gap-8 py-10 md:flex-row md:items-center md:py-8">
          <div className="flex items-center gap-3 text-sm leading-relaxed text-foreground/85 md:max-w-md">
            <Gem size={14} className="text-[var(--gold)]" />
            <span>
              One company. Two arms — operating across digital and physical
              channels, under a single standard.
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-12 gap-y-4">
            {arms.map((a) => (
              <a
                key={a.id}
                href="#ventures"
                className="group flex items-center gap-3 text-foreground transition-colors hover:text-[var(--gold)]"
              >
                <span className="font-mono text-[10px] tracking-widest text-[var(--gold)]">
                  §{a.id}
                </span>
                <span className="text-sm font-medium">{a.name}</span>
                <span className="h-px w-6 bg-current/30 transition-all group-hover:w-12 group-hover:bg-current/60" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ArmsRow as Marquee };
