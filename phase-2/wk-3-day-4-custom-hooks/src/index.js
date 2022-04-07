import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './components/App';
import { FavDuckContext, defaultDuck } from './context/FavDuckContext'

ReactDOM.render(
  <FavDuckContext.Provider value={defaultDuck}>
    <App />
  </FavDuckContext.Provider>,
  document.getElementById('root')
);
