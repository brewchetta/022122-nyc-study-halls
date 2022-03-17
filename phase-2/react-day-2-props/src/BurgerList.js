import React from 'react'
import IngredientsList from './IngredientsList'

function BurgerList({burgers}) {

    const mappedBurgers = burgers.map(burger => (
        <tr key={burger.id}>
            <td>{burger.name}</td>
            {burger.rating ? <td>{burger.rating}/10</td> : <td>No rating</td> }
            <td><IngredientsList keyz={burger.id} ingredients={burger.ingredients} /></td>
        </tr>
    ))

    return (
        <table>
            <thead>
                <th>Name</th>
                <th>Rating</th>
                <th>Ingredients List</th>
            </thead>

            <tbody>
                {mappedBurgers}
            </tbody>

        </table>
    )

}

export default BurgerList