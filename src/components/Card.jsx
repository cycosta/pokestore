import React from 'react'
import PropTypes from 'prop-types'

import { getImage } from '../assets/javascript/pokemon'

function Card({ pokemon, selected, setSelected }) {
  function addToCart() {
    {/* setSelected expects an array as a parameter. This array must contain the current
    selected (spread) array plus the new clicked pokemon */}
    if (!selected.find(pokemon => pokemon.name == name)) {
      setSelected([...selected, pokemon])
    }
  }

  return (
    <li className="card">
      <figure className="card__figure">
        <img className="card__image" src={getImage(pokemon)} alt={pokemon.name} />
        <figcaption className="card__info">
          <h2 className="card__title">{pokemon.name}</h2>
          <p className="card__value">$10,00</p>
        </figcaption>
      </figure>
      <button className="card__button" onClick={() => addToCart()}>
        <span className="card__icon"></span>
      </button>
    </li>
  )
}

Card.propTypes = {
  pokemon: PropTypes.object,
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default Card
