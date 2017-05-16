import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {loadMovies} from './actions/index.js';

// import MovieIndex from './components/movieIndex';
import { BrowserRouter as Router } from 'react-router-dom';
import { movies } from './reducers/movie-reducer.js';
import Provider from 'react-redux';
// import AppContainer from './containers/movies-container.js'

// const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(movies, applyMiddleware(thunk))
store.dispatch(loadMovies())

ReactDOM.render(
  <Provider store={store}>
    <Router >
      <App />
    </Router>
  </Provider>,
  document.getElementById('main'))
