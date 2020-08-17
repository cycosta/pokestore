import React from 'react'

// Components
import Search from './Search'
import Cart from './Cart'
import List from './List'

function Main() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <div className="main__selection">
            <Search />
            <List />
          </div>
          <Cart />
        </div>
      </div>
    </main>
  )
}

export default Main
