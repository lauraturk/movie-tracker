import React from 'react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import Movie from '../../components/Movie';

const mockStore = configureMockStore()({

  favorites: [{
    movie_id: 283995,
    title: "Guardians of the Galaxy Vol. 2",
    poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    release_date: "2017-04-24",
    vote_average: 7.6,
    overview: "Great Movie",
    fav_id: null
  }]

});

const favorites = [{
                    movie_id: 283995,
                    title: "Guardians of the Galaxy Vol. 2",
                    poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                    release_date: "2017-04-24",
                    vote_average: 7.6,
                    overview: "Great Movie",
                    fav_id: null
                  }]

const movie = [{
                movie_id: 283995,
                title: "Guardians of the Galaxy Vol. 2",
                poster_path: "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
                release_date: "2017-04-24",
                vote_average: 7.6,
                overview: "Great Movie",
                fav_id: null
              }]

describe('Movie component', () => {

  it('should render movie card', () => {
    const wrapper = mount(<Provider store={mockStore}>
                            <MemoryRouter>
                              <Movie movieData={movie} favoriteList={favorites} />
                            </MemoryRouter>
                          </Provider>);

    expect(wrapper.find('.back-side')).toHaveLength(1)
    expect(wrapper.find('.movie-card')).toHaveLength(1)
  })
})
