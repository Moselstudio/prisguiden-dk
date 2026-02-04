import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/api/', '/profil/'],
      },
    ],
    sitemap: 'https://prisguiden.dk/sitemap.xml',
  }
}
