import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import PricingSection from "@/components/sections/PricingSection";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Price List — Hair, Beard, Skin Care & Groom Package",
  description:
    "Current price list at Patron Men's Salon: haircut, beard trim, eyebrow, pigmentation, manicure-pedicure, keratin, perm, skin care and groom package.",
  path: "/en/pricing",
  locale: "en",
});

const crumbs = [
  { name: "Home", url: `${SITE_URL}/en` },
  { name: "Pricing", url: `${SITE_URL}/en/pricing` },
];

export default function PricingEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Pricing"
        title="Transparent price, flawless service."
        subtitle="Every cut includes a wash, hot-towel ritual and styling. We publish every price up front — surprise-free from the first minute."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Pricing" },
        ]}
      />

      <PricingSection variant="detailed" />

      <section className="py-16 md:py-20 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Gift vouchers & corporate packages
          </h2>
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed">
            We prepare bespoke gift vouchers and corporate grooming packages. Reach us on WhatsApp and we&apos;ll tailor one for you.
          </p>
        </div>
      </section>

      <PageCta isEn />
    </>
  );
}
