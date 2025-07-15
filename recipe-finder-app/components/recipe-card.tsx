"use client"

import type React from "react"

import { Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useFavorites } from "@/context/favorites-context"
import type { Recipe } from "@/types/recipe"

interface RecipeCardProps {
  recipe: Recipe
  onClick: () => void
}

export function RecipeCard({ recipe, onClick }: RecipeCardProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const isRecipeFavorite = isFavorite(recipe.idMeal)

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (isRecipeFavorite) {
      removeFromFavorites(recipe.idMeal)
    } else {
      addToFavorites(recipe)
    }
  }

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-shadow duration-200 group">
      <CardContent className="p-0">
        <div className="relative" onClick={onClick}>
          <img
            src={recipe.strMealThumb || "/placeholder.svg"}
            alt={recipe.strMeal}
            className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-200"
          />
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 bg-white/80 hover:bg-white"
            onClick={handleFavoriteClick}
          >
            <Heart className={`h-4 w-4 ${isRecipeFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
          </Button>
        </div>

        <div className="p-4" onClick={onClick}>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{recipe.strMeal}</h3>
          <p className="text-sm text-gray-600 mb-2">
            {recipe.strArea} • {recipe.strCategory}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
