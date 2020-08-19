export function getId(url) {
  if (url) {
    return url.match(/(\d+)\/$/)[1]
  }
}

export function getImage(url) {
  const id = getId(url)
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

