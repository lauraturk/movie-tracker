export const favorites = (state=[], action) => {
  switch (action.type) {
    // case 'ADD_FAV_ARRAY_INIT':
    //   let favMovies = action.favArray
    //   return [...state]

    case 'ADD_FAV':
      return [...state, action.favMovie ]

    case 'REMOVE_FAV':
      const indexToRemove = state.findIndex( movie => {
        return movie.movie_id === action.favMovie.movie_id
      })
      state.splice(indexToRemove, 1)
      return [...state]

    default:
      return state;
  }
}
