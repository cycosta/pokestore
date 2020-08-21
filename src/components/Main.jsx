import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import { getPokemons, getPokemon, getPokemonsByType } from '../services/api'

// Components
import Search from './Search'
import Cart from './Cart'
import List from './List'

function Main({ theme }) {
  const [pokemons, setPokemons] = useState([])

  const [selected, setSelected] = useState([])

  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    getPokemons().then((data) => setPokemons(data))
  }, [])

  useEffect(() => {
    getPokemonsByType(theme.id).then((data) => setPokemons(data))
  }, [theme])

  useEffect(() => {
    if (!keyword) return
    getPokemon(keyword).then((data) => {
      if (data) {
        setPokemons([data])
      } else {
        setPokemons([])
      }
    })
  }, [keyword])

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <div className="main__selection">
            <Search setKeyword={setKeyword} />
            <List pokemons={pokemons} selected={selected} setSelected={setSelected} />
          </div>
          <Cart selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </main>
  )
}

Main.propTypes = {
  theme: PropTypes.object
}

export default Main
