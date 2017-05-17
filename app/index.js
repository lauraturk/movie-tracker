import React from 'react';
import ReactDOM from 'react-dom';
// import { App } from './components/app';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { loadMovies } from './actions/index.js';
import MovieContainer from './containers/movies-container.js'

// import MovieIndex from './components/movieIndex';
import { BrowserRouter as Router } from 'react-router-dom';
import { movies } from './reducers/movie-reducer.js';
import Provider from 'react-redux';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(movies, devTools, applyMiddleware(thunk))
store.dispatch(loadMovies())
// console.log(store);

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <MovieContainer />
    </Router>
  </Provider>,
  document.getElementById('main'))
