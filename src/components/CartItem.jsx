import React from 'react'
import PropTypes from 'prop-types'

import { getImage } from '../assets/javascript/pokemon'

function CartItem({ url, name, selected, setSelected }) {
  return (
    <li className="cart-item">
      <div className="cart-item__figure">
        <img className="cart-item__image" src={getImage(url)} alt={name} />
      </div>
      <div className="cart-item__info">
        <h2 className="cart-item__title">{name}</h2>
        <p className="cart-item__value">$10,00</p>
      </div>
      <button className="cart-item__button" onClick={() => setSelected([...selected])}>
        <span className="cart-item__icon"></span>
      </button>
    </li>
  )
}

CartItem.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default CartItem
