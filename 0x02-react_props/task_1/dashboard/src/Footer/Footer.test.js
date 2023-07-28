import { shallow } from 'enzyme';
import React from 'react';
import { getFooterCopy, getFullYear } from '../utils/utils';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });

  it('should render the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toEqual(
      `Copyright ${getFullYear()} - ${getFooterCopy()}`
    );
  });
});
