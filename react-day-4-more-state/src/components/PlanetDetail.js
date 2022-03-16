function PlanetDetail({planet}) {
    return (
        <div>

            <h3>{planet.name}</h3>

            <p>Orbital Period (in Earth days): {planet.orbital_period_in_earth_days}</p>

            <p>Fun fact: {planet.fun_fact}</p>


        </div>
    )
}

export default PlanetDetail