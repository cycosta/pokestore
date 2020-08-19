import React, { useState, useEffect } from 'react'

import freezeScroll from '../assets/javascript/freezeScroll'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => freezeScroll(menuOpen))

  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo">
          pokestore
        </h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`header__menu ${menuOpen ? 'header__menu--close' : ''}`}>
          <div className="header__icon"></div>
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__list">
            <li className="header__item">Fire Store</li>
            <li className="header__item">Water Store</li>
            <li className="header__item">Grass Store</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

