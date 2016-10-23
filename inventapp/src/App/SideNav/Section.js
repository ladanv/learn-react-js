import React from 'react';
import NavItem from './NavItem';
import style from './Section.scss';

const Section = ({ title, children }) => (
  <li className={style.section}>
    <h3 className={style.header}>{title}</h3>
    <ul className={style.container}>
      {children}
    </ul>
  </li>
);

export default Section;
