import { MetadataRoute } from 'next'

// Generate dynamic sitemap for SEO
// This includes all categories, products, and static pages
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://prisguiden.dk'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/prisfald`,
      lastModified: new Date(),
      changeFrequency: 'hourly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/login`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
  
  // Demo categories - in production, fetch from Supabase
  const categories = [
    'elektronik', 'computere', 'hvidevarer', 'mobiler', 'lyd-tv',
    'gaming', 'sport-fritid', 'hjem-have', 'toej-mode', 'skoenhed'
  ]
  
  const categoryPages: MetadataRoute.Sitemap = categories.map(slug => ({
    url: `${baseUrl}/kategori/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.8,
  }))
  
  // Demo products - in production, fetch from Supabase
  const productSlugs = [
    'apple-iphone-15-pro-max-256gb',
    'sony-wh-1000xm5',
    'samsung-galaxy-s24-ultra',
    'macbook-air-m3',
    'playstation-5',
  ]
  
  const productPages: MetadataRoute.Sitemap = productSlugs.map(slug => ({
    url: `${baseUrl}/produkt/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...categoryPages, ...productPages]
}
