import React from 'react';
import MovieGridContainer from '../containers/MovieGridContainer.js'
import { Route, Link, Switch } from 'react-router-dom'
import { NavBar } from './NavBar'
import UserContainer from '../containers/UserContainer.js'

const App = () => {


  return (
    <section>
      <nav>
        <h1 className="page-title">Movie Watcher</h1>
        <NavBar />
      </nav>
      <main className="main">
        <Route path='/login' render={ (history) => {
          return (
            <UserContainer  history={ history }/>
          )
         } } />

        <Route exact path='/' render={ (history) => {
          return (
            <MovieGridContainer favoriteProp={ false } history={history} />
          )
         } } />

        <Route exact path='/favorites' render={ (history) => {
          return (
            <MovieGridContainer favoriteProp={ true } history={history}/>
          )
         } } />
      </main>



    </section>
  )
}

export default App
