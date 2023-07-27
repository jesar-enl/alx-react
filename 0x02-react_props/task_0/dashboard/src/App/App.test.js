import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

describe('Test App', () => {
  it('App without crashing', () => {
    const component = shallow(<App />);

    expect(component).toBeDefined();
  });

  // it('div with the class App-header', (done) => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.contains(<header className="App-header" />));
  //   done();
  // });

  // it('div with the class App-body', (done) => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.contains(<body className="App-body" />));
  //   done();
  // });

  // it('div with the class App-footer', (done) => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.contains(<footer className="App-footer" />));
  //   done();
  // });
});
