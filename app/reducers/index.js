import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import { movies } from './movie-reducer.js'

export const rootReducer = combineReducers({
  movies,
  router: routerReducer
})
