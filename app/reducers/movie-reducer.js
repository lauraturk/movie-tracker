export const movies = (state=[], action) => {
  switch (action.type) {
    // case 'FETCH_MOVIES':
    //   return [...state, response]
    case 'ADD_MOVIES':
      return state = action.moviesArray
    // case 'TOGGLE_FAV':
    //   return state.map(movie => {
    //     if (movie.id !== action.id) {
    //       return movie
    //     }
    //     return Object.assign({}, movie, {favorited: !movie.favorited})
    //   });
    default:
      return state;
  }
}
