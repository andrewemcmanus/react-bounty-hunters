import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Bounties</h1>
        <Home />
        <Show />
        <New />
        <Edit />
      </div>
    );
  }
}

export default App;
