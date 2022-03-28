import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

function PlanetDetail({planetId, handleRemovePlanet}) {

    const { planetName } = useParams()
    const [planet, setPlanet] = useState({})

    useEffect(() => {
      fetch(`http://localhost:3001/planets?name=${planetName}`)
      .then(res => res.json())
      .then(data => setPlanet(data[0] || {}))
    }, [planetId])

    return (
        <div className="white-border">

            <h3>{planet.name || "Select a planet to see its info"}</h3>

            <p>Orbital Period (in Earth days): {planet.orbital_period_in_earth_days || "__"}</p>

            <p>Fun fact: {planet.fun_fact || "_______________"}</p>

            <p>Is a planet: {planet.is_planet ? "Yes": "No"}</p>

        </div>
    )
}

export default PlanetDetail
