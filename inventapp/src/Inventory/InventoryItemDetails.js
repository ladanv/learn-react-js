import React from 'react';
import { FormattedMessage, injectIntl, defineMessages } from 'react-intl';
import { Form, TextField, ActionPanel } from '../Form';
import Button from '../Button';
import styles from './InventoryItemDetails.scss';

const messages = defineMessages({
  nameLabel: {
    id: 'InventoryItemDetails.name.label',
    defaultMessage: 'Name',
  },
  namePlaceholder: {
    id: 'InventoryItemDetails.name.placeholder',
    defaultMessage: 'Short name',
  },
  desctiptionLabel: {
    id: 'InventoryItemDetails.desctiption.label',
    defaultMessage: 'Description',
  },
  desctiptionPlaceholder: {
    id: 'InventoryItemDetails.desctiption.placeholder',
    defaultMessage: 'Full description',
  },
  categoryLabel: {
    id: 'InventoryItemDetails.category.label',
    defaultMessage: 'Category',
  },
  categoryPlaceholder: {
    id: 'InventoryItemDetails.category.placeholder',
    defaultMessage: 'Category',
  },
  buttonSave: {
    id: 'InventoryItemDetails.button.save.label',
    defaultMessage: 'Save',
  },
  buttonCancel: {
    id: 'InventoryItemDetails.button.cancel.label',
    defaultMessage: 'Cancel',
  }
});

const InventoryItemDetails = ({ item, handleItemChange, handleItemSave, handleItemCancel, intl: { formatMessage } }) => {

  return (
    <div>
      <h1 className={styles.title} >
        <FormattedMessage
          id={'InventoryItemDetails.title'}
          defaultMessage={'Inventory item - {id}'}
          values={{id: item.id}} />
      </h1>
      <Form>
        <TextField id='name'
          name='name'
          label={formatMessage(messages.nameLabel)}
          value={item.name}
          placeholder={formatMessage(messages.namePlaceholder)}
          handleChange={handleItemChange}
          focused />
        <TextField id='description'
          name='description'
          label={formatMessage(messages.desctiptionLabel)}
          value={item.description}
          placeholder={formatMessage(messages.desctiptionPlaceholder)}
          handleChange={handleItemChange} />
        <TextField id='category'
          name='name'
          label={formatMessage(messages.categoryLabel)}
          value={item.category}
          placeholder={formatMessage(messages.categoryPlaceholder)}
          handleChange={handleItemChange} />
        <ActionPanel>
          <Button label={formatMessage(messages.buttonCancel)}
            onClick={handleItemCancel} />
          <Button label={formatMessage(messages.buttonSave)}
            type='primary'
            onClick={handleItemSave} />
        </ActionPanel>
      </Form>
    </div>
  );
}

export default injectIntl(InventoryItemDetails);
