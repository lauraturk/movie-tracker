import key from './key.js';

export default class MovieApi {

  static getAllMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`)
    .then(response => response.json())
    .then(movieObj => movieObj)
  }
}
