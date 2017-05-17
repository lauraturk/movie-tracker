import React, { Component } from 'react';
import key from './key.js'
import CardGrid from './CardGrid.js'
import { Route, Link, Switch } from 'react-router-dom'
import { NavBar } from './NavBar'


export const App = (props) => {
  const { handleFavorite, cards } = this.props
  console.log(cards)


    // const { cardArr } = this.state
    // console.log(cardArr, "cardArr")
    return (
      <div>
      <nav>
      <h1>Movie Watcher</h1>
      <NavBar />
    </nav>
    <Route exact path='/' render={() => {
    return (
  )}} />

  <Route exact path='/favorites' render={() => {
  return (
  <CardGrid className='card-grid'
  cardArr={ cardArr }/>
)}} />

</div>
    )
  }
