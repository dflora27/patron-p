"use client";
import Link from "next/link";
import { waLink, WA_MESSAGES, PHONE } from "@/lib/seo";

type Props = {
  isEn?: boolean;
  headingTr?: string;
  headingEn?: string;
  bodyTr?: string;
  bodyEn?: string;
};

export default function PageCta({
  isEn = false,
  headingTr = "Koltuğumuzda sizi bekliyoruz",
  headingEn = "Your chair is waiting",
  bodyTr = "Randevu almak için tek bir mesaj yeterli. WhatsApp üzerinden anında dönüş yaparız.",
  bodyEn = "One message is all it takes. We reply instantly on WhatsApp.",
}: Props) {
  return (
    <section className="py-20 md:py-28 px-6 bg-surface-elevated border-t border-brand-gold/10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
          {isEn ? headingEn : headingTr}
        </h2>
        <p className="font-sans text-foreground-muted text-sm md:text-base max-w-xl mx-auto mb-10 leading-relaxed">
          {isEn ? bodyEn : bodyTr}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href={isEn ? "/en/book" : "/randevu"}
            className="inline-flex items-center gap-3 bg-brand-cinnamon text-white px-10 py-4 rounded-full uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-brand-gold hover:shadow-[0_0_22px_rgba(89,133,101,0.45)] transition-all"
          >
            {isEn ? "Book Now" : "Randevu Sihirbazı"}
          </Link>
          <a
            href={waLink(isEn ? WA_MESSAGES.generalEn : WA_MESSAGES.generalTr)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 border border-brand-gold/50 text-brand-gold px-10 py-4 rounded-full uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-brand-gold hover:text-white transition-all"
          >
            {isEn ? "Quick WhatsApp" : "Hızlı WhatsApp"}
          </a>
          <a
            href={`tel:${PHONE}`}
            className="inline-flex items-center gap-3 border border-hairline/30 text-foreground px-10 py-4 rounded-full uppercase text-[11px] tracking-[0.3em] font-bold hover:border-brand-gold hover:text-brand-gold transition-all"
          >
            {isEn ? "Call" : "Ara"}
          </a>
        </div>
      </div>
    </section>
  );
}
