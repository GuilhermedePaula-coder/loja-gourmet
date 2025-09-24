const API_KEY = import.meta.env.VITE_SPOONACULAR_KEY || ''
const BASE = 'https://api.spoonacular.com'

export async function fetchRandomRecipes(number = 6) {
  if (!API_KEY) return mockRecipes(number)
  const url = `${BASE}/recipes/random?number=${number}&apiKey=${API_KEY}`
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error('API error')
    const data = await res.json()
    return data.recipes || []
  } catch {
    return mockRecipes(number)
  }
}

function mockRecipes(n) {
  const sample = [{ id: 1, title: 'Mock Food', image: '', readyInMinutes: 20 }]
  return Array.from({length:n}, (_,i)=>({...sample[0], id:i+1}))
}
console.log("Minha chave carregada:", API_KEY)
