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
    <div>
      {/* Dark Hero Section - Pricerunner Style */}
      <section className="hero-dark relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e] via-[#16213e] to-[#0f0f1a] z-0" />
        <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-40 z-0" style={{
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 400 400\'%3E%3Ccircle cx=\'200\' cy=\'200\' r=\'150\' fill=\'%23E85D04\' opacity=\'0.1\'/%3E%3C/svg%3E") center/cover'
        }} />
        
        <div className="container-prisguiden relative z-10 py-16 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Søg, sammenlign og spar<br />
                <span className="text-[var(--primary)]">Find dit næste tilbud i dag</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg">
                Hos Prisguiden kan du sammenligne priser på <strong className="text-white">8,1 millioner produkter</strong> fra <strong className="text-white">6.900 butikker</strong>
              </p>
              
              {/* Large Search Bar */}
              <div className="max-w-xl">
                <div className="flex bg-white rounded-full shadow-2xl overflow-hidden">
                  <div className="flex items-center gap-3 flex-1 px-6">
                    <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input 
                      type="text" 
                      placeholder="Hvad kan vi hjælpe med i dag?" 
                      className="flex-1 py-4 text-lg outline-none text-gray-800"
                    />
                  </div>
                  <button className="bg-[var(--primary)] hover:bg-[var(--primary-dark)] text-white px-8 py-4 font-semibold transition-colors flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Stats Cards */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">8,1M+</p>
                <p className="text-gray-300">Produkter</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">6.900+</p>
                <p className="text-gray-300">Butikker</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-white mb-2">2M+</p>
                <p className="text-gray-300">Brugere</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <p className="text-4xl font-bold text-[var(--primary)] mb-2">100%</p>
                <p className="text-gray-300">Gratis</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Category Bar - Pricerunner Style */}
      <section className="bg-white border-b border-[var(--border)] sticky top-16 z-40">
        <div className="container-prisguiden">
          <div className="flex gap-1 overflow-x-auto scrollbar-hide py-3 -mx-4 px-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="flex flex-col items-center gap-1 px-4 py-2 rounded-lg hover:bg-[var(--muted)] transition-colors min-w-[80px] text-center group"
              >
                <span className="text-2xl group-hover:scale-110 transition-transform">{category.icon}</span>
                <span className="text-xs font-medium text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] whitespace-nowrap">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Best Deals */}
      <section className="py-12 bg-white">
        <div className="container-prisguiden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Dagens bedste deals</h2>
              <p className="text-[var(--muted-foreground)]">De største prisfald de seneste 24 timer</p>
            </div>
            <Link href="/prisfald" className="btn btn-outline">
              Se alle →
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {deals.map((deal) => (
              <Link key={deal.id} href={`/produkt/${deal.slug}`} className="card group">
                <div className="aspect-square bg-[var(--muted)] relative flex items-center justify-center">
                  <span className="text-6xl">📱</span>
                  <span className="absolute top-3 right-3 bg-[var(--success)] text-white text-xs font-bold px-2 py-1 rounded-full">
                    -{deal.discount}%
                  </span>
                </div>
                <div className="p-4">
                  <p className="text-xs text-[var(--muted-foreground)] mb-1">fra {deal.shops} butikker</p>
                  <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-2">{deal.name}</h3>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[var(--primary)] font-bold text-lg">{deal.price.toLocaleString('da-DK')} kr.</span>
                    <span className="text-[var(--muted-foreground)] line-through text-sm">{deal.originalPrice.toLocaleString('da-DK')} kr.</span>
                  </div>
                  <div className="flex items-center gap-1 text-[var(--success)] text-sm mt-1">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="font-semibold">{deal.drop} kr. prisfald</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products - Enhanced Cards */}
      <section className="py-12 bg-[var(--muted)]">
        <div className="container-prisguiden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Populære lige nu</h2>
              <p className="text-[var(--muted-foreground)]">Produkter mange kigger på</p>
            </div>
            <Link href="/trending" className="text-[var(--primary)] font-medium hover:underline">
              Se alle →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {trendingProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Prisguiden */}
      <section className="py-16 bg-[var(--foreground)] text-white">
        <div className="container-prisguiden">
          <h2 className="text-3xl font-bold text-center mb-12">Hvorfor vælge Prisguiden?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: '🔍', title: 'Find laveste pris', desc: 'Vi scanner tusindvis af butikker for at finde den bedste pris' },
              { icon: '🔔', title: 'Prisalarmer', desc: 'Få besked når prisen falder på dit yndlingsprodukt' },
              { icon: '📊', title: 'Prishistorik', desc: 'Se prisudviklingen og køb på det rigtige tidspunkt' },
              { icon: '⭐', title: 'Anmeldelser', desc: 'Læs hvad andre brugere synes om produktet' },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <span className="text-5xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-[var(--primary)]">
        <div className="container-prisguiden text-center text-white">
          <h2 className="text-2xl font-bold mb-2">Gå ikke glip af de bedste tilbud</h2>
          <p className="mb-6 opacity-90">Tilmeld dig vores nyhedsbrev og få de bedste tilbud direkte i din indbakke.</p>
          <form className="max-w-md mx-auto flex gap-2">
            <input 
              type="email" 
              placeholder="Din email adresse" 
              className="flex-1 px-4 py-3 rounded-lg text-[var(--foreground)] placeholder:text-[var(--muted-foreground)]"
            />
            <button type="submit" className="btn bg-white text-[var(--primary)] font-bold hover:bg-gray-100">
              Tilmeld
            </button>
          </form>
        </div>
      </section>

      {/* Floating "Mine produkter" button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-[var(--foreground)] hover:bg-gray-800 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          Mine produkter
          <span className="bg-[var(--primary)] text-white text-xs font-bold px-2 py-0.5 rounded-full">0</span>
        </button>
      </div>
    </div>
  )
}
