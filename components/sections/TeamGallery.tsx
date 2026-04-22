"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { TEAM } from "@/lib/content/team";

type Props = {
  /** Home page shows the concise flip-card row; standalone Team page shows extended layout. */
  variant?: "preview" | "detailed";
};

export default function TeamGallery({ variant = "preview" }: Props) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith("/en");
  const [flipped, setFlipped] = useState<string | null>(null);

  const teamHref = isEn ? "/en/team" : "/ekibimiz";

  return (
    <section
      id="team"
      className="py-24 md:py-32 bg-surface px-6 relative border-t border-brand-gold/5 overflow-hidden"
    >
      <div className="ambient-glow-gold -left-20 top-20 opacity-20 hidden md:block"></div>

      <div className="max-w-7xl mx-auto text-center mb-16 relative z-20">
        <motion.h4
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-brand-gold tracking-[0.25em] text-xs md:text-sm uppercase mb-4 font-bold"
        >
          {isEn ? "Master Barbers" : "Usta Eller"}
        </motion.h4>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-serif text-3xl md:text-5xl text-foreground"
        >
          {isEn ? "Meet The Team" : "Ekibimiz"}
        </motion.h2>
        <p className="mt-4 font-sans text-sm text-foreground-muted max-w-xl mx-auto">
          {isEn
            ? "Hover or tap each card to discover their craft and signature specialties."
            : "Üzerine gelin veya dokunun; uzmanlıklarını ve imza hizmetlerini keşfedin."}
        </p>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {TEAM.map((member, i) => {
            const isFlipped = flipped === member.slug;
            const role = isEn ? member.roleEn : member.roleTr;
            const experience = isEn ? member.experienceEn : member.experienceTr;
            const specialty = isEn ? member.specialtyEn : member.specialtyTr;
            const bio = isEn ? member.bioEn : member.bioTr;

            return (
              <motion.li
                key={member.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="perspective-1200"
              >
                <button
                  type="button"
                  onClick={() => setFlipped(isFlipped ? null : member.slug)}
                  aria-label={`${member.name} — ${role}`}
                  aria-pressed={isFlipped}
                  className="relative block w-full aspect-[3/4] rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-4 focus-visible:ring-offset-surface group"
                >
                  <span
                    className={`absolute inset-0 preserve-3d transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isFlipped ? "rotate-y-180" : "group-hover:rotate-y-180"
                    }`}
                  >
                    {/* FRONT */}
                    <span className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden border border-hairline/10 shadow-xl">
                      <Image
                        src={member.img}
                        alt={`${member.name} — ${role}`}
                        fill
                        sizes="(max-width: 640px) 45vw, (max-width: 1024px) 28vw, 15vw"
                        className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                      <span className="absolute bottom-0 left-0 right-0 p-4 md:p-5 text-left">
                        <span className="block text-brand-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                          {role}
                        </span>
                        <span className="block font-serif text-white text-xl md:text-2xl">
                          {member.name}
                        </span>
                      </span>
                    </span>

                    {/* BACK */}
                    <span className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-brand-gold/30 bg-surface-elevated p-4 md:p-5 flex flex-col text-left shadow-xl">
                      <span className="block font-serif text-foreground text-xl md:text-2xl mb-1">
                        {member.name}
                      </span>
                      <span className="block text-brand-gold text-[9px] md:text-[10px] uppercase tracking-[0.2em] font-bold mb-3">
                        {role}
                      </span>
                      <dl className="text-[11px] md:text-xs text-foreground-muted space-y-1.5 mb-3">
                        <div className="flex items-start gap-1.5">
                          <dt className="text-foreground-subtle uppercase tracking-widest text-[9px] min-w-[46px] pt-0.5">
                            {isEn ? "Exp." : "Tecrübe"}
                          </dt>
                          <dd className="text-foreground">{experience}</dd>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <dt className="text-foreground-subtle uppercase tracking-widest text-[9px] min-w-[46px] pt-0.5">
                            {isEn ? "Focus" : "Uzmanlık"}
                          </dt>
                          <dd className="text-foreground leading-snug">{specialty}</dd>
                        </div>
                      </dl>
                      <p className="text-[11px] md:text-xs text-foreground-muted leading-relaxed flex-1 overflow-hidden">
                        {bio}
                      </p>
                      {variant === "detailed" && (
                        <Link
                          href={teamHref}
                          className="mt-3 inline-block text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold hover:underline"
                        >
                          {isEn ? "Book →" : "Randevu →"}
                        </Link>
                      )}
                    </span>
                  </span>
                </button>
              </motion.li>
            );
          })}
        </ul>

        {variant === "preview" && (
          <div className="text-center mt-12">
            <Link
              href={teamHref}
              className="inline-flex items-center gap-3 text-brand-gold text-[11px] uppercase tracking-[0.3em] font-bold hover:text-foreground transition-colors"
            >
              {isEn ? "Meet the Full Team" : "Ekibin Tamamını Tanı"}
              <span aria-hidden>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
