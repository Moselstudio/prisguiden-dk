import type { Metadata } from 'next'

// Generate SEO-optimized metadata for category pages
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')
  
  return {
    title: `${categoryName} - Sammenlign Priser | Prisguiden.dk`,
    description: `Find de bedste priser på ${categoryName.toLowerCase()}. Sammenlign priser fra hundredvis af danske butikker og spar penge på dit næste køb.`,
    keywords: `${categoryName.toLowerCase()}, priser, sammenlign, tilbud, danske butikker, beste pris`,
    openGraph: {
      title: `${categoryName} - Sammenlign Priser | Prisguiden.dk`,
      description: `Find de bedste priser på ${categoryName.toLowerCase()}. Sammenlign priser fra hundredvis af danske butikker.`,
      type: 'website',
      locale: 'da_DK',
      siteName: 'Prisguiden.dk',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryName} - Sammenlign Priser`,
      description: `Find de bedste priser på ${categoryName.toLowerCase()}.`,
    },
    alternates: {
      canonical: `https://prisguiden.dk/kategori/${slug}`,
    },
  }
}

// JSON-LD Structured Data for category pages
export function generateCategoryJsonLd(categoryName: string, slug: string, productCount: number) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${categoryName} - Prisguiden.dk`,
    description: `Sammenlign priser på ${categoryName.toLowerCase()} fra danske butikker`,
    url: `https://prisguiden.dk/kategori/${slug}`,
    numberOfItems: productCount,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: productCount,
      itemListOrder: 'https://schema.org/ItemListOrderDescending',
    },
  }
}

// JSON-LD Structured Data for product pages
export function generateProductJsonLd(product: {
  name: string
  slug: string
  description: string
  brand: string
  lowestPrice: number
  highestPrice: number
  imageUrl: string | null
  retailerCount: number
  inStock: boolean
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    image: product.imageUrl || 'https://prisguiden.dk/placeholder.png',
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: product.lowestPrice,
      highPrice: product.highestPrice,
      priceCurrency: 'DKK',
      offerCount: product.retailerCount,
      availability: product.inStock
        ? 'https://schema.org/InStock'
        : 'https://schema.org/OutOfStock',
    },
    url: `https://prisguiden.dk/produkt/${product.slug}`,
  }
}

// JSON-LD for Organization (homepage)
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Prisguiden.dk',
  url: 'https://prisguiden.dk',
  logo: 'https://prisguiden.dk/logo.png',
  description: 'Danmarks bedste prissammenligningssite. Sammenlign priser fra hundredvis af butikker.',
  sameAs: [
    'https://www.facebook.com/prisguiden',
    'https://www.instagram.com/prisguiden',
  ],
}

// JSON-LD for WebSite with SearchAction
export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Prisguiden.dk',
  url: 'https://prisguiden.dk',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://prisguiden.dk/soegning?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}
