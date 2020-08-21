import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import freezeScroll from '../assets/javascript/freezeScroll'
import { types } from '../assets/javascript/pokemon'

function Header({ setTheme }) {
  const { standard, fire, water, grass } = types

  const [menuOpen, setMenuOpen] = useState(false)

  function navigationClick(theme) {
    setTheme(theme)
    setMenuOpen(false)
  }

  useEffect(() => freezeScroll(menuOpen), [menuOpen])

  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo" onClick={() => navigationClick(standard)}>
          pokestore
        </h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`header__menu ${menuOpen ? 'header__menu--close' : ''}`}>
          <div className="header__icon"></div>
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__list">
            <li className="header__item" onClick={() => navigationClick(fire)}>Fire Store</li>
            <li className="header__item" onClick={() => navigationClick(water)}>Water Store</li>
            <li className="header__item" onClick={() => navigationClick(grass)}>Grass Store</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

Header.propTypes = {
  setTheme: PropTypes.func
}

export default Header

