export function getId(url) {
  if (url) {
    return url.match(/(\d+)\/$/)[1]
  }
}

export function getImage({ id, url }) {
  const pokeId = id || getId(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
}

