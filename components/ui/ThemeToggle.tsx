"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const active = (mounted ? (theme ?? resolvedTheme) : "dark") === "dark" ? "dark" : "light";
  const isDark = active === "dark";

  const label = isDark ? "Aydınlık moda geç" : "Karanlık moda geç";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className={`relative inline-flex items-center justify-center rounded-full border border-hairline/20 bg-surface-elevated/70 text-foreground backdrop-blur transition-colors hover:border-brand-gold/60 hover:text-brand-gold ${
        compact ? "w-9 h-9" : "w-10 h-10"
      }`}
    >
      <motion.span
        key={active}
        initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-center"
      >
        {isDark ? (
          // Moon
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
          </svg>
        ) : (
          // Sun
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
          </svg>
        )}
      </motion.span>
    </button>
  );
}
