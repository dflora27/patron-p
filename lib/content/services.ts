export type Service = {
  slug: string;
  enSlug: string;
  titleTr: string;
  titleEn: string;
  subtitleTr: string;
  subtitleEn: string;
  image: string;
  descTr: string;
  descEn: string;
  longTr: string;
  longEn: string;
  durationTr: string;
  durationEn: string;
  priceTr: string;
  priceEn: string;
  includes: { tr: string; en: string }[];
  steps: { tr: string; en: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "sac-sakal",
    enSlug: "hair-and-beard",
    titleTr: "Saç & Sakal",
    titleEn: "Hair & Beard",
    subtitleTr: "Sanatkarın Dokunuşu",
    subtitleEn: "Artisan's Touch",
    image: "/images/action.jpg",
    descTr: "Klasik bir kesimin ötesinde — yüz hatları ve kemik stiline göre özel tasarım.",
    descEn: "Beyond a classic cut — a design tailored to your facial features and bone structure.",
    longTr:
      "Patron imzalı kesim; detaylı yüz analizi, saç doku okuması ve Mizutani makaslarla şekillendirilmiş scissor-over-comb geçişlerinden oluşur. Sakal, konik jilet traşı, sıcak havlu ve after-shave ritüeli ile taçlanır.",
    longEn:
      "A Patron-signed cut starts with face analysis and texture reading, then moves into Mizutani scissor-over-comb transitions. The beard is finished with conical razor work, hot-towel therapy and an after-shave ritual.",
    durationTr: "60–75 dakika",
    durationEn: "60–75 minutes",
    priceTr: "1.600 TL",
    priceEn: "1,600 TL",
    includes: [
      { tr: "Yüz analizi", en: "Face analysis" },
      { tr: "Makas kesim + fade", en: "Shear cut + fade" },
      { tr: "Konik jilet sakal", en: "Conical razor beard" },
      { tr: "Sıcak havlu & after-shave", en: "Hot towel & after-shave" },
    ],
    steps: [
      { tr: "Karşılama, kahve servisi, danışma", en: "Welcome, coffee service, consultation" },
      { tr: "Yıkama + kafa derisi masajı", en: "Wash + scalp massage" },
      { tr: "Kesim: scissor-over-comb + skin fade", en: "Cut: scissor-over-comb + skin fade" },
      { tr: "Sakal şekillendirme + konik jilet", en: "Beard sculpt + conical razor" },
      { tr: "Sıcak havlu, after-shave, şekillendirme", en: "Hot towel, after-shave, styling" },
    ],
  },
  {
    slug: "manikur-pedikur",
    enSlug: "manicure-pedicure",
    titleTr: "Manikür & Pedikür",
    titleEn: "Manicure & Pedicure",
    subtitleTr: "Eller Önemli",
    subtitleEn: "Hands Matter",
    image: "/images/manicure.jpg",
    descTr: "Ayrıntılarda gizli bir zarafet. Kusursuz el ve ayak bakımı.",
    descEn: "Elegance hidden in the details. Flawless hand and foot care.",
    longTr:
      "Sıcak mineral banyosu, ölü deri temizliği, tırnak şekillendirme ve nemlendirici masaj. İsteğe bağlı kalıcı oje, jel güçlendirme veya klasik finiş.",
    longEn:
      "Warm mineral soak, dead-skin treatment, nail shaping and a hydrating massage. Optional permanent polish, gel strengthening or classic finish.",
    durationTr: "45 dakika",
    durationEn: "45 minutes",
    priceTr: "800 TL'den",
    priceEn: "from 800 TL",
    includes: [
      { tr: "Mineral banyo", en: "Mineral soak" },
      { tr: "Tırnak şekillendirme", en: "Nail shaping" },
      { tr: "Derin nemlendirme", en: "Deep hydration" },
      { tr: "İsteğe bağlı kalıcı oje", en: "Optional permanent polish" },
    ],
    steps: [
      { tr: "Sıcak mineral banyosu", en: "Warm mineral soak" },
      { tr: "Ölü deri ve tırnak temizliği", en: "Cuticle and dead-skin care" },
      { tr: "Tırnak şekillendirme", en: "Nail shaping" },
      { tr: "Nemlendirici el/ayak masajı", en: "Hydrating hand/foot massage" },
      { tr: "Finiş: klasik ya da kalıcı oje", en: "Finish: classic or permanent polish" },
    ],
  },
  {
    slug: "cilt-bakimi",
    enSlug: "skin-care",
    titleTr: "Medikal Cilt Bakımı",
    titleEn: "Medical Skin Care",
    subtitleTr: "Derinlemesine Temizlik",
    subtitleEn: "Deep Cleansing",
    image: "/images/skincare.jpg",
    descTr: "Ozonlu buhar, gözenek temizliği ve gençleştirici maskelerle yüzünüzde yeni bir çağ.",
    descEn: "A new era for your face with ozonated steam, pore cleansing and rejuvenating masks.",
    longTr:
      "Cildin dokusuna özel enzim peeling, ozon buhar, pore extraction ve seçilmiş maskelerden oluşan 5 aşamalı ritüel. Cildinizi, tıraşla birlikte ya da tek başına yeniler.",
    longEn:
      "A 5-step ritual: enzymatic peel, ozone steam, pore extraction and curated masks — tuned to your skin type. Pairs with a cut or stands alone as a reset.",
    durationTr: "50 dakika",
    durationEn: "50 minutes",
    priceTr: "2.000 TL",
    priceEn: "2,000 TL",
    includes: [
      { tr: "Enzim peeling", en: "Enzymatic peel" },
      { tr: "Ozonlu buhar", en: "Ozone steam" },
      { tr: "Gözenek ekstraksiyonu", en: "Pore extraction" },
      { tr: "Koruyucu maske", en: "Protective mask" },
    ],
    steps: [
      { tr: "Cilt analizi ve temizlik", en: "Skin analysis and cleanse" },
      { tr: "Enzim peeling", en: "Enzymatic peel" },
      { tr: "Ozon buhar açılışı", en: "Ozone steam opening" },
      { tr: "Gözenek ekstraksiyonu", en: "Pore extraction" },
      { tr: "Maske + nemlendirici kapanış", en: "Mask + hydrating finish" },
    ],
  },
  {
    slug: "damat-paketi",
    enSlug: "groom-package",
    titleTr: "Damat Paketi",
    titleEn: "Groom Package",
    subtitleTr: "Unutulmaz Gün",
    subtitleEn: "The Unforgettable Day",
    image: "/images/action.jpg",
    descTr: "Düğün gününüze özel kapsamlı hazırlık ritüeli.",
    descEn: "A comprehensive grooming ritual for your wedding day.",
    longTr:
      "Saç tasarımı, cilt bakımı, manikür ve jilet tıraşı tek oturumda. Şampanya servisi ve özel müzik seçkisi eşliğinde, eşinizle gelirsiniz; misafirimiz olursunuz.",
    longEn:
      "Hair design, skin care, manicure and razor shave in a single session. With champagne service and a curated playlist — arrive as a couple, leave as our guests.",
    durationTr: "2,5 saat",
    durationEn: "2.5 hours",
    priceTr: "7.500 TL",
    priceEn: "7,500 TL",
    includes: [
      { tr: "Saç & sakal", en: "Hair & beard" },
      { tr: "Cilt bakımı", en: "Skin care" },
      { tr: "Manikür", en: "Manicure" },
      { tr: "Jilet tıraşı + şampanya", en: "Razor shave + champagne" },
    ],
    steps: [
      { tr: "Karşılama + şampanya servisi", en: "Welcome + champagne service" },
      { tr: "Saç tasarımı + sakal şekillendirme", en: "Hair design + beard sculpt" },
      { tr: "Cilt bakımı (5 aşama)", en: "Skin care (5 steps)" },
      { tr: "Manikür", en: "Manicure" },
      { tr: "Klasik jilet tıraşı + final dokunuşlar", en: "Classic razor shave + final touches" },
    ],
  },
];

export function getServiceBySlug(slug: string, locale: "tr" | "en"): Service | undefined {
  return SERVICES.find((s) => (locale === "en" ? s.enSlug === slug : s.slug === slug));
}
