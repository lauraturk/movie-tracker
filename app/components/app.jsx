import React from 'react';
// import key from './key.js'
// import CardGrid from './Grid.js'
import MovieGridContainer from '../containers/MovieGridContainer.js'
import { Route, Link, Switch } from 'react-router-dom'
import { NavBar } from './NavBar'
import UserContainer from '../containers/UserContainer.js'

const App = () => {

  return (
    <section>
      <nav>
        <h1 className="page-title">Movie Watcher</h1>
        <Link to={'/login'}>USER</Link>
        <NavBar />
      </nav>
      <main className="main">
        <Route path='/login' render={ (history) => {
          return (
            <UserContainer  history={ history }/>
          )
         } } />

        <Route exact path='/' render={ () => {
          return (
            <MovieGridContainer favoriteProp={ false } />
          )
         } } />

        <Route exact path='/favorites' render={ () => {
          return (
            <MovieGridContainer favoriteProp={ true } />
          )
         } } />
      </main>



    </section>
  )
}

export default App
