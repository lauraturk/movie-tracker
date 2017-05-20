import React, {Component} from 'react';

// import ApiCalls from './helper.js'

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
    this.apiFetch('/api/users/new', this.state)
    .then(responseId => this.handleSignInUser())
    .catch(error => console.log(error, "new user error"))
  }

  handleSignInUser() {
    let { handleSignIn, history } = this.props
    this.apiFetch('/api/users/', {email: this.state.email, password: this.state.password})
    .then(responseId => {
      handleSignIn(responseId.data)
      history.history.replace('/')
    })
    .catch(error => console.log(error, "handleSignInUser error"))

  }

  apiFetch(fetchType, body) {
    return fetch(fetchType, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
  }

  render() {
    let { userId } = this.props;
    return(
      <div>
        <form>
          <input  value={this.state.email}
                  placeholder="email"
                  onChange={ e => this.setState({ email: e.target.value} )} />
          <input  value={this.state.password}
                  placeholder="password"
                  onChange={ e => this.setState({ password: e.target.value} )} />

          <input type="submit" placeholder="Sign In" onClick={ e => {
            e.preventDefault()
            this.handleSignInUser()

          }}/>

        </form>

        <form>
          <input  value={this.state.name}
                  placeholder="Name"
                  onChange={ e => this.setState({ name: e.target.value} )} />
          <input  value={this.state.email}
                  placeholder="email"
                  onChange={ e => this.setState({ email: e.target.value} )} />
          <input  value={this.state.password}
                  placeholder="password"
                  onChange={ e => this.setState({ password: e.target.value} )} />

          <input type="submit" placeholder="Create Account" onClick={ e => {
            e.preventDefault()
            this.handleNewUser()
          }}/>
        </form>
      </div>
    )
  }
}

export default UserSignIn;
