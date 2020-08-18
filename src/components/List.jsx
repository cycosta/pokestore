import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

function List({ pokemons }) {
  return (
    <ul className="list">
      {pokemons.map(({ name, url }) => <Card key={name} title={name} url={url} />)}
    </ul>
  )
}

List.propTypes = {
  pokemons: PropTypes.array,
}

export default List
