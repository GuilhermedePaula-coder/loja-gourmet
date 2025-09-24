import React, { useState, useEffect } from "react";

export default function Hero() {
  const imagens = [
    "/loja-gourmet/comida1.jpg",
    "/loja-gourmet/comida2.jpg",
    "/loja-gourmet/comida3.jpg"
  ];
  const [index, setIndex] = useState(0);

  // troca automática a cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="bg-gradient-to-r from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Texto principal */}
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900">
            GourmetOn — Comida entregue rápido, fresca e local
          </h1>
          <p className="mt-4 text-gray-600">
            Encontre milhares de pratos de restaurantes locais, acompanhe a entrega em tempo real e pague da forma que preferir.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="#"
              className="px-5 py-3 bg-red-500 text-white rounded-lg font-medium shadow hover:bg-red-600"
            >
              Baixar App
            </a>
            <a
              href="#cardapio"
              className="px-5 py-3 bg-gray-200 rounded-lg font-medium hover:bg-gray-300"
            >
              Explorar Cardápio
            </a>
          </div>

          <p className="mt-2 text-sm text-gray-500">
            Disponível para iOS e Android
          </p>
        </div>

        {/* Carrossel automático */}
        <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <img
            src={imagens[index]}
            alt="Comida deliciosa"
            className="w-full h-full object-cover transition-all duration-700"
          />
        </div>
      </div>
    </section>
  );
}
