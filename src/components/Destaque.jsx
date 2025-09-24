import React, { useState, useEffect } from "react"

const imagens = ["/comida1.jpg", "/comida2.jpg", "/comida3.jpg"]

export default function Destaque() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1">
        <h1 className="text-4xl font-bold leading-tight">
          GourmetOn — Comida entregue rápido, fresca e local
        </h1>
        <p className="mt-4 text-gray-600">
          Encontre milhares de pratos de restaurantes locais, acompanhe a entrega em
          tempo real e pague da forma que preferir.
        </p>
        <div className="mt-6 flex gap-4">
          <a
            href="#"
            className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-soft hover:bg-red-600"
          >
            Baixar App
          </a>
          <a
            href="#cardapio"
            className="border px-6 py-3 rounded-lg shadow-soft hover:bg-gray-50"
          >
            Explorar Cardápio
          </a>
        </div>
        <p className="mt-3 text-sm text-gray-400">Disponível para iOS e Android</p>
      </div>

      {/* Carrossel */}
      <div className="flex-1">
        <div className="w-full h-80 rounded-lg overflow-hidden shadow-soft relative">
          <img
            src={imagens[index]}
            alt="Comida deliciosa"
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700"
          />
        </div>
      </div>
    </section>
  )
}
