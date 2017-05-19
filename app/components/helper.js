import key from './key.js';

export default class ApiCalls {

  static getAllMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`)
    .then(response => response.json())
    .then(movieObj => movieObj)
  }

  // static getFavMoviesInit(userId) {
  //   return fetch('/users/:id/favorites', {
  //     method: 'POST',
  //     body: JSON.stringify({params: userId}),
  //     headers: { 'Content-Type':'application/json' }
  //   })
  //   .then(response => response.json())
  //   .then(favObjInit) => favObjInit)
  // }

}
