import React, { Component } from 'react';

import Header from './Header';
import SideNav from './SideNav';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default App;
