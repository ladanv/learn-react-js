import React from 'react';

const SideNavItem = ({ item }) => (
    <li role='presentation' className=''>
        <a href='#'>{item.label}</a>
    </li>
);

export default SideNavItem;