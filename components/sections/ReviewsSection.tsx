"use client";
import { usePathname } from 'next/navigation';
import { motion } from "framer-motion";

const reviewsTr = [
  { rating: 5, text: "Gerçek anlamda patron gibi hissettiren tek yer. Hizmet ve ilgi inanılmaz, saç kesimi mükemmel.", author: "Emre T." },
  { rating: 5, text: "İzmir'de böyle bir ambiyans yok. Cilt bakımı ve saç tıraşı tam anlamıyla terapi gibi geldi.", author: "Onur K." },
  { rating: 5, text: "Sıradan berber kavramını tamamen yıkan bir stüdyo. Mizutani makasların hissiyatı bile farklı.", author: "Ahmet S." }
];

const reviewsEn = [
  { rating: 5, text: "The only place that makes you feel like a true boss. Incredible service and perfect haircut.", author: "Emre T." },
  { rating: 5, text: "There's no ambiance like this in Izmir. The skin care and shave felt like true therapy.", author: "Onur K." },
  { rating: 5, text: "A studio that completely shatters the ordinary barber concept. Even the feel of the Mizutani scissors is different.", author: "Ahmet S." }
];

export default function ReviewsSection() {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');
  const reviews = isEn ? reviewsEn : reviewsTr;

  return (
    <section className="py-32 px-6 bg-brand-obsidian relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/3 text-center md:text-left">
          <span className="text-brand-gold tracking-[0.2em] text-sm uppercase font-bold">
            {isEn ? "Testimonials" : "Misafir Yorumları"}
          </span>
          <h2 className="font-serif text-4xl text-white mt-4 mb-6">
            {isEn ? "Your Feedback" : "Sizlerin Değerlendirmeleri"}
          </h2>
          <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
            <span className="font-bold text-4xl text-white">5.0</span>
            <div className="flex text-brand-gold">
              ★ ★ ★ ★ ★
            </div>
          </div>
          <p className="text-gray-400 font-sans text-sm">
            {isEn ? "Flawless service rated 5.0 on Google and Yandex Maps." : "Google ve Yandex Haritalar'da 5.0 puan ile kusursuz hizmet."}
          </p>
        </div>

        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#121212] p-8 border border-white/5 relative"
            >
              <div className="text-brand-gold mb-4 text-xs">★★★★★</div>
              <p className="font-serif text-lg text-gray-300 italic mb-6 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="font-sans text-brand-gold/70 text-sm font-bold uppercase tracking-wider">— {r.author}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
