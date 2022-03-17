function PlanetDetail({planet, setPlanets}) {

    function toggleStatus() {
        setPlanets(internalPlanets => {
            return internalPlanets.map(pl => {
                if (pl !== planet) {
                    return pl
                } else {
                    return {...pl, is_planet: !pl.is_planet}
                }
            })
        })
    }

    return (
        <div className="white-border">

            <h3>{planet.name}</h3>

            <p>Orbital Period (in Earth days): {planet.orbital_period_in_earth_days}</p>

            <p>Fun fact: {planet.fun_fact}</p>

            <p>Is a planet: {planet.is_planet ? "True": "False"}</p>

            <button onClick={toggleStatus}>Change Planet Status</button>


        </div>
    )
}

export default PlanetDetail
