'use client'

import { useFavorites } from '@/components/FavoritesContext'
import { useState } from 'react'
import Link from 'next/link'

export function FloatingFavorites() {
  const { favorites } = useFavorites()
  const [isOpen, setIsOpen] = useState(false)

  if (favorites.length === 0) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-xl border border-[var(--border)] p-4 mb-2 animate-in slide-in-from-bottom-2">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold">Mine produkter ({favorites.length})</h3>
            <button onClick={() => setIsOpen(false)} className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
              ✕
            </button>
          </div>
          <div className="max-h-60 overflow-y-auto space-y-3 mb-3">
            {favorites.map(product => (
              <div key={product.id} className="flex gap-3 text-sm">
                <div className="w-10 h-10 bg-[var(--muted)] rounded flex items-center justify-center shrink-0">
                  📦
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-medium truncate">{product.name}</p>
                  <p className="text-[var(--primary)] font-bold">{product.price.toLocaleString('da-DK')} kr.</p>
                </div>
              </div>
            ))}
          </div>
          <Link 
            href="/profil" 
            className="btn btn-primary w-full text-sm"
            onClick={() => setIsOpen(false)}
          >
            Gå til profil
          </Link>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[var(--foreground)] hover:bg-gray-800 text-white px-5 py-3 rounded-full shadow-2xl flex items-center gap-2 transition-all hover:scale-105"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        Mine produkter
        <span className="bg-[var(--primary)] text-white text-xs font-bold px-2 py-0.5 rounded-full">
          {favorites.length}
        </span>
      </button>
    </div>
  )
}
