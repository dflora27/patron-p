"use client";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/images/gallery-1.jpg",
  "/images/gallery-2.jpg",
  "/images/gallery-3.jpg",
  "/images/gallery-4.jpg",
  "/images/gallery-5.jpg",
];

export default function PhotoGallery() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  return (
    <section className="py-24 bg-surface overflow-hidden border-t border-hairline/10 relative z-10">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-surface to-transparent z-20 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-surface to-transparent z-20 pointer-events-none" />

      <div className="text-center mb-16 relative z-30">
        <h4 className="text-brand-gold tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4">
          {isEn ? "Gallery" : "Galeri"}
        </h4>
      </div>

      <div className="flex whitespace-nowrap py-4 w-[300vw]">
        <motion.div
          className="flex space-x-6 items-center px-6"
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {[...images, ...images, ...images].map((src, i) => (
            <div
              key={i}
              className="w-[280px] md:w-[450px] aspect-[4/5] md:aspect-[3/4] flex-shrink-0 relative grayscale-[0.6] hover:grayscale-0 transition-all duration-700 rounded-[2rem] overflow-hidden glass p-2 border border-brand-gold/10 hover:border-brand-gold/40 hover:-translate-y-2"
            >
              <div className="relative w-full h-full rounded-3xl overflow-hidden">
                <Image
                  src={src}
                  alt={`Patron galeri — ${i + 1}`}
                  fill
                  sizes="(max-width: 768px) 280px, 450px"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
