# Patron Erkek Kuaförü — Debug & UX Raporu

> Son güncelleme: 2026-04-22
> Amaç: Tamamlanan işlerin, kalan kritiklerin ve gelecek iterasyonlar için iyileştirme fikirlerinin merkezi listesi.

---

## ✅ Bu oturumda tamamlananlar

### Altyapı & tema
- `next-themes` ile dark/light mode (varsayılan dark), Navbar'da toggle
- CSS değişkenleri ile `surface`/`foreground`/`hairline` token sistemi
- 21 dosya semantic token'lara taşındı
- ParallaxHero static siyah zemine sabitlendi (iki modda da okunabilir kalması için)

### SEO altyapısı
- Kapsamlı `Metadata` (title template, openGraph, twitter, robots, hreflang TR/EN)
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` dinamik route'lar
- JSON-LD: `HairSalon` + `LocalBusiness` + `WebSite` + `BreadcrumbList` + `Review` + `FAQPage`
- `lib/seo.ts` — tek kaynaktan: HOURS, SOCIALS, BUSINESS, FAQS_TR/EN

### Sayfalar
- 4 yeni TR sayfa + 4 EN karşılığı (About/Team/Services/Pricing)
- `/yorumlar` + `/en/reviews` (gerçek yorum sonra)
- `PageHero` + `PageCta` ortak bileşenleri
- Ana sayfa hibrit: her section özet + "Detayı Gör →"

### UI iyileştirmeleri
- Team: 6'lı tek satır 3D flip card (hover + tap)
- Pricing: Nail kaldırıldı, ortalı tek liste
- Reviews: 6 kart + review schema
- FAQSection: accordion + FAQPage schema (fiyatlar sayfası)
- FloatingWhatsApp: 5 sn sonra otomatik tooltip, sessionStorage
- **StickyMobileCta**: mobilde scroll sonrası alt sabit Ara + WhatsApp barı
- Preloader: oturum başına tek kez (sessionStorage flag)
- CustomCursor: yalnızca `(hover: hover) and (pointer: fine)` cihazlarda render

### Performans
- 14 `<img>` → `next/image` (hero'ya `priority` flag)
- `next.config.mjs`: AVIF/WebP formats, unsplash remote pattern
- @vercel/analytics + @vercel/speed-insights

---

## 🔴 Hala kalan kritikler

### 1. Gerçek Google yorumları entegrasyonu
- [/yorumlar](app/yorumlar/page.tsx) ve [/en/reviews](app/en/reviews/page.tsx) sayfaları hazır, şu an örnek 6 yorum gösteriyor.
- Sen karar verince: (a) elle yapıştır, (b) Places API ile canlı, (c) ilk iterasyon için mevcut haliyle yayına çık.

### 2. `aggregateRating.reviewCount: 180` tahmini
- [lib/seo.ts:60](lib/seo.ts#L60) — gerçek Google Business Profile'daki yorum sayısıyla güncelle yoksa Google yapılandırılmış veri uyarısı verir.

### 3. Google Search Console doğrulama kodu
- [app/layout.tsx](app/layout.tsx) `verification.google` placeholder (yorum satırı).
- GSC → domain doğrula → meta tag'i ekle. Bunsuz GSC'den veri akmaz.

### 4. Gerçek domain doğrulaması
- `lib/seo.ts:4` `SITE_URL = "https://patronerkekkuaforu.com"` — bu domain satın alındı mı? Alındıysa Vercel'de bağlandı mı?

### 5. Özel OG kapak görseli (1200×630)
- Şu an fallback olarak `craftsman.jpg` kullanılıyor. Dedicated `og-cover.jpg` (logo + tagline + hero foto compoze) görsel-tasarım açısından daha iyi sonuç verir.

### 6. Favicon varyantları
- `/images/emblem.png` tek dosya olarak kullanılıyor. `favicon.ico` + `apple-touch-icon` (180×180) + Android chrome (192/512) ayrı varyantlar ideal.

### 7. Instagram hesap adı — hangisi doğru?
- [lib/seo.ts:8](lib/seo.ts#L8) şu an `instagram.com/patronkuafor/`. Gerçek hesabın handle'ını doğrula (önceki kodda iki farklı handle vardı).

---

## 🟡 Sıradaki iş listesi

### A. Canlı ortam kurulumu (acil sonraki adım)
1. **Vercel domain**: `patronerkekkuaforu.com` bağla, SSL aktif
2. **Google Search Console**: siteyi ekle, sitemap submit et
3. **Google Analytics 4**: property oluştur, GA4 ID'yi `.env.local`'a ekle (basit script tag layout.tsx'e eklenebilir)
4. **Google Business Profile**: işletmeyi claim et, fotoğraf + post güncelle, web sitesi linki olarak yeni domain

### B. SEO içerik genişletme (rakipsiz olmak için)
1. **Blog — 3 uzun makale**:
   - "İzmir Bornova'da En İyi Erkek Kuaförü Nasıl Seçilir? (2026 Rehberi)" — long-tail keyword
   - "Damat Paketi İzmir: Fiyat, Süre ve Neler Dahil?" — ticari arama
   - "Pigmentasyon (SMP) Nedir, Kime Uygundur?" — yüksek ilgi
   - Her biri 1200+ kelime, H2/H3 hiyerarşisi, FAQ schema, internal link
2. **FAQ ana sayfaya da ekle** (ücretsiz trafik kazancı)
3. **Image SEO**: dosya adları `saç-sakal-kesim-izmir.jpg` gibi descriptive
4. **H1 optimizasyonu**: her sayfada tek H1, coğrafi + hizmet anahtar kelimesi içersin
5. **Internal linking**: servis detay sayfalarından ilgili blog yazılarına

### C. Dönüşüm artırıcılar
1. **Akıllı randevu widget**:
   - 3 adım: hizmet seç → tarih/saat → kişi bilgi
   - Sonunda otomatik WhatsApp mesajı (`?text=Salı 14:00 damat paketi için randevu`)
2. **Hizmet detay sayfaları** (`/hizmetler/[slug]`):
   - Şu an `SERVICES[].slug` var ama kullanılmıyor
   - Her hizmet kendi sayfasında: uzun anlatım, süreç, sonuç fotoğrafları, SSS, ilgili blog
3. **Hediye çeki satın al modülü** (Shopier/Iyzico → PDF teslim)
4. **Referral programı** (kod paylaşım + indirim)
5. **Loyalty stamp card** (10 kesim sonrası ücretsiz)
6. **Newsletter endpoint'i bağlı değil** — VipNewsletter formu Resend/Mailchimp'e post etmeli
7. **Newsletter indirimi** — ilk randevu için %10 off kodu mail'de gönder

### D. İleri performans
1. **Framer Motion 163 kB** → hafif alternatifler (bazı yerlerde vanilla CSS anim yeterli)
2. **ISR** — blog ve fiyat sayfaları için revalidate ayarı
3. **Edge functions** — WhatsApp deep-link oluşturan endpoint için
4. **Preload kritik fontlar** — Playfair Display hero başlığı için

### E. A11y & polish
1. **Manuel screen reader testi** (VoiceOver/NVDA) — özellikle flip card back yüzü
2. **Focus trap** — mobil menü açıkken Tab içeride kalmalı
3. **Contrast audit** — `foreground-subtle` light modda AA geçiyor mu?
4. **Light mode görsel polish** — bu oturumda otomatik dönüşüm yapıldı, manuel tasarım rötuşu henüz yapılmadı
5. **Video hero** (gelecek) — craftsman.jpg yerine 10-15 sn loop video, ağırlık sorunu için `poster={craftsman.jpg}` ile progressive

### F. Analytics sonrası optimizasyon (ilk 30 günde)
- Hotjar/Clarity heatmap aç
- En çok tıklanan CTA ve sayfaları belirle
- Bounce rate yüksek sayfaları optimize et
- A/B test: WhatsApp tooltip mesajı, hero başlığı varyasyonları

---

## 📦 Durum özeti

| Kategori | Durum |
|---|---|
| Dark/Light mode | ✅ Çalışıyor, görsel polish bekliyor |
| SEO altyapısı | ✅ Tam, verification ve gerçek rating bekliyor |
| 20 sayfa (TR+EN) | ✅ Build success |
| Team flip card | ✅ 6'lı tek sıra, 3D flip |
| Pricing | ✅ Nail kaldırıldı |
| Reviews | ✅ 6 kart + schema + dedicated sayfa |
| WhatsApp tooltip | ✅ 5sn otomatik |
| Sticky mobil CTA | ✅ Alt sabit bar |
| CustomCursor | ✅ Pointer-only |
| Preloader | ✅ Oturum başına tek kez |
| Image optimization | ✅ 14 dosya next/image |
| Analytics | ✅ Vercel Analytics + Speed Insights |
| FAQ + schema | ✅ Fiyat sayfalarında |
| Gerçek yorumlar | ⏳ Kullanıcı kararı |
| GSC doğrulama | ⏳ Kullanıcı işlemi |
| Domain + GA4 | ⏳ Kullanıcı işlemi |

---

## 🎯 Önerilen sonraki 3 adım

1. **Canlı ortam** (senin yapman gereken): Vercel'de gerçek domain bağla + GSC verification + GA4 property. Bu veri akışı için kritik.
2. **Gerçek Google yorumlarını getir**: elle kopyala en güzel 10-15 tanesi, `ReviewsSection`'a ve `/yorumlar` sayfasına koy.
3. **İlk blog yazısını yayınla**: "İzmir'de En İyi Erkek Kuaförü Nasıl Seçilir?" — SEO'da rakipsiz sıralamanın motoru burada.
