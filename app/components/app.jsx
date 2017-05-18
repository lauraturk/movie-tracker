import React from 'react';
// import key from './key.js'
// import CardGrid from './Grid.js'
import MovieGridContainer from '../containers/MovieGridContainer.js'
import { Route, Link, Switch } from 'react-router-dom'
import { NavBar } from './NavBar'
import UserContainer from '../containers/UserContainer.js'

const App = () => {

  return (
    <div>
      <nav>
        <h1>Movie Watcher</h1>
        <Link to={'/login'}>USER</Link>
        <NavBar />
      </nav>

      <Route path='/login' render={ (history) => {
          return (
            <UserContainer  history={history}/>
          )
        } } />

      <Route path='/' render={ () => {
        return (
          <MovieGridContainer favoriteProp={ false } />
        )
      } } />

      <Route path='/favorites' render={ () => {
        return (
          <MovieGridContainer favoriteProp={ true } />
        )
      } } />


    </div>
  )
}

export default App
