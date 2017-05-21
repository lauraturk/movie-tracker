import ApiCalls from '../components/ApiHelper.js';
import { cleanMovies } from '../components/scrubber.js';

export const loadMovies = () => {
  return (dispatch) => {
    return ApiCalls.getAllMovies()
      .then(rawMovies => {
        let cleanedMovies = cleanMovies(rawMovies.results)
        dispatch(addMovies(cleanedMovies))
      })
      .catch(error => { throw(error) });
  };
}

export const addMovies = (moviesArray) => {
  return {
    type: 'ADD_MOVIES',
    moviesArray
  }
}

export const addFav = (userId, favMovie) => {
  return {
    type: 'ADD_FAV',
    userId,
    favMovie
  }
}

export const removeFav = (userId, favMovie) => {
  return {
    type: 'REMOVE_FAV',
    userId,
    favMovie
  }
}

export const signInUser = (userId) => {
  return {
    type: 'SIGN_IN_USER',
    userId,
  }
}

export const signOutUser = () => {
  return {
    type: 'SIGN_OUT_USER'
  }
}

export const addInitialFavs = (initialFavsArray) => {
  return {
    type: 'LOAD_INITIAL_FAVS',
    initialFavsArray
  }
}

export const clearFavorites = () => {
  return {
    type: 'CLEAR_FAVS'
  }
}
