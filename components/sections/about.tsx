import { SectionHeader } from "./ventures";
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
            <div key={p.title} className="flex flex-col gap-3 bg-card p-7">
              <div className="font-mono text-[11px] uppercase tracking-widest text-[var(--gold)]">
                §0{i + 1}
              </div>
              <div className="text-lg font-medium">{p.title}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
