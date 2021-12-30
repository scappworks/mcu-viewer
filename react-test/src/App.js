import './App.css';
import marvelImage from './marvelImage.png'
import React from 'react';
import Api from './components/Api.js'

function App() {

  return (
    <div className="container">
      <header>
        <img className="marvel-image" src={ marvelImage } alt="Marvel" />
      </header>

      <Api />
    </div>
  );
}

export default App;