import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { OsmaniMark } from "@/components/brand/logo";
import { Gem } from "@/components/effects/gem";
import { company, addressLine } from "@/lib/company";

const cols: { heading: string; items: { label: string; href: string; external?: boolean }[] }[] = [
  {
    heading: "Ventures",
    items: [
      { label: "Software", href: "/#ventures" },
      { label: "Commerce", href: "/#ventures" },
      { label: "Chattōsales", href: "/#flagship" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About", href: "/#company" },
      { label: "Press", href: "/press" },
      { label: "Legal", href: "/legal" },
      { label: "Privacy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Connect",
    items: [
      { label: company.email.primary, href: `mailto:${company.email.primary}` },
      { label: "LinkedIn", href: "#" },
      { label: "X / Twitter", href: "#" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card">
      <div className="container-page py-20">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <OsmaniMark size={32} />
              <div className="font-display text-2xl leading-none">Osmani</div>
            </div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              A Nigerian technology company building software, SaaS, and the
              distribution of physical products across digital and physical
              channels.
            </p>

            {/* Compliance block — verifiable proof */}
            <dl className="mt-8 grid grid-cols-1 gap-3 text-[11px] font-mono uppercase tracking-widest text-muted-foreground sm:grid-cols-2">
              <div>
                <dt className="text-[10px] text-[var(--gold)]">Legal name</dt>
                <dd className="mt-1 text-foreground/80">{company.legalName}</dd>
              </div>
              <div>
                <dt className="text-[10px] text-[var(--gold)]">RC</dt>
                <dd className="mt-1 text-foreground/80">{company.rcNumber}</dd>
              </div>
              <div>
                <dt className="text-[10px] text-[var(--gold)]">TIN</dt>
                <dd className="mt-1 text-foreground/80">{company.tin}</dd>
              </div>
              <div>
                <dt className="text-[10px] text-[var(--gold)]">Incorporated</dt>
                <dd className="mt-1 text-foreground/80">
                  {company.incorporatedReadable}
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-[10px] text-[var(--gold)]">Registered office</dt>
                <dd className="mt-1 normal-case tracking-normal text-foreground/80">
                  {addressLine()}
                </dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-10 sm:grid-cols-3">
            {cols.map((col) => (
              <div key={col.heading}>
                <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[var(--gold)]">
                  <Gem size={10} />
                  {col.heading}
                </div>
                <ul className="mt-5 space-y-3 text-sm">
                  {col.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        href={it.href}
                        className="break-all text-foreground/80 transition-colors hover:text-[var(--gold)]"
                      >
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* CAC Verified strip */}
        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--highlight)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--highlight)]" />
            </span>
            <span className="font-mono uppercase tracking-widest">
              CAC Verified · Status: {company.status}
            </span>
            <a
              href={company.cacVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[var(--gold)] hover:underline"
            >
              Verify
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
          <div className="flex items-center gap-2 font-mono uppercase tracking-widest">
            <Gem size={9} className="text-[var(--gold)]" />
            Ibadan · Nigeria
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} {company.legalName}. All rights reserved.</div>
          <div className="font-mono">
            Incorporated {company.incorporatedReadable} under {company.act}
          </div>
        </div>
      </div>

      {/* Giant ghost wordmark + gold horizon */}
      <div
        aria-hidden
        className="container-page pointer-events-none relative select-none pb-10"
      >
        <div
          className="font-display text-[18vw] leading-[0.85] tracking-tight"
          style={{
            backgroundImage:
              "linear-gradient(180deg, rgba(245, 239, 224, 0.32) 0%, rgba(245, 239, 224, 0.08) 80%, transparent 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            color: "rgba(245, 239, 224, 0.22)",
          }}
        >
          OSMANI
        </div>
        <div
          className="absolute left-0 right-0 mx-auto h-px max-w-[88%]"
          style={{
            top: "58%",
            background:
              "linear-gradient(90deg, transparent, #C9A961 30%, #C9A961 70%, transparent)",
            opacity: 0.85,
          }}
        />
      </div>
    </footer>
  );
}
