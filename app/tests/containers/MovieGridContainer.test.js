import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import MovieGridContainer from '../../containers/MovieGridContainer';
import MovieGrid from '../../components/MovieGrid';

const mockStore = configureMockStore()({
  favorites: [],
  movies: [],
  user: {},
  router: {}
});

console.log(mockStore)

const setup = () => {
  const Container = mount(<Provider store={mockStore}><MovieGridContainer /></Provider>);

  const Component = Container.find(MovieGrid);

  return {
    Container,
    Component
  }
}

describe('MovieGridContainer', () => {
  const { Container, Component } = setup();

  it('should pass down the correct action creators', () => {
    expect(Object.keys(Component.props())).toContain('movieList');
  });
});
