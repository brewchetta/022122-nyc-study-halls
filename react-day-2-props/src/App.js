import React from 'react'
import BurgerList from './BurgerList'
import burgers from './burger-data'

function App() {
  return (
    <div className="App">

      <h1>Hamburger Rater</h1>

      <img src="https://emojipedia-us.s3.amazonaws.com/social/emoji/hamburger.png" alt="image of all the burgers!" />

      <BurgerList burgers={burgers} catchphrase="don't eat pandas" />

      {/* { burgers: Array, catchphrase: "don't eat pandas" }*/}

    </div>
  );
}

export default App;
