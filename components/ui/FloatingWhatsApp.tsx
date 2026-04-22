"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { WHATSAPP } from "@/lib/seo";

const SESSION_KEY = "patron-wa-tooltip-dismissed";
const OPEN_DELAY_MS = 5000;

export default function FloatingWhatsApp() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window === "undefined") return;
    const dismissed = sessionStorage.getItem(SESSION_KEY);
    if (dismissed) return;
    const timer = window.setTimeout(() => setTooltipOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  const dismiss = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setTooltipOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* storage disabled */
    }
  };

  const message = isEn
    ? "Need an appointment? I'm right here 👋"
    : "Randevu mu almak istiyorsun? Buradayım 👋";
  const ctaLabel = isEn ? "Chat on WhatsApp" : "WhatsApp'tan Yaz";
  const dismissLabel = isEn ? "Dismiss" : "Kapat";

  if (!mounted) return null;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-[100] flex items-end gap-3">
      <AnimatePresence>
        {tooltipOpen && (
          <motion.div
            key="wa-tooltip"
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-live="polite"
            aria-label={message}
            className="relative max-w-[260px] md:max-w-[300px] bg-surface-elevated border border-brand-gold/40 rounded-2xl rounded-br-sm shadow-[0_10px_40px_rgba(0,0,0,0.35)] px-4 py-3 pr-10"
          >
            <button
              type="button"
              onClick={dismiss}
              aria-label={dismissLabel}
              className="absolute top-2 right-2 w-6 h-6 flex items-center justify-center text-foreground-subtle hover:text-foreground rounded-full transition-colors"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <p className="font-serif text-foreground text-sm md:text-base leading-snug mb-2">
              {message}
            </p>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-brand-gold text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-bold hover:underline"
            >
              {ctaLabel} →
            </a>
            <span
              aria-hidden
              className="absolute -bottom-1 right-6 w-3 h-3 bg-surface-elevated border-r border-b border-brand-gold/40 rotate-45"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href={`https://wa.me/${WHATSAPP}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={isEn ? "Open WhatsApp chat" : "WhatsApp sohbetini aç"}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.08 }}
        className="relative bg-surface-elevated w-14 h-14 rounded-full flex items-center justify-center border border-brand-gold shadow-[0_4px_20px_rgba(89,133,101,0.35)] cursor-pointer group"
      >
        {!tooltipOpen && (
          <span aria-hidden className="absolute inset-0 rounded-full bg-brand-gold/30 pulse-ring" />
        )}
        <svg className="w-7 h-7 text-brand-gold group-hover:text-foreground transition-colors relative z-10" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
      </motion.a>
    </div>
  );
}
