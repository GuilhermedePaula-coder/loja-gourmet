import React from "react"

export default function FormularioContato() {
  return (
    <section id="contato" className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold">Entre em Contato</h2>
      <p className="text-gray-600 mt-1">Envie sua mensagem para nossa equipe</p>

      <form className="mt-6 grid gap-4 max-w-md">
        <input
          type="text"
          placeholder="Seu nome"
          className="border rounded-lg px-4 py-2 w-full"
        />
        <input
          type="email"
          placeholder="Seu e-mail"
          className="border rounded-lg px-4 py-2 w-full"
        />
        <textarea
          placeholder="Sua mensagem"
          className="border rounded-lg px-4 py-2 w-full h-32"
        ></textarea>
        <button
          type="submit"
          className="bg-red-500 text-white px-6 py-3 rounded-lg shadow-soft hover:bg-red-600"
        >
          Enviar
        </button>
      </form>
    </section>
  )
}