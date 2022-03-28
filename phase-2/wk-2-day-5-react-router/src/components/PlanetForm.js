import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function PlanetForm({handleAddPlanet}) {

    const navigate = useNavigate()

    const [planetInputs, setPlanetInputs] = useState({
      name: '',
      orbital_period_in_earth_days: 0,
      fun_fact: '',
      is_planet: false
    })

    function handleSubmit(e) {
      e.preventDefault()
      handleAddPlanet(planetInputs)
      .then(() => navigate(`/planet-detail/${planetInputs.name}`))
    }

    function handleChange(e) {
      setPlanetInputs(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    return (
        <form onSubmit={handleSubmit} className="white-border">

            <h3>List a New Planet</h3>

            <label htmlFor="name">Name: </label>
            <input name="name" value={planetInputs.name} onChange={handleChange}/>

            <label htmlFor="orbital_period_in_earth_days">Orbital Period (in Earth days): </label>
            <input
              name="orbital_period_in_earth_days"
              type="number"
              step="0.01"
              value={planetInputs.orbital_period_in_earth_days}
              onChange={handleChange}
            />

            <label htmlFor="fun_fact">Fun Fact: </label>
            <input
              name="fun_fact"
              value={planetInputs.fun_fact}
              onChange={handleChange}
            />

            <label htmlFor="is_planet">Is It A Real Planet: </label>
            <input
              name="is_planet"
              type="checkbox"
              checked={planetInputs.is_planet}
              onChange={() => setPlanetInputs(prev => ({...prev, is_planet: !prev.is_planet}))}
            />

            <input type="submit" value="List your planet" />

        </form>
    )

}

export default PlanetForm
