"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/content/services";
import { waLink, WA_MESSAGES } from "@/lib/seo";

type Props = { locale: "tr" | "en" };

type Day = { label: string; value: string; date: Date };

function nextDays(n: number, locale: "tr" | "en"): Day[] {
  const days: Day[] = [];
  const today = new Date();
  const fmt = new Intl.DateTimeFormat(locale === "en" ? "en-US" : "tr-TR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const iso = new Intl.DateTimeFormat(locale === "en" ? "en-US" : "tr-TR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  for (let i = 0; i < n; i += 1) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push({ label: fmt.format(d), value: iso.format(d), date: d });
  }
  return days;
}

const TIME_SLOTS_TR = [
  { key: "morning", label: "Sabah", range: "10:00 – 12:00" },
  { key: "midday", label: "Öğle", range: "12:00 – 15:00" },
  { key: "afternoon", label: "Öğleden Sonra", range: "15:00 – 18:00" },
  { key: "evening", label: "Akşam", range: "18:00 – 21:00" },
];

const TIME_SLOTS_EN = [
  { key: "morning", label: "Morning", range: "10:00 – 12:00" },
  { key: "midday", label: "Midday", range: "12:00 – 15:00" },
  { key: "afternoon", label: "Afternoon", range: "15:00 – 18:00" },
  { key: "evening", label: "Evening", range: "18:00 – 21:00" },
];

const COPY = {
  tr: {
    stepOf: (a: number, b: number) => `${a} / ${b}`,
    step1: "Hizmet seçin",
    step2: "Gün seçin",
    step3: "Saat aralığı",
    step4: "Mesajınız hazır",
    step4Lead: "Aşağıdaki buton sizi WhatsApp'a yönlendirir — mesajınız şimdiden hazırlanmış halde.",
    back: "Geri",
    next: "Devam",
    duration: "Süre",
    price: "Fiyat",
    selectedSvc: "Seçili hizmet",
    selectedDay: "Gün",
    selectedTime: "Saat aralığı",
    cta: "WhatsApp'ta Aç",
    edit: "Düzenle",
    todayBadge: "Bugün",
    tomorrowBadge: "Yarın",
  },
  en: {
    stepOf: (a: number, b: number) => `${a} / ${b}`,
    step1: "Pick a service",
    step2: "Pick a day",
    step3: "Pick a time",
    step4: "Message ready",
    step4Lead: "The button below opens WhatsApp — your message is pre-filled.",
    back: "Back",
    next: "Continue",
    duration: "Duration",
    price: "Price",
    selectedSvc: "Service",
    selectedDay: "Day",
    selectedTime: "Time window",
    cta: "Open WhatsApp",
    edit: "Edit",
    todayBadge: "Today",
    tomorrowBadge: "Tomorrow",
  },
};

export default function BookingWizard({ locale }: Props) {
  const t = COPY[locale];
  const timeSlots = locale === "en" ? TIME_SLOTS_EN : TIME_SLOTS_TR;
  const days = useMemo(() => nextDays(7, locale), [locale]);

  const [step, setStep] = useState(1);
  const [serviceSlug, setServiceSlug] = useState<string | null>(null);
  const [dayIndex, setDayIndex] = useState<number | null>(null);
  const [slotKey, setSlotKey] = useState<string | null>(null);

  const service = SERVICES.find((s) =>
    locale === "en" ? s.enSlug === serviceSlug : s.slug === serviceSlug,
  );
  const day = dayIndex !== null ? days[dayIndex] : undefined;
  const slot = timeSlots.find((s) => s.key === slotKey);

  const canContinue =
    (step === 1 && !!service) ||
    (step === 2 && !!day) ||
    (step === 3 && !!slot);

  const waHref = useMemo(() => {
    if (!service || !day || !slot) return "";
    const serviceName = locale === "en" ? service.titleEn : service.titleTr;
    const msg =
      locale === "en"
        ? WA_MESSAGES.customEn(serviceName, day.value, slot.range)
        : WA_MESSAGES.customTr(serviceName, day.value, slot.range);
    return waLink(msg);
  }, [service, day, slot, locale]);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <p className="text-brand-gold tracking-[0.3em] text-[10px] uppercase font-bold">
          {t.stepOf(step, 4)}
        </p>
        <div className="flex gap-1.5" aria-hidden>
          {[1, 2, 3, 4].map((n) => (
            <span
              key={n}
              className={`h-1 rounded-full transition-all duration-500 ${
                n <= step ? "w-10 bg-brand-gold" : "w-4 bg-hairline/20"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="bg-surface-elevated border border-hairline/10 rounded-3xl p-6 md:p-10 shadow-xl min-h-[360px]">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{t.step1}</h2>
              <ul className="grid sm:grid-cols-2 gap-3">
                {SERVICES.map((s) => {
                  const isActive = serviceSlug === (locale === "en" ? s.enSlug : s.slug);
                  return (
                    <li key={s.slug}>
                      <button
                        type="button"
                        onClick={() => setServiceSlug(locale === "en" ? s.enSlug : s.slug)}
                        aria-pressed={isActive}
                        className={`w-full text-left p-4 rounded-xl border transition-colors ${
                          isActive
                            ? "border-brand-gold bg-brand-gold/10"
                            : "border-hairline/15 hover:border-brand-gold/50"
                        }`}
                      >
                        <p className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold mb-1">
                          {locale === "en" ? s.subtitleEn : s.subtitleTr}
                        </p>
                        <p className="font-serif text-foreground text-lg leading-tight mb-2">
                          {locale === "en" ? s.titleEn : s.titleTr}
                        </p>
                        <p className="text-foreground-subtle text-[11px] flex justify-between">
                          <span>{locale === "en" ? s.durationEn : s.durationTr}</span>
                          <span className="text-brand-gold font-bold">
                            {locale === "en" ? s.priceEn : s.priceTr}
                          </span>
                        </p>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{t.step2}</h2>
              <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {days.map((d, i) => {
                  const isActive = dayIndex === i;
                  return (
                    <li key={i}>
                      <button
                        type="button"
                        onClick={() => setDayIndex(i)}
                        aria-pressed={isActive}
                        className={`w-full text-center p-3 rounded-xl border transition-colors ${
                          isActive
                            ? "border-brand-gold bg-brand-gold/10"
                            : "border-hairline/15 hover:border-brand-gold/50"
                        }`}
                      >
                        <span className="block font-serif text-foreground text-base mb-1">
                          {d.label}
                        </span>
                        {i === 0 && (
                          <span className="text-[9px] text-brand-gold uppercase tracking-widest font-bold">
                            {t.todayBadge}
                          </span>
                        )}
                        {i === 1 && (
                          <span className="text-[9px] text-foreground-subtle uppercase tracking-widest font-bold">
                            {t.tomorrowBadge}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-6">{t.step3}</h2>
              <ul className="grid grid-cols-2 gap-3">
                {timeSlots.map((s) => {
                  const isActive = slotKey === s.key;
                  return (
                    <li key={s.key}>
                      <button
                        type="button"
                        onClick={() => setSlotKey(s.key)}
                        aria-pressed={isActive}
                        className={`w-full text-center p-4 rounded-xl border transition-colors ${
                          isActive
                            ? "border-brand-gold bg-brand-gold/10"
                            : "border-hairline/15 hover:border-brand-gold/50"
                        }`}
                      >
                        <span className="block font-serif text-foreground text-lg mb-1">
                          {s.label}
                        </span>
                        <span className="block text-foreground-subtle text-[11px] tracking-widest">
                          {s.range}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}

          {step === 4 && service && day && slot && (
            <motion.div
              key="step-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <h2 className="font-serif text-2xl md:text-3xl text-foreground mb-2">{t.step4}</h2>
              <p className="text-foreground-muted text-sm md:text-base leading-relaxed mb-8">
                {t.step4Lead}
              </p>

              <dl className="space-y-3 mb-10 border-y border-hairline/15 py-6">
                <Row
                  label={t.selectedSvc}
                  value={locale === "en" ? service.titleEn : service.titleTr}
                  onEdit={() => setStep(1)}
                  editLabel={t.edit}
                />
                <Row label={t.selectedDay} value={day.value} onEdit={() => setStep(2)} editLabel={t.edit} />
                <Row
                  label={t.selectedTime}
                  value={`${slot.label} · ${slot.range}`}
                  onEdit={() => setStep(3)}
                  editLabel={t.edit}
                />
              </dl>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 bg-brand-cinnamon text-white px-10 py-5 rounded-full uppercase text-xs tracking-[0.3em] font-bold hover:bg-brand-gold transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z" />
                </svg>
                {t.cta}
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {step < 4 && (
        <div className="flex items-center justify-between mt-8">
          <button
            type="button"
            onClick={() => setStep((s) => Math.max(1, s - 1))}
            disabled={step === 1}
            className="text-foreground-subtle text-[11px] uppercase tracking-[0.25em] font-bold disabled:opacity-30 hover:text-foreground transition-colors"
          >
            ← {t.back}
          </button>
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(4, s + 1))}
            disabled={!canContinue}
            className="bg-brand-gold text-white px-8 py-3 rounded-full uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-brand-cinnamon transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {t.next} →
          </button>
        </div>
      )}
    </div>
  );
}

function Row({
  label,
  value,
  onEdit,
  editLabel,
}: {
  label: string;
  value: string;
  onEdit: () => void;
  editLabel: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <dt className="text-[10px] uppercase tracking-widest text-foreground-subtle font-bold mb-1">
          {label}
        </dt>
        <dd className="font-serif text-foreground text-base md:text-lg">{value}</dd>
      </div>
      <button
        type="button"
        onClick={onEdit}
        className="text-brand-gold text-[10px] uppercase tracking-[0.25em] font-bold hover:text-foreground transition-colors"
      >
        {editLabel}
      </button>
    </div>
  );
}
