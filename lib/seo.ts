// Central SEO configuration — edit once, updates everywhere.

export const SITE_URL = "https://patronerkekkuaforu.com";
export const PHONE = "+905535737992";
export const WHATSAPP = "905535737992";

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
  image: `${SITE_URL}/images/kapak-on.jpg`,
  logo: `${SITE_URL}/images/logo.png`,
  ogImage: `${SITE_URL}/images/og-cover.jpg`,
  openingHours: [
    "Mo-Sa 10:00-21:00",
    "Su 11:00-19:00",
  ],
  sameAs: [
    "https://www.instagram.com/patronerkekkuaforu",
    "https://www.google.com/maps?cid=7035655077473899502",
  ],
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
  path: string;      // leading slash, e.g. "/hakkimizda"
  locale?: "tr" | "en";
  image?: string;
};

import type { Metadata } from "next";

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
