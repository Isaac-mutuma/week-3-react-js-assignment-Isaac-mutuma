"use client"

import { RecipeCard } from "./recipe-card"
import { LoadingSpinner } from "./loading-spinner"
import type { Recipe } from "@/types/recipe"

interface RecipeGridProps {
  recipes: Recipe[]
  loading: boolean
  error: string | null
  searchQuery: string
  onRecipeClick: (recipe: Recipe) => void
}

export function RecipeGrid({ recipes, loading, error, searchQuery, onRecipeClick }: RecipeGridProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600 text-lg">{error}</p>
      </div>
    )
  }

  if (searchQuery && recipes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">No recipes found for "{searchQuery}". Try a different search term.</p>
      </div>
    )
  }

  if (!searchQuery) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 text-lg">Start by searching for your favorite recipes!</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} onClick={() => onRecipeClick(recipe)} />
      ))}
    </div>
  )
}
