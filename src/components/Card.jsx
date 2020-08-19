import React from 'react'
import PropTypes from 'prop-types'

import { getImage } from '../assets/javascript/pokemon'

function Card({ url, name, selected, setSelected }) {
  const pokemon = {
    url,
    name
  };

  return (
    <li className="card">
      <figure className="card__figure">
        <img className="card__image" src={getImage(url)} alt={name} />
        <figcaption className="card__info">
          <h2 className="card__title">{name}</h2>
          <p className="card__value">$10,00</p>
        </figcaption>
      </figure>
      {/* setSelected expects an array as a parameter. This array must contain the current
      selected (spread) array plus the new clicked pokemon */}
      <button className="card__button" onClick={() => setSelected([...selected, pokemon])}>
        <span className="card__icon"></span>
      </button>
    </li>
  )
}

Card.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  selected: PropTypes.array,
  setSelected: PropTypes.func
}

export default Card
