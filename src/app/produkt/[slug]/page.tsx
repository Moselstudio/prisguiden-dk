import Link from 'next/link'

// Demo data
const product = {
  id: '1',
  name: 'Apple iPhone 15 Pro Max 256GB',
  slug: 'apple-iphone-15-pro-max-256gb',
  brand: 'Apple',
  description: 'iPhone 15 Pro Max med Dynamic Island, A17 Pro chip, titaniumdesign og det kraftigste kamerasystem på iPhone nogensinde. 256GB lagerplads.',
  specifications: {
    'Skærm': '6.7" Super Retina XDR OLED',
    'Processor': 'Apple A17 Pro',
    'RAM': '8GB',
    'Lagerplads': '256GB',
    'Kamera': '48MP + 12MP + 12MP',
    'Batteri': '4441mAh',
    'Operativ system': 'iOS 17',
  },
  lowest_price: 10999,
  highest_price: 12499,
}

const prices = [
  { retailer: 'Elgiganten', price: 10999, shipping: 0, inStock: true, url: '#' },
  { retailer: 'Power', price: 11199, shipping: 0, inStock: true, url: '#' },
  { retailer: 'Proshop', price: 11299, shipping: 49, inStock: true, url: '#' },
  { retailer: 'Computersalg', price: 11399, shipping: 0, inStock: true, url: '#' },
  { retailer: 'Dustin', price: 11499, shipping: 0, inStock: false, url: '#' },
  { retailer: 'Komplett', price: 11599, shipping: 29, inStock: true, url: '#' },
]

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <div className="bg-[var(--muted)] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[var(--border)]">
        <div className="container-prisguiden py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">Forside</Link>
            <span className="text-[var(--muted-foreground)]">/</span>
            <Link href="/kategori/elektronik" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">Elektronik</Link>
            <span className="text-[var(--muted-foreground)]">/</span>
            <Link href="/kategori/mobiler" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">Mobiler</Link>
            <span className="text-[var(--muted-foreground)]">/</span>
            <span className="font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-prisguiden py-8">
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Product Image */}
          <div className="bg-white rounded-lg p-8">
            <div className="aspect-square flex items-center justify-center bg-[var(--muted)] rounded-lg">
              <span className="text-9xl">📱</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <p className="text-sm text-[var(--muted-foreground)] font-medium uppercase mb-2">{product.brand}</p>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-[var(--muted-foreground)]">{product.description}</p>
            </div>

            {/* Price Summary */}
            <div className="bg-white rounded-lg p-6">
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-4xl font-bold text-[var(--primary)]">
                  {product.lowest_price.toLocaleString('da-DK')} kr.
                </span>
                <span className="text-[var(--muted-foreground)] line-through">
                  {product.highest_price.toLocaleString('da-DK')} kr.
                </span>
                <span className="bg-[var(--primary)] text-white text-sm font-bold px-2 py-1 rounded">
                  -{Math.round((1 - product.lowest_price / product.highest_price) * 100)}%
                </span>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mb-4">
                Laveste pris fra {prices.length} butikker
              </p>
              <div className="flex gap-3">
                <a href={prices[0].url} className="btn btn-primary flex-1">
                  Gå til butik
                </a>
                <button className="btn btn-outline">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Sæt prisalarm
                </button>
                <button className="btn btn-secondary">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Price History Chart Placeholder */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold mb-4">Prishistorik</h3>
              <div className="price-chart flex items-center justify-center h-48">
                <p className="text-[var(--muted-foreground)]">📈 Prishistorik graf kommer her</p>
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mt-4">
                Laveste pris de sidste 30 dage: <strong>10.799 kr.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Price Comparison Table */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Sammenlign priser fra {prices.length} butikker</h2>
          <div className="space-y-0">
            {prices.map((price, index) => (
              <div key={price.retailer} className={`retailer-row ${index === 0 ? 'bg-green-50 border-l-4 border-[var(--primary)]' : ''}`}>
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-24 h-12 bg-[var(--muted)] rounded flex items-center justify-center text-sm font-medium">
                    {price.retailer}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{price.retailer}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {price.inStock ? (
                        <span className="text-green-600">✓ På lager</span>
                      ) : (
                        <span className="text-red-500">Ikke på lager</span>
                      )}
                      {price.shipping > 0 && ` • Fragt: ${price.shipping} kr.`}
                      {price.shipping === 0 && ' • Gratis fragt'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xl font-bold text-[var(--primary)]">{price.price.toLocaleString('da-DK')} kr.</p>
                    {price.shipping > 0 && (
                      <p className="text-xs text-[var(--muted-foreground)]">
                        Total: {(price.price + price.shipping).toLocaleString('da-DK')} kr.
                      </p>
                    )}
                  </div>
                  <a href={price.url} className="btn btn-primary">
                    Gå til butik
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Tekniske specifikationer</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-3 border-b border-[var(--border)]">
                <span className="text-[var(--muted-foreground)]">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* User Reviews Placeholder */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-6">Brugeranmeldelser</h2>
          <div className="flex items-center gap-6 mb-6">
            <div className="text-center">
              <p className="text-5xl font-bold text-[var(--primary)]">4.7</p>
              <div className="flex text-yellow-400 text-xl">★★★★★</div>
              <p className="text-sm text-[var(--muted-foreground)]">Baseret på 234 anmeldelser</p>
            </div>
          </div>
          <button className="btn btn-outline">
            Skriv en anmeldelse
          </button>
        </div>
      </div>
    </div>
  )
}
