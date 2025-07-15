"use client"

import { useState } from "react"
import { searchRecipes, searchRecipesByIngredient } from "@/api/recipes"
import type { Recipe } from "@/types/recipe"

export function useFetchRecipes() {
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const searchRecipesByQuery = async (query: string) => {
    if (!query.trim()) {
      setRecipes([])
      return
    }

    setLoading(true)
    setError(null)

    try {
      // Try searching by name first
      let results = await searchRecipes(query)

      // If no results, try searching by ingredient
      if (results.length === 0) {
        results = await searchRecipesByIngredient(query)
      }

      setRecipes(results)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
      setRecipes([])
    } finally {
      setLoading(false)
    }
  }

  return {
    recipes,
    loading,
    error,
    searchRecipes: searchRecipesByQuery,
  }
}
