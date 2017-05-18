import React, {Component} from 'react';
import ApiCalls from './helper.js'

class UserSignIn extends Component{
  constructor(props) {
    super(props)

  }

  handleNewUser() {
    const newUserBody = {
      name: 'bob',
      password: 'password',
      email: 'bob@gmail.com'
    }

    const signInBody = {
      email: 'bob@gmail.com',
      password: 'password'
    }

    const newUserApi = '/api/users/new'
    const signInApi = '/api/users/'
    let { handleSignIn, userId } = this.props

    fetch(signInApi,{
      method: 'POST',
      body: JSON.stringify(signInBody),
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
    .then(responseId => {handleSignIn(responseId.data)})
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
