import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { buildMeta, SITE_URL, SOCIALS, BUSINESS } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Guest Reviews — 5.0 Average on Google",
  description:
    "What our guests say about Patron Men's Salon. Rated 5.0 on Google and Yandex Maps — service built on your words.",
  path: "/en/reviews",
  locale: "en",
});

const crumbs = [
  { name: "Home", url: `${SITE_URL}/en` },
  { name: "Reviews", url: `${SITE_URL}/en/reviews` },
];

export default function ReviewsEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Guest Voices"
        title="5.0 average. Hundreds of real words."
        subtitle={`Rated ${BUSINESS.aggregateRating.reviewCount}+ times on Google and Yandex Maps — a flawless service built on your words.`}
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Reviews" },
        ]}
      />

      <ReviewsSection variant="detailed" />

      <section className="py-20 md:py-24 px-6 bg-surface border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Visit us on Google
          </h2>
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-10">
            Read all reviews, photos and directions on our Google Business listing.
          </p>
          <a
            href={SOCIALS.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-gold text-white px-10 py-4 rounded-full uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-brand-cinnamon transition-colors"
          >
            Open on Google
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <PageCta isEn />
    </>
  );
}
