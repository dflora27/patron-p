import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import TeamGallery from "@/components/sections/TeamGallery";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Our Team — Master Barbers, Signature Hands",
  description:
    "The Patron team: a scissor-over-comb master working with Mizutani shears, a beard architect, VIP grooming and medical skin specialists. Meet every one of them.",
  path: "/en/team",
  locale: "en",
});

const crumbs = [
  { name: "Home", url: `${SITE_URL}/en` },
  { name: "Team", url: `${SITE_URL}/en/team` },
];

export default function TeamEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Master Barbers"
        title="Six masters. Six signatures."
        subtitle="Our team combines years of training with their own style vocabulary. Tap a card to reveal each master's craft."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Team" },
        ]}
      />

      <TeamGallery variant="detailed" />

      <section className="py-20 md:py-24 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-5">
            Pick your master
          </h2>
          <p className="text-foreground-muted text-sm md:text-base mb-8 leading-relaxed">
            Mention your preferred master when booking. If they&apos;re unavailable, we&apos;ll suggest a colleague working in a similar style.
          </p>
        </div>
      </section>

      <PageCta isEn />
    </>
  );
}
