import { favorites } from '../../reducers/favorite-reducer';

const moviesArray = [{
  movie_id: 283995,
  title: "Guardians of the Galaxy Vol. 2",
  poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
  release_date: "2017-04-24",
  vote_average: 7.6,
  overview: "Great Movie",
  fav_id: null
}]

const moviesObj = {
  movie_id: 283995,
  title: "Guardians of the Galaxy Vol. 2",
  poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
  release_date: "2017-04-24",
  vote_average: 7.6,
  overview: "Great Movie",
  fav_id: null
}

describe('favorite reducer tests', () => {


  it('default case should return an empty array', () => {

    expect(favorites(undefined, {})).toEqual([])
  })

  it('should add movie to favorites', () => {

    const action = {
      type: 'ADD_FAV',
      userId: 1,
      favMovie: moviesArray
    }

    expect(favorites(undefined, action)).toHaveLength(1)
    expect(favorites([ action ], action)).toHaveLength(2)
  })

  it('should remove movie from favorites', () => {

    const action = {
      type: 'REMOVE_FAV',
      userId: 1,
      favMovie: moviesArray
    }

    expect(favorites([moviesObj, moviesObj, moviesObj], action)).toHaveLength(2)
    expect(favorites([moviesObj, moviesObj], action)).toEqual([moviesObj])
  })

  it('should load users favorites on sign in', () => {

    const action = {
      type: 'LOAD_INITIAL_FAVS',
      initialFavsArray: moviesArray
    }

    expect(favorites(undefined, action)).toHaveLength(1)
  })

  it('should remove all favorites from state', () => {

    const action = {
      type: 'CLEAR_FAVS'
    }

    expect(favorites([moviesObj, moviesObj, moviesObj], action)).toEqual([])
  })

})
