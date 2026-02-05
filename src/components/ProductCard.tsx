'use client'

import Link from 'next/link'
import { useFavorites } from '@/components/FavoritesContext'

type ProductCardProps = {
  product: {
    id: string
    name: string
    slug: string
    brand: string
    lowest_price: number
    highest_price?: number
    rating?: number
    shops?: number
    followers?: number
    image_url?: string | null
  }
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${star <= Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <span className="text-xs text-[var(--muted-foreground)]">{rating}</span>
    </div>
  )
}

export default function ProductCard({ product }: ProductCardProps) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites()
  const isFav = isFavorite(product.id)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigation
    e.stopPropagation()
    
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
    <Link href={`/produkt/${product.slug}`} className="card group block relative">
      <div className="aspect-square bg-white relative overflow-hidden flex items-center justify-center p-4">
        <span className="text-5xl text-gray-400">📦</span>
        
        {/* Follower badge */}
        {product.followers && (
          <div className="absolute top-2 left-2 bg-black/70 text-white text-[10px] px-2 py-1 rounded-full flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {product.followers.toLocaleString('da-DK')}
          </div>
        )}

        {/* Heart Icon */}
        <button 
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 p-2 rounded-full transition-colors z-10 ${
            isFav 
              ? 'bg-rose-50 text-rose-500' 
              : 'bg-transparent text-gray-400 hover:text-rose-500 hover:bg-rose-50'
          }`}
        >
          <svg className="w-5 h-5" fill={isFav ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="p-3">
        <p className="text-xs text-[var(--muted-foreground)] font-medium mb-1">{product.brand}</p>
        <h3 className="font-medium text-sm group-hover:text-[var(--primary)] transition-colors line-clamp-2 mb-2 min-h-[40px]">{product.name}</h3>
        
        {product.rating && <StarRating rating={product.rating} />}
        
        <div className="mt-3">
          {product.shops && <p className="text-xs text-[var(--muted-foreground)] mb-0.5">fra {product.shops} butikker</p>}
          <div className="flex items-baseline gap-2">
            <span className="text-[var(--primary)] font-bold text-lg">{product.lowest_price.toLocaleString('da-DK')} kr.</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
