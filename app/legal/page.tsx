import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";
import { PageShell, PageSection, KeyValueGrid } from "@/components/site/page-shell";
import { company, addressLine } from "@/lib/company";

export const metadata: Metadata = {
  title: "Legal",
  description:
    "Corporate, registration, and legal details for Osmani Technologies Limited.",
};

export default function LegalPage() {
  return (
    <PageShell
      eyebrow="Legal"
      title="Corporate details."
      intro="Verifiable registration and compliance information for Osmani Technologies Limited, as filed with the Corporate Affairs Commission of Nigeria."
    >
      <PageSection heading="Company registration">
        <KeyValueGrid
          items={[
            { label: "Legal name", value: company.legalName },
            { label: "Trading name", value: company.shortName },
            { label: "RC number", value: company.rcNumber },
            { label: "TIN", value: company.tin },
            { label: "Company type", value: company.type },
            { label: "Incorporated", value: `${company.incorporatedReadable} (${company.act})` },
            { label: "Status", value: company.status },
            { label: "Registered office", value: addressLine() },
            {
              label: "Registered email",
              value: (
                <a className="hover:text-[var(--gold)]" href={`mailto:${company.email.primary}`}>
                  {company.email.primary}
                </a>
              ),
            },
            { label: "Stamp Duty cert no.", value: company.stampDutyCertNo },
          ]}
        />
      </PageSection>

      <PageSection heading="Verify">
        <div className="space-y-4 rounded-2xl border border-border bg-card p-6 text-sm text-foreground/85">
          <p>
            Osmani Technologies Limited is registered with the Corporate Affairs
            Commission of Nigeria under the Companies and Allied Matters Act,
            2020.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={company.cacVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--gold)]/40 bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-[var(--gold)] hover:text-background"
            >
              Search CAC registry
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <a
              href={company.stampDutyVerifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[var(--gold)]/60"
            >
              Verify stamp duty
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </PageSection>

      <PageSection heading="Principal business activity">
        <p className="rounded-2xl border border-border bg-card p-6 text-sm leading-relaxed text-foreground/85">
          {company.description}
        </p>
      </PageSection>

      <PageSection heading="Legal notices">
        <ul className="space-y-2 text-sm text-foreground/85">
          <li>
            All trademarks, logos, and brand marks displayed on this site —
            including the Osmani mark and Chattōsales — are property of{" "}
            {company.legalName} and used under license.
          </li>
          <li>
            For legal notices and correspondence, please email{" "}
            <a className="text-[var(--gold)] hover:underline" href={`mailto:${company.email.primary}`}>
              {company.email.primary}
            </a>{" "}
            and address the registered office above.
          </li>
          <li>
            This site is operated by {company.legalName}. Information may change
            without notice.
          </li>
        </ul>
      </PageSection>
    </PageShell>
  );
}
