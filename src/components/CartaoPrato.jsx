import React, { useEffect, useState } from "react"

export default function CartaoPrato({ recipe }) {
  const [titlePt, setTitlePt] = useState(recipe.title)

  useEffect(() => {
    async function traduzir() {
      try {
        const res = await fetch(
          "https://api.mymemory.translated.net/get?q=" +
            encodeURIComponent(recipe.title) +
            "&langpair=en|pt"
        )
        const data = await res.json()
        if (data.responseData?.translatedText) {
          setTitlePt(data.responseData.translatedText)
        }
      } catch (e) {
        console.error("Erro ao traduzir título:", e)
      }
    }
    if (recipe.title) traduzir()
  }, [recipe.title])

  const imageUrl = recipe.image || "/fallback.jpg"
  const time = recipe.readyInMinutes ? `${recipe.readyInMinutes} min` : ""

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-soft">
      <img
        src={imageUrl}
        alt={titlePt}
        className="w-full h-60 object-cover bg-gray-100"
      />
      <div className="p-4">
        <h4 className="font-semibold">{titlePt}</h4>
        <div className="mt-2 text-sm text-gray-500 flex justify-between">
          <span>{time}</span>
          {recipe.sourceUrl && (
            <a
              href={recipe.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-sm px-3 py-1 border rounded"
            >
              Ver Receita
            </a>
          )}
        </div>
      </div>
    </div>
  )
}