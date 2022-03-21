import { useState, useEffect } from 'react'
import PlanetDetail from './PlanetDetail';
import PlanetList from './PlanetList'
import PlanetForm from './PlanetForm'

function App() {

  const [planets, setPlanets] = useState([])
  const [displayPlanetId, setDisplayPlanetId] = useState(1)

  // write something here to get all the planets when the app first loads...
  // you may want to use a useEffect...

  return (
    <div className="App grid column-3">

      <PlanetList planets={planets} setDisplayPlanetId={setDisplayPlanetId} />

      <PlanetDetail planetId={displayPlanetId} setPlanets={setPlanets} />

      <PlanetForm />

    </div>
  );
}

export default App;
