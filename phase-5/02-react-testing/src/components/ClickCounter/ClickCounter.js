import { useState } from 'react'

function ClickCounter() {
    const [counter, setCounter] = useState(0)

    const handleClick = () => setCounter(prevCounter => prevCounter + 1)

    return (
      <button onClick={handleClick}>
        {counter}
      </button>
    )
}

export default ClickCounter;
