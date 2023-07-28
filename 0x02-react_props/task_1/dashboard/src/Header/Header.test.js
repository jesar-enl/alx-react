import { shallow } from 'enzyme';
import React from 'react';
import { Header } from './Header';

describe('Header Component', () => {
  it('should render without crashing', () => {
    expect(shallow(<Header />).exists()).toEqual(true);
  });

  it('should render img and h1 tags', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists('img')).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });
});
