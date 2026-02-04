import Link from 'next/link'
import Image from 'next/image'

interface ProductCardProps {
  product: {
    id: string
    name: string
    slug: string
    brand?: string
    image_url?: string
    lowest_price?: number
    highest_price?: number
  }
  showDiscount?: boolean
}

export function ProductCard({ product, showDiscount = true }: ProductCardProps) {
  const discount = product.highest_price && product.lowest_price 
    ? Math.round((1 - product.lowest_price / product.highest_price) * 100)
    : null

  return (
    <Link href={`/produkt/${product.slug}`} className="product-card card group">
      {/* Discount Badge */}
      {showDiscount && discount && discount > 5 && (
        <span className="discount-badge">-{discount}%</span>
      )}

      {/* Image */}
      <div className="aspect-square bg-[var(--muted)] relative overflow-hidden">
        {product.image_url ? (
          <Image
            src={product.image_url}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-[var(--muted-foreground)]">
            <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        {product.brand && (
          <p className="text-xs text-[var(--muted-foreground)] font-medium uppercase tracking-wide">
            {product.brand}
          </p>
        )}
        <h3 className="font-semibold text-[var(--foreground)] line-clamp-2 group-hover:text-[var(--primary)] transition-colors">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2">
          {product.lowest_price ? (
            <>
              <span className="price">
                {product.lowest_price.toLocaleString('da-DK')} kr.
              </span>
              {product.highest_price && product.highest_price > product.lowest_price && (
                <span className="old-price">
                  {product.highest_price.toLocaleString('da-DK')} kr.
                </span>
              )}
            </>
          ) : (
            <span className="text-[var(--muted-foreground)]">Pris ikke tilgængelig</span>
          )}
        </div>
      </div>
    </Link>
  )
}
