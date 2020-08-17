import React from 'react'
import Pokeball from './Pokeball'

function Search() {
  return (
    <form action="" className="search">
      <label htmlFor="search" className="search__label">
        <input type="search" name="search" className="search__input" placeholder="Find your Pokémon" />
        <Pokeball />
      </label>
    </form>
  )
}

export default Search
