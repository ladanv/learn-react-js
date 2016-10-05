import React, { PropTypes } from 'react';

import Panel from './panel/Panel';
import Form from './form/Form';
import InputFormGroup from './form/InputFormGroup';
import TextFormGroup from './form/TextFormGroup';

const InventItem = ({ header, item }) => (
    <Panel header={header}>
        <Form>
            <InputFormGroup id='name' label='Наименование' placeholder='Краткое наименование' 
                value={item.name} />
            <InputFormGroup id='category' label='Категория' placeholder='Категория' 
                value={item.category} />
            <TextFormGroup id='description' label='Описание' placeholder='Подробное описание' 
                value={item.description} />
        </Form>
    </Panel>
);

InventItem.propTypes = {
    item:  PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string
    })
};

export default InventItem;
    