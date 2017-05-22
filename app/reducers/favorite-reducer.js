export const favorites = (state=[], action) => {
  switch (action.type) {
    case 'ADD_FAV':
      state.push(action.favMovie)
      return [...state];

    case 'REMOVE_FAV':
      const indexToRemove = state.findIndex( movie => {
        return movie.movie_id === action.favMovie.movie_id;
      })
      state.splice(indexToRemove, 1);
      return [...state];

    case 'LOAD_INITIAL_FAVS':
      return action.initialFavsArray || [];

    case 'CLEAR_FAVS':
      return state = [];

    default:
      return state;
  }
}
