import Link from 'next/link'

const deals = [
  { id: '1', name: 'Sony WH-1000XM5', oldPrice: 2999, price: 2499, drop: 500, discount: 17, image: '🎧', category: 'Lyd' },
  { id: '2', name: 'Samsung Galaxy S23', oldPrice: 6799, price: 5999, drop: 800, discount: 12, image: '📱', category: 'Mobiler' },
  { id: '3', name: 'LEGO Star Wars Set', oldPrice: 6100, price: 5800, drop: 300, discount: 5, image: '🚀', category: 'Legetøj' },
  { id: '4', name: 'KitchenAid Artisan', oldPrice: 5599, price: 4999, drop: 600, discount: 11, image: '🍳', category: 'Køkken' },
  { id: '5', name: 'Philips Hue Starter Kit', oldPrice: 1399, price: 1099, drop: 300, discount: 21, image: '💡', category: 'Smart Home' },
  { id: '6', name: 'Garmin Fenix 7 Solar', oldPrice: 6499, price: 5699, drop: 800, discount: 12, image: '⌚', category: 'Sport' },
  { id: '7', name: 'Apple iPad Air M1', oldPrice: 5999, price: 5299, drop: 700, discount: 12, image: '📱', category: 'Tablets' },
  { id: '8', name: 'Roborock S8 Ultra', oldPrice: 9999, price: 8499, drop: 1500, discount: 15, image: '🤖', category: 'Hvidevarer' },
  { id: '9', name: 'Dell XPS 13 Plus', oldPrice: 14499, price: 12999, drop: 1500, discount: 10, image: '💻', category: 'Computere' },
  { id: '10', name: 'Oral-B iO9 Series', oldPrice: 3299, price: 2799, drop: 500, discount: 15, image: '🪥', category: 'Personlig pleje' },
]

const categories = ['Alle', 'Lyd', 'Mobiler', 'Computere', 'Tablets', 'Smart Home', 'Sport', 'Køkken', 'Hvidevarer']

export default function PrisfaldPage() {
  return (
    <div className="bg-[#0f172a] min-h-screen text-gray-100">
      {/* Header - Hero Style */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 to-orange-500/10" />
        <div className="absolute top-10 right-10 w-72 h-72 bg-orange-500/20 rounded-full blur-3xl" />
        <div className="container-prisguiden py-12 lg:py-16 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold uppercase tracking-wider mb-4">
            🔥 Daglige Tilbud
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Dagens <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">Prisfald</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            De bedste tilbud og prisfald lige nu – opdateret i realtid
          </p>
        </div>
      </div>

      <div className="container-prisguiden py-8 lg:py-12">
        {/* Category Filters - Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                index === 0 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/20' 
                  : 'bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-orange-500/30 hover:bg-orange-500/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort & Filter Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 p-4 bg-white/5 rounded-xl border border-white/5">
          <p className="text-gray-400">
            <span className="text-white font-bold">{deals.length}</span> produkter med prisfald
          </p>
          <select className="bg-[#1e293b] border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500">
            <option>Sorter efter: Største prisfald</option>
            <option>Sorter efter: Højeste rabat %</option>
            <option>Sorter efter: Laveste pris</option>
            <option>Sorter efter: Nyeste</option>
          </select>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Link key={deal.id} href={`/produkt/${deal.id}`} className="group relative bg-[#1e293b]/40 hover:bg-[#1e293b]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              {/* Discount Badge */}
              <span className="absolute top-3 right-3 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full z-10 shadow-lg">
                -{deal.discount}%
              </span>

              {/* Image */}
              <div className="aspect-square bg-gradient-to-br from-white/5 to-white/0 flex items-center justify-center relative">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-xl">{deal.image}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e293b] via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <span className="text-xs text-gray-500 font-medium uppercase tracking-wide">{deal.category}</span>
                <h3 className="font-semibold text-gray-100 group-hover:text-orange-400 transition-colors">{deal.name}</h3>
                
                <div className="flex items-baseline gap-2 pt-1">
                  <span className="text-orange-400 font-bold text-xl">{deal.price.toLocaleString('da-DK')} kr.</span>
                  <span className="text-gray-500 line-through text-sm">{deal.oldPrice.toLocaleString('da-DK')} kr.</span>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-green-400 bg-green-500/10 px-3 py-1.5 rounded-lg w-fit">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">{deal.drop.toLocaleString('da-DK')} kr. prisfald</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/30 transition-colors">
            ←
          </button>
          <button className="w-10 h-10 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium shadow-lg shadow-orange-500/20">1</button>
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/30 transition-colors">2</button>
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/30 transition-colors">3</button>
          <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/30 transition-colors">12</button>
          <button className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500/30 transition-colors">
            →
          </button>
        </div>
      </div>
    </div>
  )
}
