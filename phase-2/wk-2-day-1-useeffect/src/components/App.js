import RandomDadJoke from "./RandomDadJoke"
import FavoriteDadJokesDisplay from "./FavoriteDadJokesDisplay"
import RandomImage from "./RandomImage"

function App() {
  return (
    <div className="App">

      <h1>Study Hall - useEffect and Component Lifecycle</h1>

      <div className="grid column-3">

        <RandomDadJoke />

        <RandomImage />

        <FavoriteDadJokesDisplay />

      </div>


    </div>
  );
}

export default App;
