"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const servicesTr = [
  { name: "Saç-Sakal Kesim", price: "1.600 TL" },
  { name: "Saç Kesim", price: "1.100 TL" },
  { name: "Sakal Kesim", price: "500 TL" },
  { name: "Ferdi Bakır Saç Kesimi", price: "1.300 TL" },
  { name: "Ferdi Bakır Sakal Kesimi", price: "600 TL" },
  { name: "Kaş Şekillendirme", price: "500 TL" },
  { name: "Pigmentasyon", price: "1.000 TL" },
  { name: "Fön", price: "500 TL" },
  { name: "Manikür", price: "800 TL" },
  { name: "Pedikür", price: "1.200 TL" },
  { name: "Cilt Bakım", price: "2.000 TL" },
  { name: "Davines Saç Bakımı", price: "1.100 TL" },
  { name: "Keratin", price: "2.000 TL'den başlayan" },
  { name: "Perma", price: "5.000 TL'den başlayan" },
  { name: "Damat Paketi", price: "7.500 TL" },
];

const servicesEn = [
  { name: "Hair & Beard Cut", price: "1,600 TL" },
  { name: "Haircut", price: "1,100 TL" },
  { name: "Beard Trim", price: "500 TL" },
  { name: "Ferdi Bakır Haircut", price: "1,300 TL" },
  { name: "Ferdi Bakır Beard Trim", price: "600 TL" },
  { name: "Eyebrow Shaping", price: "500 TL" },
  { name: "Pigmentation", price: "1,000 TL" },
  { name: "Blow Dry", price: "500 TL" },
  { name: "Manicure", price: "800 TL" },
  { name: "Pedicure", price: "1,200 TL" },
  { name: "Skin Care", price: "2,000 TL" },
  { name: "Davines Hair Care", price: "1,100 TL" },
  { name: "Keratin", price: "from 2,000 TL" },
  { name: "Perm", price: "from 5,000 TL" },
  { name: "Groom Package", price: "7,500 TL" },
];

type Props = {
  variant?: "preview" | "detailed";
};

export default function PricingSection({ variant = "preview" }: Props) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const services = isEn ? servicesEn : servicesTr;
  const pricingHref = isEn ? "/en/pricing" : "/fiyatlar";

  return (
    <section
      id="pricing"
      className="py-24 md:py-32 px-6 bg-surface relative border-t border-brand-gold/10 overflow-hidden"
    >
      <div className="ambient-glow-green -left-1/4 top-0 opacity-20"></div>
      <div className="ambient-glow-gold -right-1/4 bottom-0 opacity-10"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold tracking-[0.3em] text-xs font-bold uppercase mb-4"
          >
            {isEn ? "Pricing" : "Fiyatlarımız"}
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-foreground"
          >
            {isEn ? "Service Menu" : "Hizmet Menüsü"}
          </motion.h2>
          <p className="mt-4 font-sans text-sm text-foreground-muted max-w-lg mx-auto">
            {isEn
              ? "Transparent pricing. All cuts include wash, hot-towel treatment and styling."
              : "Şeffaf fiyatlandırma. Tüm kesimlerimize yıkama, sıcak havlu ritüeli ve şekillendirme dahildir."}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-surface-elevated p-8 md:p-12 rounded-2xl border border-brand-gold/15 relative shadow-xl"
        >
          <h3 className="font-serif text-2xl md:text-3xl text-brand-gold mb-10 text-center border-b border-brand-gold/20 pb-6 uppercase tracking-widest">
            {isEn ? "Price List" : "Fiyat Listemiz"}
          </h3>
          <ul className="flex flex-col gap-4">
            {services.map((s, i) => (
              <li
                key={i}
                className="flex justify-between items-end font-sans group"
              >
                <span className="text-foreground-muted text-[11px] md:text-xs pr-4 uppercase tracking-widest group-hover:text-brand-gold transition-colors">
                  {s.name}
                </span>
                <div className="flex-1 border-b border-dotted border-hairline/30 mb-1.5 mx-2"></div>
                <span className="text-foreground text-xs md:text-sm font-medium pl-4">
                  {s.price}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-[10px] md:text-[11px] text-foreground-subtle text-center uppercase tracking-[0.25em]">
            {isEn
              ? "Prices may change for seasonal promotions."
              : "Sezonluk kampanyalarda fiyatlar değişebilir."}
          </p>
        </motion.div>

        {variant === "preview" && (
          <div className="text-center mt-10">
            <Link
              href={pricingHref}
              className="inline-flex items-center gap-3 text-brand-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:text-foreground transition-colors"
            >
              {isEn ? "Full Service Menu" : "Tüm Hizmet Menüsü"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
