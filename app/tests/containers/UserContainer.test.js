import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import UserContainer from '../../containers/UserContainer';
import UserSignIn from '../../components/UserSignIn';

const mockStore = configureMockStore()({
  user: {},
  router: {}
});

const setup = () => {
  const Container = shallow(<Provider store={mockStore}><UserContainer /></Provider>);

  const Component = Container.find(UserSignIn);

  return {
    Container,
    Component
  }
}

describe.skip('UserContainer', () => {
  const { Container, Component } = setup();

  it('should pass down the correct action creators', () => {

    expect(Object.keys(Component.props())).toContain('userId');
  });
});
