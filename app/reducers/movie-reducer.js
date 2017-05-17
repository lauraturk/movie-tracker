export const movies = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
    let newMovies = action.moviesArray.results
      return [...state, ...newMovies]
    case 'TOGGLE_FAV':
      return state.map(movie => {
        if (movie.id !== action.id) {
          return movie
        }
        return Object.assign({}, movie, {favorited: !movie.favorited})
      });
    default:
      return state;
  }
}
