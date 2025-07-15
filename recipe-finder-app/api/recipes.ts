import type { Recipe } from "@/types/recipe"

const BASE_URL = "https://www.themealdb.com/api/json/v1/1"

export interface ApiResponse {
  meals: Recipe[] | null
}

export async function searchRecipes(query: string): Promise<Recipe[]> {
  try {
    const response = await fetch(`${BASE_URL}/search.php?s=${encodeURIComponent(query)}`)
    const data: ApiResponse = await response.json()
    return data.meals || []
  } catch (error) {
    console.error("Error searching recipes:", error)
    throw new Error("Failed to search recipes")
  }
}

export async function getRecipeById(id: string): Promise<Recipe | null> {
  try {
    const response = await fetch(`${BASE_URL}/lookup.php?i=${id}`)
    const data: ApiResponse = await response.json()
    return data.meals?.[0] || null
  } catch (error) {
    console.error("Error fetching recipe:", error)
    throw new Error("Failed to fetch recipe")
  }
}

export async function searchRecipesByIngredient(ingredient: string): Promise<Recipe[]> {
  try {
    const response = await fetch(`${BASE_URL}/filter.php?i=${encodeURIComponent(ingredient)}`)
    const data: ApiResponse = await response.json()
    return data.meals || []
  } catch (error) {
    console.error("Error searching by ingredient:", error)
    throw new Error("Failed to search by ingredient")
  }
}
