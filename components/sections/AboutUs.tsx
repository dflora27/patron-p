"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const aboutHref = isEn ? "/en/about" : "/hakkimizda";

  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6 bg-surface-muted relative overflow-hidden"
    >
      <div className="ambient-glow-green -top-20 -left-20"></div>
      <div className="ambient-glow-gold bottom-0 right-0 opacity-40"></div>

      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16 md:gap-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="md:w-1/2 flex flex-col justify-center glass p-8 md:p-14 rounded-2xl relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full md:w-[80%] md:h-[80%] opacity-[0.03] z-0 pointer-events-none flex items-center justify-center">
            <Image
              src="/images/emblem.png"
              alt=""
              aria-hidden
              width={320}
              height={320}
              className="w-[80%] h-auto object-contain filter grayscale"
            />
          </div>

          <div className="flex items-center gap-4 mb-6 relative z-10">
            <div className="h-[1px] w-12 bg-brand-gold"></div>
            <span className="uppercase text-brand-gold tracking-[0.2em] text-sm font-bold">
              {isEn ? "About Us" : "Hakkımızda"}
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-tight mb-8 relative z-10">
            {isEn ? "You are not a customer here," : "Burada müşteri yok,"}<br />
            <span className="text-brand-gold italic">
              {isEn ? "you are a guest." : "siz bir misafirsiniz."}
            </span>
          </h2>

          <div className="font-sans text-foreground-muted space-y-5 text-sm md:text-base leading-relaxed font-light relative z-10">
            <p>
              {isEn
                ? "At Patron, we leave traditional salon experiences at the door. From the moment you step in, we embark on a journey designed exclusively for your personal grooming."
                : "Patron'da, sıradan salon deneyimlerini kapının dışında bırakıyoruz. İçeri adım attığınız andan itibaren, tamamen sizin kişisel bakımınıza odaklanan bir serüven başlatıyoruz."}
            </p>
            <p>
              {isEn
                ? "Accompanied by custom playlists, signature coffees, and our expert team, time slows down and your comfort takes precedence."
                : "Özel seçilmiş müzikler, imza kahvelerimiz ve uzman kadromuz eşliğinde; zaman yavaşlar ve konforunuz merkeze alınır."}
            </p>
          </div>

          <Link
            href={aboutHref}
            className="relative z-10 inline-flex items-center gap-3 mt-8 text-brand-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:text-foreground transition-colors"
          >
            {isEn ? "Read Our Story" : "Hikayemizi Oku"}
            <span aria-hidden>→</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="md:w-1/2 relative w-full justify-center hidden md:flex"
        >
          <div className="w-full max-w-sm aspect-[3/4] rounded-[100px] border border-brand-gold/10 overflow-hidden relative shadow-2xl p-2 glass">
            <div className="w-full h-full rounded-[90px] overflow-hidden relative">
              <Image
                src="/images/gallery-1.jpg"
                alt="Patron Erkek Kuaförü — salon ambiyans"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-[2s] sepia-[.2] contrast-125 brightness-75"
              />
            </div>
          </div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="absolute -bottom-8 -left-8 glass px-6 py-4 rounded-xl flex items-center gap-4 border border-brand-gold/30"
          >
            <div className="w-3 h-3 bg-brand-gold rounded-full animate-pulse"></div>
            <div className="text-left">
              <div className="text-foreground font-serif text-xl border-b border-brand-gold/20 leading-tight">
                Ferdi <br />Bakır
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
