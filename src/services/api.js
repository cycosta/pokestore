// Get all Pokemons
export function getPokemons() {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=150')
    .then(response => response.json())
    .then(data => data.results)
    .catch((error) => console.error(error))
}

// Get Pokemon by name
export function getPokemon(keyword) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${keyword}`)
    .then(response => response.json())
    .catch((error) => console.error(error))
}

// Get Pokemons by type
export function getPokemonsByType(type) {
  if (type == 0) return getPokemons()

  return fetch(`https://pokeapi.co/api/v2/type/${type}`)
    .then(response => response.json())
    .then(data => {
      const list = data.pokemon.map(({ pokemon }) => pokemon)
      return list
    })
    .catch((error) => console.error(error))
}
