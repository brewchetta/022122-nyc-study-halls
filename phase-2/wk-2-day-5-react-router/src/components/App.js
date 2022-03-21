import { useState, useEffect } from 'react'
import PlanetDetail from './PlanetDetail';
import PlanetList from './PlanetList'
import PlanetForm from './PlanetForm'
import spaceShuttle from '../assets/space-shuttle.png'

function App() {

  const [planets, setPlanets] = useState([])
  const [displayPlanetId, setDisplayPlanetId] = useState(1)

  useEffect(() => {
    fetch('http://localhost:3001/planets')
    .then(res =>res.json())
    .then(setPlanets)
  }, [])

  function handleAddPlanet(planet) {
    fetch(`http://localhost:3001/planets`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(planet)
    })
    .then(res => res.json())
    .then(newPlanet => {
      setPlanets(prev => [...prev, newPlanet])
    })
  }

  function handleRemovePlanet(planetId) {
    const filteredPlanets = planets.filter(p => p.id !== planetId)
    setPlanets(filteredPlanets)
  }

  return (
    <div className="App grid column-3">

      <img className="absolute fly-in" src={spaceShuttle} alt="space shuttle" />

      <PlanetList planets={planets} setDisplayPlanetId={setDisplayPlanetId} />

      <PlanetDetail planetId={displayPlanetId} setPlanets={setPlanets} handleRemovePlanet={handleRemovePlanet} />

      <PlanetForm handleAddPlanet={handleAddPlanet} />

    </div>
  );
}

export default App;
