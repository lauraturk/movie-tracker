import { movies } from '../../reducers/movie-reducer';

const moviesArray = [{
  movie_id: 283995,
  title: "Guardians of the Galaxy Vol. 2",
  poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
  release_date: "2017-04-24",
  vote_average: 7.6,
  overview: "Great Movie",
  fav_id: null
}]

describe('movie reducer tests', () => {


  it('default case should return an empty array', () => {

    expect(movies(undefined, {})).toEqual([])
  })

  it('should add all of the movies', () => {

    const action = {
      type: 'ADD_MOVIES',
      moviesArray: moviesArray
    }

    expect(movies(undefined, action)).toHaveLength(1)
    expect(movies([ action ], action)).toHaveLength(2)
  })
})
