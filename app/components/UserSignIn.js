import React, {Component} from 'react';

import ApiCalls from './ApiHelper.js'
import { NavLink, Link, Route } from 'react-router-dom'

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

    ApiCalls.logInFetch(this.state.email, this.state.password)
    .then(responseId => {
      handleSignIn(responseId.data)
      history.history.replace('/')
      this.retrieveFavs(responseId.data)
    })
    .then(loadUserFavorites())
    .catch(error => console.log(error, "handleSignInUser error"))

  }

  retrieveFavs(userData) {
    let { loadUserFavorites } = this.props
    console.log('userId logging in: ', userData.id);
    fetch(`api/users/${userData.id}/favorites`)
    .then(response => response.json())
    .then(favArrObj => {
      loadUserFavorites(favArrObj.data)
    })
    .catch(error => console.log('retrieve favorites error: ', error))
  }

  render() {
    let { userId, handleSignOut, clearAllFavorites } = this.props;

    const newUserSignInForm = () => {
      return(
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

          <input  type="submit"
                  placeholder="Create Account"
                  onClick={ e => {
                    e.preventDefault()
                    this.handleNewUser()
                  }}/>
        </form>
      )
    }

    const currentUserSignForm = () => {
      return (
        <form>
          <input  value={this.state.email}
                  placeholder="email"
                  onChange={ e => this.setState({ email: e.target.value} )} />
          <input  value={this.state.password}
                  placeholder="password"
                  onChange={ e => this.setState({ password: e.target.value} )} />

          <input  type="submit"
                  placeholder="Sign In"
                  onClick={ e => {
                    e.preventDefault()
                    this.handleSignInUser()
                  }}/>
        </form>
      )
    }

    return(
      <div>
      <Route path='/login/newUser' render={ () => newUserSignInForm()}/>
      <Route path='/login/signIn' render={ () => currentUserSignForm()}/>

        <NavLink to='/login/newUser' activeClassName="selected">Create An Account</NavLink>
        <NavLink to='/login/signIn' activeClassName="selected">Sign In</NavLink>


        <div onClick={() => {
                  handleSignOut();
                  clearAllFavorites()}}>Sign Out</div>
      </div>
    )
  }
}

export default UserSignIn;
