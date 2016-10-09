import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class SideNavItem extends Component {

    render() {
        var item = this.props.item;
        return (
            <li className={this.props.active ? 'active' : ''} role='presentation'>
                <Link to={item.url} >{item.label}</Link>
            </li>
        );
    }
};

SideNavItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired
    })
};

export default SideNavItem;
