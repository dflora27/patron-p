"use client";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { WHATSAPP } from "@/lib/seo";

type NavItem = { tr: string; en: string; trHref: string; enHref: string };

const NAV_ITEMS: NavItem[] = [
  { tr: "Hakkımızda",    en: "About",    trHref: "/hakkimizda", enHref: "/en/about" },
  { tr: "Ekibimiz",      en: "Team",     trHref: "/ekibimiz",   enHref: "/en/team" },
  { tr: "Hizmetlerimiz", en: "Services", trHref: "/hizmetler",  enHref: "/en/services" },
  { tr: "Fiyatlar",      en: "Pricing",  trHref: "/fiyatlar",   enHref: "/en/pricing" },
  { tr: "Blog",          en: "Journal",  trHref: "/journal",    enHref: "/en/journal" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname() || "";
  const router = useRouter();
  const isEn = pathname.startsWith("/en");

  const toggleLang = () => {
    if (isEn) router.push(pathname.replace(/^\/en/, "") || "/");
    else router.push("/en" + pathname);
  };

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const linkHref = (item: NavItem) => (isEn ? item.enHref : item.trHref);
  const linkLabel = (item: NavItem) => (isEn ? item.en : item.tr);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled ? "pt-4 px-4" : "pt-6 px-6"
        }`}
      >
        <div
          className={`mx-auto flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "h-[72px] w-[98%] max-w-[90rem] bg-surface/70 backdrop-blur-2xl border border-brand-gold/30 rounded-full px-6 md:px-10 shadow-[0_20px_40px_rgba(0,0,0,0.45)]"
              : "h-[80px] w-full max-w-[90rem] bg-transparent px-0 border-transparent"
          }`}
        >
          <Link
            href={isEn ? "/en" : "/"}
            aria-label="Patron Erkek Kuaförü — anasayfa"
            className="flex items-center cursor-pointer group z-50 shrink-0 pr-4"
          >
            <img
              src="/images/logo.png"
              alt="Patron Erkek Kuaförü"
              className={`w-auto object-contain transition-all duration-700 origin-left ${
                isScrolled ? "h-10 scale-100" : "h-14 scale-110 md:h-20"
              }`}
            />
          </Link>

          <nav
            aria-label="Ana menü"
            className="hidden md:flex items-center gap-4 lg:gap-6 font-sans text-[10px] xl:text-[11px] tracking-[0.2em] uppercase font-bold text-foreground-muted"
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.trHref}
                href={linkHref(item)}
                className="hover:text-brand-gold transition-colors"
              >
                {linkLabel(item)}
              </Link>
            ))}

            <div className="flex items-center gap-3 border-l border-hairline/20 pl-4 ml-2">
              <ThemeToggle compact />
              <button
                type="button"
                onClick={toggleLang}
                aria-label={isEn ? "Türkçeye geç" : "Switch to English"}
                className="flex items-center gap-2 text-[10px] font-bold cursor-pointer"
              >
                <span className={!isEn ? "text-brand-gold" : "text-foreground-subtle hover:text-foreground transition-colors"}>TR</span>
                <span className="text-foreground-subtle/50" aria-hidden>|</span>
                <span className={isEn ? "text-brand-gold" : "text-foreground-subtle hover:text-foreground transition-colors"}>EN</span>
              </button>
            </div>
          </nav>

          <div className="flex items-center gap-3 md:gap-4 z-50">
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center uppercase font-bold transition-all duration-500 ${
                isScrolled
                  ? "text-[10px] tracking-[0.2em] bg-brand-cinnamon text-white px-6 py-3 rounded-full hover:bg-brand-gold hover:text-white hover:shadow-[0_0_22px_rgba(89,133,101,0.45)]"
                  : "text-[11px] tracking-[0.25em] border border-brand-cinnamon/70 text-brand-cinnamon px-8 py-3 rounded-full hover:bg-brand-cinnamon hover:text-white bg-surface/40 backdrop-blur-sm"
              }`}
            >
              {isEn ? "Book Now" : "Rezervasyon"}
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
              aria-expanded={menuOpen}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-surface-elevated/70 backdrop-blur text-brand-gold border border-brand-gold/30 hover:bg-brand-gold hover:text-white transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          clipPath: menuOpen ? "circle(150% at 50% 50%)" : "circle(0% at 90% 10%)",
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[90] bg-surface/95 backdrop-blur-3xl flex flex-col items-center justify-center pointer-events-none"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center gap-8 md:gap-10 text-center pointer-events-auto w-full relative px-6">
          <div className="absolute -top-10 right-6 md:right-10 flex items-center gap-4">
            <ThemeToggle compact />
            <button
              type="button"
              onClick={toggleLang}
              className="flex items-center gap-3 text-xs font-bold tracking-widest cursor-pointer"
              aria-label={isEn ? "Türkçeye geç" : "Switch to English"}
            >
              <span className={!isEn ? "text-brand-gold" : "text-foreground-subtle"}>TR</span>
              <span className="text-foreground-subtle/50" aria-hidden>|</span>
              <span className={isEn ? "text-brand-gold" : "text-foreground-subtle"}>EN</span>
            </button>
          </div>

          <img src="/images/emblem.png" alt="" aria-hidden className="w-16 opacity-30 mb-2 filter grayscale" />

          {NAV_ITEMS.map((item) => (
            <Link
              key={item.trHref}
              href={linkHref(item)}
              onClick={() => setMenuOpen(false)}
              className="font-serif text-3xl md:text-5xl text-foreground hover:text-brand-gold transition-colors"
            >
              {linkLabel(item)}
            </Link>
          ))}

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="mt-6 bg-brand-cinnamon text-white px-12 py-5 uppercase text-[11px] font-bold tracking-[0.3em] rounded-full shadow-[0_0_30px_rgba(167,77,58,0.3)] hover:bg-brand-gold hover:shadow-[0_0_30px_rgba(89,133,101,0.5)] transition-all"
          >
            {isEn ? "Book Appointment" : "Hemen Randevu Al"}
          </a>
        </div>
      </motion.div>
    </>
  );
}
