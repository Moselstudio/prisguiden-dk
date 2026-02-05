import Link from 'next/link'

// Demo products
const products = [
  { id: '1', name: 'Apple MacBook Pro 14" M3 Pro (2023) 18GB/512GB', slug: 'macbook-pro-14-m3', brand: 'Apple', lowest_price: 17999, highest_price: 19999 },
  { id: '2', name: 'Dell XPS 13 Plus 9320 - i7/16GB/1TB', slug: 'dell-xps-13-plus', brand: 'Dell', lowest_price: 12999, highest_price: 14499 },
  { id: '3', name: 'Lenovo ThinkPad X1 Carbon Gen 11', slug: 'lenovo-thinkpad-x1', brand: 'Lenovo', lowest_price: 14499, highest_price: 15999 },
  { id: '4', name: 'HP Spectre x360 14" 2-in-1 Laptop', slug: 'hp-spectre-x360', brand: 'HP', lowest_price: 11999, highest_price: 13499 },
  { id: '5', name: 'ASUS ROG Zephyrus G14 Gaming Laptop', slug: 'asus-rog-zephyrus-g14', brand: 'ASUS', lowest_price: 13999, highest_price: 15499 },
  { id: '6', name: 'Microsoft Surface Laptop 5', slug: 'surface-laptop-5', brand: 'Microsoft', lowest_price: 10999, highest_price: 12499 },
]

const filters = [
  { name: 'Mærke', options: ['Apple', 'Dell', 'Lenovo', 'HP', 'ASUS', 'Microsoft'] },
  { name: 'Pris', options: ['Under 10.000 kr', '10.000 - 15.000 kr', '15.000 - 20.000 kr', 'Over 20.000 kr'] },
  { name: 'Skærmstørrelse', options: ['13"', '14"', '15"', '16"'] },
  { name: 'Processor', options: ['Intel Core i5', 'Intel Core i7', 'Intel Core i9', 'Apple M3', 'AMD Ryzen'] },
]

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const categoryName = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')

  return (
    <div className="bg-[#0f172a] min-h-screen text-gray-100">
      {/* Breadcrumb - Glass */}
      <div className="border-b border-white/5 bg-[#0f172a]/50 backdrop-blur-md sticky top-16 z-40">
        <div className="container-prisguiden py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-orange-400 transition-colors">Forside</Link>
            <span>/</span>
            <span className="text-white font-medium">{categoryName}</span>
          </nav>
        </div>
      </div>

      <div className="container-prisguiden py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters - Glass Panel */}
          <aside className="w-full lg:w-72 shrink-0">
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 sticky top-28">
              <div className="flex justify-between items-center mb-6">
                 <h2 className="font-bold text-xl text-white">Filtre</h2>
                 <button className="text-orange-400 text-xs font-medium hover:text-orange-300">Nulstil</button>
              </div>
              
              {filters.map((filter, i) => (
                <div key={filter.name} className={`py-5 ${i !== 0 ? 'border-t border-white/5' : ''}`}>
                  <h3 className="font-semibold text-sm text-gray-300 mb-3 uppercase tracking-wider">{filter.name}</h3>
                  <div className="space-y-2.5">
                    {filter.options.map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center">
                          <input type="checkbox" className="peer appearance-none w-5 h-5 border-2 border-slate-600 rounded bg-transparent checked:bg-orange-500 checked:border-orange-500 transition-all cursor-pointer" />
                          <svg className="absolute w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 pointer-events-none left-[3px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                        </div>
                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="btn bg-orange-600 hover:bg-orange-500 text-white border-0 w-full mt-4 shadow-lg shadow-orange-600/20 py-3 rounded-xl font-bold">
                Anvend filtre
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
              <div>
                <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">{categoryName}</h1>
                <p className="text-gray-400 font-medium">{products.length} produkter fundet</p>
              </div>
              <div className="flex items-center gap-4 bg-[#1e293b]/50 p-1.5 rounded-xl border border-white/5">
                <select className="bg-transparent border-none text-sm text-white focus:ring-0 cursor-pointer pr-10 py-2 pl-3 font-medium [&>option]:text-black">
                  <option>Sorter efter: Laveste pris</option>
                  <option>Sorter efter: Højeste pris</option>
                  <option>Sorter efter: Mest populære</option>
                  <option>Sorter efter: Nyeste</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {products.map((product) => (
                <Link key={product.id} href={`/produkt/${product.slug}`} className="group relative bg-[#1e293b]/40 hover:bg-[#1e293b]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                  
                  {/* Image Area */}
                  <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-transparent relative flex items-center justify-center p-8 group-hover:from-white/10 transition-colors">
                    <span className="text-7xl group-hover:scale-110 transition-transform duration-500 drop-shadow-2xl text-shadow">💻</span>
                    
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                       <button className="bg-[#0f172a]/80 p-2 rounded-full text-white hover:bg-orange-500 hover:text-white transition-colors border border-white/10">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                       </button>
                    </div>

                    {product.highest_price > product.lowest_price && (
                      <span className="absolute top-3 left-3 bg-green-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-lg border border-green-400/20 shadow-lg shadow-green-500/10">
                        Spar {Math.round((1 - product.lowest_price / product.highest_price) * 100)}%
                      </span>
                    )}
                  </div>

                  {/* Content Area */}
                  <div className="p-5">
                    <p className="text-xs text-orange-400 font-bold uppercase tracking-wider mb-1.5">{product.brand}</p>
                    <h3 className="font-bold text-gray-100 text-lg leading-snug mb-4 group-hover:text-orange-400 transition-colors line-clamp-2 min-h-[56px]">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className="text-white font-extrabold text-2xl tracking-tight">
                        {product.lowest_price.toLocaleString('da-DK')} kr.
                      </span>
                      {product.highest_price > product.lowest_price && (
                        <span className="text-gray-500 line-through text-xs font-medium decoration-gray-600">
                          {product.highest_price.toLocaleString('da-DK')} kr.
                        </span>
                      )}
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t border-white/5 mt-2">
                       <p className="text-xs text-gray-400 font-medium">
                         Fra 12 butikker
                       </p>
                       <span className="text-xs font-bold text-orange-400 group-hover:translate-x-1 transition-transform flex items-center gap-1">
                          Se priser <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                       </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination - Glass */}
            <div className="flex justify-center gap-3 mt-12">
              <button className="w-11 h-11 rounded-xl bg-[#1e293b] border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all">←</button>
              <button className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white font-bold shadow-lg shadow-orange-500/20">1</button>
              <button className="w-11 h-11 rounded-xl bg-[#1e293b] border border-white/10 text-gray-400 font-medium hover:bg-white/5 hover:text-white transition-all">2</button>
              <button className="w-11 h-11 rounded-xl bg-[#1e293b] border border-white/10 text-gray-400 font-medium hover:bg-white/5 hover:text-white transition-all">3</button>
              <button className="w-11 h-11 rounded-xl bg-[#1e293b] border border-white/10 text-white flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition-all">→</button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
