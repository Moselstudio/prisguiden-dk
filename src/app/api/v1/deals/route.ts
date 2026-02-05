import { NextRequest, NextResponse } from 'next/server'

// Demo deals data
const DEMO_DEALS = [
  { id: '1', name: 'Sony WH-1000XM5', drop: 500, price: 2499, originalPrice: 2999 },
  { id: '2', name: 'Samsung Galaxy S23', drop: 800, price: 5999, originalPrice: 6799 },
]

export async function GET() {
  // In production: Query 'prices' table for significant drops in last 24h
  // SELECT * FROM prices WHERE price < (previous_price * 0.9) ...
  
  return NextResponse.json({
    deals: DEMO_DEALS,
    meta: {
      count: DEMO_DEALS.length,
      generated_at: new Date().toISOString()
    }
  })
}
