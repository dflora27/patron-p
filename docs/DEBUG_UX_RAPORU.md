# Patron Erkek Kuaförü — Debug & UX Raporu

> Tarih: 2026-04-22
> Kapsam: Bu session'da yapılan değişikliklerin ardından tüm proje.
> Amaç: Bir sonraki iterasyonda düzeltilecek hataların ve iyileştirme fikirlerinin merkezi listesi.

---

## 🔴 Kritik (yayına çıkmadan düzeltilmeli)

### 1. Eksik social share görseli
- [app/layout.tsx:60](app/layout.tsx#L60) ve tüm sayfa `openGraph.images` alanları `/images/og-cover.jpg` dosyasını referans alıyor ama dosya henüz yok.
- **Sonuç:** Site linkini WhatsApp / Twitter / Facebook'ta paylaşınca bozuk preview.
- **Yapılacak:** 1200x630 yatay kapak görseli oluştur → `public/images/og-cover.jpg`.

### 2. Google Search Console doğrulama kodu yok
- [app/layout.tsx](app/layout.tsx) `metadata.verification.google` placeholder (yorum olarak) duruyor.
- **Yapılacak:** GSC → domain doğrula → meta tag'i [app/layout.tsx](app/layout.tsx) içine kopyala. Bunsuz siteye Search Console'dan veri akmaz.

### 3. Gerçek Google yorumları eklenmedi
- [components/sections/ReviewsSection.tsx](components/sections/ReviewsSection.tsx) içinde şu an örnek yorumlar var. "/yorumlar" sayfası da henüz oluşturulmadı.
- **Kullanıcı kararına bırakıldı** (bu oturumda bilinçli olarak ertelendi).
- **Yapılacak:** (a) Gerçek yorum metinlerini elle yapıştır, veya (b) Google Places API entegrasyonu, veya (c) review-harvest script'i.

### 4. `aggregateRating.reviewCount: 180` tahmini
- [lib/seo.ts:31](lib/seo.ts#L31) içinde yorum sayısı placeholder.
- **Yapılacak:** Google Business Profile'daki gerçek yorum sayısıyla güncelle. Yanlış sayı → Google yapılandırılmış veri uyarısı.

### 5. Kalan `<img>` etiketleri (ESLint warning)
Aşağıdaki dosyalarda hala `<img>` var — `next/image`'e taşınmalı (LCP + bandwidth + lazy-load):
- [components/hero/ParallaxHero.tsx:25](components/hero/ParallaxHero.tsx#L25) — **LCP için kritik**, `priority` ekle
- [components/layout/Navbar.tsx:61](components/layout/Navbar.tsx#L61), [components/layout/Navbar.tsx:153](components/layout/Navbar.tsx#L153) — logo ve emblem
- [components/sections/BeforeAfter.tsx:80](components/sections/BeforeAfter.tsx#L80), [components/sections/BeforeAfter.tsx:89](components/sections/BeforeAfter.tsx#L89)
- [components/sections/BrandsMarquee.tsx:38](components/sections/BrandsMarquee.tsx#L38)
- [components/sections/InstagramFeed.tsx:75](components/sections/InstagramFeed.tsx#L75)
- [components/sections/JournalSection.tsx:45](components/sections/JournalSection.tsx#L45)
- [components/sections/PhotoGallery.tsx:36](components/sections/PhotoGallery.tsx#L36)
- [components/ui/Preloader.tsx](components/ui/Preloader.tsx)
- [app/journal/page.tsx:45](app/journal/page.tsx#L45), [app/en/journal/page.tsx:45](app/en/journal/page.tsx#L45)
- [app/journal/[slug]/page.tsx:62](app/journal/[slug]/page.tsx#L62), [app/en/journal/[slug]/page.tsx:62](app/en/journal/[slug]/page.tsx#L62)

### 6. Light mode'da hala dark-only gradient'ler var
PowerShell replace `bg-*` / `text-*` / `border-*` sınıflarını dönüştürdü ama `from-brand-black`, `from-black/85`, `from-brand-obsidian`, `via-brand-black/40`, `to-brand-black` gibi **gradient stop**'ları olduğu gibi bıraktı. Işık temada bu yüzeyler aşırı koyu sızıntı yapıyor.
- **Etkilenen:** TeamGallery flip card ön yüzü (şu an `from-black/85` — her temada koyu, kasten), ServicesGrid hover overlay (`from-black/90` — kasten), AboutUs arch image filter (`brightness-75 contrast-125` — light'ta görsel yanık olabilir), Hero (kontrol).
- **Yapılacak:** Light mode'da hero ve card overlay'leri için `light:from-white/70` gibi koşullu sınıflar ekle, veya her biri için karar ver (bazıları her iki modda da koyu kalmalı).

### 7. Pazar saatleri tutarsızlığı
- Footer: `Pzt–Cmt 10-21`, `Pzt 11-19` (yeni yazıldı).
- JSON-LD [lib/jsonld.ts](lib/jsonld.ts): `Mo-Sa 10-21`, `Su 11-19`.
- **Eski veri:** Önceki footer'da "Pazar KAPALI" yazıyordu. Hangi doğru?
- **Yapılacak:** Doğrula ve tek bir kaynakla uyumla (ideal: `lib/seo.ts`'te tanımla, footer ve JSON-LD ondan okusun).

---

## 🟡 Önemli (deploy sonrası ilk iterasyonda)

### 8. Preloader her sayfada görünüyor
[app/layout.tsx](app/layout.tsx) → `<Preloader />` root layout'ta. Her route değişiminde tekrar yükleniyor mu? İlk yüklemede tam, navigasyonda kısa. UX ölçümü gerekir.
- **Öneri:** İlk yüklemede `sessionStorage` flag'i ile kontrol et; aynı oturumda tekrarlama.

### 9. CustomCursor mobilde performans yükü
Mobilde hover yok — CustomCursor gereksiz DOM + JS. [components/ui/CustomCursor.tsx](components/ui/CustomCursor.tsx) muhtemelen mobile'da `display:none` ama JS hala çalışıyor.
- **Öneri:** `useMediaQuery('(hover: hover)')` ile yalnızca pointer cihazlarda render et.

### 10. Framer Motion bundle size (161 kB First Load JS)
Framer Motion ana sayfada 161 kB → ağır. Çoğu animasyon basit.
- **Öneri:** Yüksek getirisiz yerlerde vanilla CSS animation veya `motion/mini` kullan. Ya da `lazy-motion` ile tree-shake et.

### 11. Footer'da Instagram linki ≠ seo.ts
- [lib/seo.ts:35](lib/seo.ts#L35) `sameAs: instagram.com/patronerkekkuaforu`
- [components/layout/Footer.tsx:33](components/layout/Footer.tsx#L33) `instagram.com/patronkuafor/`
- **Yapılacak:** İkisini tek kaynakla uyumla.

### 12. Journal zaten var ama modern görsellere geçmedi
Journal sayfaları static `<img>` kullanıyor (yukarıda listelendi) ve PowerShell refactor color-only değiştirdi. İçerik kalitesi için ayrıca gözden geçirilmeli.

### 13. `en/reviews` ve `/yorumlar` sayfaları henüz yok
Reviews section'ında "Tüm Yorumları Gör →" linki `/yorumlar`'a gidiyor. Sayfa yok → 404.
- **Yapılacak:** Ya sayfaları oluştur, ya linki sadece gerçek yorumlar entegre olduktan sonra göster.

### 14. Servis kartlarında link tutarlılığı
ServicesGrid her kartı `/hizmetler`'e yönlendiriyor. Daha iyi UX: her kart kendi slug'una (`/hizmetler/damat-paketi` gibi). Şu an `SERVICES[].slug` alanı var ama kullanılmıyor.
- **Öneri:** `app/hizmetler/[slug]/page.tsx` dinamik route'u ekle.

### 15. VipNewsletter formu çalışmıyor
[components/sections/VipNewsletter.tsx](components/sections/VipNewsletter.tsx) — endpoint bağlı değil. Kullanıcı e-posta girer, hiçbir yere gitmez.
- **Yapılacak:** Basit Vercel route handler (`/api/subscribe`) → Mailchimp / Resend / ConvertKit'e post.

---

## 🟢 İyileştirme fırsatları (sonraki fazlar)

### A. SEO — rakipsiz sıralama için
1. **Yerel SEO için Google Business Profile optimizasyonu** — tam adres, telefon, haftalık post, foto güncelleme.
2. **Blog içerik stratejisi** — "İzmir'de en iyi erkek kuaförü", "sakal bakım rehberi", "damat paketi fiyatları 2026", "pigmentasyon nedir" gibi arama hacmi yüksek başlıklar. Her biri 1200+ kelime, schema.org/Article + `FAQPage` markup.
3. **Internal linking** — her blog yazısından ilgili hizmet sayfasına anchor link.
4. **Sayfa başına `FAQPage` schema** — fiyat sayfasında "Kesim kaç dakika sürüyor?" gibi.
5. **Local Pack sinyalleri** — kazımdirik, folkart incity, bornova anahtar kelimelerini H1/H2'ye doğal yerleştir.
6. **Core Web Vitals** — LCP < 2.5s için hero görselini `priority` + AVIF + preload, CLS = 0 için layout-shift kontrolü.
7. **Image SEO** — descriptive alt text ('Patron ekibi lounge'), dosya adları (`patron-erkek-kuaforu-kesim.jpg`).
8. **Breadcrumb schema** (her alt sayfada kuruldu, ✓) + **ItemList schema** servis sayfasında.
9. **Google Merchant Center** gift voucher olarak hizmetleri ekleyebilirsin.
10. **Yerel link-building** — İzmir/Bornova rehber sitelerinden bağlantılar, influencer ortaklıkları.

### B. UX — dönüşüm yükseltici eklemeler
1. **Akıllı randevu widget'ı** — haftanın uygun saatlerini gösterir (Google Calendar API), tek tıkla WhatsApp'a otomatik mesaj üretir (`?text=Merhaba, Salı 14:00'a randevu almak istiyorum`).
2. **Sticky randevu barı** — mobilde alt sabit bar, "Hemen Randevu" + telefon ikonu.
3. **Hizmet seçici sihirbaz** — "Ne ihtiyacın var?" → 3 soru → önerilen paket + fiyat tahmini.
4. **Before/After carousel** — mevcut [BeforeAfter.tsx](components/sections/BeforeAfter.tsx) slider'ını ana sayfada daha öne çıkar.
5. **360° salon turu** — iframe embed veya basit panoramic viewer.
6. **Misafir geri bildirim formu** — ziyaret sonrası WhatsApp otomasyonu ile gönderilecek link.
7. **Referral programı** — "Arkadaşını getir %20 indirim" + paylaşılabilir referral code.
8. **Loyalty kartı** — 10. kesim ücretsiz. Basit stamp UI.
9. **Hediye çeki satın alma** — Iyzico / Shopier ile hediye çeki satışı, e-mail ile PDF teslim.

### C. Akıcılık & Responsive
1. **Mobilde parallax scroll lag'i** — ParallaxHero bazı telefonlarda jank yapabilir. `will-change: transform` + throttle.
2. **Fonts display** — `display: 'swap'` (zaten ✓) ama `adjustFontFallback` ile CLS azalt.
3. **Prefetch hover** — Link'lere `prefetch` (Next Link default true, ama mobilde `hover:none` olduğu için prefetch on-visible'a çevrilmeli).
4. **Route transitions** — Next 14 App Router'da page-to-page transition için `loading.tsx` veya framer-motion `AnimatePresence` entegre et.
5. **Scroll progress indicator** — hero sayfalarda üstte altın çizgi.
6. **Parallax performance** — mobile'da `scrollY` güncelleme 60fps'i yoruyor. `useTransform` ile daha yumuşak.

### D. Tasarım / polishing
1. **Light mode audit** — tüm sayfaları light'ta görsel olarak gözden geçir (bu session'da otomatik dönüşüm yapıldı, manuel polish gerekir).
2. **Dark-light arası smooth geçiş** — şu an 400ms bg transition var (✓). Ek olarak image filter'ları da smooth geçirebilir.
3. **Sistem tercihini algılama** — şu an `enableSystem={false}`, istenirse `true` yapılabilir (ama kullanıcı istedi ki default dark kalsın — karışık sinyal verme, `false` doğru).
4. **Emblem favicon** — `/images/emblem.png` şu an favicon olarak kullanılıyor (transparency?). 32x32/192x192/512x512 ayrı varyantlar daha iyi.
5. **Logo light mode** — `/images/logo.png` koyu zemin için tasarlandıysa, ivory zeminde görünürlüğü test et. Gerekirse `logo-dark.png` ve `logo-light.png` ayır.
6. **Selection rengi** — `selection:bg-brand-gold selection:text-white` set edildi. Light'ta yeterli kontrast.

### E. Teknik borç
1. **`app/en/page.tsx` ve `app/page.tsx` aynı içerik** — iki dosya ortak bileşen olarak yaşayabilir; locale kontrolünü içinde yapan tek component + iki sarmalayıcı sayfa.
2. **`noise.png` referansı** — `tailwind.config.ts`'te `bg-grain` var ama hiçbir yerde kullanılmıyor? Grep atılıp doğrulanmalı.
3. **TypeScript strict mode** — projenin `strict: true` olup olmadığını [tsconfig.json](tsconfig.json) kontrol et.
4. **ESLint warning'leri** — 14 kalan `<img>` warning. `no-img-element` kuralını kurtar.
5. **Tests** — henüz yok. Kritik route'lar için en azından smoke test (`npm run test` → Vitest + Playwright).

### F. Analitik & İzleme
1. **Vercel Analytics** — `@vercel/analytics` ekle, ücretsiz katmanda yeterli.
2. **Google Analytics 4** — dönüşüm takibi (WhatsApp click, form submission, pricing page view).
3. **Hotjar veya Microsoft Clarity** — heatmap + session recording, UX kararları için altın.
4. **Error tracking** — Sentry / LogRocket — production'da catch edilmeyen error'lar için.

### G. Erişilebilirlik (a11y)
1. **axe-core audit** — geliştirme sırasında aktif.
2. **Klavye navigasyonu** — flip card `button`, Tab ile erişilebilir ✓. Ancak hamburger menü açıldıktan sonra focus trap?
3. **Screen reader testi** — VoiceOver/NVDA ile smoke test, özellikle flip card back yüzünün okunabilirliği.
4. **Contrast ratios** — `text-foreground-subtle` light mode'da `rgb(115,115,115)` — AA için 4.5:1 sağlıyor mu?

---

## 📦 Durum özeti

| Kategori | Yapıldı | Kaldı |
|---|---|---|
| Dark/Light mode | next-themes, token sistemi, toggle | Light mode görsel audit, gradient'ler |
| SEO altyapısı | Metadata, sitemap, robots, manifest, JSON-LD, hreflang | GSC doğrulama, og-cover.jpg, FAQPage schema |
| Yeni sayfalar | 8 sayfa (About/Team/Services/Pricing × TR+EN) | `/yorumlar` + EN karşılığı, Service detail routes |
| Team flip card | 6'lı tek satır, 3D flip, hover+tap | — |
| Pricing | Nail kaldırıldı, ortalı tek liste | — |
| Reviews | 6 kart + Review schema | Gerçek Google yorumları + /yorumlar sayfası |
| WhatsApp | 5sn tooltip + pulse + dismissable | — |
| `<img>` → `next/image` | 5 kritik component | 11 dosyada kaldı (listede) |

---

## 🎯 Bir sonraki iterasyon için önerilen sıra

1. **Kritik 1-7'yi düzelt** (1-2 saat): og-cover, GSC, pazar saatleri, gradient temizliği, `<img>` → `next/image`.
2. **Google yorumları entegrasyonu** (yaklaşım seçildikten sonra 1 saat).
3. **Blog içerik stratejisi** (SEO için en yüksek getiri, 3-5 uzun makale yazımı).
4. **Akıllı randevu widget'ı + sticky CTA** (dönüşüm artışı).
5. **Vercel Analytics + GA4** (veriyle karar).
6. **Light mode görsel polish** (tasarım rötuşu, 2-3 saat).
