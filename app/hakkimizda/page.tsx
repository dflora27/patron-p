import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/layout/PageHero";
import PageCta from "@/components/layout/PageCta";
import { buildMeta, SITE_URL } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/jsonld";

export const metadata: Metadata = buildMeta({
  title: "Hakkımızda — Bornova'nın Lüks Erkek Kuaförü",
  description:
    "Patron Erkek Kuaförü, Bornova'nın kalbinde misafirini ağırlayan bir gentleman's lounge. Mizutani makaslar, Davines ürünleri ve ustalardan oluşan kadromuzla tanışın.",
  path: "/hakkimizda",
  locale: "tr",
});

const crumbs = [
  { name: "Ana Sayfa", url: SITE_URL },
  { name: "Hakkımızda", url: `${SITE_URL}/hakkimizda` },
];

export default function HakkimizdaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <PageHero
        eyebrow="Hikayemiz"
        title="Burada müşteri yok, misafir var."
        subtitle="Patron, İzmir Bornova'nın kalbinde kendine değer veren erkekler için kurulmuş bir gentleman's lounge. Eski okul berberlik ritüellerini modern bakım bilimiyle harmanlıyoruz."
        breadcrumbs={[
          { label: "Ana Sayfa", href: "/" },
          { label: "Hakkımızda" },
        ]}
        image="/images/gallery-1.jpg"
      />

      <section className="py-20 md:py-28 px-6 bg-surface">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-brand-gold tracking-[0.25em] text-xs uppercase font-bold mb-4">
              Felsefe
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6 leading-tight">
              Zamanı yavaşlatan <span className="text-brand-gold italic">bir deneyim.</span>
            </h2>
            <div className="space-y-5 text-foreground-muted text-sm md:text-base leading-relaxed">
              <p>
                Patron, yalnızca bir berber değildir. İçeri adım attığınız anda, size özel seçilmiş müzikler, imza kahvelerimiz ve uzman kadromuz eşlik eder. Her detay sizin konforunuz ve ruh haliniz için tasarlanır.
              </p>
              <p>
                Klasik berberliğin altın kuralları — jilet ritüeli, sıcak havlu, scissor-over-comb dokusu — modern cilt bakımı ve kişisel stil analizi ile birleştirilir. Koltuğa oturduğunuzda kendinizi tanımamaya başlarsınız; kalktığınızda farkı her bakışta hissedersiniz.
              </p>
            </div>
          </div>

          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-gold/15 shadow-2xl">
            <Image
              src="/images/gallery-2.jpg"
              alt="Patron Erkek Kuaförü içi — lounge"
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
              İlkelerimiz
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground">
              Kusursuzluğa giden dört değer
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Misafirperverlik",
                body: "Kapıdan adım attığınız anda bir dostun evinde gibi karşılanırsınız. Kahve, müzik ve sohbet dahil.",
              },
              {
                title: "Ustalık",
                body: "Her ustamız Mizutani makas, klasik jilet ve modern fade tekniklerinde yıllar süren eğitimden geçmiştir.",
              },
              {
                title: "Malzeme Seçimi",
                body: "Davines organik bakım serisi, İtalyan aftershaveler ve medikal cilt bakım ekipmanları.",
              },
              {
                title: "Gizlilik",
                body: "Size özel bir koltuk, size özel bir zaman. Randevusuz iş almıyoruz.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-surface-elevated border border-hairline/10 rounded-2xl p-7 hover:border-brand-gold/40 transition-colors"
              >
                <h3 className="font-serif text-xl text-foreground mb-3">{v.title}</h3>
                <p className="text-foreground-muted text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCta />
    </>
  );
}
