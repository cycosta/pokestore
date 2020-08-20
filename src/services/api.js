// Get all Pokemons
export function getPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => response.json())
    .catch((error) => console.log(error.response))
}

// Get Pokemon by name
export function getPokemon(keyword) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
    .then(response => response.json())
    .catch((error) => console.log(error.response))
}
