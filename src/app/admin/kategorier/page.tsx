import Link from 'next/link'

const categories = [
  { id: '1', name: 'Elektronik', slug: 'elektronik', products: 5234, children: 8, seoTitle: 'Elektronik - Sammenlign Priser | Prisguiden.dk', seoDesc: 'Find de bedste priser på elektronik. Sammenlign priser fra hundredvis af butikker.' },
  { id: '2', name: 'Computere', slug: 'computere', products: 2145, children: 5, seoTitle: 'Computere - Sammenlign Priser | Prisguiden.dk', seoDesc: 'Sammenlign priser på computere, laptops og tilbehør.' },
  { id: '3', name: 'Hvidevarer', slug: 'hvidevarer', products: 1823, children: 6, seoTitle: 'Hvidevarer - Sammenlign Priser | Prisguiden.dk', seoDesc: 'Find de bedste tilbud på hvidevarer.' },
  { id: '4', name: 'Mobiler', slug: 'mobiler', products: 987, children: 4, seoTitle: 'Mobiler - Sammenlign Priser | Prisguiden.dk', seoDesc: 'Sammenlign priser på mobiltelefoner.' },
  { id: '5', name: 'Lyd & TV', slug: 'lyd-tv', products: 1567, children: 7, seoTitle: 'Lyd & TV - Sammenlign Priser | Prisguiden.dk', seoDesc: 'Find de bedste priser på TV, højttalere og høretelefoner.' },
]

export default function AdminCategoriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Kategorier</h1>
          <p className="text-[var(--muted-foreground)]">Administrer kategorier og SEO-indstillinger</p>
        </div>
        <button className="btn btn-primary">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tilføj kategori
        </button>
      </div>

      {/* SEO Overview */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h3 className="font-semibold text-green-800 mb-2">📈 SEO Status</h3>
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-green-700">Kategorier med SEO-titel:</p>
            <p className="font-bold text-green-800">{categories.length}/{categories.length} (100%)</p>
          </div>
          <div>
            <p className="text-green-700">Kategorier med meta-beskrivelse:</p>
            <p className="font-bold text-green-800">{categories.length}/{categories.length} (100%)</p>
          </div>
          <div>
            <p className="text-green-700">Kategorier i sitemap:</p>
            <p className="font-bold text-green-800">{categories.length} sider</p>
          </div>
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white rounded-lg border border-[var(--border)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--muted)]">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Kategori</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Slug</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Produkter</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Underkategorier</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">SEO</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Handlinger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {categories.map((cat) => (
                <tr key={cat.id} className="hover:bg-[var(--muted)] transition-colors">
                  <td className="px-6 py-4 font-medium">{cat.name}</td>
                  <td className="px-6 py-4 font-mono text-sm text-[var(--muted-foreground)]">{cat.slug}</td>
                  <td className="px-6 py-4">{cat.products.toLocaleString('da-DK')}</td>
                  <td className="px-6 py-4">{cat.children}</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-700">
                      ✓ Komplet
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="p-2 hover:bg-[var(--border)] rounded transition-colors" title="Rediger SEO">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                        </svg>
                      </button>
                      <Link href={`/kategori/${cat.slug}`} className="p-2 hover:bg-[var(--border)] rounded transition-colors" title="Se side">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Category Form - Example */}
      <div className="bg-white rounded-lg border border-[var(--border)] p-6">
        <h2 className="text-xl font-bold mb-4">Rediger Kategori SEO</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Kategori Navn</label>
            <input type="text" value="Elektronik" className="w-full px-4 py-2 border border-[var(--border)] rounded-lg" readOnly />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">SEO Titel (60 tegn max)</label>
            <input 
              type="text" 
              defaultValue="Elektronik - Sammenlign Priser | Prisguiden.dk"
              className="w-full px-4 py-2 border border-[var(--border)] rounded-lg"
            />
            <p className="text-xs text-[var(--muted-foreground)] mt-1">47/60 tegn</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Meta Beskrivelse (160 tegn max)</label>
            <textarea 
              rows={3}
              defaultValue="Find de bedste priser på elektronik. Sammenlign priser fra hundredvis af butikker."
              className="w-full px-4 py-2 border border-[var(--border)] rounded-lg"
            />
            <p className="text-xs text-[var(--muted-foreground)] mt-1">82/160 tegn</p>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Kategori Beskrivelse (til kategoriside)</label>
            <textarea 
              rows={4}
              placeholder="Skriv en unik beskrivelse af kategorien som vises på kategorisiden..."
              className="w-full px-4 py-2 border border-[var(--border)] rounded-lg"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Gem SEO Indstillinger
          </button>
        </form>
      </div>
    </div>
  )
}
