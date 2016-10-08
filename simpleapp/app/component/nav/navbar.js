import React from 'react';

import config from '../../../config';

const NavBar = () => (
    <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    {config.appName}
                </a>
            </div>
            <form className='navbar-form navbar-left' role='search'>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder={config.navBarSearchPlaceholder} />
                </div>
                <button type='submit' className='btn btn-default'>{config.navBarBtnSearch}</button>
            </form>

        </div>
    </nav>
);

export default NavBar;
