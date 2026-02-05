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
    e.preventDefault()
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
    <Link href={`/produkt/${product.slug}`} className="glass group block relative rounded-xl overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
      {/* Image Container - Slightly lighter background for contrast */}
      <div className="aspect-square bg-white/5 relative flex items-center justify-center p-6 group-hover:bg-white/10 transition-colors">
        {product.image_url ? (
          <img src={product.image_url} alt={product.name} className="object-contain w-full h-full drop-shadow-xl" />
        ) : (
          <span className="text-6xl filter drop-shadow-lg">📦</span>
        )}
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
           {product.followers && product.followers > 0 && (
            <div className="bg-black/60 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
              <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z" /><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" /></svg>
              {product.followers.toLocaleString('da-DK')}
            </div>
          )}
          {product.lowest_price < (product.highest_price || 0) && (
            <div className="bg-green-500/90 backdrop-blur-md text-white text-[10px] font-bold px-2 py-1 rounded-md shadow-lg shadow-green-500/20">
              Spar {Math.round((1 - product.lowest_price / (product.highest_price || product.lowest_price)) * 100)}%
            </div>
          )}
        </div>

        {/* Favorite Button */}
        <button 
          onClick={toggleFavorite}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all z-10 hover:scale-110 ${
            isFav 
              ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30' 
              : 'bg-black/20 text-white hover:bg-rose-500 hover:text-white backdrop-blur-sm'
          }`}
        >
          <svg className="w-4 h-4" fill={isFav ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <p className="text-xs text-orange-400 font-medium mb-1 tracking-wide uppercase">{product.brand}</p>
        <h3 className="font-bold text-gray-100 text-sm group-hover:text-orange-400 transition-colors line-clamp-2 mb-2 min-h-[40px] leading-snug">
          {product.name}
        </h3>
        
        {product.rating && <StarRating rating={product.rating} />}
        
        <div className="mt-4 flex flex-col gap-1">
          <div className="flex items-baseline gap-2">
            <span className="text-white font-extrabold text-lg tracking-tight">{product.lowest_price.toLocaleString('da-DK')} kr.</span>
            {product.highest_price && product.lowest_price < product.highest_price && (
              <span className="text-xs text-gray-500 line-through decoration-gray-600">{product.highest_price.toLocaleString('da-DK')} kr.</span>
            )}
          </div>
          {product.shops && <p className="text-[10px] text-gray-400 font-medium">fra {product.shops} butikker</p>}
        </div>
      </div>
    </Link>
  )
}
