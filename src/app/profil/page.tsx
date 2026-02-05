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

export default function ProfilePage() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-gray-100">
      <div className="container-prisguiden py-8 lg:py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Glass Panel */}
          <aside className="lg:col-span-1">
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 sticky top-24">
              {/* Profile Header */}
              <div className="text-center mb-6 pb-6 border-b border-white/5">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-3 shadow-lg shadow-orange-500/20">
                  JD
                </div>
                <h2 className="font-bold text-xl text-white">John Doe</h2>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold">
                  ⭐ Premium Medlem
                </span>
              </div>

              {/* Navigation */}
              <nav className="space-y-1">
                <Link href="/profil" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-orange-500/10 text-orange-400 border border-orange-500/20">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <span className="font-medium">Mine Alarmer</span>
                </Link>
                <Link href="/profil/gemte" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="font-medium">Gemte Produkter</span>
                </Link>
                <Link href="/profil/historik" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-medium">Søgehistorik</span>
                </Link>
                <Link href="/profil/indstillinger" className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">Kontoindstillinger</span>
                </Link>
                <button className="flex items-center gap-3 px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-colors w-full text-left mt-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  <span className="font-medium">Log ud</span>
                </button>
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 space-y-6">
            {/* Price Alerts - Glass Card */}
            <section className="bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">🔔 Mine Prisalarmer</h2>
                  <p className="text-gray-400 text-sm mt-1">Administrer dine aktive prisalarmer og notifikationer.</p>
                </div>
              </div>

              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-xl hover:border-orange-500/20 transition-colors group">
                    <div className="w-16 h-16 bg-white/5 rounded-xl flex items-center justify-center text-3xl group-hover:scale-105 transition-transform">
                      {alert.image}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white">{alert.name}</h3>
                      <div className="flex items-center gap-4 text-sm mt-1">
                        <span className="text-gray-400">
                          Nuværende: <strong className="text-white">{alert.current.toLocaleString('da-DK')} kr.</strong>
                        </span>
                        <span className="text-gray-500">→</span>
                        <span className="text-gray-400">
                          Mål: <strong className="text-orange-400">{alert.target.toLocaleString('da-DK')} kr.</strong>
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="mt-2 h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-orange-500 to-pink-500 rounded-full"
                          style={{ width: `${Math.max(0, 100 - ((alert.current - alert.target) / alert.current * 100))}%` }}
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="btn bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-orange-500/30 text-sm px-4 py-2 rounded-lg transition-colors">
                        Rediger
                      </button>
                      <button className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add New Alert */}
              <div className="mt-6 p-5 border-2 border-dashed border-white/10 rounded-xl hover:border-orange-500/30 transition-colors">
                <h3 className="font-semibold text-white mb-2">➕ Tilføj nyt produkt</h3>
                <p className="text-sm text-gray-400 mb-4">Søg efter et produkt for at sætte en prisalarm.</p>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Søg efter produkter..." 
                    className="w-full bg-white/5 border border-white/10 text-white placeholder-gray-500 rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </section>

            {/* Recently Viewed - Glass Card */}
            <section className="bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">👁️ Senest set</h2>
                <Link href="/profil/historik" className="text-orange-400 text-sm font-medium hover:text-orange-300 transition-colors flex items-center gap-1">
                  Se al historik <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </Link>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {recentlyViewed.map((item) => (
                  <Link key={item.id} href={`/produkt/${item.id}`} className="text-center p-4 bg-white/5 border border-white/5 rounded-xl hover:border-orange-500/30 hover:bg-white/10 transition-all cursor-pointer group">
                    <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">{item.image}</div>
                    <h4 className="font-medium text-sm text-gray-200 line-clamp-1 group-hover:text-orange-400 transition-colors">{item.name}</h4>
                    <p className="text-xs text-gray-500 mt-1">{item.time}</p>
                    <p className="text-orange-400 font-bold text-sm mt-1">{item.price.toLocaleString('da-DK')} kr.</p>
                  </Link>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  )
}
