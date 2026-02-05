'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

type Product = {
  id: string
  name: string
  price: number
  image?: string
}

type FavoritesContextType = {
  favorites: Product[]
  addFavorite: (product: Product) => void
  removeFavorite: (productId: string) => void
  isFavorite: (productId: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([])

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('prisguiden_favorites')
    if (saved) {
      try {
        setFavorites(JSON.parse(saved))
      } catch (e) {
        console.error('Failed to parse favorites', e)
      }
    }
  }, [])

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('prisguiden_favorites', JSON.stringify(favorites))
  }, [favorites])

  const addFavorite = (product: Product) => {
    setFavorites(prev => {
      if (prev.some(p => p.id === product.id)) return prev
      return [...prev, product]
    })
  }

  const removeFavorite = (productId: string) => {
    setFavorites(prev => prev.filter(p => p.id !== productId))
  }

  const isFavorite = (productId: string) => {
    return favorites.some(p => p.id === productId)
  }

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider')
  }
  return context
}
