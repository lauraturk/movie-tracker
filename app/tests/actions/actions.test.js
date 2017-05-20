import * as actions from '../../actions';

describe('actions', () => {

  const movieArray = [{
                        movie_id: 283995,
                        title: "Guardians of the Galaxy Vol. 2",
                        poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                        release_date: "2017-04-24",
                        vote_average: 7.6,
                        overview: "Great Movie",
                        fav_id: null
                      }]

  it('should create an action to add movies array', () => {

    const moviesArray = movieArray

    const expectedAction = {
      type: 'ADD_MOVIES',
      moviesArray:  movieArray
    }

    expect(actions.addMovies(moviesArray)).toEqual(expectedAction)
  })

  it('should create an action to add movies to favorites', () => {

    const favMovie = movieArray

    const userId = 1

    const expectedAction = {
      type: 'ADD_FAV',
      userId: 1,
      favMovie:  movieArray
    }

    expect(actions.addFav(userId, favMovie)).toEqual(expectedAction)
  })

  it('should create an action to remove movies from favorites', () => {

    const favMovie = movieArray

    const userId = 1

    const expectedAction = {
      type: 'REMOVE_FAV',
      userId: 1,
      favMovie:  movieArray
    }

    expect(actions.removeFav(userId, favMovie)).toEqual(expectedAction)
  })

  it('should create an action to sign a user in', () => {

    const userId = 1

    const expectedAction = {
      type: 'SIGN_IN_USER',
      userId: 1,
    }

    expect(actions.signInUser(userId)).toEqual(expectedAction)
  })

})
