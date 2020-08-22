import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import cart from '../assets/images/cart.png'
import freezeScroll from '../assets/javascript/freezeScroll'
import CartItem from './CartItem'
import Modal from './Modal'

function Cart({ selected, setSelected }) {
  const [cartOpen, setCartOpen] = useState(false)

  const [modalOpen, setModalOpen] = useState(false)

  const [total, setTotal] = useState(0)

  const [cashback, setCashback] = useState(0)

  useEffect(() => freezeScroll(cartOpen))

  useEffect(() => {
    const total = selected.length * 10
    setTotal(total)
    setCashback(total * 0.1)
  }, [selected])

  return (
    <div className="cart">
      <button onClick={() => setCartOpen(!cartOpen)} className="cart__menu">
        <span className="cart__items">
          {selected.length}
        </span>
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
            <p className="cart__total-value">${total},00</p>
          </div>
          <button className="cart__button" onClick={() => setModalOpen(!modalOpen)}>Checkout</button>
        </div>
      </div>
      <Modal cashback={cashback} modalOpen={modalOpen} setModalOpen={setModalOpen} setSelected={setSelected} />
    </div>
  )
}

Cart.propTypes = {
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default Cart
