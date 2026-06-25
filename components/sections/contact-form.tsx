"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { company } from "@/lib/company";

const intents = [
  "General inquiry",
  "Partnership",
  "Investment",
  "Services",
  "Press",
  "Careers",
] as const;

type Intent = (typeof intents)[number];

export function ContactForm() {
  const [intent, setIntent] = React.useState<Intent>("General inquiry");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [companyField, setCompanyField] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `[${intent}] from ${name || "—"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${companyField}`,
      `Intent: ${intent}`,
      "",
      message,
    ].join("\n");
    const url = `mailto:${company.email.primary}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl border border-border bg-card p-8 md:p-10"
    >
      <div className="mb-8">
        <Label className="mb-3 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
          I&apos;m reaching out about
        </Label>
        <div className="flex flex-wrap gap-2">
          {intents.map((it) => (
            <button
              key={it}
              type="button"
              onClick={() => setIntent(it)}
              className={`rounded-full border px-3.5 py-1.5 text-sm transition-all ${
                intent === it
                  ? "border-[var(--brass)] bg-[var(--brass)]/10 text-[var(--brass)]"
                  : "border-border bg-background text-muted-foreground hover:text-foreground"
              }`}
            >
              {it}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Name">
          <Input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
          />
        </Field>
        <Field label="Email">
          <Input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
          />
        </Field>
        <Field label="Company" className="md:col-span-2">
          <Input
            value={companyField}
            onChange={(e) => setCompanyField(e.target.value)}
            placeholder="Optional"
          />
        </Field>
        <Field label="Message" className="md:col-span-2">
          <Textarea
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tell us what you have in mind."
            rows={6}
          />
        </Field>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted by Osmani Technologies.
        </p>
        <button
          type="submit"
          className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.02]"
        >
          {submitted ? "Opened in mail client" : "Send message"}
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-2 block text-xs font-medium uppercase tracking-widest text-muted-foreground">
        {label}
      </Label>
      {children}
    </div>
  );
}
