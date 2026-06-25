import { SectionHeader } from "./ventures";
import { Gem } from "@/components/effects/gem";
import { company } from "@/lib/company";

const pillars = [
  {
    title: "Built in Ibadan",
    body: "Registered office in Bodija, Oyo State. Operated by a team that knows the markets we serve.",
  },
  {
    title: "Held, not flipped",
    body: "We build ventures to last — products, brands, and partnerships we plan to operate, not exit.",
  },
  {
    title: "Standards, everywhere",
    body: "Software and commerce ship under the same standard: deliberate, durable, and clearly designed.",
  },
];

export function About() {
  return (
    <section id="company" className="container-page scroll-mt-24 py-28">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-5">
          <SectionHeader
            section="01"
            eyebrow="The company"
            title="A holding company for the next decade."
            copy={`Registered in Nigeria as ${company.legalName} under ${company.act} — RC ${company.rcNumber}.`}
          />
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {pillars.map((p, i) => (
            <article
              key={p.title}
              className="group relative flex flex-col gap-5 bg-card p-7 transition-colors hover:bg-background"
            >
              {/* Hairline brass rule that draws in on hover */}
              <span
                aria-hidden
                className="absolute inset-x-7 top-0 h-px origin-left scale-x-0 bg-[var(--gold)]/60 transition-transform duration-500 ease-out group-hover:scale-x-100"
              />
              <div className="flex items-center gap-2.5 text-[var(--gold)]">
                <Gem size={12} className="transition-transform duration-500 group-hover:rotate-180" />
                <span className="font-mono text-[11px] tracking-[0.3em]">
                  §0{i + 1}
                </span>
              </div>
              <h3 className="font-display text-2xl leading-[1.1] tracking-[-0.01em] text-foreground">
                {p.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
