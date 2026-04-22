import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Montserrat } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import CustomCursor from '@/components/ui/CustomCursor'
import Preloader from '@/components/ui/Preloader'
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp'
import ThemeProvider from '@/components/providers/ThemeProvider'
import { SITE_URL, BUSINESS, KEYWORDS_TR } from '@/lib/seo'
import { hairSalonSchema, websiteSchema } from '@/lib/jsonld'

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

const title = "Patron Erkek Kuaförü | Bornova İzmir Lüks Berber & VIP Bakım"
const description =
  "Bornova'nın kalbinde kendine değer veren erkekler için lüks kuaför lounge: eski okul berberlik, sakal tıraşı, cilt bakımı, damat paketi. Mizutani makaslar, Davines ürünleri."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: "%s | Patron Erkek Kuaförü",
  },
  description,
  keywords: KEYWORDS_TR.join(", "),
  authors: [{ name: BUSINESS.name, url: SITE_URL }],
  creator: BUSINESS.name,
  publisher: BUSINESS.name,
  applicationName: BUSINESS.name,
  category: "Beauty & Grooming",
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": "/",
      "en": "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: ["en_US"],
    siteName: BUSINESS.name,
    title,
    description,
    url: SITE_URL,
    images: [
      { url: "/images/og-cover.jpg", width: 1200, height: 630, alt: BUSINESS.name },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: '/images/emblem.png',
    shortcut: '/images/emblem.png',
    apple: '/images/emblem.png',
  },
  verification: {
    // google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
  },
  formatDetection: { telephone: true, address: true, email: false },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8f7f4' },
    { media: '(prefers-color-scheme: dark)', color: '#090909' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'dark light',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="tr"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(hairSalonSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
        />
      </head>
      <body className="font-sans bg-surface text-foreground overflow-x-hidden selection:bg-brand-gold selection:text-white">
        <ThemeProvider>
          <Preloader />
          <CustomCursor />
          <FloatingWhatsApp />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
