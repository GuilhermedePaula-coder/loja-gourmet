# 🍽️ GourmetOn — Landing Page

Landing page desenvolvida para o projeto **Loja Gourmet**, com foco em destacar pratos populares e apresentar de forma atrativa os diferenciais da marca.  
O site é totalmente responsivo e conta com um **design moderno**, **carrossel de imagens**, integração com a **API Spoonacular** para exibir receitas em tempo real e seções de informações como benefícios, depoimentos e formulário de contato.  

Esse projeto foi desenvolvido como parte de um checkpoint acadêmico da disciplina de **Frontend**.

---

## 🌐 Deploy

🔗 **Acesse o projeto online no GitHub Pages:**  
[https://guilhermedepaula-coder.github.io/loja-gourmet/](https://guilhermedepaula-coder.github.io/loja-gourmet/)

---

## 🚀 Tecnologias utilizadas

- [React](https://react.dev/) — Biblioteca para construção da interface  
- [Vite](https://vitejs.dev/) — Ferramenta de build e dev server rápido  
- [Tailwind CSS](https://tailwindcss.com/) — Estilização com utilitários  
- [Spoonacular API](https://spoonacular.com/food-api) — Fonte de dados para receitas (150 requisições diárias no plano gratuito)  

---

## 📂 Estrutura do projeto
├── public/ # Arquivos estáticos (imagens, ícones, etc.)
│ ├── comida1.jpg
│ ├── comida2.jpg
│ ├── comida3.jpg
│ └── fallback.jpg
├── src/
│ ├── components/ # Componentes React (Hero, Navegação, etc.)
│ ├── services/ # Serviços (integração com API)
│ ├── App.jsx # Estrutura principal
│ └── main.jsx # Ponto de entrada
├── .env # Chave da API Spoonacular
├── package.json
└── vite.config.js


---

## ⚙️ Como rodar o projeto localmente

1. Clone este repositório:
   ```bash
   git clone https://github.com/guilhermedepaula-coder/loja-gourmet.git
   cd loja-gourmet

Instale as dependências:

npm install


Crie um arquivo .env na raiz do projeto e adicione sua chave da Spoonacular:

VITE_SPOONACULAR_KEY=sua_chave_aqui


Rode o projeto:

npm run dev


Abra no navegador:

http://localhost:5173/loja-gourmet/

🖼️ Funcionalidades

✅ Carrossel automático de imagens no Hero
✅ Seção de pratos populares carregados da API Spoonacular
✅ Layout responsivo com Tailwind CSS
✅ Seções de Benefícios, Depoimentos e Formulário de Contato
✅ Estrutura pronta para deploy no GitHub Pages (base configurada como /loja-gourmet/)

👨‍💻 Desenvolvido por

Guilherme Eduardo de Lima – 566045

Enzo de Faria Ferreira – 562448

Guilherme de Paula Kuskowski – 562471

Matheus Gomes Stefaneli – 562277