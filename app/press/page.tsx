import type { Metadata } from "next";
import { Download, ExternalLink } from "lucide-react";
import { PageShell, PageSection, KeyValueGrid } from "@/components/site/page-shell";
import { OsmaniMark } from "@/components/brand/logo";
import { company, addressLine } from "@/lib/company";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press kit for Osmani Technologies Limited — boilerplate, brand assets, fact sheet, and media contact.",
};

const palette = [
  { name: "Deep Forest", hex: "#0E211A", role: "Background" },
  { name: "Warm Cream", hex: "#F5EFE0", role: "Foreground" },
  { name: "Warm Gold", hex: "#C9A961", role: "Accent" },
  { name: "Mint Emerald", hex: "#4FB68C", role: "Primary" },
  { name: "Facet", hex: "#2BE8B5", role: "Highlight" },
];

export default function PressPage() {
  return (
    <PageShell
      eyebrow="Press"
      title="Press kit."
      intro="Boilerplate, fact sheet, and brand assets for press, partners, and media. For interviews and inquiries, write to our press email below."
    >
      <PageSection heading="Boilerplate">
        <p className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-foreground/85">
          {company.description}
        </p>
      </PageSection>

      <PageSection heading="Fact sheet">
        <KeyValueGrid
          items={[
            { label: "Legal name", value: company.legalName },
            { label: "Trading name", value: company.shortName },
            { label: "Headquartered", value: "Ibadan, Oyo State, Nigeria" },
            { label: "Founded", value: company.incorporatedReadable },
            { label: "Company type", value: company.type },
            { label: "RC number", value: company.rcNumber },
            { label: "Arms", value: "Software · Commerce" },
            { label: "Flagship product", value: company.flagship },
            { label: "Registered office", value: addressLine() },
            {
              label: "Press email",
              value: (
                <a className="hover:text-[var(--gold)]" href={`mailto:${company.email.press}`}>
                  {company.email.press}
                </a>
              ),
            },
          ]}
        />
      </PageSection>

      <PageSection heading="Brand mark">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          <div className="flex items-center justify-center bg-card p-12">
            <OsmaniMark size={80} />
          </div>
          <div className="flex flex-col justify-between gap-4 bg-card p-6 text-sm">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-[var(--gold)]">
                Mark · SVG
              </div>
              <p className="mt-2 text-foreground/85">
                The Osmani mark is an obsidian ring with a gold horizon
                disc and a small sun pip — a stylized eclipse representing the
                meeting of digital and physical commerce.
              </p>
            </div>
            <a
              href="/favicon.svg"
              download="osmani-mark.svg"
              className="inline-flex w-fit items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[var(--gold)] hover:text-background"
            >
              Download SVG
              <Download className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </PageSection>

      <PageSection heading="Color palette">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {palette.map((c) => (
            <div key={c.name} className="bg-card p-5">
              <div
                className="h-14 w-full rounded-md border border-border"
                style={{ backgroundColor: c.hex }}
              />
              <div className="mt-3 text-sm font-medium">{c.name}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {c.role} · {c.hex}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection heading="Typography">
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          <div className="bg-card p-6">
            <div className="font-display text-5xl leading-none">Aa</div>
            <div className="mt-4 text-sm font-medium">Fraunces</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Display · Variable serif
            </div>
          </div>
          <div className="bg-card p-6">
            <div className="text-5xl font-medium leading-none">Aa</div>
            <div className="mt-4 text-sm font-medium">Switzer</div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Body · Grotesque sans
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection heading="Verify on CAC">
        <a
          href={company.cacVerifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-card px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[var(--gold)] hover:text-background"
        >
          Search the CAC registry
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </PageSection>
    </PageShell>
  );
}
