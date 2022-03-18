function FavoriteDadJokesDisplay({favoriteJokes = []}) {

  const renderedJokes = favoriteJokes.map(jokeObj => <p>{jokeObj.joke}</p>)

  return (

    <div>

      {renderedJokes}

    </div>

  )
}

export default FavoriteDadJokesDisplay
