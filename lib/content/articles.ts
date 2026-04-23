export type ArticleLocale = {
  title: string;
  excerpt: string;
  lead: string;
  sections: { h: string; body: string[] }[];
  faqs: { q: string; a: string }[];
};

export type Article = {
  slug: string;
  category: { tr: string; en: string };
  date: string;          // ISO yyyy-mm-dd
  readTimeTr: string;
  readTimeEn: string;
  image: string;
  relatedServices: string[]; // service slugs (TR)
  tr: ArticleLocale;
  en: ArticleLocale;
};

export const ARTICLES: Article[] = [
  {
    slug: "izmir-erkek-kuaforu-secimi",
    category: { tr: "Rehber", en: "Guide" },
    date: "2026-04-10",
    readTimeTr: "8 dakika",
    readTimeEn: "8 min read",
    image: "/images/craftsman2.jpg",
    relatedServices: ["sac-sakal", "cilt-bakimi"],
    tr: {
      title: "İzmir'de En İyi Erkek Kuaförünü Nasıl Seçersiniz? (2026 Rehberi)",
      excerpt:
        "Bornova, Alsancak, Karşıyaka derken İzmir'de yüzlerce erkek kuaförü var. Size uygun olanı nasıl ayırt edersiniz? Ustadan ekipmana, ambiyanstan hijyene 9 somut kriterle rehberimiz.",
      lead:
        "İzmir'de bir erkek kuaförü seçmek, bir terzi seçmek gibidir — sadece bir hizmet değil, sizi yansıtan bir partnerlik. Yanlış seçim, aylarca sürecek bir saç formu ya da hayal kırıklığı demek. Bu rehberde, gerçekten iyi bir kuaförü nasıl ayırt edeceğinizi 9 somut kriterle anlatıyoruz.",
      sections: [
        {
          h: "1. Ustanın tecrübesi ve referansları",
          body: [
            "Bir kuaförün Instagram'daki güzel fotoğrafları, gerçek yeteneğini tam göstermez. Ustanın kaç yıldır çalıştığı, hangi tarzlarda uzmanlaştığı ve daha önceki müşterilerinin aylarca süren memnuniyeti çok daha önemli.",
            "En iyi test: aynı ustaya 3 kez gitmeye hazır olmak. İlk seferde bazen iletişim kopuklukları olur, ikincide usta yüz hatlarınıza alışır, üçüncüde gerçek kimyayı anlarsınız. Bir ustadan hızlı ayrılmak yerine birkaç kesim sabretmek, daha iyi bir sonuç verir.",
          ],
        },
        {
          h: "2. Ekipman ve ürün seçimi",
          body: [
            "Profesyonel kuaför Mizutani, Kamisori veya Jaguar seviyesindeki makasları kullanır. Bu markalar sadece keskinlikle değil, dengeleriyle saçın doğal formunu koruyan özel tasarımlardır. Gidip ustaya makasını sorun — cevabı çekinik olmamalı.",
            "Ürün tarafında Davines, Hermès, American Crew gibi dünya markaları standarttır. Local tanınmayan markalar her zaman kötü değildir ama şeffaflık burada önemli: ustaya 'cildime ne süreceksin' diye sorabilmelisiniz.",
          ],
        },
        {
          h: "3. Yüz analizi yapılıyor mu?",
          body: [
            "İyi bir kesim, koltukta başlar — ama konuşmayla. Ustanın size 'ne istiyorsun?' demek yerine 'yüzün şu hatlara sahip, bu stiller sana yakışır' diyor olması gerekir. Bu, tecrübenin işaretidir.",
            "Elmas yüz mü yuvarlak yüz mü — kemik yapınıza göre fade yüksekliği ve sakal konturu değişir. Bu analiz yoksa, her kesim biraz rastgele oluyor demektir.",
          ],
        },
        {
          h: "4. Ambiyans ve misafirperverlik",
          body: [
            "Lüks erkek kuaförü sadece saç değil, zaman deneyimidir. Kahve, müzik seçkisi, konuşma hızı, koltuk konforu — hepsi hizmet paketinin parçası. Bu unsurları yok sayanlar, aslında 'endüstriyel' çalışıyor: çok müşteri, az dokunuş.",
            "İyi bir ipucu: randevu saatinde karşılanma şeklinize bakın. Sizi ayakta bekleten, telefonla konuşurken selamlayan, hemen koltuğa oturtmaya çalışan yerler büyük ihtimalle hizmet derinliğini düşürmüştür.",
          ],
        },
        {
          h: "5. Hijyen ve sterilizasyon",
          body: [
            "Görünür sterilizasyon çok önemli. UV sterilizatör, otoklav, tek kullanımlık ustura jiletleri… Bunlar lüks değil, minimum standart. Ustanın masasında açılmamış tek kullanımlık paketlerin varlığı, hijyen disiplinini gösterir.",
            "Ek bir test: havlu yenileme hızı. Her müşteride temiz havlu kullanılıyor mu, yoksa ıslak havlular tekrar mı dönüyor? Bunu gözlemleyin.",
          ],
        },
        {
          h: "6. Fiyat transparansı",
          body: [
            "Gerçekten iyi kuaförler fiyatlarını çekinmeden paylaşır — hem web sitesinde, hem koltuğa oturmadan. 'Sonra konuşuruz' ya da 'usta karar verir' gibi ifadeler kırmızı bayrak. Lüks olmak için gizlilik gerekmiyor; tam tersi, şeffaflık bir gurur işaretidir.",
            "İzmir'de kaliteli bir saç-sakal kesimi için 1.200-1.800 TL aralığı makul. Çok daha ucuz olan yerler ya kısa sürüyor ya da ekipmandan kısıyor. Çok daha pahalı olanlar ise ekstra deneyim (şampanya, masaj) satıyor olabilir.",
          ],
        },
        {
          h: "7. Randevu sistemi",
          body: [
            "Premium kuaförler randevusuz çalışmaz. Neden? Çünkü size ayrılan zaman size özel — başkasıyla paylaşılamaz. Walk-in kabul eden yerler genelde hızlı kesim yapıyor demektir.",
            "WhatsApp ile randevu alabilmek büyük bir artı — aramanıza gerek kalmadan hızlıca saati netleştirirsiniz. Patron gibi yerlerde randevu alırken ustanızı da seçebiliyor olmanız, profesyonelliğin göstergesidir.",
          ],
        },
        {
          h: "8. Sonuç kadar süreç de önemli",
          body: [
            "İyi bir kesim sonuçtan fazlasıdır — oturup kalkarken neler yaşadığınız da dahildir. Yıkama sırasında kafa derisi masajı, sıcak havlu ritüeli, after-shave'in cildinizi nasıl hissettirdiği, kesim bittikten sonraki saç şekillendirme rehberi — hepsi ustalığın birer parçası.",
            "Bu detayları atlayan kuaförler kesim becerisi ne kadar iyi olursa olsun, deneyimi tamamlayamaz.",
          ],
        },
        {
          h: "9. Sonraki randevuyu kendisi planlıyor mu?",
          body: [
            "Gerçek ustalar gitmeden önce 'sen bu saçta 4 hafta sonra şurada olursun, o zamanki randevu için şimdi ayırabiliriz' diyebilir. Bu öngörü, saçı okuma yeteneğinin işareti.",
            "Size kalan hafızayla kalırsa, sonraki ziyaretinizde yine aynı noktada olursunuz. Süreklilik, iyi bir kuaför-müşteri ilişkisinin temelidir.",
          ],
        },
        {
          h: "Peki İzmir'de doğru yer neresi?",
          body: [
            "Patron Erkek Kuaförü, Bornova Kazımdirik'te yukarıdaki 9 kriteri odak noktası yapan bir gentleman's lounge. Mizutani makaslar, Davines organik ürünler, tam yüz analizi, UV sterilizasyon, şeffaf fiyat ve randevu önceliği — hepsi standart.",
            "Öneri: bir kez koltuğa oturun, konuşun, baktırın. Fark kendi ortaya çıkar.",
          ],
        },
      ],
      faqs: [
        { q: "İzmir'de ortalama bir saç-sakal kesimi kaç TL?", a: "Kaliteli bir gentleman's lounge için 1.200–1.800 TL makul. Daha ucuzu hız satıyor, daha pahalısı ekstra deneyim." },
        { q: "Randevusuz gelebilir miyim?", a: "Premium kuaförler genelde randevusuz çalışmaz — size özel zaman ayrıldığı için. Patron'da WhatsApp ile saniyeler içinde randevu alabilirsiniz." },
        { q: "Ustayı nasıl seçerim?", a: "Önerimiz ilk randevuda salon tarafından yönlendirilmeniz, sonrasında kimya kurduğunuz ustaya sadık kalmanız." },
      ],
    },
    en: {
      title: "How to Choose the Best Men's Barber in Izmir (2026 Guide)",
      excerpt:
        "Between Bornova, Alsancak, and Karşıyaka, Izmir has hundreds of men's barbers. How do you spot the right one? Nine concrete criteria from craft to hygiene.",
      lead:
        "Choosing a men's barber in Izmir is like choosing a tailor — not just a service but a partnership that reflects you. A wrong choice means months of an awkward haircut or quiet disappointment. Here are nine concrete signals that separate a great barber from an average one.",
      sections: [
        {
          h: "1. The master's experience and references",
          body: [
            "A barber's Instagram doesn't fully reveal their craft. Years in the chair, specialties mastered, and the quiet loyalty of repeat clients matter far more.",
            "Best test: commit to three visits with the same master. The first cut rarely lands perfectly; by the third, you know the real chemistry.",
          ],
        },
        {
          h: "2. Equipment and products",
          body: [
            "Professionals use Mizutani, Kamisori, or Jaguar shears. Not just sharp — designed to preserve natural form. Ask the master; the answer shouldn't be evasive.",
            "On products, Davines, Hermès, and American Crew are standard. Local brands aren't automatically bad, but transparency is key — you should feel free to ask what's going on your skin.",
          ],
        },
        {
          h: "3. Do they analyze your face?",
          body: [
            "A great cut begins with conversation. A master who says 'your bone structure suggests these styles' beats one who asks 'what do you want?' That confidence is the mark of experience.",
            "Diamond vs round face means different fade heights and beard contours. Without this read, every cut is slightly random.",
          ],
        },
        {
          h: "4. Ambiance and hospitality",
          body: [
            "A premium barber sells time, not just hair. Coffee, music selection, conversation pace, chair comfort — all part of the package. Places that skip this run industrial: high volume, low touch.",
            "Watch how you're greeted. Shops that leave you standing while the master finishes a phone call have likely compromised service depth.",
          ],
        },
        {
          h: "5. Hygiene and sterilization",
          body: [
            "Visible sterilization matters. UV sterilizers, autoclaves, disposable razor blades — the minimum standard, not luxury. Unopened packages on the master's station signal discipline.",
            "Extra test: towel rotation. Is every guest getting fresh towels, or are damp ones recycling?",
          ],
        },
        {
          h: "6. Price transparency",
          body: [
            "Great barbers publish prices openly, both online and before the chair. 'We'll talk later' is a red flag. Luxury doesn't require secrecy — quite the opposite.",
            "In Izmir, a quality hair-and-beard cut runs 1,200–1,800 TL. Much cheaper means shortcuts; much more expensive means added ritual (champagne, massage).",
          ],
        },
        {
          h: "7. Booking system",
          body: [
            "Premium shops don't take walk-ins — the time allotted to you is yours alone. WhatsApp booking is a big plus; you set a slot in seconds. Being able to request a specific master is a professionalism signal.",
          ],
        },
        {
          h: "8. Process matters as much as outcome",
          body: [
            "A cut is more than the result — scalp massage, hot-towel ritual, aftershave, styling guidance for the mirror the next morning. Skipping these details means an incomplete experience.",
          ],
        },
        {
          h: "9. Does the master plan your next visit?",
          body: [
            "Real masters predict: 'You'll want me again in four weeks at this exact spot.' That foresight comes from reading your hair.",
            "Without continuity, every visit feels like starting over.",
          ],
        },
        {
          h: "So where in Izmir?",
          body: [
            "Patron Men's Salon in Bornova Kazımdirik builds around these nine criteria: Mizutani shears, Davines organic products, full face analysis, UV sterilization, transparent pricing and appointment-first.",
            "Recommendation: sit in the chair once. The difference reveals itself.",
          ],
        },
      ],
      faqs: [
        { q: "What's the average hair-and-beard price in Izmir?", a: "1,200–1,800 TL for a quality gentleman's lounge. Below that tends to sell speed; above that adds ritual." },
        { q: "Can I walk in?", a: "Premium barbers usually don't accept walk-ins — your slot is personal. At Patron you book in seconds via WhatsApp." },
        { q: "How do I pick a master?", a: "Let the salon guide your first visit, then stay loyal to the master you build chemistry with." },
      ],
    },
  },
  {
    slug: "damat-paketi-rehberi",
    category: { tr: "Paket", en: "Package" },
    date: "2026-03-28",
    readTimeTr: "6 dakika",
    readTimeEn: "6 min read",
    image: "/images/craftsman3.jpg",
    relatedServices: ["damat-paketi", "sac-sakal", "cilt-bakimi"],
    tr: {
      title: "Damat Paketi İzmir: Fiyat, Süre, İçerik ve Bilmeniz Gereken Her Şey",
      excerpt:
        "Düğün günü için erkek bakımı — sadece bir tıraş değil, koreografiye benzer bir süreç. Patron'un damat paketinde hangi aşamalar var, kimlere uygun, ne kadar sürüyor? Tam rehber.",
      lead:
        "Düğün günü sadece sizin hayalinizin günü değil, aynı zamanda yıllarca izlenecek fotoğrafların kaydedildiği gün. Erkek tarafı için bakım genelde 'hadi bir tıraş olayım' seviyesinde geçiştirilir — ama damat paketi tam olarak bu rastgeleliği ortadan kaldırmak için vardır.",
      sections: [
        {
          h: "Damat paketi nedir?",
          body: [
            "Damat paketi, düğün günü ya da bir gün öncesinde damadın tüm estetik hazırlığını tek bir ritüelde birleştiren kapsamlı bir hizmet. Saç tasarımı, sakal şekillendirme, cilt bakımı ve manikür — ayrı ayrı randevularda yapılınca 4 ayrı güne yayılacak işlemleri, koreografiyle 2,5 saate sığdırıyor.",
            "Patron'da damat paketi aynı zamanda bir 'erkek mekânı' deneyimidir: şampanya servisi, özel müzik seçkisi, ustalarınızın size özel zaman ayırması. Eşinizle birlikte gelebilir ve siz hazırlanırken o da manikür/cilt bakımı alabilir.",
          ],
        },
        {
          h: "Pakette neler var?",
          body: [
            "1) Karşılama + şampanya servisi ve playlist seçimi",
            "2) Saç tasarımı: yüz analizi, fade + makas kesimi, gün boyu dayanması için özel fiksasyon",
            "3) Sakal şekillendirme: yüz hatlarınıza göre konturlanmış sakal + konik jilet traşı",
            "4) Medikal cilt bakımı: 5 aşamalı ritüel (enzim peeling, ozon buhar, gözenek temizliği, maske, nemlendirme)",
            "5) Manikür: kutikül bakımı, tırnak şekillendirme, mat finiş",
            "6) Son dokunuşlar: saç stili, parfüm önerisi, damat çantası",
          ],
        },
        {
          h: "Paket ne kadar sürüyor?",
          body: [
            "Patron'da damat paketi yaklaşık 2,5 saat. Bu süre rastgele değil — her aşamanın etkisi bir öncekinin üzerine oturmak için gereken optimum zaman. Aceleye getirmek, cildin dinlenmesini veya saç şeklinin oturmasını engeller.",
            "Paket için rezervasyon düğün gününden en az 1 hafta önce yapılmalı. İdeal olarak düğün sabahı ya da bir gün öncesi seçilir. Bir gün önce yapılırsa saç çok fresh kalır; aynı gün yapılırsa heyecanı en yüksek, ama planlama riskli olabilir.",
          ],
        },
        {
          h: "Kimlere uygun?",
          body: [
            "Damat paketi sadece evlenecekler için değil — önemli bir iş sunumu, nişan töreni, doğum günü, aile fotoğrafı veya sadece kendinize verdiğiniz bir hediye de iyi bir bahane. Tek fark: 'damat' adı ritüeli kapsamlı tutmak için kullanılıyor.",
            "Özellikle ilk kez kapsamlı bir kuaför deneyimi yaşayacak erkekler için güzel bir giriş. Bütün ritüel bir arada yaşanıyor.",
          ],
        },
        {
          h: "Düğün gününe özel tavsiyeler",
          body: [
            "1) Düğün tarihinden 3 ay önce: Patron'a ilk ziyaret, usta seçimi, saç formunun uzun vadeli planı",
            "2) 1 ay önce: saç renginiz pigmentasyon veya Davines bakımı planlanacaksa şimdi",
            "3) 1 hafta önce: son test kesim. Düğün fotoğraflarından memnun olmak için düğün günü DAN-DAN değişiklik yapmayın",
            "4) Düğün günü: damat paketi rezervasyonu, eşiniz / ailenizle birlikte gelin, fotoğrafçıyla senkronize olun",
          ],
        },
        {
          h: "Fiyatlandırma",
          body: [
            "Patron'da damat paketi 7.500 TL. Bu rakama dahil olan tüm ritüeller tek tek alınsaydı 2 ayrı randevu olacak ve yaklaşık 1.600 + 2.000 + 800 + ek finishing = 5.000-5.500 TL civarında olurdu. Paketin ek 2.000 TL değeri, koreografiyi, yiyecek-içecek servisini ve öncelikli usta erişimini içerir.",
            "Kurumsal paket ya da grup rezervasyonu (sağdıç + damat + baba) için WhatsApp'tan özel teklif alabilirsiniz.",
          ],
        },
      ],
      faqs: [
        { q: "Damat paketi kaç saat sürüyor?", a: "Patron'da yaklaşık 2,5 saat. Her aşamanın bir öncekinin üzerine oturması için gereken optimum zaman." },
        { q: "Düğün gününden ne kadar önce paketi yapmalıyım?", a: "Paket ya düğün sabahı ya da bir gün öncesi yapılır. Randevu ise en az 1 hafta önceden planlanmalı." },
        { q: "Eşim / sağdıçlarım da gelebilir mi?", a: "Elbette — grup paketi için WhatsApp'tan özel teklif alabilirsiniz." },
        { q: "Paket fiyatına neler dahil?", a: "Saç, sakal, cilt bakımı, manikür, şampanya, özel müzik seçkisi, damat çantası ve son dokunuşlar." },
      ],
    },
    en: {
      title: "The Groom Package in Izmir: Price, Duration, Contents, and Everything You Need to Know",
      excerpt:
        "Men's grooming for your wedding day — not a shave but a choreographed ritual. What's in Patron's groom package, who's it for, how long it takes: the complete guide.",
      lead:
        "Your wedding day isn't only yours — it's the day photographed for decades. Men usually reduce grooming to 'just a shave' — the groom package exists precisely to replace that randomness with care.",
      sections: [
        {
          h: "What is the groom package?",
          body: [
            "A single 2.5-hour ritual that combines hair design, beard sculpt, medical skin care, and manicure — tasks that would otherwise span four separate appointments.",
            "At Patron, it's also a gentleman's experience: champagne, curated playlist, your master's exclusive attention. Bring your partner and share the session.",
          ],
        },
        {
          h: "What's inside?",
          body: [
            "1) Welcome, champagne and playlist choice",
            "2) Hair design: face analysis, fade + shear cut, long-hold fixation",
            "3) Beard sculpt: facial-structure contour + conical razor shave",
            "4) Medical skin care: 5-step ritual (enzymatic peel, ozone steam, pore cleanse, mask, moisturize)",
            "5) Manicure: cuticle care, nail shaping, matte finish",
            "6) Final touches: styling, fragrance suggestion, groom bag",
          ],
        },
        {
          h: "How long?",
          body: [
            "About 2.5 hours. Not arbitrary — each phase needs to settle before the next lands.",
            "Book at least a week ahead. Ideally the morning of, or the day before, the wedding.",
          ],
        },
        {
          h: "Who is it for?",
          body: [
            "Not only for grooms — it works as a reset before a big presentation, an anniversary, or simply as a gift to yourself. The 'groom' label keeps the ritual ambitious.",
          ],
        },
        {
          h: "Timeline tips",
          body: [
            "3 months before: first visit, master selection, long-term plan",
            "1 month before: if you need pigmentation or Davines care, now",
            "1 week before: final test cut — don't change anything on the day",
            "Wedding day: book the package, sync with photographer",
          ],
        },
        {
          h: "Pricing",
          body: [
            "7,500 TL at Patron. Individually, the components would reach 5,000–5,500 TL across separate visits. The extra reflects choreography, F&B service, and priority access.",
            "Group rates (groom + best man + father) available on WhatsApp.",
          ],
        },
      ],
      faqs: [
        { q: "How long does the groom package take?", a: "About 2.5 hours at Patron — the optimum for each step to settle." },
        { q: "How far in advance should I book?", a: "At least 1 week. Best done the morning of or the day before the wedding." },
        { q: "Can my partner or groomsmen join?", a: "Yes — message us on WhatsApp for group rates." },
        { q: "What's included in the price?", a: "Hair, beard, skin care, manicure, champagne, playlist, groom bag, and final touches." },
      ],
    },
  },
  {
    slug: "pigmentasyon-smp-rehberi",
    category: { tr: "Tedavi", en: "Treatment" },
    date: "2026-03-15",
    readTimeTr: "7 dakika",
    readTimeEn: "7 min read",
    image: "/images/gallery-3.jpg",
    relatedServices: ["sac-sakal"],
    tr: {
      title: "Pigmentasyon (SMP) Nedir? Kimlere Uygundur, Nasıl Uygulanır?",
      excerpt:
        "Saç dipleri görünen, seyrelmiş ya da keskinlik isteyen erkekler için pigmentasyon (Scalp Micropigmentation) bir çözüm. Ama herkese uygun değil. Gerçekler, süreç ve beklentilere dair detaylı rehber.",
      lead:
        "Kafa derisine mikro-pigment uygulayarak saç görünümü yaratan Scalp Micropigmentation (SMP), son 5 yılda Türkiye'de popülerleşti. Peki kimlere uygun, hangi durumlarda beklentiyi boşa çıkarır, ne kadar sürüyor, nasıl bakılıyor? Patron'un uygulamalarından süzülmüş net bir rehber.",
      sections: [
        {
          h: "Pigmentasyon tam olarak nedir?",
          body: [
            "Pigmentasyon — ya da Scalp Micropigmentation — saçlı deriye özel mikro iğnelerle, her biri doğal saç folikülü görünümü veren noktalar uygulamaktır. Dövmeyle karıştırılmasın: kullanılan pigmentler cilt altı yalnızca 1-2 mm derinliğe gider (dövmede 2-4 mm), renk solması ve doğal görünümü koruması için özel formüldedir.",
            "Sonuç: kafa derinizde 1-2 mm uzunluğunda tıraşlanmış saç dipleri izlenimi oluşur. Mevcut saçınızla karıştığında, saç çizgisi daha belirgin ve dolgun görünür.",
          ],
        },
        {
          h: "Kimlere uygun?",
          body: [
            "1) Saç çizgisi geriye çekilmiş ama tamamen dökülmemiş erkekler (klasik 'widow's peak' veya M şekli)",
            "2) Tepe açılması — saç tepede seyrelmiş, dolgun görünüm kaybolmuş",
            "3) Saç ekimi yaptıran ancak donör alanda iz görünen erkekler (pigmentasyon izi kapatır)",
            "4) Kronik stres/alopesia areata nedeniyle kısmi dökülme yaşayanlar",
            "5) Kafalarını sürekli kısa tutan ama doğal saç dipleri arıyor olanlar",
          ],
        },
        {
          h: "Kimlere uygun değil?",
          body: [
            "1) Keloid yara izi oluşturma eğilimi olanlar — pigmentin üstüne yara oluşturma riski",
            "2) Aktif sedef hastalığı, egzama veya saçlı deri enfeksiyonu olanlar — iyileşene kadar ertelenmeli",
            "3) Çok açık tenli, hiç saç kalmamış + pigment rengini tutturmakta zorlanacak kişiler",
            "4) Kan sulandırıcı ilaç kullananlar — doktor onayı gerekli",
            "5) Hamileler (teorik risk, prosedür ertelenmeli)",
          ],
        },
        {
          h: "Süreç nasıl işliyor?",
          body: [
            "Pigmentasyon tek seansta bitmez — 2-3 seans, aralarında 10-14 gün. Birinci seans: temel nokta dağılımı. İkinci seans: yoğunluk ayarı ve saç çizgisi netleştirme. Üçüncü seans (gerekirse): ince ayar.",
            "Her seans yaklaşık 2-4 saat sürer. Lokal anestezik krem uygulanır; çoğu müşteri acıyı 'iğneyle değil ama hafif kaşıntıyla' karşılaştırıyor.",
            "İşlem sonrası 4-5 gün saçlı deride hafif kızarıklık olabilir — çoğunlukla 24 saatte geçer. 10 gün boyunca ağır terleme, saune, yüzme önerilmez.",
          ],
        },
        {
          h: "Sonuç ne kadar kalıcı?",
          body: [
            "Pigmentasyon ortalama 4-6 yıl dayanır. UV ışın, cilt bakım ürünleri ve genetik pigment tolerasyonuna bağlı olarak renk hafifçe solar.",
            "Tazeleme (touch-up) genelde 3-4 yıl sonra yapılır: 1 seansta renk canlandırılır. Bu, yeni baştan uygulamaktan çok daha hızlı ve ekonomiktir.",
          ],
        },
        {
          h: "Saç ekimi ile pigmentasyon birlikte olur mu?",
          body: [
            "Kesinlikle evet — modern yaklaşımda ikisi birbirini tamamlıyor. Saç ekimi dolgun görünüm sağlar, pigmentasyon ise donör alan izini ve ekim sonrası seyrekliği gizler.",
            "Sıralama önemli: önce saç ekimi yapılır, 8-12 ay iyileşme beklenir, sonra pigmentasyon ince ayarı yapılır. Tersine yapılırsa ekim pigmenti bozabilir.",
          ],
        },
        {
          h: "Fiyat ne kadar?",
          body: [
            "Patron'da pigmentasyon 1.000 TL'den başlar. Alan genişliğine göre (örneğin sadece saç çizgisi restorasyonu vs tüm tepe) 1.000-3.500 TL aralığında değişir. 2-3 seans toplam ücrete dahildir.",
            "Doktor vizitesi veya yurt dışı klinikler 1.500-3.000 €'ya çıkarken, Patron'da Türkiye'de deneyimli uygulayıcı + sterilizasyon standardı + özel pigment seçkisi çok daha makul bir fiyatla sunulur.",
          ],
        },
      ],
      faqs: [
        { q: "Pigmentasyon acı verir mi?", a: "Lokal anestezik krem uygulanır, çoğu müşteri 'iğneyle değil hafif kaşıntıyla' karşılaştırır." },
        { q: "Sonuç ne kadar dayanır?", a: "Ortalama 4-6 yıl. Sonrasında 1 seans touch-up ile yenilenir." },
        { q: "Saç ekimi yaptıran biri pigmentasyon da yaptırabilir mi?", a: "Evet — birbirini tamamlar. Önce ekim, sonra pigmentasyon sıralaması ideal." },
        { q: "Kaç seansta tamamlanıyor?", a: "2-3 seans, aralarında 10-14 gün." },
        { q: "Fiyatı ne kadar?", a: "Alan genişliğine göre 1.000-3.500 TL, 2-3 seans dahil." },
      ],
    },
    en: {
      title: "Scalp Micropigmentation (SMP): What It Is, Who It's For, How It's Done",
      excerpt:
        "For men with receding hairlines, thinning crowns, or those who want sharper scalp definition, SMP is a solution. Not for everyone — here's the full truth.",
      lead:
        "Scalp Micropigmentation applies microscopic pigment dots to the scalp, creating the look of short hair follicles. It has exploded in popularity, but it suits some and disappoints others. Here's a clear guide from Patron's chair.",
      sections: [
        {
          h: "What is SMP exactly?",
          body: [
            "Unlike tattoos, SMP pigments go only 1-2 mm under the skin (tattoos 2-4 mm), in a formula designed to fade gracefully.",
            "The result: the look of a 1-2 mm buzz cut. Blended with existing hair, it gives a sharper, fuller appearance.",
          ],
        },
        {
          h: "Who it's for",
          body: [
            "Receding hairlines that haven't fully balded",
            "Crown thinning",
            "Hair transplant recipients with visible donor scars",
            "Alopecia areata or stress-related partial loss",
            "Men who keep very short hair but want natural stubble definition",
          ],
        },
        {
          h: "Who it's NOT for",
          body: [
            "Keloid-scar-prone skin",
            "Active psoriasis, eczema, or scalp infection",
            "Very fair skin with total baldness (pigment-matching challenge)",
            "Blood thinners (doctor approval required)",
            "Pregnancy (theoretical risk — postpone)",
          ],
        },
        {
          h: "How the process works",
          body: [
            "2-3 sessions, 10-14 days apart. Session 1: base placement. Session 2: density and hairline refinement. Session 3 (if needed): fine-tuning.",
            "Each session is 2-4 hours. Topical anesthetic is applied; most describe the feel as 'mild itch, not needle pain'.",
            "Slight redness for 4-5 days; usually gone in 24h. Avoid heavy sweating, sauna, swimming for 10 days.",
          ],
        },
        {
          h: "How long does it last?",
          body: [
            "Average 4-6 years. UV light, skin products, and pigment tolerance cause gradual fade.",
            "Touch-up usually at 3-4 years — a single session brings color back.",
          ],
        },
        {
          h: "Does it pair with hair transplants?",
          body: [
            "Absolutely. Transplant provides volume; SMP hides donor scars and residual thinning.",
            "Order matters: transplant first, 8-12 months healing, then SMP. Reversed, the transplant can disturb the pigment.",
          ],
        },
        {
          h: "Price",
          body: [
            "From 1,000 TL at Patron. Varies by area (hairline restoration vs full crown) — 1,000-3,500 TL range. 2-3 sessions included.",
            "International clinics charge 1,500-3,000 €. Patron offers experienced practitioners and sterile standards at a much more accessible price.",
          ],
        },
      ],
      faqs: [
        { q: "Does SMP hurt?", a: "Topical anesthetic is applied; most describe it as 'mild itch, not needle pain'." },
        { q: "How long does it last?", a: "4-6 years. A single touch-up session refreshes the color." },
        { q: "Can transplant recipients do SMP?", a: "Yes — they complement. Transplant first, then SMP." },
        { q: "How many sessions?", a: "2-3 sessions, 10-14 days apart." },
        { q: "Price?", a: "1,000-3,500 TL depending on area; 2-3 sessions included." },
      ],
    },
  },
  {
    slug: "kusursuz-tirasin-anatomisi",
    category: { tr: "Grooming", en: "Grooming" },
    date: "2026-03-12",
    readTimeTr: "5 dakika",
    readTimeEn: "5 min read",
    image: "/images/blog-hot-towel.jpg",
    relatedServices: ["sac-sakal"],
    tr: {
      title: "Kusursuz Bir Tıraşın Anatomisi: Medikal Sıcak Havlu Ritüeli",
      excerpt:
        "Tıraş, bir erkeğin kendine ayırdığı en özel anlardan biri. Patron'da bu ritüelin anatomisi nasıl kurulur, hangi aşamalardan geçer? Sıcak havludan konik jilete.",
      lead:
        "Tıraş olmak, bir erkeğin kendine ayırdığı en özel anlardan biridir. Modern çağda hızla geçiştirilen bu ritüeli, Patron farkıyla bir meditasyona dönüştürüyoruz. Sıcak havlu, özel uçucu yağlar ve klasik ustura tekniğiyle yüzdeki yorgunluğu silip atıyoruz.",
      sections: [
        {
          h: "Neden sıcak havlu önce geliyor?",
          body: [
            "Sıcak havlu, cildin yüzeyindeki yağ tabakasını yumuşatır ve gözenekleri açar. Böylece jilet sakal köklerine keskin bir açıyla yaklaşabilir, deriyi tahriş etmez.",
            "Havluyu 70-75°C'de tutar, 3-4 dakika yüzde bekletiriz. Bu süre sadece ısı transferi için değil; aynı zamanda misafirin sakinleşmesi, tempoyu yavaşlatması için de önemli.",
          ],
        },
        {
          h: "Pre-shave oil — atlanan aşama",
          body: [
            "Çoğu berber pre-shave oil aşamasını atlar. Oysa bu aşama, klasik ustura jiletinin yüzde akıcı kayması için şart. Sandal ağacı ve öjenol bazlı yağımız, cildi tahriş olmadan korurken jiletin düz ve güvenli geçişini sağlıyor.",
          ],
        },
        {
          h: "Konik jilet: tercih meselesi değil, teknik",
          body: [
            "Klasik düz ustura (konik jilet), aksine popüler bilgiye göre, doğru kullanıldığında ten tipinin en az tahriş olduğu yöntemdir. Sır: 30° açıyla ve sakal yönüne uygun geçiş.",
            "Standart jiletin 2-5 bıçağı aynı bölgeye 5 kez geçtiği için mikro-kesikler oluşturur. Konik jilet tek geçişte işini bitirir.",
          ],
        },
        {
          h: "After-shave: alkol mü, balzam mı?",
          body: [
            "Genç cilt için hafif alkollü tonik sıkıntı yaratmaz. Olgun veya hassas ciltlerde Patron'un Italyan balzamı tercih edilir: aloe vera, menthol ve allantoin içerir.",
            "Önemli olan: after-shave sadece parfüm değildir — mikro-kesikleri kapatır ve hidrate eder.",
          ],
        },
        {
          h: "Ritüelin sonu: kapanış masajı",
          body: [
            "Çenenin altından kulak arkasına, şakaklara ve alına uzanan 2 dakikalık masaj, yüzdeki gerginliği çözüyor ve misafirin koltuktan kalktığında gerçekten dinlenmiş hissetmesini sağlıyor.",
            "Bu detay çoğu berberde yok. Oysa ritüeli ritüel yapan şey tam olarak bu tür detaylar.",
          ],
        },
      ],
      faqs: [
        { q: "Konik jilet tıraşı daha çok mu tahriş eder?", a: "Hayır — doğru kullanıldığında standart jiletten daha az tahriş. Sır, 30° açı ve sakal yönüne uygun geçiş." },
        { q: "Sıcak havlu ne kadar sıcak olmalı?", a: "70-75°C. Daha sıcak cildi yakar, daha soğuk yumuşatma etkisi yapmaz." },
        { q: "Hassas ciltlere konik jilet yapılır mı?", a: "Evet ama pre-shave oil aşaması atlanmamalı ve after-shave için alkolsüz balzam tercih edilmeli." },
      ],
    },
    en: {
      title: "Anatomy of a Perfect Shave: The Medical Hot Towel Ritual",
      excerpt:
        "Shaving is one of the most private moments a man dedicates to himself. Here's how Patron builds that ritual — from hot towel to conical razor.",
      lead:
        "Shaving is one of the most private moments a man dedicates to himself. We transform this rapidly skipped ritual into a meditation, with hot towels, essential oils, and classic straight-razor technique.",
      sections: [
        {
          h: "Why hot towel first?",
          body: [
            "Hot towel softens the skin's oil layer and opens pores, so the razor can approach follicles at a sharp angle without irritation.",
            "70-75°C, held 3-4 minutes. Not only heat transfer — it sets the pace.",
          ],
        },
        {
          h: "Pre-shave oil — the skipped step",
          body: [
            "Most barbers skip pre-shave oil. Yet it's essential for the classic razor to glide smoothly. Our sandalwood + eugenol oil protects skin without irritation.",
          ],
        },
        {
          h: "The conical razor: not preference, technique",
          body: [
            "Straight razors, contrary to pop belief, irritate less than multi-blade cartridges when used correctly. Secret: 30° angle, with the grain.",
            "Cartridge blades pass the same spot 2-5 times, creating micro-cuts. Conical razor does it in one pass.",
          ],
        },
        {
          h: "Aftershave: alcohol or balm?",
          body: [
            "Young skin tolerates light tonic. Mature or sensitive skin gets our Italian balm: aloe vera, menthol, allantoin.",
            "Aftershave isn't just fragrance — it seals micro-cuts and hydrates.",
          ],
        },
        {
          h: "The finishing massage",
          body: [
            "A 2-minute massage from jawline to temples dissolves facial tension and leaves you truly rested.",
            "Most barbers skip this. It's exactly what turns a shave into a ritual.",
          ],
        },
      ],
      faqs: [
        { q: "Does a conical razor irritate more?", a: "No — correctly used, it irritates less than cartridges. 30° angle, with the grain." },
        { q: "How hot should the towel be?", a: "70-75°C. Hotter burns; cooler doesn't soften." },
        { q: "Can sensitive skin take a conical razor?", a: "Yes — but don't skip pre-shave oil, and use alcohol-free aftershave balm." },
      ],
    },
  },
  {
    slug: "neden-mizutani",
    category: { tr: "Ekipman", en: "Equipment" },
    date: "2026-03-05",
    readTimeTr: "5 dakika",
    readTimeEn: "5 min read",
    image: "/images/blog-mizutani.jpg",
    relatedServices: ["sac-sakal"],
    tr: {
      title: "Neden Mizutani? Dünyanın En İyi Makaslarıyla Tanışın",
      excerpt:
        "Bir sanatçıyı kullandığı fırça, bir berberi ise kullandığı makas belirler. Japon el işçiliğinin şaheseri Mizutani makaslar — neden Patron'un tercihi?",
      lead:
        "Bir sanatçıyı kullandığı fırça, bir berberi ise kullandığı makas belirler. Japon el işçiliğinin şaheseri Mizutani makaslar, sadece saçı kesmekle kalmaz, onun formunu şekillendirir. Neden ekipmanlarımıza bu kadar takıntılıyız?",
      sections: [
        {
          h: "Tek bir Mizutani makası neden 3 ay üretim süresi alır?",
          body: [
            "Mizutani makaslar, Tokyo'daki 125 yıllık atölyede el yapımı. Her bir makas tek bir ustanın elinden çıkar ve 3 aya yakın süre süren bir döngünün sonucu: hammadde seçimi (kalite COB2 ya da VG10 çelik), ısıl işlem, bileme, dengeleme, sertifika.",
            "Sonuç: bıçaklarda 61-63 HRC sertlik (jilet seviyesi), ama aynı zamanda elastiklik. 10 yıl bilenmeden kullanılabilir.",
          ],
        },
        {
          h: "Scissor-over-comb dokusu: ancak makas ustası yakalar",
          body: [
            "Makine fade ile saç kısa tutulur ama hareketsiz bir doku bırakır. Scissor-over-comb tekniği ise her teli ayrı ayrı keserek hareketli, hafif ve yüz hatlarınıza özel bir form oluşturur.",
            "Bu teknik Mizutani kalitesinde makaslarla daha hassas. Ucuz makaslarda her kesim mikro-travma yaratır, saç kuruyunca çatallaşma başlar.",
          ],
        },
        {
          h: "Ağırlık ve denge — ustaların ellerine uzatması",
          body: [
            "Mizutani 'sofia' serisi 5,8 inç, 60 gram. Çok hafif değil (kesim kontrolü için ağırlık gerekiyor), çok ağır değil (8 saatlik gün sonunda el yorgunluğu olmasın diye).",
            "Her ustaya özel denge kalibrasyonu var. Patron'un tüm ustaları kendi imzalarını taşıyan Mizutani makaslarla çalışıyor.",
          ],
        },
        {
          h: "Bilenmek değil, yeniden doğmak",
          body: [
            "Mizutani makasları her 18-24 ayda bir Japonya'ya gönderilir ve orijinal ustaya bilenir. Bu süreç makasın ömrünü 3 kata kadar uzatır.",
            "Türkiye'deki standart bileme makinelerinde bilenmez — orijinal açı kaybolur. Patron için bu ritüel ekipman bakımı değil, uzun vadeli yatırım felsefesidir.",
          ],
        },
      ],
      faqs: [
        { q: "Mizutani makasın fiyatı ne kadar?", a: "Profesyonel seviyede 800-3.500 € arası. Patron ustaları ortalama 4 Mizutani makas setiyle çalışıyor." },
        { q: "Mizutani ile diğer Japon markaları arasında fark var mı?", a: "Kamisori ve Joewell de yüksek kalite. Mizutani üretim disiplini ve garanti politikasında öne çıkar." },
        { q: "Ucuz makas ile kesim arasındaki fark ne kadar hissedilir?", a: "İlk 3 gün belki değil. Ama 2 hafta sonra saç uçları çatallaşmaya başlar; Mizutani ile çatallaşma çok azdır." },
      ],
    },
    en: {
      title: "Why Mizutani? Meet the Best Scissors in the World",
      excerpt:
        "An artist is defined by his brush, a barber by his scissors. Mizutani scissors — Japanese masterpieces, and why Patron picked them.",
      lead:
        "An artist is defined by his brush, a barber by his scissors. Mizutani scissors, masterpieces of Japanese craftsmanship, don't merely cut hair — they shape its entire form. Here's why we're obsessed.",
      sections: [
        {
          h: "Why does a single Mizutani take 3 months to produce?",
          body: [
            "Hand-made in a 125-year-old Tokyo atelier, each scissor comes from one master's hand across a 3-month cycle: material selection (COB2 or VG10 steel), heat treatment, grinding, balancing, certification.",
            "Result: 61-63 HRC blade hardness (razor-level) with elasticity. Usable for 10 years without resharpening.",
          ],
        },
        {
          h: "Scissor-over-comb: only a master's hand catches it",
          body: [
            "Clipper fade keeps hair short but static. Scissor-over-comb cuts each strand individually, creating movement, lightness, and a face-specific form.",
            "The technique relies on Mizutani-class precision. Cheap scissors micro-traumatize every cut; hair splits as it dries.",
          ],
        },
        {
          h: "Weight and balance",
          body: [
            "Mizutani 'sofia' series, 5.8 inch, 60 g. Light enough for an 8-hour shift, heavy enough for control.",
            "Calibrated per master. Every Patron master works with a signed Mizutani set.",
          ],
        },
        {
          h: "Sharpened? No — reborn",
          body: [
            "Every 18-24 months we ship them to Japan for the original master to re-edge. This triples their lifespan.",
            "Local sharpeners lose the original angle. For Patron, this ritual isn't maintenance — it's long-term philosophy.",
          ],
        },
      ],
      faqs: [
        { q: "Mizutani price range?", a: "Professional level: 800-3,500 €. Patron masters work with ~4 pairs each." },
        { q: "Mizutani vs other Japanese brands?", a: "Kamisori and Joewell are also top-tier. Mizutani leads on production discipline and warranty." },
        { q: "Is the difference noticeable vs cheap scissors?", a: "Not in 3 days. But by week 2, split ends appear — rare with Mizutani." },
      ],
    },
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return ARTICLES.find((a) => a.slug === slug);
}
