"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { WHATSAPP, PHONE, SOCIALS } from "@/lib/seo";

export default function ParallaxHero() {
  const { scrollY } = useScroll();
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Parallax Image Background */}
      <motion.div
        className="absolute top-0 left-0 w-full h-[120%] z-0"
        style={{ y: yBg }}
      >
        <Image
          src="/images/craftsman.jpg"
          alt="Patron Erkek Kuaförü — usta dokunuşu"
          fill
          priority
          sizes="100vw"
          className="object-cover grayscale-[0.5] contrast-125"
        />
        <div className="absolute inset-0 bg-black/35 z-10" aria-hidden />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent z-10" aria-hidden />
      </motion.div>

      {/* Hero Content — text is white in both themes because the hero is dark */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 flex flex-col items-center md:items-start text-center md:text-left pt-20">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-6 flex items-center justify-center md:justify-start gap-4"
          >
            <span className="h-[1px] w-12 bg-brand-gold" />
            <span className="uppercase text-brand-gold tracking-[0.3em] text-xs font-bold">
              {isEn ? "Patron Barbershop" : "Patron Erkek Kuaförü"}
            </span>
            <span className="h-[1px] w-12 bg-brand-gold md:hidden" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8"
          >
            {isEn ? "Gentlemen" : "Kendine"}
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-[#A2C7AD] italic pr-2">
              {isEn ? "Who Care" : "Değer Verenler"}
            </span>
            <br />
            {isEn ? "Are Here." : "Burada."}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="font-sans text-white/70 text-sm md:text-base max-w-xl font-light leading-relaxed"
          >
            {isEn
              ? "Prestigious beginnings in Izmir's heart. More than just a haircut — a sanctuary for modern gentlemen where heritage meets contemporary grooming."
              : "İzmir'in kalbinde, zamansız bir kişisel bakım deneyimi. Yalnızca bir saç kesimi değil, modern beyefendiler için özel bir kaçış noktası."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mt-8"
          >
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-auto text-center bg-brand-gold text-white px-10 py-5 uppercase text-xs font-bold tracking-[0.2em] hover:bg-brand-cinnamon transition-colors shadow-lg shadow-brand-gold/20"
            >
              {isEn ? "Book Appointment" : "Randevu Al"}
            </a>
            <a
              href={`tel:${PHONE}`}
              className="sm:w-auto text-center bg-white/5 border border-white/20 text-white px-10 py-5 uppercase text-[10px] tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all"
            >
              {isEn ? "Call Now" : "Hemen Ara"}
            </a>
            <a
              href={SOCIALS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="sm:w-auto text-center bg-white/5 border border-white/20 text-white px-10 py-5 uppercase text-[10px] tracking-widest hover:border-brand-gold hover:text-brand-gold transition-all"
            >
              {isEn ? "Get Directions" : "Yol Tarifi"}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/70 font-bold">
          {isEn ? "Scroll" : "Keşfet"}
        </span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden relative">
          <motion.div
            className="w-full h-full bg-brand-gold origin-top"
            animate={{ scaleY: [0, 1, 0], translateY: ["-100%", "0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
