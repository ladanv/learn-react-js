import React from 'react';

import style from './SideNav.scss';

const SideNav = () => (
  <nav className="menu">
    <section>
      <h5>ЛОМБАРД</h5>
      <ul>
        <li><a href="">Клиенты</a></li>
        <li><a href="">Кредиты</a></li>
        <li><a href="">Скупки</a></li>
        <li><a href="">Инкассации</a></li>
        <li><a href="">Актуальные цены</a></li>
      </ul>
    </section>
    <section>
      <h5>КАССА</h5>
      <ul>
        <li><a href="">РКО</a></li>
        <li><a href="">ПКО</a></li>
      </ul>
    </section>
    <section>
      <h5>НАСТРОЙКИ</h5>
      <ul>
        <li><a href="">Прайс листы</a></li>
        <li><a href="">Категории имущества</a></li>
        <li><a href="">Пользователи</a></li>
        <li><a href="">Подразделения</a></li>
        <li><a href="">Общие</a></li>
      </ul>
    </section>
  </nav>
);

export default SideNav;
