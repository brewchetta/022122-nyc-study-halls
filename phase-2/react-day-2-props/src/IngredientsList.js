import React from 'react'

function IngredientsList({ingredients}) {

    const mappedIngredients = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <ul>

            {mappedIngredients}

        </ul>
    )

}

export default IngredientsList