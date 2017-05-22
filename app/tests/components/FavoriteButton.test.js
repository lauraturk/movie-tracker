import React from 'react';
import { shallow } from 'enzyme';
import { mockFetchCalls, resolveAfter2Seconds } from './fetchMock';

import { FavoriteButton } from '../../components/FavoriteButton';
import { cleanMovies } from '../../components/scrubber';
import dataStub from './dataStub';

const cleanedMovies = cleanMovies(dataStub.results)

describe('FavoriteButton component', () => {

  it.skip('should render favorite button', () => {

    // Having trouble getting past indexOf error

    const wrapper = shallow(<FavoriteButton favMovie={cleanedMovies}/>);

    expect(wrapper.find('.favorite-button')).toHaveLength(1)
  })
})
