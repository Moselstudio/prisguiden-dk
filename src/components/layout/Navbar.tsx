import Link from 'next/link'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[var(--border)]">
      <div className="container-prisguiden">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-extrabold text-[var(--primary)]">Prisguiden</span>
            <span className="text-sm text-[var(--muted-foreground)]">.dk</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="search-bar w-full">
              <svg className="w-5 h-5 text-[var(--muted-foreground)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input type="text" placeholder="Søg efter produkter..." className="flex-1" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-6">
            <Link href="/kategorier" className="nav-link hidden sm:block">
              Kategorier
            </Link>
            <Link href="/prisfald" className="nav-link hidden sm:block">
              Dagens Prisfald
            </Link>
            <Link href="/guides" className="nav-link hidden sm:block">
              Guides
            </Link>
            <Link href="/login" className="btn btn-primary">
              Log ind
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
