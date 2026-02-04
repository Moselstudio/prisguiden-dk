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
    <div className="bg-[var(--muted)] min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-[var(--border)]">
        <div className="container-prisguiden py-4">
          <nav className="flex items-center gap-2 text-sm">
            <Link href="/" className="text-[var(--muted-foreground)] hover:text-[var(--primary)]">Forside</Link>
            <span className="text-[var(--muted-foreground)]">/</span>
            <span className="font-medium">{categoryName}</span>
          </nav>
        </div>
      </div>

      <div className="container-prisguiden py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-lg p-6 sticky top-24">
              <h2 className="font-bold text-lg mb-4">Filtre</h2>
              
              {filters.map((filter) => (
                <div key={filter.name} className="mb-6">
                  <h3 className="font-semibold text-sm mb-3">{filter.name}</h3>
                  <div className="space-y-2">
                    {filter.options.map((option) => (
                      <label key={option} className="flex items-center gap-2 cursor-pointer">
                        <input type="checkbox" className="w-4 h-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]" />
                        <span className="text-sm">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
              
              <button className="btn btn-primary w-full mt-4">
                Anvend filtre
              </button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-3xl font-bold">{categoryName}</h1>
                <p className="text-[var(--muted-foreground)]">{products.length} produkter fundet</p>
              </div>
              <div className="flex items-center gap-4">
                <select className="bg-white border border-[var(--border)] rounded-lg px-4 py-2 text-sm">
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
                <Link key={product.id} href={`/produkt/${product.slug}`} className="card bg-white group">
                  <div className="aspect-square bg-[var(--muted)] relative flex items-center justify-center">
                    <span className="text-6xl">💻</span>
                    {product.highest_price > product.lowest_price && (
                      <span className="absolute top-3 right-3 bg-[var(--primary)] text-white text-xs font-bold px-2 py-1 rounded">
                        -{Math.round((1 - product.lowest_price / product.highest_price) * 100)}%
                      </span>
                    )}
                  </div>
                  <div className="p-4 space-y-2">
                    <p className="text-xs text-[var(--muted-foreground)] font-medium uppercase">{product.brand}</p>
                    <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[var(--primary)] font-bold text-lg">
                        {product.lowest_price.toLocaleString('da-DK')} kr.
                      </span>
                      {product.highest_price > product.lowest_price && (
                        <span className="text-[var(--muted-foreground)] line-through text-sm">
                          {product.highest_price.toLocaleString('da-DK')} kr.
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      Sammenlign priser fra 12 butikker
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-8">
              <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)]">
                ←
              </button>
              <button className="w-10 h-10 rounded-lg bg-[var(--primary)] text-white font-medium">1</button>
              <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)]">2</button>
              <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)]">3</button>
              <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)]">
                →
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
