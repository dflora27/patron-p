import { BUSINESS, SITE_URL, HOURS, FAQS_TR } from "./seo";

export function hairSalonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HairSalon", "LocalBusiness"],
    "@id": `${SITE_URL}#business`,
    name: BUSINESS.name,
    legalName: BUSINESS.legalName,
    description:
      "Bornova'nın kalbinde, kendine değer veren erkekler için lüks kuaför lounge. Eski okul berberlik, modern cilt bakımı ve VIP damat paketleri.",
    url: SITE_URL,
    telephone: "+90 553 573 7992",
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    priceRange: BUSINESS.priceRange,
    currenciesAccepted: "TRY",
    paymentAccepted: "Cash, Credit Card",
    address: {
      "@type": "PostalAddress",
      streetAddress: BUSINESS.streetAddress,
      addressLocality: BUSINESS.addressLocality,
      addressRegion: BUSINESS.addressRegion,
      postalCode: BUSINESS.postalCode,
      addressCountry: BUSINESS.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: BUSINESS.latitude,
      longitude: BUSINESS.longitude,
    },
    openingHoursSpecification: HOURS.schema.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.aggregateRating.ratingValue,
      reviewCount: BUSINESS.aggregateRating.reviewCount,
      bestRating: "5",
      worstRating: "1",
    },
    sameAs: BUSINESS.sameAs,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Hizmet Menüsü",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Saç-Sakal Kesim" }, price: "1600", priceCurrency: "TRY" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Saç Kesim" }, price: "1100", priceCurrency: "TRY" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sakal Kesim" }, price: "500", priceCurrency: "TRY" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cilt Bakımı" }, price: "2000", priceCurrency: "TRY" },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Damat Paketi" }, price: "7500", priceCurrency: "TRY" },
      ],
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    name: BUSINESS.name,
    url: SITE_URL,
    inLanguage: ["tr-TR", "en"],
    publisher: { "@id": `${SITE_URL}#business` },
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

type Faq = { q: string; a: string };

export function articleSchema({
  headline,
  description,
  image,
  datePublished,
  url,
  locale,
}: {
  headline: string;
  description: string;
  image: string;
  datePublished: string; // ISO
  url: string;
  locale: "tr-TR" | "en-US";
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: [image],
    datePublished,
    dateModified: datePublished,
    inLanguage: locale,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: BUSINESS.name,
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: BUSINESS.name,
      logo: { "@type": "ImageObject", url: BUSINESS.logo },
    },
  };
}

export function faqPageSchema(faqs: Faq[] = FAQS_TR) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}
