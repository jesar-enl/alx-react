import { shallow } from 'enzyme';
import React from 'react';
import Notifications from './Notifications';

describe('Testing the <Notifications /> Component', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Notifications />);
  });

  it('renders ul', () => {
    expect(wrapper.find('ul')).toBeDefined();
  });

  it('<Notifications /> renders three list items', () => {
    expect(wrapper.find('li')).toHaveLength(3);
  });

  it("<Notifications /> render the text 'Here is the list of notifications'", () => {
    expect(wrapper.find('p').text()).toBe('Here is the list of notifications');
  });
});
