import React, { Component } from 'react';

const NavBar = ({ appName }) => (
    <nav className='navbar navbar-inverse'>
        <div className='container-fluid'>
            <div className='navbar-header'>
                <a className='navbar-brand' href='#'>
                    {appName}
                </a>
            </div>
            <form className='navbar-form navbar-left' role='search'>
                <div className='form-group'>
                    <input type='text' className='form-control' placeholder='Search' />
                </div>
                <button type='submit' className='btn btn-default'>Submit</button>
            </form>

        </div>
    </nav>
    );

export default NavBar;