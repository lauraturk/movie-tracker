import React, { Component } from 'react';
import key from './key.js'
import CardGrid from './CardGrid.js'

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      cardArr: []
    }
  }


  componentDidMount() {
    let address = `https://api.themoviedb.org/3/discover/movie?api_key=${key}&language=en-US`

    fetch(address)
      .then(response => response.json())
      .then(movieObj => {
        console.log(movieObj);
        this.setState({ cardArr: movieObj.results })
      })

  }

  render() {
    return (
      <div>
        <h1>Movie Watcher</h1>
        <CardGrid className='card-grid'
                  cardArr={ this.state.cardArr }/>
      </div>
    )
  }
}
