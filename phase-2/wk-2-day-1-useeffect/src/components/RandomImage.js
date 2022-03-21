import { useEffect, useState } from 'react'

function RandomImage() {

  const [foxImage, setFoxImage] = useState('#')

  // INITIAL FETCH
  useEffect(() => {

    console.log('I am the side effect')
    fetch('https://randomfox.ca/floof/')
    .then(res => res.json())
    .then(data => setFoxImage(data.image))
  }, [])
  
  // INTERVAL SIDE EFFECT
  useEffect(() => {
    // SIDE EFFECT //
    const interval = setInterval(() => {
      fetch('https://randomfox.ca/floof/')
      .then(res => res.json())
      .then(data => setFoxImage(data.image))
    }, 3000)
    
    // CLEANUP //
    return () => {
      console.log('I am the cleanup')
      clearInterval(interval)
    }
  }, [])

  return (

    <img src={foxImage} alt="a random image goes here..." />

  )

}

export default RandomImage
