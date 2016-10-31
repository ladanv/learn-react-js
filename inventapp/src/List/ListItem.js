import React from 'react';
import styles from './ListItem.scss';

const ListItem = ({ children }) => (
  <div className={styles.item} >
    {children}
  </div>
);

export default ListItem;
