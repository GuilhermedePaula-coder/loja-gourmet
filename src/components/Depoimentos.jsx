import React from "react"

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">O que dizem nossos clientes</h2>
      <p className="text-gray-600 mt-1">Experiências de quem já pediu pelo app</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-soft">
          <p className="text-gray-700">
            "O app facilitou demais minha vida! A comida chegou quentinha e muito rápido."
          </p>
          <span className="block mt-3 text-sm text-gray-500">— Maria S.</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-soft">
          <p className="text-gray-700">
            "Variedade incrível de restaurantes e pratos. Uso toda semana!"
          </p>
          <span className="block mt-3 text-sm text-gray-500">— João P.</span>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-soft">
          <p className="text-gray-700">
            "Pagamento fácil e entrega rastreada em tempo real. Recomendo demais!"
          </p>
          <span className="block mt-3 text-sm text-gray-500">— Ana C.</span>
        </div>
      </div>
    </section>
  )
}