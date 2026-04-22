import type { Metadata } from "next";
import PageHero from "@/components/layout/PageHero";
import BookingWizard from "@/components/booking/BookingWizard";
import { buildMeta, SITE_URL, waLink, WA_MESSAGES, PHONE } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Book Now — 3-Step WhatsApp Booking",
  description:
    "Pick a service, day and time window — your WhatsApp message will be ready in one tap. The fastest way to book at Patron Men's Salon.",
  path: "/en/book",
  locale: "en",
});

const crumbs = [
  { name: "Home", url: `${SITE_URL}/en` },
  { name: "Book", url: `${SITE_URL}/en/book` },
];

export default function BookEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Book"
        title="Book in 3 steps via WhatsApp."
        subtitle="Pick service, day and time — your message waits ready on WhatsApp. One confirmation and you're in."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Book" },
        ]}
      />

      <section className="py-16 md:py-24 px-6 bg-surface">
        <BookingWizard locale="en" />
      </section>

      <section className="py-16 md:py-20 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-6">
            Prefer not to use the wizard? Reach us directly — both paths end with the same master.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={waLink(WA_MESSAGES.generalEn)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-cinnamon text-white px-8 py-3 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors"
            >
              Message on WhatsApp
            </a>
            <a
              href={`tel:${PHONE}`}
              className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold px-8 py-3 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold hover:text-white transition-colors"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
