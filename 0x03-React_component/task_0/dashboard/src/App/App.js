import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <Notifications />
        <Header />
        <Login />
        <Footer />
      </>
    );
  }
}

export default App;
