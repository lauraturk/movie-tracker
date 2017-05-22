import React, {Component} from 'react';

import ApiCalls from './ApiHelper.js'
import { NavLink, Link, Route } from 'react-router-dom'

class UserSignIn extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: '',
      errorClass: 'hidden'
    }
  }

  handleNewUser() {
    ApiCalls.newUserFetch(this.state)
    .then(responseId => this.handleSignInUser())
    .catch(error => console.log(error, "new user error"))
  }

  handleSignInUser() {
    let { handleSignIn, loadUserFavorites, history } = this.props

    ApiCalls.logInFetch(this.state)
    .then(responseId => {
      handleSignIn(responseId.data)
      history.history.replace('/')
      this.retrieveFavs(responseId.data)
    })
    .then(loadUserFavorites())
    .catch(error => {
      console.log(error, "handleSignInUser error");
      this.setState({
        errorClass: 'show-error',
        email: '',
        password: ''
      });
    })
  }

  retrieveFavs(userData) {
    let { loadUserFavorites } = this.props

    fetch(`api/users/${userData.id}/favorites`)
    .then(response => response.json())
    .then(favArrObj => {
      loadUserFavorites(favArrObj.data)
    })
    .catch(error => console.log('retrieve favorites error: ', error))
  }

  render() {

    let { userId, handleSignOut, clearAllFavorites, history } = this.props;

    const newUserSignInForm = () => {
      return(
        <form className={'form'}>
          <input  className='input-field'
                  value={this.state.name}
                  placeholder="Name"
                  onChange={ e => this.setState({ name: e.target.value} )} />
          <input  className='input-field'
                  value={this.state.email}
                  placeholder="email"
                  onChange={ e => this.setState({ email: e.target.value} )} />
          <input  className='input-field'
                  value={this.state.password}
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
        <form className={'form'}>
          <input  className='input-field'
                  value={this.state.email}
                  placeholder="email"
                  onChange={ e => this.setState({ email: e.target.value} )} />
                  <div className={this.state.errorClass}>Invalid Credentials</div>
          <input  className='input-field'
                  value={this.state.password}
                  placeholder="password"
                  onChange={ e => this.setState({ password: e.target.value} )} />
                  <div className={this.state.errorClass}>Invalid Credentials</div>
          <input  type="submit"
                  placeholder="Sign In"
                  onClick={ e => {
                    e.preventDefault()
                    this.handleSignInUser()
                  }}/>
        </form>
      )
    }

    const signOutButton = () => {
      return (
        <a  href='/'
            className="form-navlinks"
            onClick={() => { handleSignOut(); clearAllFavorites()}}>
          Sign Out
        </a>
      )
    }

    return(
      <div className='forms-field'>
        <Route exact path='/login/newUser' render={ () => newUserSignInForm()}/>
        <Route exact path='/login/signIn' render={ () => currentUserSignForm()}/>
        <NavLink to='/login/newUser' activeClassName="selected" className="form-navlinks">Create An Account</NavLink>
        <NavLink to='/login/signIn' activeClassName="selected" className="form-navlinks">Sign In</NavLink>
        <Route exact path='/login' render={ () => signOutButton()}/>
      </div>
    )
  }
}

export default UserSignIn;
