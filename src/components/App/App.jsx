import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import HomePage from '../HomePage/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">          
          <h2>Andrew Doyle</h2>
        </div>
        <HomePage />
      </div>
    );
  }
}

export default App;
