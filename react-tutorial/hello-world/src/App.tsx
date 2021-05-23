import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // const name = 'Patty';
  const list = ['Patty', 'Rolley', 'Bobby'];
  const greet = (name: string) => <p>Hello, {name || 'Guest'}!</p>;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {list.map((name) => (
            <li>Hello, {name}</li>
          ))}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
