import { useState } from 'react'
import planetsData from '../data/planets'
import PlanetDetail from './PlanetDetail';
import PlanetList from './PlanetList'

function App() {

    // first take the planets and add them to state
  const [planets, setPlanets] = useState(planetsData)
  const [displayPlanetId, setDisplayPlanetId] = useState(1)

  const displayPlanet = planets.find(planet => planet.id === displayPlanetId)

  return (
    <div className="App">

      <header>

        <h1>Information and Control Flow</h1>

        <h2>As explained by planets</h2>

      </header>

      <PlanetList planets={planets} setDisplayPlanetId={setDisplayPlanetId} />

      <PlanetDetail planet={displayPlanet} setPlanets={setPlanets} />

    </div>
  );
}

export default App;
