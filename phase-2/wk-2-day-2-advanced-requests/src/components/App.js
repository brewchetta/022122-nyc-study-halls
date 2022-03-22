import { useState, useEffect } from 'react'
import PlanetDetail from './PlanetDetail';
import PlanetList from './PlanetList'
import PlanetForm from './PlanetForm'
import spaceShuttle from '../assets/space-shuttle.png'

function App() {

  const [planets, setPlanets] = useState([])
  const [displayPlanetId, setDisplayPlanetId] = useState(0)

  useEffect(() => {
    fetch('http://localhost:3001/planets')
    .then(res => res.json())
    .then(data => setPlanets(data))
  } ,[])

  function addPlanet(newPlanet) {
    setPlanets(planets => [...planets, newPlanet])
  }

  function removePlanet(planetToRemove) {
    setPlanets(planets => planets.filter(planet => planet.id !== planetToRemove.id))
  }

  return (
    <div className="App grid column-3">

      <img className="absolute fly-in" src={spaceShuttle} alt="space shuttle" />

      <PlanetList planets={planets} setDisplayPlanetId={setDisplayPlanetId} />

      <PlanetDetail displayPlanetId={displayPlanetId} removePlanet={removePlanet} />

      <PlanetForm addPlanet={addPlanet} setPlanets={setPlanets} />

    </div>
  );
}

export default App;
