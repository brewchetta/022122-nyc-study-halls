import { useState } from 'react'
import RandomDadJoke from "./RandomDadJoke"
import FavoriteDadJokesDisplay from "./FavoriteDadJokesDisplay"
import RandomImage from "./RandomImage"

function App() {

  const [imgOpen, setImgOpen] = useState(true)

  return (
    <div className="App">

      <h1>Study Hall - useEffect and Component Lifecycle</h1>

      <div className="grid column-3">

        <RandomDadJoke />

        <div>

          {imgOpen ? <RandomImage /> : null}

          <br/>
        
          <button onClick={() => setImgOpen(isOpen => !isOpen)}>{imgOpen ? 'Close' : 'Open'} Image</button>

        </div>

        <FavoriteDadJokesDisplay />

      </div>


    </div>
  );
}

export default App;
