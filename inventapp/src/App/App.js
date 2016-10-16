import React, { Component } from 'react';

import Header from './Header';
import SideNav from './SideNav';

import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
