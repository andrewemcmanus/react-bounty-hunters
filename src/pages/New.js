import React, { Component } from 'react';
import FormField from '../components/FormField.js'
import { useHistory } from 'react-router-dom';

class New extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      wantedFor: '',
      client: '',
      reward: ''
    }
  }
  // setName = (e) => {
  //   this.setState({ name: e.target.value })
  // }
  //
  // setWantedFor = (e) => {
  //   this.setState({ wantedFor: e.target.value})
  // }

  handleInput = (e) => {
    // because e.target.name is the piece of state being passed around, we can use it like this,
      // rather than writing a new function for every single input in this form
    this.setState({ [e.target.name]: e.target.value })
  }

  submitForm = () => {
    fetch('http://localhost:3001/bounties', {
      method: 'POST',
      headers: {
        'Content Type': 'application/json'
      },
      // mode: 'no-cors',
      body: JSON.stringify(this.state)
    }).then(res) => {
      res.json().then((json) => {
        // console.log(json)
        // console.log(res.body);
        this.props.history.push(`/show/${json.bounty._id}`)
      })
    }
  }

  render() {
    return (
      <div>
        <h2>Create a new bounty:</h2>
          <FormField labelLink='name' displayLabel='Name' value={this.state.name} handler={this.handleInput} />
          <FormField labelLink='wantedFor' displayLabel='Wanted For' value={this.state.wantedFor} handler={this.handleInput} />
          <FormField labelLink='client' displayLabel='Client' value={this.state.wantedFor} handler={this.handleInput} />
          <FormField labelLink='reward' displayLabel='Reward' value={this.state.wantedFor} handler={this.handleInput} />
          <input type="submit" onClick={this.submitForm} value='Create!' />
      </div>
    )
  }
}

export default New;
