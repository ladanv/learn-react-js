import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import styles from './NotFound.scss';

const NotFound = () => (
  <div className={styles.container}>
    <h2 className={styles.title}>
      <FormattedMessage
        id={'NotFound.title'}
        defaultMessage={'Page not found'}
      />
    </h2>
    <p className={styles.message}>
      <FormattedMessage
        id={'NotFound.message'}
        defaultMessage={'The requested page is not found. Probably, the URL you are using is incorrect.'}
      />
    </p>
    <Link to="/" className={styles.backUrl}>
      <FormattedMessage
        id={'NotFound.button.label'}
        defaultMessage={'Return back to home page'}
      />
    </Link>
  </div>
);

export default NotFound;
