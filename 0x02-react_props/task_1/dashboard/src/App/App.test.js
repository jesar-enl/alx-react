import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import App from './App';

describe('Test App', () => {
  it('App without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  it('should contain the Notifications component', () => {
    const component = shallow(<App />);
    expect(component.find(Notifications)).toHaveLength(1);
  });

  it('should contain the Header component', () => {
    const component = shallow(<App />);
    expect(component.find(Header)).toHaveLength(1);
  });

  it('should contain the Login component', () => {
    const component = shallow(<App />);
    expect(component.find(Login)).toHaveLength(1);
  });

  it('should contain the Footer component', () => {
    const component = shallow(<App />);
    expect(component.find(Footer)).toHaveLength(1);
  });
});
