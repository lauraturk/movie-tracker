import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import { movies } from './movie-reducer.js'
import { user } from './user-reducer.js'

export const rootReducer = combineReducers({
  movies,
  user,
  router: routerReducer
})
