import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom';

import { rootReducer } from './reducers/index.js';
import App from './components/app';
import { loadMovies } from './actions/index.js';

const history = createHistory();
const routeMiddleware = routerMiddleware(history);
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = createStore(rootReducer, devTools, applyMiddleware(thunk, routeMiddleware));

store.dispatch(loadMovies());

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={ history }>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('main'))
