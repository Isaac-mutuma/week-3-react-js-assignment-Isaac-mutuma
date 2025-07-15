"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import type { Recipe } from "@/types/recipe"

interface FavoritesContextType {
  favorites: Recipe[]
  addToFavorites: (recipe: Recipe) => void
  removeFromFavorites: (recipeId: string) => void
  isFavorite: (recipeId: string) => boolean
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined)

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Recipe[]>([])

  // Load favorites from localStorage on mount
  useEffect(() => {
    const savedFavorites = localStorage.getItem("recipe-favorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }
  }, [])

  // Save favorites to localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("recipe-favorites", JSON.stringify(favorites))
  }, [favorites])

  const addToFavorites = (recipe: Recipe) => {
    setFavorites((prev) => [...prev, recipe])
  }

  const removeFromFavorites = (recipeId: string) => {
    setFavorites((prev) => prev.filter((recipe) => recipe.idMeal !== recipeId))
  }

  const isFavorite = (recipeId: string) => {
    return favorites.some((recipe) => recipe.idMeal === recipeId)
  }

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

export function useFavorites() {
  const context = useContext(FavoritesContext)
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider")
  }
  return context
}
