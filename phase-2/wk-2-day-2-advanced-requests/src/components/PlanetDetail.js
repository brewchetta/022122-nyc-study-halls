import { useState, useEffect } from 'react'

function PlanetDetail({planetId}) {

    const [planet, setPlanet] = useState({})

    // write something here to get the planet details based on the planetId...
    // you might want to use a useEffect...

    function togglePlanetStatus() {
        // write something here to make the change persist...
    }

    function handleDelete() {
        // write something here to persist the delete...
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
