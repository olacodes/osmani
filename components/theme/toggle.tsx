"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);

  // Reserve space before mount to prevent layout shift.
  if (!mounted) {
    return (
      <span
        aria-hidden
        className="grid h-9 w-9 place-items-center rounded-full border border-border"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-foreground transition-all hover:border-[var(--brass)] hover:text-[var(--brass)]"
    >
      {isDark ? (
        <Sun className="h-4 w-4 transition-transform group-hover:rotate-45" />
      ) : (
        <Moon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
      )}
    </button>
  );
}
