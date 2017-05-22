import React from 'react';
import { shallow } from 'enzyme';
import { mockFetchCalls, resolveAfter2Seconds } from './fetchMock';

import { FavoriteButton } from '../../components/FavoriteButton';
import { cleanMovies } from '../../components/scrubber';
import dataStub from './dataStub';

const cleanedMovies = cleanMovies(dataStub.results)

describe('FavoriteButton component', () => {

  const fakeFunk = jest.fn();

  it('should render favorite button', () => {
    const wrapper = shallow(<FavoriteButton favoriteArr={cleanedMovies} handleFavAdd={fakeFunk} handleFavRemove={fakeFunk} favMovie={cleanedMovies}/>);

    expect(wrapper.find('.favorite-button')).toHaveLength(1)
  })

  it.skip('should render favorite button', () => {
    const wrapper = shallow(<FavoriteButton favoriteArr={cleanedMovies} handleFavAdd={fakeFunk} handleFavRemove={fakeFunk} favMovie={cleanedMovies}/>);
    const button = wrapper.find('.favorite-button')
    button.simulate('click')

    expect(fakeFunk).toBeCalled()
  })
})
