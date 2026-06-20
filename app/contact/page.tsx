import type { Metadata } from "next";
import { SiteNav } from "@/components/site/nav";
import { SiteFooter } from "@/components/site/footer";
import { CursorSpotlight } from "@/components/effects/cursor-spotlight";
import { ContactForm } from "@/components/sections/contact-form";
import { Mail, MapPin, Clock, ShieldCheck } from "lucide-react";
import { Gem } from "@/components/effects/gem";
import { company, addressLine } from "@/lib/company";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to Osmani Technologies — partnerships, investments, services, press, and general inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <CursorSpotlight />
      <SiteNav />
      <main className="flex-1 pt-32">
        <section className="container-page pb-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-5 inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.3em] text-[var(--gold)]">
              <Gem size={11} />
              <span>Contact</span>
            </div>
            <h1 className="font-display text-balance text-5xl leading-[1.05] md:text-7xl">
              Let&rsquo;s talk.
            </h1>
            <p className="mt-6 text-balance text-base text-muted-foreground md:text-lg">
              Partnerships, investments, services, press — or just a hello. We
              read everything that comes in.
            </p>
          </div>
        </section>

        <section className="container-page pb-28">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            <aside className="lg:col-span-5 flex flex-col gap-4">
              <InfoCard
                icon={Mail}
                title="Email"
                primary={company.email.primary}
                href={`mailto:${company.email.primary}`}
                lines={["Press, partnerships, and general inquiries."]}
              />
              <InfoCard
                icon={MapPin}
                title="Registered office"
                primary={addressLine()}
                lines={["Headquartered in Ibadan, working with partners across Lagos and beyond."]}
              />
              <InfoCard
                icon={Clock}
                title="Response time"
                primary="Within 2 business days"
                lines={["Mondays–Fridays · West Africa Time"]}
              />
              <InfoCard
                icon={ShieldCheck}
                title="Verified"
                primary={`RC ${company.rcNumber} · Status: ${company.status}`}
                lines={[
                  `TIN ${company.tin}`,
                  `Incorporated ${company.incorporatedReadable} under ${company.act}.`,
                ]}
              />
            </aside>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  primary,
  href,
  lines,
}: {
  icon: typeof Mail;
  title: string;
  primary: string;
  href?: string;
  lines?: string[];
}) {
  const PrimaryEl = href ? "a" : "div";
  return (
    <div className="rounded-2xl border border-border bg-card p-6">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-lg border border-border bg-background">
          <Icon className="h-4 w-4 text-[var(--gold)]" />
        </div>
        <div className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {title}
        </div>
      </div>
      <PrimaryEl
        {...(href ? { href } : {})}
        className="mt-5 block break-words text-base font-medium hover:text-[var(--gold)]"
      >
        {primary}
      </PrimaryEl>
      {lines && (
        <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
          {lines.map((l) => (
            <li key={l}>{l}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
