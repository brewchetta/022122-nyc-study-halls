import publicSeal from '../assets/public-seal.gif'
import TaxForm from "./TaxForm"

function App() {
  return (
    <div className="App">

      <h1>Study Hall - React Controlled Forms and Inputs</h1>

      <TaxForm />

      <img src={publicSeal} alt="Seal of the IRS" />

    </div>
  );
}

export default App;
