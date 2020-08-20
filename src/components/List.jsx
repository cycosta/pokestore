import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

function List({ pokemons, selected, setSelected }) {
  return (
    <ul className="list">
      {pokemons.length > 0 ? pokemons.map((pokemon) => (
        <Card key={pokemon.name} pokemon={pokemon} selected={selected} setSelected={setSelected} />
      )) : <li className="list__noresult">Oops! No Pokemons.</li>}
    </ul>
  )
}

List.propTypes = {
  pokemons: PropTypes.array,
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default List
