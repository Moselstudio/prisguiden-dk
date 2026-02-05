import Link from 'next/link'
import ProductCard from '@/components/ProductCard'

// Demo data - will be replaced with Supabase data
const trendingProducts = [
  { id: '1', name: 'Apple iPhone 15 Pro 128GB', slug: 'apple-iphone-15-pro-128gb', brand: 'Apple', lowest_price: 8999, highest_price: 10499, rating: 4.8, shops: 12, followers: 2341 },
  { id: '2', name: 'Sony WH-1000XM5 Wireless', slug: 'sony-wh-1000xm5', brand: 'Sony', lowest_price: 2499, highest_price: 2999, rating: 4.9, shops: 8, followers: 1256 },
  { id: '3', name: 'Samsung Galaxy S24 Ultra', slug: 'samsung-galaxy-s24-ultra', brand: 'Samsung', lowest_price: 9999, highest_price: 11999, rating: 4.7, shops: 15, followers: 3421 },
  { id: '4', name: 'PlayStation 5 Slim Digital', slug: 'playstation-5-slim', brand: 'Sony', lowest_price: 3499, highest_price: 4199, rating: 4.8, shops: 10, followers: 5672 },
  { id: '5', name: 'MacBook Air M3 13"', slug: 'macbook-air-m3', brand: 'Apple', lowest_price: 9999, highest_price: 12499, rating: 4.9, shops: 9, followers: 1892 },
  { id: '6', name: 'LG OLED65C4 65" 4K TV', slug: 'lg-oled65c4', brand: 'LG', lowest_price: 12999, highest_price: 15999, rating: 4.8, shops: 7, followers: 987 },
]

const deals = [
  { id: '1', name: 'Sony WH-1000XM5', slug: 'sony-wh-1000xm5', drop: 500, price: 2499, originalPrice: 2999, discount: 17, shops: 8 },
  { id: '2', name: 'Samsung Galaxy S23', slug: 'samsung-galaxy-s23', drop: 800, price: 5999, originalPrice: 6799, discount: 12, shops: 14 },
  { id: '3', name: 'iPad Air 5 64GB', slug: 'ipad-air-5', drop: 700, price: 4799, originalPrice: 5499, discount: 13, shops: 11 },
  { id: '4', name: 'KitchenAid Artisan', slug: 'kitchenaid-artisan', drop: 600, price: 4999, originalPrice: 5599, discount: 11, shops: 6 },
]

// Pricerunner-style categories (14 categories)
const categories = [
  { name: 'Hjemmet', slug: 'hjemmet', icon: '🏠' },
  { name: 'Haven', slug: 'haven', icon: '🌿' },
  { name: 'Børn', slug: 'boern', icon: '👶' },
  { name: 'Legetøj', slug: 'legetoej', icon: '🧸' },
  { name: 'Gaming', slug: 'gaming', icon: '🎮' },
  { name: 'Elektronik', slug: 'elektronik', icon: '📱' },
  { name: 'Mobiler', slug: 'mobiler', icon: '📲' },
  { name: 'Audio & TV', slug: 'audio-tv', icon: '📺' },
  { name: 'Foto', slug: 'foto', icon: '📷' },
  { name: 'Mode', slug: 'mode', icon: '👗' },
  { name: 'Sundhed', slug: 'sundhed', icon: '💊' },
  { name: 'Sport', slug: 'sport', icon: '⚽' },
  { name: 'DIY', slug: 'diy', icon: '🔧' },
  { name: 'Mobilitet', slug: 'mobilitet', icon: '🚗' },
]

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Cinematic Hero Section - V3 */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[#0f172a] z-0" />
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
        
        {/* Animated Particles/Grid can be added here */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

        <div className="container-prisguiden relative z-10 py-12 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 drop-shadow-2xl">
            <span className="block text-white mb-2">Fremtidens</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600">
              Prissammenligning
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Vi scanner <strong className="text-white">6.900+ butikker</strong> hvert sekund, så du altid finder den <span className="text-orange-400">laveste pris</span>.
          </p>

          {/* Floating Search Interface */}
          <div className="max-w-3xl mx-auto relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative flex items-center bg-[#1e293b]/90 backdrop-blur-xl border border-white/10 rounded-full p-2 shadow-2xl">
              <svg className="w-6 h-6 ml-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input 
                type="text" 
                placeholder="Søg efter produkt, kategori eller mærke..." 
                className="flex-1 bg-transparent border-none text-white text-lg px-4 py-3 focus:ring-0 focus:outline-none placeholder-gray-500"
              />
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 active:scale-95">
                Søg
              </button>
            </div>
            
            {/* Quick Suggestions */}
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {['iPhone 15', 'PlayStation 5', 'AirPods Pro', 'LEGO', 'Roborock'].map(term => (
                <button key={term} className="glass px-4 py-1.5 rounded-full text-sm text-gray-300 hover:text-white hover:border-orange-500/50 transition-colors">
                  {term}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Modern Bento Category Grid */}
      <section className="py-20 relative bg-[#0b1120]">
        <div className="container-prisguiden">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Udforsk Kategorier</h2>
              <p className="text-gray-400">Find det du leder efter i vores mest populære kategorier</p>
            </div>
            <Link href="/kategorier" className="text-orange-400 font-medium hover:text-orange-300 transition-colors flex items-center gap-1">
              Se alle kategorier 
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.slice(0, 12).map((category, i) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className={`group relative overflow-hidden rounded-2xl glass p-6 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:bg-white/10 hover:scale-[1.02] ${i === 0 || i === 1 ? 'md:col-span-2 md:row-span-2 bg-gradient-to-br from-purple-900/40 to-slate-900/40' : ''}`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className={`text-4xl transition-transform group-hover:scale-110 drop-shadow- glow ${i < 2 ? 'text-6xl' : ''}`}>{category.icon}</span>
                <span className={`font-bold text-gray-200 group-hover:text-white ${i < 2 ? 'text-xl' : 'text-sm'}`}>{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Carousel - Glass Cards */}
      <section className="py-20 bg-gradient-to-b from-[#0b1120] to-[#0f172a]">
        <div className="container-prisguiden">
          <div className="flex items-center gap-4 mb-10">
            <span className="bg-orange-500/20 text-orange-400 p-2 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </span>
            <h2 className="text-3xl font-bold text-white">Trending Lige Nu</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Deals - Glass Rows */}
      <section className="py-20 bg-[#0f172a] relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container-prisguiden relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Dagens Deals ⚡️</h2>
              <p className="text-gray-400">Vi har fundet {deals.length} produkter med store prisfald i dag</p>
            </div>
            <Link href="/prisfald" className="btn btn-outline border-white/20 text-white hover:bg-white/10">
              Se alle tilbud
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {deals.map((deal) => (
              <Link key={deal.id} href={`/produkt/${deal.slug}`} className="glass rounded-xl p-0 overflow-hidden group hover:border-orange-500/50 transition-colors">
                <div className="relative h-48 bg-[#1e293b] flex items-center justify-center p-8 group-hover:scale-105 transition-transform duration-500">
                  <span className="text-8xl drop-shadow-2xl">📦</span>
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    -{deal.discount}%
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-lg mb-2 truncate group-hover:text-orange-400 transition-colors">{deal.name}</h3>
                  <div className="flex items-baseline gap-3 mb-3">
                    <span className="text-2xl font-bold text-orange-400">{deal.price.toLocaleString('da-DK')} kr.</span>
                    <span className="text-sm text-gray-500 line-through">{deal.originalPrice.toLocaleString('da-DK')} kr.</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-green-400 flex items-center gap-1 font-medium">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" /></svg>
                      Spar {deal.drop} kr.
                    </span>
                    <span className="text-gray-500">{deal.shops} butikker</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Floating "Mine produkter" button */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white px-6 py-4 rounded-full shadow-2xl shadow-orange-500/30 flex items-center gap-3 transition-all transform hover:scale-105 hover:-translate-y-1 font-bold">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Mine produkter
          <span className="bg-white text-orange-600 text-xs font-extrabold px-2 py-0.5 rounded-full">0</span>
        </button>
      </div>
    </div>
  )
}
