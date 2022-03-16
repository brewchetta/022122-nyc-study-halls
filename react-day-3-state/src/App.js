import { useState } from 'react'
import IsItOn from './IsItOn'

const bopItCommands = ['bop it', 'twist it', 'pull it', 'spin it', 'flick it']

function App() {

  // state --> can be a preset value
  // state can change
  const [isOn, setIsOn] = useState('hello')
  const [counter, setCounter] = useState(10)
  const [currentCommand, setCurrentCommand] = useState('bop it')
  const [array, setArray] = useState([])

  function handleClick() {
    setIsOn(previousState => !previousState)
  }

  function handleClickCounter() {
    setCounter(internalValue => {
      console.log('first internalValue: ', internalValue)
      return internalValue + 1
    })
    setCounter(internalValue => {
      console.log('second internalValue: ',internalValue)
      return internalValue + 1
    })
    setCounter(() => {
      console.log('counter: ', counter)
      return counter + 1
    })
  }

  function handleBopIt() {
    const randomIndex = Math.floor(Math.random() * bopItCommands.length)
    const command = bopItCommands[randomIndex]
    setCurrentCommand(command)
  }

  function addToArray() {
    setArray(array => [...array, 1])
  }

  return (
    <div className="App">

      <h1>State & Events</h1>

      <button onClick={handleClick}>Toggle IT</button>

      <button onClick={handleClickCounter}>{counter}</button>

      <button onClick={handleBopIt}>{currentCommand}</button>

      <button onClick={addToArray}>Add to Array</button>

      <p>{array.join(',')}</p>

      <IsItOn onClick={handleBopIt} isOn={isOn} setIsOn={setIsOn} />

    </div>
  );
}

export default App;