import type { Metadata } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import Preloader from '@/components/ui/Preloader'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Patron Erkek Kuaforu | Izmir Bornova",
  description: "Bornova’nın kalbinde, kendine değer veren erkeklerin lüks durağı. Eski okul berberlik ve modern medikal bakım.",
  icons: {
    icon: '/images/emblem.png',
    shortcut: '/images/emblem.png',
    apple: '/images/emblem.png',
  }
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  "name": "Patron Erkek Kuaförü",
  "description": "Premium gentleman's lounge in Izmir offering luxury haircuts, beard styling, and medical skin care.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Kazımdirik Mahallesi, 296/2. Sk 2d",
    "addressLocality": "Izmir",
    "addressRegion": "Bornova",
    "postalCode": "35100",
    "addressCountry": "TR"
  },
  "url": "https://patronerkekkuaforu.com",
  "telephone": "+905535737992"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-brand-obsidian text-white overflow-x-hidden selection:bg-brand-gold selection:text-brand-black">
        <Preloader />
        <CustomCursor />
        <FloatingWhatsApp />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
