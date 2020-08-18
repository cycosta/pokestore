import React from 'react'

function Header() {
  return (
    <header className="header">
      <div className="header__content container">
        <h1 className="header__logo">
          pokestore
        </h1>
        <input type="checkbox" id="header__toggle" className="header__toggle" hidden />
        <label htmlFor="header__toggle" className="header__menu">
          <div className="header__icon"></div>
        </label>
        <nav className="header__nav">
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

