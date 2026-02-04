import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--muted)] py-12 px-4">
      <div className="max-w-md w-full">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <span className="text-3xl font-extrabold text-[var(--primary)]">Prisguiden</span>
            <span className="text-lg text-[var(--muted-foreground)]">.dk</span>
          </Link>
          <h1 className="mt-4 text-2xl font-bold">Log ind på din konto</h1>
          <p className="text-[var(--muted-foreground)]">
            Eller{' '}
            <Link href="/opret" className="text-[var(--primary)] font-medium hover:underline">
              opret en gratis konto
            </Link>
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-lg p-8 shadow-lg">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email adresse
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                placeholder="din@email.dk"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label htmlFor="password" className="block text-sm font-medium">
                  Adgangskode
                </label>
                <Link href="/glemt-kode" className="text-sm text-[var(--primary)] hover:underline">
                  Glemt adgangskode?
                </Link>
              </div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 border border-[var(--border)] rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent outline-none"
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="w-4 h-4 rounded border-[var(--border)] text-[var(--primary)] focus:ring-[var(--primary)]"
              />
              <label htmlFor="remember" className="ml-2 text-sm">
                Husk mig
              </label>
            </div>

            <button type="submit" className="btn btn-primary w-full py-3">
              Log ind
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[var(--border)]"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-[var(--muted-foreground)]">Eller fortsæt med</span>
            </div>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-4">
            <button className="btn btn-secondary py-3 justify-center">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Google
            </button>
            <button className="btn btn-secondary py-3 justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              Facebook
            </button>
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-sm text-[var(--muted-foreground)] mt-6">
          Ved at logge ind accepterer du vores{' '}
          <Link href="/vilkaar" className="text-[var(--primary)] hover:underline">Vilkår</Link>
          {' '}og{' '}
          <Link href="/privatlivspolitik" className="text-[var(--primary)] hover:underline">Privatlivspolitik</Link>
        </p>
      </div>
    </div>
  )
}
