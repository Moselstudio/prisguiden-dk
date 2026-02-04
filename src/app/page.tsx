import Link from 'next/link'

// Demo data for UI - will be replaced with Supabase data
const trendingProducts = [
  { id: '1', name: 'Apple iPhone 15 Pro 128GB', slug: 'apple-iphone-15-pro-128gb', brand: 'Apple', lowest_price: 8999, highest_price: 10499, image_url: null },
  { id: '2', name: 'Sony WH-1000XM5 Wireless Headphones', slug: 'sony-wh-1000xm5', brand: 'Sony', lowest_price: 2499, highest_price: 2999, image_url: null },
  { id: '3', name: 'Nike Air Max 270', slug: 'nike-air-max-270', brand: 'Nike', lowest_price: 899, highest_price: 1199, image_url: null },
  { id: '4', name: 'Samsung 65" QLED 4K Smart TV Q80C', slug: 'samsung-65-qled-q80c', brand: 'Samsung', lowest_price: 7999, highest_price: 9999, image_url: null },
]

const deals = [
  { id: '1', name: 'Sony WH-1000XM5', drop: 500, price: 2499, discount: 17 },
  { id: '2', name: 'Samsung Galaxy S23', drop: 800, price: 5999, discount: 12 },
  { id: '3', name: 'LEGO Star Wars Set', drop: 300, price: 5800, discount: 5 },
  { id: '4', name: 'KitchenAid Artisan', drop: 600, price: 4999, discount: 11 },
]

const categories = [
  { name: 'Elektronik', slug: 'elektronik', icon: '📱' },
  { name: 'Computere', slug: 'computere', icon: '💻' },
  { name: 'Hvidevarer', slug: 'hvidevarer', icon: '🧊' },
  { name: 'Tøj & Mode', slug: 'toej-mode', icon: '👕' },
  { name: 'Sport & Fritid', slug: 'sport-fritid', icon: '⚽' },
  { name: 'Hjem & Have', slug: 'hjem-have', icon: '🏡' },
  { name: 'Skønhed', slug: 'skoenhed', icon: '💄' },
  { name: 'Legetøj', slug: 'legetoej', icon: '🎮' },
]

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-gradient py-16 md:py-24">
        <div className="container-prisguiden text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-[var(--foreground)] mb-6">
            Sammenlign priser og find{' '}
            <span className="text-[var(--primary)]">de bedste tilbud</span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--muted-foreground)] max-w-2xl mx-auto mb-8">
            Prisguiden hjælper dig med at spare penge. Sammenlign priser fra hundredvis af danske butikker og find det bedste tilbud.
          </p>
          
          {/* Large Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="search-bar bg-white shadow-lg p-2">
              <svg className="w-6 h-6 text-[var(--muted-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Søg efter produkter, mærker eller kategorier..." className="flex-1 text-lg py-2" />
              <button className="btn btn-primary">Søg</button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="text-sm text-[var(--muted-foreground)]">Populære:</span>
            <Link href="/produkt/iphone-15" className="text-sm text-[var(--primary)] hover:underline">iPhone 15</Link>
            <Link href="/produkt/ps5" className="text-sm text-[var(--primary)] hover:underline">PlayStation 5</Link>
            <Link href="/produkt/airpods-pro" className="text-sm text-[var(--primary)] hover:underline">AirPods Pro</Link>
            <Link href="/produkt/macbook-air" className="text-sm text-[var(--primary)] hover:underline">MacBook Air</Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-white">
        <div className="container-prisguiden">
          <h2 className="text-2xl font-bold mb-6">Populære Kategorier</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/kategori/${category.slug}`}
                className="flex flex-col items-center gap-2 p-4 rounded-xl bg-[var(--muted)] hover:bg-[var(--primary)] hover:text-white transition-all group"
              >
                <span className="text-3xl">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products */}
      <section className="py-12 bg-[var(--muted)]">
        <div className="container-prisguiden">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Trending Produkter</h2>
            <Link href="/trending" className="text-[var(--primary)] font-medium hover:underline">
              Se alle →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingProducts.map((product) => (
              <Link key={product.id} href={`/produkt/${product.slug}`} className="card group">
                <div className="aspect-square bg-white relative overflow-hidden flex items-center justify-center">
                  <span className="text-6xl text-[var(--muted-foreground)]">📦</span>
                </div>
                <div className="p-4 space-y-2">
                  <p className="text-xs text-[var(--muted-foreground)] font-medium uppercase">{product.brand}</p>
                  <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors line-clamp-2">{product.name}</h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-[var(--primary)] font-bold text-lg">{product.lowest_price.toLocaleString('da-DK')} kr.</span>
                    {product.highest_price > product.lowest_price && (
                      <span className="text-[var(--muted-foreground)] line-through text-sm">{product.highest_price.toLocaleString('da-DK')} kr.</span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Deals */}
      <section className="py-12 bg-white">
        <div className="container-prisguiden">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-2xl font-bold">Dagens Prisfald 🔥</h2>
              <p className="text-[var(--muted-foreground)]">Produkter med de største prisfald de seneste 24 timer</p>
            </div>
            <Link href="/prisfald" className="btn btn-outline">
              Se alle tilbud
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="card p-4 relative overflow-hidden">
                <span className="absolute top-2 right-2 bg-[var(--primary)] text-white text-xs font-bold px-2 py-1 rounded">
                  -{deal.discount}%
                </span>
                <div className="aspect-square bg-[var(--muted)] rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-5xl">📱</span>
                </div>
                <h3 className="font-semibold mb-2">{deal.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[var(--primary)] font-bold">{deal.price.toLocaleString('da-DK')} kr.</span>
                  <span className="price-drop text-sm">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {deal.drop} kr.
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-[var(--foreground)] text-white">
        <div className="container-prisguiden">
          <h2 className="text-3xl font-bold text-center mb-12">Hvorfor bruge Prisguiden?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Altid de bedste priser</h3>
              <p className="text-gray-400">Vi sammenligner priser fra hundredvis af danske butikker, så du altid finder det bedste tilbud.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Prisalarmer</h3>
              <p className="text-gray-400">Sæt en prisalarm og få besked, når prisen på dit yndlingsprodukt falder.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[var(--primary)] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Prishistorik</h3>
              <p className="text-gray-400">Se hvordan prisen har udviklet sig over tid, så du ved om det virkelig er et godt tilbud.</p>
            </div>
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
    </div>
  )
}
