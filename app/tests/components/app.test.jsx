import React from 'react';
import ReactDOM from 'react-dom';
import fetchMock from 'fetch-mock';
import { shallow, mount } from 'enzyme';
import { Route, Link, NavLink, MemoryRouter} from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import ApiCalls from '../../components/ApiHelper';
import { mockFetchCalls, resolveAfter2Seconds } from './fetchMock';
import App from '../../components/app';
import { cleanMovies } from '../../components/scrubber';
import dataStub from './dataStub';

const cleanedMovies = cleanMovies(dataStub.results)

const mockStore = configureMockStore()({
  user: {},
  router: {},
  favorites: [{
                movie_id: 283995,
                title: "Guardians of the Galaxy Vol. 2",
                poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                release_date: "2017-04-24",
                vote_average: 7.6,
                overview: "Great Movie",
                fav_id: null
              }],

  movies: cleanedMovies
});

describe('App component', () => {

  const wrapper = mount(<Provider store={mockStore}>
                          <MemoryRouter>
                            <App />
                          </MemoryRouter>
                        </Provider>);

  afterEach(() => {
    if (fetchMock.calls().unmatched.length) {
      console.warn(fetchMock.calls().unmatched)
    }
    fetchMock.restore()
  })

  it('should render nav bar with 3 icons', () => {

    expect(wrapper.find('.icon')).toHaveLength(3)
  })

  it('should render with the movie cards populated', () => {

    expect(wrapper.find('.movie-card')).toHaveLength(20)
  })

  it('should render movie cards with their back side data', () => {

    expect(wrapper.find('.back-side')).toHaveLength(20)
  })

})
