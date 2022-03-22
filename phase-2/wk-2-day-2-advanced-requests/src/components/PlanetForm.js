import { useState } from 'react'

const defaultState = {
    name: '',
    orbital_period_in_earth_days: 0,
    fun_fact: '',
    is_planet: false
}

function PlanetForm({addPlanet}) {
    
    const [formState, setFormState] = useState(defaultState)

    // OPTIMISTIC
    // renders no matter what

    // PESSIMISTIC
    // waits for the response

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:3001/planets`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then(res => res.json())
        .then(data => addPlanet(data))
    }

    function handleChange(e) {
        const targetName = e.target.name
        const targetValue = e.target.value
        setFormState({...formState, [targetName]: targetValue})
    }

    function toggleIsPlanet(e) {
        setFormState({...formState, is_planet: !formState.is_planet})
    } 

    return (
        <form onSubmit={handleSubmit} className="white-border">

            <h3>List a New Planet</h3>

            <label htmlFor="name">Name: </label>
            <input name="name" value={formState.name} onChange={handleChange}  />

            <label htmlFor="orbital_period_in_earth_days">Orbital Period (in Earth days): </label>
            <input name="orbital_period_in_earth_days" value={formState.orbital_period_in_earth_days} type="number" step="0.01" onChange={handleChange}/>

            <label htmlFor="fun_fact">Fun Fact: </label>
            <input name="fun_fact" value={formState.fun_fact} onChange={handleChange}/>

            <label htmlFor="is_planet">Is It A "Real" Planet: </label>
            <input name="is_planet" type="checkbox" checked={formState.is_planet} onChange={toggleIsPlanet} />

            <input type="submit" value="List your planet" />

        </form>
    )

}

export default PlanetForm
