import React, { useState, useEffect } from 'react'

import cart from '../assets/images/cart.png'
import freezeScroll from '../assets/javascript/freezeScroll'

function Cart() {
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
          <li className="cart__item">
            <div className="cart__item-figure">
              <img className="cart__item-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png" alt="" />
            </div>
            <div className="cart__item-info">
              <h2 className="cart__item-title">Pikachu</h2>
              <p className="cart__item-value">$10,00</p>
            </div>
            <button className="cart__item-button">
              <span className="cart__item-icon"></span>
            </button>
          </li>
          <li className="cart__item">
            <div className="cart__item-figure">
              <img className="cart__item-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/37.png" alt="" />
            </div>
            <div className="cart__item-info">
              <h2 className="cart__item-title">Vulpix</h2>
              <p className="cart__item-value">$10,00</p>
            </div>
            <button className="cart__item-button">
              <span className="cart__item-icon"></span>
            </button>
          </li>
          <li className="cart__item">
            <div className="cart__item-figure">
              <img className="cart__item-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="" />
            </div>
            <div className="cart__item-info">
              <h2 className="cart__item-title">Bulbasaur</h2>
              <p className="cart__item-value">$10,00</p>
            </div>
            <button className="cart__item-button">
              <span className="cart__item-icon"></span>
            </button>
          </li>
        </ul>
        <div className="cart__bottom">
          <div className="cart__total">
            <h3>Total:</h3>
            <p className="cart__total-value">$50,00</p>
          </div>
          <button className="cart__button">Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart
