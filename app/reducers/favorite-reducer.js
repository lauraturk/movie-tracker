// export const favorites = (state=[], action) => {
//   switch (action.type) {
//     case 'UPDATE_FAVS':
//     return state.map(movie => {
//       if (movie.id !== action.id) {
//         return movie
//       }
//       return Object.assign({}, movie, {favorited: !movie.favorited})
//     });
//     case 'TOGGLE_FAV':
//     let newMovies = action.moviesArray.results
//       return [...state, ...newMovies]
//     default:
//       return state;
//   }
// }
