import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/hakkimizda', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/ekibimiz', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/hizmetler', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/fiyatlar', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/journal', priority: 0.7, changeFrequency: 'weekly' as const },
]

const enRoutes = [
  { path: '/en', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/en/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/team', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/services', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/en/journal', priority: 0.6, changeFrequency: 'weekly' as const },
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
