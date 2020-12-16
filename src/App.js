import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';
{/* UPGRADE THIS TO SLUGIFIED 'NAME' */}
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Bounties</h1>
        <Switch>
          <Nav />
          <Route exact path='/'> <Home /> </Route>
          <Route path='/show/:id'> <Show /> </Route>
          <Route path='/new'> <New /> </Route>
          <Route path='/edit/:id'> <Edit /> </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
