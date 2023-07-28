import { shallow } from 'enzyme';
import React from 'react';
import Login from './Login';

describe('Login Component', () => {
  it('should render without crashing', () => {
    expect(shallow(<Login />).exists()).toEqual(true);
  });

  it('should render 2 input tags and 2 label tags', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input')).toHaveLength(2);
    expect(wrapper.find('label')).toHaveLength(2);
  });
});
