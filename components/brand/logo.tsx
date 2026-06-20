import * as React from "react";
import { cn } from "@/lib/utils";

type MarkProps = React.SVGProps<SVGSVGElement> & {
  /** Mark visual size in px. Default 28. */
  size?: number;
};

/**
 * OsmaniMark — the standalone icon. An obsidian ring with a gold horizon arc
 * inside, evoking eclipse / rising sun / digital + physical commerce.
 */
export function OsmaniMark({ size = 28, className, ...props }: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      role="img"
      aria-label="Osmani Technologies"
      className={cn("shrink-0", className)}
      {...props}
    >
      {/* Outer ring — the O */}
      <circle
        cx="20"
        cy="20"
        r="17"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      {/* Inner gold horizon — bottom half-disc, slightly inset */}
      <path
        d="M 8.6 20 A 11.4 11.4 0 0 0 31.4 20 Z"
        fill="var(--gold)"
      />
      {/* A small gold pip above the horizon — the sun */}
      <circle cx="20" cy="12.6" r="1.35" fill="var(--gold)" />
    </svg>
  );
}

type LogoProps = React.HTMLAttributes<HTMLDivElement> & {
  size?: number;
  /** Show just the mark (no wordmark). */
  markOnly?: boolean;
};

export function OsmaniLogo({
  size = 26,
  markOnly = false,
  className,
  ...props
}: LogoProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2.5 text-foreground",
        className,
      )}
      {...props}
    >
      <OsmaniMark size={size} />
      {!markOnly && (
        <span
          className="font-sans text-[15px] font-medium tracking-[0.18em] uppercase leading-none"
          style={{ fontFeatureSettings: '"ss01"' }}
        >
          Osmani
        </span>
      )}
    </div>
  );
}
