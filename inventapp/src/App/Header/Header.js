import React from 'react';
import { Link } from 'react-router';
import Button from '../../Button';
import Icon from '../../Icon';

import style from './Header.scss';

const Header = () => (
  <header className={style.header}>
    <Link to="/" className={style.logo}>Warehouse</Link>
    <nav className={style.navbar}>
      <form className={style.left}>
        <Button label='Новая накладная' type='primary' />
      </form>
      <Button className={style.right}>
        <Icon name='user' />
      </Button>
      <form className={style.centre}>
        <div className={style.search}>
          <input className={style.field} placeholder="Номенклатура, номер расходной/приходной накладной"></input>
          <span className={style.buttonGroup}>
            <Button>
              <Icon name='search' />
            </Button>
          </span>
        </div>
      </form>
    </nav>
  </header>
);

export default Header;
