import React, { useState, useEffect } from 'react'
import { getPokemons, getPokemon } from '../services/api'

// Components
import Search from './Search'
import Cart from './Cart'
import List from './List'

function Main() {
  const [pokemons, setPokemons] = useState([])

  const [selected, setSelected] = useState([])

  const [keyword, setKeyword] = useState('')

  useEffect(() => {
    if (keyword) {
      getPokemon(keyword).then((data) => {
        if (data) {
          setPokemons([data])
        } else {
          setPokemons([])
        }
      })
    } else {
      getPokemons().then((data) => {
        setPokemons(data.results)
      })
    }
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

export default Main
