import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

// Vercel Cron handler - runs every hour to check price alerts
// Configure in vercel.json: { "crons": [{ "path": "/api/v1/cron/check-alerts", "schedule": "0 * * * *" }] }

const CRON_SECRET = process.env.CRON_SECRET

export async function GET(request: NextRequest) {
  // Verify cron secret to prevent unauthorized access
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Use service role key for admin access
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Fetch all active alerts with product info
    const { data: alerts, error: alertsError } = await supabase
      .from('price_alerts')
      .select(`
        id,
        user_id,
        product_id,
        target_price,
        last_notified_at,
        products (
          name,
          current_price
        ),
        users:user_id (
          email
        )
      `)
      .eq('is_active', true)

    if (alertsError) {
      console.error('Failed to fetch alerts:', alertsError)
      return NextResponse.json({ error: 'Failed to fetch alerts' }, { status: 500 })
    }

    const triggeredAlerts: Array<{ alertId: string; email: string; productName: string }> = []
    const now = new Date()

    for (const alert of alerts || []) {
      // Handle potential array from join
      const productData = alert.products
      const product = Array.isArray(productData) ? productData[0] : productData
      const userData = alert.users
      const user = Array.isArray(userData) ? userData[0] : userData

      if (!product || !user) continue

      // Check if current price is at or below target
      if (product.current_price <= alert.target_price) {
        // Check if we've already notified in the last 24 hours
        const lastNotified = alert.last_notified_at ? new Date(alert.last_notified_at) : null
        const hoursSinceNotified = lastNotified 
          ? (now.getTime() - lastNotified.getTime()) / (1000 * 60 * 60)
          : Infinity

        if (hoursSinceNotified >= 24) {
          // Send email notification (Resend integration)
          await sendPriceAlertEmail({
            email: user.email,
            productName: product.name,
            currentPrice: product.current_price,
            targetPrice: alert.target_price,
          })

          // Update last_notified_at
          await supabase
            .from('price_alerts')
            .update({ last_notified_at: now.toISOString() })
            .eq('id', alert.id)

          triggeredAlerts.push({
            alertId: alert.id,
            email: user.email,
            productName: product.name,
          })
        }
      }
    }

    return NextResponse.json({
      success: true,
      checked: alerts?.length || 0,
      triggered: triggeredAlerts.length,
      alerts: triggeredAlerts,
      timestamp: now.toISOString(),
    })

  } catch (error) {
    console.error('Cron job error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// Email sending function (Resend integration)
async function sendPriceAlertEmail(params: {
  email: string
  productName: string
  currentPrice: number
  targetPrice: number
}) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY

  if (!RESEND_API_KEY) {
    console.log('RESEND_API_KEY not configured, skipping email')
    return
  }

  const { email, productName, currentPrice, targetPrice } = params

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Prisguiden.dk <alerts@prisguiden.dk>',
        to: email,
        subject: `🔔 Prisfald på ${productName}!`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1">
            </head>
            <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0f172a; color: #ffffff; padding: 40px 20px;">
              <div style="max-width: 500px; margin: 0 auto; background: linear-gradient(135deg, rgba(30, 41, 59, 0.9), rgba(15, 23, 42, 0.95)); border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 32px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);">
                <div style="text-align: center; margin-bottom: 24px;">
                  <span style="font-size: 48px;">🔔</span>
                </div>
                <h1 style="color: #f97316; font-size: 24px; text-align: center; margin-bottom: 16px;">
                  Prisalarm aktiveret!
                </h1>
                <p style="text-align: center; color: #94a3b8; font-size: 16px; margin-bottom: 32px;">
                  Godt nyt! Et produkt du følger er faldet til din ønskede pris.
                </p>
                
                <div style="background: rgba(255,255,255,0.05); border-radius: 12px; padding: 20px; margin-bottom: 24px;">
                  <h2 style="color: #ffffff; font-size: 18px; margin: 0 0 12px 0;">${productName}</h2>
                  <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                      <span style="color: #64748b; font-size: 14px;">Nuværende pris</span>
                      <p style="color: #22c55e; font-size: 24px; font-weight: bold; margin: 4px 0 0 0;">${currentPrice.toLocaleString('da-DK')} kr.</p>
                    </div>
                    <div style="text-align: right;">
                      <span style="color: #64748b; font-size: 14px;">Din målpris</span>
                      <p style="color: #f97316; font-size: 18px; font-weight: bold; margin: 4px 0 0 0;">${targetPrice.toLocaleString('da-DK')} kr.</p>
                    </div>
                  </div>
                </div>
                
                <a href="https://prisguiden.dk" style="display: block; background: linear-gradient(135deg, #f97316, #ea580c); color: white; text-decoration: none; text-align: center; padding: 16px 32px; border-radius: 12px; font-weight: bold; font-size: 16px;">
                  Se produktet →
                </a>
                
                <p style="text-align: center; color: #64748b; font-size: 12px; margin-top: 32px;">
                  Du modtager denne email fordi du har sat en prisalarm på Prisguiden.dk
                </p>
              </div>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      console.error('Failed to send email:', await response.text())
    }
  } catch (error) {
    console.error('Email sending error:', error)
  }
}
