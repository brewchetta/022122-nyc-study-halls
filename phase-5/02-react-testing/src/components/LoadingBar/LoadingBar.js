import { useState, useEffect } from 'react'

function LoadingBar() {

  const [loadedPercent, setLoadedPercent] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      setLoadedPercent(100)
    }, 2000)
  }, [])

  const loadingBarStyle = {width: `${loadedPercent}%`, height: '30px', backgroundColor: 'green', transition: 'width 1s'}

  return (
    <div className="loading-bar-container" style={{width: '200px', height: '30px'}}>

      <div className="loading-bar" style={loadingBarStyle} />

    </div>
  )

}

export default LoadingBar;
