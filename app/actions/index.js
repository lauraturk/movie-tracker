import ApiCalls from '../components/helper.js';
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

// export const loadFavMoviesInit = () => {
//   return (dispatch) => {
//     return ApiCalls.getFavMoviesInit(userId)
//       .then(favMovies => {dispatch(addFaveInit(favMovies))})
//       .catch(error => { throw(error) });
//   };
// }
//
// export const addFavInit = (userId favArray) => {
//   return {
//     type: 'ADD_FAV_ARRAY_INIT',
//     favArray,
//     userId
//   }
// }

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

export const signOutUser = (userId) => {
  return {
    type: 'SIGN_OUT_USER',
    userId,
  }
}
