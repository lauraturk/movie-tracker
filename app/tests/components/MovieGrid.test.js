import React from 'react';
import { shallow } from 'enzyme';

import dataStub from './dataStub';
import MovieGrid from '../../components/MovieGrid';
import { cleanMovies } from '../../components/scrubber';

const cleanedMovies = cleanMovies(dataStub.results)

describe('MovieGrid component', () => {

  it('should render movie grid', () => {
    const wrapper = shallow(<MovieGrid movieList={cleanedMovies} />);

    expect(wrapper.find('#movie-grid-container')).toHaveLength(1)
  })
})
