export type Service = {
  slug: string;
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
  includes: { tr: string; en: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "sac-sakal",
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
    includes: [
      { tr: "Yüz analizi", en: "Face analysis" },
      { tr: "Makas kesim + fade", en: "Shear cut + fade" },
      { tr: "Konik jilet sakal", en: "Conical razor beard" },
      { tr: "Sıcak havlu & after-shave", en: "Hot towel & after-shave" },
    ],
  },
  {
    slug: "manikur-pedikur",
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
    includes: [
      { tr: "Mineral banyo", en: "Mineral soak" },
      { tr: "Tırnak şekillendirme", en: "Nail shaping" },
      { tr: "Derin nemlendirme", en: "Deep hydration" },
      { tr: "İsteğe bağlı kalıcı oje", en: "Optional permanent polish" },
    ],
  },
  {
    slug: "cilt-bakimi",
    titleTr: "Medikal Cilt Bakımı",
    titleEn: "Medical Skin Care",
    subtitleTr: "Derinlemesine Temizlik",
    subtitleEn: "Deep Cleansing",
    image: "/images/skincare.jpg",
    descTr: "Ozonlu buhar, gözenek temizliği ve gençleştirici maskelerle yüzünüzde yeni bir çağ.",
    descEn: "A new era for your face with ozonated steam, pore cleansing and rejuvenating masks.",
    longTr:
      "Cildin dokusuna özel enzim peeling, ozon buhar, pore extraction ve seçilmiş maskelerden oluşan 5 aşamalı ritüel. Cildinizi, traşla birlikte ya da tek başına yeniler.",
    longEn:
      "A 5-step ritual: enzymatic peel, ozone steam, pore extraction and curated masks — tuned to your skin type. Pairs with a cut or stands alone as a reset.",
    durationTr: "50 dakika",
    durationEn: "50 minutes",
    includes: [
      { tr: "Enzim peeling", en: "Enzymatic peel" },
      { tr: "Ozonlu buhar", en: "Ozone steam" },
      { tr: "Gözenek ekstraksiyonu", en: "Pore extraction" },
      { tr: "Koruyucu maske", en: "Protective mask" },
    ],
  },
  {
    slug: "damat-paketi",
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
    includes: [
      { tr: "Saç & sakal", en: "Hair & beard" },
      { tr: "Cilt bakımı", en: "Skin care" },
      { tr: "Manikür", en: "Manicure" },
      { tr: "Jilet tıraşı + şampanya", en: "Razor shave + champagne" },
    ],
  },
];
