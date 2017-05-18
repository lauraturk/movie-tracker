import React from 'react';
// import key from './key.js'
// import CardGrid from './Grid.js'
import MovieGridContainer from '../containers/MovieGridContainer.js'
import { Route, Link, Switch } from 'react-router-dom'
import { NavBar } from './NavBar'
import UserContainer from '../containers/UserContainer.js'

const App = () => {
  // const { handleFavorite, cards } = this.props


    // const { cardArr } = this.state
    // console.log(cardArr, "cardArr")
  return (
    <div>
      <nav>
        <h1>Movie Watcher</h1>
        <NavBar />
        <UserContainer />
      </nav>

      <Route exact path='/' component={ MovieGridContainer } />

      <Route exact path='/favorites' render={ () => {
        return (
          <MovieGridContainer />
        )
      }} />


    </div>
  )
}

export default App
