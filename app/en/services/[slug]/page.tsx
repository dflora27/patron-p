import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/layout/PageHero";
import ReviewsSection from "@/components/sections/ReviewsSection";
import { SERVICES, getServiceBySlug } from "@/lib/content/services";
import { reviewsForService } from "@/lib/content/reviews";
import { buildMeta, SITE_URL, WA_MESSAGES, waLink } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.enSlug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug, "en");
  if (!service) return {};
  return buildMeta({
    title: `${service.titleEn} — ${service.subtitleEn}`,
    description: `${service.descEn} ${service.durationEn}, from ${service.priceEn}.`,
    path: `/en/services/${service.enSlug}`,
    locale: "en",
    image: `${SITE_URL}${service.image}`,
  });
}

export default function ServiceDetailEnPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug, "en");
  if (!service) notFound();

  const others = SERVICES.filter((s) => s.enSlug !== service.enSlug);
  const hasReviews = reviewsForService(service.slug).length > 0;
  const crumbs = [
    { name: "Home", url: `${SITE_URL}/en` },
    { name: "Services", url: `${SITE_URL}/en/services` },
    { name: service.titleEn, url: `${SITE_URL}/en/services/${service.enSlug}` },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow={service.subtitleEn}
        title={service.titleEn}
        subtitle={service.descEn}
        breadcrumbs={[
          { label: "Home", href: "/en" },
          { label: "Services", href: "/en/services" },
          { label: service.titleEn },
        ]}
        image={service.image}
      />

      <section className="py-16 md:py-24 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-gold/20 shadow-xl">
            <Image
              src={service.image}
              alt={service.titleEn}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-foreground-muted text-base md:text-lg leading-relaxed mb-8">
              {service.longEn}
            </p>

            <dl className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8 border-y border-hairline/15 py-6">
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-foreground-subtle font-bold mb-1">Duration</dt>
                <dd className="font-serif text-foreground text-xl">{service.durationEn}</dd>
              </div>
              <div>
                <dt className="text-[10px] uppercase tracking-widest text-foreground-subtle font-bold mb-1">Price</dt>
                <dd className="font-serif text-brand-gold text-xl">{service.priceEn}</dd>
              </div>
            </dl>

            <h2 className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold mb-4">
              What&apos;s Included
            </h2>
            <ul className="space-y-2 mb-10">
              {service.includes.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground text-sm md:text-base">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0" aria-hidden />
                  {item.en}
                </li>
              ))}
            </ul>

            <a
              href={waLink(WA_MESSAGES.serviceEn(service.titleEn))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-brand-cinnamon text-white px-10 py-5 rounded-full uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-brand-gold hover:shadow-[0_0_22px_rgba(89,133,101,0.45)] transition-all w-full sm:w-auto"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
              </svg>
              Book This Service
            </a>
            <p className="text-foreground-subtle text-xs mt-3">
              Opens WhatsApp with your message ready to send.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 px-6 bg-surface-muted border-t border-brand-gold/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-gold tracking-[0.3em] text-xs uppercase font-bold mb-3">Ritual</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Step-by-Step</h2>
          </div>
          <ol className="space-y-4">
            {service.steps.map((step, i) => (
              <li
                key={i}
                className="flex items-start gap-5 bg-surface-elevated border border-hairline/10 rounded-xl p-5 md:p-6 hover:border-brand-gold/40 transition-colors"
              >
                <span className="font-serif text-brand-gold text-2xl md:text-3xl shrink-0 w-10 text-right tabular-nums">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <p className="text-foreground text-sm md:text-base leading-relaxed pt-1.5">
                  {step.en}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {hasReviews && (
        <ReviewsSection
          variant="detailed"
          serviceSlug={service.slug}
          headingTr={`${service.titleTr} için misafir yorumları`}
          headingEn={`${service.titleEn} guest reviews`}
        />
      )}

      <section className="py-20 md:py-28 px-6 bg-surface border-t border-brand-gold/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-brand-gold tracking-[0.3em] text-xs uppercase font-bold mb-3">Other Services</p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">Also at Patron</h2>
          </div>
          <ul className="grid sm:grid-cols-3 gap-6">
            {others.map((s) => (
              <li key={s.enSlug}>
                <Link
                  href={`/en/services/${s.enSlug}`}
                  className="group block bg-surface-elevated border border-hairline/10 rounded-2xl overflow-hidden hover:border-brand-gold/40 transition-colors h-full"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={s.image}
                      alt={s.titleEn}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1.5">
                      {s.subtitleEn}
                    </p>
                    <h3 className="font-serif text-foreground text-lg group-hover:text-brand-gold transition-colors">
                      {s.titleEn}
                    </h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 md:py-24 px-6 bg-surface-elevated border-t border-brand-gold/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
            Reserve in a single message
          </h2>
          <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-8">
            Drop a couple of preferred time windows; we&apos;ll suggest the closest available slot.
          </p>
          <a
            href={waLink(WA_MESSAGES.serviceEn(service.titleEn))}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-brand-cinnamon text-white px-10 py-4 rounded-full uppercase text-[11px] tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors"
          >
            Book via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
