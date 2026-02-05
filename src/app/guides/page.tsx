import Link from 'next/link'

const featuredGuide = {
  id: '1',
  title: 'Bedste vaskemaskine 2024: Vi har testet de 10 mest populære modeller',
  excerpt: 'Vi har testet de 10 mest populære vaskemaskiner på markedet og fundet frem til de bedste modeller til enhver pengepung.',
  category: 'Hvidevarer',
  image: '🧺',
  author: 'Marie Hansen',
  date: '15. januar 2024',
}

const guides = [
  { id: '2', title: 'Bedste Noise Cancelling Høretelefoner (2024)', excerpt: 'Komplet guide til de bedste ANC høretelefoner på markedet.', category: 'Lyd', image: '🎧' },
  { id: '3', title: 'Robotstøvsuger Test: Top 5 Modeller til Dyrehår', excerpt: 'Har du kæledyr? Her er de bedste robotstøvsugere til at håndtere dyrehår.', category: 'Hvidevarer', image: '🤖' },
  { id: '4', title: 'Den ultimative guide til VR Headsets i 2024', excerpt: 'Alt hvad du skal vide om VR headsets - fra gaming til produktivitet.', category: 'Gaming', image: '🥽' },
  { id: '5', title: 'Bedste gaming laptop 2024 - Top 10 modeller', excerpt: 'Vi har testet de mest populære gaming laptops og rangerer dem efter ydeevne og pris.', category: 'Computere', image: '💻' },
  { id: '6', title: 'Smart Home Guide: Kom godt i gang', excerpt: 'Alt hvad du skal vide for at komme i gang med smart home.', category: 'Smart Home', image: '🏠' },
  { id: '7', title: 'Bedste espressomaskine til hjemmet', excerpt: 'Fra budget til premium - vi guider dig til den rigtige espressomaskine.', category: 'Køkken', image: '☕' },
]

const categories = [
  { name: 'Elektronik', count: 45, icon: '📱' },
  { name: 'Hvidevarer', count: 32, icon: '🧊' },
  { name: 'Computere', count: 28, icon: '💻' },
  { name: 'Gaming', count: 24, icon: '🎮' },
  { name: 'Smart Home', count: 18, icon: '🏠' },
  { name: 'Køkken', count: 15, icon: '🍳' },
]

export default function GuidesPage() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-gray-100">
      {/* Header - Hero Style */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-orange-500/10" />
        <div className="container-prisguiden py-12 lg:py-16 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            📚 Ekspertguider
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Bedst i Test & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">Guides</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Ekspertanmeldelser og købsguider til at hjælpe dig med at træffe det rigtige valg
          </p>
        </div>
      </div>

      <div className="container-prisguiden py-8 lg:py-12">
        {/* Featured Guide - Premium Card */}
        <section className="mb-12">
          <Link href={`/guides/${featuredGuide.id}`} className="block group">
            <div className="relative bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-500 hover:shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-orange-500/20 to-purple-600/30 p-12 lg:p-16 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                  <span className="text-[120px] group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl relative z-10">{featuredGuide.image}</span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-3">{featuredGuide.category}</span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors leading-tight">
                    {featuredGuide.title}
                  </h2>
                  <p className="text-gray-400 mb-6 leading-relaxed">{featuredGuide.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">MH</div>
                      {featuredGuide.author}
                    </span>
                    <span>•</span>
                    <span>{featuredGuide.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
              Populære Guides
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <Link key={guide.id} href={`/guides/${guide.id}`} className="group relative bg-[#1e293b]/40 hover:bg-[#1e293b]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  <div className="aspect-video bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center relative">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">{guide.image}</span>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-60" />
                  </div>
                  <div className="p-5 relative">
                    <span className="text-xs text-orange-400 font-bold uppercase tracking-wider">{guide.category}</span>
                    <h3 className="text-lg font-bold text-gray-100 mt-1.5 mb-2 group-hover:text-orange-400 transition-colors line-clamp-2 leading-snug">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2">{guide.excerpt}</p>
                    <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                       <span className="text-xs text-gray-500">5 min læsning</span>
                       <span className="text-xs font-bold text-orange-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Læs guide <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                       </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-10">
              <button className="btn bg-transparent border border-white/20 text-gray-300 hover:text-white hover:border-orange-500 hover:bg-orange-500/10 px-8 py-3 rounded-xl font-medium transition-all">
                Indlæs flere guides
              </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories */}
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-white mb-4">Kategorier i fokus</h3>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/guides/kategori/${cat.name.toLowerCase()}`}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl group-hover:scale-110 transition-transform">{cat.icon}</span>
                      <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{cat.name}</span>
                    </div>
                    <span className="text-xs text-gray-500 bg-white/5 px-2 py-0.5 rounded-full">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="relative bg-gradient-to-br from-orange-500/20 to-purple-600/20 border border-orange-500/20 rounded-2xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <h3 className="font-bold text-lg text-white mb-2 relative z-10">🔔 Få de bedste tilbud</h3>
              <p className="text-sm text-gray-400 mb-4 relative z-10">Tilmeld dig vores nyhedsbrev og få de seneste guides og tilbud.</p>
              <input
                type="email"
                placeholder="Din email"
                className="w-full px-4 py-3 rounded-xl bg-[#0f172a]/80 border border-white/10 text-white placeholder-gray-500 mb-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 relative z-10"
              />
              <button className="btn bg-gradient-to-r from-orange-500 to-orange-600 text-white w-full font-bold py-3 rounded-xl shadow-lg shadow-orange-500/20 hover:from-orange-400 hover:to-orange-500 transition-all relative z-10">
                Tilmeld
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
