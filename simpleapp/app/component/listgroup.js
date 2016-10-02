import React, { Component } from 'react';

import ListItem from './ListItem';

const ListGroup = ({ items }) => 
    <div className='list-group'>
        { items.map(function(item) {
            return <ListItem key={item.id} item={item} />;
        })}
    </div>;

ListGroup.propTypes = {
    items: React.PropTypes.array.isRequired
};

export default ListGroup;