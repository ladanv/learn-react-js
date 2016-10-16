import React from 'react'
import { Link } from 'react-router'

const NotFound = () => (
    <div className='container'>
        <div className='row'>
            <div className='col-md-12'>
                Страница не найдена. Вернуться на <Link to='/'>главную</Link>?
            </div>
        </div>
    </div>
);

export default NotFound;
