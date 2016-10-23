import React, { Component } from 'react';

import Header from './Header';
import SideNav from './SideNav';

import style from './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SideNav />
        <div className={style.main}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
