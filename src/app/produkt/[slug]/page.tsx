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
    <div className="bg-[#1e293b]/50 rounded-2xl border border-white/5 p-8 backdrop-blur-sm">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h3 className="font-bold text-xl text-white mb-1">Prisudvikling</h3>
          <p className="text-sm text-gray-400">Prishistorik for de sidste 6 måneder</p>
        </div>
        <div className="flex p-1 bg-black/20 rounded-lg">
          {['3m', '6m', '12m'].map((period) => (
            <button 
              key={period}
              className={`px-4 py-1.5 text-sm font-medium rounded-md transition-all ${period === '6m' ? 'bg-orange-500 text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>
      
      {/* Premium Chart Visualization */}
      <div className="relative h-64 w-full">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-0 w-12 flex flex-col justify-between text-xs font-mono text-gray-500 z-10">
          <span>{maxPrice.toLocaleString()}</span>
          <span>{Math.round((maxPrice + minPrice) / 2).toLocaleString()}</span>
          <span>{minPrice.toLocaleString()}</span>
        </div>

        {/* Grid Lines */}
        <div className="absolute left-14 right-0 top-0 bottom-0 flex flex-col justify-between pointer-events-none">
          <div className="border-t border-dashed border-white/5 w-full h-0"></div>
          <div className="border-t border-dashed border-white/5 w-full h-0"></div>
          <div className="border-t border-dashed border-white/5 w-full h-0"></div>
        </div>

        {/* Bars */}
        <div className="ml-14 h-full flex items-end gap-3 px-2">
          {priceHistory.map((point, i) => {
            const height = ((point.price - minPrice) / range) * 80 + 10 // scale to 10-90%
            return (
              <div key={i} className="flex-1 flex flex-col items-center gap-3 group relative">
                {/* Tooltip */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 shadow-xl z-20 whitespace-nowrap pointer-events-none">
                  {point.price.toLocaleString('da-DK')} kr.
                  <div className="absolute bottom-[-4px] left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45"></div>
                </div>

                {/* Bar */}
                <div 
                  className="w-full bg-gradient-to-t from-orange-500/20 to-orange-500 rounded-t-lg relative transition-all duration-300 group-hover:to-orange-400 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                  style={{ height: `${height}%` }}
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/20"></div>
                </div>
                
                {/* X-Axis Label */}
                <span className="text-xs text-gray-500 font-medium group-hover:text-white transition-colors">{point.date}</span>
              </div>
            )
          })}
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
          <p className="text-xs text-gray-400 mb-1">Laveste pris nogensinde</p>
          <p className="font-bold text-xl text-white">{minPrice.toLocaleString('da-DK')} kr.</p>
        </div>
        <div className="bg-black/20 rounded-xl p-4 border border-white/5">
          <p className="text-xs text-gray-400 mb-1">Prisfald siden start</p>
          <p className="font-bold text-xl text-green-400 flex items-center gap-1">
             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
             {(maxPrice - minPrice).toLocaleString('da-DK')} kr.
          </p>
        </div>
      </div>
    </div>
  )
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  return (
    <div className="min-h-screen bg-[#0f172a] text-gray-100">
      {/* Breadcrumb - Glass */}
      <div className="border-b border-white/5 bg-[#0f172a]/50 backdrop-blur-md sticky top-16 z-40">
        <div className="container-prisguiden py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-orange-400 transition-colors">Hjem</Link>
            <span>/</span>
            <Link href="/kategorier" className="hover:text-orange-400 transition-colors">Mobiler</Link>
            <span>/</span>
            <span className="text-white font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container-prisguiden py-8 lg:py-12">
        {/* Product Header Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          
          {/* Left Column: Image & Highlights */}
          <div className="space-y-6">
            <div className="aspect-square bg-gradient-to-br from-white/5 to-white/0 rounded-3xl border border-white/10 flex items-center justify-center relative p-8 group overflow-hidden">
              <div className="absolute inset-0 bg-orange-500/10 blur-[100px] pointer-events-none group-hover:bg-orange-500/20 transition-all duration-700" />
              <span className="text-9xl filter drop-shadow-2xl relative z-10 scale-100 group-hover:scale-105 transition-transform duration-500">📱</span>
              
              {/* Floating Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-orange-500/20 backdrop-blur-md">
                  🔥 Populær
                </span>
                <span className="bg-green-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg shadow-green-500/20 backdrop-blur-md">
                  Spara 15%
                </span>
              </div>
            </div>

            {/* Thumbnails / Gallery (Placeholder) */}
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="aspect-square rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors cursor-pointer flex items-center justify-center">
                  <span className="text-2xl opacity-50">📱</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Column: Info & Actions */}
          <div className="flex flex-col">
            <div className="mb-6">
              <p className="text-orange-400 font-bold tracking-wide uppercase text-sm mb-2">{product.brand}</p>
              <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-4 leading-tight">{product.name}</h1>
              
              <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-full">
                  <StarRating rating={product.rating} />
                  <span className="text-white font-medium">{product.rating}</span>
                  <span>({product.reviewCount} anmeldelser)</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
                  <span>{product.followers.toLocaleString('da-DK')} følger produktet</span>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed text-lg mb-8 border-l-2 border-orange-500/50 pl-4">
                {product.description}
              </p>
            </div>

            {/* Price Card */}
            <div className="glass rounded-2xl p-6 border border-white/10 mt-auto shadow-2xl shadow-black/50">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <p className="text-gray-400 text-sm font-medium mb-1">Laveste pris lige nu</p>
                  <div className="flex items-baseline gap-3">
                    <span className="text-5xl font-extrabold text-white tracking-tight">{product.lowest_price.toLocaleString('da-DK')} kr.</span>
                    <span className="text-xl text-gray-500 line-through">{product.highest_price.toLocaleString('da-DK')} kr.</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-lg text-sm font-bold inline-block mb-2">
                    På lager
                  </div>
                  <p className="text-gray-500 text-sm">fra {retailers.length} butikker</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <button className="btn bg-orange-600 hover:bg-orange-500 text-white border-0 py-4 text-lg shadow-lg shadow-orange-600/20">
                    Find Forhandler
                 </button>
                 <ProductActions product={product} /> 
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Interface */}
        <div className="mb-12">
           <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
            {[
              { id: 'prices', label: 'Priser', count: retailers.length },
              { id: 'history', label: 'Prisudvikling' },
              { id: 'specs', label: 'Specifikationer' },
              { id: 'reviews', label: 'Anmeldelser', count: product.reviewCount },
            ].map((tab, i) => (
              <button 
                key={tab.id}
                className={`px-8 py-4 font-medium text-lg transition-all relative ${
                  i === 0 
                    ? 'text-white' 
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                {tab.label}
                {tab.count && <span className="ml-2 text-xs bg-white/10 text-gray-300 px-2 py-0.5 rounded-full">{tab.count}</span>}
                {i === 0 && <div className="absolute bottom-0 left-0 right-0 h-1 bg-orange-500 rounded-t-full shadow-[0_-2px_10px_rgba(249,115,22,0.5)]"></div>}
              </button>
            ))}
          </div>

          {/* Retailer List */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {retailers.map((retailer, i) => (
              <div 
                key={retailer.id} 
                className={`flex items-center gap-6 p-6 rounded-2xl border transition-all duration-300 ${
                  i === 0 
                    ? 'bg-gradient-to-r from-orange-500/10 to-transparent border-orange-500/30 shadow-lg shadow-orange-500/5' 
                    : 'bg-[#1e293b]/50 border-white/5 hover:bg-[#1e293b] hover:border-white/10'
                }`}
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-3xl shadow-sm shrink-0">
                  {retailer.logo}
                </div>
                
                <div className="flex-1 grid md:grid-cols-2 gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-bold text-lg text-white">{retailer.name}</h3>
                      {i === 0 && <span className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Billigst</span>}
                      {retailer.verified && <span className="text-blue-400 text-xs flex items-center gap-0.5">Verified <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg></span>}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span className={retailer.inStock ? "text-green-400 flex items-center gap-1" : "text-red-400"}>
                         <div className={`w-2 h-2 rounded-full ${retailer.inStock ? 'bg-green-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]' : 'bg-red-400'}`} />
                         {retailer.inStock ? 'På lager' : 'Ikke på lager'}
                      </span>
                      <span>{retailer.delivery}</span>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="font-bold text-2xl text-white mb-1">{retailer.price.toLocaleString('da-DK')} kr.</div>
                    <div className="text-sm text-gray-500">
                       {retailer.shipping > 0 ? `+ ${retailer.shipping} kr. fragt` : 'Fri fragt'}
                    </div>
                  </div>
                </div>

                <a 
                  href="#" 
                  className={`btn px-8 ${i === 0 ? 'bg-orange-500 hover:bg-orange-600 text-white border-0 shadow-lg shadow-orange-500/20' : 'btn-outline border-white/20 text-white hover:bg-white/10'}`}
                >
                  Se tilbud
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Stats & Charts Grid */}
         <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
               <PriceHistoryChart />
            </div>
            
            {/* Specs Mini-Card */}
             <div className="bg-[#1e293b]/50 rounded-2xl border border-white/5 p-6 h-full">
              <h3 className="font-bold text-white mb-6 flex items-center gap-2">
                <span className="text-xl">⚡️</span> Nøglespecifikationer
              </h3>
              <div className="space-y-4">
                {Object.entries(product.specifications).slice(0, 6).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
                    <span className="text-gray-400 text-sm">{key}</span>
                    <span className="text-white font-medium text-sm text-right">{value}</span>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-2 text-sm text-orange-400 hover:text-orange-300 font-medium border border-orange-500/20 rounded-lg hover:bg-orange-500/5 transition-colors">
                Se alle specifikationer
              </button>
            </div>
         </div>
         
         {/* Reviews Section */}
         <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-white mb-6">Anmeldelser</h2>
            <div className="grid md:grid-cols-2 gap-6">
               {reviews.map((review) => (
                  <div key={review.id} className="bg-[#1e293b]/30 rounded-2xl p-6 border border-white/5">
                     <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-purple-500 flex items-center justify-center text-white font-bold">
                           {review.author[0]}
                        </div>
                        <div>
                           <p className="text-white font-medium">{review.author}</p>
                           <div className="flex gap-2 text-xs text-gray-400">
                              <StarRating rating={review.rating} size="sm" />
                              <span>• {review.date}</span>
                           </div>
                        </div>
                     </div>
                     <p className="text-gray-300 text-sm leading-relaxed">"{review.text}"</p>
                  </div>
               ))}
            </div>
         </div>

      </div>
    </div>
  )
}
