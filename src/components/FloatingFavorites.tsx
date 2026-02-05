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
        <div className="absolute bottom-20 right-0 w-80 bg-[#1e293b]/90 backdrop-blur-xl rounded-2xl shadow-2xl shadow-black/50 border border-white/10 p-4 mb-2 animate-in slide-in-from-bottom-2 z-50">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-white flex items-center gap-2">
              <span className="text-xl">❤️</span> Mine favoritter
            </h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>
          <div className="max-h-[300px] overflow-y-auto space-y-3 mb-4 pr-1 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {favorites.map(product => (
              <Link key={product.id} href={`/produkt/${product.id}`} className="flex gap-3 text-sm p-2 rounded-lg hover:bg-white/5 transition-colors group">
                <div className="w-12 h-12 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center shrink-0 group-hover:border-orange-500/30 transition-colors">
                  {product.image ? (
                     <img src={product.image} alt={product.name} className="w-8 h-8 object-contain" />
                  ) : (
                     <span className="text-xl">📦</span>
                  )}
                </div>
                <div className="flex-1 overflow-hidden">
                  <p className="font-medium text-gray-200 truncate group-hover:text-orange-400 transition-colors">{product.name}</p>
                  <p className="text-orange-400 font-bold">{product.price.toLocaleString('da-DK')} kr.</p>
                </div>
              </Link>
            ))}
          </div>
          <Link 
            href="/profil" 
            className="btn bg-orange-600 hover:bg-orange-500 text-white border-0 w-full text-sm py-3 shadow-lg shadow-orange-600/20"
            onClick={() => setIsOpen(false)}
          >
            Gå til profil
          </Link>
        </div>
      )}
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#0f172a] hover:bg-orange-600 text-white px-6 py-4 rounded-full shadow-2xl shadow-orange-500/20 border border-white/10 flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group"
      >
        <div className="relative">
           <svg className="w-6 h-6 group-hover:animate-pulse" fill={isOpen ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
           </svg>
           <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-sm border border-[#0f172a]">
             {favorites.length}
           </span>
        </div>
        <span className="font-medium hidden sm:block">Mine produkter</span>
      </button>
    </div>
  )
}
