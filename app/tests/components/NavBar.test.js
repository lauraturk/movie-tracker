import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../components/NavBar';

describe('NavBar component', () => {

  it('should render navigation bar', () => {
    const wrapper = shallow(<NavBar />);

    expect(wrapper.find('.navBar')).toHaveLength(1)
    expect(wrapper.find('NavLink')).toHaveLength(3)
  })
})
