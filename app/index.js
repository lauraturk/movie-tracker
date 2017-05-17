import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

// import MovieContainer from './containers/movies-container.js'
// import MovieIndex from './components/movieIndex';
import App from './components/app';
import { loadMovies } from './actions/index.js';
import { movies } from './reducers/movie-reducer.js';

const history = createHistory()
const routeMiddleware = routerMiddleware(history)

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(combineReducers({
  movies,
  router: routerReducer}), devTools, applyMiddleware(thunk, routeMiddleware))

store.dispatch(loadMovies())

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={ history }>
      <Route  path='/'
              component={ App }>
      </Route>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'))
