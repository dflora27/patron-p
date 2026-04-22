"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/content/services";

type Props = {
  variant?: "preview" | "detailed";
};

export default function ServicesGrid({ variant = "preview" }: Props) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const servicesHref = isEn ? "/en/services" : "/hizmetler";

  // Home page shows first three services as a preview
  const list = variant === "preview" ? SERVICES.slice(0, 3) : SERVICES;

  return (
    <section
      id="services"
      className="py-24 md:py-32 px-6 bg-surface-elevated relative border-t border-brand-gold/10"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-gold/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-gold tracking-[0.25em] text-xs md:text-sm uppercase mb-4 font-bold"
          >
            {isEn ? "Masterclass" : "Önde Gelen"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="font-serif text-3xl md:text-5xl text-foreground"
          >
            {isEn ? "Signature Services" : "İmza Hizmetler"}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {list.map((service, idx) => (
            <motion.article
              key={service.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="group"
            >
              <Link
                href={servicesHref}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xl"
              >
                <div className="w-full aspect-[3/4] overflow-hidden bg-surface mb-6 relative border border-brand-gold/5 rounded-xl">
                  <Image
                    src={service.image}
                    alt={isEn ? service.titleEn : service.titleTr}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-in-out grayscale group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-brand-gold text-xs tracking-widest uppercase mb-2">
                      {isEn ? service.subtitleEn : service.subtitleTr}
                    </p>
                    <h3 className="font-serif text-2xl text-white">
                      {isEn ? service.titleEn : service.titleTr}
                    </h3>
                  </div>
                </div>

                <div className="px-1">
                  <p className="font-sans text-foreground-muted text-sm leading-relaxed">
                    {isEn ? service.descEn : service.descTr}
                  </p>
                  <div className="mt-4 w-12 h-px bg-brand-gold/50 group-hover:w-full transition-all duration-700"></div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {variant === "preview" && (
          <div className="text-center mt-14">
            <Link
              href={servicesHref}
              className="inline-flex items-center gap-3 text-brand-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:text-foreground transition-colors"
            >
              {isEn ? "All Services" : "Tüm Hizmetler"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
