import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import { SERVICES } from "@/lib/content/services";
import { buildMeta, SITE_URL, waLink, WA_MESSAGES } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Hizmetlerimiz — Saç, Sakal, Cilt Bakımı & Damat Paketi",
  description:
    "Patron'un hizmetleri: yüz analizine göre saç-sakal tasarımı, manikür-pedikür, medikal cilt bakımı ve özel damat paketi. Her biri ritüel, her biri zamanı yavaşlatır.",
  path: "/hizmetler",
  locale: "tr",
});

const crumbs = [
  { name: "Ana Sayfa", url: SITE_URL },
  { name: "Hizmetlerimiz", url: `${SITE_URL}/hizmetler` },
];

export default function HizmetlerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Hizmetlerimiz"
        title="Bakımın her adımı, bir ritüeldir."
        subtitle="Saç, sakal, cilt ve tırnak bakımı — her biri özenli koreografi ile hazırlanmış. Kesimden sonra, kendinize biraz daha aşina hissedersiniz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hizmetlerimiz" },
        ]}
        image="/images/action.jpg"
      />

      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-6xl mx-auto space-y-20 md:space-y-28">
          {SERVICES.map((s, i) => (
            <article
              key={s.slug}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-gold/15 shadow-xl">
                <Image
                  src={s.image}
                  alt={s.titleTr}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold mb-3">
                  {s.subtitleTr}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5 leading-tight">
                  {s.titleTr}
                </h2>
                <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-6">
                  {s.longTr}
                </p>
                <dl className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-foreground-subtle font-bold mb-1">Süre</dt>
                    <dd className="text-foreground font-sans text-sm">{s.durationTr}</dd>
                  </div>
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-foreground-subtle font-bold mb-1">Fiyat</dt>
                    <dd className="text-brand-gold font-serif text-sm">{s.priceTr}</dd>
                  </div>
                </dl>
                <ul className="space-y-2 text-sm text-foreground-muted mb-8">
                  {s.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" aria-hidden />
                      {item.tr}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/hizmetler/${s.slug}`}
                    className="inline-flex items-center gap-2 text-brand-gold text-[11px] uppercase tracking-[0.25em] font-bold border border-brand-gold/40 px-5 py-3 rounded-full hover:bg-brand-gold hover:text-white transition-colors"
                  >
                    Detayı Gör →
                  </Link>
                  <a
                    href={waLink(WA_MESSAGES.serviceTr(s.titleTr))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-white text-[11px] uppercase tracking-[0.25em] font-bold bg-brand-cinnamon px-5 py-3 rounded-full hover:bg-brand-gold transition-colors"
                  >
                    Randevu Al
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCta />
    </>
  );
}
