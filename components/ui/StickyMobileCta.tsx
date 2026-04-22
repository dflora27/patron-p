"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { waLink, WA_MESSAGES, PHONE } from "@/lib/seo";

/**
 * Sticky action bar shown only on mobile after a user has scrolled a bit.
 * Two primary actions: call + WhatsApp. Desktop users get the full Book
 * button in the navbar instead.
 */
export default function StickyMobileCta() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="sticky-cta"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="md:hidden fixed bottom-0 left-0 right-0 z-[95] px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 pointer-events-none"
        >
          <div className="pointer-events-auto bg-surface-elevated/95 backdrop-blur-xl border border-brand-gold/30 rounded-2xl shadow-[0_-8px_30px_rgba(0,0,0,0.25)] flex items-stretch gap-2 p-2">
            <a
              href={`tel:${PHONE}`}
              aria-label={isEn ? "Call Patron" : "Patron'u ara"}
              className="flex-1 flex items-center justify-center gap-2 bg-transparent border border-brand-gold/40 text-brand-gold rounded-xl py-3 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-gold/10 transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              {isEn ? "Call" : "Ara"}
            </a>
            <a
              href={waLink(isEn ? WA_MESSAGES.generalEn : WA_MESSAGES.generalTr)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={isEn ? "Book via WhatsApp" : "WhatsApp'tan randevu al"}
              className="flex-[1.5] flex items-center justify-center gap-2 bg-brand-cinnamon text-white rounded-xl py-3 font-bold uppercase tracking-[0.2em] text-[10px] hover:bg-brand-gold transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm5.72 14.07c-.24.67-1.4 1.3-1.94 1.38-.5.08-1.13.11-1.82-.11-.42-.13-.96-.31-1.65-.61-2.91-1.26-4.81-4.18-4.96-4.37-.14-.19-1.17-1.55-1.17-2.96s.73-2.1 1-2.39c.26-.29.57-.36.76-.36.19 0 .39 0 .56.01.18.01.42-.07.66.5.24.58.83 2.01.9 2.16.07.15.12.32.02.51-.1.19-.15.31-.29.48-.15.17-.31.37-.44.5-.15.15-.3.31-.13.6.17.29.77 1.27 1.65 2.06 1.13.99 2.09 1.3 2.39 1.44.29.15.47.12.64-.07.17-.19.74-.86.94-1.16.19-.29.39-.24.65-.14.27.1 1.71.81 2 .96.29.14.48.22.55.34.07.11.07.67-.17 1.34z" />
              </svg>
              {isEn ? "WhatsApp Book" : "WhatsApp Randevu"}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
