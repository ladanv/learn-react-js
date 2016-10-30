import React from 'react';
import { injectIntl, defineMessages } from 'react-intl';
import Section from './Section';
import NavItem from './NavItem';
import styles from './SideNav.scss';

const messages = defineMessages({
  referencesLabel: {
    id: 'SideNav.references.label',
    defaultMessage: 'References',
  },
  clientsLabel: {
    id: 'SideNav.clients.label',
    defaultMessage: 'Clients',
  },
  inventoryItemsLabel: {
    id: 'SideNav.inventoryItems.label',
    defaultMessage: 'Inventory items',
  },
  warehousesLabel: {
    id: 'SideNav.warehouses.label',
    defaultMessage: 'Warehouses',
  },
  operationsLabel: {
    id: 'SideNav.operations.label',
    defaultMessage: 'Operations',
  },
  invoicesLabel: {
    id: 'SideNav.invoices.label',
    defaultMessage: 'Invoices',
  },
  cashLabel: {
    id: 'SideNav.cash.label',
    defaultMessage: 'Cash',
  },
  cashOrdersLabel: {
    id: 'SideNav.cashOrders.label',
    defaultMessage: 'Cash orders',
  },
  settingsLabel: {
    id: 'SideNav.settings.label',
    defaultMessage: 'Settings',
  },
  priceListsLabel: {
    id: 'SideNav.priceLists.label',
    defaultMessage: 'Price lists',
  },
  usersLabel: {
    id: 'SideNav.users.label',
    defaultMessage: 'Users',
  },
  subdivisionsLabel: {
    id: 'SideNav.subdivisions.label',
    defaultMessage: 'Subdivisions',
  },
  tagsLabel: {
    id: 'SideNav.tags.label',
    defaultMessage: 'Tags',
  },
  commonLabel: {
    id: 'SideNav.common.label',
    defaultMessage: 'Common',
  }
});

const SideNav = ({ intl }) => {
  const { formatMessage } = intl;

  return (
    <aside className={styles.sidenav} >
      <ul>
        <Section title={formatMessage(messages.referencesLabel)} >
          <NavItem label={formatMessage(messages.clientsLabel)} url='/clients' />
          <NavItem label={formatMessage(messages.inventoryItemsLabel)} url='/inventory-items' />
          <NavItem label={formatMessage(messages.warehousesLabel)} url='/warehouses' />
        </Section>
        <Section title={formatMessage(messages.operationsLabel)} >
          <NavItem label={formatMessage(messages.invoicesLabel)} url='/invoices' />
        </Section>
        <Section title={formatMessage(messages.cashLabel)} >
          <NavItem label={formatMessage(messages.cashOrdersLabel)} url='/cash-orders' />
        </Section>
        <Section title={formatMessage(messages.settingsLabel)} >
          <NavItem label={formatMessage(messages.priceListsLabel)} url='/price-lists' />
          <NavItem label={formatMessage(messages.usersLabel)} url='/users' />
          <NavItem label={formatMessage(messages.subdivisionsLabel)} url='/subdivisions' />
          <NavItem label={formatMessage(messages.tagsLabel)} url='/tags' />
          <NavItem label={formatMessage(messages.commonLabel)} url='/general' />
        </Section>
      </ul>
    </aside>
  );
}

export default injectIntl(SideNav);
