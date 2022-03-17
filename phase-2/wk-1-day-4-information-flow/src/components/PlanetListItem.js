function PlanetListItem({planet, setDisplayPlanetId}) {

    return (
        <li onClick={() => setDisplayPlanetId(planet.id)}>{planet.name}</li>
    )

}

export default PlanetListItem