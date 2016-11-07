import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';
import { List, ListItem } from '../List';
import styles from './InventoryItems.scss';

const InventoryItems = ({ items }) => {

  return (
    <div>
      <h1 className={styles.title} >
        <FormattedMessage
          id={'InventoryItems.title'}
          defaultMessage={'Inventory items'}
        />
      </h1>
      <List>
        {items.map((item) => (
          <ListItem key={item.id} >
            <Link to={item.url} >
              <span className={styles.accent} >{item.name}</span>
              {item.description ? <span className={styles.secondary} >&ensp;{item.description}</span> : null}
              <span className={styles.secondary} >&ensp;{item.category}</span>
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default InventoryItems;
