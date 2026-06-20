import type { Metadata } from "next";
import { PageShell, PageSection } from "@/components/site/page-shell";
import { company } from "@/lib/company";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy for osmani.com.ng.",
};

const effective = "9 May 2026";

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy"
      title="Privacy policy."
      intro={`Effective ${effective}. This site is operated by ${company.legalName} (“Osmani”, “we”). This page explains what we collect, why, and how to reach us about it.`}
    >
      <PageSection heading="What we collect">
        <ul className="space-y-3 text-sm leading-relaxed text-foreground/85">
          <li>
            <strong>Nothing on page load.</strong> osmani.com.ng does not set
            cookies or run third-party analytics at this time.
          </li>
          <li>
            <strong>Contact form submissions.</strong> When you send us a
            message via the contact form, your message opens in your own email
            client and is delivered to{" "}
            <a className="text-[var(--gold)] hover:underline" href={`mailto:${company.email.primary}`}>
              {company.email.primary}
            </a>
            . We receive only what you choose to send.
          </li>
          <li>
            <strong>Server logs.</strong> Our hosting provider (Vercel) may keep
            short-lived access logs for security and abuse prevention. We do
            not link them to identities.
          </li>
        </ul>
      </PageSection>

      <PageSection heading="How we use it">
        <p className="text-sm leading-relaxed text-foreground/85">
          We use what you send only to respond to your inquiry. We do not sell,
          rent, or share your information with third parties for marketing.
        </p>
      </PageSection>

      <PageSection heading="Your choices">
        <p className="text-sm leading-relaxed text-foreground/85">
          You can request that we delete any information you previously sent us
          by emailing{" "}
          <a className="text-[var(--gold)] hover:underline" href={`mailto:${company.email.primary}`}>
            {company.email.primary}
          </a>
          .
        </p>
      </PageSection>

      <PageSection heading="Contact">
        <p className="text-sm leading-relaxed text-foreground/85">
          For privacy questions or complaints, write to{" "}
          <a className="text-[var(--gold)] hover:underline" href={`mailto:${company.email.primary}`}>
            {company.email.primary}
          </a>
          , or by post to our registered office.
        </p>
      </PageSection>

      <PageSection heading="Updates">
        <p className="text-sm leading-relaxed text-foreground/85">
          We may update this policy as the site grows. The effective date at
          the top of the page will change when we do.
        </p>
      </PageSection>
    </PageShell>
  );
}
