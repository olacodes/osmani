import {
  PenTool,
  Hammer,
  Rocket,
  Truck,
  ScrollText,
  LineChart,
} from "lucide-react";
import { SectionHeader } from "./ventures";
import { Gem } from "@/components/effects/gem";

const items = [
  {
    icon: PenTool,
    title: "Design",
    body: "Brand systems, product UX, and interface design with intent.",
  },
  {
    icon: Hammer,
    title: "Build",
    body: "Engineering modern software — fast, reliable, observable.",
  },
  {
    icon: Rocket,
    title: "Deploy",
    body: "Ship to global infrastructure with confidence and zero drama.",
  },
  {
    icon: Truck,
    title: "Distribute",
    body: "Move physical goods through Nigerian and international channels.",
  },
  {
    icon: ScrollText,
    title: "License",
    body: "Acquire and manage IP — trademarks, patents, and brand rights.",
  },
  {
    icon: LineChart,
    title: "Advise",
    body: "Consult on digital transformation, integration, and strategy.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="container-page scroll-mt-24 py-24">
      <SectionHeader
        section="04"
        eyebrow="What we do"
        title="A practiced set of capabilities."
        copy="From first sketch to last-mile delivery, we operate across the full lifecycle of a modern product."
      />

      <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, body }, i) => (
          <div
            key={title}
            className="group relative flex flex-col gap-5 bg-card p-8 transition-colors hover:bg-background"
          >
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-background transition-colors group-hover:border-[var(--gold)]/40">
                <Icon className="h-4 w-4 text-[var(--gold)]" />
              </div>
              <Gem
                size={11}
                className="text-[var(--gold)]/40 transition-colors group-hover:text-[var(--gold)]"
              />
            </div>
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-[10px] tracking-widest text-muted-foreground">
                {`0${i + 1}`}
              </span>
              <div className="text-lg font-medium">{title}</div>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
