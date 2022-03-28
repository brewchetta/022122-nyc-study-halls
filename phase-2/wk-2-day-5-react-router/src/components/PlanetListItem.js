import { Link } from 'react-router-dom'

function PlanetListItem({planet, setDisplayPlanetId}) {

    return (
        <li onClick={() => setDisplayPlanetId(planet.id)}>

          <Link to={`/planet-detail/${planet.name}`}>

            {planet.name}

          </Link>

        </li>
    )

}

export default PlanetListItem
