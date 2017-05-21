import key from './key.js';

export default class ApiCalls {

  static getAllMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`)
    .then(response => response.json())
    .then(movieObj => movieObj)
  }

  static logInFetch(fetchType, body) {
    return fetch(fetchType, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
  }


}
