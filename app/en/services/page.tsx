import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import { SERVICES } from "@/lib/content/services";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Services — Hair, Beard, Skin Care & Groom Package",
  description:
    "Patron's services: hair-and-beard design tailored to your face, manicure-pedicure, medical skin care, and a bespoke groom package. Each a ritual, each slows down time.",
  path: "/en/services",
  locale: "en",
});

const crumbs = [
  { name: "Home", url: `${SITE_URL}/en` },
  { name: "Services", url: `${SITE_URL}/en/services` },
];

export default function ServicesEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Services"
        title="Every step of grooming, a ritual."
        subtitle="Hair, beard, skin and nails — each choreographed with care. You leave the chair slightly more familiar with yourself."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Services" },
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
                  alt={s.titleEn}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold mb-3">
                  {s.subtitleEn}
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5 leading-tight">
                  {s.titleEn}
                </h2>
                <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-6">
                  {s.longEn}
                </p>
                <dl className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <dt className="text-[10px] uppercase tracking-widest text-foreground-subtle font-bold mb-1">Duration</dt>
                    <dd className="text-foreground font-sans text-sm">{s.durationEn}</dd>
                  </div>
                </dl>
                <ul className="space-y-2 text-sm text-foreground-muted">
                  {s.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" aria-hidden />
                      {item.en}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <PageCta isEn />
    </>
  );
}
