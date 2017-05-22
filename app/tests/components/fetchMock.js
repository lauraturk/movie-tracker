import MovieStub from './dataStub';
import fetchMock from 'fetch-mock';

export const resolveAfter2Seconds = () => {
  return new Promise (resolve => {
    setTimeout(() => {
      resolve();
    }, 2000)
  })
}

const fakeMovie = {
                    movie_id: 283995,
                    title: "Guardians of the Galaxy Vol. 2",
                    poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                    release_date: "2017-04-24",
                    vote_average: 7.6,
                    overview: "Great Movie",
                    fav_id: null
                  }

export const mockFetchCalls = () => {

  fetchMock.get('begin:https://api.themoviedb.org/3/movie/now_playing?api_key', {
    status: 200,
    body: MovieStub
  })

  fetchMock.get('/api/users/new',
  {
    method: 'POST',
    body: JSON.stringify({name: 'bill', email: 'bill@bill.org', password: 'password'}),
    headers: { 'Content-Type':'application/json' },
    status: 200
  })

  fetchMock.get('/api/users/',
    {
      method: 'POST',
      body: JSON.stringify({email: 'bill@bill.org', password: 'password'}),
      headers: { 'Content-Type':'application/json' },
      status: 200
    })

  fetchMock.get('api/users/favorites/new',
    {
      method: 'POST',
      body: JSON.stringify(fakeMovie),
      headers: { 'Content-Type':'application/json' },
      status: 200
    })

  fetchMock.get('begin: api/users/1/favorites/1234',
    {
      method: 'DELETE',
      headers: { 'Content-Type':'application/json' },
      status: 200
    })

}
