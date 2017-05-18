export const cleanMovies = (rawMovies) => {
  // console.log(rawMovies);
  let cleanedMovies = rawMovies.map( movie => {
    return {
      movie_id: movie.id,
      title: movie.title,
      poster_path: movie.poster_path,
      release_date: movie.release_date,
      vote_average: movie.vote_average,
      overview: movie.overview,
      user_id: '',
      favorited: false
    };
  })
  console.log(cleanedMovies);
  return cleanedMovies
}
