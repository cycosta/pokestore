import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Pokeball from './Pokeball'

function Search({ setKeyword }) {
  const [searchValue, setSearchValue] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setKeyword(searchValue)
  }

  return (
    <form action="" className="search" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="search"
        name="search"
        className="search__input"
        placeholder="Find your Pokémon"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />
      <button type="submit" className="search__button">
        <Pokeball />
      </button>
    </form>
  )
}

Search.propTypes = {
  setKeyword: PropTypes.func,
}

export default Search
