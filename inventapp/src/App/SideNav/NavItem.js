import React, { Component } from 'react';
import { Link } from 'react-router';
import styles from './NavItem.scss';

const NavItem = ({ url, label }) => (
  <li>
    <Link to={url} className={styles.item} activeClassName={styles.active}>
      {label}
    </Link>
  </li>
);

export default NavItem;
