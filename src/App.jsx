import React, { useState, useEffect } from 'react';

import { types } from '../src/assets/javascript/pokemon'

// Main style
import './assets/stylesheets/app.scss';

// Components
import Header from './components/Header'
import Main from './components/Main'

function App() {
  const { standard } = types

  const [theme, setTheme] = useState(standard)

  useEffect(() => {
    document.documentElement.style.setProperty('--theme', theme.color)
  }, [theme])

  return (
    <div>
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
    </div>
  );
}

export default App;
