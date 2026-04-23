"use client";
import { useEffect } from "react";
import Link from "next/link";
import { waLink, WA_MESSAGES } from "@/lib/seo";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surface error in production logs; Vercel captures via console.error
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-6 relative overflow-hidden">
      <div className="ambient-glow-gold top-0 left-0 opacity-30 pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-xl text-center">
        <p className="font-serif text-[120px] md:text-[180px] text-brand-cinnamon/40 leading-none mb-4 select-none">
          500
        </p>
        <p className="text-brand-cinnamon tracking-[0.3em] text-xs font-bold uppercase mb-6">
          Beklenmeyen bir durum
        </p>
        <h1 className="font-serif text-3xl md:text-5xl text-foreground mb-6 leading-tight">
          Bir şeyler yanlış gitti —<br />
          <span className="text-brand-gold italic">bu bizim hatamız.</span>
        </h1>
        <p className="font-sans text-foreground-muted text-sm md:text-base leading-relaxed mb-10">
          Teknik bir pürüz nedeniyle sayfa yüklenemedi. Tekrar deneyebilir, ana sayfaya dönebilir ya da WhatsApp&apos;tan ulaşarak bize haber verebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="inline-flex items-center gap-2 bg-brand-cinnamon text-white px-8 py-4 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold transition-colors"
          >
            Tekrar Dene
          </button>
          <Link
            href="/"
            className="inline-flex items-center gap-2 border border-brand-gold/50 text-brand-gold px-8 py-4 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-gold hover:text-white transition-colors"
          >
            Ana Sayfa
          </Link>
          <a
            href={waLink(WA_MESSAGES.generalTr)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-hairline/30 text-foreground px-8 py-4 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:border-brand-gold hover:text-brand-gold transition-colors"
          >
            WhatsApp&apos;tan Yaz
          </a>
        </div>

        {error.digest && (
          <p className="mt-10 text-foreground-subtle text-[10px] uppercase tracking-[0.25em] font-mono">
            ref: {error.digest}
          </p>
        )}
      </div>
    </main>
  );
}
