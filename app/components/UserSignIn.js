import React, {Component} from 'react';
import ApiCalls from './helper.js'

class UserSignIn extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: ''
    }
  }

  handleNewUser() {
    const newUserBody = {
      name: 'bob', password: 'password', email: 'bob@gmail.com'
    }

    const signInBody = {
      email: 'bob@gmail.com', password: 'password'
    }

    const newUserApi = '/api/users/new'
    const signInApi = '/api/users/'

    let { handleSignIn, userId } = this.props

    fetch(signInApi, {
      method: 'POST',
      body: JSON.stringify(signInBody),
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
    .then(responseId => handleSignIn(responseId.data))
    .catch(error => console.log(error))
  }



  render() {
    let { userId } = this.props;
    return(
      <div>
        <form onClick={ e => {
          e.preventDefault()
          this.handleNewUser()
        }}>

          <input  value={this.state.name}
                  placeholder="Name"
                  onChange={ e => this.setState({ name: e.target.value} )} />
          <input  value={this.state.email}
                  placeholder="email"
                  onChange={ e => this.setState({ email: e.target.value} )} />
          <input  value={this.state.password}
                  placeholder="password"
                  onChange={ e => this.setState({ password: e.target.value} )} />

          <button>Sign In</button>

        </form>
      </div>
    )
  }
}

export default UserSignIn;
