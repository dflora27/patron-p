export type Review = {
  id: string;
  rating: 1 | 2 | 3 | 4 | 5;
  textTr: string;
  textEn: string;
  author: string;
  /** Optional service this review is primarily about. Enables service-page filtering. */
  serviceSlug?: string;
};

export const REVIEWS: Review[] = [
  {
    id: "r1",
    rating: 5,
    textTr:
      "Gerçek anlamda patron gibi hissettiren tek yer. Hizmet ve ilgi inanılmaz, saç kesimi mükemmel.",
    textEn:
      "The only place that makes you feel like a true boss. Incredible service and perfect haircut.",
    author: "Emre T.",
    serviceSlug: "sac-sakal",
  },
  {
    id: "r2",
    rating: 5,
    textTr:
      "İzmir'de böyle bir ambiyans yok. Cilt bakımı ve saç tıraşı tam anlamıyla terapi gibi geldi.",
    textEn:
      "There's no ambiance like this in Izmir. The skin care and shave felt like true therapy.",
    author: "Onur K.",
    serviceSlug: "cilt-bakimi",
  },
  {
    id: "r3",
    rating: 5,
    textTr:
      "Sıradan berber kavramını tamamen yıkan bir stüdyo. Mizutani makasların hissiyatı bile farklı.",
    textEn:
      "A studio that completely shatters the ordinary barber concept. Even the feel of the Mizutani scissors is different.",
    author: "Ahmet S.",
    serviceSlug: "sac-sakal",
  },
  {
    id: "r4",
    rating: 5,
    textTr:
      "Damat paketinde eşimle birlikte özel hissettik. Şampanya, müzik, profesyonellik — hepsi tam yerinde.",
    textEn:
      "The groom package made us feel genuinely special. Champagne, music, professionalism — all in perfect place.",
    author: "Berkay Ö.",
    serviceSlug: "damat-paketi",
  },
  {
    id: "r5",
    rating: 5,
    textTr:
      "Davines ürünleri + ustaların dokunuşu = aylar sonra bile saç formum bozulmadı. Rakipsiz.",
    textEn:
      "Davines products + the masters' touch = my hair kept its form for months. Unmatched.",
    author: "Cem D.",
    serviceSlug: "sac-sakal",
  },
  {
    id: "r6",
    rating: 5,
    textTr:
      "Sakal şekillendirme için bir kez deneyen her zaman tercih ediyor. Detay seviyesi Avrupa standardı.",
    textEn:
      "Once you experience the beard work, you can't go back. European-grade attention to detail.",
    author: "Hakan Y.",
    serviceSlug: "sac-sakal",
  },
  {
    id: "r7",
    rating: 5,
    textTr:
      "Manikürde bile profesyonellik başka seviye. Detaylara verilen önem tahmininizden fazla.",
    textEn:
      "Even the manicure is next-level professional. Attention to detail is beyond your expectation.",
    author: "Serkan B.",
    serviceSlug: "manikur-pedikur",
  },
  {
    id: "r8",
    rating: 5,
    textTr:
      "Ozon buhar cilt bakımı sonrası cildim adeta tazelendi. Bornova'daki en iyi tercih.",
    textEn:
      "After the ozone steam skin care my skin felt reborn. Best choice in Bornova.",
    author: "Mert A.",
    serviceSlug: "cilt-bakimi",
  },
  {
    id: "r9",
    rating: 5,
    textTr:
      "Düğün hazırlığımızı Patron'da yaptık. Fotoğraflar 10 yıl sonra hâlâ döndüğümüz anılar olacak.",
    textEn:
      "We prepared for our wedding at Patron. Photos will still be returning memories 10 years later.",
    author: "Yusuf K.",
    serviceSlug: "damat-paketi",
  },
];

export function reviewsForService(slug: string): Review[] {
  return REVIEWS.filter((r) => r.serviceSlug === slug);
}
