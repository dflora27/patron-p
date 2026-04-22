import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Patron Erkek Kuaförü',
    short_name: 'Patron',
    description: "Bornova'nın lüks erkek kuaförü — eski okul berberlik, VIP bakım.",
    start_url: '/',
    display: 'standalone',
    background_color: '#090909',
    theme_color: '#090909',
    lang: 'tr',
    orientation: 'portrait-primary',
    icons: [
      { src: '/images/emblem.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/emblem.png', sizes: '512x512', type: 'image/png' },
    ],
  }
}
