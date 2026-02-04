import { NextRequest, NextResponse } from 'next/server'

interface PartnerAdsProduct {
  forhandler: string
  kategorinavn: string
  produktnavn: string
  produktid: string
  ean: string
  beskrivelse: string
  nypris: string
  glpris: string
  fragtomk: string
  lagerantal: string
  leveringstid: string
  billedurl: string
  vareurl: string
}

interface ParsedProduct {
  retailer: string
  category: string
  name: string
  externalId: string
  ean: string | null
  description: string
  price: number
  originalPrice: number | null
  shippingCost: number
  inStock: boolean
  deliveryTime: string | null
  imageUrl: string
  productUrl: string
}

// Parse Partner-Ads XML feed
function parsePartnerAdsFeed(xmlText: string): ParsedProduct[] {
  const products: ParsedProduct[] = []
  
  // Simple XML parsing - extract products using regex
  const productMatches = xmlText.match(/<produkt>[\s\S]*?<\/produkt>/g) || []
  
  for (const productXml of productMatches) {
    const getValue = (tag: string): string => {
      const match = productXml.match(new RegExp(`<${tag}>([\\s\\S]*?)</${tag}>`))
      return match ? match[1].trim() : ''
    }
    
    const priceStr = getValue('nypris')
    const originalPriceStr = getValue('glpris')
    const shippingStr = getValue('fragtomk')
    const stockStatus = getValue('lagerantal').toLowerCase()
    
    products.push({
      retailer: getValue('forhandler'),
      category: getValue('kategorinavn').replace(/&gt;/g, '>').replace(/&amp;/g, '&'),
      name: getValue('produktnavn'),
      externalId: getValue('produktid'),
      ean: getValue('ean') || null,
      description: getValue('beskrivelse'),
      price: parseFloat(priceStr) || 0,
      originalPrice: originalPriceStr ? parseFloat(originalPriceStr) : null,
      shippingCost: parseFloat(shippingStr) || 0,
      inStock: !stockStatus.includes('out of stock') && stockStatus !== '0',
      deliveryTime: getValue('leveringstid') || null,
      imageUrl: getValue('billedurl'),
      productUrl: getValue('vareurl').replace(/&amp;/g, '&'),
    })
  }
  
  return products
}

// Product name normalization for matching
function normalizeProductName(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^\w\sæøå]/g, ' ')  // Remove special chars except Danish letters
    .replace(/\s+/g, ' ')
    .trim()
}

// Calculate similarity score between two strings (0-100)
function calculateSimilarity(str1: string, str2: string): number {
  const s1 = normalizeProductName(str1)
  const s2 = normalizeProductName(str2)
  
  if (s1 === s2) return 100
  
  // Jaccard similarity on words
  const words1 = new Set(s1.split(' ').filter(w => w.length > 2))
  const words2 = new Set(s2.split(' ').filter(w => w.length > 2))
  
  const intersection = new Set([...words1].filter(x => words2.has(x)))
  const union = new Set([...words1, ...words2])
  
  if (union.size === 0) return 0
  
  return Math.round((intersection.size / union.size) * 100)
}

// POST: Fetch and parse a Partner-Ads feed
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { feedUrl } = body
    
    if (!feedUrl) {
      return NextResponse.json({ error: 'Feed URL is required' }, { status: 400 })
    }
    
    // Fetch the XML feed
    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Prisguiden.dk Feed Parser',
      },
    })
    
    if (!response.ok) {
      return NextResponse.json(
        { error: `Failed to fetch feed: ${response.status}` },
        { status: 500 }
      )
    }
    
    const xmlText = await response.text()
    const products = parsePartnerAdsFeed(xmlText)
    
    return NextResponse.json({
      success: true,
      count: products.length,
      products: products.slice(0, 100), // Return first 100 for preview
      sample: products.slice(0, 5), // Small sample for UI preview
    })
    
  } catch (error) {
    console.error('Feed parsing error:', error)
    return NextResponse.json(
      { error: 'Failed to parse feed' },
      { status: 500 }
    )
  }
}

// GET: Get matching suggestions for a product
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const productName = searchParams.get('name')
  const ean = searchParams.get('ean')
  
  if (!productName && !ean) {
    return NextResponse.json({ error: 'Product name or EAN required' }, { status: 400 })
  }
  
  // In production, this would query Supabase for existing products
  // and return matches sorted by similarity score
  
  // Demo response
  const demoMatches = [
    { id: '1', name: 'Sony WH-1000XM5 Wireless Headphones', score: 95, ean: '4548736132606' },
    { id: '2', name: 'Apple iPhone 15 Pro Max 256GB', score: 92, ean: '0194253939087' },
  ]
  
  return NextResponse.json({
    success: true,
    matches: demoMatches,
  })
}
