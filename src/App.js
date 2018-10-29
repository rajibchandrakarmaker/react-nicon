import React, { Component } from 'react';
import Icon from 'react-nicon';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <ul>
      <li>
        <Icon icon="icofont-apple" />
         <p>icon="apple"</p>
      </li>
      <li>
        <Icon icon="icofont-apple" size="5" />
          <p>icon="apple" size="5"</p>
      </li>
      <li>
        <Icon icon="icofont-apple" size="5" flip="v" />
          <p>icon="apple" size="5" flip="v" </p>
      </li>
      <li>
        <Icon icon="icofont-apple" rotate="270" size="5" />
          <p>icon="apple" rotate="270" size="5"</p>
      </li>
  </ul>
        </header>
      </div>
    );
  }
}

export default App;
