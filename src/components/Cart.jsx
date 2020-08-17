import React from 'react'
import cart from '../assets/images/cart.png'

function Cart() {
  return (
    <div className="cart">
      <input type="checkbox" id="cart__toggle" className="cart__toggle" hidden />
      <label htmlFor="cart__toggle" className="cart__menu">
        <img src={cart} alt="Cart"/>
      </label>
      <div className="cart__content"></div>
    </div>
  )
}

export default Cart
