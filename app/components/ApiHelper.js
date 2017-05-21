import key from './key.js';

export default class ApiCalls {

  static getAllMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`)
    .then(response => response.json())
    .then(movieObj => movieObj)
  }

  static newUserFetch({name, email, password}) {
    return fetch('/api/users/new',
    {
      method: 'POST',
      body: JSON.stringify({name: name, email: email, password: password}),
      headers: { 'Content-Type':'application/json' },
    })
    .then(response => response.json())
  }

  static logInFetch({email, password}) {
    return fetch('/api/users/',
      {
        method: 'POST',
        body: JSON.stringify({email: email, password: password}),
        headers: { 'Content-Type':'application/json' },
      })
      .then(response => response.json())
  }

  static addFavFetch(favMovie) {
    return fetch('api/users/favorites/new',
      {
        method: 'POST',
        body: JSON.stringify(favMovie),
        headers: { 'Content-Type':'application/json' }
      })
      .then(response => response.json())
  }

  static deleteFavFetch(userId, favMovie) {
    return fetch(`api/users/${userId.id}/favorites/${favMovie.movie_id}`,
      {
        method: 'DELETE',
        headers: { 'Content-Type':'application/json' }
      })
    .then(response => response.json())
  }

}
