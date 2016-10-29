import React from 'react';
import { Link } from 'react-router';
import style from './NotFound.scss';

const NotFound = () => (
  <div className={style.container}>
    <h2 className={style.title}>Page not found</h2>
    <p className={style.message}>
      The requested page is not found. Probably, the URL you are using is incorrect.
    </p>
    <Link to="/" className={style.backUrl}>Return back to home page</Link>
  </div>
);

export default NotFound;
