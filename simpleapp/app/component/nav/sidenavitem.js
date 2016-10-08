import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const SideNavItem = ({ item }) => (
    <li role='presentation'>
        <Link to={item.url} >{item.label}</Link>
    </li>
);

SideNavItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })
};

export default SideNavItem;
