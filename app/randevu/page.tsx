import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import BookingWizard from "@/components/booking/BookingWizard";
import { buildMeta, SITE_URL, waLink, WA_MESSAGES, PHONE } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Randevu Al — 3 Adımda WhatsApp Üzerinden Rezervasyon",
  description:
    "Hizmet, gün ve saat aralığınızı seçin — WhatsApp mesajınız otomatik hazırlansın. Patron Erkek Kuaförü'nde randevu almanın en hızlı yolu.",
  path: "/randevu",
  locale: "tr",
});

const crumbs = [
  { name: "Ana Sayfa", url: SITE_URL },
  { name: "Randevu", url: `${SITE_URL}/randevu` },
];

export default function RandevuPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Randevu"
        title="3 adımda WhatsApp&apos;tan randevu."
        subtitle="Hizmeti, günü ve saati seçin — size özel mesaj WhatsApp'ta hazır beklesin. Bir onayınızı bekliyoruz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Randevu" },
        ]}
      />

      <section className="py-16 md:py-24 px-6 bg-surface">
        <BookingWizard locale="tr" />
      </section>

      <section className="py-16 md:py-20 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-6">
            Sihirbazı kullanmak istemez misiniz? Doğrudan iletişime geçin — her iki yoldan da aynı ustaya ulaşırsınız.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waLink(WA_MESSAGES.generalTr)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-cinnamon text-white px-8 py-3 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors"
            >
              WhatsApp&apos;tan Yaz
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold px-8 py-3 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold hover:text-white transition-colors"
            >
              Bizi Arayın
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
