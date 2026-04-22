"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { PHONE, BUSINESS, HOURS, SOCIALS } from "@/lib/seo";

type FooterLink = { tr: string; en: string; trHref: string; enHref: string };

const FOOTER_LINKS: FooterLink[] = [
  { tr: "Hakkımızda", en: "About", trHref: "/hakkimizda", enHref: "/en/about" },
  { tr: "Ekibimiz", en: "Team", trHref: "/ekibimiz", enHref: "/en/team" },
  { tr: "Hizmetlerimiz", en: "Services", trHref: "/hizmetler", enHref: "/en/services" },
  { tr: "Fiyatlar", en: "Pricing", trHref: "/fiyatlar", enHref: "/en/pricing" },
  { tr: "Blog", en: "Journal", trHref: "/journal", enHref: "/en/journal" },
];

export default function Footer() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");

  return (
    <footer className="bg-surface-elevated pt-24 pb-12 px-6 border-t border-brand-gold/20 relative w-full overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-1">
          <Image
            src="/images/logo.png"
            alt="Patron Erkek Kuaförü"
            width={200}
            height={120}
            className="h-24 md:h-32 w-auto object-contain mb-8"
          />
          <p className="font-sans text-foreground-subtle text-sm leading-relaxed mb-6">
            {isEn
              ? "Bornova's luxury destination for gentlemen who value themselves."
              : "Bornova'nın kalbinde, kendine değer veren erkeklerin lüks durağı."}
          </p>
          <h4 className="font-sans text-foreground uppercase tracking-widest text-sm mb-6">
            {isEn ? "Socials" : "Sosyal Medya"}
          </h4>
          <div className="flex gap-4">
            <a
              href={SOCIALS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full border border-hairline/30 flex items-center justify-center text-foreground-subtle hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href={SOCIALS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full border border-hairline/30 flex items-center justify-center text-foreground-subtle hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href={SOCIALS.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Google Maps"
              className="w-10 h-10 rounded-full border border-hairline/30 flex items-center justify-center text-foreground-subtle hover:text-brand-gold hover:border-brand-gold transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="hidden md:block">
          <h4 className="font-sans text-foreground uppercase tracking-widest text-sm mb-6">
            {isEn ? "Menu" : "Hızlı Menü"}
          </h4>
          <ul className="flex flex-col gap-4 font-sans text-sm text-foreground-subtle">
            {FOOTER_LINKS.map((link) => (
              <li key={link.trHref}>
                <Link
                  href={isEn ? link.enHref : link.trHref}
                  className="hover:text-brand-gold transition-colors"
                >
                  {isEn ? link.en : link.tr}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-foreground uppercase tracking-widest text-sm mb-6">
            {isEn ? "Contact" : "İletişim"}
          </h4>
          <ul className="flex flex-col gap-4 font-sans text-sm text-foreground-subtle">
            <li>
              <a href={`tel:${PHONE}`} className="hover:text-brand-gold">
                +90 553 573 79 92
              </a>
            </li>
            <li className="leading-relaxed">
              {BUSINESS.streetAddress}, {BUSINESS.addressLocality}/{BUSINESS.addressRegion}
            </li>
            <li className="mt-2">
              <a
                href={SOCIALS.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold hover:underline"
              >
                {isEn ? "Show on Map →" : "Haritada Göster →"}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-foreground uppercase tracking-widest text-sm mb-6">
            {isEn ? "Working Hours" : "Çalışma Saatleri"}
          </h4>
          <ul className="flex flex-col gap-2 font-sans text-sm text-foreground-subtle">
            <li className="flex justify-between">
              <span>{isEn ? HOURS.weekdayEn : HOURS.weekdayTr}</span>
              <span className="text-foreground">{HOURS.weekday}</span>
            </li>
            <li className="flex justify-between">
              <span>{isEn ? HOURS.sundayEn : HOURS.sundayTr}</span>
              <span className="text-foreground">{HOURS.sunday}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-hairline/10 flex flex-col md:flex-row items-center justify-between text-[10px] text-foreground-subtle font-sans tracking-widest uppercase">
        <p>&copy; {new Date().getFullYear()} Patron Erkek Kuaförü.</p>
        <p className="mt-4 md:mt-0">{isEn ? "All Rights Reserved." : "Tüm Hakları Saklıdır."}</p>
      </div>
    </footer>
  );
}
