"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { REVIEWS, type Review } from "@/lib/content/reviews";

type Props = {
  variant?: "preview" | "detailed";
  /** If set, filter to reviews for this service slug */
  serviceSlug?: string;
  /** Override headings (used on service detail pages) */
  headingTr?: string;
  headingEn?: string;
};

export default function ReviewsSection({
  variant = "preview",
  serviceSlug,
  headingTr,
  headingEn,
}: Props) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const allReviewsHref = isEn ? "/en/reviews" : "/yorumlar";

  const filtered: Review[] = serviceSlug
    ? REVIEWS.filter((r) => r.serviceSlug === serviceSlug)
    : REVIEWS.slice(0, 6);

  if (filtered.length === 0) return null;

  const eyebrow = isEn ? "Testimonials" : "Misafir Yorumları";
  const heading =
    headingTr && headingEn
      ? isEn
        ? headingEn
        : headingTr
      : isEn
        ? "Voices of Our Guests"
        : "Misafirlerimizden Sesler";

  return (
    <section
      aria-labelledby="reviews-heading"
      className="py-24 md:py-32 px-6 bg-surface-muted relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          <div className="md:col-span-1 text-center md:text-left md:sticky md:top-32">
            <span className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold">
              {eyebrow}
            </span>
            <h2
              id="reviews-heading"
              className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6"
            >
              {heading}
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <span className="font-bold text-4xl text-foreground">5.0</span>
              <div className="flex text-brand-gold" aria-hidden>
                ★★★★★
              </div>
            </div>
            <p className="text-foreground-subtle font-sans text-sm">
              {isEn
                ? "Flawless service rated 5.0 on Google and Yandex Maps."
                : "Google ve Yandex Haritalar'da 5.0 puan ile kusursuz hizmet."}
            </p>
          </div>

          <ul className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {filtered.map((r, i) => (
              <motion.li
                key={r.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                itemScope
                itemType="https://schema.org/Review"
                className="bg-surface-elevated p-7 border border-hairline/10 rounded-xl relative"
              >
                <meta itemProp="author" content={r.author} />
                <div
                  itemProp="reviewRating"
                  itemScope
                  itemType="https://schema.org/Rating"
                  className="sr-only"
                >
                  <meta itemProp="ratingValue" content={String(r.rating)} />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <div className="text-brand-gold mb-4 text-xs" aria-hidden>
                  ★★★★★
                </div>
                <p
                  itemProp="reviewBody"
                  className="font-serif text-base md:text-lg text-foreground-muted italic mb-6 leading-relaxed"
                >
                  &ldquo;{isEn ? r.textEn : r.textTr}&rdquo;
                </p>
                <div className="font-sans text-brand-gold/80 text-sm font-bold uppercase tracking-wider">
                  — {r.author}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        {variant === "preview" && (
          <div className="text-center mt-12">
            <Link
              href={allReviewsHref}
              className="inline-flex items-center gap-3 text-brand-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:text-foreground transition-colors"
            >
              {isEn ? "See All Reviews" : "Tüm Yorumları Gör"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
