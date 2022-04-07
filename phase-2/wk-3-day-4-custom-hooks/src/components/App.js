import { useState, useEffect, useContext } from 'react'
import DuckList from './DuckList'
import useFISH from '../useFetchItemsState'
import { FavDuckContext } from '../context/FavDuckContext'

function App() {

  const favDuck = useContext(FavDuckContext)

  const [ducks, setDucks] = useFISH('http://localhost:3001/ducks')

  return (
    <div className="App">

      <h1>Study Hall - Advanced Hooks</h1>

      <DuckList ducks={ducks} />

      <p>Favorite Duck is currently: {favDuck.name || 'none'}</p>

    </div>
  );
}

export default App;
