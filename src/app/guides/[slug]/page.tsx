import Link from 'next/link'
import { notFound } from 'next/navigation'

// Demo guides data - in production, fetch from Supabase
const guidesData: Record<string, {
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  date: string
  readTime: string
  image: string
  relatedProducts: Array<{ id: string; name: string; price: number; image: string }>
}> = {
  '1': {
    title: 'Bedste vaskemaskine 2024: Vi har testet de 10 mest populære modeller',
    excerpt: 'Vi har testet de 10 mest populære vaskemaskiner på markedet og fundet frem til de bedste modeller til enhver pengepung.',
    content: `
      <h2>Introduktion</h2>
      <p>At vælge den rigtige vaskemaskine kan være en udfordring med så mange modeller på markedet. Vi har testet de 10 mest populære vaskemaskiner for at hjælpe dig med at træffe det rigtige valg.</p>
      
      <h2>Vores testmetode</h2>
      <p>Vi har testet hver vaskemaskine på følgende parametre:</p>
      <ul>
        <li>Vaskeeffektivitet</li>
        <li>Energiforbrug</li>
        <li>Støjniveau</li>
        <li>Brugervenlighed</li>
        <li>Pris vs. kvalitet</li>
      </ul>
      
      <h2>Top 3: Vores anbefalinger</h2>
      
      <h3>1. Miele W1 Excellence - Bedst i test</h3>
      <p>Miele leverer som altid kvalitet i verdensklasse. W1 Excellence er en maskine der holder i mange år og vasker upåklageligt rent.</p>
      
      <h3>2. Bosch Serie 8 - Bedste til prisen</h3>
      <p>Bosch Serie 8 giver dig premium-funktioner til en mere fornuftig pris. Perfekt til den kvalitetsbevidste forbruger.</p>
      
      <h3>3. Samsung QuickDrive - Mest innovative</h3>
      <p>Med QuickDrive-teknologien kan du vaske op til 50% hurtigere uden at gå på kompromis med resultatet.</p>
      
      <h2>Konklusion</h2>
      <p>Uanset dit budget findes der en god vaskemaskine til dig. Det vigtigste er at overveje dine behov og vælge derefter.</p>
    `,
    category: 'Hvidevarer',
    author: 'Marie Hansen',
    date: '15. januar 2024',
    readTime: '8 min',
    image: '🧺',
    relatedProducts: [
      { id: 'miele-w1', name: 'Miele W1 Excellence', price: 12999, image: '🧺' },
      { id: 'bosch-serie8', name: 'Bosch Serie 8', price: 8999, image: '🧺' },
      { id: 'samsung-qd', name: 'Samsung QuickDrive', price: 7499, image: '🧺' },
    ]
  },
  '2': {
    title: 'Bedste Noise Cancelling Høretelefoner (2024)',
    excerpt: 'Komplet guide til de bedste ANC høretelefoner på markedet.',
    content: `
      <h2>Hvad er Noise Cancelling?</h2>
      <p>Active Noise Cancelling (ANC) er en teknologi der bruger mikrofoner til at opfange omgivende lyde og skaber en modlyd der effektivt eliminerer støj.</p>
      
      <h2>Top 5 ANC Høretelefoner</h2>
      
      <h3>1. Sony WH-1000XM5</h3>
      <p>Industriens bedste støjreduktion kombineret med fantastisk lyd. Vores absolutte topanbefaling.</p>
      
      <h3>2. Apple AirPods Max</h3>
      <p>Premium build quality og seamless integration med Apple-enheder. Bedst for Apple-brugere.</p>
      
      <h3>3. Bose QuietComfort Ultra</h3>
      <p>Klassisk komfort og pålidelig ANC. Bose er stadig en stærk konkurrent.</p>
    `,
    category: 'Lyd',
    author: 'Peter Christensen',
    date: '20. januar 2024',
    readTime: '6 min',
    image: '🎧',
    relatedProducts: [
      { id: 'sony-xm5', name: 'Sony WH-1000XM5', price: 2499, image: '🎧' },
      { id: 'airpods-max', name: 'Apple AirPods Max', price: 4999, image: '🎧' },
    ]
  }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guidesData[slug]

  if (!guide) {
    notFound()
  }

  return (
    <div className="bg-[#0f172a] min-h-screen text-gray-100">
      {/* Breadcrumb */}
      <div className="border-b border-white/5">
        <div className="container-prisguiden py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-orange-400">Forside</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-orange-400">Guides</Link>
            <span>/</span>
            <span className="text-gray-300">{guide.category}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-orange-500/10" />
        <div className="container-prisguiden py-12 lg:py-16 relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-wider mb-4">
            {guide.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight max-w-4xl">
            {guide.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white text-sm font-bold">
                {guide.author.split(' ').map(n => n[0]).join('')}
              </div>
              <span>{guide.author}</span>
            </div>
            <span>•</span>
            <span>{guide.date}</span>
            <span>•</span>
            <span>📖 {guide.readTime} læsning</span>
          </div>
        </div>
      </div>

      <div className="container-prisguiden py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <article className="lg:col-span-2">
            <div 
              className="prose prose-invert prose-lg max-w-none 
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-l-4 prose-h2:border-orange-500 prose-h2:pl-4
                prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:text-orange-400
                prose-p:text-gray-300 prose-p:leading-relaxed
                prose-li:text-gray-300
                prose-a:text-orange-400 prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: guide.content }}
            />
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Related Products */}
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6 sticky top-24">
              <h3 className="font-bold text-lg text-white mb-4">🛒 Produkter i testen</h3>
              <div className="space-y-3">
                {guide.relatedProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/produkt/${product.id}`}
                    className="flex items-center gap-4 p-3 bg-white/5 border border-white/5 rounded-xl hover:border-orange-500/30 transition-colors group"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform">{product.image}</span>
                    <div className="flex-1">
                      <p className="font-medium text-gray-200 text-sm group-hover:text-orange-400 transition-colors">{product.name}</p>
                      <p className="text-orange-400 font-bold">{product.price.toLocaleString('da-DK')} kr.</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Share */}
            <div className="bg-[#1e293b]/50 backdrop-blur-md border border-white/5 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-white mb-4">📤 Del denne guide</h3>
              <div className="flex gap-2">
                <button className="flex-1 py-2 rounded-xl bg-blue-600/20 text-blue-400 hover:bg-blue-600/30 transition-colors text-sm font-medium">
                  Facebook
                </button>
                <button className="flex-1 py-2 rounded-xl bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 transition-colors text-sm font-medium">
                  Twitter
                </button>
                <button className="flex-1 py-2 rounded-xl bg-green-600/20 text-green-400 hover:bg-green-600/30 transition-colors text-sm font-medium">
                  Email
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: guide.title,
            description: guide.excerpt,
            author: {
              '@type': 'Person',
              name: guide.author,
            },
            datePublished: '2024-01-15',
            publisher: {
              '@type': 'Organization',
              name: 'Prisguiden.dk',
              logo: {
                '@type': 'ImageObject',
                url: 'https://prisguiden.dk/logo.png',
              },
            },
          }),
        }}
      />
    </div>
  )
}
