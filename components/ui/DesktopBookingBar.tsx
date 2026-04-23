"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { waLink, WA_MESSAGES, HOURS } from "@/lib/seo";

/**
 * Desktop-only sticky bar that surfaces after the user has scrolled past
 * the hero. Mirrors StickyMobileCta but built for wider screens with
 * opening-hours context and a direct wizard entry.
 */
export default function DesktopBookingBar() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hide once the user reaches the page footer so we don't sit on top of it.
      const scrolled = window.scrollY > 720;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 240;
      setVisible(scrolled && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const bookHref = isEn ? "/en/book" : "/randevu";
  const hoursNow = `${isEn ? HOURS.weekdayEn : HOURS.weekdayTr} · ${HOURS.weekday}`;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="desktop-booking-bar"
          initial={{ y: 90, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 90, opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="hidden md:block fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] pointer-events-none"
        >
          <div className="pointer-events-auto flex items-center gap-5 bg-surface-elevated/90 backdrop-blur-xl border border-brand-gold/30 rounded-full pl-5 pr-2 py-2 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"
              />
              <span className="text-foreground-subtle text-[10px] uppercase tracking-[0.25em] font-bold">
                {isEn ? "Open now" : "Şu an açık"}
              </span>
              <span className="text-foreground-subtle/50 text-xs" aria-hidden>·</span>
              <span className="text-foreground text-xs font-sans">{hoursNow}</span>
            </div>

            <span className="w-px h-6 bg-hairline/20" aria-hidden />

            <a
              href={waLink(isEn ? WA_MESSAGES.generalEn : WA_MESSAGES.generalTr)}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold text-[11px] uppercase tracking-[0.2em] font-bold hover:text-foreground transition-colors"
            >
              {isEn ? "Quick WhatsApp" : "Hızlı WhatsApp"}
            </a>

            <Link
              href={bookHref}
              className="bg-brand-cinnamon text-white px-6 py-3 rounded-full text-[11px] uppercase tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors shadow-md"
            >
              {isEn ? "Book Now" : "Randevu Al"}
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
