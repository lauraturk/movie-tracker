import key from './key.js';

export default class ApiCalls {

  static getAllMovies() {
    return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US`)
    .then(response => response.json())
    .then(movieObj => movieObj)
  }

  // static newUser() {
  //   const myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json')
  //
  //   return fetch('/api/users/new',{
  //     method: 'POST',
  //     header: myHeaders,
  //     body: {name: 'Some Dude', email: 'thatdude@gmail.com', password: 'suhdude'}
  //   })
  //   .then(response => response.json())
  //   .then(userId => console.log(userId))
  // }
}
