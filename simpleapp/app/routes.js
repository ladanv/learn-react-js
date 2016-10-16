import React from 'react';
import { Route, IndexRoute } from 'react-router'

import App from './component/App';
import Home from './component/Home';
import Warehouse from './component/Warehouse';
import Settings from './component/Settings';
import InventItemList from './component/InventItemList';
import InventItem from './component/InventItem';
import NotFound from './component/NotFound';

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/inventory' component={InventItemList} />
            <Route path='/inventory/:itemId' component={InventItem} />
            <Route path='/warehouse' component={Warehouse} />
            <Route path='/settings' component={Settings} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
 );
