// Central SEO configuration — edit once, updates everywhere.
import type { Metadata } from "next";

export const SITE_URL = "https://patronerkekkuaforu.com";
export const PHONE = "+905535737992";
export const WHATSAPP = "905535737992";

export const SOCIALS = {
  instagram: "https://www.instagram.com/patronkuafor/",
  facebook: "https://www.facebook.com/patronkuafor",
  googleMaps: "https://www.google.com/maps?cid=7035655077473899502",
} as const;

/**
 * Build a wa.me deep-link with a pre-filled message. The whole site
 * funnels into WhatsApp, so every CTA should use this helper instead
 * of raw https://wa.me/... URLs.
 */
export function waLink(message?: string): string {
  const base = `https://wa.me/${WHATSAPP}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

/**
 * Pre-filled WhatsApp messages. Two languages so the conversation
 * starts in the user's language without us having to ask.
 */
export const WA_MESSAGES = {
  generalTr: "Merhaba Patron, randevu almak istiyorum. Müsait olduğunuz en yakın saat nedir?",
  generalEn: "Hello Patron, I'd like to book an appointment. What's the earliest available time?",
  serviceTr: (service: string) =>
    `Merhaba Patron, "${service}" hizmeti için randevu almak istiyorum. Müsaitliğinizi paylaşabilir misiniz?`,
  serviceEn: (service: string) =>
    `Hello Patron, I'd like to book "${service}". Could you share your availability?`,
  groomTr:
    "Merhaba Patron, damat paketi hakkında bilgi almak ve randevu planlamak istiyorum. Düğün tarihim: ",
  groomEn:
    "Hello Patron, I'd like to book the groom package and plan a date. My wedding date: ",
  customTr: (service: string, day: string, time: string) =>
    `Merhaba Patron, "${service}" hizmeti için ${day} günü ${time} saatlerinde randevu almak istiyorum. Uygun musunuz?`,
  customEn: (service: string, day: string, time: string) =>
    `Hello Patron, I'd like to book "${service}" on ${day} around ${time}. Are you available?`,
} as const;

// Business hours — single source of truth.
// Footer & JSON-LD both read from here.
export const HOURS = {
  weekdayTr: "Pzt – Cmt",
  weekdayEn: "Mon – Sat",
  weekday: "10:00 – 21:00",
  sundayTr: "Pazar",
  sundayEn: "Sunday",
  sunday: "11:00 – 19:00",
  // For schema.org OpeningHoursSpecification
  schema: [
    {
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
    {
      dayOfWeek: "Sunday",
      opens: "11:00",
      closes: "19:00",
    },
  ],
} as const;

export const BUSINESS = {
  name: "Patron Erkek Kuaförü",
  legalName: "Patron Erkek Kuaförü",
  streetAddress: "Kazımdirik Mahallesi, 296/2. Sk No:2D",
  addressLocality: "Bornova",
  addressRegion: "İzmir",
  postalCode: "35100",
  addressCountry: "TR",
  latitude: 38.4699,
  longitude: 27.2216,
  priceRange: "₺₺₺",
  image: `${SITE_URL}/images/craftsman.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  // Fallback to craftsman.jpg until a dedicated 1200x630 og-cover.jpg is shipped.
  ogImage: `${SITE_URL}/images/craftsman.jpg`,
  sameAs: [SOCIALS.instagram, SOCIALS.facebook, SOCIALS.googleMaps],
  aggregateRating: { ratingValue: "5.0", reviewCount: 180 },
} as const;

export const KEYWORDS_TR = [
  "Bornova erkek kuaförü",
  "İzmir berber",
  "lüks erkek kuaförü İzmir",
  "sakal tıraşı Bornova",
  "saç kesimi Bornova",
  "VIP erkek bakım",
  "damat paketi İzmir",
  "cilt bakımı erkek İzmir",
  "Patron Erkek Kuaförü",
  "Mizutani makas berber",
];

export const KEYWORDS_EN = [
  "Bornova men's barbershop",
  "Izmir luxury barber",
  "men's haircut Izmir",
  "beard trim Bornova",
  "skin care men Izmir",
  "VIP gentleman's lounge",
  "groom package Izmir",
  "Patron Men's Salon",
];

type PageMeta = {
  title: string;
  description: string;
  path: string; // leading slash, e.g. "/hakkimizda"
  locale?: "tr" | "en";
  image?: string;
};

export function buildMeta({
  title,
  description,
  path,
  locale = "tr",
  image,
}: PageMeta): Metadata {
  const url = `${SITE_URL}${path}`;
  const trPath = locale === "en" ? path.replace(/^\/en/, "") || "/" : path;
  const enPath = locale === "en" ? path : `/en${path === "/" ? "" : path}`;
  const ogImage = image ?? BUSINESS.ogImage;
  return {
    title,
    description,
    keywords: (locale === "en" ? KEYWORDS_EN : KEYWORDS_TR).join(", "),
    alternates: {
      canonical: url,
      languages: {
        "tr-TR": `${SITE_URL}${trPath}`,
        en: `${SITE_URL}${enPath}`,
        "x-default": `${SITE_URL}${trPath}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "en" ? "en_US" : "tr_TR",
      alternateLocale: locale === "en" ? "tr_TR" : "en_US",
      siteName: BUSINESS.name,
      title,
      description,
      url,
      images: [{ url: ogImage, width: 1200, height: 630, alt: BUSINESS.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// FAQ content for both the rendered section and the FAQPage schema.
export const FAQS_TR = [
  {
    q: "Randevusuz gelebilir miyim?",
    a: "Patron, kişiye özel zaman ayrıldığı için randevusuz çalışmaz. WhatsApp'tan birkaç saniye içinde randevu ayarlayabilirsiniz.",
  },
  {
    q: "Bir kesim ortalama ne kadar sürüyor?",
    a: "Saç-sakal kesim 60–75 dakika sürer. Damat paketi 2,5 saate kadar uzayabilir. Size ayrılan süre size özeldir, sıkıştırılmaz.",
  },
  {
    q: "Fiyatlar neden sabit yazılı?",
    a: "Şeffaflık prensibimiz. Tüm fiyatlar önceden açıkça yayımlanır, koltuğa oturduğunuzda sürpriz yaşamazsınız.",
  },
  {
    q: "Hangi ürünleri kullanıyorsunuz?",
    a: "Davines organik saç bakım serisi, İtalyan aftershaveler ve medikal cilt bakım ekipmanlarıyla çalışıyoruz.",
  },
  {
    q: "Ödeme seçenekleri neler?",
    a: "Nakit ve kredi kartı kabul ediyoruz. Hediye çeki ve kurumsal paket için WhatsApp'tan ayrıca bilgi alabilirsiniz.",
  },
  {
    q: "Çocuk kesimi yapıyor musunuz?",
    a: "10 yaş ve üstü için, ebeveyn eşliğinde kesim uyguluyoruz. Konforlu bir randevu için lütfen önceden bildirin.",
  },
];

export const FAQS_EN = [
  {
    q: "Can I walk in without an appointment?",
    a: "Patron reserves a personal time slot for every guest, so we don't take walk-ins. You can book in seconds via WhatsApp.",
  },
  {
    q: "How long does a session take?",
    a: "A hair-and-beard session takes 60–75 minutes. The groom package can extend to 2.5 hours. Your time is yours — never rushed.",
  },
  {
    q: "Why are prices fixed and visible?",
    a: "Transparency is a core principle. All prices are published up front so you never face surprises in the chair.",
  },
  {
    q: "Which products do you use?",
    a: "We work with the Davines organic hair-care line, Italian aftershaves, and medical-grade skin-care equipment.",
  },
  {
    q: "What payment options do you accept?",
    a: "Cash and credit card. For gift vouchers and corporate packages, please reach us on WhatsApp.",
  },
  {
    q: "Do you cut children's hair?",
    a: "Ages 10 and up, accompanied by a parent. Please let us know in advance for a comfortable session.",
  },
];
