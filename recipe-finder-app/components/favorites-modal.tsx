"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { RecipeCard } from "./recipe-card"
import { useFavorites } from "@/context/favorites-context"
import { useState } from "react"
import { RecipeModal } from "./recipe-modal"
import type { Recipe } from "@/types/recipe"

interface FavoritesModalProps {
  onClose: () => void
}

export function FavoritesModal({ onClose }: FavoritesModalProps) {
  const { favorites } = useFavorites()
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null)

  return (
    <>
      <Dialog open={true} onOpenChange={onClose}>
        <DialogContent className="max-w-6xl max-h-[90vh] p-0">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-2xl font-bold">My Favorite Recipes</h2>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>

            <ScrollArea className="flex-1">
              <div className="p-6">
                {favorites.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg">
                      No favorite recipes yet. Start exploring and save your favorites!
                    </p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((recipe) => (
                      <RecipeCard key={recipe.idMeal} recipe={recipe} onClick={() => setSelectedRecipe(recipe)} />
                    ))}
                  </div>
                )}
              </div>
            </ScrollArea>
          </div>
        </DialogContent>
      </Dialog>

      {selectedRecipe && <RecipeModal recipe={selectedRecipe} onClose={() => setSelectedRecipe(null)} />}
    </>
  )
}
