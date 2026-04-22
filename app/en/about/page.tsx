import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "About — Bornova's Luxury Men's Salon",
  description:
    "Patron Men's Salon is a gentleman's lounge in the heart of Bornova. Meet our craft: Mizutani shears, Davines products, and a team built on old-school ritual and modern care.",
  path: "/en/about",
  locale: "en",
});

const crumbs = [
  { name: "Home", url: `${SITE_URL}/en` },
  { name: "About", url: `${SITE_URL}/en/about` },
];

export default function AboutEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Our Story"
        title="No customers here — only guests."
        subtitle="Patron is a gentleman's lounge in the heart of Bornova, Izmir, built for men who value themselves. We blend old-school barbering rituals with modern grooming science."
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "About" },
        ]}
        image="/images/gallery-1.jpg"
      />

      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold mb-4">
              Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              An experience that <span className="text-brand-gold italic">slows down time.</span>
            </h2>
            <div className="space-y-5 text-foreground-muted text-sm md:text-base leading-relaxed">
              <p>
                Patron is more than a barbershop. The moment you step in, custom playlists, signature coffees and our expert team greet you. Every detail is tuned to your comfort and your mood.
              </p>
              <p>
                Classical barbering — the razor ritual, the hot towel, the scissor-over-comb texture — merges with modern skin care and personal style analysis. You sit down feeling slightly foreign to yourself; you rise with a clarity you&apos;ll feel at every glance.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-gold/15 shadow-2xl">
            <Image
              src="/images/gallery-2.jpg"
              alt="Inside Patron Men's Salon — the lounge"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold mb-4">
              Principles
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Four values shaping everything
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Hospitality", body: "You're received like a friend in a well-kept home. Coffee, music and conversation included." },
              { title: "Craftsmanship", body: "Every master trained for years on Mizutani shears, classical razors and modern fade techniques." },
              { title: "Materials", body: "Davines organic care line, Italian aftershaves, medical-grade skin equipment." },
              { title: "Privacy", body: "Your chair, your time. Appointment-only — no walk-ins." },
            ].map((v) => (
              <div key={v.title} className="bg-surface-elevated border border-hairline/10 rounded-2xl p-7 hover:border-brand-gold/40 transition-colors">
                <h3 className="font-serif text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta isEn />
    </>
  );
}
