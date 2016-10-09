import React, { Component } from 'react';

import config from '../../config';

import NavBar from './nav/navbar';
import SideNav from './nav/sidenav';

var menuItems = [{
    id: 1,
    label: config.menuInventory,
    url: '/inventory'
}, {
    id: 2,
    label: config.menuWarehouse,
    url: '/warehouse'
}, {
    id: 3,
    label: config.menuSettings,
    url: '/settings'
}];

class App extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <div className='row'>
                    <div className='col-md-2'>
                        <SideNav items={menuItems} />
                    </div>
                    <div className='col-md-8'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
