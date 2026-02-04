import Link from 'next/link'

// Demo feeds - will be stored in database
const feeds = [
  { 
    id: '1', 
    name: '3-Nordic', 
    url: 'https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=53330&bannerid=100490&feedid=2883',
    products: 1245,
    lastSync: '2 timer siden',
    status: 'active',
    matched: 892,
    unmatched: 353
  },
  { 
    id: '2', 
    name: 'Elgiganten', 
    url: 'https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=53330&bannerid=12345&feedid=1000',
    products: 5670,
    lastSync: '1 time siden',
    status: 'active',
    matched: 5432,
    unmatched: 238
  },
  { 
    id: '3', 
    name: 'Power', 
    url: 'https://www.partner-ads.com/dk/feed_udlaes.php?partnerid=53330&bannerid=54321&feedid=2000',
    products: 4235,
    lastSync: '30 min siden',
    status: 'active',
    matched: 4100,
    unmatched: 135
  },
]

export default function AdminFeedsPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">Partner-Ads Feeds</h1>
          <p className="text-[var(--muted-foreground)]">Administrer produktfeeds fra Partner-Ads</p>
        </div>
        <Link href="/admin/feeds/ny" className="btn btn-primary">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Tilføj feed
        </Link>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
          <p className="text-sm text-[var(--muted-foreground)]">Aktive Feeds</p>
          <p className="text-3xl font-bold">{feeds.length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
          <p className="text-sm text-[var(--muted-foreground)]">Totalt Produkter</p>
          <p className="text-3xl font-bold">{feeds.reduce((a, b) => a + b.products, 0).toLocaleString('da-DK')}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
          <p className="text-sm text-[var(--muted-foreground)]">Matchede Produkter</p>
          <p className="text-3xl font-bold text-green-600">{feeds.reduce((a, b) => a + b.matched, 0).toLocaleString('da-DK')}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
          <p className="text-sm text-[var(--muted-foreground)]">Umatchede Produkter</p>
          <p className="text-3xl font-bold text-orange-500">{feeds.reduce((a, b) => a + b.unmatched, 0).toLocaleString('da-DK')}</p>
        </div>
      </div>

      {/* Feeds Table */}
      <div className="bg-white rounded-lg border border-[var(--border)]">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[var(--muted)]">
              <tr>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Feed</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Produkter</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Matchede</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Umatchede</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Sidst Synkroniseret</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                <th className="text-left px-6 py-3 text-sm font-medium text-[var(--muted-foreground)]">Handlinger</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {feeds.map((feed) => (
                <tr key={feed.id} className="hover:bg-[var(--muted)] transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="font-medium">{feed.name}</p>
                      <p className="text-xs text-[var(--muted-foreground)] truncate max-w-xs">{feed.url}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium">{feed.products.toLocaleString('da-DK')}</td>
                  <td className="px-6 py-4">
                    <span className="text-green-600 font-medium">{feed.matched.toLocaleString('da-DK')}</span>
                    <span className="text-[var(--muted-foreground)] text-sm"> ({Math.round(feed.matched / feed.products * 100)}%)</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="text-orange-500 font-medium">{feed.unmatched.toLocaleString('da-DK')}</span>
                  </td>
                  <td className="px-6 py-4 text-[var(--muted-foreground)]">{feed.lastSync}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded ${
                      feed.status === 'active' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-red-100 text-red-700'
                    }`}>
                      {feed.status === 'active' ? 'Aktiv' : 'Inaktiv'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex gap-2">
                      <button className="btn btn-secondary text-sm" title="Synkroniser">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Sync
                      </button>
                      <Link href={`/admin/feeds/${feed.id}/matching`} className="btn btn-outline text-sm">
                        Match
                      </Link>
                      <button className="p-2 hover:bg-[var(--border)] rounded transition-colors" title="Rediger">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
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

      {/* Add Feed Form */}
      <div className="bg-white rounded-lg border border-[var(--border)] p-6">
        <h2 className="text-xl font-bold mb-4">Tilføj Nyt Feed</h2>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Feed Navn</label>
              <input 
                type="text" 
                placeholder="F.eks. Elgiganten" 
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Partner-Ads Feed URL</label>
              <input 
                type="url" 
                placeholder="https://www.partner-ads.com/dk/feed_udlaes.php?..." 
                className="w-full px-4 py-2 border border-[var(--border)] rounded-lg"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="btn btn-primary">
              Tilføj og Hent Feed
            </button>
            <button type="button" className="btn btn-secondary">
              Test Feed URL
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
