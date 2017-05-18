import ApiCalls from '../components/helper.js';

export const loadMovies = () => {
  return (dispatch) => {
    return ApiCalls.getAllMovies().then(movies => {
      dispatch(addMovies(movies));
    }).catch(error => {
      throw(error);
    });
  };
}

export const addMovies = (moviesArray) => {
  return {
    type: 'ADD_MOVIES',
    moviesArray,
  }
}

// export const toggleFav = (id) => {
//   return {
//     type: 'TOGGLE_FAV',
//     id,
//   }
// }

export const updateFavs = (id) => {
  return {
    type: 'UPDATE_FAVS',
    id
  }
}

// export const addNewUser = (userId) => {
//   return {
//     type: 'ADD_NEW_USER',
//     userId,
//   }
// }

export const signInUser = (userId) => {
  return {
    type: 'SIGN_IN_USER',
    userId,
  }
}
