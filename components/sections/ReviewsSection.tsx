"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

const reviewsTr = [
  { rating: 5, text: "Gerçek anlamda patron gibi hissettiren tek yer. Hizmet ve ilgi inanılmaz, saç kesimi mükemmel.", author: "Emre T." },
  { rating: 5, text: "İzmir'de böyle bir ambiyans yok. Cilt bakımı ve saç tıraşı tam anlamıyla terapi gibi geldi.", author: "Onur K." },
  { rating: 5, text: "Sıradan berber kavramını tamamen yıkan bir stüdyo. Mizutani makasların hissiyatı bile farklı.", author: "Ahmet S." },
  { rating: 5, text: "Damat paketinde eşimle birlikte özel hissettik. Şampanya, müzik, profesyonellik — hepsi tam yerinde.", author: "Berkay Ö." },
  { rating: 5, text: "Davines ürünleri + ustaların dokunuşu = aylar sonra bile saç formum bozulmadı. Rakipsiz.", author: "Cem D." },
  { rating: 5, text: "Sakal şekillendirme için bir kez deneyen her zaman tercih ediyor. Detay seviyesi Avrupa standardı.", author: "Hakan Y." },
];

const reviewsEn = [
  { rating: 5, text: "The only place that makes you feel like a true boss. Incredible service and perfect haircut.", author: "Emre T." },
  { rating: 5, text: "There's no ambiance like this in Izmir. The skin care and shave felt like true therapy.", author: "Onur K." },
  { rating: 5, text: "A studio that completely shatters the ordinary barber concept. Even the feel of the Mizutani scissors is different.", author: "Ahmet S." },
  { rating: 5, text: "The groom package made us feel genuinely special. Champagne, music, professionalism — all in perfect place.", author: "Berkay Ö." },
  { rating: 5, text: "Davines products + the masters' touch = my hair kept its form for months. Unmatched.", author: "Cem D." },
  { rating: 5, text: "Once you experience the beard work, you can't go back. European-grade attention to detail.", author: "Hakan Y." },
];

type Props = {
  variant?: "preview" | "detailed";
};

export default function ReviewsSection({ variant = "preview" }: Props) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const reviews = isEn ? reviewsEn : reviewsTr;
  const allReviewsHref = isEn ? "/en/reviews" : "/yorumlar";

  return (
    <section
      aria-labelledby="reviews-heading"
      className="py-24 md:py-32 px-6 bg-surface-muted relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-16 items-start">
          <div className="md:col-span-1 text-center md:text-left md:sticky md:top-32">
            <span className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold">
              {isEn ? "Testimonials" : "Misafir Yorumları"}
            </span>
            <h2
              id="reviews-heading"
              className="font-serif text-3xl md:text-4xl text-foreground mt-4 mb-6"
            >
              {isEn ? "Voices of Our Guests" : "Misafirlerimizden Sesler"}
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
            {reviews.map((r, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                itemScope
                itemType="https://schema.org/Review"
                className="bg-surface-elevated p-7 border border-hairline/10 rounded-xl relative"
              >
                <meta itemProp="author" content={r.author} />
                <div itemProp="reviewRating" itemScope itemType="https://schema.org/Rating" className="sr-only">
                  <meta itemProp="ratingValue" content={String(r.rating)} />
                  <meta itemProp="bestRating" content="5" />
                </div>
                <div className="text-brand-gold mb-4 text-xs" aria-hidden>★★★★★</div>
                <p
                  itemProp="reviewBody"
                  className="font-serif text-base md:text-lg text-foreground-muted italic mb-6 leading-relaxed"
                >
                  &ldquo;{r.text}&rdquo;
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
