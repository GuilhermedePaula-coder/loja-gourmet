import React from "react"

export default function Beneficios() {
  return (
    <section id="beneficios" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Benefícios</h2>
      <p className="text-gray-600 mt-1">Por que escolher o GourmetOn</p>

      <div className="mt-6 grid gap-6 md:grid-cols-3">
        <div className="bg-white p-6 rounded-lg shadow-soft text-center">
          <h3 className="font-semibold text-lg">🚀 Entrega Rápida</h3>
          <p className="text-gray-600 mt-2">
            Receba seus pratos favoritos em poucos minutos, com agilidade e segurança.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-soft text-center">
          <h3 className="font-semibold text-lg">🥗 Comida Fresca</h3>
          <p className="text-gray-600 mt-2">
            Restaurantes locais selecionados, ingredientes frescos e de qualidade.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-soft text-center">
          <h3 className="font-semibold text-lg">💳 Pagamento Fácil</h3>
          <p className="text-gray-600 mt-2">
            Diversas formas de pagamento, escolha a que preferir.
          </p>
        </div>
      </div>
    </section>
  )
}