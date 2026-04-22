"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const articles = [
  { slug: "kusursuz-tirasin-anatomisi", title: "Kusursuz Bir Tıraşın Anatomisi: Medikal Sıcak Havlu Ritüeli", enTitle: "Anatomy of a Perfect Shave", category: "GroomIng", date: "12 Mar 2026", img: "/images/blog-hot-towel.jpg" },
  { slug: "neden-mizutani", title: "Neden Mizutani? Dünyanın En İyi Makaslarıyla Tanışın", enTitle: "Why Mizutani?", category: "Ekipman", date: "05 Mar 2026", img: "/images/blog-mizutani.jpg" }
];

export default function JournalSection() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  return (
    <section className="py-32 px-6 bg-brand-obsidian relative border-t border-brand-gold/10">
      <div className="ambient-glow-green -top-20 left-1/2 opacity-20"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        <div className="md:w-1/3 flex flex-col justify-center">
          <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-brand-gold tracking-[0.2em] text-xs font-bold uppercase mb-4">BLOG</motion.h4>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-4xl md:text-5xl text-white mb-6">
            {isEn ? "The Art of Gentlemen" : "Erkek Olma Sanatı"}
          </motion.h2>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-gray-400 text-sm leading-relaxed mb-10">
            {isEn ? "Nuances and guides to men's style, modern barber culture, and the İzmir lifestyle." : "Erkek stili, modern berberlik kültürü ve yaşamına dair incelikler ve rehberler."}
          </motion.p>
          <div>
            <Link href={isEn ? "/en/journal" : "/journal"} className="uppercase text-brand-gold tracking-widest text-xs border-b border-brand-gold/40 hover:border-brand-gold pb-1 hover:text-white transition-all">
              {isEn ? "View All Articles →" : "Tüm Yazıları İncele →"}
            </Link>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {articles.map((article, i) => (
            <Link href={`${isEn ? '/en' : ''}/journal/${article.slug}`} key={i}>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.3, duration: 1 }}
                className="group cursor-pointer glass p-4 rounded-xl h-full flex flex-col"
              >
                <div className="w-full aspect-[4/3] overflow-hidden mb-6 rounded border border-white/5 relative">
                  <img src={article.img} alt={article.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s]" />
                  <div className="absolute inset-0 bg-brand-obsidian/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                <div className="flex gap-4 font-sans text-[9px] tracking-[0.2em] uppercase text-brand-gold mb-4 pl-2">
                  <span>{isEn && article.category === "Ekipman" ? "EquIpment" : article.category}</span>
                  <span className="text-gray-700">|</span>
                  <span className="text-gray-500">{article.date}</span>
                </div>
                <h3 className="font-serif text-xl text-white group-hover:text-brand-gold transition-colors pl-2 pr-2 leading-relaxed">
                  {isEn ? article.enTitle : article.title}
                </h3>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
