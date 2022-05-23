import { useState, useEffect } from 'react'

import ClickCounter from '../ClickCounter'
import Numbers from '../Numbers'

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('/')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])

  return (
    <div className="App">
      Hello

      <Numbers items={items} />

    </div>
  );
}

export default App;
