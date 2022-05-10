import { useState } from 'react'

import Navbar from './Navbar'
import ItemList from './ItemList'
import Modal from './Modal'
import Toast from './Toast'

function App() {

  const [modalOpen, setModalOpen] = useState(false)

  const [toastOpen, setToastOpen] = useState(false)

  return (
    <div className="App">

      <Navbar />

      <ItemList />

      <button onClick={() => setModalOpen(!modalOpen)}>Toggle Modal</button>
      <button onClick={() => setToastOpen(!toastOpen)}>Toggle Toast</button>

      { modalOpen ? <Modal setModalOpen={setModalOpen} /> : null }

      { toastOpen ? <Toast /> : null }

    </div>
  );
}

export default App;
