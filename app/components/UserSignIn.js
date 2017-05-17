import React, {Component} from 'react';
import ApiCalls from './helper.js'

class UserSignIn extends Component{
  constructor() {
    super()
  }

  handleNewUser() {
    const thatObj = {
      name: 'thatnastylady',
      password: 'thatnastylady',
      email: 'thatnastylady@gmail.com'
    }
    fetch('/api/users/new',{
      method: 'POST',
      body: JSON.stringify(thatObj),
      headers: { 'Content-Type':'application/json' },
    })
    .then(userId => console.log(userId))
    .catch(error => console.log(error))
    // .then(response => response.json())
  }

  render() {
    return(
      <div><button onClick={(e) => {this.handleNewUser()}}>That Button</button></div>
    )
  }
}

export default UserSignIn;


// const myHeaders = new Headers();
// myHeaders.append('Content-Type', 'application/json')
