import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const ListItem = ({ item }) => (
    <Link to={item.url} className='list-group-item'>
        <h5 className='list-group-item-heading'>{item.name} <small>{item.category}</small></h5>
        <p className='list-group-item-text'>{item.description}</p>
    </Link>
);

ListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string,
        description: PropTypes.string,
        category: PropTypes.string
    })
};

export default ListItem;
