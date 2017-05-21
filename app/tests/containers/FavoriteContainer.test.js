import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import FavoriteContainer from '../../containers/FavoriteContainer';
import { FavoriteButton } from '../../components/FavoriteButton';

const mockStore = configureMockStore()({
  favorites: [],
  user: {}
});

const setup = () => {
  const Container = mount(<Provider store={mockStore}><FavoriteContainer /></Provider>);

  const Component = Container.find(FavoriteButton);

  return {
    Container,
    Component
  }
}

describe('FavoriteContainer', () => {
  const { Container, Component } = setup();

  it('should pass down the correct action creators', () => {

    expect(Object.keys(Component.props())).toContain('handleFavAdd');
    expect(Object.keys(Component.props())).toContain('userId');

  });
});
