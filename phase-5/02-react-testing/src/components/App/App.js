import { useState, useEffect } from 'react'

import Numbers from '../Numbers'
import ClickCounter from '../ClickCounter'
import Dashboard from '../Dashboard'
import LoadingBar from '../LoadingBar'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])

  return (
    <div className="App">

      <h1>React Testing!!!</h1>

      <Numbers items={items} />

      <ClickCounter />

      <Dashboard />

      <LoadingBar />

    </div>
  );
}

export default App;
