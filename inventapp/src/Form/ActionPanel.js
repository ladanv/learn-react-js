import React from 'react';
import styles from './ActionPanel.scss';

const ActionPanel = ({ children }) => (
  <div className={styles.actionPanel} >
    {children}
  </div>
);

export default ActionPanel;
