import MovieApi from '../components/helper.js';

export const loadMovies = () => {
  return (dispatch) => {
    return MovieApi.getAllMovies().then(movies => {
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

export const toggleFav = (id) => {
  return {
    type: 'TOGGLE_FAV',
    id,
  }
}
