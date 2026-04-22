"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const articles = [
  { slug: "kusursuz-tirasin-anatomisi", title: "Kusursuz Bir Tıraşın Anatomisi: Medikal Sıcak Havlu Ritüeli", enTitle: "Anatomy of a Perfect Shave", category: "Grooming", date: "12 Mar 2026", img: "/images/blog-hot-towel.jpg", excerpt_tr: "Tıraş olmak, bir erkeğin kendine ayırdığı en özel anlardan biridir. Modern çağda hızla geçiştirilen bu ritüeli...", excerpt_en: "Shaving is one of the most private moments a man dedicates to himself. We transform this skipping routine..." },
  { slug: "neden-mizutani", title: "Neden Mizutani? Dünyanın En İyi Makaslarıyla Tanışın", enTitle: "Why Mizutani?", category: "Ekipman", date: "05 Mar 2026", img: "/images/blog-mizutani.jpg", excerpt_tr: "Bir sanatçıyı kullandığı fırça, bir berberi ise kullandığı makas belirler. Japon el işçiliğinin şaheseri Mizutani...", excerpt_en: "An artist is defined by his brush, a barber by his scissors. Mizutani, masterpieces of Japanese craftsmanship..." }
];

export default function JournalArchive() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');

  return (
    <main className="min-h-screen bg-surface pt-40 pb-24 px-6 md:px-12 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-brand-gold/5 blur-[100px] pointer-events-none z-0"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <Link href={isEn ? "/en" : "/"} className="text-brand-gold uppercase tracking-widest text-xs mb-16 inline-block border-b border-brand-gold/40 hover:border-brand-gold hover:text-foreground transition-all pb-1">
          {isEn ? "← Back to Home" : "← Ana Sayfaya Dön"}
        </Link>
        
        <div className="flex flex-col mb-20 md:w-2/3">
           <motion.h4 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-brand-gold tracking-[0.2em] text-xs font-bold uppercase mb-4">THE JOURNAL</motion.h4>
           <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="font-serif text-5xl md:text-7xl lg:text-8xl text-foreground mb-8">
             {isEn ? "Editorial & Stories" : "Yazılar ve Hikayeler"}
           </motion.h1>
           <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="text-foreground-subtle text-base md:text-lg leading-relaxed max-w-xl">
             {isEn ? "Immerse yourself in nuances and guides to men's style, modern barber culture, and the premium lifestyle." : "Erkek stili, modern berberlik kültürü ve lüks yaşam tarzına dair incelikler ve rehberler."}
           </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {articles.map((article, i) => (
             <Link href={`${isEn ? '/en' : ''}/journal/${article.slug}`} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group cursor-pointer glass p-4 rounded-3xl h-full flex flex-col border border-hairline/10 hover:border-brand-gold/40 transition-all duration-500 shadow-xl"
              >
                <div className="w-full aspect-[4/3] overflow-hidden mb-8 rounded-2xl relative border border-hairline/10">
                  <Image
                    src={article.img}
                    alt={article.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s]"
                  />
                </div>
                <div className="flex gap-4 font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-4 pl-2">
                  <span>{isEn && article.category === "Ekipman" ? "Equipment" : article.category}</span>
                  <span className="text-foreground-subtle/60" aria-hidden>|</span>
                  <span className="text-foreground-subtle">{article.date}</span>
                </div>
                <h3 className="font-serif text-2xl text-foreground group-hover:text-brand-gold transition-colors pl-2 pr-2 leading-relaxed mb-4">
                  {isEn ? article.enTitle : article.title}
                </h3>
                <p className="text-sm text-foreground-subtle pl-2 pr-2 font-light leading-relaxed mb-6 flex-grow">
                   {isEn ? article.excerpt_en : article.excerpt_tr}
                </p>
                <div className="pl-2 pb-2">
                    <span className="text-xs uppercase tracking-[0.2em] font-bold text-brand-gold/70 group-hover:text-brand-gold transition-colors pb-1 border-b border-brand-gold/20 group-hover:border-brand-gold">
                        {isEn ? "Read Article →" : "Yazıyı Oku →"}
                    </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
