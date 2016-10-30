import React from 'react';
import NavItem from './NavItem';
import styles from './Section.scss';

const Section = ({ title, children }) => (
  <li className={styles.section}>
    <h3 className={styles.header}>{title}</h3>
    <ul className={styles.container}>
      {children}
    </ul>
  </li>
);

export default Section;
