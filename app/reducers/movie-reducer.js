export const movies = (state=[], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      let newMovies = action.moviesArray
      return [...state, ...newMovies]

    default:
      return state;
  }
}
