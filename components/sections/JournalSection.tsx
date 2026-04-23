"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ARTICLES } from "@/lib/content/articles";

export default function JournalSection() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const articles = ARTICLES.slice(0, 3); // Newest three on the home page
  const journalHref = isEn ? "/en/journal" : "/journal";

  return (
    <section className="py-24 md:py-32 px-6 bg-surface relative border-t border-brand-gold/10">
      <div className="ambient-glow-green -top-20 left-1/2 opacity-20" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 relative z-10">
        <div className="md:w-1/3 flex flex-col justify-center">
          <motion.h4
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-gold tracking-[0.2em] text-xs font-bold uppercase mb-4"
          >
            Blog
          </motion.h4>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl text-foreground mb-6"
          >
            {isEn ? "The Art of Gentlemen" : "Erkek Olma Sanatı"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground-muted text-sm leading-relaxed mb-10"
          >
            {isEn
              ? "Nuances and guides on men's style, modern barber culture, and İzmir's rhythm."
              : "Erkek stili, modern berberlik kültürü ve İzmir ritmine dair incelikler ve rehberler."}
          </motion.p>
          <div>
            <Link
              href={journalHref}
              className="uppercase text-brand-gold tracking-widest text-xs border-b border-brand-gold/40 hover:border-brand-gold pb-1 hover:text-foreground transition-all"
            >
              {isEn ? "View All Articles →" : "Tüm Yazıları İncele →"}
            </Link>
          </div>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, i) => {
            const locale = isEn ? article.en : article.tr;
            const category = isEn ? article.category.en : article.category.tr;
            const readTime = isEn ? article.readTimeEn : article.readTimeTr;
            return (
              <Link
                href={`${isEn ? "/en" : ""}/journal/${article.slug}`}
                key={article.slug}
                className="group"
              >
                <motion.article
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.8 }}
                  className="cursor-pointer glass p-4 rounded-xl h-full flex flex-col"
                >
                  <div className="w-full aspect-[4/3] overflow-hidden mb-5 rounded border border-hairline/10 relative">
                    <Image
                      src={article.image}
                      alt={locale.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1s]"
                    />
                  </div>
                  <div className="flex gap-3 font-sans text-[9px] tracking-[0.2em] uppercase text-brand-gold mb-4 pl-1 items-center">
                    <span>{category}</span>
                    <span className="text-foreground-subtle/60" aria-hidden>·</span>
                    <span className="text-foreground-subtle">{readTime}</span>
                  </div>
                  <h3 className="font-serif text-lg md:text-xl text-foreground group-hover:text-brand-gold transition-colors px-1 leading-snug">
                    {locale.title}
                  </h3>
                </motion.article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
