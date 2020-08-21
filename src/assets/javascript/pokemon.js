export function getId(url) {
  if (url) {
    return url.match(/(\d+)\/$/)[1]
  }
}

export function getImage({ id, url }) {
  const pokeId = id || getId(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeId}.png`
}

export const types = {
  standard: {
    id: 0,
    color: '#CC0000'
  },
  fire: {
    id: 10,
    color: '#E68804'
  },
  water: {
    id: 11,
    color: '#55C3DC'
  },
  grass: {
    id: 12,
    color: '#599800'
  },
}
