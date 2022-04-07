import { useState, useEffect, useContext } from 'react'
import { FavDuckContext } from '../context/FavDuckContext'

function DuckDisplay({duck, setFavDuck}) {

  const favDuck = useContext(FavDuckContext)

  const handleClick = () => setFavDuck(duck)

  return (
    <div className="card">

      <img src={duck.image} alt={`image of ${duck.name}`} />

      <p><button onClick={handleClick}>{favDuck === duck ? "🟢" : "⭕"}</button> {duck.name}</p>

    </div>
  )
}

export default DuckDisplay
