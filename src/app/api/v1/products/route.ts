import { NextRequest, NextResponse } from 'next/server'

// Demo product catalog
const DEMO_CATALOG = [
  { id: '1', name: 'iPhone 15', category: 'Mobiler' },
  { id: '2', name: 'PlayStation 5', category: 'Gaming' },
]

export async function GET(request: NextRequest) {
  const limit = parseInt(request.nextUrl.searchParams.get('limit') || '20')
  const offset = parseInt(request.nextUrl.searchParams.get('offset') || '0')
  
  // In production: Supabase query with pagination
  
  return NextResponse.json({
    products: DEMO_CATALOG,
    pagination: {
      total: 1000, 
      limit,
      offset,
      has_more: true
    }
  })
}

export async function POST(request: NextRequest) {
  // Creating new products via API (for admin/feeds)
  try {
    const body = await request.json()
    // Validate and insert into Supabase
    return NextResponse.json({ success: true, id: 'new-uuid', status: 'created' }, { status: 201 })
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 })
  }
}
