import { useState, useEffect } from 'react'

function PlanetDetail({displayPlanetId, removePlanet}) {

    const [planet, setPlanet] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3001/planets/${displayPlanetId}`)
        .then(res => res.json())
        .then(data => setPlanet(data))
    }, [displayPlanetId])

    function togglePlanetStatus() {
        // write something here to make the change persist...
    }

    function handleDelete() {
        // DELETE REQUEST
        fetch(`http://localhost:3001/planets/${displayPlanetId}`, {
            method: 'DELETE'
        })
        .then(res => {
            if (res.ok) {
                removePlanet(planet)
            } else {
                alert('Something went wrong...')
            }
        })
        .catch(err => alert('Something went wrong...'))
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
