"use client";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

export default function BrandsMarquee() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  const brandLogos = [
    "/images/brand-1.png",
    "/images/brand-2.png",
    "/images/brand-3.png",
    "/images/brand-4.png",
    "/images/brand-5.png",
    "/images/brand-6.png"
  ];

  return (
    <section id="brands" className="py-24 bg-brand-green/20 overflow-hidden relative border-y border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <h3 className="font-serif text-3xl md:text-4xl text-white">
          {isEn ? "Brands We Use" : "Kullandığımız Markalar"}
        </h3>
        <p className="font-sans text-brand-gold uppercase tracking-[0.2em] text-[10px] md:text-xs mt-4">
          {isEn ? "For FINEST GENTLEMEN OF IZMIR WE USE ONLY THE WORLD'S BEST PRODUCTS." : "İzmir'in en iyi beyefendileri için sadece dünyanın en iyi ürünlerini kullanıyoruz."}
        </p>
      </div>

      <div className="flex whitespace-nowrap overflow-hidden py-10 opacity-30">
        <motion.div
          className="flex space-x-16 px-8 items-center"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {/* Repeating elements to create infinite scroll effect */}
          {[...brandLogos, ...brandLogos, ...brandLogos].map((src, i) => (
            <div key={i} className="flex space-x-16 items-center">
              <img src={src} alt="Brand Logo" className="h-12 w-auto object-contain filter grayscale invert opacity-50 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-500" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              <span className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold text-xs">·</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
