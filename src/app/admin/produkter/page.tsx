import Link from 'next/link'

const products = [
  { id: '1', name: 'iPhone 15 Pro Max 256GB', brand: 'Apple', category: 'Mobiler', lowestPrice: 10999, prices: 12, status: 'Aktiv' },
  { id: '2', name: 'Samsung Galaxy S24 Ultra', brand: 'Samsung', category: 'Mobiler', lowestPrice: 11499, prices: 8, status: 'Aktiv' },
  { id: '3', name: 'Sony WH-1000XM5', brand: 'Sony', category: 'Lyd', lowestPrice: 2499, prices: 15, status: 'Aktiv' },
  { id: '4', name: 'MacBook Air M3', brand: 'Apple', category: 'Computere', lowestPrice: 10999, prices: 10, status: 'Aktiv' },
  { id: '5', name: 'PlayStation 5', brand: 'Sony', category: 'Gaming', lowestPrice: 4499, prices: 6, status: 'Udsolgt' },
  { id: '6', name: 'LG OLED C3 55"', brand: 'LG', category: 'TV', lowestPrice: 8999, prices: 9, status: 'Aktiv' },
  { id: '7', name: 'Dyson V15 Detect', brand: 'Dyson', category: 'Hvidevarer', lowestPrice: 5499, prices: 7, status: 'Aktiv' },
  { id: '8', name: 'Nintendo Switch OLED', brand: 'Nintendo', category: 'Gaming', lowestPrice: 2799, prices: 11, status: 'Aktiv' },
]

export default function AdminProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Produkter</h1>
          <p className="text-[var(--muted-foreground)]">Administrer produkter i databasen</p>
        </div>
        <Link href="/admin/produkter/ny" className="btn btn-primary">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tilføj produkt
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg p-4 border border-[var(--border)] flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="search-bar">
            <svg className="w-5 h-5 text-[var(--muted-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input type="text" placeholder="Søg efter produkter..." />
          </div>
        </div>
        <select className="px-4 py-2 border border-[var(--border)] rounded-lg">
          <option>Alle kategorier</option>
          <option>Mobiler</option>
          <option>Computere</option>
          <option>Lyd</option>
          <option>TV</option>
          <option>Gaming</option>
        </select>
        <select className="px-4 py-2 border border-[var(--border)] rounded-lg">
          <option>Alle status</option>
          <option>Aktiv</option>
          <option>Udsolgt</option>
          <option>Inaktiv</option>
        </select>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-lg border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--muted)]">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">
                  <input type="checkbox" className="w-4 h-4 rounded border-[var(--border)]" />
                </th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Produkt</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Brand</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Kategori</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Laveste pris</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Priser</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Handlinger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-[var(--muted)] transition-colors">
                  <td className="px-6 py-4">
                    <input type="checkbox" className="w-4 h-4 rounded border-[var(--border)]" />
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[var(--muted)] rounded flex items-center justify-center text-lg">
                        📦
                      </div>
                      <span className="font-medium">{product.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-[var(--muted-foreground)]">{product.brand}</td>
                  <td className="px-6 py-4 text-[var(--muted-foreground)]">{product.category}</td>
                  <td className="px-6 py-4 font-medium text-[var(--primary)]">{product.lowestPrice.toLocaleString('da-DK')} kr.</td>
                  <td className="px-6 py-4">{product.prices} butikker</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      product.status === 'Aktiv' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {product.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-[var(--border)] rounded transition-colors" title="Rediger">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-[var(--border)] rounded transition-colors" title="Se priser">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </button>
                      <button className="p-2 hover:bg-red-100 text-red-500 rounded transition-colors" title="Slet">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="px-6 py-4 border-t border-[var(--border)] flex items-center justify-between">
          <p className="text-sm text-[var(--muted-foreground)]">
            Viser 1-8 af 12,456 produkter
          </p>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-[var(--border)] rounded hover:bg-[var(--muted)] transition-colors">
              Forrige
            </button>
            <button className="px-3 py-1 bg-[var(--primary)] text-white rounded">1</button>
            <button className="px-3 py-1 border border-[var(--border)] rounded hover:bg-[var(--muted)] transition-colors">2</button>
            <button className="px-3 py-1 border border-[var(--border)] rounded hover:bg-[var(--muted)] transition-colors">3</button>
            <button className="px-3 py-1 border border-[var(--border)] rounded hover:bg-[var(--muted)] transition-colors">
              Næste
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
