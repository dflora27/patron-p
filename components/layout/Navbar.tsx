"use client";
import { motion, useScroll } from "framer-motion";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname() || "";
  const router = useRouter();
  const isEn = pathname.startsWith('/en');

  const toggleLang = () => {
    if (isEn) router.push(pathname.replace(/^\/en/, '') || '/');
    else router.push('/en' + pathname);
  };

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <>
      {/* Floating Glass Island Navbar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled ? "pt-6 px-4" : "pt-8 px-6"
          }`}
      >
        <div
          className={`mx-auto flex justify-between items-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isScrolled
            ? "h-[72px] w-[98%] max-w-[90rem] bg-[#090909]/70 backdrop-blur-2xl border border-brand-gold/30 rounded-full px-10 shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            : "h-[80px] w-full max-w-[90rem] bg-transparent px-0 border-transparent"
            }`}
        >
          {/* Logo Zone */}
          <a href={isEn ? "/en" : "/"} className="flex items-center cursor-pointer group z-50 shrink-0 pr-4">
            <img
              src="/images/logo.png"
              alt="Patron Erkek Kuaförü"
              className={`w-auto object-contain transition-all duration-700 origin-left ${isScrolled ? "h-10 scale-100" : "h-16 scale-110 md:h-20"
                }`}
            />
          </a>

          {/* Centered Desktop Nav */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 font-sans text-[10px] xl:text-[11px] tracking-[0.2em] uppercase font-bold text-gray-300">
            <a href="#about" className="hover:text-brand-gold transition-colors">{isEn ? "About Us" : "Hakkımızda"}</a>
            <a href="#team" className="hover:text-brand-gold transition-colors">{isEn ? "Our Team" : "Ekibimiz"}</a>
            <a href="#services" className="hover:text-brand-gold transition-colors">{isEn ? "SERVICES" : "Hizmetlerimiz"}</a>
            <a href="#pricing" className="hover:text-brand-gold transition-colors">{isEn ? "PRICING" : "Fiyatlar"}</a>
            <a href={isEn ? "/en/journal" : "/journal"} className="hover:text-brand-gold transition-colors">{isEn ? "JOURNAL" : "Blog"}</a>

            {/* Elegant Language Toggle */}
            <div className="flex items-center gap-2 text-[10px] font-bold border-l border-white/20 pl-6 ml-2 cursor-pointer" onClick={toggleLang}>
              <span className={!isEn ? "text-brand-gold" : "text-gray-500 hover:text-white transition-colors"}>TR</span>
              <span className="text-gray-700 cursor-default">|</span>
              <span className={isEn ? "text-brand-gold" : "text-gray-500 hover:text-white transition-colors"}>EN</span>
            </div>
          </nav>

          {/* Right Action Zone */}
          <div className="flex items-center gap-4 z-50">
            <a
              href="https://wa.me/905535737992" target="_blank" rel="noopener noreferrer"
              className={`hidden md:inline-flex items-center justify-center uppercase font-bold transition-all duration-500 ${isScrolled
                ? "text-[10px] tracking-[0.2em] bg-brand-cinnamon text-white px-6 py-3 rounded-full hover:bg-white hover:text-brand-black hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
                : "text-[11px] tracking-[0.25em] border border-brand-cinnamon/70 text-brand-cinnamon px-8 py-3 rounded-full hover:bg-brand-cinnamon hover:text-white bg-brand-obsidian/40 backdrop-blur-sm"
                }`}
            >
              {isEn ? "Book Now" : "Rezervasyon"}
            </a>

            {/* Hamburger Button (Mobile & Unique Menu Trigger) */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-12 h-12 flex items-center justify-center rounded-full bg-brand-obsidian/60 backdrop-blur text-brand-gold border border-brand-gold/30 hover:bg-brand-gold hover:text-brand-black transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {menuOpen ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Fullscreen Expansion Menu */}
      <motion.div
        initial={{ opacity: 0, clipPath: "circle(0% at 90% 10%)" }}
        animate={{
          opacity: menuOpen ? 1 : 0,
          clipPath: menuOpen ? "circle(150% at 50% 50%)" : "circle(0% at 90% 10%)"
        }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[90] bg-[#090909]/95 backdrop-blur-3xl flex flex-col items-center justify-center pointer-events-none"
        style={{ pointerEvents: menuOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center gap-10 text-center pointer-events-auto w-full relative">

          <div className="absolute -top-10 right-10 flex items-center gap-4 text-xs font-bold tracking-widest cursor-pointer" onClick={toggleLang}>
            <span className={!isEn ? "text-brand-gold" : "text-gray-500"}>TR</span>
            <span className="text-gray-700">|</span>
            <span className={isEn ? "text-brand-gold" : "text-gray-500"}>EN</span>
          </div>

          <img src="/images/emblem.png" alt="" className="w-16 opacity-30 mb-2 filter grayscale" />
          <a href="#about" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl text-white hover:text-brand-gold transition-colors">{isEn ? "About Us" : "Hakkımızda"}</a>
          <a href="#team" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl text-white hover:text-brand-gold transition-colors">{isEn ? "Our Team" : "Ekibimiz"}</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl text-white hover:text-brand-gold transition-colors">{isEn ? "Services" : "Hizmetlerimiz"}</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl text-white hover:text-brand-gold transition-colors">{isEn ? "Pricing" : "Fiyatlar"}</a>
          <a href={isEn ? "/en/journal" : "/journal"} onClick={() => setMenuOpen(false)} className="font-serif text-3xl md:text-5xl text-white hover:text-brand-gold transition-colors">{isEn ? "Journal" : "Blog"}</a>

          <a href="https://wa.me/905535737992" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)} className="mt-6 bg-brand-cinnamon text-white px-12 py-5 uppercase text-[11px] font-bold tracking-[0.3em] rounded-full shadow-[0_0_30px_rgba(167,77,58,0.3)]">{isEn ? "Book Appointment" : "Hemen Randevu Al"}</a>
        </div>
      </motion.div>
    </>
  );
}
