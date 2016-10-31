import React from 'react';
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
            <span >{item.name}</span>
            {item.description ? <span>&ensp;{item.description}</span> : null}
            <span >&ensp;{item.category}</span>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default InventoryItems;
