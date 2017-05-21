import * as actions from '../../actions';

describe('actions', () => {

  const moviesArray = [{
                        movie_id: 283995,
                        title: "Guardians of the Galaxy Vol. 2",
                        poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                        release_date: "2017-04-24",
                        vote_average: 7.6,
                        overview: "Great Movie",
                        fav_id: null
                      }]

  it('should create an action to add movies array', () => {

    const expectedAction = {
      type: 'ADD_MOVIES',
      moviesArray:  moviesArray
    }

    expect(actions.addMovies(moviesArray)).toEqual(expectedAction)
  })

  it('should create an action to add movies to favorites', () => {

    const favMovie = moviesArray

    const userId = 1

    const expectedAction = {
      type: 'ADD_FAV',
      userId: 1,
      favMovie:  moviesArray
    }

    expect(actions.addFav(userId, favMovie)).toEqual(expectedAction)
  })

  it('should create an action to remove movies from favorites', () => {

    const favMovie = moviesArray

    const userId = 1

    const expectedAction = {
      type: 'REMOVE_FAV',
      userId: 1,
      favMovie:  moviesArray
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

  it('should create an action to sign a user out', () => {

    const expectedAction = {
      type: 'SIGN_OUT_USER'
    }

    expect(actions.signOutUser()).toEqual(expectedAction)
  })

  it('should create an action to upload the users favorites on sign in', () => {

    const expectedAction = {
      type: 'LOAD_INITIAL_FAVS',
      initialFavsArray: moviesArray
    }

    expect(actions.addInitialFavs(initialFavsArray)).toEqual(expectedAction)
  })

  it('should create an action to clear a favorite', () => {

    const expectedAction = {
      type: 'CLEAR_FAVS'
    }

    expect(actions.clearFavorites()).toEqual(expectedAction)
  })

})
