import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import TeamGallery from "@/components/sections/TeamGallery";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Ekibimiz — Usta Eller, İmza Dokunuşlar",
  description:
    "Patron ekibi; Mizutani makaslarla çalışan scissor-over-comb ustası, sakal mimarı, VIP bakım ve medikal cilt uzmanlarından oluşur. Tüm ustalarımızla tanışın.",
  path: "/ekibimiz",
  locale: "tr",
});

const crumbs = [
  { name: "Ana Sayfa", url: SITE_URL },
  { name: "Ekibimiz", url: `${SITE_URL}/ekibimiz` },
];

export default function EkibimizPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Usta Eller"
        title="Her biri kendi imzasını taşıyan ustalar."
        subtitle="Altı ustamız, yıllara dayanan eğitim ve kendi stil dillerini buluşturuyor. Kartlara dokunun, kendi uzmanlıklarını keşfedin."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Ekibimiz" },
        ]}
      />

      <TeamGallery variant="detailed" />

      <section className="py-20 md:py-24 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Kendi ustanızı seçin
          </h2>
          <p className="text-foreground-muted text-sm md:text-base mb-8 leading-relaxed">
            Randevu alırken istediğiniz ustayı belirtebilirsiniz. Ustamız uygun değilse, size en yakın stilde çalışan bir meslektaşını önerir.
          </p>
        </div>
      </section>

      <PageCta />
    </>
  );
}
