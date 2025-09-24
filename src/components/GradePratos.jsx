import React, { useEffect, useState } from "react"
import { fetchRandomRecipes } from "../services/api"
import CartaoPrato from "./CartaoPrato"

export default function GradePratos() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const data = await fetchRandomRecipes(6)
      console.log("Receitas recebidas da API:", data)
      setRecipes(data)
      setLoading(false)
    }
    load()
  }, [])

  return (
    <section id="cardapio" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Pratos Populares</h2>
      <p className="text-gray-600 mt-1">Selecionados pelos nossos chefs</p>

      <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {loading ? (
          Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-48 bg-gray-100 animate-pulse rounded-lg"
            />
          ))
        ) : (
          recipes.map((r, i) => <CartaoPrato key={r.id || i} recipe={r} />)
        )}
      </div>
    </section>
  )
}