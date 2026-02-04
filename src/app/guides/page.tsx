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
    <div className="bg-[var(--muted)] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-[var(--border)]">
        <div className="container-prisguiden py-8">
          <h1 className="text-4xl font-bold mb-2">Bedst i Test & Guides 📚</h1>
          <p className="text-lg text-[var(--muted-foreground)]">Ekspertanmeldelser og købsguider til at hjælpe dig med at træffe det rigtige valg</p>
        </div>
      </div>

      <div className="container-prisguiden py-8">
        {/* Featured Guide */}
        <section className="mb-12">
          <Link href={`/guides/${featuredGuide.id}`} className="block bg-white rounded-lg overflow-hidden group">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] p-12 flex items-center justify-center">
                <span className="text-9xl">{featuredGuide.image}</span>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className="text-sm text-[var(--primary)] font-medium uppercase tracking-wide">{featuredGuide.category}</span>
                <h2 className="text-3xl font-bold mt-2 mb-4 group-hover:text-[var(--primary)] transition-colors">
                  {featuredGuide.title}
                </h2>
                <p className="text-[var(--muted-foreground)] mb-6">{featuredGuide.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-[var(--muted-foreground)]">
                  <span>Af {featuredGuide.author}</span>
                  <span>•</span>
                  <span>{featuredGuide.date}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <main className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Populære Guides</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <Link key={guide.id} href={`/guides/${guide.id}`} className="card bg-white group">
                  <div className="aspect-video bg-gradient-to-br from-[var(--muted)] to-[var(--border)] flex items-center justify-center">
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300">{guide.image}</span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-[var(--primary)] font-medium uppercase tracking-wide">{guide.category}</span>
                    <h3 className="text-lg font-bold mt-1 mb-2 group-hover:text-[var(--primary)] transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-sm text-[var(--muted-foreground)] line-clamp-2">{guide.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <button className="btn btn-outline">
                Indlæs flere guides
              </button>
            </div>
          </main>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories */}
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4">Kategorier i fokus</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={`/guides/kategori/${cat.name.toLowerCase()}`}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-[var(--muted)] transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{cat.icon}</span>
                      <span className="font-medium">{cat.name}</span>
                    </div>
                    <span className="text-sm text-[var(--muted-foreground)]">{cat.count}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-[var(--primary)] rounded-lg p-6 text-white">
              <h3 className="font-bold text-lg mb-2">Gå ikke glip af de bedste tilbud</h3>
              <p className="text-sm opacity-90 mb-4">Tilmeld dig vores nyhedsbrev og få de seneste guides og tilbud.</p>
              <input
                type="email"
                placeholder="Din email"
                className="w-full px-4 py-2 rounded-lg text-[var(--foreground)] mb-3"
              />
              <button className="btn bg-white text-[var(--primary)] w-full font-bold">
                Tilmeld
              </button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
