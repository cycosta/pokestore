import React, { useState, useEffect } from 'react'
import { getPokemons } from '../services/api'

// Components
import Search from './Search'
import Cart from './Cart'
import List from './List'

function Main() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data.results)
    })
  })

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <div className="main__selection">
            <Search />
            <List pokemons={pokemons} />
          </div>
          <Cart />
        </div>
      </div>
    </main>
  )
}

export default Main
