import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Show from './pages/Show';
import New from './pages/New';
import Edit from './pages/Edit';
import Nav from './components/Nav';
{/* UPGRADE THIS TO SLUGIFIED 'NAME' */}
class App extends Component {
  constructor() {
    super()
    this.state = {
      bounties: [],
      finishedLoading: false
    }
  }

  async componentDidMount() {
    const response = await fetch('http://localhost:3001/bounties');
    const json = await response.json;
    // console.log(json);
    this.setState({ bounties: json.bounties, finishedLoading: true })
  }

  reload = async () => {
    const response = await fetch('http://localhost:3001/bounties');
    const json = await response.json;
    // console.log(json);
    this.setState({ bounties: json.bounties, finishedLoading: true })
  }

  render() {
    if (!this.state.finishedLoading) {
      return (
        <div className="App">
          <h1></h1>
        </div>
      )
    }
    if (!this.state.bounties) {
      return (
        <div className="App">
          <h1>Loading...</h1>
        </div>
      )
    }
    return (
      <div className="App">
      <h1>Bounties</h1>
        <Switch>
          <Nav />
          <Route exact path='/'> <Home bounties={this.state.bounties}/> </Route>
          <Route path='/show/:id' render={(routeProps) => {
            const bounty = this.state.bounties.find((b) => {
              return b._id === routeProps.match.params.id
            })
            return <Show bounty={bounty} />
          }} />
          <Route path='/new'> <New /> </Route>
          <Route path='/edit/:id'> <Edit /> </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
