import React, { Component } from 'react';
import key from './key.js'
import CardGrid from './CardGrid.js'
import { Route, Link, Switch } from 'react-router-dom'
import { NavBar } from './NavBar'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardArr: []
    }
  }


  // componentDidMount() {
  //   let address = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`
  //
  //   fetch(address)
  //     .then(response => response.json())
  //     .then(movieObj => {
  //       fetchMovies(movieObj)
  //     })
  //
  // }

  render() {
    const { cardArr } = this.state

    return (
      <div>
        <nav>
          <h1>Movie Watcher</h1>
          <NavBar />
        </nav>
        <Route exact path='/' render={() => {
          return (
            <CardGrid className='card-grid'
              cardArr={ cardArr }/>
          )}} />

        <Route exact path='/favorites' render={() => {
          return (
            <CardGrid className='card-grid'
              cardArr={ cardArr }/>
          )}} />

      </div>
    )
  }
}
