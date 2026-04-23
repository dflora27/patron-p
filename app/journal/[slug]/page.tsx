import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ARTICLES, getArticleBySlug } from "@/lib/content/articles";
import { SERVICES } from "@/lib/content/services";
import { buildMeta, SITE_URL, waLink, WA_MESSAGES } from "@/lib/seo";
import { articleSchema, breadcrumbSchema, faqPageSchema } from "@/lib/jsonld";

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  return buildMeta({
    title: article.tr.title,
    description: article.tr.excerpt,
    path: `/journal/${article.slug}`,
    locale: "tr",
    image: `${SITE_URL}${article.image}`,
  });
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const locale = article.tr;
  const url = `${SITE_URL}/journal/${article.slug}`;
  const related = SERVICES.filter((s) => article.relatedServices.includes(s.slug));
  const otherArticles = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 2);

  const crumbs = [
    { name: "Ana Sayfa", url: SITE_URL },
    { name: "Blog", url: `${SITE_URL}/journal` },
    { name: locale.title, url },
  ];

  return (
    <article className="min-h-screen bg-surface-muted pt-40 pb-24 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              headline: locale.title,
              description: locale.excerpt,
              image: `${SITE_URL}${article.image}`,
              datePublished: article.date,
              url,
              locale: "tr-TR",
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(crumbs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchema(locale.faqs)) }}
      />

      <div className="absolute top-0 left-0 w-full h-[50vh] bg-brand-gold/5 blur-[100px] pointer-events-none z-0" />

      <div className="max-w-4xl mx-auto relative z-10 px-6 md:px-12">
        <Link
          href="/journal"
          className="text-brand-gold uppercase tracking-widest text-xs mb-10 inline-block border-b border-brand-gold/40 hover:border-brand-gold hover:text-foreground transition-all pb-1"
        >
          ← Yazılara Dön
        </Link>

        <div className="flex gap-3 font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-8 items-center">
          <span>{article.category.tr}</span>
          <span className="text-foreground-subtle/60" aria-hidden>·</span>
          <span className="text-foreground-subtle">{article.readTimeTr}</span>
          <span className="text-foreground-subtle/60" aria-hidden>·</span>
          <time dateTime={article.date} className="text-foreground-subtle">
            {new Date(article.date).toLocaleDateString("tr-TR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-foreground mb-10 leading-[1.15]">
          {locale.title}
        </h1>

        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-12 relative glass border border-hairline/20 p-2 shadow-2xl">
          <div className="w-full h-full rounded-2xl overflow-hidden relative">
            <Image
              src={article.image}
              alt={locale.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
              className="object-cover grayscale-[0.15]"
            />
          </div>
        </div>

        <p className="font-serif text-xl md:text-2xl text-foreground italic border-l-2 border-brand-gold pl-6 py-3 mb-12 leading-relaxed">
          {locale.lead}
        </p>

        <div className="prose prose-lg max-w-none font-sans text-foreground-muted leading-relaxed space-y-10">
          {locale.sections.map((section, i) => (
            <section key={i}>
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4 leading-snug">
                {section.h}
              </h2>
              {section.body.map((p, j) => (
                <p key={j} className="mb-4 text-base md:text-lg leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        {locale.faqs.length > 0 && (
          <section className="mt-16 pt-12 border-t border-hairline/15">
            <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-8">
              Sıkça Sorulanlar
            </h2>
            <div className="space-y-6">
              {locale.faqs.map((f, i) => (
                <details
                  key={i}
                  className="group border-b border-hairline/15 pb-5 cursor-pointer"
                >
                  <summary className="font-serif text-lg md:text-xl text-foreground flex justify-between items-center list-none">
                    <span>{f.q}</span>
                    <span className="text-brand-gold group-open:rotate-45 transition-transform" aria-hidden>
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-foreground-muted text-sm md:text-base leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-16 pt-12 border-t border-hairline/15">
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-6">
              İlgili hizmetler
            </h2>
            <div className="flex flex-wrap gap-3">
              {related.map((s) => (
                <Link
                  key={s.slug}
                  href={`/hizmetler/${s.slug}`}
                  className="inline-flex items-center gap-2 bg-surface-elevated border border-brand-gold/30 text-foreground px-5 py-3 rounded-full text-sm hover:bg-brand-gold hover:text-white hover:border-brand-gold transition-colors"
                >
                  {s.titleTr}
                  <span className="text-brand-gold" aria-hidden>→</span>
                </Link>
              ))}
            </div>
          </section>
        )}

        <section className="mt-16 pt-12 border-t border-hairline/15 bg-surface-elevated rounded-3xl p-8 md:p-12 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-4">
            Okumaktan sıkıldınız mı?
          </h2>
          <p className="text-foreground-muted text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
            Bu yazı bir ritüelin kapısını araladı; denemek için koltuğumuza oturun.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/randevu"
              className="inline-flex items-center gap-2 bg-brand-cinnamon text-white px-8 py-3 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors"
            >
              Randevu Sihirbazı
            </Link>
            <a
              href={waLink(WA_MESSAGES.generalTr)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold px-8 py-3 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold hover:text-white transition-colors"
            >
              Hızlı WhatsApp
            </a>
          </div>
        </section>

        {otherArticles.length > 0 && (
          <section className="mt-20 pt-12 border-t border-hairline/15">
            <h2 className="font-serif text-xl md:text-2xl text-foreground mb-8">
              Başka yazılar
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {otherArticles.map((a) => (
                <Link
                  key={a.slug}
                  href={`/journal/${a.slug}`}
                  className="group block glass p-4 rounded-2xl border border-hairline/10 hover:border-brand-gold/40 transition-colors"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                    <Image
                      src={a.image}
                      alt={a.tr.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-2">
                    {a.category.tr}
                  </p>
                  <h3 className="font-serif text-lg text-foreground group-hover:text-brand-gold transition-colors leading-snug">
                    {a.tr.title}
                  </h3>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
