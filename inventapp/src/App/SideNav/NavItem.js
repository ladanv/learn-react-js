import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './NavItem.scss';

const NavItem = ({ url, label }) => (
  <li>
    <Link to={url} className={style.item} activeClassName={style.active}>
      {label}
    </Link>
  </li>
);

export default NavItem;
