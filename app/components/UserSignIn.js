import React, {Component} from 'react';

import ApiCalls from './ApiHelper.js'

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
    ApiCalls.logInFetch('/api/users/new', this.state)
    .then(responseId => this.handleSignInUser())
    .catch(error => console.log(error, "new user error"))
  }

  handleSignInUser() {
    let { handleSignIn, loadUserFavorites, history } = this.props

    ApiCalls.logInFetch('/api/users/',
      {email: this.state.email, password: this.state.password}
    )
    .then(responseId => {
      handleSignIn(responseId.data)
      this.retrieveFavs(responseId.data)
      history.history.replace('/')
    })
    .then(loadUserFavorites())
    .catch(error => console.log(error, "handleSignInUser error"))

  }

  retrieveFavs(userData) {
    let { loadUserFavorites } = this.props

    fetch(`api/users/${userData.id}/favorites/`)
    .then(response => response.json())
    .then(favArrObj => {loadUserFavorites(favArrObj.data)})
    .catch(error => console.log('retrieve favorites error: ', error))
  }

  render() {
    let { userId, handleSignOut, clearAllFavorites } = this.props;
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
        <button onClick={() => {handleSignOut();
        clearAllFavorites()}}>Sign Out</button>
      </div>
    )
  }
}

export default UserSignIn;
