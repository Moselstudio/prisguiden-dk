import Link from 'next/link'

// Demo data for price alerts
const alerts = [
  { id: '1', name: 'Sony WH-1000XM5', current: 2499, target: 2200, image: '🎧' },
  { id: '2', name: 'LEGO Star Wars Millennium Falcon', current: 5800, target: 5500, image: '🚀' },
  { id: '3', name: 'JBL Live 660NC', current: 899, target: 750, image: '🔊' },
]

const recentlyViewed = [
  { id: '1', name: 'Dell UltraSharp 27"', price: 3299, time: '2 timer siden', image: '🖥️' },
  { id: '2', name: 'Apple Watch Series 9', price: 3099, time: 'I går', image: '⌚' },
  { id: '3', name: 'Fujifilm Instax Mini', price: 649, time: '2 dage siden', image: '📷' },
  { id: '4', name: 'Sage Barista Express', price: 4495, time: '3 dage siden', image: '☕' },
  { id: '5', name: 'MacBook Air M2', price: 8999, time: '5 dage siden', image: '💻' },
]

const savedProducts = [
  { id: '1', name: 'iPhone 15 Pro Max', price: 10999, image: '📱' },
  { id: '2', name: 'AirPods Pro 2', price: 1899, image: '🎧' },
  { id: '3', name: 'iPad Air M1', price: 5499, image: '📱' },
]

export default function ProfilePage() {
  return (
    <div className="bg-[var(--muted)] min-h-screen">
      <div className="container-prisguiden py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[var(--primary)] rounded-full flex items-center justify-center text-white text-3xl font-bold mx-auto mb-3">
                  JD
                </div>
                <h2 className="font-bold text-xl">John Doe</h2>
                <p className="text-sm text-[var(--primary)] font-medium">Premium Medlem</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <Link href="/profil" className="flex items-center gap-3 px-4 py-3 rounded-lg bg-[var(--primary)] text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Mine Alarmer
                </Link>
                <Link href="/profil/gemte" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--muted)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Gemte Produkter
                </Link>
                <Link href="/profil/historik" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--muted)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Søgehistorik
                </Link>
                <Link href="/profil/indstillinger" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--muted)] transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Kontoindstillinger
                </Link>
                <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-red-50 text-red-500 transition-colors w-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Log ud
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            {/* Price Alerts */}
            <section className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Mine Prisalarmer</h2>
                  <p className="text-[var(--muted-foreground)]">Administrer dine aktive prisalarmer og notifikationer.</p>
                </div>
              </div>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center gap-4 p-4 border border-[var(--border)] rounded-lg">
                    <div className="w-16 h-16 bg-[var(--muted)] rounded-lg flex items-center justify-center text-3xl">
                      {alert.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{alert.name}</h3>
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-[var(--muted-foreground)]">
                          Nuværende: <strong className="text-[var(--foreground)]">{alert.current.toLocaleString('da-DK')} kr.</strong>
                        </span>
                        <span className="text-[var(--muted-foreground)]">
                          Mål: <strong className="text-[var(--primary)]">{alert.target.toLocaleString('da-DK')} kr.</strong>
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="btn btn-secondary text-sm">Rediger</button>
                      <button className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Alert */}
              <div className="mt-6 p-4 border-2 border-dashed border-[var(--border)] rounded-lg">
                <h3 className="font-semibold mb-2">Tilføj nyt produkt</h3>
                <p className="text-sm text-[var(--muted-foreground)] mb-4">Søg efter et produkt for at sætte en prisalarm.</p>
                <div className="search-bar">
                  <svg className="w-5 h-5 text-[var(--muted-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                  <input type="text" placeholder="Søg efter produkter..." />
                </div>
              </div>
            </section>

            {/* Recently Viewed */}
            <section className="bg-white rounded-lg p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">Senest set</h2>
                <Link href="/profil/historik" className="text-[var(--primary)] text-sm font-medium hover:underline">
                  Se al historik →
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {recentlyViewed.map((item) => (
                  <div key={item.id} className="text-center p-4 border border-[var(--border)] rounded-lg hover:border-[var(--primary)] transition-colors cursor-pointer">
                    <div className="text-4xl mb-2">{item.image}</div>
                    <h4 className="font-medium text-sm line-clamp-1">{item.name}</h4>
                    <p className="text-xs text-[var(--muted-foreground)]">{item.time}</p>
                    <p className="text-[var(--primary)] font-bold text-sm mt-1">{item.price.toLocaleString('da-DK')} kr.</p>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
