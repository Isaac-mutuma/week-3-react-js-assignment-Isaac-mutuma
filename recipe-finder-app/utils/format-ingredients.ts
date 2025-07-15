import type { Recipe } from "@/types/recipe"

export interface Ingredient {
  ingredient: string
  measure: string
}

export function formatIngredients(recipe: Recipe): Ingredient[] {
  const ingredients: Ingredient[] = []

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}` as keyof Recipe] as string
    const measure = recipe[`strMeasure${i}` as keyof Recipe] as string

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      })
    }
  }

  return ingredients
}
