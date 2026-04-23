import Link from "next/link";
import { waLink, WA_MESSAGES } from "@/lib/seo";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6 relative overflow-hidden">
      <div className="ambient-glow-gold top-0 right-0 opacity-30 pointer-events-none" aria-hidden />
      <div className="ambient-glow-green bottom-0 left-0 opacity-20 pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-xl text-center">
        <p className="font-serif text-[120px] md:text-[180px] text-brand-gold/30 leading-none mb-4 select-none">
          404
        </p>
        <p className="text-brand-gold tracking-[0.3em] text-xs font-bold uppercase mb-6">
          Yol bulunamadı
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          Bu koltuk boş değil —<br />
          <span className="text-brand-gold italic">sadece aradığınız sayfa yok.</span>
        </h1>
        <p className="font-sans text-foreground-muted text-sm md:text-base leading-relaxed mb-10">
          Aradığınız sayfa silinmiş, taşınmış ya da adres yanlış yazılmış olabilir. Aşağıdan ana sayfaya dönebilir ya da WhatsApp&apos;tan bize ulaşabilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-brand-cinnamon text-white px-8 py-4 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors"
          >
            Ana Sayfaya Dön
          </Link>
          <a
            href={waLink(WA_MESSAGES.generalTr)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold px-8 py-4 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold hover:text-white transition-colors"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>

        <nav aria-label="Popüler sayfalar" className="mt-12 pt-10 border-t border-hairline/15">
          <p className="text-foreground-subtle text-[10px] uppercase tracking-[0.3em] font-bold mb-5">
            Popüler sayfalar
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm">
            <li>
              <Link href="/hizmetler" className="text-foreground hover:text-brand-gold transition-colors">
                Hizmetlerimiz
              </Link>
            </li>
            <li>
              <Link href="/ekibimiz" className="text-foreground hover:text-brand-gold transition-colors">
                Ekibimiz
              </Link>
            </li>
            <li>
              <Link href="/fiyatlar" className="text-foreground hover:text-brand-gold transition-colors">
                Fiyatlar
              </Link>
            </li>
            <li>
              <Link href="/randevu" className="text-foreground hover:text-brand-gold transition-colors">
                Randevu Al
              </Link>
            </li>
            <li>
              <Link href="/journal" className="text-foreground hover:text-brand-gold transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  );
}
