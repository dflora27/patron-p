"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Faq = { q: string; a: string };

type Props = {
  faqs: Faq[];
  titleTr?: string;
  titleEn?: string;
  eyebrowTr?: string;
  eyebrowEn?: string;
  isEn?: boolean;
};

export default function FAQSection({
  faqs,
  titleTr = "Sıkça Sorulanlar",
  titleEn = "Frequently Asked",
  eyebrowTr = "Cevaplar",
  eyebrowEn = "Answers",
  isEn = false,
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 px-6 bg-surface-muted border-t border-brand-gold/10"
    >
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-brand-gold tracking-[0.3em] text-[10px] md:text-xs font-bold uppercase mb-4">
            {isEn ? eyebrowEn : eyebrowTr}
          </p>
          <h2
            id="faq-heading"
            className="font-serif text-3xl md:text-5xl text-foreground"
          >
            {isEn ? titleEn : titleTr}
          </h2>
        </div>

        <ul className="divide-y divide-hairline/15 border-t border-b border-hairline/15">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <li key={i}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="w-full flex items-center justify-between gap-6 py-5 md:py-6 text-left hover:text-brand-gold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded"
                >
                  <span className="font-serif text-base md:text-lg text-foreground flex-1">
                    {faq.q}
                  </span>
                  <span
                    aria-hidden
                    className={`shrink-0 w-8 h-8 rounded-full border border-brand-gold/40 flex items-center justify-center text-brand-gold transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-foreground-muted text-sm md:text-base leading-relaxed pb-6 pr-12">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
