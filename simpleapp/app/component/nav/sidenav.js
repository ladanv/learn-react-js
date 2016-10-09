import React, { Component, PropTypes } from 'react';

import SideNavItem from './sidenavitem';

class SideNav extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul className='nav nav-pills nav-stacked'>
                { this.props.items.map((menuItem) =>
                    <SideNavItem
                        key={menuItem.id}
                        item={menuItem}
                        active={new RegExp('^\\' + menuItem.url).test(this.props.location.pathname)}
                        />
                )}
            </ul>
        );
    }
}

// SideNavItem.propTypes = {
//
// };

export default SideNav;
