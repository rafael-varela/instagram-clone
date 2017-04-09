import React, {Component} from 'react';

import Navbar from './Navbar';
import Profile from './Profile';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
        <Footer />
      </div>
    );
  }
}
