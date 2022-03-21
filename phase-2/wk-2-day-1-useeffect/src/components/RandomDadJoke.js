import { useState, useEffect } from 'react'

function RandomDadJoke(props) {

  const [currentJoke, setCurrentJoke] = useState({})
  const [numberOfJokesFetched, setNumberOfJokesFetched] = useState(0)

  useEffect(() => {
    fetchJoke()
  }, [])

  useEffect(() => {

    if (currentJoke.joke) {
      setNumberOfJokesFetched(prev => prev + 1)
    }

  }, [currentJoke])

  function fetchJoke() {
    fetch('https://icanhazdadjoke.com/', {headers: {'Accept': 'application/json'}})
    .then(res => res.json())
    .then(fetchedJoke => setCurrentJoke(fetchedJoke))
  }

  function handleFetchNewJoke() {
    fetchJoke()
  }

  function saveCurrentJoke() {
    console.log('use this to save the current joke to an array of favorite jokes!')
  }

  return (

    <div>

      <p>{currentJoke.joke || 'Loading jokes...'}</p>

      <p>Number of jokes fetched: {numberOfJokesFetched}</p>

      <button className='rainbow-cycle-hover' onClick={saveCurrentJoke}>Save Joke</button>

      <button className='rainbow-cycle-hover' onClick={handleFetchNewJoke}>Get A New Joke</button>

    </div>

  )
}

export default RandomDadJoke
