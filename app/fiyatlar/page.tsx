import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import PricingSection from "@/components/sections/PricingSection";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Fiyat Listesi — Saç, Sakal, Cilt Bakımı & Damat Paketi",
  description:
    "Patron Erkek Kuaförü güncel fiyat listesi: saç kesimi, sakal kesimi, kaş, pigmentasyon, manikür-pedikür, keratin, perma, cilt bakımı ve damat paketi.",
  path: "/fiyatlar",
  locale: "tr",
});

const crumbs = [
  { name: "Ana Sayfa", url: SITE_URL },
  { name: "Fiyatlar", url: `${SITE_URL}/fiyatlar` },
];

export default function FiyatlarPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Fiyatlar"
        title="Şeffaf fiyat, kusursuz hizmet."
        subtitle="Her kesime yıkama, sıcak havlu ritüeli ve şekillendirme dahildir. Sürprizsiz bir deneyim için fiyatlarımızı önceden açıklıyoruz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Fiyatlar" },
        ]}
      />

      <PricingSection variant="detailed" />

      <section className="py-16 md:py-20 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Hediye çeki ve kurumsal paketler
          </h2>
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
            Sevdiklerinize özel hediye çekleri ve şirketiniz için kurumsal paketler hazırlıyoruz. WhatsApp&apos;tan bize ulaşın, sizin için özelleştirelim.
          </p>
        </div>
      </section>

      <PageCta />
    </>
  );
}
