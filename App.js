import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './Content.js';
import Friend from './Friend.js';
import samsung from './samsung_S4.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Content book="Eloquent JavaScript. " price="24" published="2018"/>
      <Friend/>
    </div>
  );
}

export default App;
