import React from 'react';
import { Link } from 'react-router';

const SideNavItem = ({ item }) => (
    <li role='presentation' className=''>
        <Link to={item.url}>{item.label}</Link>
    </li>
);

export default SideNavItem;