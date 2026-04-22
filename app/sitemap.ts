import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'
import { SERVICES } from '@/lib/content/services'

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/randevu', priority: 1.0, changeFrequency: 'monthly' as const },
  { path: '/hakkimizda', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/ekibimiz', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/hizmetler', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/fiyatlar', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/yorumlar', priority: 0.8, changeFrequency: 'weekly' as const },
  { path: '/journal', priority: 0.7, changeFrequency: 'weekly' as const },
  ...SERVICES.map((s) => ({
    path: `/hizmetler/${s.slug}`,
    priority: 0.85,
    changeFrequency: 'monthly' as const,
  })),
]

const enRoutes = [
  { path: '/en', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/en/book', priority: 0.95, changeFrequency: 'monthly' as const },
  { path: '/en/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/team', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/services', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/reviews', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/en/journal', priority: 0.6, changeFrequency: 'weekly' as const },
  ...SERVICES.map((s) => ({
    path: `/en/services/${s.enSlug}`,
    priority: 0.75,
    changeFrequency: 'monthly' as const,
  })),
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [...routes, ...enRoutes].map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
    alternates: {
      languages: {
        'tr-TR': `${SITE_URL}${r.path.startsWith('/en') ? r.path.replace(/^\/en/, '') || '/' : r.path}`,
        'en': `${SITE_URL}${r.path.startsWith('/en') ? r.path : `/en${r.path === '/' ? '' : r.path}`}`,
      },
    },
  }))
}
