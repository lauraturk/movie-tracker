import {combineReducers} from 'redux';
import { routerReducer } from 'react-router-redux';

import { movies } from './movie-reducer.js'
import { user } from './user-reducer.js'
import { favorites } from './favorite-reducer.js'

export const rootReducer = combineReducers({
  favorites,
  movies,
  user,
  router: routerReducer
})
