import React from 'react';
import Section from './Section';
import NavItem from './NavItem';
import style from './SideNav.scss';

const SideNav = () => (
  <aside className={style.sidenav}>
    <ul>
      <Section title='Справочники'>
        <NavItem label='Клиенты' url='/clients' />
        <NavItem label='Номенклатура' url='/inventory-items' />
        <NavItem label='Склады' url='/warehouses' />
      </Section>
      <Section title='Операции'>
        <NavItem label='Накладные' url='/invoices' />
      </Section>
      <Section title='Касса'>
        <NavItem label='Кассовые ордеры' url='/cash-orders' />
      </Section>
      <Section title='Настройки'>
        <NavItem label='Прайс листы' url='/price-lists' />
        <NavItem label='Категории имущества' url='/invent-categories' />
        <NavItem label='Пользователи' url='/users' />
        <NavItem label='Подразделения' url='/subdivisions' />
        <NavItem label='Теги' url='/tags' />
        <NavItem label='Общие' url='/general' />
      </Section>
    </ul>
  </aside>
);

export default SideNav;
