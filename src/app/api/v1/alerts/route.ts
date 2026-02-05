import { NextRequest, NextResponse } from 'next/server'
import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { cookies } from 'next/headers'

// Demo alerts for fallback
const DEMO_ALERTS = [
  { id: '1', product_id: 'prod-1', product_name: 'Sony WH-1000XM5', current_price: 2499, target_price: 2200, is_active: true },
  { id: '2', product_id: 'prod-2', product_name: 'LEGO Star Wars Millennium Falcon', current_price: 5800, target_price: 5500, is_active: true },
  { id: '3', product_id: 'prod-3', product_name: 'JBL Live 660NC', current_price: 899, target_price: 750, is_active: true },
]

// Create Supabase server client
async function createClient() {
  const cookieStore = await cookies()
  
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.set({ name, value: '', ...options })
        },
      },
    }
  )
}

// GET: List user's price alerts
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Get current user
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      // Return demo data for non-authenticated users
      return NextResponse.json({
        alerts: DEMO_ALERTS,
        is_demo: true
      })
    }
    
    // Fetch user's alerts from database
    const { data: alerts, error } = await supabase
      .from('price_alerts')
      .select(`
        id,
        product_id,
        target_price,
        is_active,
        created_at,
        last_notified_at,
        products (
          name,
          current_price,
          image_url
        )
      `)
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })
    
    if (error) {
      console.error('Error fetching alerts:', error)
      return NextResponse.json({ alerts: DEMO_ALERTS, is_demo: true })
    }
    
    return NextResponse.json({
      alerts: alerts || [],
      is_demo: false
    })
  } catch (error) {
    console.error('Error in GET /api/v1/alerts:', error)
    return NextResponse.json({ alerts: DEMO_ALERTS, is_demo: true })
  }
}

// POST: Create a new price alert
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required', code: 'AUTH_REQUIRED' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    const { product_id, target_price } = body
    
    // Validate input
    if (!product_id || !target_price) {
      return NextResponse.json(
        { error: 'product_id and target_price are required' },
        { status: 400 }
      )
    }
    
    if (typeof target_price !== 'number' || target_price <= 0) {
      return NextResponse.json(
        { error: 'target_price must be a positive number' },
        { status: 400 }
      )
    }
    
    // Check if alert already exists for this product
    const { data: existingAlert } = await supabase
      .from('price_alerts')
      .select('id')
      .eq('user_id', user.id)
      .eq('product_id', product_id)
      .single()
    
    if (existingAlert) {
      // Update existing alert
      const { data, error } = await supabase
        .from('price_alerts')
        .update({ target_price, is_active: true })
        .eq('id', existingAlert.id)
        .select()
        .single()
      
      if (error) throw error
      
      return NextResponse.json({
        success: true,
        alert: data,
        action: 'updated'
      })
    }
    
    // Create new alert
    const { data: newAlert, error } = await supabase
      .from('price_alerts')
      .insert({
        user_id: user.id,
        product_id,
        target_price,
        is_active: true
      })
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({
      success: true,
      alert: newAlert,
      action: 'created'
    }, { status: 201 })
    
  } catch (error) {
    console.error('Error in POST /api/v1/alerts:', error)
    return NextResponse.json(
      { error: 'Failed to create alert' },
      { status: 500 }
    )
  }
}

// DELETE: Remove a price alert
export async function DELETE(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
    
    const alertId = request.nextUrl.searchParams.get('id')
    
    if (!alertId) {
      return NextResponse.json(
        { error: 'Alert ID is required' },
        { status: 400 }
      )
    }
    
    // Delete alert (only if owned by user)
    const { error } = await supabase
      .from('price_alerts')
      .delete()
      .eq('id', alertId)
      .eq('user_id', user.id)
    
    if (error) throw error
    
    return NextResponse.json({ success: true, deleted: alertId })
    
  } catch (error) {
    console.error('Error in DELETE /api/v1/alerts:', error)
    return NextResponse.json(
      { error: 'Failed to delete alert' },
      { status: 500 }
    )
  }
}

// PATCH: Update alert (toggle active, change target)
export async function PATCH(request: NextRequest) {
  try {
    const supabase = await createClient()
    
    // Check authentication
    const { data: { user }, error: authError } = await supabase.auth.getUser()
    
    if (authError || !user) {
      return NextResponse.json(
        { error: 'Authentication required' },
        { status: 401 }
      )
    }
    
    const body = await request.json()
    const { alert_id, target_price, is_active } = body
    
    if (!alert_id) {
      return NextResponse.json(
        { error: 'alert_id is required' },
        { status: 400 }
      )
    }
    
    const updates: Record<string, unknown> = {}
    if (target_price !== undefined) updates.target_price = target_price
    if (is_active !== undefined) updates.is_active = is_active
    
    const { data, error } = await supabase
      .from('price_alerts')
      .update(updates)
      .eq('id', alert_id)
      .eq('user_id', user.id)
      .select()
      .single()
    
    if (error) throw error
    
    return NextResponse.json({ success: true, alert: data })
    
  } catch (error) {
    console.error('Error in PATCH /api/v1/alerts:', error)
    return NextResponse.json(
      { error: 'Failed to update alert' },
      { status: 500 }
    )
  }
}
