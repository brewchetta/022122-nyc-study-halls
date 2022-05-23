import { useState, useEffect } from 'react'

function LoadingBar() {

  const [loadedPercent, setLoadedPercent] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoadedPercent(100)
    }, 2000)
  }, [])

  return (
    <div className="loading-bar-container" style={{width: '200px'}}>

      <div className="loading-bar" style={{width: `${loadedPercent}%`, backgroundColor: 'green'}} />

    </div>
  )

}

export default LoadingBar;
