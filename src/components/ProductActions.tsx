'use client'

import { useFavorites } from '@/components/FavoritesContext'

export default function ProductActions({ product }: { product: any }) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const isFav = isFavorite(product.id)

  const toggleFavorite = () => {
    if (isFav) {
      removeFavorite(product.id)
    } else {
      addFavorite({
        id: product.id,
        name: product.name,
        price: product.lowest_price,
        image: product.image_url || undefined
      })
    }
  }

  return (
    <div className="flex gap-3">
      <button 
        onClick={toggleFavorite}
        className={`btn flex-1 flex items-center justify-center gap-2 ${isFav ? 'bg-rose-100 text-rose-600 hover:bg-rose-200' : 'btn-primary'}`}
      >
        <svg className="w-5 h-5" fill={isFav ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
        {isFav ? 'Følger produkt' : 'Følg produkt'}
      </button>
      <button className="btn btn-outline flex-1 flex items-center justify-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        Sæt prisalarm
      </button>
    </div>
  )
}
