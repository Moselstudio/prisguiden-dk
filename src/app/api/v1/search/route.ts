import { NextRequest, NextResponse } from 'next/server'

// Demo data for now - would fetch from Supabase in production
const DEMO_PRODUCTS = [
  { id: '1', name: 'Apple iPhone 15 Pro 128GB', slug: 'apple-iphone-15-pro-128gb', brand: 'Apple', lowest_price: 8999, image: null },
  { id: '2', name: 'Sony WH-1000XM5 Wireless Headphones', slug: 'sony-wh-1000xm5', brand: 'Sony', lowest_price: 2499, image: null },
  { id: '3', name: 'Samsung Galaxy S24 Ultra', slug: 'samsung-galaxy-s24-ultra', brand: 'Samsung', lowest_price: 9999, image: null },
]

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')

  if (!query) {
    return NextResponse.json({ results: [] })
  }

  // Simple fuzzy search simulation
  const lowerQuery = query.toLowerCase()
  const results = DEMO_PRODUCTS.filter(p => 
    p.name.toLowerCase().includes(lowerQuery) || 
    p.brand.toLowerCase().includes(lowerQuery)
  )

  return NextResponse.json({
    results: results.map(p => ({
      ...p,
      url: `/produkt/${p.slug}`
    }))
  })
}
