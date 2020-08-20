import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import cart from '../assets/images/cart.png'
import freezeScroll from '../assets/javascript/freezeScroll'
import CartItem from './CartItem'

function Cart({ selected, setSelected }) {
  const [cartOpen, setCartOpen] = useState(false)

  useEffect(() => freezeScroll(cartOpen))

  return (
    <div className="cart">
      <button onClick={() => setCartOpen(!cartOpen)} className="cart__menu">
        <img src={cart} alt="Cart"/>
      </button>
      <div className={`cart__content ${cartOpen ? 'cart__content--open' : ''}`}>
        <h2 className="cart__title">Your cart</h2>
        <ul className="cart__list">
          {selected.map((pokemon) => (
            <CartItem key={pokemon.name} pokemon={pokemon} selected={selected} setSelected={setSelected} />
          ))}
        </ul>
        <div className="cart__bottom">
          <div className="cart__total">
            <h3>Total:</h3>
            <p className="cart__total-value">${selected.length * 10},00</p>
          </div>
          <button className="cart__button">Checkout</button>
        </div>
      </div>
    </div>
  )
}

Cart.propTypes = {
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default Cart
