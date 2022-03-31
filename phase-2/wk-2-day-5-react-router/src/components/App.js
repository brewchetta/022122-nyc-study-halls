import { useState, useEffect } from 'react'
import PlanetDetail from './PlanetDetail';
import PlanetList from './PlanetList'
import PlanetForm from './PlanetForm'
import spaceShuttle from '../assets/space-shuttle.png'
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [planets, setPlanets] = useState([])
  const [displayPlanetId, setDisplayPlanetId] = useState(1)

  useEffect(() => {
    fetch('http://localhost:3001/planets')
    .then(res =>res.json())
    .then(setPlanets)
  }, [])

  function handleAddPlanet(planet) {
    return fetch(`http://localhost:3001/planets`, {
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

      <nav>
        <Link to="/planet-list">Planet List</Link>
        <Link to="/planet-list/planet-detail">Planet Detail</Link>
        <Link to="/new-planet">New Planet</Link>
        <Link to="/non-existent">This Won't Work</Link>
      </nav>

      <img className="absolute fly-in" src={spaceShuttle} alt="space shuttle" />

      <Routes>

        <Route path="planet-list" element={<PlanetList planets={planets} setDisplayPlanetId={setDisplayPlanetId} />}/>

        <Route path="planet-detail/:planetName" element={<PlanetDetail planetId={displayPlanetId} setPlanets={setPlanets} handleRemovePlanet={handleRemovePlanet} />} />

        <Route path="/new-planet" element={<PlanetForm handleAddPlanet={handleAddPlanet} />} />

        <Route path="*" element={<img className="four-oh-four" src="https://www.elegantthemes.com/blog/wp-content/uploads/2020/02/000-404.png" alt="Page not found, the panda is angry" /> } />

      </Routes>

    </div>
  );
}

export default App;
