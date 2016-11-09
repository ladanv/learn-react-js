import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { injectIntl, defineMessages } from 'react-intl';
import Button from '../../Button';
import Icon from '../../Icon';
import styles from './Header.scss';

const messages = defineMessages({
  newButtonLablel: {
    id: 'Header.newButton.label',
    defaultMessage: 'New invoice',
  },
  searchPlaceholder: {
    id: 'Header.search.placeholder',
    defaultMessage: 'Inventory, invoice number'
  }
});

const Header = ({ intl: { formatMessage } }) => (
  <header className={styles.header}>
    <Link to="/" className={styles.logo}>Warehouse</Link>
    <nav className={styles.navbar}>
      <form className={styles.left}>
        <Button label={formatMessage(messages.newButtonLablel)} type='primary' />
      </form>
      <form className={styles.right}>
        <Button>
          <Icon name='user' />
        </Button>
      </form>
      <form className={styles.centre}>
        <div className={styles.search}>
          <input className={styles.field} placeholder={formatMessage(messages.searchPlaceholder)}></input>
          <span className={styles.buttonGroup}>
            <Button>
              <Icon name='search' />
            </Button>
          </span>
        </div>
      </form>
    </nav>
  </header>
);

export default injectIntl(Header);
