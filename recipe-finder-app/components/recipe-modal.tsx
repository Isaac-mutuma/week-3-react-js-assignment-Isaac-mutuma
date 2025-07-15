"use client"

import { X, Heart, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useFavorites } from "@/context/favorites-context"
import { formatIngredients } from "@/utils/format-ingredients"
import type { Recipe } from "@/types/recipe"

interface RecipeModalProps {
  recipe: Recipe
  onClose: () => void
}

export function RecipeModal({ recipe, onClose }: RecipeModalProps) {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites()
  const isRecipeFavorite = isFavorite(recipe.idMeal)

  const handleFavoriteClick = () => {
    if (isRecipeFavorite) {
      removeFromFavorites(recipe.idMeal)
    } else {
      addToFavorites(recipe)
    }
  }

  const ingredients = formatIngredients(recipe)

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-2xl font-bold pr-8">{recipe.strMeal}</h2>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" onClick={handleFavoriteClick}>
                <Heart className={`h-5 w-5 ${isRecipeFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
              </Button>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <ScrollArea className="flex-1">
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Image and basic info */}
                <div>
                  <img
                    src={recipe.strMealThumb || "/placeholder.svg"}
                    alt={recipe.strMeal}
                    className="w-full rounded-lg mb-4"
                  />

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {recipe.strCategory}
                    </span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">{recipe.strArea}</span>
                  </div>

                  {recipe.strYoutube && (
                    <Button
                      variant="outline"
                      className="w-full mb-4 bg-transparent"
                      onClick={() => window.open(recipe.strYoutube, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Watch Video Tutorial
                    </Button>
                  )}
                </div>

                {/* Ingredients and Instructions */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
                  <ul className="space-y-2 mb-6">
                    {ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                        <span className="text-sm">
                          {ingredient.measure} {ingredient.ingredient}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mb-4">Instructions</h3>
                  <div className="prose prose-sm max-w-none">
                    {recipe.strInstructions.split("\n").map(
                      (step, index) =>
                        step.trim() && (
                          <p key={index} className="mb-3 text-sm leading-relaxed">
                            {step.trim()}
                          </p>
                        ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  )
}
