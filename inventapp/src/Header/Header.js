import React from 'react';

import Button from '../Button';

import style from './Header.scss';
import searchIcon from './searchIcon.svg';

const Header = () => (
  <header className={style.header}>
    <a className={style.logo} href="#">PawhShop</a>
    <nav className={style.navbar}>
      <form className={style.left}>
        <Button label='Новый кредит' btnType='primary' btnSize='large' />
        {/* <button class="button button-primary">Новый кредит</button> */}
      </form>

      {/* <button class="navbar-right navbar-user">asdf</button> */}

      <form className={style.centre}>
        <div className={style.search}>
          <input className={style.field} placeholder="Номер удостоверения личности, кредита или тег"></input>
          <span className={style.buttonGroup}>
            <button >
              {/* <svg className={style.icon}>{searchIcon}</svg> */}
            </button>
          </span>
        </div>
      </form>

    </nav>
  </header>
);

export default Header;
