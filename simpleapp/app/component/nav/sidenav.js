import React, { Component, PropTypes } from 'react';

import SideNavItem from './sidenavitem';

class SideNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            activeMenuItemId: null
        };
    }

    handleActiveMenuItemChange(id) {
        console.log('handleClick', id);
        this.setState({activeMenuItemId: id});
    }

    render() {
        return (
            <ul className='nav nav-pills nav-stacked'>
                { this.props.items.map((menuItem) =>
                    <SideNavItem
                        key={menuItem.id}
                        item={menuItem}
                        active={this.state.activeMenuItemId === menuItem.id}
                        onActiveChange={this.handleActiveMenuItemChange.bind(this)}
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
