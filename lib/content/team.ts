export type TeamMember = {
  slug: string;
  name: string;
  img: string;
  roleTr: string;
  roleEn: string;
  experienceTr: string;
  experienceEn: string;
  specialtyTr: string;
  specialtyEn: string;
  bioTr: string;
  bioEn: string;
  instagram?: string;
};

export const TEAM: TeamMember[] = [
  {
    slug: "patron",
    name: "Patron",
    img: "/images/calisan-1.jpg",
    roleTr: "Master Barber & Kurucu",
    roleEn: "Master Barber & Founder",
    experienceTr: "18+ yıl",
    experienceEn: "18+ years",
    specialtyTr: "Yüz analizine göre imza kesim",
    specialtyEn: "Signature cuts tailored to face structure",
    bioTr:
      "Patron, ismini dahi vermekten çekinmeyen bir ustalıkla, marka kimliğini kendi ellerinde kurdu. Klasik erkek berberliği ile modern tasarımı harmanlayan imzası, her misafirinde kendini gösterir.",
    bioEn:
      "Patron built the brand with hands that proudly carry its name. His signature blends classical men's barbering with modern design and shows in every guest's cut.",
  },
  {
    slug: "eren",
    name: "Eren",
    img: "/images/calisan-2.jpg",
    roleTr: "Fade & Sakal Mimarı",
    roleEn: "Fade & Beard Architect",
    experienceTr: "9 yıl",
    experienceEn: "9 years",
    specialtyTr: "Skin fade, beard sculpt",
    specialtyEn: "Skin fade, beard sculpting",
    bioTr:
      "Sınırları belirsiz geçişler ve yüz hatlarına göre konturlanmış sakallarla tanınıyor. Jilet işçiliği detaycılığın adıdır.",
    bioEn:
      "Known for invisible fade transitions and beards contoured to facial geometry. His razor work is detail made visible.",
  },
  {
    slug: "ali",
    name: "Ali",
    img: "/images/calisan-3.jpg",
    roleTr: "Geleneksel Makas Ustası",
    roleEn: "Traditional Shear Master",
    experienceTr: "12 yıl",
    experienceEn: "12 years",
    specialtyTr: "Mizutani makas, klasik scissor-over-comb",
    specialtyEn: "Mizutani shears, scissor-over-comb",
    bioTr:
      "Tamamen makas ile kurulan hacim ve doku, onun ruhsal dokunuşundan geçer. Hareketli saçlar için referans noktası.",
    bioEn:
      "Volume and texture built purely with shears flow through his hands. The reference point for fluid, moving hair.",
  },
  {
    slug: "burak",
    name: "Burak",
    img: "/images/calisan-4.jpg",
    roleTr: "Renklendirme & Şekillendirme",
    roleEn: "Colour & Styling",
    experienceTr: "7 yıl",
    experienceEn: "7 years",
    specialtyTr: "Pigmentasyon, keratin, erkek renk",
    specialtyEn: "Pigmentation, keratin, men's colour",
    bioTr:
      "Saçın dokusunu bozmadan renk ve form kazandıran yaklaşımıyla fark yaratır. Davines ile çalışır.",
    bioEn:
      "Restores colour and form without disturbing the hair's natural texture. Works exclusively with Davines.",
  },
  {
    slug: "yigit",
    name: "Yiğit",
    img: "/images/calisan-5.jpg",
    roleTr: "VIP Bakım Uzmanı",
    roleEn: "VIP Grooming Specialist",
    experienceTr: "8 yıl",
    experienceEn: "8 years",
    specialtyTr: "Damat paketi, ritüel tıraş",
    specialtyEn: "Groom package, ritual shave",
    bioTr:
      "Damat paketi ve özel etkinlik hazırlıklarında koreografisi bellidir. Zamanı yavaşlatan bir misafirperverlik sunar.",
    bioEn:
      "Choreographs groom packages and special-occasion grooming. Offers hospitality that slows down the clock.",
  },
  {
    slug: "kaan",
    name: "Kaan",
    img: "/images/calisan-6.jpg",
    roleTr: "Sakal & Cilt Bakımı",
    roleEn: "Beard & Skin Care",
    experienceTr: "6 yıl",
    experienceEn: "6 years",
    specialtyTr: "Ozon buhar, medikal cilt bakımı",
    specialtyEn: "Ozone steam, medical skin care",
    bioTr:
      "Cildin dilini bilen, ozon buhar ve derin gözenek temizliğiyle cildinizi yeniden tanıtıyor.",
    bioEn:
      "Speaks the language of skin. Re-introduces you to your complexion with ozone steam and deep-pore rituals.",
  },
];
