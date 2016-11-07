import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form, TextField, ActionPanel } from '../Form';
import Button from '../Button';
import styles from './InventoryItemDetails.scss';

const InventoryItemDetails = ({ item, handleItemChange, handleItemSave, handleItemCancel }) => {

  return (
    <div>
      <h1 className={styles.title} >
        <FormattedMessage
          id={'InventoryItemDetails.title'}
          defaultMessage={'Inventory item - {id}'}
          values={{id: item.id}}
        />
      </h1>
      <Form>
        <TextField id='name' name='name' label='Name' value={item.name}
          placeholder='Short name'
          handleChange={handleItemChange} focused />
        <TextField id='description' name='description' label='Description' value={item.description}
          placeholder='Full description'
          handleChange={handleItemChange} />
        <TextField id='category' name='category' label='Category' value={item.category}
          placeholder='Category'
          handleChange={handleItemChange} />
        <ActionPanel>
          <Button label='Cancel' onClick={handleItemCancel} />
          <Button label='Save' type='primary' onClick={handleItemSave} />
        </ActionPanel>
      </Form>
    </div>
  );
}

export default InventoryItemDetails;
