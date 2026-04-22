"use client";
import { motion } from "framer-motion";
import Link from "next/link";

type Crumb = { label: string; href?: string };

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  breadcrumbs?: Crumb[];
  image?: string;
};

export default function PageHero({ eyebrow, title, subtitle, breadcrumbs, image }: Props) {
  return (
    <section className="relative isolate overflow-hidden border-b border-brand-gold/10">
      {image && (
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-40"
          style={{ backgroundImage: `url(${image})` }}
          aria-hidden
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-surface/40 via-surface/80 to-surface"
        aria-hidden
      />
      <div className="ambient-glow-gold -top-10 -right-20 opacity-30 pointer-events-none" aria-hidden />

      <div className="max-w-6xl mx-auto px-6 pt-40 md:pt-48 pb-20 md:pb-28 text-center">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.25em] text-foreground-subtle font-bold">
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-brand-gold transition-colors">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-foreground" aria-current="page">
                      {crumb.label}
                    </span>
                  )}
                  {i < breadcrumbs.length - 1 && (
                    <span className="text-foreground-subtle/60" aria-hidden>
                      /
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-brand-gold tracking-[0.35em] text-[11px] md:text-xs font-bold uppercase mb-6"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-6xl text-foreground leading-tight max-w-3xl mx-auto"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 font-sans text-sm md:text-base text-foreground-muted max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
