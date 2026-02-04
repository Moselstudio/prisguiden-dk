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
    <div className="bg-[var(--muted)] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border)]">
        <div className="container-prisguiden py-8">
          <h1 className="text-4xl font-bold mb-2">Dagens Prisfald 🔥</h1>
          <p className="text-lg text-[var(--muted-foreground)]">De bedste tilbud og prisfald lige nu</p>
        </div>
      </div>

      <div className="container-prisguiden py-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`category-pill ${index === 0 ? 'bg-[var(--primary)] text-white' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-[var(--muted-foreground)]">{deals.length} produkter med prisfald</p>
          <select className="bg-white border border-[var(--border)] rounded-lg px-4 py-2 text-sm">
            <option>Sorter efter: Største prisfald</option>
            <option>Sorter efter: Højeste rabat %</option>
            <option>Sorter efter: Laveste pris</option>
            <option>Sorter efter: Nyeste</option>
          </select>
        </div>

        {/* Deals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {deals.map((deal) => (
            <Link key={deal.id} href={`/produkt/${deal.id}`} className="card bg-white relative group">
              {/* Discount Badge */}
              <span className="absolute top-3 right-3 bg-[var(--primary)] text-white text-xs font-bold px-2 py-1 rounded z-10">
                -{deal.discount}%
              </span>

              {/* Image */}
              <div className="aspect-square bg-[var(--muted)] flex items-center justify-center relative overflow-hidden">
                <span className="text-7xl group-hover:scale-110 transition-transform duration-300">{deal.image}</span>
              </div>

              {/* Content */}
              <div className="p-4 space-y-2">
                <span className="text-xs text-[var(--muted-foreground)] font-medium uppercase">{deal.category}</span>
                <h3 className="font-semibold group-hover:text-[var(--primary)] transition-colors">{deal.name}</h3>
                
                <div className="flex items-baseline gap-2">
                  <span className="text-[var(--primary)] font-bold text-xl">{deal.price.toLocaleString('da-DK')} kr.</span>
                  <span className="text-[var(--muted-foreground)] line-through text-sm">{deal.oldPrice.toLocaleString('da-DK')} kr.</span>
                </div>

                <div className="price-drop text-sm flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M14.707 10.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V5a1 1 0 012 0v7.586l2.293-2.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {deal.drop.toLocaleString('da-DK')} kr. prisfald
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2 mt-12">
          <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-white">
            ←
          </button>
          <button className="w-10 h-10 rounded-lg bg-[var(--primary)] text-white font-medium">1</button>
          <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-white">2</button>
          <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-white">3</button>
          <span className="w-10 h-10 flex items-center justify-center">...</span>
          <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-white">12</button>
          <button className="w-10 h-10 rounded-lg border border-[var(--border)] flex items-center justify-center hover:bg-white">
            →
          </button>
        </div>
      </div>
    </div>
  )
}
