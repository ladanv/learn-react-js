import React, { PropTypes } from 'react';

import ListItem from './ListItem';

const ListGroup = ({ items }) => (
    <div className='list-group'>
        {items.map((item) =>  <ListItem key={item.id} item={item} />)}
    </div>
);

ListGroup.propTypes = {
    items: PropTypes.array.isRequired
};

export default ListGroup;
