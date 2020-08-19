import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

function List({ pokemons, selected, setSelected }) {
  return (
    <ul className="list">
      {pokemons.map(({ name, url }) => (
        <Card key={name} name={name} url={url} selected={selected} setSelected={setSelected} />
      ))}
    </ul>
  )
}

List.propTypes = {
  pokemons: PropTypes.array,
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default List
