import Link from 'next/link'
import type { Metadata } from 'next'
import ProductActions from '@/components/ProductActions'

// Demo product data
const product = {
  id: '1',
  name: 'Apple iPhone 15 Pro Max 256GB',
  slug: 'apple-iphone-15-pro-max-256gb',
  brand: 'Apple',
  description: 'iPhone 15 Pro Max med Dynamic Island, A17 Pro chip, titanium design, og det bedste kamerasystem nogensinde på en iPhone. Perfekt til power-brugere der ønsker det bedste.',
  category: 'Mobiler',
  image_url: null,
  lowest_price: 10999,
  highest_price: 12999,
  rating: 4.8,
  reviewCount: 342,
  followers: 3421,
  specifications: {
    'Skærm': '6.7" Super Retina XDR OLED',
    'Processor': 'A17 Pro',
    'Batteri': '4441 mAh',
    'Kamera': '48MP + 12MP + 12MP',
    'Lagerplads': '256GB',
    'RAM': '8GB',
    'Operativsystem': 'iOS 17',
    'Vægt': '221g',
  },
}

const retailers = [
  { id: '1', name: 'Elgiganten', logo: '🏪', price: 10999, shipping: 0, delivery: 'Levering i morgen', verified: true, inStock: true },
  { id: '2', name: 'Power', logo: '⚡', price: 11199, shipping: 0, delivery: '2-3 dage', verified: true, inStock: true },
  { id: '3', name: 'Proshop', logo: '🛒', price: 11299, shipping: 49, delivery: '1-2 dage', verified: true, inStock: true },
  { id: '4', name: 'Komplett', logo: '💻', price: 11399, shipping: 0, delivery: '2-4 dage', verified: false, inStock: true },
  { id: '5', name: 'Dustin', logo: '📦', price: 11499, shipping: 49, delivery: '3-5 dage', verified: false, inStock: false },
]

// Price history data for chart
const priceHistory = [
  { date: 'Sep', price: 12999 },
  { date: 'Okt', price: 12499 },
  { date: 'Nov', price: 11999 },
  { date: 'Dec', price: 11499 },
  { date: 'Jan', price: 10999 },
  { date: 'Feb', price: 10999 },
]

const reviews = [
  { id: '1', author: 'Peter K.', rating: 5, date: '2 dage siden', text: 'Fantastisk telefon! Lynhurtig og kameraet er virkelig imponerende.' },
  { id: '2', author: 'Maria S.', rating: 4, date: '1 uge siden', text: 'Rigtig god telefon, men prisen er høj. Batteriet holder hele dagen.' },
  { id: '3', author: 'Anders J.', rating: 5, date: '2 uger siden', text: 'Bedste iPhone jeg har ejet. Titanium designet føles premium.' },
]

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${product.name} - Sammenlign Priser | Prisguiden.dk`,
    description: `Find den bedste pris på ${product.name}. Sammenlign priser fra ${retailers.length} butikker. Laveste pris: ${product.lowest_price.toLocaleString('da-DK')} kr.`,
    openGraph: {
      title: `${product.name} - fra ${product.lowest_price.toLocaleString('da-DK')} kr.`,
      description: product.description,
    },
  }
}

function StarRating({ rating, size = 'md' }: { rating: number, size?: 'sm' | 'md' }) {
  const sizeClass = size === 'sm' ? 'w-4 h-4' : 'w-5 h-5'
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizeClass} ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="font-medium">{rating}</span>
    </div>
  )
}

function PriceHistoryChart() {
  const maxPrice = Math.max(...priceHistory.map(p => p.price))
  const minPrice = Math.min(...priceHistory.map(p => p.price))
  const range = maxPrice - minPrice || 1
  
  return (
    <div className="bg-white rounded-lg border border-[var(--border)] p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-bold text-lg">Prisudvikling</h3>
          <p className="text-sm text-[var(--muted-foreground)]">Sidste 6 måneder</p>
        </div>
        <div className="flex gap-2">
          {['3m', '6m', '12m'].map((period) => (
            <button 
              key={period}
              className={`px-3 py-1 text-sm font-medium rounded ${period === '6m' ? 'bg-[var(--primary)] text-white' : 'bg-[var(--muted)] text-[var(--muted-foreground)]'}`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      
      {/* Simple Chart */}
      <div className="relative h-48">
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs text-[var(--muted-foreground)]">
          <span>{maxPrice.toLocaleString('da-DK')}</span>
          <span>{((maxPrice + minPrice) / 2).toLocaleString('da-DK')}</span>
          <span>{minPrice.toLocaleString('da-DK')}</span>
        </div>
        <div className="ml-14 h-full flex items-end gap-1">
          {priceHistory.map((point, i) => {
            const height = ((point.price - minPrice) / range) * 100+20
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-2">
                <div 
                  className="w-full bg-gradient-to-t from-[var(--primary)] to-[var(--primary-light)] rounded-t relative group"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[var(--foreground)] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {point.price.toLocaleString('da-DK')} kr.
                  </div>
                </div>
                <span className="text-xs text-[var(--muted-foreground)]">{point.date}</span>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="mt-6 p-4 bg-[var(--muted)] rounded-lg flex justify-between items-center">
        <div>
          <p className="text-sm text-[var(--muted-foreground)]">Laveste pris nogensinde</p>
          <p className="font-bold text-[var(--primary)]">{minPrice.toLocaleString('da-DK')} kr.</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-[var(--muted-foreground)]">Prisfald siden start</p>
          <p className="font-bold text-[var(--success)]">-{(maxPrice - minPrice).toLocaleString('da-DK')} kr.</p>
        </div>
      </div>
    </div>
  )
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <div className="min-h-screen bg-[var(--muted)]">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[var(--border)]">
        <div className="container-prisguiden py-3">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">Hjem</Link>
            <span className="text-[var(--muted-foreground)]">/</span>
            <Link href="/kategori/mobiler" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">{product.category}</Link>
            <span className="text-[var(--muted-foreground)]">/</span>
            <span className="text-[var(--foreground)]">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-prisguiden py-8">
        {/* Product Header */}
        <div className="bg-white rounded-lg border border-[var(--border)] p-6 mb-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="aspect-square bg-[var(--muted)] rounded-lg flex items-center justify-center relative">
              <span className="text-9xl text-gray-400">📱</span>
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                <span className="bg-[var(--primary)] text-white text-xs font-bold px-3 py-1 rounded-full">Populær</span>
                <span className="bg-[var(--success)] text-white text-xs font-bold px-3 py-1 rounded-full">På tilbud</span>
              </div>
            </div>
            
            {/* Product Info */}
            <div>
              <p className="text-[var(--muted-foreground)] font-medium mb-1">{product.brand}</p>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-4">
                <StarRating rating={product.rating} />
                <span className="text-[var(--muted-foreground)]">({product.reviewCount} anmeldelser)</span>
              </div>
              
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-black/80 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  {product.followers.toLocaleString('da-DK')} følger dette produkt
                </span>
              </div>

              <p className="text-[var(--muted-foreground)] mb-6">{product.description}</p>
              
              <div className="bg-[var(--muted)] rounded-lg p-6 mb-6">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-[var(--primary)]">{product.lowest_price.toLocaleString('da-DK')} kr.</span>
                  <span className="text-lg text-[var(--muted-foreground)] line-through">{product.highest_price.toLocaleString('da-DK')} kr.</span>
                </div>
                <p className="text-[var(--muted-foreground)]">fra {retailers.length} butikker</p>
              </div>
              
              <ProductActions product={product} />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg border border-[var(--border)] mb-6">
          <div className="flex border-b border-[var(--border)]">
            {[
              { id: 'prices', label: 'Priser', count: retailers.length },
              { id: 'reviews', label: 'Anmeldelser', count: product.reviewCount },
              { id: 'history', label: 'Prisudvikling' },
              { id: 'specs', label: 'Specifikationer' },
            ].map((tab, i) => (
              <button 
                key={tab.id}
                className={`px-6 py-4 font-medium border-b-2 transition-colors ${
                  i === 0 
                    ? 'border-[var(--primary)] text-[var(--primary)]' 
                    : 'border-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                }`}
              >
                {tab.label}
                {tab.count && <span className="ml-2 text-sm bg-[var(--muted)] px-2 py-0.5 rounded-full">{tab.count}</span>}
              </button>
            ))}
          </div>

          {/* Prices Tab Content */}
          <div className="p-6">
            <div className="space-y-3">
              {retailers.map((retailer, i) => (
                <div 
                  key={retailer.id} 
                  className={`flex items-center gap-4 p-4 rounded-lg border transition-colors ${
                    i === 0 ? 'border-[var(--primary)] bg-orange-50' : 'border-[var(--border)] hover:bg-[var(--muted)]'
                  }`}
                >
                  <span className="text-4xl">{retailer.logo}</span>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{retailer.name}</span>
                      {retailer.verified && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded-full">Verificeret</span>
                      )}
                      {i === 0 && (
                        <span className="bg-[var(--primary)] text-white text-xs px-2 py-0.5 rounded-full">Billigst</span>
                      )}
                    </div>
                    <div className="text-sm text-[var(--muted-foreground)] mt-1">
                      {retailer.inStock ? (
                        <span className="text-[var(--success)]">✓ På lager</span>
                      ) : (
                        <span className="text-[var(--error)]">Ikke på lager</span>
                      )}
                      <span className="mx-2">•</span>
                      <span>{retailer.delivery}</span>
                      {retailer.shipping > 0 && <span className="mx-2">•</span>}
                      {retailer.shipping > 0 && <span>+{retailer.shipping} kr. fragt</span>}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[var(--primary)]">{retailer.price.toLocaleString('da-DK')} kr.</p>
                    {retailer.shipping > 0 && (
                      <p className="text-sm text-[var(--muted-foreground)]">
                        Total: {(retailer.price + retailer.shipping).toLocaleString('da-DK')} kr.
                      </p>
                    )}
                  </div>
                  <a 
                    href="#" 
                    className={`btn ${i === 0 ? 'btn-primary' : 'btn-outline'}`}
                  >
                    Gå til butik
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Price History Chart */}
        <div className="mb-6">
          <PriceHistoryChart />
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-lg border border-[var(--border)] p-6 mb-6">
          <h3 className="font-bold text-lg mb-4">Specifikationer</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(product.specifications).map(([key, value]) => (
              <div key={key} className="flex justify-between py-2 border-b border-[var(--border)]">
                <span className="text-[var(--muted-foreground)]">{key}</span>
                <span className="font-medium">{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-lg border border-[var(--border)] p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg">Anmeldelser</h3>
            <button className="btn btn-outline">Skriv anmeldelse</button>
          </div>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-[var(--border)] pb-4 last:border-0">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[var(--muted)] rounded-full flex items-center justify-center font-bold">
                    {review.author[0]}
                  </div>
                  <div>
                    <p className="font-medium">{review.author}</p>
                    <div className="flex items-center gap-2">
                      <StarRating rating={review.rating} size="sm" />
                      <span className="text-sm text-[var(--muted-foreground)]">{review.date}</span>
                    </div>
                  </div>
                </div>
                <p className="text-[var(--muted-foreground)]">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
