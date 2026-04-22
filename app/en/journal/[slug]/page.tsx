"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const articles = {
  "kusursuz-tirasin-anatomisi": {
    category: "Grooming",
    date: "12 Mar 2026",
    img: "/images/blog-hot-towel.jpg",
    tr: {
      title: "Kusursuz Bir Tıraşın Anatomisi: Medikal Sıcak Havlu Ritüeli",
      content: "Tıraş olmak, bir erkeğin kendine ayırdığı en özel anlardan biridir. Modern çağda hızla geçiştirilen bu ritüeli, Patron farkıyla bir meditasyona dönüştürüyoruz. Sıcak havlu, özel uçucu yağlar ve klasik ustura tekniği ile yüzdeki yorgunluğu silip atıyoruz."
    },
    en: {
      title: "Anatomy of a Perfect Shave: The Medical Hot Towel Ritual",
      content: "Shaving is one of the most private moments a man dedicates to himself. We transform this rapidly skipped ritual of the modern age into a meditation with the Patron touch. With hot towels, special essential oils, and classic straight razor techniques, we wipe away the fatigue on your face."
    }
  },
  "neden-mizutani": {
    category: "Ekipman",
    date: "05 Mar 2026",
    img: "/images/blog-mizutani.jpg",
    tr: {
      title: "Neden Mizutani? Dünyanın En İyi Makaslarıyla Tanışın",
      content: "Bir sanatçıyı kullandığı fırça, bir berberi ise kullandığı makas belirler. Japon el işçiliğinin şaheseri Mizutani makaslar, sadece saçı kesmekle kalmaz, onun formunu şekillendirir. Bu yazıda ekipmanlarımıza neden bu kadar takıntılı olduğumuzu anlatıyoruz."
    },
    en: {
      title: "Why Mizutani? Meet the Best Scissors in the World",
      content: "An artist is defined by his brush, a barber by his scissors. Mizutani scissors, Masterpieces of Japanese craftsmanship, don't merely cut hair—they shape its entire form. In this article, we explain why we are so obsessed with our equipment."
    }
  }
};

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const pathname = usePathname() || "";
  const isEn = pathname.startsWith('/en');
  const article = articles[params.slug as keyof typeof articles];

  if (!article) return <div className="py-40 text-center text-foreground h-screen">{isEn ? "Article not found." : "Makale bulunamadı."}</div>;

  const content = isEn ? article.en : article.tr;

  return (
    <article className="min-h-screen bg-surface-muted pt-40 pb-24 px-6 md:px-12 relative">
      <div className="absolute top-0 left-0 w-full h-[50vh] bg-brand-gold/5 blur-[100px] pointer-events-none z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Link href={`${isEn ? '/en' : ''}/journal`} className="text-brand-gold uppercase tracking-widest text-xs mb-10 inline-block border-b border-brand-gold/40 hover:border-brand-gold hover:text-foreground transition-all pb-1">
          {isEn ? "← Back to Articles" : "← Yazılara Dön"}
        </Link>
        
        <div className="flex gap-4 font-sans text-[10px] tracking-[0.2em] uppercase text-brand-gold mb-8">
          <span>{isEn && article.category === "Ekipman" ? "Equipment" : article.category}</span>
          <span className="text-gray-700">|</span>
          <span className="text-foreground-subtle">{article.date}</span>
        </div>
        
        <h1 className="font-serif text-4xl md:text-5xl lg:text-7xl text-foreground mb-16 leading-[1.1]">{content.title}</h1>
        
        <div className="w-full aspect-video rounded-3xl overflow-hidden mb-16 relative glass border border-hairline/20 p-2 shadow-2xl">
           <div className="w-full h-full rounded-2xl overflow-hidden">
             <img src={article.img} alt={content.title} className="w-full h-full object-cover grayscale-[0.2]" />
           </div>
        </div>
        
        <div className="prose prose-invert prose-lg max-w-none font-sans font-light leading-relaxed text-foreground-subtle">
          <p className="text-2xl md:text-3xl text-foreground font-serif italic mb-12 border-l-2 border-brand-gold pl-8 py-4 leading-normal bg-gradient-to-r from-brand-gold/5 to-transparent">
            {content.content}
          </p>
          <p className="mb-6">
            {isEn ? "Behind every service we offer at Patron lies a deep-rooted philosophy. We believe modern men's grooming is not just a necessity but an experience that commands respect." : "Patron'da sunduğumuz her hizmetin arkasında köklü bir felsefe yatar. Modern erkek bakımının sadece bir ihtiyaç değil, aynı zamanda saygı duyulması gereken bir deneyim olduğuna inanıyoruz."}
          </p>
          <p>
            {isEn ? "More content will be on this page very soon. We will continue to share all the details about luxury men's grooming culture with you through The Journal." : "Daha fazlası çok yakında bu sayfada olacak. Lüks erkek bakımı kültürüne dair tüm detayları sizinle The Journal üzerinden paylaşmaya devam edeceğiz."}
          </p>
        </div>
      </div>
    </article>
  );
}
