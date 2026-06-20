"use client";

import * as React from "react";

/**
 * CursorSpotlight — a fixed soft warm glow that follows the cursor.
 * Adds tactile depth to the dark forest background. Disabled on touch /
 * reduced-motion users.
 */
export function CursorSpotlight() {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let frame = 0;
    let pendingX = 0;
    let pendingY = 0;

    const apply = () => {
      el.style.setProperty("--mx", `${pendingX}px`);
      el.style.setProperty("--my", `${pendingY}px`);
      frame = 0;
    };

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      if (!frame) frame = requestAnimationFrame(apply);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="spotlight-layer pointer-events-none fixed inset-0 z-30 hidden md:block"
    />
  );
}
