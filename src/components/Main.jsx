import React, { useState, useEffect } from 'react'
import { getPokemons } from '../services/api'

// Components
import Search from './Search'
import Cart from './Cart'
import List from './List'

function Main() {
  const [pokemons, setPokemons] = useState([])

  const [selected, setSelected] = useState([])

  useEffect(() => {
    getPokemons().then((data) => {
      setPokemons(data.results)
    })
  }, [])

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <div className="main__selection">
            <Search />
            <List pokemons={pokemons} selected={selected} setSelected={setSelected} />
          </div>
          <Cart selected={selected} setSelected={setSelected} />
        </div>
      </div>
    </main>
  )
}

export default Main
