import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from "./components/Message/Message";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to detecTroll!
          <Message/>
        </p>
      </header>
    </div>
  );
}

export default App;
