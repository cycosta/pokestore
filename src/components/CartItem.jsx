import React from 'react'
import PropTypes from 'prop-types'

import { getImage } from '../assets/javascript/pokemon'

function CartItem({ pokemon, selected, setSelected }) {
  function removeFromCart() {
    setSelected(selected.filter((selectedPokemon) => selectedPokemon.name !== pokemon.name))
  }

  return (
    <li className="cart-item">
      <div className="cart-item__figure">
        <img className="cart-item__image" src={getImage(pokemon)} alt={pokemon.name} />
      </div>
      <div className="cart-item__info">
        <h2 className="cart-item__title">{pokemon.name}</h2>
        <p className="cart-item__value">$10,00</p>
      </div>
      <button className="cart-item__button" onClick={() => removeFromCart()}>
        <span className="cart-item__icon"></span>
      </button>
    </li>
  )
}

CartItem.propTypes = {
  pokemon: PropTypes.object,
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default CartItem
