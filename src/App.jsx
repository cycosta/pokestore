import React from 'react';

// Main style
import './assets/stylesheets/app.scss';

// Components
import Header from './components/Header'
import Search from './components/Search'

function App() {
  return (
    <div>
      <Header />
      <Search />
    </div>
  );
}

export default App;
