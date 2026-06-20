import * as React from "react";
import { cn } from "@/lib/utils";

type GemProps = Omit<React.SVGProps<SVGSVGElement>, "strokeWidth"> & {
  size?: number;
};

/**
 * GemWatermark — large outlined gem used as a faint background mark.
 * Uses vector-effect: non-scaling-stroke so the line stays hairline even
 * when the SVG is scaled up to hundreds of pixels.
 */
export function GemWatermark({
  size = 480,
  className,
  ...props
}: GemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
      {...props}
    >
      <g
        stroke="currentColor"
        strokeLinejoin="round"
        fill="none"
        style={{ vectorEffect: "non-scaling-stroke" }}
      >
        <path d="M 7 1 L 12.5 5 L 9.5 13 L 4.5 13 L 1.5 5 Z" strokeWidth={1.4} />
        <path d="M 1.5 5 L 7 5 L 12.5 5" strokeWidth={1} opacity="0.7" />
        <path d="M 7 1 L 7 5" strokeWidth={1} opacity="0.7" />
        <path d="M 1.5 5 L 7 13" strokeWidth={1} opacity="0.55" />
        <path d="M 12.5 5 L 7 13" strokeWidth={1} opacity="0.55" />
        <path d="M 7 5 L 7 13" strokeWidth={1} opacity="0.55" />
      </g>
    </svg>
  );
}

/**
 * Faceted gem mark — Osmani's signature ornament. Used as bullet markers,
 * eyebrow flourishes, divider centerpieces, and section sigils.
 */
export function Gem({ size = 14, className, ...props }: GemProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden
      className={cn("shrink-0", className)}
      {...props}
    >
      {/* Outer silhouette */}
      <path
        d="M 7 1 L 12.5 5 L 9.5 13 L 4.5 13 L 1.5 5 Z"
        stroke="currentColor"
        strokeWidth="0.7"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Top facets */}
      <path
        d="M 1.5 5 L 7 5 L 12.5 5"
        stroke="currentColor"
        strokeWidth="0.45"
        opacity="0.7"
      />
      <path d="M 7 1 L 7 5" stroke="currentColor" strokeWidth="0.45" opacity="0.7" />
      {/* Bottom facets converging to point */}
      <path d="M 1.5 5 L 7 13" stroke="currentColor" strokeWidth="0.45" opacity="0.5" />
      <path d="M 12.5 5 L 7 13" stroke="currentColor" strokeWidth="0.45" opacity="0.5" />
      <path d="M 7 5 L 7 13" stroke="currentColor" strokeWidth="0.45" opacity="0.5" />
    </svg>
  );
}

/**
 * GemRule — a horizontal hairline with a gem centered in it.
 * Use as a refined section separator.
 */
export function GemRule({ className }: { className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-4 text-[var(--gold)]", className)}
    >
      <span className="h-px flex-1 bg-current/30" />
      <Gem size={14} className="text-[var(--gold)] animate-facet-pulse" />
      <span className="h-px flex-1 bg-current/30" />
    </div>
  );
}
