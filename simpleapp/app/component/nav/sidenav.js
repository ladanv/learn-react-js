import React, { Component, PropTypes } from 'react';

import SideNavItem from './sidenavitem';

class SideNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            menuItems: props.items
        };
    }

    render() {
        return (
            <ul className='nav nav-pills nav-stacked'>
                { this.state.menuItems.map((menuItem) =>
                    <SideNavItem key={menuItem.id} item={menuItem} />
                )}
            </ul>
        );
    }
}

// SideNavItem.propTypes = {
//
// };

export default SideNav;
