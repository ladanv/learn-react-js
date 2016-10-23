import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Home from './Home';
import { InventoryItems, InventoryItemDetails } from './Inventory';
import NotFound from './NotFound';

export const routes = (
  <div>
    <Route path='/' component={App} >
        <IndexRoute component={Home} />
        <Route path='/inventory-items' component={InventoryItems} />
        <Route path='/inventory-items/:id' component={InventoryItemDetails} />
    </Route>
    <Route path='*' component={NotFound} />
  </div>
);
