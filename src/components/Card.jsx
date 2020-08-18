import React from 'react'
import PropTypes from 'prop-types'

function Card(props) {
  const id = props.url.match(/(\d+)\/$/)[1]
  const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

  return (
    <li className="card">
      <figure className="card__figure">
        <img className="card__image" src={image} alt={props.title} />
        <figcaption className="card__info">
          <h2 className="card__title">{props.title}</h2>
          <p className="card__value">$10,00</p>
        </figcaption>
      </figure>
      <button className="card__button">
        <span className="card__icon"></span>
      </button>
    </li>
  )
}

Card.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string
}

export default Card
