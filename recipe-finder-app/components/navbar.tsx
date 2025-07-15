"use client"

import { useState } from "react"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FavoritesModal } from "./favorites-modal"

export function Navbar() {
  const [showFavorites, setShowFavorites] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h2 className="text-xl font-bold text-gray-900">🍳 Recipe Finder</h2>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" onClick={() => setShowFavorites(true)} className="flex items-center gap-2">
                <Heart className="h-4 w-4" />
                Favorites
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <Button
                variant="ghost"
                onClick={() => {
                  setShowFavorites(true)
                  setMobileMenuOpen(false)
                }}
                className="flex items-center gap-2 w-full justify-start"
              >
                <Heart className="h-4 w-4" />
                Favorites
              </Button>
            </div>
          )}
        </div>
      </nav>

      {showFavorites && <FavoritesModal onClose={() => setShowFavorites(false)} />}
    </>
  )
}
