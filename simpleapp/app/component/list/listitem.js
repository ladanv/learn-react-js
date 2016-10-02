import React, { Component } from 'react';

const ListItem = ({ item }) =>
    <a href={'/inventory-item/' + item.id} className='list-group-item'>
        <h5 className='list-group-item-heading'>{item.name} <small>{item.category}</small></h5>
        <p className='list-group-item-text'>{item.description}</p>
    </a>;

ListItem.propTypes = {
    item: React.PropTypes.shape({
        id: React.PropTypes.number.isRequired,
        name: React.PropTypes.string,
        description: React.PropTypes.string,
        category: React.PropTypes.string
    })
};

export default ListItem;