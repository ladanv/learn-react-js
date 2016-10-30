import React, { Component } from 'react';
import Header from './Header';
import SideNav from './SideNav';
import styles from './App.scss';

const App = ({ children }) => (
  <div className="App">
    <Header />
    <SideNav />
    <div className={styles.main}>
      {children}
    </div>
  </div>
);

export default App;
