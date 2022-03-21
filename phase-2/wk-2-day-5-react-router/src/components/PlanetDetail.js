import { useState, useEffect } from 'react'

function PlanetDetail({planetId, handleRemovePlanet}) {

    const [planet, setPlanet] = useState({})

    useEffect(() => {
      fetch(`http://localhost:3001/planets/${planetId}`)
      .then(res => res.json())
      .then(setPlanet)
    }, [planetId])

    function togglePlanetStatus() {
      fetch(`http://localhost:3001/planets/${planetId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accepts': 'application/json'
        },
        body: JSON.stringify({is_planet: !planet.is_planet})
      })
      setPlanet(planet => ({...planet, is_planet: !planet.is_planet}))
    }

    function handleDelete() {
      fetch(`http://localhost:3001/planets/${planetId}`, { method: 'DELETE' })
      setPlanet({})
      handleRemovePlanet(planetId)
    }

    return (
        <div className="white-border">

            <h3>{planet.name || "Select a planet to see its info"}</h3>

            <p>Orbital Period (in Earth days): {planet.orbital_period_in_earth_days || "__"}</p>

            <p>Fun fact: {planet.fun_fact || "_______________"}</p>

            <p>Is a planet: {planet.is_planet ? "Yes": "No"}</p>

            <button onClick={togglePlanetStatus}>Change Planet Status</button>

            <button onClick={handleDelete}>Delete Planet</button>

        </div>
    )
}

export default PlanetDetail
