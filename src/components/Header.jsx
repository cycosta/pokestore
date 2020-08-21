import React, { useState, useEffect } from 'react'

import freezeScroll from '../assets/javascript/freezeScroll'
import storeThemes from '../assets/javascript/theme'

function Header() {
  const { standard, fire, water, grass } = storeThemes

  const [menuOpen, setMenuOpen] = useState(false)

  const [theme, setTheme] = useState(standard)

  function changeTheme(theme) {
    document.documentElement.style.setProperty('--theme', theme)
    setMenuOpen(false)
  }

  useEffect(() => freezeScroll(menuOpen), [menuOpen])

  useEffect(() => changeTheme(theme), [theme])

  return (
    <header className="header">
      <div className="header__content">
        <h1 className="header__logo" onClick={() => setTheme(standard)}>
          pokestore
        </h1>
        <button onClick={() => setMenuOpen(!menuOpen)} className={`header__menu ${menuOpen ? 'header__menu--close' : ''}`}>
          <div className="header__icon"></div>
        </button>
        <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__list">
            <li className="header__item" onClick={() => setTheme(fire)}>Fire Store</li>
            <li className="header__item" onClick={() => setTheme(water)}>Water Store</li>
            <li className="header__item" onClick={() => setTheme(grass)}>Grass Store</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

