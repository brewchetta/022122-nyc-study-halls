import { useState, useEffect } from 'react'
import PlanetDetail from './PlanetDetail';
import PlanetList from './PlanetList'
import PlanetForm from './PlanetForm'
import spaceShuttle from '../assets/space-shuttle.png'

function App() {

  const [planets, setPlanets] = useState([])
  const [displayPlanetId, setDisplayPlanetId] = useState(1)

  // write something here to get all the planets when the app first loads...
  // you may want to use a useEffect...

  return (
    <div className="App grid column-3">

      <img className="absolute fly-in" src={spaceShuttle} alt="space shuttle" />

      <PlanetList planets={planets} setDisplayPlanetId={setDisplayPlanetId} />

      <PlanetDetail planetId={displayPlanetId} setPlanets={setPlanets} />

      <PlanetForm />

    </div>
  );
}

export default App;
