"use client";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

export default function PricingSection() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  const patronServicesTr = [
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
    { name: "DavInes Saç Bakımı", price: "1.100 TL" },
    { name: "Keratin", price: "2.000 TL'den başlayan" },
    { name: "Perma", price: "5.000 TL'den başlayan" },
    { name: "Damat Paketi", price: "7.500 TL" }
  ];

  const patronServicesEn = [
    { name: "HaIr & Beard Cut", price: "1.600 TL" },
    { name: "HaIrcut", price: "1.100 TL" },
    { name: "Beard TrIm", price: "500 TL" },
    { name: "FerdI BakIr HaIrcut", price: "1.300 TL" },
    { name: "FerdI BakIr Beard TrIm", price: "600 TL" },
    { name: "Eyebrow ShapIng", price: "500 TL" },
    { name: "PIgmentatIon", price: "1.000 TL" },
    { name: "Blow Dry", price: "500 TL" },
    { name: "ManIcure", price: "800 TL" },
    { name: "PedIcure", price: "1.200 TL" },
    { name: "SkIn Care", price: "2.000 TL" },
    { name: "DavInes HaIr Care", price: "1.100 TL" },
    { name: "KeratIn", price: "From 2.000 TL" },
    { name: "Perm", price: "From 5.000 TL" },
    { name: "Groom Package", price: "7.500 TL" }
  ];

  const nailServicesTr = [
    { name: "Kalıcı Oje", price: "1.300 TL" },
    { name: "Jel Güçlendirme", price: "1.400 TL" },
    { name: "Jel Güçlendirme + Kalıcı Oje", price: "1.500 TL" },
    { name: "Protez Tırnak", price: "1.500 TL" },
    { name: "Protez Tırnak + Kalıcı Oje", price: "1.600 TL" },
    { name: "Pedikür + Kalıcı Oje", price: "1.500 TL" },
    { name: "Manikür", price: "800 TL" },
    { name: "Pedikür", price: "1.200 TL" },
    { name: "Kalıcı Oje Çıkarma", price: "400 TL" },
    { name: "Jel Çıkarma", price: "500 TL" },
    { name: "Tek Tırnak Protez", price: "200 TL" },
    { name: "French", price: "300 TL" },
    { name: "Ombre", price: "300 TL" },
    { name: "Ayna / İnci Tozu", price: "300 TL" },
    { name: "Kedi Gözü", price: "300 TL" },
    { name: "Charm", price: "150 TL" },
    { name: "NaIl Art", price: "150 TL" }
  ];

  const nailServicesEn = [
    { name: "Permanent PolIsh", price: "1.300 TL" },
    { name: "Gel StrengthenIng", price: "1.400 TL" },
    { name: "Gel StrengthenIng + Permanent PolIsh", price: "1.500 TL" },
    { name: "ProsthetIc NaIls", price: "1.500 TL" },
    { name: "ProsthetIc NaIls + Permanent PolIsh", price: "1.600 TL" },
    { name: "PedIcure + Permanent PolIsh", price: "1.500 TL" },
    { name: "ManIcure", price: "800 TL" },
    { name: "PedIcure", price: "1.200 TL" },
    { name: "Permanent PolIsh Removal", price: "400 TL" },
    { name: "Gel Removal", price: "500 TL" },
    { name: "SIngle NaIl ProsthetIc", price: "200 TL" },
    { name: "French", price: "300 TL" },
    { name: "Ombre", price: "300 TL" },
    { name: "MIrror / Pearl Powder", price: "300 TL" },
    { name: "Cat Eye", price: "300 TL" },
    { name: "Charm", price: "150 TL" },
    { name: "NaIl Art", price: "150 TL" }
  ];

  const patronServices = isEn ? patronServicesEn : patronServicesTr;
  const nailServices = isEn ? nailServicesEn : nailServicesTr;

  return (
    <section id="pricing" className="py-32 px-6 bg-[#090909] relative border-t border-brand-gold/10 overflow-hidden">
      <div className="ambient-glow-green -left-1/4 top-0 opacity-20"></div>
      <div className="ambient-glow-gold -right-1/4 bottom-0 opacity-10"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-brand-gold tracking-[0.3em] text-xs font-bold uppercase mb-4">{isEn ? "Pricing" : "Fiyatlarımız"}</motion.h4>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-4xl md:text-5xl text-white">
            {isEn ? "Service Menu" : "Hizmet Menüsü"}
          </motion.h2>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-between">

          {/* Patron Services */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:w-1/2 bg-[#0c0d0c] p-8 md:p-12 rounded-2xl border border-brand-gold/10 relative shadow-xl">
            <h3 className="font-serif text-2xl md:text-3xl text-brand-gold mb-10 text-center border-b border-brand-gold/20 pb-6 uppercase tracking-widest">
              {isEn ? "PRICE LIST" : "Fiyat Listemiz"}
            </h3>
            <ul className="flex flex-col gap-4">
              {patronServices.map((s, i) => (
                <li key={i} className="flex justify-between items-end font-sans group">
                  <span className="text-gray-300 text-[11px] md:text-xs pr-4 uppercase tracking-widest group-hover:text-brand-gold transition-colors">{s.name}</span>
                  <div className="flex-1 border-b border-dotted border-gray-700/50 mb-1.5 mx-2"></div>
                  <span className="text-white text-xs md:text-sm font-medium pl-4">{s.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Nail Services */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="md:w-1/2 bg-[#0c0d0c] p-8 md:p-12 rounded-2xl border border-white/5 relative shadow-xl">
            <h3 className="font-serif text-2xl md:text-3xl text-white mb-6 text-center border-b border-white/10 pb-6 uppercase tracking-widest">
              Patron NaIl&apos;s
            </h3>
            <div className="text-center mb-10">
              <span className="inline-block bg-brand-gold/10 text-brand-gold border border-brand-gold/20 px-4 py-2 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold">
                {isEn ? "ManIcure Is Included In our procedures." : "İşlemlerimize manikür dahildir."}
              </span>
            </div>
            <ul className="flex flex-col gap-4">
              {nailServices.map((s, i) => (
                <li key={i} className="flex justify-between items-end font-sans group">
                  <span className="text-gray-400 text-[11px] md:text-xs pr-4 uppercase tracking-widest group-hover:text-white transition-colors">{s.name}</span>
                  <div className="flex-1 border-b border-dotted border-gray-700/50 mb-1.5 mx-2"></div>
                  <span className="text-gray-200 text-xs md:text-sm font-medium pl-4">{s.price}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
