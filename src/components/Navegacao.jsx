import React from "react"

export default function Navegacao() {
  return (
    <nav className="bg-white shadow-soft">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🍔 GourmetOn 🍔</h1>
        <div className="space-x-6">
          <a href="#beneficios" className="hover:text-red-500">Benefícios</a>
          <a href="#cardapio" className="hover:text-red-500">Cardápio</a>
          <a href="#depoimentos" className="hover:text-red-500">Depoimentos</a>
          <a href="#contato" className="hover:text-red-500">Contato</a>
        </div>
      </div>
    </nav>
  )
}