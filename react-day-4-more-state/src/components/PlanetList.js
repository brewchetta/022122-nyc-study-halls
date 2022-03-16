import { useState } from 'react'
import planetsData from '../data/planets'
import PlanetDetail from './PlanetDetail'
import PlanetListItem from './PlanetListItem'

function PlanetList() {

    // first take the planets and add them to state
    const [planets, setPlanets] = useState(planetsData)

    // map through planets and display them in child components
    const renderedPlanets = planets.map(planet => <PlanetListItem key={planet} planet={planet} />)

    return (
        <ol>

            {renderedPlanets}
            
        </ol>
    )
}

export default PlanetList