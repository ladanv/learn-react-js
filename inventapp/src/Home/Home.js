import React from 'react';
import { FormattedMessage } from 'react-intl';
import styles from './Home.scss';

const Home = () => (
  <p className={styles.intro}>
    <FormattedMessage
      id={'Home.intro'}
      defaultMessage={'The goal of this project is to learn React Js ecosystem while creating simple SPA.'}
    />
  </p>
);

export default Home;
