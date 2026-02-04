import Link from 'next/link'

// Demo unmatched products from feed
const unmatchedProducts = [
  { 
    id: '1', 
    feedName: 'CT 10 - Sofabord i massiv eg og diameter 50 cm Højde 40 cm Ubehandlet',
    feedCategory: 'Dagligstue > Sofaborde > Nordisk designs',
    feedPrice: 1795,
    feedEan: '',
    feedRetailer: '3-nordic',
    suggestedMatches: [
      { id: 'p1', name: 'CT 10 Sofabord Eg 50cm', score: 92 },
      { id: 'p2', name: 'Sofabord Eg Massiv 50cm', score: 78 },
    ]
  },
  { 
    id: '2', 
    feedName: 'Sony WH-1000XM5 Trådløse Høretelefoner Sort',
    feedCategory: 'Elektronik > Lyd > Høretelefoner',
    feedPrice: 2499,
    feedEan: '4548736132606',
    feedRetailer: 'Elgiganten',
    suggestedMatches: [
      { id: 'p3', name: 'Sony WH-1000XM5 Wireless Headphones', score: 98 },
    ]
  },
  { 
    id: '3', 
    feedName: 'Apple iPhone 15 Pro Max 256GB NaturTitan',
    feedCategory: 'Mobiler > Smartphones > Apple',
    feedPrice: 10999,
    feedEan: '0194253939087',
    feedRetailer: 'Power',
    suggestedMatches: [
      { id: 'p4', name: 'Apple iPhone 15 Pro Max 256GB', score: 99 },
    ]
  },
]

export default async function FeedMatchingPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <nav className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] mb-2">
            <Link href="/admin/feeds" className="hover:text-[var(--primary)]">Feeds</Link>
            <span>/</span>
            <span>Produktmatching</span>
          </nav>
          <h1 className="text-2xl font-bold">Produktmatching</h1>
          <p className="text-[var(--muted-foreground)]">Match feed-produkter med eksisterende produkter i databasen</p>
        </div>
        <div className="flex gap-4">
          <button className="btn btn-secondary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
            </svg>
            Auto-Match Alle
          </button>
          <button className="btn btn-primary">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            Opret som nye produkter
          </button>
        </div>
      </div>

      {/* Matching Algorithm Info */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="font-semibold text-blue-800 mb-2">🧠 Automatisk Produktmatching</h3>
        <p className="text-sm text-blue-700">
          Matching-algoritmen bruger EAN-koder (hvis tilgængelig), produktnavn-lighed (fuzzy matching), 
          og kategori-sammenligning for at foreslå matches. Produkter med score over 90% matches automatisk.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
          <p className="text-sm text-[var(--muted-foreground)]">Venter på matching</p>
          <p className="text-3xl font-bold text-orange-500">{unmatchedProducts.length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
          <p className="text-sm text-[var(--muted-foreground)]">Med EAN-kode</p>
          <p className="text-3xl font-bold text-blue-500">{unmatchedProducts.filter(p => p.feedEan).length}</p>
        </div>
        <div className="bg-white rounded-lg p-6 border border-[var(--border)]">
          <p className="text-sm text-[var(--muted-foreground)]">Auto-match kandidater (90%+)</p>
          <p className="text-3xl font-bold text-green-500">
            {unmatchedProducts.filter(p => p.suggestedMatches.some(m => m.score >= 90)).length}
          </p>
        </div>
      </div>

      {/* Unmatched Products */}
      <div className="space-y-4">
        {unmatchedProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-lg border border-[var(--border)] p-6">
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Feed Product Info */}
              <div>
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded font-medium">
                  Fra {product.feedRetailer}
                </span>
                <h3 className="text-lg font-bold mt-2">{product.feedName}</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">{product.feedCategory}</p>
                <div className="mt-4 flex gap-4">
                  <div>
                    <p className="text-xs text-[var(--muted-foreground)]">Pris</p>
                    <p className="font-bold text-[var(--primary)]">{product.feedPrice.toLocaleString('da-DK')} kr.</p>
                  </div>
                  {product.feedEan && (
                    <div>
                      <p className="text-xs text-[var(--muted-foreground)]">EAN</p>
                      <p className="font-mono text-sm">{product.feedEan}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Suggested Matches */}
              <div className="border-l border-[var(--border)] pl-6">
                <h4 className="text-sm font-medium text-[var(--muted-foreground)] mb-3">Foreslåede Matches</h4>
                {product.suggestedMatches.length > 0 ? (
                  <div className="space-y-2">
                    {product.suggestedMatches.map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-3 bg-[var(--muted)] rounded-lg">
                        <div className="flex items-center gap-3">
                          <span className={`px-2 py-1 text-xs font-bold rounded ${
                            match.score >= 90 ? 'bg-green-100 text-green-700' :
                            match.score >= 70 ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {match.score}%
                          </span>
                          <span className="font-medium">{match.name}</span>
                        </div>
                        <button className="btn btn-primary text-sm">
                          Match
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-[var(--muted-foreground)] italic">Ingen matches fundet</p>
                )}
                
                <div className="mt-4 pt-4 border-t border-[var(--border)] flex gap-2">
                  <button className="btn btn-outline text-sm flex-1">
                    Opret som nyt produkt
                  </button>
                  <button className="btn btn-secondary text-sm">
                    Ignorer
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
