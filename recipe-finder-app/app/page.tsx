"use client"

import { FavoritesProvider } from "@/context/favorites-context"
import { Navbar } from "@/components/navbar"
import { SearchBar } from "@/components/search-bar"
import { RecipeGrid } from "@/components/recipe-grid"
import { RecipeModal } from "@/components/recipe-modal"
import { useFetchRecipes } from "@/hooks/use-fetch-recipes"
import { useState } from "react"
import type { Recipe } from "@/types/recipe"

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)
  const { recipes, loading, error, searchRecipes } = useFetchRecipes()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    searchRecipes(query)
  }

  return (
    <FavoritesProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Recipe Finder</h1>
            <p className="text-lg text-gray-600 mb-8">Discover delicious recipes from around the world</p>

            <SearchBar onSearch={handleSearch} />
          </div>

          <RecipeGrid
            recipes={recipes}
            loading={loading}
            error={error}
            searchQuery={searchQuery}
            onRecipeClick={setSelectedRecipe}
          />
        </main>

        {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
      </div>
    </FavoritesProvider>
  )
}
