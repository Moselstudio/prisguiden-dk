import Link from 'next/link'

const categories = [
  { id: 'mobiler', name: 'Mobiler & Tilbehør', icon: '📱' },
  { id: 'elektronik', name: 'Elektronik', icon: '💻' },
  { id: 'hjem', name: 'Hus & Have', icon: '🏡' },
  { id: 'mode', name: 'Mode', icon: '👕' },
  { id: 'boern', name: 'Børn & Legetøj', icon: '🧸' },
  { id: 'sport', name: 'Sport', icon: '⚽' },
  { id: 'skoenhed', name: 'Skønhed & Helse', icon: '💄' },
  { id: 'bil', name: 'Bil & Motor', icon: '🚗' },
  { id: 'supermarked', name: 'Supermarked', icon: '🛒' },
  { id: 'kontor', name: 'Kontor & Erhverv', icon: '📎' },
  { id: 'gaming', name: 'Gaming', icon: '🎮' },
  { id: 'hvidevarer', name: 'Hvidevarer', icon: '🧺' },
  { id: 'foto', name: 'Foto & Video', icon: '📷' },
  { id: 'lyd', name: 'Lyd & Hi-Fi', icon: '🎧' },
]

export default function KategorierPage() {
  return (
    <div className="min-h-screen py-12 container-prisguiden">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gradient">
          Udforsk Kataloget
        </h1>
        <p className="text-[var(--muted-foreground)] text-lg max-w-2xl mx-auto">
          Find de bedste priser på tværs af {categories.length} hovedkategorier og tusindvis af produkter.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            href={`/kategori/${category.id}`} 
            key={category.id}
            className="glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group transition-all duration-300 hover:bg-white/5"
          >
            <span className="text-5xl bg-gradient-to-br from-white/10 to-transparent p-4 rounded-full border border-white/5 group-hover:scale-110 transition-transform">
              {category.icon}
            </span>
            <span className="font-bold text-lg group-hover:text-[var(--primary)] transition-colors">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
