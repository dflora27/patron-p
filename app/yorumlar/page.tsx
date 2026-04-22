import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { buildMeta, SITE_URL, SOCIALS, BUSINESS } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Misafir Yorumları — 5.0 Ortalama Google Puanı",
  description:
    "Patron Erkek Kuaförü'nü ziyaret eden misafirlerimizin kendi sözleri. Google ve Yandex Haritalar'da 5.0 puan ile kusursuz bir hizmet.",
  path: "/yorumlar",
  locale: "tr",
});

const crumbs = [
  { name: "Ana Sayfa", url: SITE_URL },
  { name: "Misafir Yorumları", url: `${SITE_URL}/yorumlar` },
];

export default function YorumlarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Misafir Sesleri"
        title="5.0 ortalama, yüzlerce gerçek söz."
        subtitle={`Google ve Yandex Haritalar'da ${BUSINESS.aggregateRating.reviewCount}+ değerlendirme ile kusursuz hizmet. Burası sizin sözleriniz üzerine inşa edildi.`}
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Misafir Yorumları" },
        ]}
      />

      <ReviewsSection variant="detailed" />

      <section className="py-20 md:py-24 px-6 bg-surface border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Google&apos;da bizi ziyaret edin
          </h2>
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-10">
            Tüm yorumları, fotoğrafları ve haritada yerimizi Google&apos;daki işletme sayfamızdan inceleyebilirsiniz.
          </p>
          <a
            href={SOCIALS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-gold text-white px-10 py-4 rounded-full uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-brand-cinnamon transition-colors"
          >
            Google&apos;da Aç
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <PageCta />
    </>
  );
}
