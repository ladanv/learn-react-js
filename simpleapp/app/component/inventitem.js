import React, { Component } from 'react';

import Form from './form/Form';
import InputFormGroup from './form/InputFormGroup';
import TextFormGroup from './form/TextFormGroup';

const InventItem = ({ item }) => (
    <Form>
        <InputFormGroup id='name' label='Наименование' placeholder='Краткое наименование' 
            value={item.name} />
        <InputFormGroup id='category' label='Категория' placeholder='Категория' 
            value={item.category} />
        <TextFormGroup id='description' label='Описание' placeholder='Подробное описание' 
            value={item.description} />
    </Form>
    );

InventItem.propTypes = {
    item:  React.PropTypes.shape({
        name: React.PropTypes.string,
        category: React.PropTypes.string,
        description: React.PropTypes.string
    })
};

export default InventItem;
    