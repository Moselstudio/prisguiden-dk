import Link from 'next/link'

const stats = [
  { label: 'Produkter', value: '12,456', change: '+123', icon: '📦' },
  { label: 'Butikker', value: '245', change: '+5', icon: '🏪' },
  { label: 'Brugere', value: '34,567', change: '+234', icon: '👥' },
  { label: 'Prisalarmer', value: '8,923', change: '+89', icon: '🔔' },
]

const recentProducts = [
  { id: '1', name: 'iPhone 15 Pro Max', category: 'Mobiler', prices: 12, status: 'Aktiv' },
  { id: '2', name: 'Samsung Galaxy S24', category: 'Mobiler', prices: 8, status: 'Aktiv' },
  { id: '3', name: 'Sony WH-1000XM5', category: 'Lyd', prices: 15, status: 'Aktiv' },
  { id: '4', name: 'MacBook Air M3', category: 'Computere', prices: 10, status: 'Aktiv' },
  { id: '5', name: 'PlayStation 5', category: 'Gaming', prices: 6, status: 'Udsolgt' },
]

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-[var(--muted-foreground)]">Velkommen til Prisguiden Admin Panel</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white rounded-lg p-6 border border-[var(--border)]">
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{stat.icon}</span>
              <span className="text-xs text-green-500 font-medium bg-green-50 px-2 py-1 rounded">
                {stat.change}
              </span>
            </div>
            <p className="text-2xl font-bold">{stat.value}</p>
            <p className="text-sm text-[var(--muted-foreground)]">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link href="/admin/produkter/ny" className="bg-white rounded-lg p-6 border border-[var(--border)] hover:border-[var(--primary)] transition-colors flex items-center gap-4">
          <div className="w-12 h-12 bg-[var(--primary)] rounded-lg flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Tilføj produkt</h3>
            <p className="text-sm text-[var(--muted-foreground)]">Opret et nyt produkt</p>
          </div>
        </Link>
        <Link href="/admin/butikker/ny" className="bg-white rounded-lg p-6 border border-[var(--border)] hover:border-[var(--primary)] transition-colors flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Tilføj butik</h3>
            <p className="text-sm text-[var(--muted-foreground)]">Opret en ny butik</p>
          </div>
        </Link>
        <Link href="/admin/guides/ny" className="bg-white rounded-lg p-6 border border-[var(--border)] hover:border-[var(--primary)] transition-colors flex items-center gap-4">
          <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold">Skriv guide</h3>
            <p className="text-sm text-[var(--muted-foreground)]">Opret en ny guide</p>
          </div>
        </Link>
      </div>

      {/* Recent Products Table */}
      <div className="bg-white rounded-lg border border-[var(--border)]">
        <div className="p-6 border-b border-[var(--border)] flex justify-between items-center">
          <h2 className="text-lg font-bold">Seneste produkter</h2>
          <Link href="/admin/produkter" className="text-[var(--primary)] text-sm font-medium hover:underline">
            Se alle →
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--muted)]">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Produkt</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Kategori</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Priser</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Handlinger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {recentProducts.map((product) => (
                <tr key={product.id} className="hover:bg-[var(--muted)] transition-colors">
                  <td className="px-6 py-4 font-medium">{product.name}</td>
                  <td className="px-6 py-4 text-[var(--muted-foreground)]">{product.category}</td>
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
                      <button className="p-1 hover:bg-[var(--border)] rounded transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <button className="p-1 hover:bg-red-100 text-red-500 rounded transition-colors">
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
      </div>
    </div>
  )
}
